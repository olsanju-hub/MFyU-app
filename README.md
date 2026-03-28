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
- Catálogo indexado: **153 protocolos**, **12 procedimientos**, **49 herramientas**
- Vademécum interno acotado: **24 fichas farmacológicas realmente disponibles** y consulta farmacológica oficial interna restringida a `CIMA/AEMPS` cuando no existe ficha propia
- Algoritmos interactivos activos: **Crisis hipertensiva**, **Fibrilación auricular**, **Manejo de final de vida** y **Neumonía**
- Reorganización clínica 28/03/2026: entrada principal separada en **Atención Primaria** y **Urgencias**, manteniendo además las vistas transversales por `Protocolos`, `Procedimientos`, `Herramientas` y `Vademécum`
- Revisión editorial y de usabilidad 28/03/2026: todas las pantallas principales muestran orientación clínica visible dentro del contenido, filtros más claros en catálogos, favoritos y búsqueda más operativos, y fichas con resumen rápido e índice de lectura
- Ajuste estético 26/03/2026: paleta clínica renovada, tipografía base ampliada, listados sobrios, navegación móvil reforzada y lectura de escritorio claramente aumentada
- Evolución visual 26/03/2026: más contraste entre fondo, superficies y acciones; jerarquía de capas más clara; cards y paneles con más relieve sutil; y barra inferior móvil convertida en una pieza más refinada y menos genérica
- Refinado móvil 26/03/2026: escala tipográfica compactada en home y vistas táctiles, firma PNG visible en móvil y escritorio, y barra inferior móvil retractil con transición suave y sin solape persistente sobre listados
- Ampliación clínica del Vademécum 26/03/2026: revisión de protocolos y procedimientos activos para detectar medicación real, creación de nuevas fichas internas y conexión más directa entre guías, cálculos y consulta oficial
- Limpieza estructural 26/03/2026: home tipo hub, una sola cabecera por vista, navegación duplicada reducida y firma PNG global discreta
- Shell nuevo activo en `/core`, `/components` y `/apps`
- Registro, precache e índice documental de `biblio/` generados automáticamente por `generate_registry.py`
- Auditoría inicial de `biblio/` completada y mapeada a módulos clínicos prioritarios
- Integración local inicial de imágenes clínicas desde `biblio/` para `Espirometría` e `Hipopotasemia`
- Protocolos con desarrollo clínico operativo y trazable: **16**
- Algoritmos revisados frente a bibliografía disponible: **4 de 4**
- Índice documental completo de `biblio/` actualizado en `biblio/INDEX.md` con **405 archivos** clasificados por sección real y subcarpeta temática/procedimental

## Seguimiento vivo de protocolos

Revisar esta tabla antes de tocar protocolos y actualizarla al cerrar cada tarea. Los desdobles por `Atención Primaria` y `Urgencias` se registran como filas separadas.

- Hechos: **16**
- En revisión: **2**
- Pendientes: **135**

