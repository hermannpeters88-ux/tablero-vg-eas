# Tablero VG EAS — Grupo G

Tablero en vivo que se muestra en la **TV de la oficina** (Samsung 55", 1920×936).
Está hecho con GitHub Pages: los archivos de acá se publican solos en la web.

**Se ve en:** https://hermannpeters88-ux.github.io/tablero-vg-eas/

## Cómo funciona

La TV abre **`index.html`** (el "rotador"), que va cambiando solo entre 3 pantallas y vuelve a empezar:

1. **🏢 Edificio** (`edificio.html`) — 12 min — arranca acá. El edificio de Grupo G con los agentes/bots como personajes por empresa y piso, su estado en vivo, y cada bot llamando a su humano. Suma Cobros, Vencimientos y Robots.
2. **📊 Tablero** (`tablero.html`) — 10 min — el tablero operativo de VG.
3. **✅ Tareas** (`equipo.html`) — 4 min — tareas del equipo.

Con el control de la TV: aparecen botones para cambiar a mano; vuelve solo a automático.

## Qué es cada archivo

| Archivo | Qué es |
|---|---|
| `index.html` | Rotador principal (lo que abre la TV) |
| `tv.html` | Copia del rotador (respaldo) |
| `edificio.html` | Escena del Edificio (recorrido de los agentes) |
| `edificio_base.jpg` | Imagen de fondo del edificio |
| `l_gg.png` `l_vg.png` `l_ai.png` `l_dg.png` | Logos de cada empresa, usados en el edificio |
| `tablero.html` | Tablero operativo VG EAS |
| `equipo.html` | Pantalla de tareas del equipo |
| `cierre.html` | Cierre del mes — VG (lo abre el tablero) |
| `ledy.html` | Escritorio de Ledy (se abre por link directo) |
| `medicion.html` | Sábados libres / medición (link directo) |
| `oficina.html` | Maqueta "Oficina de Agentes" (link directo) |
| `sw.js` | Técnico del navegador |
| `README.md` | Este archivo |

## Regla de orden

En este repo va **solo lo que la TV usa**. No se suben capturas de pantalla ni versiones de prueba, para que no se desordene.
