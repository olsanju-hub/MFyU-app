# MFyU aap

## Memoria Viva del Proyecto

**MFyU aap** es una plataforma clínica web modular para **Medicina Familiar y Comunitaria** y **Urgencias**. Está pensada como una herramienta de consulta y decisión en el punto de atención: biblioteca clínica operativa, algoritmos interactivos, herramientas reutilizables y vademécum integrado, con una base **offline-first** y sin dependencia de frameworks ni bundlers para funcionar.

## Objetivo clínico

La app no se plantea como landing, dashboard de métricas ni SPA de marketing. El objetivo es una herramienta clínica seria para:

- consultar protocolos y procedimientos desde un shell persistente
- resolver algoritmos dentro del mismo contexto de trabajo
- reutilizar scores y calculadoras desde protocolos y vademécum
- mantener favoritos, historial y preferencias en local
- seguir operativa offline para el contenido propio de la app

## Estado actual

- Motor central activo en `HTML + CSS + JavaScript vanilla`
- Catálogo indexado: **146 protocolos**, **12 procedimientos**, **49 herramientas**
- Vademécum interno acotado: **7 fichas farmacológicas realmente disponibles**, medicamentos detectados en guías pendientes de ficha y resolución oficial precisa hacia CIMA/AEMPS
- Algoritmos interactivos activos: **Crisis hipertensiva**, **Fibrilación auricular** y **Manejo de final de vida**
- Ajuste estético 26/03/2026: paleta clínica renovada, tipografía base ampliada, listados sobrios, navegación móvil reforzada y lectura de escritorio claramente aumentada
- Limpieza estructural 26/03/2026: home tipo hub, una sola cabecera por vista, navegación duplicada reducida y firma PNG global discreta
- Shell nuevo activo en `/core`, `/components` y `/apps`
- Registro y precache generados automáticamente por `generate_registry.py`
- Auditoría inicial de `biblio/` completada y mapeada a módulos clínicos prioritarios
- Integración local inicial de imágenes clínicas desde `biblio/` para `Espirometría` e `Hipopotasemia`
- Protocolos con desarrollo clínico operativo y trazable: **8**
- Algoritmos revisados frente a bibliografía disponible: **3 de 3**
- Índice documental completo de `biblio/` actualizado en `biblio/INDEX.md` con **144 documentos bibliográficos** clasificados por bloque clínico y prioridad de explotación

## Arquitectura

### Principios

- `index.html` actúa como app shell estable
- el shell no se rehace al navegar; cambia sólo la región central
- los contenidos clínicos viven en HTML independientes dentro de `/content`
- las apps de primer nivel viven en `/apps`
- el motor central resuelve rutas, carga módulos, actualiza chrome, búsqueda, favoritos, historial y algoritmo

### Estructura de carpetas

```text
/
├── index.html
├── README.md
├── manifest.json
├── sw.js
├── generate_registry.py
├── core/
│   ├── app-shell.css
│   ├── app-shell.js
│   ├── router.js
│   ├── registry.js
│   ├── precache-manifest.js
│   ├── search.js
│   ├── storage.js
│   └── utils.js
├── components/
│   ├── header.js
│   ├── nav.js
│   ├── drawer.js
│   └── toolbar.js
├── apps/
│   ├── inicio/index.html
│   ├── protocolos/index.html
│   ├── procedimientos/index.html
│   ├── herramientas/index.html
│   ├── vademecum/index.html
│   ├── buscar/index.html
│   └── favoritos/index.html
├── content/
│   ├── algorithms/
│   ├── protocolos/
│   ├── procedimientos/
│   ├── herramientas/
│   └── vademecum/
└── assets/
    ├── images/logo.svg
    └── icons/logo.png
```

## Limpieza de interfaz y navegación

### Duplicidades detectadas y eliminadas

- La home repetía navegación global y cabecera local; ahora queda como hub limpio con accesos principales reales.
- Las vistas de app repetían el título en header y dentro de la propia pantalla; se dejó una sola cabecera efectiva por vista.
- El drawer de sección duplicaba navegación por categorías; ahora se usa como contexto ligero con recientes y favoritos de la sección.
- El drawer mostraba metadatos demasiado largos y repetitivos; ahora resume por sección y categoría sin arrastrar resúmenes enteros.
- El Vademécum mezclaba alcance interno y salida oficial con copy demasiado técnico; ahora separa fichas disponibles, medicamentos pendientes de ficha y referencia oficial solo cuando hace falta.

### Organización actual

- `Inicio` funciona como hub limpio de acceso a `Protocolos`, `Procedimientos`, `Herramientas`, `Vademécum`, `Buscar` y `Favoritos`.
- `Protocolos`, `Procedimientos` y `Herramientas` abren con una sola estructura principal: header global + listado ligero agrupado.
- En escritorio, la portada no repite el menú lateral como sistema principal; el área central concentra el hub y el lateral queda reducido a identidad de producto.
- Los listados muestran solo el nombre del módulo y, cuando existe base real para ello, una señal discreta de estado.