<!-- PROTOCOL_STATUS_TABLE_START -->
| Área | Protocolo | Estado | Contexto | Observaciones |
|------|-----------|--------|----------|---------------|
| Cardiología | Fibrilación auricular en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Cardiología | Fibrilación auricular en Urgencias | Hecho | Urgencias | Base clínica |
| Cardiología | HTA en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Cardiología | HTA en Urgencias | Hecho | Urgencias | Base clínica |
| Cardiología | Insuficiencia Cardíaca Aguda (ICA) | Hecho | Urgencias | Validado |
| Cuidados paliativos / final de vida | Manejo de final de vida en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Cuidados paliativos / final de vida | Manejo de final de vida en Urgencias | Hecho | Urgencias | Base clínica |
| Endocrinología | Diabetes en Urgencias | Hecho | Urgencias | Base clínica |
| Endocrinología | Diabetes mellitus en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Nefrología / Metabólico | Hipopotasemia | Hecho | Urgencias | Base clínica |
| Oftalmología | Traumatismo ocular | Hecho | Urgencias | Base clínica |
| Respiratorio | Asma (exacerbación asmática) | Hecho | Urgencias | Base clínica |
| Respiratorio | EPOC agudizado en Urgencias | Hecho | Urgencias | Base clínica |
| Respiratorio | EPOC en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Respiratorio | Neumonía en Atención Primaria | Hecho | Atención Primaria | Base clínica |
| Respiratorio | Neumonía en Urgencias | Hecho | Urgencias | Base clínica reforzada |
| Cardiología | Síncope | En revisión | Urgencias | Pendiente Revisión |
| Cardiología | Síndrome Coronario Agudo (SCA) | En revisión | Urgencias | Corregido |
| Agentes físicos / ambientales | Casi ahogamiento | Pendiente | Urgencias | Plantilla |
| Agentes físicos / ambientales | Hipotermia accidental | Pendiente | Urgencias | Plantilla |
| Agentes físicos / ambientales | Lesiones por electricidad | Pendiente | Urgencias | Plantilla |
| Agentes físicos / ambientales | Patologia inducida por calor | Pendiente | Urgencias | Plantilla |
| Agentes físicos / ambientales | Quemaduras quimicas | Pendiente | Urgencias | Plantilla |
| Agentes físicos / ambientales | Quemaduras termicas | Pendiente | Urgencias | Plantilla |
| Cardiología | Bradicardias dependientes de ECG | Pendiente | Urgencias | Pendiente |
| Cardiología | Pericarditis aguda | Pendiente | Urgencias | Pendiente |
| Cardiología | Shock | Pendiente | Urgencias | Plantilla |
| Cardiología | Soporte vital avanzado (SVA) | Pendiente | Urgencias | Pendiente |
| Cardiología | Soporte vital basico en adultos | Pendiente | Urgencias | Plantilla |
| Cardiología | Soporte vital pediatrico | Pendiente | Urgencias | Plantilla |
| Cardiología | Síndrome cardiorrenal | Pendiente | Urgencias | Pendiente |
| Cardiología | Taquicardias dependientes de ECG | Pendiente | Urgencias | Pendiente |
| Cardiología | Trombosis venosa profunda | Pendiente | Urgencias | Pendiente |
| Cuidados paliativos / final de vida | Control de sintomas en paciente paliativo | Pendiente | Atención Primaria | Plantilla |
| Cuidados paliativos / final de vida | Sedacion paliativa en urgencias | Pendiente | Urgencias | Plantilla |
| Dermatología / Infecciosas | Anafilaxia | Pendiente | Urgencias | Pendiente |
| Dermatología / Infecciosas | Angioedema | Pendiente | Urgencias | Pendiente |
| Dermatología / Infecciosas | Celulitis / erisipela | Pendiente | Atención Primaria | Pendiente |
| Dermatología / Infecciosas | Escabiosis | Pendiente | Atención Primaria | Pendiente |
| Dermatología / Infecciosas | Herpes zóster | Pendiente | Atención Primaria | Pendiente |
| Digestivo | Ascitis | Pendiente | Urgencias | Plantilla |
| Digestivo | Complicaciones de la enfermedad inflamatoria intestinal (Crohn y colitis ulcerosa) | Pendiente | Urgencias | Pendiente |
| Digestivo | Cuerpo extraño en vía digestiva | Pendiente | Urgencias | Pendiente |
| Digestivo | Diarrea aguda | Pendiente | Urgencias | Pendiente |
| Digestivo | Dolor abdominal agudo | Pendiente | Urgencias | Pendiente |
| Digestivo | Encefalopatia hepatica aguda | Pendiente | Urgencias | Plantilla |
| Digestivo | Estreñimiento / impactación fecal | Pendiente | Urgencias | Pendiente |
| Digestivo | Fisura anal | Pendiente | Atención Primaria | Pendiente |
| Digestivo | Helicobacter pylori | Pendiente | Atención Primaria | Pendiente |
| Digestivo | Hemorragia digestiva alta | Pendiente | Urgencias | Pendiente |
| Digestivo | Hemorragia digestiva media y baja | Pendiente | Urgencias | Plantilla |
| Digestivo | Hemorroides | Pendiente | Atención Primaria | Pendiente |
| Digestivo | Hepatitis aguda | Pendiente | Urgencias | Pendiente |
| Digestivo | Ictericia | Pendiente | Urgencias | Plantilla |
| Digestivo | Obstruccion intestinal | Pendiente | Urgencias | Plantilla |
| Digestivo | Pancreatitis aguda | Pendiente | Urgencias | Plantilla |
| Digestivo | Patologia esofagica aguda | Pendiente | Urgencias | Plantilla |
| Endocrinología | Cetoacidosis diabética | Pendiente | Urgencias | Pendiente |
| Endocrinología | Estado hiperglucémico hiperosmolar | Pendiente | Urgencias | Pendiente |
| Endocrinología | Hipoglucemia | Pendiente | Urgencias | Pendiente |
| Endocrinología | Otras complicaciones agudas de la diabetes | Pendiente | Urgencias | Pendiente |
| Endocrinología | Urgencias tiroideas | Pendiente | Urgencias | Pendiente |
| Ginecología / ETS | Dolor pélvico agudo | Pendiente | Urgencias | Pendiente |
| Ginecología / ETS | Enfermedad inflamatoria pélvica | Pendiente | Urgencias | Pendiente |
| Ginecología / ETS | Infecciones agudas de transmisión sexual | Pendiente | Atención Primaria | Pendiente |
| Ginecología / ETS | Infección vaginal aguda | Pendiente | Atención Primaria | Pendiente |
| Ginecología / ETS | Sangrado del primer trimestre del embarazo | Pendiente | Urgencias | Pendiente |
| Ginecología / ETS | Sífilis | Pendiente | Atención Primaria | Pendiente |
| Nefro-urología | Cistitis / uretritis | Pendiente | Atención Primaria | Plantilla |
| Nefro-urología | Hematuria | Pendiente | Urgencias | Plantilla |
| Nefro-urología | Pielonefritis aguda | Pendiente | Urgencias | Plantilla |
| Nefro-urología | Prostatitis aguda | Pendiente | Urgencias | Plantilla |
| Nefro-urología | Retencion aguda de orina | Pendiente | Urgencias | Plantilla |
| Nefro-urología | Sindrome escrotal agudo | Pendiente | Urgencias | Plantilla |
| Nefrología / Metabólico | Acidosis metabólica | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Acidosis respiratoria | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Alcalosis metabólica | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Alcalosis respiratoria | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Cólico renal | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Enfermedad renal crónica reagudizada | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hipercalcemia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hipermagnesemia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hipernatremia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hiperpotasemia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hipocalcemia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hipomagnesemia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Hiponatremia | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Insuficiencia renal aguda | Pendiente | Urgencias | Pendiente |
| Nefrología / Metabólico | Rabdomiólisis | Pendiente | Urgencias | Pendiente |
| Neurología | Absceso cerebral | Pendiente | Urgencias | Plantilla |
| Neurología | Absceso epidural espinal | Pendiente | Urgencias | Plantilla |
| Neurología | Cefalea con banderas rojas | Pendiente | Urgencias | Pendiente |
| Neurología | Coma | Pendiente | Urgencias | Plantilla |
| Neurología | Crisis convulsiva | Pendiente | Urgencias | Pendiente |
| Neurología | Delirium / síndrome confusional agudo | Pendiente | Urgencias | Pendiente |
| Neurología | Distonias agudas iatrogenicas | Pendiente | Urgencias | Plantilla |
| Neurología | Encefalitis (infección del SNC) | Pendiente | Urgencias | Pendiente |
| Neurología | Epilepsia (seguimiento y ajustes) | Pendiente | Atención Primaria | Pendiente |
| Neurología | Fiebre sin foco adulto no inmunodeprimido | Pendiente | Urgencias | Plantilla |
| Neurología | Hemorragia subaracnoidea espontanea | Pendiente | Urgencias | Plantilla |
| Neurología | Ictus agudo (código ictus) | Pendiente | Urgencias | Pendiente |
| Neurología | Migraña | Pendiente | Urgencias | Pendiente |
| Neurología | Sepsis | Pendiente | Urgencias | Plantilla |
| Neurología | Sindrome meningeo | Pendiente | Urgencias | Plantilla |
| Neurología | Traumatismo craneoencefálico en paciente antiagregado o anticoagulado | Pendiente | Urgencias | Pendiente |
| Neurología | Vértigo agudo / síndrome vestibular agudo | Pendiente | Urgencias | Pendiente |
| ORL | Absceso periamigdalino | Pendiente | Urgencias | Pendiente |
| ORL | Celulitis cervicofacial | Pendiente | Urgencias | Plantilla |
| ORL | Dolor faringeo agudo | Pendiente | Atención Primaria | Plantilla |
| ORL | Epistaxis | Pendiente | Urgencias | Pendiente |
| ORL | Otalgia aguda | Pendiente | Atención Primaria | Plantilla |
| ORL | Otitis | Pendiente | Atención Primaria | Pendiente |
| ORL | Procesos agudos glandulas salivales | Pendiente | Atención Primaria | Plantilla |
| ORL | Procesos agudos odontologicos | Pendiente | Atención Primaria | Plantilla |
| ORL | Rinosinusitis aguda | Pendiente | Atención Primaria | Plantilla |
| ORL | Sordera brusca | Pendiente | Urgencias | Plantilla |
| Oftalmología | Blefaritis | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Chalazión | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Cuerpo extraño ocular | Pendiente | Urgencias | Pendiente |
| Oftalmología | Dacriocistitis aguda | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Desprendimiento de retina | Pendiente | Urgencias | Pendiente |
| Oftalmología | Disminución de la agudeza visual | Pendiente | Urgencias | Pendiente |
| Oftalmología | Epiescleritis | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Glaucoma agudo | Pendiente | Urgencias | Pendiente |
| Oftalmología | Hiposfagma | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Ojo rojo agudo | Pendiente | Urgencias | Pendiente |
| Oftalmología | Orzuelo | Pendiente | Atención Primaria | Pendiente |
| Oftalmología | Uveítis anterior | Pendiente | Urgencias | Pendiente |
| Oftalmología | Úlcera corneal | Pendiente | Urgencias | Pendiente |
| Pediatría | Bronquiolitis | Pendiente | Urgencias | Pendiente |
| Pediatría | Convulsión febril | Pendiente | Urgencias | Pendiente |
| Pediatría | Fiebre sin foco | Pendiente | Urgencias | Pendiente |
| Pediatría | Gastroenteritis aguda / deshidratación | Pendiente | Urgencias | Pendiente |
| Pediatría | Infeccion respiratoria en la infancia | Pendiente | Urgencias | Plantilla |
| Pediatría | Intoxicaciones en pediatria | Pendiente | Urgencias | Plantilla |
| Pediatría | Laringotraqueítis (tos perruna) | Pendiente | Urgencias | Pendiente |
| Pediatría | Urgencias en lactante menor de 3 meses | Pendiente | Urgencias | Plantilla |
| Radiología | Cuerpos extranos ingeridos con subapartado especifico de pila de boton | Pendiente | Urgencias | Plantilla |
| Radiología | Cuerpos extranos penetrantes | Pendiente | Urgencias | Plantilla |
| Radiología | Diagnostico radiologico basico del politrauma simple | Pendiente | Urgencias | Plantilla |
| Radiología | Lectura sistematica de radiografia de abdomen en urgencias | Pendiente | Urgencias | Plantilla |
| Radiología | Lectura sistematica de radiografia de torax en urgencias | Pendiente | Urgencias | Plantilla |
| Radiología | Sospecha radiologica de traumatismo no accidental / maltrato infantil | Pendiente | Urgencias | Plantilla |
| Respiratorio | Derrame pleural | Pendiente | Urgencias | Pendiente |
| Respiratorio | Hemoptisis | Pendiente | Urgencias | Pendiente |
| Respiratorio | Insuficiencia respiratoria aguda | Pendiente | Urgencias | Pendiente |
| Respiratorio | Neumotórax | Pendiente | Urgencias | Pendiente |
| Respiratorio | Tromboembolismo pulmonar (TEP) | Pendiente | Urgencias | Pendiente |
| Toxicología | Intoxicación por alcohol | Pendiente | Urgencias | Pendiente |
| Toxicología | Intoxicación por benzodiacepinas | Pendiente | Urgencias | Pendiente |
| Toxicología | Intoxicación por monóxido de carbono | Pendiente | Urgencias | Pendiente |
| Toxicología | Intoxicación por opiáceos | Pendiente | Urgencias | Pendiente |
| Toxicología | Intoxicación por paracetamol | Pendiente | Urgencias | Pendiente |
<!-- PROTOCOL_STATUS_TABLE_END -->

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
│   ├── atencion-primaria/index.html
│   ├── urgencias/index.html
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
- En móvil la home seguía duplicando la intención de búsqueda con el buscador global y un acceso adicional a `Buscar`; ahora la búsqueda principal queda en el header y la home reduce su peso a accesos primarios + utilidad compacta.
- Las vistas de app repetían el título en header y dentro de la propia pantalla; se dejó una sola cabecera efectiva por vista.
- El drawer de sección duplicaba navegación por categorías; ahora se usa como contexto ligero con recientes y favoritos de la sección.
- El drawer mostraba metadatos demasiado largos y repetitivos; ahora resume por sección y categoría sin arrastrar resúmenes enteros.
- El Vademécum mezclaba alcance interno y salida oficial con copy demasiado técnico; ahora resuelve cada búsqueda con una sola salida principal: ficha interna real o consulta oficial restringida a `CIMA/AEMPS`.
- El Vademécum duplicaba acceso oficial dentro de la vista base; se dejó una sola puerta clara a `CIMA/AEMPS` y se ocultan favoritos/recientes cuando no aportan o cuando una búsqueda ya está activa.

