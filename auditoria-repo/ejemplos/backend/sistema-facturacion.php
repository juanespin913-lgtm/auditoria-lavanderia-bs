<?php
/**
 * Ejemplo basado en el commit bf4c11e de Maria Ponce
 * Sistema de Facturación - Controlador de Pedidos
 * 
 * Este archivo representa el tipo de cambios importantes
 * realizados en el sistema de facturación del proyecto
 */

class PedidosController {
    
    /**
     * Obtener pedidos para facturar
     * Cambio importante: Se agregaron campos de estado_pedido y estado_facturacion
     */
    public function obtenerPedidosParaFacturar() {
        $sql = "CALL sp_obtener_pedidos_facturar()"; // SP actualizado con nuevos campos
        
        try {
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();
            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Nuevo: Filtrar solo pedidos no cancelados para facturación
            $pedidosValidos = array_filter($resultado, function($pedido) {
                return $pedido['estado_pedido'] !== 'CANCELADO' && 
                       $pedido['estado_facturacion'] !== 'FACTURADO';
            });
            
            return $pedidosValidos;
            
        } catch (Exception $e) {
            error_log("Error en obtenerPedidosParaFacturar: " . $e->getMessage());
            return [];
        }
    }
    
    /**
     * Actualizar estado de facturación
     * Funcionalidad clave agregada en el commit bf4c11e
     */
    public function actualizarEstadoFacturacion($pedidoId, $estadoFacturacion) {
        $sql = "UPDATE pedidos SET estado_facturacion = :estado, 
                fecha_facturacion = NOW() WHERE id = :pedido_id";
        
        try {
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':estado', $estadoFacturacion);
            $stmt->bindParam(':pedido_id', $pedidoId);
            
            return $stmt->execute();
            
        } catch (Exception $e) {
            error_log("Error actualizando estado facturación: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Obtener estadísticas de facturación
     * Nuevo método para reportes
     */
    public function obtenerEstadisticasFacturacion($fechaInicio, $fechaFin) {
        $sql = "SELECT 
                    COUNT(*) as total_pedidos,
                    SUM(CASE WHEN estado_facturacion = 'FACTURADO' THEN 1 ELSE 0 END) as facturados,
                    SUM(CASE WHEN estado_facturacion = 'PENDIENTE' THEN 1 ELSE 0 END) as pendientes,
                    SUM(total) as monto_total
                FROM pedidos 
                WHERE fecha_pedido BETWEEN :fecha_inicio AND :fecha_fin";
        
        try {
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':fecha_inicio', $fechaInicio);
            $stmt->bindParam(':fecha_fin', $fechaFin);
            $stmt->execute();
            
            return $stmt->fetch(PDO::FETCH_ASSOC);
            
        } catch (Exception $e) {
            error_log("Error en estadísticas: " . $e->getMessage());
            return null;
        }
    }
}

/**
 * IMPACTO DEL CAMBIO:
 * - Sistema de facturación funcional completo
 * - Integración con base de datos mejorada
 * - Estados de pedidos y facturación controlados
 * - Base para reportes y estadísticas
 * 
 * VALOR PARA EL NEGOCIO: ⭐⭐⭐⭐⭐
 * Funcionalidad crítica para operaciones fiscales
 */
?>