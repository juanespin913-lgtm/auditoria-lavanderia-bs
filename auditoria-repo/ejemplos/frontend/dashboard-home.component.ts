import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';

/**
 * Ejemplo basado en el commit 28a5f49 de nathalyparedes
 * Dashboard Home con Indicadores Visuales
 * 
 * Este componente representa los cambios importantes
 * en el dashboard principal del sistema
 */

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  pedidos: any[] = [];
  estadisticas = {
    totalPedidos: 0,
    porRecoger: 0,
    atrasados: 0,
    completados: 0
  };

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.cargarDashboard();
  }

  /**
   * Cargar datos del dashboard
   * Nuevo método agregado en el commit 28a5f49
   */
  cargarDashboard(): void {
    this.pedidosService.obtenerPedidosDashboard().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.calcularEstadisticas();
        this.aplicarIndicadoresVisuales();
      },
      error: (error) => {
        console.error('Error cargando dashboard:', error);
      }
    });
  }

  /**
   * Aplicar indicadores visuales por estado
   * Funcionalidad clave: Amarillo para "por recoger", Rojo para "atrasados"
   */
  aplicarIndicadoresVisuales(): void {
    this.pedidos.forEach(pedido => {
      const fechaLimite = new Date(pedido.fecha_limite);
      const hoy = new Date();
      
      if (pedido.estado === 'POR_RECOGER') {
        pedido.claseEstilo = 'fila-amarilla'; // Pedidos por recoger
      } else if (fechaLimite < hoy && pedido.estado !== 'COMPLETADO') {
        pedido.claseEstilo = 'fila-roja'; // Pedidos atrasados
      } else {
        pedido.claseEstilo = 'fila-normal';
      }
    });
  }

  /**
   * Calcular estadísticas para el dashboard
   * Método para mostrar métricas importantes
   */
  calcularEstadisticas(): void {
    this.estadisticas.totalPedidos = this.pedidos.length;
    this.estadisticas.porRecoger = this.pedidos.filter(p => p.estado === 'POR_RECOGER').length;
    this.estadisticas.atrasados = this.pedidos.filter(p => {
      const fechaLimite = new Date(p.fecha_limite);
      const hoy = new Date();
      return fechaLimite < hoy && p.estado !== 'COMPLETADO';
    }).length;
    this.estadisticas.completados = this.pedidos.filter(p => p.estado === 'COMPLETADO').length;
  }

  /**
   * Obtener clase CSS para la fila según el estado
   * Sistema de indicadores visuales implementado
   */
  obtenerClaseFila(pedido: any): string {
    return pedido.claseEstilo || 'fila-normal';
  }

  /**
   * Filtrar pedidos por estado
   * Funcionalidad de filtrado agregada
   */
  filtrarPorEstado(estado: string): void {
    if (estado === 'TODOS') {
      this.cargarDashboard();
    } else {
      this.pedidos = this.pedidos.filter(p => p.estado === estado);
    }
  }

  /**
   * Actualizar estado de un pedido
   * Método para cambios rápidos desde el dashboard
   */
  actualizarEstadoPedido(pedidoId: number, nuevoEstado: string): void {
    this.pedidosService.actualizarEstado(pedidoId, nuevoEstado).subscribe({
      next: (response) => {
        this.cargarDashboard(); // Recargar para actualizar indicadores
      },
      error: (error) => {
        console.error('Error actualizando estado:', error);
      }
    });
  }
}

/**
 * IMPACTO DEL CAMBIO:
 * - Dashboard principal con información inmediata al login
 * - Sistema de alertas visuales (amarillo/rojo)
 * - Monitoreo en tiempo real de pedidos
 * - Mejora significativa en UX/UI
 * 
 * VALOR PARA EL NEGOCIO: ⭐⭐⭐⭐⭐
 * Mejora operativa y experiencia del usuario
 */