### Estado de completitud

- `Completo` se usa para módulos con huella clara de validación.
- `Base` se usa para contenidos con base clínica operativa pero aún no tratados como catálogo totalmente cerrado.
- `En revisión` identifica plantillas, pendientes o desarrollo parcial.

### Firma visual global

- La firma PNG global vive en `assets/icons/logo.png`.
- Se muestra como firma editorial fija y discreta: esquina inferior derecha en escritorio y esquina inferior derecha sobre la barra móvil en pantallas táctiles.
- En escritorio ganó presencia suficiente para ser visible como firma constante; en móvil se mantiene más pequeña, sin fondo y fuera del flujo clínico.
- Esa ubicación la mantiene visible en todas las pantallas sin entrar en tarjetas clínicas, listados, barra inferior ni controles de trabajo.

### Mensajes internos y desbordes corregidos

- Se retiraron mensajes visibles que exponían rutas, estados internos o detalles técnicos del arranque.
- Las vistas no encontradas y las cargas fallidas ahora devuelven mensajes neutros, con salida clara a `Inicio` o `Buscar`.
- Se ajustaron pills, títulos, botones y tarjetas para evitar que los textos se salgan del contenedor en móvil o en listados estrechos.

## Cómo funciona el motor

### Shell

- `core/app-shell.js` crea el layout persistente
- `components/nav.js` renderiza sidebar de escritorio y bottom bar móvil
- `components/header.js` mantiene el encabezado y el buscador global
- `components/drawer.js` monta el panel contextual
- `components/toolbar.js` inyecta acciones contextuales al abrir un módulo clínico

### Router

- `core/router.js` resuelve:
  - rutas de app: `/`, `/protocolos`, `/procedimientos`, `/herramientas`, `/vademecum`, `/buscar`, `/favoritos`
  - rutas clínicas limpias: `/protocolos/<slug>`, `/procedimientos/<slug>`, `/herramientas/<slug>`, `/vademecum/<slug>`
  - rutas físicas legacy de `/content/...` si llegan desde enlaces existentes
- las vistas base del shell usan `source` relativo (`apps/.../index.html`) y la URL final se resuelve contra `core/base-path.js`
- la navegación se resuelve con `fetch()` de fragmentos HTML y actualización de la zona central

### Registro central

- `core/registry.js` se genera desde disco con `generate_registry.py`
- contiene:
  - navegación principal
  - resumen por sección
  - catálogo completo indexado
  - mapas `byId`, `byRoute` y `bySourcePath`
  - algoritmos asociados
  - relaciones entre módulos
  - flags internos del vademécum

## Carga de protocolos, procedimientos, herramientas y vademécum

### Protocolos

- cada protocolo vive en su HTML propio dentro de `content/protocolos/<categoria>/`
- el shell añade toolbar, favoritos, historial y acceso a algoritmo si existe
- ejemplo: `content/protocolos/cardiologia/fibrilacion-auricular.html`

### Procedimientos

- cada procedimiento vive en `content/procedimientos/`
- el motor los indexa y los presenta como fichas técnicas independientes

### Herramientas

- cada herramienta vive en `content/herramientas/<categoria>/`
- el HTML de la herramienta actúa como módulo
- la lógica interactiva reutilizable se inyecta desde `core/app-shell.js` mediante la tabla `TOOL_WIDGETS`

### Vademécum

- cada fármaco vive en `content/vademecum/<farmaco>.html`
- el detalle farmacológico se complementa con metadatos internos cargados desde `core/registry.js`
- el shell decide qué calculadoras mostrar según flags, sin inferirlas automáticamente desde CIMA
- la vista del Vademécum distingue entre fichas disponibles, medicamentos detectados en guías pendientes de ficha y referencia oficial externa
- el buscador del Vademécum prioriza ficha interna cuando existe; si no existe, resuelve hacia CIMA de la forma más precisa posible

### Estructura actual del Vademécum

- cabecera con buscador orientado a medicamentos usados en las guías o a resolución oficial en `CIMA/AEMPS`
- bloque de `Favoritos` con fichas internas guardadas
- bloque de `Recientes` con últimas fichas internas abiertas
- pestaña principal `Fichas y acceso oficial` como vista base real del Vademécum
- panel de `Cobertura interna actual` para dejar claro que no es un catálogo universal
- bloque de `Accesos farmacológicos útiles` con calculadoras o herramientas realmente necesarias para los fármacos ya modelados
- bloque de `Fichas internas disponibles` con tarjetas compactas para los medicamentos incorporados en la app
- bloque de `Medicamentos detectados en guías` para fármacos presentes en protocolos o procedimientos pero todavía pendientes de ficha propia
- pestaña `Dosis pediátrica` filtrada solo a fichas internas que ya tienen soporte pediátrico real
- pestaña `Interacciones` limitada a interacciones internas realmente modeladas