### Organización actual

- `Inicio` funciona ahora como hub clínico de acceso principal a `Atención Primaria` y `Urgencias`; las vistas transversales por `Protocolos`, `Procedimientos`, `Herramientas` y `Vademécum` se conservan como segunda capa sin romper la organización histórica.
- `Protocolos`, `Procedimientos` y `Herramientas` abren con una sola estructura principal: header global + listado ligero agrupado.
- En escritorio, la portada no repite el menú lateral como sistema principal; el área central concentra el hub y el lateral queda reducido a identidad de producto.
- Los listados muestran solo el nombre del módulo y, cuando existe base real para ello, una señal discreta de estado; además se ordenan priorizando `Completo`, `Base` y después `En revisión`.

### Estado de completitud

- `Completo` se usa para módulos con huella clara de validación.
- `Base` se usa para contenidos con base clínica operativa pero aún no tratados como catálogo totalmente cerrado.
- `En revisión` identifica plantillas, pendientes o desarrollo parcial.

### Firma visual global

- La firma PNG global vive en `assets/icons/logo.png`.
- Se muestra como firma editorial fija y discreta: esquina inferior derecha en escritorio y esquina inferior derecha sobre la barra móvil en pantallas táctiles.
- En escritorio ganó presencia suficiente para ser visible como firma constante; en móvil se mantiene más pequeña, con mejor z-index, fuera de la barra y ligada al estado retractil del menú inferior.
- Esa ubicación la mantiene visible en todas las pantallas sin entrar en tarjetas clínicas, listados, barra inferior ni controles de trabajo.

