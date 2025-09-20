# 🔍 Scripts de Análisis Git

## Scripts utilizados para la auditoría

### 1. Análisis de contribuciones por autor
```bash
# Obtener estadísticas de commits por autor
git shortlog -s -n --all

# Resultado:
#     48  DESKTOP-I26BE1C\User
#     42  nathalyparedes  
#     38  Bomberiux
#      2  mariaponce\User
#      1  Maria Ponce
```

### 2. Análisis de commits por autor específico
```bash
# Ver commits de un autor específico
git log --author="DESKTOP-I26BE1C" --oneline -10
git log --author="nathalyparedes" --oneline -10
git log --author="Bomberiux" --oneline -10
git log --author="mariaponce" --oneline -10
```

### 3. Análisis detallado de commits importantes
```bash
# Ver detalles y archivos modificados de un commit
git show --stat bf4c11e  # Sistema de facturación
git show --stat 8f91026  # PDF de facturas
git show --stat 4afd93f  # Sistema de búsqueda
git show --stat c74f2cf  # Aplicación móvil
```

### 4. Script de auditoría completa
```bash
#!/bin/bash
# audit-repo.sh

echo "=== AUDITORÍA DEL REPOSITORIO ==="
echo "Fecha: $(date)"
echo ""

echo "--- Contribuidores y commits ---"
git shortlog -s -n --all
echo ""

echo "--- Últimos 20 commits generales ---"
git log --oneline -20
echo ""

echo "--- Análisis por autor ---"
for author in "DESKTOP-I26BE1C" "nathalyparedes" "Bomberiux" "mariaponce"; do
    echo "\n=== Commits de $author ==="
    git log --author="$author" --oneline -5
done

echo ""
echo "=== FIN DE AUDITORÍA ==="
```

### 5. Comandos de verificación
```bash
# Verificar estructura del repositorio
find . -name "*.php" -o -name "*.ts" -o -name "*.html" | head -20

# Contar archivos por tipo
echo "Archivos PHP: $(find . -name '*.php' | wc -l)"
echo "Archivos TypeScript: $(find . -name '*.ts' | wc -l)"
echo "Archivos HTML: $(find . -name '*.html' | wc -l)"

# Ver ramas del repositorio
git branch -a
```

## Cómo usar estos scripts

1. Clonar el repositorio:
   ```bash
   git clone https://gitlab.com/public-universidad/pi-app-web-lavanderia-bs.git
   cd pi-app-web-lavanderia-bs
   ```

2. Ejecutar scripts de análisis:
   ```bash
   chmod +x audit-repo.sh
   ./audit-repo.sh > auditoria-resultado.txt
   ```

3. Analizar commits específicos:
   ```bash
   git show --stat [hash-del-commit]
   ```

## Notas importantes

- Los scripts están diseñados para funcionar en sistemas Unix/Linux
- Algunos autores tienen nombres con caracteres especiales que requieren escaping
- Los resultados pueden variar según la configuración local de git
- Se recomienda usar `timeout` para comandos que puedan colgarse en repositorios grandes