## Búsqueda global

La búsqueda vive en `core/search.js` y opera desde el primer día sobre:

- protocolos
- procedimientos
- herramientas
- vademécum
- favoritos
- historial

Comportamiento:

- buscador global persistente en header
- vista dedicada en `/buscar`
- filtros por sección, favoritos e historial
- resultados etiquetados por tipo y categoría
- la indexación se genera desde `generate_registry.py` usando título, resumen, categoría y texto clínico real de los módulos
- los módulos pueden aportar términos clínicos adicionales mediante `data-search-terms` sin tocar el motor de navegación

## Uso de /biblio

La auditoría real del repositorio muestra que actualmente solo existe la carpeta raíz `biblio/`: no hay subcarpetas temáticas activas en este workspace. El mapeo clínico debe hacerse, por tanto, contra los archivos reales de esa raíz y no contra estructuras supuestas.

La indexación documental completa queda mantenida en `biblio/INDEX.md`. Ese índice actúa como inventario operativo de la biblioteca local y agrupa los materiales por:

- bloque clínico
- módulos actuales o potenciales de la app
- documentos pendientes de conversión técnica
- prioridades de explotación futuras

Resumen actual del fondo:

- **144 documentos bibliográficos** en total, más `biblio/INDEX.md` como archivo de metadatos
- **132 PDF**, **3 PNG**, **3 DOC**, **1 JPG**, **1 TXT**, **1 TEXTCLIPPING**, **1 PPTX**, **1 ODT**, **1 ZIP**

### Auditoría temática actual

- `Arritmias / fibrilación auricular / cardioversión`: `CV electrica.pdf`, `CV farma.pdf`, `GPC-ESC-2024-fibrilacion-auricular.pdf`, `gd_EHRA.pdf`, `sedacion-y-analgesia.pdf`
- `Respiratorio agudo`: `GEMA_5.5.pdf`, `CRISIS DE ASMA 2017.pdf`, `GIDEP_Asma.pdf`, `Manejo practico del paciente con EPOC.pdf`, `epoc-gold-2025.pdf`, `VMNI.pdf`, `Ventilación2025.pdf`, `Neumonia SEPAR 2020.pdf`, `Neumonia Fisterra 2021.pdf`, `Neumonía comunitaria – Guía PRIOAM.pdf`
- `Función pulmonar`: `Espirometria.pdf`, `Interpretacion espiromeria FAES.pdf`, `Guía Rápida .pdf`, `ESPIROMETRIA - 1.png`, `ESPIROMETRIA - 2.png`
- `Electrolitos / metabólico`: `HK_Fisterra.pdf`, `HK_Samu.pdf`, `Hipokalemia definitivo.pdf`, `Hklemia .jpg`, `Enf renal cronica.pdf`
- `Oftalmología y trauma ocular`: `OFT- Urgencias oftalmológicas Traumatismos ( 17-1-19).pdf`
- `Final de vida / paliativos`: `Manejo_del_Final_de_Vida_en_Urgencias.pdf`, `2022_Recomendaciones-de-cuidados-al-final-de-la-vida-en-los-servicios-de-urgencias.pdf`, `protocolos-de-tratamiento-en-cuidados-paliativos-2023.pdf`, `secpal-comprender-cuidados-paliativos-3-sedacion-paliativa.pdf`, `Kit via subcutánea_032023-1.pdf`
- `ECG / electrocardiografía`: `ecg.pdf`, `Como entender un electrocardiograma.pdf`, `Electrocardiografía Básica.pdf`, `150 Problemas de ECG - Hampton 3ed.pdf` y equivalentes
- `Dislipemia / SCORE2`: `69_Dislipemia.pdf`, `Dislipemias_Definitivo_06_04_2022.pdf`, `Guía clínica de Dislipemias - Fisterra.pdf`, `Guia-ESC-2025-actualización-manejo-dislipemias.pdf`, `Nuevo modelo para el calculo del riesgo cardiovascular SCORE2 y SCORE2OP.pdf`, `20250605_Tabla-Score_edited.pdf`
- `Dermatología / NF1`: documentación NF1, manchas café con leche y rasopatías
- `Material todavía sin encaje directo en el catálogo actual`: `paracentesis.pdf`, `PARACENTESIS 2.pdf` y otros archivos útiles para posibles módulos futuros

### Mapeo activo inicial

