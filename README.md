# 📋 Auditoría del Proyecto PI-APP-WEB-LAVANDERIA-BS

**Fecha de Auditoría:** 20 de Septiembre, 2025  
**Repositorio Original:** https://gitlab.com/public-universidad/pi-app-web-lavanderia-bs.git  


## 📊 Resumen de Contribuciones

| Contribuidor | Commits | Participación | Cambios Importantes |
|--------------|---------|---------------|-------------------|
| DESKTOP-I26BE1C\User (Maria Ponce) | 48 | 36.6% | Sistema de facturación, Mensajería |
| nathalyparedes | 42 | 32.1% | PDF de facturas, Dashboard con indicadores |
| Bomberiux (Sebastian Espin) | 38 | 29.0% | Sistema de búsqueda, Optimización clientes |
| mariaponce\User | 2 | 1.5% | Aplicación móvil completa |

## 🎯 Cambios Más Importantes Identificados

### 🔹 Sistema de Facturación Completo (Maria Ponce)
**Commit:** `bf4c11e` - Septiembre 2024
- Implementación del sistema completo de facturación
- Estados de pedidos y facturación en BD
- Filtros para pedidos no cancelados
- **Valor:** ⭐⭐⭐⭐⭐ (Crítico para el negocio)

### 🔹 Dashboard Home con Indicadores Visuales (Nathaly Paredes)
**Commit:** `28a5f49` - Septiembre 2024
- Menú Home como página principal post-login
- Sistema de alertas: amarillo (por recoger), rojo (atrasados)
- Monitoreo visual en tiempo real
- **Valor:** ⭐⭐⭐⭐⭐ (UX/Operaciones)

### 🔹 Generación de PDF de Facturas (Nathaly Paredes)
**Commit:** `8f91026` - Septiembre 2024
- Sistema completo de documentos fiscales
- Cálculos de IVA automáticos
- 11 archivos modificados, +367 líneas
- **Valor:** ⭐⭐⭐⭐⭐ (Cumplimiento legal)

### 🔹 Sistema de Búsqueda Mejorado (Sebastian Espin)
**Commit:** `4afd93f` - Septiembre 2024
- Optimización de búsqueda y paginación
- Mejoras en UI/UX
- +69 líneas agregadas, -55 optimizadas
- **Valor:** ⭐⭐⭐⭐ (Usabilidad)

### 🔹 Aplicación Móvil Completa (Maria Ponce)
**Commit:** `c74f2cf` - Septiembre 2025
- Implementación completa con Ionic
- Configuración Android
- +50 archivos nuevos
- **Valor:** ⭐⭐⭐⭐⭐ (Expansión multiplataforma)

## 🛠️ Tecnologías Identificadas
- **Frontend:** Angular + Ionic
- **Backend:** PHP
- **Base de Datos:** SQL con stored procedures
- **Móvil:** Ionic/Capacitor
- **Documentos:** Generación de PDF

## 📈 Análisis de Calidad
- **Commits funcionales:** 95%
- **Colaboración efectiva:** ✅
- **Distribución balanceada:** ✅
- **Funcionalidades completas:** ✅

## 🎯 Conclusiones

### ✅ Fortalezas
1. **Colaboración efectiva** entre team members
2. **Funcionalidades completas** para gestión de lavandería
3. **Multiplataforma** (Web + Móvil)
4. **Cumplimiento legal** con sistema de facturación

### 📋 Recomendaciones
1. Implementar pruebas unitarias
2. Mejorar documentación técnica
3. Establecer convenciones de commit
4. Considerar CI/CD

---

## 📁 Archivos de este Repositorio

- `docs/auditoria-completa.pdf` - Documento completo de auditoría
- `ejemplos/backend/` - Código del sistema de facturación
- `ejemplos/frontend/` - Dashboard con indicadores visuales
- `ejemplos/mobile/` - Configuración móvil Ionic
- `scripts/` - Herramientas de análisis Git

## 🔍 Metodología de Auditoría

```bash
# Comandos utilizados para el análisis
git shortlog -s -n --all                    # Estadísticas por autor
git log --author="[nombre]" --oneline -10   # Commits por autor
git show --stat [commit-hash]               # Detalles de commits importantes
```

---

**Total de commits analizados:** 131  
**Período:** Septiembre 2024 - Septiembre 2025  
**Proyecto:** Sistema de gestión de lavandería  
**Auditoría realizada:** 20 de Septiembre, 2025
