(function () {
  const galeria = document.getElementById("galeria");
  const series = document.querySelector(".series");
  const visor = document.getElementById("visor");
  const visorImg = document.getElementById("visor-img");
  const visorPie = document.getElementById("visor-pie");

  let visibles = FOTOS;
  let actual = 0;

  const ruta = (f) => "fotos/" + f.archivo;

  // Portada
  const portada = FOTOS.find((f) => f.portada) || FOTOS[0];
  if (portada) document.getElementById("portada-img").src = ruta(portada);

  // Filtros por serie
  const nombres = ["Todas", ...new Set(FOTOS.map((f) => f.serie).filter(Boolean))];
  if (nombres.length > 2) {
    nombres.forEach((nombre, i) => {
      const b = document.createElement("button");
      b.textContent = nombre;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === 0);
      b.addEventListener("click", () => {
        series.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
        visibles = i === 0 ? FOTOS : FOTOS.filter((f) => f.serie === nombre);
        pintar();
      });
      series.appendChild(b);
    });
  }

  function pintar() {
    galeria.innerHTML = "";
    visibles.forEach((f, i) => {
      const a = document.createElement("a");
      a.href = ruta(f);
      a.className = "pieza";
      a.innerHTML = `<img loading="lazy" decoding="async" alt=""><span class="pieza-titulo"></span>`;
      a.querySelector("img").src = ruta(f);
      a.querySelector("img").alt = f.titulo || "";
      a.querySelector(".pieza-titulo").textContent = f.titulo || "";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        abrir(i);
      });
      galeria.appendChild(a);
    });
  }

  function mostrar(i) {
    actual = (i + visibles.length) % visibles.length;
    const f = visibles[actual];
    visorImg.src = ruta(f);
    visorImg.alt = f.titulo || "";
    const datos = [f.titulo, f.serie, f.anio].filter(Boolean).join(" · ");
    visorPie.innerHTML = "";
    visorPie.append(datos);
    if (f.descripcion) {
      const d = document.createElement("span");
      d.className = "visor-desc";
      d.textContent = f.descripcion;
      visorPie.append(d);
    }
  }

  function abrir(i) {
    mostrar(i);
    visor.hidden = false;
    document.body.style.overflow = "hidden";
    visor.querySelector(".visor-cerrar").focus();
  }

  function cerrar() {
    visor.hidden = true;
    document.body.style.overflow = "";
  }

  visor.querySelector(".visor-cerrar").addEventListener("click", cerrar);
  visor.querySelector(".visor-ant").addEventListener("click", () => mostrar(actual - 1));
  visor.querySelector(".visor-sig").addEventListener("click", () => mostrar(actual + 1));
  visor.addEventListener("click", (e) => {
    if (e.target === visor || e.target.tagName === "FIGURE") cerrar();
  });

  document.addEventListener("keydown", (e) => {
    if (visor.hidden) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowLeft") mostrar(actual - 1);
    if (e.key === "ArrowRight") mostrar(actual + 1);
  });

  // Deslizar en móvil
  let x0 = null;
  visor.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  visor.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // Desalentar descarga con clic derecho (no es protección real)
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });

  document.getElementById("anio").textContent = new Date().getFullYear();
  pintar();
})();