- `Asma (exacerbación asmática)` usa `biblio/GEMA_5.5.pdf`, `biblio/CRISIS DE ASMA 2017.pdf` y `biblio/GIDEP_Asma.pdf`
- `Exacerbación aguda de EPOC` usa `biblio/Manejo practico del paciente con EPOC.pdf`, `biblio/epoc-gold-2025.pdf`, `biblio/VMNI.pdf` y `biblio/Ventilación2025.pdf`
- `Neumonía` usa `biblio/Neumonia SEPAR 2020.pdf`, `biblio/Neumonia Fisterra 2021.pdf` y `biblio/Neumonía comunitaria – Guía PRIOAM.pdf`
- `Hipopotasemia` usa `biblio/HK_Fisterra.pdf`, `biblio/HK_Samu.pdf`, `biblio/Hipokalemia definitivo.pdf` y `biblio/Hklemia .jpg`
- `Ventilación mecánica no invasiva` usa `biblio/VMNI.pdf`, `biblio/CuandoComoIniciarStop.pdf`, `biblio/Ventilación2025.pdf` y `biblio/recomendaciones-ers-ats-para-el-uso-de-la-ventilacion-no-2qs9vd0ws6.pdf`
- `Espirometría` usa `biblio/Guía Rápida .pdf`, `biblio/Espirometria.pdf`, `biblio/Interpretacion espiromeria FAES.pdf`, `biblio/ESPIROMETRIA - 1.png` y `biblio/ESPIROMETRIA - 2.png`
- `Crisis hipertensiva` se ancla a `biblio/crisis hta.pdf`, `biblio/Evaluación y tratamiento de emergencias hipertensivas en adultos - UpToDate.pdf` y `biblio/jones-et-al-2025-2025-aha-acc-aanp-aapa-abc-accp-acpm-ags-ama-aspc-nma-pcna-sgim-guideline-for-the-prevention-detection.pdf`
- `Manejo de final de vida` se ancla a `biblio/Manejo_del_Final_de_Vida_en_Urgencias.pdf`, `biblio/2022_Recomendaciones-de-cuidados-al-final-de-la-vida-en-los-servicios-de-urgencias.pdf`, `biblio/protocolos-de-tratamiento-en-cuidados-paliativos-2023.pdf` y `biblio/secpal-comprender-cuidados-paliativos-3-sedacion-paliativa.pdf`
- `Cardioversión eléctrica sincronizada` usa `biblio/CV electrica.pdf`, `biblio/CV farma.pdf`, `biblio/GPC-ESC-2024-fibrilacion-auricular.pdf` y `biblio/sedacion-y-analgesia.pdf`
- `Traumatismo ocular` usa `biblio/OFT- Urgencias oftalmológicas Traumatismos ( 17-1-19).pdf`

### Material auditado pendiente de integración clínica

- `DLP` y documentos de `SCORE2/SCORE2-OP`
- `Neurofibromatosis tipo 1` y documentación de manchas café con leche
- `OFTALMOLOGIA-URG 2011`
- `Enf renal cronica.pdf`
- material de `ECG`
- `paracentesis.pdf` y `PARACENTESIS 2.pdf` para posible ampliación futura del catálogo de procedimientos
- La clasificación fina del fondo documental completo y los formatos pendientes de conversión quedan trazados en `biblio/INDEX.md`

## Estado clínico validado

### Protocolos editados con desarrollo clínico operativo

- `Asma (exacerbación asmática)`
- `Exacerbación aguda de EPOC`
- `Neumonía`
- `Hipopotasemia`
- `Fibrilación auricular`
- `Crisis hipertensiva`
- `Manejo de final de vida`
- `Traumatismo ocular`

### Protocolos pendientes

- Todos los protocolos no listados en la sección anterior siguen pendientes de revisión bibliográfica exhaustiva y no deben considerarse clínicamente cerrados.
- Prioridad alta por impacto clínico: `Síndrome coronario agudo`, `Ictus agudo`, `Tromboembolismo pulmonar`, `Anafilaxia`, `Hiponatremia`, `Neumotórax`, `Glaucoma agudo` y `Ojo rojo agudo`.
- Parte de la documentación existente es reutilizable, pero esos módulos no se marcan como editados hasta completar una pasada clínica específica con trazabilidad y validación de algoritmo cuando proceda.

### Bibliografía usada por protocolo