### Icono PWA y favicon

- El icono externo de instalación ya no depende de una marca genérica ni de una casa abstracta.
- Se ha creado un icono PWA propio en `assets/icons/pwa-icon.svg` y sus versiones `192x192` y `512x512`.
- La base es un fonendoscopio limpio, reconocible y clínico, simplificado para instalación, favicon y `apple-touch-icon`.
- `manifest.json` y `index.html` ya usan estos assets para instalación y representación externa de la app.

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
  - rutas de app: `/`, `/atencion-primaria`, `/urgencias`, `/protocolos`, `/procedimientos`, `/herramientas`, `/vademecum`, `/buscar`, `/favoritos`
  - rutas clínicas limpias: `/protocolos/<slug>`, `/procedimientos/<slug>`, `/herramientas/<slug>`, `/vademecum/<slug>`
  - rutas físicas legacy de `/content/...` si llegan desde enlaces existentes
- las vistas base del shell usan `source` relativo (`apps/.../index.html`) y la URL final se resuelve contra `core/base-path.js`
- la navegación se resuelve con `fetch()` de fragmentos HTML y actualización de la zona central

### Registro central

- `core/registry.js` se genera desde disco con `generate_registry.py`
- `generate_registry.py` regenera también `biblio/INDEX.md` recorriendo `biblio/` de forma recursiva
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
- el buscador del Vademécum resuelve primero a ficha interna real y, cuando no existe ficha propia, abre una vista interna de consulta oficial restringida a `CIMA/AEMPS`
- la experiencia no funciona como navegador general ni como catálogo farmacológico universal fingido

### Estructura actual del Vademécum

- cabecera con buscador orientado a medicamentos con ficha interna o a consulta oficial en `CIMA/AEMPS`
- bloque de `Favoritos` con fichas internas guardadas
- bloque de `Recientes` con últimas fichas internas abiertas
- pestaña principal `Fichas y consulta oficial` como vista base real del Vademécum
- panel de `Cobertura interna actual` para dejar claro que no es un catálogo universal ni un navegador libre
- bloque de `Accesos farmacológicos útiles` con calculadoras o herramientas realmente necesarias para los fármacos ya modelados
- bloque de `Fichas internas disponibles` con tarjetas compactas para los medicamentos incorporados en la app
- bloque de `Medicamentos detectados en protocolos y procedimientos` para dejar explícitas las deudas reales de modelado sin fingir fichas cerradas
- bloque de `Consulta farmacológica oficial` para búsquedas sin ficha propia, limitado a la fuente oficial de `CIMA/AEMPS`
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

La biblioteca local ya no es plana. El estado real del repositorio organiza `biblio/` por secciones de primer nivel y subcarpetas temáticas/procedimentales, y la fuente de verdad inventarial pasa a ser `biblio/INDEX.md`, regenerado automáticamente por `generate_registry.py`.

Resumen actual del fondo:

- **405 archivos documentales** en total, más `biblio/INDEX.md` como archivo de metadatos
- **353 PDF**, **34 PNG**, **3 DOC**, **2 JPG**, **2 KEY**, **2 PAGES**, **2 PPTX**, **2 TXT**, **1 ODT**, **1 SVG**, **1 TEXTCLIPPING**, **1 WEBP**, **1 ZIP**
- `biblio/Cursos`: **123 archivos** en **9** bloques
- `biblio/procedimeintos`: **31 archivos** en **5** bloques
- `biblio/temas`: **251 archivos** en **30** bloques

Bloques con mayor densidad documental:

- `biblio/Cursos/Ecografia`: 48 archivos
- `biblio/Cursos/EPS`: 32 archivos
- `biblio/temas/Final de vida urg`: 27 archivos
- `biblio/temas/ECG`: 19 archivos
- `biblio/temas/Neumonía`: 19 archivos
- `biblio/temas/Vértigo`: 16 archivos
- `biblio/temas/hipokalemia`: 15 archivos
- `biblio/procedimeintos/Espirometria`: 11 archivos
- `biblio/procedimeintos/VMNI`: 10 archivos

### Mapeo activo inicial

- `Asma (exacerbación asmática)` usa `biblio/temas/Asma/GEMA_5.5.pdf`, `biblio/temas/Asma/CRISIS DE ASMA 2017.pdf` y `biblio/temas/Asma/GIDEP_Asma.pdf`
- `Exacerbación aguda de EPOC` usa `biblio/procedimeintos/Espirometria/Manejo practico del paciente con EPOC.pdf`, `biblio/temas/EPOC/epoc-gold-2025.pdf`, `biblio/procedimeintos/VMNI/VMNI.pdf` y `biblio/procedimeintos/VMNI/Ventilación2025.pdf`
- `Neumonía` usa `biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf`, `biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf` y `biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf`
- `Hipopotasemia` usa `biblio/temas/hipokalemia/HK_Fisterra.pdf`, `biblio/temas/hipokalemia/HK_Samu.pdf`, `biblio/temas/hipokalemia/Hipokalemia definitivo.pdf` y `biblio/temas/hipokalemia/Hklemia .jpg`
- `Ventilación mecánica no invasiva` usa `biblio/procedimeintos/VMNI/VMNI.pdf`, `biblio/procedimeintos/VMNI/CuandoComoIniciarStop.pdf`, `biblio/procedimeintos/VMNI/Ventilación2025.pdf` y `biblio/procedimeintos/VMNI/recomendaciones-ers-ats-para-el-uso-de-la-ventilacion-no-2qs9vd0ws6.pdf`
- `Espirometría` usa `biblio/procedimeintos/Espirometria/Guía Rápida .pdf`, `biblio/procedimeintos/Espirometria/Espirometria.pdf`, `biblio/procedimeintos/Espirometria/Interpretacion espiromeria FAES.pdf`, `biblio/procedimeintos/Espirometria/ESPIROMETRIA - 1.png` y `biblio/procedimeintos/Espirometria/ESPIROMETRIA - 2.png`
- `Crisis hipertensiva` se ancla a `biblio/temas/HTA/crisis hta.pdf`, `biblio/temas/HTA/Evaluación y tratamiento de emergencias hipertensivas en adultos - UpToDate.pdf` y `biblio/temas/HTA/jones-et-al-2025-2025-aha-acc-aanp-aapa-abc-accp-acpm-ags-ama-aspc-nma-pcna-sgim-guideline-for-the-prevention-detection.pdf`
- `Manejo de final de vida` se ancla a `biblio/temas/Final de vida urg/Manejo_del_Final_de_Vida_en_Urgencias.pdf`, `biblio/temas/Final de vida urg/2022_Recomendaciones-de-cuidados-al-final-de-la-vida-en-los-servicios-de-urgencias.pdf`, `biblio/temas/Final de vida urg/protocolos-de-tratamiento-en-cuidados-paliativos-2023.pdf` y `biblio/temas/Final de vida urg/secpal-comprender-cuidados-paliativos-3-sedacion-paliativa.pdf`
- `Cardioversión eléctrica sincronizada` usa `biblio/temas/FA/CV electrica.pdf`, `biblio/temas/FA/CV farma.pdf`, `biblio/temas/FA/GPC-ESC-2024-fibrilacion-auricular.pdf` y `biblio/temas/FA/sedacion-y-analgesia.pdf`
- `Traumatismo ocular` usa `biblio/temas/OFTALMOLOGIA-URG 2011/OFT- Urgencias oftalmológicas Traumatismos ( 17-1-19).pdf`

