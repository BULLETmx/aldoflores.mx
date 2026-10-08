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
  { archivo: "niebla-01.jpg",   titulo: "Sin título I",   serie: "Niebla",   anio: 2025, portada: true },
  { archivo: "desierto-01.jpg", titulo: "Horizonte",      serie: "Desierto", anio: 2024 },
  { archivo: "ciudad-01.jpg",   titulo: "Nocturno",       serie: "Ciudad",   anio: 2025 },
  { archivo: "niebla-02.jpg",   titulo: "Sin título II",  serie: "Niebla",   anio: 2025 },
  { archivo: "desierto-02.jpg", titulo: "Duna",           serie: "Desierto", anio: 2024, descripcion: "Impresión de pigmento, 60 × 80 cm." },
  { archivo: "ciudad-02.jpg",   titulo: "Último tren",    serie: "Ciudad",   anio: 2023 },
  { archivo: "niebla-03.jpg",   titulo: "Sin título III", serie: "Niebla",   anio: 2026 },
  { archivo: "ciudad-03.jpg",   titulo: "Azotea",         serie: "Ciudad",   anio: 2026 },
  { archivo: "desierto-03.jpg", titulo: "Mediodía",       serie: "Desierto", anio: 2024 },
];