- `Asma (exacerbación asmática)` — GEMA 5.5. Guía española para el manejo del asma; documento operativo de crisis asmática 2017; revisión clínica GIDEP sobre asma.
- `Exacerbación aguda de EPOC` — GOLD 2025; Manejo práctico del paciente con EPOC; documentación local de VMNI y ventilación no invasiva.
- `Neumonía` — SEPAR 2020. Neumonía adquirida en la comunidad; revisión clínica Fisterra 2021; guía PRIOAM de neumonía comunitaria.
- `Hipopotasemia` — Fisterra. Hipopotasemia; documentación SAMU de hipopotasemia; revisión práctica de hipokalemia y tabla local de objetivos de potasio.
- `Fibrilación auricular` — Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation; Steffel J, Collins R, Field M, et al. 2021 EHRA Practical Guide on the Use of NOACs in Patients with Atrial Fibrillation; Orjuela Guerrero A. Cardioversión eléctrica en fibrilación auricular. Rev Colomb Cardiol. 2016.
- `Crisis hipertensiva` — Jiménez M, Gavira JJ. Crisis hipertensiva. Guías de actuación en urgencias. 2018; Elliott WJ, Varon J. Evaluation and treatment of hypertensive emergencies in adults. UpToDate. 2026; AHA/ACC Joint Committee. 2025 Guideline for the prevention, detection, evaluation and management of high blood pressure in adults.
- `Manejo de final de vida` — Boqué Oliva C, Romero Pareja R, Herreros B. Recomendaciones de cuidados al final de la vida en los servicios de urgencias. Emergencias. 2022; Benítez-Rosario MA, Alonso Babarro A, González Guillermo T. Protocolos de tratamiento en cuidados paliativos. 2023; Ascanio León B, Castillo Padrós M, Benítez del Rosario MA. Sedación paliativa. SECPAL; guía local de vía subcutánea en cuidados paliativos. 2023.
- `Traumatismo ocular` — actualización de urgencias oftalmológicas traumáticas de 2019 con foco en globo abierto, CEIO y manejo inicial.

### Algoritmos revisados

- `alg-fa-urgencias` — revisado con guía ESC 2024 de fibrilación auricular, guía EHRA 2021 de anticoagulación y bibliografía de cardioversión eléctrica.
- `alg-crisis-hipertensiva` — revisado con guía local de crisis hipertensiva, resumen UpToDate sobre emergencias hipertensivas y guía AHA/ACC 2025 de hipertensión arterial.
- `alg-manejo-final-de-vida` — revisado con recomendaciones de final de vida en urgencias, protocolos de cuidados paliativos, sedación paliativa SECPAL y guía local de vía subcutánea.

### Algoritmos pendientes de validar

- No hay más algoritmos en el repositorio fuera de los tres revisados.
- Los futuros algoritmos no deben abrirse como cerrados hasta tener una fuente bibliográfica principal y una revisión clínica dedicada del flujo.

### Documentos faltantes

- Guía específica y actual de `síndrome coronario agudo` para desarrollar correctamente `Síndrome coronario agudo`.
- Guía específica de `ictus agudo / código ictus` para validar `Ictus agudo`.
- Guía específica de `tromboembolismo pulmonar` para cerrar `TEP`.
- Guía específica y actual de `anafilaxia` para consolidar `Anafilaxia`.
- Fichas técnicas o monografías farmacológicas equivalentes para `amiodarona`, `labetalol`, `noradrenalina`, `adrenalina`, `fentanilo`, `propofol` y `metilprednisolona`.
- Exportación legible y reutilizable a PDF del bloque de oftalmología no traumática si se quiere pasar a validación clínica completa de `Ojo rojo agudo`, `Glaucoma agudo`, `Uveítis anterior` y módulos afines.

### Estado del vademécum

- Implementado: `Adrenalina`, `Amiodarona`, `Fentanilo`, `Labetalol`, `Metilprednisolona`, `Noradrenalina` y `Propofol`.
- Implementado a nivel funcional: shell, metadatos internos, activación de calculadoras, interacciones internas y enlaces cruzados.
- Viable ahora: buscador sobre fichas disponibles, favoritos y recientes locales, activación de cálculos por flags internos, detección explícita de medicamentos presentes en guías revisadas y resolución oficial precisa a CIMA/AEMPS cuando existe coincidencia útil.
- Lógica vigente:
  - medicamento indexado y con ficha interna -> abre ficha propia dentro de la app y ofrece también acceso a la ficha oficial o búsqueda avanzada en CIMA/AEMPS
  - medicamento detectado en guías pero aún sin ficha -> aparece como pendiente real dentro del Vademécum y se resuelve hacia referencia oficial
  - medicamento no indexado -> no se simula ficha interna y la app lo resuelve hacia CIMA/AEMPS de la forma más precisa posible
- No viable todavía como propuesta completa: un vademécum interno universal, cobertura farmacológica exhaustiva por principio activo o fichas completas para cualquier término buscado.
- Requiere más trabajo real: monografías estructuradas por fármaco, ampliación del esquema de posología y ajustes, más medicamentos modelados, extracción más amplia de medicamentos desde todos los módulos y una política explícita de mantenimiento clínico.
- Pendiente a nivel documental: posología completa, ajustes renales/hepáticos y detalle farmacológico sistemático apoyado en monografías específicas por fármaco.
- Bibliografía usada hasta ahora: referencias externas oficiales a CIMA/AEMPS y relación contextual con protocolos y herramientas del repositorio.
- Documentos faltantes: fichas técnicas o monografías estructuradas de los 7 fármacos para poder considerar el vademécum clínicamente completo.

