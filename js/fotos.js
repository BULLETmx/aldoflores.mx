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
  { archivo: "londres-parada.jpg",        titulo: "No stopping",          serie: "Ciudad",     portada: true },
  { archivo: "cuarto-ventana.jpg",        titulo: "Ventana",              serie: "Interiores" },
  { archivo: "banca-lago.jpg",            titulo: "Banca frente al lago", serie: "Paisaje" },
  { archivo: "bus-stop.jpg",              titulo: "Bus stop",             serie: "Ciudad" },
  { archivo: "escalera.jpg",              titulo: "Escalera",             serie: "Interiores" },
  { archivo: "farol-arboles.jpg",         titulo: "Farol",                serie: "Paisaje" },
  { archivo: "berlin-columna.jpg",        titulo: "Siegessäule",          serie: "Ciudad" },
  { archivo: "sala.jpg",                  titulo: "Sala",                 serie: "Interiores" },
  { archivo: "los-pinchos.jpg",           titulo: "Los Pinchos",          serie: "Ciudad" },
  { archivo: "encaje-ventana.jpg",        titulo: "Encaje, ventana",      serie: "Interiores" },
  { archivo: "magnolias-iglesia.jpg",     titulo: "Magnolias",            serie: "Paisaje" },
  { archivo: "calle-anochecer.jpg",       titulo: "Anochecer",            serie: "Ciudad" },
  { archivo: "planta.jpg",                titulo: "Planta",               serie: "Interiores" },
  { archivo: "barra.jpg",                 titulo: "Barra",                serie: "Interiores" },
  { archivo: "estacionamiento-noche.jpg", titulo: "Estacionamiento",      serie: "Ciudad" },
  { archivo: "recamara-roja.jpg",         titulo: "Pared roja",           serie: "Interiores" },
  { archivo: "parque-secuoya.jpg",        titulo: "Secuoya",              serie: "Paisaje" },
  { archivo: "waitrose.jpg",              titulo: "Waitrose",             serie: "Ciudad" },
  { archivo: "encaje-barandal.jpg",       titulo: "Encaje, barandal",     serie: "Interiores" },
  { archivo: "edificio-arboles.jpg",      titulo: "Fachada y hojas",      serie: "Ciudad" },
  { archivo: "pan.jpg",                   titulo: "Pan",                  serie: "Interiores" },
  { archivo: "cocineta.jpg",              titulo: "Cocineta",             serie: "Interiores" },
  { archivo: "cuarto-televisor.jpg",      titulo: "Habitación",           serie: "Interiores" },
  { archivo: "cocina.jpg",                titulo: "Cocina",               serie: "Interiores" },
];