### Material auditado pendiente de integración clínica

- `biblio/temas/DLP` y `biblio/temas/Dislipemia`, con material de `SCORE2/SCORE2-OP`
- `biblio/temas/Neurofibromatosis tipo 1` y `biblio/temas/Manchas color cafe con leche`
- `biblio/temas/OFTALMOLOGIA-URG 2011`
- `biblio/temas/ECG`
- `biblio/procedimeintos/Paracentesis` y `biblio/procedimeintos/Puncion Lumbar`
- `biblio/Cursos/Ecografia`, `biblio/Cursos/Paliativos` y `biblio/Cursos/Que hacer, que no hacer`
- La clasificación fina del fondo documental completo, incluidos subdirectorios internos como `biblio/Cursos/Ecografia/Evaluacion`, queda trazada en `biblio/INDEX.md`

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
- `Neumonía` — SEPAR 2020 para gravedad, decisión de ingreso y duración de tratamiento; revisión clínica Fisterra 2021 para CRB-65, reevaluación y alternativas ambulatorias; guía PRIOAM de neumonía comunitaria para pruebas, criterios de ingreso y pautas antibióticas hospitalarias.
- `Hipopotasemia` — Fisterra. Hipopotasemia; documentación SAMU de hipopotasemia; revisión práctica de hipokalemia y tabla local de objetivos de potasio.
- `Fibrilación auricular` — Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation; Steffel J, Collins R, Field M, et al. 2021 EHRA Practical Guide on the Use of NOACs in Patients with Atrial Fibrillation; Orjuela Guerrero A. Cardioversión eléctrica en fibrilación auricular. Rev Colomb Cardiol. 2016.
- `Crisis hipertensiva` — Jiménez M, Gavira JJ. Crisis hipertensiva. Guías de actuación en urgencias. 2018; Elliott WJ, Varon J. Evaluation and treatment of hypertensive emergencies in adults. UpToDate. 2026; AHA/ACC Joint Committee. 2025 Guideline for the prevention, detection, evaluation and management of high blood pressure in adults.
- `Manejo de final de vida` — Boqué Oliva C, Romero Pareja R, Herreros B. Recomendaciones de cuidados al final de la vida en los servicios de urgencias. Emergencias. 2022; Benítez-Rosario MA, Alonso Babarro A, González Guillermo T. Protocolos de tratamiento en cuidados paliativos. 2023; Ascanio León B, Castillo Padrós M, Benítez del Rosario MA. Sedación paliativa. SECPAL; guía local de vía subcutánea en cuidados paliativos. 2023.
- `Traumatismo ocular` — actualización de urgencias oftalmológicas traumáticas de 2019 con foco en globo abierto, CEIO y manejo inicial.

### Algoritmos revisados

- `alg-fa-urgencias` — revisado con guía ESC 2024 de fibrilación auricular, guía EHRA 2021 de anticoagulación y bibliografía de cardioversión eléctrica.
- `alg-crisis-hipertensiva` — revisado con guía local de crisis hipertensiva, resumen UpToDate sobre emergencias hipertensivas y guía AHA/ACC 2025 de hipertensión arterial.
- `alg-manejo-final-de-vida` — revisado con recomendaciones de final de vida en urgencias, protocolos de cuidados paliativos, sedación paliativa SECPAL y guía local de vía subcutánea.
- `alg-neumonia` — creado y revisado con SEPAR 2020, Fisterra 2021 y guía PRIOAM para NAC adulta inmunocompetente.

### Algoritmos pendientes de validar

- No hay más algoritmos en el repositorio fuera de los tres revisados.
- Los futuros algoritmos no deben abrirse como cerrados hasta tener una fuente bibliográfica principal y una revisión clínica dedicada del flujo.

### Documentos faltantes

- Guía específica y actual de `síndrome coronario agudo` para desarrollar correctamente `Síndrome coronario agudo`.
- Guía específica de `ictus agudo / código ictus` para validar `Ictus agudo`.
- Guía específica de `tromboembolismo pulmonar` para cerrar `TEP`.
- Guía específica y actual de `anafilaxia` para consolidar `Anafilaxia`.
- Fichas técnicas o monografías farmacológicas equivalentes para `amiodarona`, `labetalol`, `noradrenalina`, `adrenalina`, `fentanilo`, `propofol` y `metilprednisolona`.
- Monografías farmacológicas específicas para `azitromicina`, `ceftriaxona` y `levofloxacino` si se quiere cerrar con más detalle documental sus ajustes renales/hepáticos fuera del contexto de las guías de neumonía usadas aquí.
- Exportación legible y reutilizable a PDF del bloque de oftalmología no traumática si se quiere pasar a validación clínica completa de `Ojo rojo agudo`, `Glaucoma agudo`, `Uveítis anterior` y módulos afines.