## Favoritos, historial y preferencias

La persistencia local está centralizada en `core/storage.js`.

### Se guarda en local

- favoritos
- historial reciente
- preferencias mínimas del shell
- última búsqueda introducida

No se reparte la persistencia por pantallas o módulos sueltos.

## Offline

### Componentes offline-first

- shell principal
- assets del shell
- apps de primer nivel
- registro central
- módulos HTML clínicos
- algoritmos JSON
- favoritos, historial y búsqueda local
- parte propia del vademécum

### Implementación

- `sw.js` usa `core/precache-manifest.js`
- `generate_registry.py` genera también el listado de precache
- estrategia:
  - `cache-first` para shell, apps, core y contenido clínico propio
  - `navigate fallback` a `/index.html`

### Nota de despliegue

La app funciona sin build, pero para carga inicial debe servirse por HTTP. Ejemplo local:

```bash
python3 -m http.server 4173
```

La app usa base path centralizada y evita depender de `/` como raíz del dominio.

- En Live Server funciona desde la carpeta actual del proyecto.
- En despliegues en subruta funciona mientras `index.html` se sirva desde la raíz real de la app.
- En GitHub Pages se incluye `404.html` para redirigir rutas limpias al shell sin cambiar la arquitectura.

Si el hosting permite rewrite, el fallback ideal sigue siendo servir `index.html` para las rutas internas. Una vez cargado el shell y registrado el service worker, la navegación interna y el modo offline quedan cubiertos por la app.

Las imágenes clínicas integradas desde `biblio/` se copian a `assets/images/biblio/` para no depender de rutas frágiles ni hotlinks externos.

## Sistema visual

La base visual común está en `core/app-shell.css`.

### Desktop

- shell con sidebar estable y panel contextual
- superficies translúcidas controladas
- sensación de escritorio inspirada en macOS Tahoe

### Móvil y tablet

- bottom bar flotante
- controles tipo cápsula
- jerarquía táctil compacta
- paneles laterales convertidos en drawers/sheets

### Reglas visuales activas

- contenido por delante del efecto
- iconos SVG escalables
- radios amplios y sombras suaves
- grids seguros con `minmax`
- sin overflow horizontal

## Algoritmos interactivos

Los algoritmos viven en `content/algorithms/*.json`.

### Modelo

- `startNode`
- `nodeOrder`
- nodos con `type`, `label`, `text`, `options`
- transiciones por `nextId`
- acciones opcionales de navegación contextual

### Tipos previstos

- `start`
- `decision`
- `action`
- `warning`
- `calculator`
- `result`
- `end`
- `summary`

### Comportamiento actual

- resalta nodo actual
- marca ruta recorrida
- permite volver atrás
- permite reiniciar
- puede abrir módulos relacionados
- se presenta en sheet dentro del mismo shell

## Vademécum y lógica de cálculos por medicamento

El vademécum integra fichas propias y usa flags internos por medicamento.

### Viabilidad real actual

- Sí es viable hoy como capa interna pequeña y honesta para un conjunto corto de fármacos realmente modelados.
- Sí tiene sentido mantener la referencia oficial externa a `CIMA/AEMPS` como salida de consulta real para medicamentos no modelados.
- No es viable todavía presentarlo como vademécum completo interno ni como catálogo farmacológico general offline.
- No debe simular fichas inexistentes ni envolver la web externa como si fuera contenido nativo de la app.
- La experiencia más realista ahora es: búsqueda sobre fichas modeladas, recientes, favoritos, cálculos asociados y derivación limpia a la fuente oficial externa.
- La vista principal ya no actúa como catálogo inflado: se apoya en buscador, favoritos, recientes, utilidades farmacológicas y resumen de pendientes reales.
- Para escalarlo de verdad hacen falta más fichas estructuradas, más modelado por fármaco y una estrategia de mantenimiento documental sostenida.

### Modelo interno actual

- `id`
- `slug`
- `title`
- `externalReferenceUrl`
- `flags`
  - `requiresWeightCalc`
  - `requiresPediatricDose`
  - `requiresBsaCalc`
  - `requiresRenalAdjustment`
  - `requiresHepaticAdjustment`
  - `requiresInfusionRateCalc`
  - `requiresReconstitutionCalc`
  - `requiresMaxDailyDoseCheck`
  - `requiresIntervalCheck`
  - `calculationNotes`
- `relatedEntryIds`
- `interactions`

### Regla de activación

- si un flag está activo, el shell añade las calculadoras relacionadas en la ficha
- si no hay flags activos, la ficha no muestra calculadoras extra
- la referencia externa oficial actual prioriza ficha oficial directa de `CIMA/AEMPS` cuando existe mapeo exacto y usa búsqueda avanzada oficial como fallback limpio

### Lógica de medicamentos indexados + CIMA

