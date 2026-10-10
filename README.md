# aldoflores.mx

Sitio de fotografía artística de Aldo Flores. HTML, CSS y JavaScript sin dependencias ni paso de compilación.

## Ver en local

```sh
python3 -m http.server 8000
```

y abre http://localhost:8000

## Añadir o cambiar fotos

1. Copia la imagen a `fotos/` (JPG, ~2000 px en el lado largo y calidad 80 es un buen equilibrio entre nitidez y peso).
2. Agrega una entrada en `js/fotos.js` con `archivo`, `titulo` y `serie`.

Cada `serie` distinta genera un filtro sobre la galería. Marca una foto con `portada: true` para usarla en la portada.

## Textos

El texto de "Acerca", el correo y las redes están en `index.html`.

## Publicar

El repositorio está listo para GitHub Pages (`CNAME` apunta a `aldoflores.mx`).
En GitHub: Settings → Pages → Deploy from branch → `main` / root. Después configura el DNS del dominio
con registros `A` hacia las IP de GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153).