### Estado del vademécum

- Implementado: `Adrenalina`, `Amiodarona`, `Amoxicilina`, `Amoxicilina-clavulánico`, `Azitromicina`, `Butilescopolamina`, `Captopril`, `Ceftriaxona`, `Digoxina`, `Diltiazem`, `Dobutamina`, `Etomidato`, `Fentanilo`, `Furosemida`, `Haloperidol`, `Ipratropio`, `Labetalol`, `Levofloxacino`, `Metilprednisolona`, `Midazolam`, `Morfina`, `Noradrenalina`, `Propofol` y `Salbutamol`.
- Implementado a nivel funcional: shell, metadatos internos, activación de calculadoras, interacciones internas y enlaces cruzados.
- Viable ahora: buscador sobre fichas disponibles, favoritos y recientes locales, activación de cálculos por flags internos y consulta farmacológica oficial restringida a `CIMA/AEMPS` cuando no existe ficha interna.
- Lógica vigente:
  - medicamento indexado y con ficha interna -> abre ficha propia dentro de la app y ofrece también acceso a la ficha oficial o consulta avanzada en `CIMA/AEMPS`
  - medicamento sin ficha interna -> no se simula contenido propio y la app abre una vista interna de consulta farmacológica oficial restringida a `CIMA/AEMPS`
- Protocolos y procedimientos revisados para alimentar el Vademécum en esta pasada: `Fibrilación auricular`, `Crisis hipertensiva`, `Insuficiencia cardiaca aguda`, `Asma (exacerbación asmática)`, `Neumonía`, `Manejo de final de vida` y `Cardioversión eléctrica sincronizada`.
- Medicamentos detectados y ya modelados desde esos módulos: `Amoxicilina`, `Amoxicilina-clavulánico`, `Azitromicina`, `Butilescopolamina`, `Captopril`, `Ceftriaxona`, `Digoxina`, `Diltiazem`, `Dobutamina`, `Etomidato`, `Furosemida`, `Haloperidol`, `Ipratropio`, `Levofloxacino`, `Midazolam`, `Morfina` y `Salbutamol`.
- Medicamentos detectados pero todavía no cerrados como ficha completa: `Urapidilo`, `Verapamilo` y `Levosimendán`.
- Cálculos conectados o activados por flags según el fármaco: `dosis por peso`, `perfusión ml/h`, `dosis pediátrica`, `ajuste renal`, `ajuste hepático`, `intervalo de dosis`, `reconstitución` y `dosis máxima diaria`.
- No viable todavía como propuesta completa: un vademécum interno universal, cobertura farmacológica exhaustiva por principio activo o fichas completas para cualquier término buscado.
- Requiere más trabajo real: monografías estructuradas por fármaco, ampliación del esquema de posología y ajustes, más medicamentos modelados desde guías ya incorporadas y una política explícita de mantenimiento clínico.
- Pendiente a nivel documental: posología completa, ajustes renales/hepáticos y detalle farmacológico sistemático apoyado en monografías específicas por fármaco.
- Bibliografía usada hasta ahora: referencias externas oficiales a CIMA/AEMPS y relación contextual con protocolos y herramientas del repositorio.
- Documentos faltantes: fichas técnicas o monografías estructuradas de los fármacos ya modelados y de los pendientes reales detectados en protocolos para poder considerar el vademécum clínicamente completo.

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
- contraste más claro entre fondo general, shell principal, cabeceras, cards y paneles
- lectura de escritorio reforzada con escala tipográfica alta para consulta clínica sostenida
- sensación de escritorio inspirada en macOS Tahoe

### Móvil y tablet

- bottom bar flotante con más presencia, mejor separación del fondo y estado activo más claro
- controles tipo cápsula
- jerarquía táctil compacta
- paneles laterales convertidos en drawers/sheets

### Reglas visuales activas

- contenido por delante del efecto
- iconos SVG escalables
- radios contenidos y sombras suaves con función jerárquica
- transparencias selectivas en chrome, barras y paneles, no en el contenido clínico largo
- color clínico más vivo, pero limitado a navegación, acciones y acentos de orientación
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
- Sí tiene sentido mantener una consulta farmacológica oficial restringida a `CIMA/AEMPS` para medicamentos no modelados.
- No es viable todavía presentarlo como vademécum completo interno ni como catálogo farmacológico general offline.
- No debe simular fichas inexistentes ni comportarse como navegador libre dentro de la app.
- La experiencia más realista ahora es: búsqueda sobre fichas modeladas, recientes, favoritos, cálculos asociados y consulta oficial interna limitada a `CIMA/AEMPS` cuando falta ficha propia.
- La vista principal ya no actúa como catálogo inflado: se apoya en buscador, favoritos, recientes, utilidades farmacológicas y una vía oficial clara para los fármacos no modelados.
- En la búsqueda activa se retiran bloques accesorios que no aportan contexto inmediato, para que la resolución clínica visible sea más directa y menos inflada.
- `CIMA/AEMPS` no puede incrustarse literalmente en `iframe` porque responde con `X-Frame-Options: DENY`; por eso la traducción correcta en la app es una vista interna de consulta oficial basada en su información y con salida controlada a la consulta avanzada oficial.
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
- la consulta oficial actual prioriza ficha oficial directa de `CIMA/AEMPS` cuando existe mapeo exacto y usa la consulta avanzada oficial como fallback limpio

### Lógica de medicamentos indexados + CIMA

- medicamento indexado y con ficha propia -> abre ficha interna y ofrece también acceso a la ficha oficial en `CIMA/AEMPS`
- medicamento no indexado -> no se simula ficha interna; la resolución abre una vista interna de consulta farmacológica oficial restringida a `CIMA/AEMPS`
- si existe coincidencia oficial clara, la vista interna ofrece la ficha oficial correspondiente; si no existe coincidencia clara, ofrece la consulta avanzada oficial como continuación limpia
- si un medicamento aparece clínicamente en módulos de la app pero todavía no tiene ficha propia, sigue siendo una deuda real de modelado y no debe presentarse como ficha cerrada

### Fichas farmacológicas actualmente integradas