- medicamento indexado y con ficha propia -> abre ficha interna y ofrece también acceso a la ficha oficial en `CIMA/AEMPS`
- medicamento detectado en guías pero aún sin ficha -> aparece como pendiente real dentro del Vademécum y se resuelve hacia referencia oficial
- medicamento no indexado -> no se simula ficha interna; la resolución va hacia `CIMA/AEMPS` con la coincidencia más precisa posible o, si no la hay, hacia la búsqueda avanzada oficial
- si falta bibliografía suficiente para completar una ficha, el medicamento debe permanecer marcado como pendiente real y no como contenido cerrado

### Fichas farmacológicas iniciales integradas

- Adrenalina
- Amiodarona
- Fentanilo
- Labetalol
- Metilprednisolona
- Noradrenalina
- Propofol

## Cómo añadir nuevo contenido

### Añadir un protocolo

1. Crea el HTML en `content/protocolos/<categoria>/<slug>.html`
2. Usa la estructura base con `module-content`, `protocol-header`, `summary` y bloques `.card`
3. Si tiene algoritmo, crea `content/algorithms/<alg-id>.json`
4. Añade la relación en `ALGORITHM_MAP` y `RELATED_MAP` dentro de `generate_registry.py`
5. Ejecuta:

```bash
python3 generate_registry.py
```

### Añadir un procedimiento

1. Crea el HTML en `content/procedimientos/<slug>.html`
2. Mantén la ficha independiente y modular
3. Si necesita flujo o checklist, añade JSON de algoritmo y relación en `generate_registry.py`
4. Regenera el registro

### Añadir una herramienta

1. Crea el HTML en `content/herramientas/<categoria>/<slug>.html`
2. Regenera el registro
3. Si debe ser interactiva, añade su configuración a `TOOL_WIDGETS` en `core/app-shell.js`

### Añadir un fármaco

1. Crea la ficha HTML en `content/vademecum/<slug>.html`
2. Asigna su categoría en `VADEMECUM_CATEGORY_LABELS`
3. Declara flags en `DRUG_FLAGS`
4. Añade relaciones en `RELATED_MAP`
5. Añade interacciones en `DRUG_INTERACTIONS` si aplica
6. Regenera `core/registry.js` y `core/precache-manifest.js`

## Restricciones técnicas

- HTML
- CSS
- JavaScript vanilla
- sin React, Vue, Angular, Svelte, Next, Nuxt ni Vite
- sin dependencia de build para que la app funcione
- el repositorio debe poder leerse y mantenerse directamente desde sus archivos fuente

## Bitácora de cambios

