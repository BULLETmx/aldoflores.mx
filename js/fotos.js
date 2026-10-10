// Lista de fotografías del sitio.
// Para añadir una foto: cópiala a la carpeta /fotos y agrega una entrada aquí.
// El orden de esta lista es el orden en que aparecen en la galería.
//
//   archivo:     nombre del archivo dentro de /fotos
//   titulo:      título de la obra
//   serie:       nombre de la serie (se crea un filtro por cada serie distinta)
//   anio:        año (opcional)
//   descripcion: texto breve que aparece al ampliar la foto (opcional)
//   portada:     true para usarla como imagen de portada (solo una)

const FOTOS = [
  { archivo: "londres-parada.jpg",   titulo: "No stopping",       serie: "Ciudad",   portada: true },
  { archivo: "berlin-columna.jpg",   titulo: "Siegessäule",       serie: "Ciudad" },
  { archivo: "planta.jpg",           titulo: "Planta",            serie: "Interior" },
  { archivo: "edificio-arboles.jpg", titulo: "Fachada y hojas",   serie: "Ciudad" },
  { archivo: "cocina.jpg",           titulo: "Cocina",            serie: "Interior" },
];