- Adrenalina
- Amiodarona
- Amoxicilina
- Amoxicilina-clavulánico
- Azitromicina
- Butilescopolamina
- Captopril
- Ceftriaxona
- Digoxina
- Diltiazem
- Dobutamina
- Etomidato
- Fentanilo
- Furosemida
- Haloperidol
- Ipratropio
- Labetalol
- Levofloxacino
- Metilprednisolona
- Midazolam
- Morfina
- Noradrenalina
- Propofol
- Salbutamol

## Reestructuración clínica 28/03/2026

### Cómo estaba organizada antes

- La portada abría por tipología de recurso: `Protocolos`, `Procedimientos`, `Herramientas` y `Vademécum`.
- Esa organización técnica era útil para mantenimiento, pero mezclaba contenido de consulta y contenido claramente urgente en el mismo primer nivel.
- El problema principal no estaba en el motor, sino en la clasificación clínica visible.

### Cómo queda organizada ahora

- La entrada principal se divide en dos caminos clínicos: `Atención Primaria` y `Urgencias`.
- Cada camino reutiliza el mismo catálogo ya existente, pero lo filtra por contexto asistencial y lo vuelve a presentar por `Protocolos`, `Procedimientos`, `Herramientas` y `Vademécum`.
- Las vistas transversales antiguas se mantienen para no romper la organización general ni la navegación histórica del repositorio.

### Contenido existente redistribuido

- Se mueve a `Atención Primaria` el contenido claramente ambulatorio o de seguimiento: `HTA en Atención Primaria`, `Fibrilación auricular en Atención Primaria`, `Diabetes mellitus en Atención Primaria`, `Neumonía en Atención Primaria`, `EPOC en Atención Primaria`, `Manejo de final de vida en Atención Primaria`, `Escabiosis`, `Herpes zóster`, `Helicobacter pylori`, `Fisura anal`, `Hemorroides`, `Cistitis / uretritis`, `Infección vaginal aguda`, `Sífilis`, `Otitis`, `Rinosinusitis aguda`, `Blefaritis`, `Chalazión`, `Epiescleritis`, `Hiposfagma`, `Orzuelo` y otras entidades de primera valoración sin algoritmo urgente propio.
- Se mantiene o pasa a `Urgencias` el bloque de inestabilidad, síndrome agudo y decisión inmediata: reanimación, cardiología aguda, abdomen agudo, hemorragias digestivas, sepsis, neurológico agudo, traumatología, tóxicos, radiología urgente, insuficiencia respiratoria, neumotórax, TEP, pediatría urgente y las complicaciones metabólicas o hidroelectrolíticas graves.

### Patologías desdobladas

- `HTA`: `HTA en Atención Primaria` frente a `HTA en Urgencias`.
- `Fibrilación auricular`: ruta estable de consulta frente a ruta urgente con control eléctrico/tromboembólico.
- `Diabetes`: seguimiento longitudinal en consulta frente a puerta urgente para hipoglucemia, CAD, EHH y descompensación metabólica.
- `Neumonía`: manejo ambulatorio con reevaluación frente a decisión urgente de alta, observación o ingreso.
- `EPOC`: control longitudinal con espirometría y prevención frente a agudización con oxigenoterapia controlada y VMNI.
- `Final de vida`: planificación anticipada y sostén domiciliario frente a toma de decisiones paliativas en Urgencias.

### Refuerzo del bloque de Urgencias

- La web `https://www.chuletariodeurgencias.es/index.html` se ha usado solo como apoyo para reconocer bloques útiles de práctica urgente ya presentes en la app: técnicas, perfusiones, cálculo rápido, pediatría urgente y pruebas diagnósticas.
- No se ha importado su branding ni su nomenclatura editorial.
- El refuerzo real se ha volcado en la ruta `Urgencias`, en el reetiquetado explícito de los protocolos urgentes y en la priorización de herramientas como `Objetivo de oxigenoterapia`, `Conversor de FiO2`, `VMNI`, `Velocidad de infusión`, `Anion gap`, `Osmolaridad` y `Sodio corregido por glucosa`.

### Bibliografía local priorizada

- `HTA`: `biblio/temas/HTA/HTA .pdf`, `biblio/temas/HTA/hta2.pdf`, `biblio/temas/HTA/crisis hta.pdf`, `biblio/temas/HTA/jones-et-al-2025-2025-aha-acc-aanp-aapa-abc-accp-acpm-ags-ama-aspc-nma-pcna-sgim-guideline-for-the-prevention-detection.pdf`
- `FA`: `biblio/temas/FA/GPC-ESC-2024-fibrilacion-auricular.pdf`, `biblio/temas/FA/gd_EHRA.pdf`, `biblio/temas/FA/CV electrica.pdf`, `biblio/temas/FA/CV farma.pdf`
- `Neumonía`: `biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf`, `biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf`, `biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf`
- `EPOC`: `biblio/temas/EPOC/epoc-gold-2025.pdf`, `biblio/temas/EPOC/GesEPOC.pdf`, `biblio/procedimeintos/Espirometria/Manejo practico del paciente con EPOC.pdf`, `biblio/procedimeintos/VMNI/VMNI.pdf`
- `Final de vida`: `biblio/temas/Final de vida urg/Manejo_del_Final_de_Vida_en_Urgencias.pdf`, `biblio/temas/Final de vida urg/2022_Recomendaciones-de-cuidados-al-final-de-la-vida-en-los-servicios-de-urgencias.pdf`, `biblio/Cursos/Paliativos/M4_ Vía subcutánea en atención paliativa.pdf`, `biblio/temas/UCP/gpc_612_atencion_paliativa_avaliat_compl.pdf`
- `Diabetes`: `biblio/Cursos/ Diabetes y obesidad/Diabetes y obesidad.pdf`, `biblio/temas/Pie diabetico/Guía Nacional Pie Diabético_DIGITAL.pdf`

### Nombres mantenidos y nombres rechazados

- Se mantienen los nombres propios de la app: `Atención Primaria`, `Urgencias`, `Protocolos`, `Procedimientos`, `Herramientas`, `Vademécum`.
- Se mantiene la organización editorial por familias clínicas y se reutiliza el catálogo existente en lugar de copiar una web externa.
- No se importan nombres editoriales de la web externa como `Chuletario`, ni se replica su taxonomía literal de portada.

### Pendiente real

- Persisten protocolos endocrinológicos urgentes todavía en plantilla o desarrollo parcial, aunque ya quedan enganchados al nuevo camino `Urgencias`.
- Queda margen para una segunda pasada de revisión bibliográfica exhaustiva en más patologías fronterizas entre consulta y Urgencias.

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