- **[25/03/2026]** Inicialización de la base del proyecto original y primeros protocolos de cardiología.
- **[25/03/2026]** Generación masiva inicial del catálogo clínico de protocolos, procedimientos y herramientas.
- **[25/03/2026]** Migración de arquitectura al modelo actual: shell persistente, `/core`, `/components`, `/apps`, router limpio, storage central y búsqueda global.
- **[25/03/2026]** Sustitución del sistema legacy `/css` + `/js` por motor modular activo en `core/app-shell.js`.
- **[25/03/2026]** Extensión del catálogo de herramientas a **49** módulos incorporando `Fluidoterapia endovenosa`, `Mantenimiento hídrico`, `Reposición de pérdidas` y `Cálculo de bolos`.
- **[25/03/2026]** Incorporación del vademécum integrado inicial con **7** fichas farmacológicas y flags internos de cálculo.
- **[25/03/2026]** Implementación de algoritmos interactivos para `Crisis hipertensiva` y `Fibrilación auricular`.
- **[25/03/2026]** Generación automática de `core/registry.js` y `core/precache-manifest.js` mediante `generate_registry.py`.
- **[25/03/2026]** Revisión del `service worker`, `manifest.json` y memoria viva del proyecto para reflejar el estado real del repositorio.
- **[25/03/2026]** Inserción del nuevo bloque de protocolos `Cuidados paliativos / final de vida` con el módulo `Manejo de final de vida`, ajuste del orden clínico del catálogo y algoritmo interactivo asociado.
- **[25/03/2026]** Corrección global de rutas root-frágiles: base path centralizada, `index.html` con `<base href="./">`, router/history aware de subruta, manifest relativo, service worker compatible con subcarpetas y `404.html` para GitHub Pages.
- **[25/03/2026]** Corrección específica del arranque en preview/subruta: `core/router.js` dejó de hardcodear `/apps/...` en las rutas de app y en `not-found`, usando `apps/.../index.html` compatibles con `base-path.js`.
- **[25/03/2026]** Corrección del blanco de arranque reproducido en preview: `safeJsonParse(null)` devolvía `null`, `AppStorage.getPreferences()` propagaba ese valor y `core/app-shell.js` fallaba al leer `preferences.lastSearch`; se añadió endurecimiento de storage, compatibilidad sin `Array.prototype.at()` y fallback visible de arranque.
- **[25/03/2026]** Corrección de deep links con service worker y subruta: `index.html` ahora detecta la base real de la app antes de cargar CSS/JS/manifest y `404.html` reenvía también `mfyu_base`, evitando que un `navigate fallback` bajo una ruta interna vuelva a dejar la pantalla en blanco.
- **[26/03/2026]** Limpieza de portada: la home queda reducida a buscador y accesos principales, retirando bloques secundarios de recientes y favoritos fuera de la portada.
- **[26/03/2026]** Auditoría real de `biblio/` y mapeo inicial de documentos a módulos clínicos prioritarios sin tocar el motor ni el router; las referencias quedaron corregidas para apuntar a rutas realmente existentes en la raíz de `biblio/`.
- **[26/03/2026]** Integración clínica inicial desde `biblio/`: actualización de `Asma`, `EPOC`, `Neumonía`, `Hipopotasemia`, `VMNI` y `Espirometría`, con imágenes locales útiles en `Espirometría` e `Hipopotasemia`.
- **[26/03/2026]** Mejora de indexación del buscador mediante generación de keywords desde texto real del módulo y términos clínicos adicionales declarados en el propio HTML.
- **[26/03/2026]** Ajuste cromático del shell visual: azul clínico más presente, mayor contraste entre fondo/superficies/acciones, estados y chips más legibles y matices suaves entre grupos sin perder limpieza ni sobriedad.
- **[26/03/2026]** Segunda pasada de auditoría real de `biblio/`: confirmación de ausencia de subcarpetas activas, mapeo temático del fondo documental y relleno clínico de `Cardioversión eléctrica sincronizada` y `Traumatismo ocular`, incluyendo una figura local útil de colocación de palas.
- **[26/03/2026]** Corrección funcional del buscador en la vista dedicada: el panel de sugerencias del header dejaba de ser útil allí y podía interceptar clics sobre resultados; ahora queda oculto en `/buscar` sin tocar router ni arquitectura.
- **[26/03/2026]** Mejora de legibilidad general: aumento moderado del tamaño de texto base, mejor jerarquía tipográfica, chips y labels más legibles y más aire vertical dentro de módulos clínicos.
- **[26/03/2026]** Limpieza de listados sin tocar motor: en protocolos, procedimientos y herramientas los cards de catálogo muestran solo el nombre del módulo, eliminando resúmenes y metadatos del listado.
- **[26/03/2026]** Conversión de `Fibrilación auricular`, `Crisis hipertensiva` y `Manejo de final de vida` en guías clínicas más operativas y trazables, ampliando diagnóstico, red flags, tratamiento, criterios de derivación y bibliografía local.
- **[26/03/2026]** Revisión clínica de los tres algoritmos activos del repositorio contra bibliografía disponible de `biblio/`, corrigiendo decisiones poco sostenidas y dejando explícitos los límites documentales.
- **[26/03/2026]** Actualización del README como memoria clínica viva: protocolos editados, pendientes, bibliografía por protocolo, algoritmos revisados, documentos faltantes y estado documental del vademécum.
- **[26/03/2026]** Reindexación completa del fondo documental de `biblio/`: inventario actualizado a 144 documentos bibliográficos, clasificación por bloques clínicos en `biblio/INDEX.md` y priorización de materiales nuevos para ECG, dislipemia/SCORE2, oftalmología no traumática, paliativos y paracentesis.
- **[26/03/2026]** Ajuste fino de UI sin tocar motor: fondo más clínico y menos pálido, superficies más separadas, azul principal más presente, buscador y botones más coherentes, listados sobrios reforzados, radios más contenidos y barra inferior móvil más clara y usable.
- **[26/03/2026]** Limpieza estructural visible sin tocar arquitectura: home convertida en hub limpio, títulos duplicados retirados de las vistas de app, drawers de sección sin navegación redundante, listas aligeradas con estado discreto de completitud para protocolos/procedimientos, firma PNG global integrada y redefinición honesta del alcance real del Vademécum.
- **[26/03/2026]** Refinado final de interfaz y Vademécum sin tocar arquitectura: mensajes técnicos retirados de la UI, copy del Vademécum orientado a uso real, separación entre fichas disponibles y medicamentos pendientes de ficha, resolución oficial hacia CIMA/AEMPS más precisa y correcciones de overflow en pills, botones y tarjetas.
- **[26/03/2026]** Ajuste de segunda pasada sobre Vademécum y lectura de escritorio: la vista principal del Vademécum deja de comportarse como catálogo pesado, prioriza búsqueda útil + fichas reales + pendientes resumidos, la salida oficial usa ficha directa cuando puede y búsqueda avanzada como fallback limpio, la firma PNG gana presencia en escritorio y la escala tipográfica de ordenador se incrementa de forma marcada para lectura clínica sostenida.