Ese comando regenera `core/registry.js`, `core/precache-manifest.js` y `biblio/INDEX.md`.

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
6. Regenera `core/registry.js`, `core/precache-manifest.js` y `biblio/INDEX.md`

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
- **[28/03/2026]** Reindexación recursiva de `biblio/` tras su reorganización en `Cursos`, `procedimeintos` y `temas`: `generate_registry.py` genera ahora también `biblio/INDEX.md`, el inventario sube a 405 archivos y las referencias bibliográficas activas se corrigen a sus nuevas rutas reales.
- **[26/03/2026]** Ajuste fino de UI sin tocar motor: fondo más clínico y menos pálido, superficies más separadas, azul principal más presente, buscador y botones más coherentes, listados sobrios reforzados, radios más contenidos y barra inferior móvil más clara y usable.
- **[26/03/2026]** Limpieza estructural visible sin tocar arquitectura: home convertida en hub limpio, títulos duplicados retirados de las vistas de app, drawers de sección sin navegación redundante, listas aligeradas con estado discreto de completitud para protocolos/procedimientos, firma PNG global integrada y redefinición honesta del alcance real del Vademécum.
- **[26/03/2026]** Refinado final de interfaz y Vademécum sin tocar arquitectura: mensajes técnicos retirados de la UI, copy del Vademécum orientado a uso real, separación entre fichas disponibles y medicamentos pendientes de ficha, resolución oficial hacia CIMA/AEMPS más precisa y correcciones de overflow en pills, botones y tarjetas.
- **[26/03/2026]** Ajuste de segunda pasada sobre Vademécum y lectura de escritorio: la vista principal del Vademécum deja de comportarse como catálogo pesado, prioriza búsqueda útil + fichas reales + pendientes resumidos, la salida oficial usa ficha directa cuando puede y búsqueda avanzada como fallback limpio, la firma PNG gana presencia en escritorio y la escala tipográfica de ordenador se incrementa de forma marcada para lectura clínica sostenida.
- **[26/03/2026]** Evolución visual inspirada en referencias externas sin copiar su lenguaje literal: más separación entre planos, fondos menos lavados, cards y paneles con relieve fino, cabeceras y buscador con más presencia controlada, accesos de la home más vivos por tono y barra inferior móvil convertida en una pieza más sólida y diseñada sin perder tono clínico.
- **[26/03/2026]** Corrección definitiva del flujo del Vademécum: búsqueda unificada con una sola resolución principal por término, ficha interna automática cuando existe entrada propia y vista interna de consulta farmacológica oficial restringida a `CIMA/AEMPS` cuando no existe ficha; se elimina la falsa sensación de navegador libre o de ficha farmacológica inexistente.
- **[26/03/2026]** Segunda capa de refinamiento móvil y expansión clínica del Vademécum: aumento controlado de profundidad y contraste del shell, compactación tipográfica en móvil para evitar scroll vertical innecesario, firma PNG corregida en escritorio y móvil, barra inferior móvil retractil con animación suave y sin solape persistente sobre listados, y ampliación del Vademécum desde módulos reales (`Fibrilación auricular`, `Insuficiencia cardiaca aguda`, `Asma`, `Manejo de final de vida` y `Cardioversión eléctrica`) con nuevas fichas para `Digoxina`, `Diltiazem`, `Dobutamina`, `Etomidato`, `Haloperidol`, `Ipratropio`, `Midazolam` y `Salbutamol`.
- **[27/03/2026]** Corrección real de densidad y navegación móvil: home móvil compactada con solo cuatro accesos principales y utilidad ligera para `Favoritos`, retirada de la duplicación del acceso `Buscar`, reducción visible de altura y padding en tarjetas/listados, ordenación por estado real en protocolos y barra inferior móvil con retractilidad funcional ligada al scroll, transición suave y menor solape sobre contenido.
- **[27/03/2026]** Expansión del Vademécum desde protocolos ya subidos: revisión de `Crisis hipertensiva`, `Insuficiencia cardiaca aguda`, `Neumonía` y `Manejo de final de vida`, incorporación de nuevas fichas para `Captopril`, `Furosemida`, `Morfina`, `Butilescopolamina`, `Amoxicilina` y `Amoxicilina-clavulánico`, conexiones directas protocolo→fármaco y mantenimiento de `CIMA/AEMPS` como consulta oficial restringida cuando no existe ficha propia.
- **[27/03/2026]** Implementación del icono externo de instalación/PWA: nuevo fonendoscopio simplificado como identidad de app para `manifest.json`, favicon y `apple-touch-icon`, separado de la firma PNG editorial del shell y sin depender de símbolos médicos genéricos.
- **[27/03/2026]** Refuerzo clínico específico de `Neumonía`: protocolo ampliado a NAC adulta inmunocompetente con anamnesis, exploración, pruebas, criterios de gravedad, manejo ambulatorio vs ingreso, tratamiento inicial y reevaluación; creación de `alg-neumonia`; activación real de `CRB-65` y `CURB-65`; refuerzo de `Amoxicilina` y `Amoxicilina-clavulánico`; y nuevas fichas de Vademécum para `Azitromicina`, `Ceftriaxona` y `Levofloxacino` apoyadas en `SEPAR 2020`, `Fisterra 2021` y `PRIOAM`.
- **[28/03/2026]** Reestructuración clínica mayor del acceso principal: `Inicio` pasa a abrir por `Atención Primaria` y `Urgencias`, se añaden metadatos asistenciales al registro generado, se conservan las vistas transversales históricas y el catálogo completo queda filtrable por contexto clínico sin tocar el motor base.
- **[28/03/2026]** Redistribución y desdoble razonado de protocolos: nuevas fichas de `HTA`, `Fibrilación auricular`, `Diabetes mellitus`, `Neumonía`, `EPOC` y `Manejo de final de vida` para `Atención Primaria`, refuerzo explícito de sus equivalentes urgentes y documentación clínica consolidada en el README.
- **[28/03/2026]** Uso controlado de apoyo externo para `Urgencias`: la web `chuletariodeurgencias.es` se toma solo como detector de bloques prácticos útiles; se mantiene la nomenclatura propia de la app y se prioriza siempre la bibliografía local de `biblio/` para revisar o sostener el contenido clínico.
