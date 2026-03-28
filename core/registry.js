export const CARE_PATHS = {
  "atencion-primaria": {
    "label": "Atención Primaria",
    "copy": "Contenido orientado a consulta, continuidad asistencial, seguimiento y derivación razonada.",
    "sectionCopy": "Protocolos y recursos priorizados para cribado, manejo ambulatorio y control evolutivo."
  },
  "urgencias": {
    "label": "Urgencias",
    "copy": "Contenido orientado a valoración inmediata, red flags, tratamiento agudo y decisión de ingreso o alta.",
    "sectionCopy": "Protocolos y recursos priorizados para inestabilidad, pruebas inmediatas y soporte urgente."
  }
};

export const NAV_ITEMS = [
  {
    "id": "inicio",
    "label": "Inicio",
    "path": "/"
  },
  {
    "id": "atencion-primaria",
    "label": "Atención Primaria",
    "path": "/atencion-primaria"
  },
  {
    "id": "urgencias",
    "label": "Urgencias",
    "path": "/urgencias"
  },
  {
    "id": "buscar",
    "label": "Buscar",
    "path": "/buscar"
  },
  {
    "id": "favoritos",
    "label": "Favoritos",
    "path": "/favoritos"
  }
];

export const SECTION_SUMMARIES = {
  "inicio": "Biblioteca clínica operativa para consulta, decisión y cálculo en el punto de atención.",
  "atencion-primaria": "Ruta clínica para valoración ambulatoria, seguimiento, tratamiento escalonado y derivación desde consulta.",
  "urgencias": "Ruta clínica para triage, red flags, tratamiento agudo y decisión de ingreso o alta.",
  "protocolos": "Fichas consultivas modulares con preparación para algoritmos interactivos.",
  "procedimientos": "Técnicas clínicas con pasos críticos, seguridad y soporte de checklist o flujo.",
  "herramientas": "Scores, escalas, calculadoras y conversores integrados en el shell común.",
  "vademecum": "Fichas farmacológicas con metadatos internos para activar cálculos contextuales.",
  "buscar": "Búsqueda global, filtros, historial local y acceso rápido a favoritos.",
  "favoritos": "Persistencia local centralizada de accesos clínicos frecuentes."
};

export const CATEGORY_ORDER = {
  "protocolos": [
    "Cardiología",
    "Respiratorio",
    "Neurología",
    "Digestivo",
    "Nefrología / Metabólico",
    "Nefro-urología",
    "Endocrinología",
    "ORL",
    "Oftalmología",
    "Ginecología / ETS",
    "Pediatría",
    "Toxicología",
    "Dermatología / Infecciosas",
    "Agentes físicos / ambientales",
    "Radiología",
    "Cuidados paliativos / final de vida"
  ],
  "procedimientos": [
    "Urgencias y consulta"
  ],
  "herramientas": [
    "Scores y escalas",
    "Calculadoras clínicas",
    "Electrolitos y metabólico",
    "Respiratorio",
    "Fármacos y perfusión",
    "Conversores"
  ],
  "vademecum": [
    "Cardiovasculares y vasoactivos",
    "Sedación y analgesia",
    "Paliativos y neuropsiquiatría",
    "Respiratorio y corticoides",
    "Antiinfecciosos frecuentes",
    "Emergencias críticas"
  ]
};

export const ENTRIES = [
  {
    "id": "herramientas-anion-gap",
    "slug": "anion-gap",
    "title": "Anion gap",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/anion-gap",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/anion-gap.html",
    "keywords": "Anion gap Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Anion gap Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-calcio-corregido",
    "slug": "calcio-corregido",
    "title": "Calcio corregido",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/calcio-corregido",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/calcio-corregido.html",
    "keywords": "Calcio corregido Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Calcio corregido Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-correccion-qtc",
    "slug": "correccion-qtc",
    "title": "Corrección QTc",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/correccion-qtc",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/correccion-qtc.html",
    "keywords": "Corrección QTc Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Corrección QTc Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-espirometria",
    "slug": "espirometria",
    "title": "Espirometría",
    "summary": "Guía rápida de preparación, calidad e interpretación básica de la espirometría para apoyo en consulta y urgencias respiratorias.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/espirometria",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/espirometria.html",
    "keywords": "Espirometría Guía rápida de preparación, calidad e interpretación básica de la espirometría para apoyo en consulta y urgencias respiratorias. Herramientas Calculadoras clínicas Atención Primaria espirometría FEV1 FVC FEV1/FVC patrón obstructivo restrictivo mixto prueba broncodilatadora contraindicaciones preparación Espirometría Guía rápida de preparación, calidad e interpretación básica de la espirometría para apoyo en consulta y urgencias respiratorias. Puntos clave La espirometría es obligatoria para confirmar obstrucción persistente en EPOC y útil para orientar patrón obstructivo, restrictivo o mixto. Una técnica deficiente invalida la interpretación; conviene revisar preparación, contraindicaciones y repetibilidad antes de concluir. La prueba broncodilatadora ayuda a objetivar reversibilidad, pero no equivale por sí sola a normalización completa. Preparación mínima Evitar fumar o vapear en la hora previa, ejercicio intenso y comidas copiosas justo antes de la prueba. Revisar suspensión de broncodilatadores según fármaco si la indicación lo requiere. No realizarla si existe inestabilidad hemodinámica, hemoptisis aguda, angina inestable, aneurisma no controlado o cirugía reciente de riesgo. Interpretación orientativa Patrón obstructivo: Patrón restrictivo: Patrón mixto: Prueba broncodilatadora Útil cuando se desea objetivar respuesta al broncodilatador o completar estudio de obstrucción. La mejoría de FEV1 o FVC tras broncodilatador debe interpretarse junto al contexto clínico. Integrar siempre la técnica, síntomas, tabaquismo, exposición y espirometría basal en la decisión final. Láminas rápidas desde /biblio Esquemas locales integrados para consulta visual rápida. Preparación previa, referencia básica y contraindicaciones prácticas antes de hacer la prueba. Algoritmo visual para diferenciar patrón normal, obstructivo, restrictivo y mixto. Fuentes integradas desde /biblio Se ha utilizado material visual y documental ya presente en la biblioteca local del proyecto. /biblio/procedimeintos/Espirometria/Guía Rápida .pdf /biblio/procedimeintos/Espirometria/Espirometria.pdf /biblio/procedimeintos/Espirometria/Interpretacion espiromeria FAES.pdf /biblio/procedimeintos/Espirometria/ESPIROMETRIA - 1.png y /biblio/procedimeintos/Espirometria/ESPIROMETRIA - 2.png",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-fena",
    "slug": "fena",
    "title": "FeNa",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/fena",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/fena.html",
    "keywords": "FeNa Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias FeNa Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-feurea",
    "slug": "feurea",
    "title": "FeUrea",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/feurea",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/feurea.html",
    "keywords": "FeUrea Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias FeUrea Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-gradiente-alveolo-arterial",
    "slug": "gradiente-alveolo-arterial",
    "title": "Gradiente alveolo-arterial",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/gradiente-alveolo-arterial",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/gradiente-alveolo-arterial.html",
    "keywords": "Gradiente alveolo-arterial Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Gradiente alveolo-arterial Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-osmolaridad-calculada",
    "slug": "osmolaridad-calculada",
    "title": "Osmolaridad calculada",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/osmolaridad-calculada",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/osmolaridad-calculada.html",
    "keywords": "Osmolaridad calculada Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Osmolaridad calculada Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-pao2-fio2",
    "slug": "pao2-fio2",
    "title": "PaO2 / FiO2",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/pao2-fio2",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/pao2-fio2.html",
    "keywords": "PaO2 / FiO2 Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias PaO2 / FiO2 Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-sodio-corregido-por-glucosa",
    "slug": "sodio-corregido-por-glucosa",
    "title": "Sodio corregido por glucosa",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/sodio-corregido-por-glucosa",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/sodio-corregido-por-glucosa.html",
    "keywords": "Sodio corregido por glucosa Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Sodio corregido por glucosa Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-indice-de-shock",
    "slug": "indice-de-shock",
    "title": "Índice de shock",
    "summary": "Categoría: CALCULADORAS CLÍNICAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Calculadoras clínicas",
    "route": "/herramientas/indice-de-shock",
    "sourcePath": "/content/herramientas/calculadoras-clinicas/indice-de-shock.html",
    "keywords": "Índice de shock Categoría: CALCULADORAS CLÍNICAS Herramientas Calculadoras clínicas Urgencias Índice de shock Categoría: CALCULADORAS CLÍNICAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-celsius-fahrenheit",
    "slug": "celsius-fahrenheit",
    "title": "Celsius / Fahrenheit",
    "summary": "Categoría: CONVERSORES",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Conversores",
    "route": "/herramientas/celsius-fahrenheit",
    "sourcePath": "/content/herramientas/conversores/celsius-fahrenheit.html",
    "keywords": "Celsius / Fahrenheit Categoría: CONVERSORES Herramientas Conversores Urgencias Celsius / Fahrenheit Categoría: CONVERSORES Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-kg-lb",
    "slug": "kg-lb",
    "title": "kg / lb",
    "summary": "Categoría: CONVERSORES",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Conversores",
    "route": "/herramientas/kg-lb",
    "sourcePath": "/content/herramientas/conversores/kg-lb.html",
    "keywords": "kg / lb Categoría: CONVERSORES Herramientas Conversores Atención Primaria Urgencias kg / lb Categoría: CONVERSORES Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-mg-g-mcg",
    "slug": "mg-g-mcg",
    "title": "mg / g / mcg",
    "summary": "Categoría: CONVERSORES",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Conversores",
    "route": "/herramientas/mg-g-mcg",
    "sourcePath": "/content/herramientas/conversores/mg-g-mcg.html",
    "keywords": "mg / g / mcg Categoría: CONVERSORES Herramientas Conversores Atención Primaria Urgencias mg / g / mcg Categoría: CONVERSORES Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-ml-l-dl",
    "slug": "ml-l-dl",
    "title": "ml / l / dl",
    "summary": "Categoría: CONVERSORES",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Conversores",
    "route": "/herramientas/ml-l-dl",
    "sourcePath": "/content/herramientas/conversores/ml-l-dl.html",
    "keywords": "ml / l / dl Categoría: CONVERSORES Herramientas Conversores Atención Primaria Urgencias ml / l / dl Categoría: CONVERSORES Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-mmol-meq-cuando-aplique",
    "slug": "mmol-meq-cuando-aplique",
    "title": "mmol / mEq cuando aplique",
    "summary": "Categoría: CONVERSORES",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Conversores",
    "route": "/herramientas/mmol-meq-cuando-aplique",
    "sourcePath": "/content/herramientas/conversores/mmol-meq-cuando-aplique.html",
    "keywords": "mmol / mEq cuando aplique Categoría: CONVERSORES Herramientas Conversores Atención Primaria Urgencias mmol / mEq cuando aplique Categoría: CONVERSORES Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-calculo-orientativo-de-reposicion-de-magnesio",
    "slug": "calculo-orientativo-de-reposicion-de-magnesio",
    "title": "Cálculo orientativo de reposición de magnesio",
    "summary": "Categoría: ELECTROLITOS Y METABÓLICO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Electrolitos y metabólico",
    "route": "/herramientas/calculo-orientativo-de-reposicion-de-magnesio",
    "sourcePath": "/content/herramientas/electrolitos-y-metabolico/calculo-orientativo-de-reposicion-de-magnesio.html",
    "keywords": "Cálculo orientativo de reposición de magnesio Categoría: ELECTROLITOS Y METABÓLICO Herramientas Electrolitos y metabólico Urgencias Cálculo orientativo de reposición de magnesio Categoría: ELECTROLITOS Y METABÓLICO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-deficit-de-agua-libre",
    "slug": "deficit-de-agua-libre",
    "title": "Déficit de agua libre",
    "summary": "Categoría: ELECTROLITOS Y METABÓLICO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Electrolitos y metabólico",
    "route": "/herramientas/deficit-de-agua-libre",
    "sourcePath": "/content/herramientas/electrolitos-y-metabolico/deficit-de-agua-libre.html",
    "keywords": "Déficit de agua libre Categoría: ELECTROLITOS Y METABÓLICO Herramientas Electrolitos y metabólico Urgencias Déficit de agua libre Categoría: ELECTROLITOS Y METABÓLICO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-deficit-de-sodio",
    "slug": "deficit-de-sodio",
    "title": "Déficit de sodio",
    "summary": "Categoría: ELECTROLITOS Y METABÓLICO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Electrolitos y metabólico",
    "route": "/herramientas/deficit-de-sodio",
    "sourcePath": "/content/herramientas/electrolitos-y-metabolico/deficit-de-sodio.html",
    "keywords": "Déficit de sodio Categoría: ELECTROLITOS Y METABÓLICO Herramientas Electrolitos y metabólico Urgencias Déficit de sodio Categoría: ELECTROLITOS Y METABÓLICO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-deficit-orientativo-de-potasio",
    "slug": "deficit-orientativo-de-potasio",
    "title": "Déficit orientativo de potasio",
    "summary": "Categoría: ELECTROLITOS Y METABÓLICO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Electrolitos y metabólico",
    "route": "/herramientas/deficit-orientativo-de-potasio",
    "sourcePath": "/content/herramientas/electrolitos-y-metabolico/deficit-orientativo-de-potasio.html",
    "keywords": "Déficit orientativo de potasio Categoría: ELECTROLITOS Y METABÓLICO Herramientas Electrolitos y metabólico Urgencias Déficit orientativo de potasio Categoría: ELECTROLITOS Y METABÓLICO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-concentracion-reconstitucion",
    "slug": "concentracion-reconstitucion",
    "title": "Concentración / reconstitución",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/concentracion-reconstitucion",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/concentracion-reconstitucion.html",
    "keywords": "Concentración / reconstitución Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Urgencias Concentración / reconstitución Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-calculo-de-bolos",
    "slug": "calculo-de-bolos",
    "title": "Cálculo de bolos",
    "summary": "Convierte dosis por kg y concentración final en volumen a administrar.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/calculo-de-bolos",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/calculo-de-bolos.html",
    "keywords": "Cálculo de bolos Convierte dosis por kg y concentración final en volumen a administrar. Herramientas Fármacos y perfusión Urgencias Cálculo de bolos Convierte dosis por kg y concentración final en volumen a administrar. Calculadora Disponible para protocolos y vademécum cuando un medicamento requiera apoyo por peso o concentración.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-dosis-pediatrica",
    "slug": "dosis-pediatrica",
    "title": "Dosis pediátrica",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/dosis-pediatrica",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/dosis-pediatrica.html",
    "keywords": "Dosis pediátrica Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Atención Primaria Urgencias Dosis pediátrica Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-fluidoterapia-endovenosa",
    "slug": "fluidoterapia-endovenosa",
    "title": "Fluidoterapia endovenosa",
    "summary": "Apoyo rápido para planificar bolos y reposición inicial según peso.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/fluidoterapia-endovenosa",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/fluidoterapia-endovenosa.html",
    "keywords": "Fluidoterapia endovenosa Apoyo rápido para planificar bolos y reposición inicial según peso. Herramientas Fármacos y perfusión Urgencias Fluidoterapia endovenosa Apoyo rápido para planificar bolos y reposición inicial según peso. Calculadora La lógica interactiva del cálculo se carga dentro del shell para mantenerla reutilizable desde protocolos y vademécum.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-goteo-y-perfusion",
    "slug": "goteo-y-perfusion",
    "title": "Goteo y perfusión",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/goteo-y-perfusion",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/goteo-y-perfusion.html",
    "keywords": "Goteo y perfusión Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Urgencias Goteo y perfusión Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-mantenimiento-hidrico",
    "slug": "mantenimiento-hidrico",
    "title": "Mantenimiento hídrico",
    "summary": "Cálculo orientativo de necesidades basales con salida en mL/día y mL/h.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/mantenimiento-hidrico",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/mantenimiento-hidrico.html",
    "keywords": "Mantenimiento hídrico Cálculo orientativo de necesidades basales con salida en mL/día y mL/h. Herramientas Fármacos y perfusión Atención Primaria Urgencias Mantenimiento hídrico Cálculo orientativo de necesidades basales con salida en mL/día y mL/h. Calculadora Integrada en el motor para poder abrirse desde fluidoterapia, pediatría y fichas farmacológicas.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-peso-estimado-pediatrico",
    "slug": "peso-estimado-pediatrico",
    "title": "Peso estimado pediátrico",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/peso-estimado-pediatrico",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/peso-estimado-pediatrico.html",
    "keywords": "Peso estimado pediátrico Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Atención Primaria Urgencias Peso estimado pediátrico Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-reposicion-de-perdidas",
    "slug": "reposicion-de-perdidas",
    "title": "Reposición de pérdidas",
    "summary": "Convierte pérdidas cuantificadas en una velocidad orientativa de reposición.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/reposicion-de-perdidas",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/reposicion-de-perdidas.html",
    "keywords": "Reposición de pérdidas Convierte pérdidas cuantificadas en una velocidad orientativa de reposición. Herramientas Fármacos y perfusión Atención Primaria Urgencias Reposición de pérdidas Convierte pérdidas cuantificadas en una velocidad orientativa de reposición. Calculadora Especialmente útil como apoyo en gastroenteritis, drenajes y pérdidas continuadas monitorizadas.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-superficie-corporal",
    "slug": "superficie-corporal",
    "title": "Superficie corporal",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/superficie-corporal",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/superficie-corporal.html",
    "keywords": "Superficie corporal Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Atención Primaria Urgencias Superficie corporal Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-velocidad-de-infusion-ml-h",
    "slug": "velocidad-de-infusion-ml-h",
    "title": "Velocidad de infusión ml/h",
    "summary": "Categoría: FÁRMACOS Y PERFUSIÓN",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Fármacos y perfusión",
    "route": "/herramientas/velocidad-de-infusion-ml-h",
    "sourcePath": "/content/herramientas/farmacos-y-perfusion/velocidad-de-infusion-ml-h.html",
    "keywords": "Velocidad de infusión ml/h Categoría: FÁRMACOS Y PERFUSIÓN Herramientas Fármacos y perfusión Urgencias Velocidad de infusión ml/h Categoría: FÁRMACOS Y PERFUSIÓN Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-calculadora-basica-de-vmni",
    "slug": "calculadora-basica-de-vmni",
    "title": "Calculadora básica de VMNI",
    "summary": "Categoría: RESPIRATORIO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Respiratorio",
    "route": "/herramientas/calculadora-basica-de-vmni",
    "sourcePath": "/content/herramientas/respiratorio/calculadora-basica-de-vmni.html",
    "keywords": "Calculadora básica de VMNI Categoría: RESPIRATORIO Herramientas Respiratorio Urgencias Calculadora básica de VMNI Categoría: RESPIRATORIO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-conversor-de-fio2-segun-dispositivo",
    "slug": "conversor-de-fio2-segun-dispositivo",
    "title": "Conversor de FiO2 según dispositivo",
    "summary": "Categoría: RESPIRATORIO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Respiratorio",
    "route": "/herramientas/conversor-de-fio2-segun-dispositivo",
    "sourcePath": "/content/herramientas/respiratorio/conversor-de-fio2-segun-dispositivo.html",
    "keywords": "Conversor de FiO2 según dispositivo Categoría: RESPIRATORIO Herramientas Respiratorio Urgencias Conversor de FiO2 según dispositivo Categoría: RESPIRATORIO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-objetivo-de-oxigenoterapia",
    "slug": "objetivo-de-oxigenoterapia",
    "title": "Objetivo de oxigenoterapia",
    "summary": "Categoría: RESPIRATORIO",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Respiratorio",
    "route": "/herramientas/objetivo-de-oxigenoterapia",
    "sourcePath": "/content/herramientas/respiratorio/objetivo-de-oxigenoterapia.html",
    "keywords": "Objetivo de oxigenoterapia Categoría: RESPIRATORIO Herramientas Respiratorio Urgencias Objetivo de oxigenoterapia Categoría: RESPIRATORIO Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-cha2ds2-vasc",
    "slug": "cha2ds2-vasc",
    "title": "CHA2DS2-VASc",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/cha2ds2-vasc",
    "sourcePath": "/content/herramientas/scores-y-escalas/cha2ds2-vasc.html",
    "keywords": "CHA2DS2-VASc Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria Urgencias CHA2DS2-VASc Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-crb-65",
    "slug": "crb-65",
    "title": "CRB-65",
    "summary": "Escala clínica rápida para apoyar la estratificación de gravedad de la neumonía adquirida en la comunidad cuando no se dispone todavía de analítica.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/crb-65",
    "sourcePath": "/content/herramientas/scores-y-escalas/crb-65.html",
    "keywords": "CRB-65 Escala clínica rápida para apoyar la estratificación de gravedad de la neumonía adquirida en la comunidad cuando no se dispone todavía de analítica. Herramientas Scores y escalas Atención Primaria Urgencias crb-65 neumonia adquirida comunidad score gravedad atencion primaria ingreso CRB-65 Escala clínica rápida para apoyar la estratificación de gravedad de la neumonía adquirida en la comunidad cuando no se dispone todavía de analítica. Qué valora Confusión nueva. Frecuencia respiratoria igual o mayor de 30 respiraciones por minuto. Hipotensión: PAS menor de 90 mmHg o PAD igual o menor de 60 mmHg. Edad igual o mayor de 65 años. Interpretación operativa 0 puntos: riesgo bajo; puede manejarse de forma ambulatoria si no hay hipoxemia, afectación multilobular, derrame pleural, descompensación de comorbilidades ni problemas sociales. 1-2 puntos: la escala ya eleva el umbral de derivación y valoración hospitalaria, especialmente fuera del entorno monitorizado. 3-4 puntos: ingreso urgente y vigilancia estrecha. Límites Es la escala más práctica en atención primaria, pero no sustituye la valoración global del paciente. Incluso con 0 puntos se debe ingresar si hay insuficiencia respiratoria, derrame pleural, fracaso antibiótico previo, intolerancia digestiva o ausencia de soporte social. Fuentes integradas desde /biblio Interpretación alineada con Fisterra, SEPAR y la guía PRIOAM para neumonía comunitaria. /biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf /biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf /biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-curb-65",
    "slug": "curb-65",
    "title": "CURB-65",
    "summary": "Escala pronóstica de apoyo para decidir ámbito de tratamiento en neumonía adquirida en la comunidad cuando ya se dispone de analítica con urea.",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/curb-65",
    "sourcePath": "/content/herramientas/scores-y-escalas/curb-65.html",
    "keywords": "CURB-65 Escala pronóstica de apoyo para decidir ámbito de tratamiento en neumonía adquirida en la comunidad cuando ya se dispone de analítica con urea. Herramientas Scores y escalas Urgencias curb-65 neumonia adquirida comunidad score gravedad ingreso urea CURB-65 Escala pronóstica de apoyo para decidir ámbito de tratamiento en neumonía adquirida en la comunidad cuando ya se dispone de analítica con urea. Qué valora Confusión nueva. Urea mayor de 42 mg/dL. Frecuencia respiratoria igual o mayor de 30 respiraciones por minuto. Hipotensión: PAS menor de 90 mmHg o PAD igual o menor de 60 mmHg. Edad igual o mayor de 65 años. Interpretación operativa 0-1 puntos: tratamiento domiciliario si no coexisten criterios clínicos o sociales de ingreso, con reevaluación en 48-72 horas. 2 puntos: ingreso convencional u observación hospitalaria de 24 horas. 3 o más puntos: ingreso hospitalario y valoración de área monitorizada o UCI según insuficiencia respiratoria y estabilidad hemodinámica. Límites No desplaza la valoración clínica integral ni la necesidad de ingreso por hipoxemia, afectación multilobular, derrame pleural o soporte social insuficiente. Si no se dispone de analítica, la alternativa práctica es CRB-65. Fuentes integradas desde /biblio Interpretación basada en PRIOAM, Fisterra y SEPAR para neumonía comunitaria en adulto. /biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf /biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf /biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-centor-mcisaac",
    "slug": "centor-mcisaac",
    "title": "Centor / McIsaac",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/centor-mcisaac",
    "sourcePath": "/content/herramientas/scores-y-escalas/centor-mcisaac.html",
    "keywords": "Centor / McIsaac Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria Centor / McIsaac Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-glasgow-coma-scale",
    "slug": "glasgow-coma-scale",
    "title": "Glasgow Coma Scale",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/glasgow-coma-scale",
    "sourcePath": "/content/herramientas/scores-y-escalas/glasgow-coma-scale.html",
    "keywords": "Glasgow Coma Scale Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias Glasgow Coma Scale Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-has-bled",
    "slug": "has-bled",
    "title": "HAS-BLED",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/has-bled",
    "sourcePath": "/content/herramientas/scores-y-escalas/has-bled.html",
    "keywords": "HAS-BLED Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria Urgencias HAS-BLED Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-ipaq",
    "slug": "ipaq",
    "title": "IPAQ",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/ipaq",
    "sourcePath": "/content/herramientas/scores-y-escalas/ipaq.html",
    "keywords": "IPAQ Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria IPAQ Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-medas",
    "slug": "medas",
    "title": "MEDAS",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/medas",
    "sourcePath": "/content/herramientas/scores-y-escalas/medas.html",
    "keywords": "MEDAS Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria MEDAS Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-news2",
    "slug": "news2",
    "title": "NEWS2",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/news2",
    "sourcePath": "/content/herramientas/scores-y-escalas/news2.html",
    "keywords": "NEWS2 Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias NEWS2 Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-perc",
    "slug": "perc",
    "title": "PERC",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/perc",
    "sourcePath": "/content/herramientas/scores-y-escalas/perc.html",
    "keywords": "PERC Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias PERC Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-score2",
    "slug": "score2",
    "title": "SCORE2",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/score2",
    "sourcePath": "/content/herramientas/scores-y-escalas/score2.html",
    "keywords": "SCORE2 Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria SCORE2 Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-score2-op",
    "slug": "score2-op",
    "title": "SCORE2-OP",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/score2-op",
    "sourcePath": "/content/herramientas/scores-y-escalas/score2-op.html",
    "keywords": "SCORE2-OP Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Atención Primaria SCORE2-OP Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-sofa",
    "slug": "sofa",
    "title": "SOFA",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/sofa",
    "sourcePath": "/content/herramientas/scores-y-escalas/sofa.html",
    "keywords": "SOFA Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias SOFA Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-wells-para-tep",
    "slug": "wells-para-tep",
    "title": "Wells para TEP",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/wells-para-tep",
    "sourcePath": "/content/herramientas/scores-y-escalas/wells-para-tep.html",
    "keywords": "Wells para TEP Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias Wells para TEP Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-years",
    "slug": "years",
    "title": "YEARS",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/years",
    "sourcePath": "/content/herramientas/scores-y-escalas/years.html",
    "keywords": "YEARS Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias YEARS Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "herramientas-qsofa",
    "slug": "qsofa",
    "title": "qSOFA",
    "summary": "Categoría: SCORES Y ESCALAS",
    "section": "herramientas",
    "sectionLabel": "Herramientas",
    "kind": "herramientas",
    "kindLabel": "Herramienta",
    "category": "Scores y escalas",
    "route": "/herramientas/qsofa",
    "sourcePath": "/content/herramientas/scores-y-escalas/qsofa.html",
    "keywords": "qSOFA Categoría: SCORES Y ESCALAS Herramientas Scores y escalas Urgencias qSOFA Categoría: SCORES Y ESCALAS Calculadora / Score Módulo interactivo en desarrollo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-acceso-intraoseo",
    "slug": "acceso-intraoseo",
    "title": "Acceso intraóseo",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/acceso-intraoseo",
    "sourcePath": "/content/procedimientos/acceso-intraoseo.html",
    "keywords": "Acceso intraóseo Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Urgencias Acceso intraóseo Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-cardioversion-electrica-sincronizada",
    "slug": "cardioversion-electrica-sincronizada",
    "title": "Cardioversión eléctrica sincronizada",
    "summary": "Procedimiento para restaurar el ritmo sinusal mediante descarga sincronizada con la onda R en arritmias organizadas, especialmente fibrilación auricular mal tolerada o cuando se ha elegido estrategia de control del ritmo.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/cardioversion-electrica-sincronizada",
    "sourcePath": "/content/procedimientos/cardioversion-electrica-sincronizada.html",
    "keywords": "Cardioversión eléctrica sincronizada Procedimiento para restaurar el ritmo sinusal mediante descarga sincronizada con la onda R en arritmias organizadas, especialmente fibrilación auricular mal tolerada o cuando se ha elegido estrategia de control del ritmo. Procedimientos Urgencias y consulta Urgencias cardioversión eléctrica sincronizada fibrilación auricular flutter onda R sedación palas anteroposterior bifásica 100 J 200 J anticoagulación Cardioversión eléctrica sincronizada Procedimiento para restaurar el ritmo sinusal mediante descarga sincronizada con la onda R en arritmias organizadas, especialmente fibrilación auricular mal tolerada o cuando se ha elegido estrategia de control del ritmo. Puntos clave La descarga debe sincronizarse con la onda R para evitar un choque sobre la fase vulnerable de la onda T y reducir la inducción de fibrilación ventricular. La cardioversión eléctrica es más eficaz que la farmacológica, pero requiere sedación o anestesia, monitorización continua y revisión previa de la estrategia anticoagulante. La posición anteroposterior de las palas o parches ofrece mejor rendimiento en fibrilación auricular que la colocación antero-anterior. Indicaciones prácticas Paciente hemodinámicamente inestable con fibrilación auricular o flutter mal tolerados. FA paroxística de menos de 48 horas sin reversión espontánea o tras fracaso de cardioversión farmacológica. FA persistente o de duración desconocida cuando se ha planificado estrategia de control del ritmo y se ha cubierto correctamente la prevención tromboembólica. Comprobaciones previas Confirmar ritmo que requiere sincronización, monitor ECG útil y correcta detección de la onda R antes de la descarga. Revisar anticoagulación: mantenerla durante 3-4 semanas previas o acortar el proceso solo si la ecocardiografía transesofágica ha excluido trombo auricular. Canalizar vía venosa, monitorizar ECG, frecuencia cardiaca y SatO2; la capnografía es deseable cuando se hace sedación profunda. Corregir hipopotasemia y evitar el procedimiento en contexto de toxicidad digitálica. Técnica resumida Colocar palas o parches con buen contacto cutáneo, preferiblemente en posición anteroposterior, evitando apoyar el electrodo anterior sobre tejido mamario. Con desfibrilador bifásico, iniciar habitualmente con 100 J; con monofásico, con 200 J, y escalar progresivamente si no hay conversión. Esperar al menos un minuto entre descargas para reevaluar ritmo, impedancia y necesidad de aumentar energía. En flutter auricular algunos autores recogen energías iniciales menores, pero en la práctica de urgencias suele priorizarse una estrategia simple y escalable. Posición de palas Esquema extraído de la bibliografía local auditada e integrado como apoyo visual del procedimiento. La posición anteroposterior mejora la eficacia en fibrilación auricular al abarcar mejor ambas aurículas y reducir parte de la impedancia transtorácica. Sedación y seguridad La cardioversión eléctrica transcutánea suele requerir sedación o anestesia breve por el dolor del choque. La bibliografía local sobre sedoanalgesia cardiovascular sitúa como opciones habituales midazolam, propofol o etomidato, según contexto y experiencia del equipo. Durante el procedimiento debe haber control de constantes, oxígeno disponible y material preparado para ventilación y rescate. Complicaciones y reevaluación Las complicaciones más relevantes son tromboembolismo, bradiarritmias, arritmias ventriculares, quemaduras cutáneas y recurrencia precoz de la arritmia. Tras la conversión, documentar ritmo sinusal, estabilidad hemodinámica, necesidad de mantenimiento farmacológico y plan de anticoagulación posterior. Si fracasan varios intentos o la recaída es inmediata, replantear causas reversibles, estrategia farmacológica o control de frecuencia. Módulos relacionados Fuentes integradas desde /biblio La ficha se ha rellenado a partir de bibliografía local específica de fibrilación auricular, cardioversión y sedoanalgesia procedimental. /biblio/temas/FA/CV electrica.pdf /biblio/temas/FA/CV farma.pdf /biblio/temas/FA/GPC-ESC-2024-fibrilacion-auricular.pdf /biblio/temas/FA/sedacion-y-analgesia.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-fibrilacion-auricular",
      "vademecum-amiodarona",
      "vademecum-midazolam",
      "vademecum-propofol",
      "vademecum-etomidato"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-desfibrilacion",
    "slug": "desfibrilacion",
    "title": "Desfibrilación",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/desfibrilacion",
    "sourcePath": "/content/procedimientos/desfibrilacion.html",
    "keywords": "Desfibrilación Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Urgencias Desfibrilación Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-drenaje-de-absceso-cutaneo",
    "slug": "drenaje-de-absceso-cutaneo",
    "title": "Drenaje de absceso cutáneo",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/drenaje-de-absceso-cutaneo",
    "sourcePath": "/content/procedimientos/drenaje-de-absceso-cutaneo.html",
    "keywords": "Drenaje de absceso cutáneo Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Drenaje de absceso cutáneo Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-exploracion-con-especulo",
    "slug": "exploracion-con-especulo",
    "title": "Exploración con espéculo",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/exploracion-con-especulo",
    "sourcePath": "/content/procedimientos/exploracion-con-especulo.html",
    "keywords": "Exploración con espéculo Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Exploración con espéculo Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-extraccion-de-cuerpo-extrano-ocular-superficial",
    "slug": "extraccion-de-cuerpo-extrano-ocular-superficial",
    "title": "Extracción de cuerpo extraño ocular superficial",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/extraccion-de-cuerpo-extrano-ocular-superficial",
    "sourcePath": "/content/procedimientos/extraccion-de-cuerpo-extrano-ocular-superficial.html",
    "keywords": "Extracción de cuerpo extraño ocular superficial Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Extracción de cuerpo extraño ocular superficial Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-infiltracion-anestesica-local",
    "slug": "infiltracion-anestesica-local",
    "title": "Infiltración anestésica local",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/infiltracion-anestesica-local",
    "sourcePath": "/content/procedimientos/infiltracion-anestesica-local.html",
    "keywords": "Infiltración anestésica local Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Infiltración anestésica local Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-puncion-lumbar",
    "slug": "puncion-lumbar",
    "title": "Punción lumbar",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/puncion-lumbar",
    "sourcePath": "/content/procedimientos/puncion-lumbar.html",
    "keywords": "Punción lumbar Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Urgencias Punción lumbar Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-sutura-simple",
    "slug": "sutura-simple",
    "title": "Sutura simple",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/sutura-simple",
    "sourcePath": "/content/procedimientos/sutura-simple.html",
    "keywords": "Sutura simple Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Sutura simple Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-taponamiento-nasal-anterior",
    "slug": "taponamiento-nasal-anterior",
    "title": "Taponamiento nasal anterior",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/taponamiento-nasal-anterior",
    "sourcePath": "/content/procedimientos/taponamiento-nasal-anterior.html",
    "keywords": "Taponamiento nasal anterior Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Taponamiento nasal anterior Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-tincion-con-fluoresceina",
    "slug": "tincion-con-fluoresceina",
    "title": "Tinción con fluoresceína",
    "summary": "Procedimiento técnico estandarizado.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/tincion-con-fluoresceina",
    "sourcePath": "/content/procedimientos/tincion-con-fluoresceina.html",
    "keywords": "Tinción con fluoresceína Procedimiento técnico estandarizado. Procedimientos Urgencias y consulta Atención Primaria Urgencias Tinción con fluoresceína Procedimiento técnico estandarizado. Material y Preparación Contenido pendiente de validación clínica.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "procedimientos-ventilacion-mecanica-no-invasiva",
    "slug": "ventilacion-mecanica-no-invasiva",
    "title": "Ventilación mecánica no invasiva",
    "summary": "Procedimiento para iniciar y monitorizar soporte respiratorio no invasivo en insuficiencia respiratoria aguda, con especial utilidad en hipercapnia con acidosis y edema agudo cardiogénico.",
    "section": "procedimientos",
    "sectionLabel": "Procedimientos",
    "kind": "procedimientos",
    "kindLabel": "Procedimiento",
    "category": "Urgencias y consulta",
    "route": "/procedimientos/ventilacion-mecanica-no-invasiva",
    "sourcePath": "/content/procedimientos/ventilacion-mecanica-no-invasiva.html",
    "keywords": "Ventilación mecánica no invasiva Procedimiento para iniciar y monitorizar soporte respiratorio no invasivo en insuficiencia respiratoria aguda, con especial utilidad en hipercapnia con acidosis y edema agudo cardiogénico. Procedimientos Urgencias y consulta Urgencias VMNI VNI NIV CPAP BiPAP IPAP EPAP mascarilla fuga monitorización destete insuficiencia respiratoria hipercápnica edema agudo de pulmón Ventilación mecánica no invasiva Procedimiento para iniciar y monitorizar soporte respiratorio no invasivo en insuficiencia respiratoria aguda, con especial utilidad en hipercapnia con acidosis y edema agudo cardiogénico. Puntos clave BiPAP es especialmente útil en fracaso respiratorio hipercápnico con acidosis; CPAP o BiPAP son opciones válidas en edema agudo cardiogénico. La selección de interfaz y la optimización de fugas/tolerancia son tan importantes como el ajuste inicial de presiones. La monitorización estrecha evita retrasar la intubación cuando la respuesta es insuficiente. Indicaciones prácticas Insuficiencia respiratoria hipercápnica con acidosis, especialmente en agudización de EPOC. Edema agudo de pulmón cardiogénico cuando se requiere soporte no invasivo precoz. Pacientes seleccionados con mayor trabajo respiratorio y necesidad de evitar intubación si no existen contraindicaciones. Contraindicaciones y señales de mala tolerancia Inestabilidad hemodinámica, alteración grave de conciencia, fracaso multiorgánico o necesidad inminente de vía aérea invasiva. Imposibilidad para proteger la vía aérea, vómitos no controlados, secreciones abundantes o cooperación nula. Fugas no corregibles, claustrofobia intensa, empeoramiento gasométrico o deterioro clínico pese a optimización inicial. Preparación e inicio Explicar el procedimiento, escoger interfaz con la menor fuga posible y colocar al paciente incorporado. Monitorizar SatO2, frecuencia respiratoria, esfuerzo respiratorio, nivel de conciencia, tolerancia y presión arterial. En BiPAP, iniciar con presiones bajas-moderadas y titular según confort, intercambio gaseoso y volumen corriente; en CPAP usar niveles suficientes para reclutamiento y alivio de disnea. Repetir gasometría o valoración objetiva temprana para confirmar mejoría. Monitorización y fracaso La mejoría esperable incluye menor trabajo respiratorio, descenso de frecuencia respiratoria y corrección gasométrica progresiva. Si empeora la conciencia, persiste hipoxemia severa, aumenta la acidosis o no mejora el esfuerzo respiratorio, revalorar soporte invasivo. El destete debe ser estructurado y basado en estabilidad clínica, menor soporte necesario y capacidad para pausas seguras. Herramientas relacionadas Fuentes integradas desde /biblio Se ha priorizado literatura práctica sobre inicio, optimización y retirada de VMNI. /biblio/procedimeintos/VMNI/VMNI.pdf /biblio/procedimeintos/VMNI/CuandoComoIniciarStop.pdf /biblio/procedimeintos/VMNI/Ventilación2025.pdf /biblio/procedimeintos/VMNI/recomendaciones-ers-ats-para-el-uso-de-la-ventilacion-no-2qs9vd0ws6.pdf",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-casi-ahogamiento",
    "slug": "casi-ahogamiento",
    "title": "Casi ahogamiento",
    "summary": "Observacion y complicaciones.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/casi-ahogamiento",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/casi-ahogamiento.html",
    "keywords": "Casi ahogamiento Observacion y complicaciones. Protocolos Agentes físicos / ambientales Urgencias casi ahogamiento Casi ahogamiento Observacion y complicaciones. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipotermia-accidental",
    "slug": "hipotermia-accidental",
    "title": "Hipotermia accidental",
    "summary": "Recalentamiento controlado.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/hipotermia-accidental",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/hipotermia-accidental.html",
    "keywords": "Hipotermia accidental Recalentamiento controlado. Protocolos Agentes físicos / ambientales Urgencias hipotermia accidental Hipotermia accidental Recalentamiento controlado. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-lesiones-por-electricidad",
    "slug": "lesiones-por-electricidad",
    "title": "Lesiones por electricidad",
    "summary": "Valoracion de daño interno.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/lesiones-por-electricidad",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/lesiones-por-electricidad.html",
    "keywords": "Lesiones por electricidad Valoracion de daño interno. Protocolos Agentes físicos / ambientales Urgencias lesiones por electricidad Lesiones por electricidad Valoracion de daño interno. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-patologia-inducida-por-calor",
    "slug": "patologia-inducida-por-calor",
    "title": "Patologia inducida por calor",
    "summary": "Golpe de calor y agotamiento.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/patologia-inducida-por-calor",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/patologia-inducida-por-calor.html",
    "keywords": "Patologia inducida por calor Golpe de calor y agotamiento. Protocolos Agentes físicos / ambientales Urgencias patologia inducida por calor Patologia inducida por calor Golpe de calor y agotamiento. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-quemaduras-quimicas",
    "slug": "quemaduras-quimicas",
    "title": "Quemaduras quimicas",
    "summary": "Descontaminacion y estabilizacion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/quemaduras-quimicas",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/quemaduras-quimicas.html",
    "keywords": "Quemaduras quimicas Descontaminacion y estabilizacion. Protocolos Agentes físicos / ambientales Urgencias quemaduras quimicas Quemaduras quimicas Descontaminacion y estabilizacion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-quemaduras-termicas",
    "slug": "quemaduras-termicas",
    "title": "Quemaduras termicas",
    "summary": "Clasificacion y resucitacion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Agentes físicos / ambientales",
    "route": "/protocolos/quemaduras-termicas",
    "sourcePath": "/content/protocolos/agentes-fisicos-ambientales/quemaduras-termicas.html",
    "keywords": "Quemaduras termicas Clasificacion y resucitacion. Protocolos Agentes físicos / ambientales Urgencias quemaduras termicas Quemaduras termicas Clasificacion y resucitacion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-bradicardias-dependientes-de-ecg",
    "slug": "bradicardias-dependientes-de-ecg",
    "title": "Bradicardias dependientes de ECG",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/bradicardias-dependientes-de-ecg",
    "sourcePath": "/content/protocolos/cardiologia/bradicardias-dependientes-de-ecg.html",
    "keywords": "Bradicardias dependientes de ECG Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Bradicardias dependientes de ECG Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Bradicardias dependientes de ECG",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-fibrilacion-auricular-atencion-primaria",
    "slug": "fibrilacion-auricular-atencion-primaria",
    "title": "Fibrilación auricular en Atención Primaria",
    "summary": "Abordaje de la fibrilación auricular estable en consulta: confirmación en ECG, búsqueda de desencadenantes, valoración tromboembólica, control inicial y decisión de seguimiento o derivación.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/fibrilacion-auricular-atencion-primaria",
    "sourcePath": "/content/protocolos/cardiologia/fibrilacion-auricular-atencion-primaria.html",
    "keywords": "Fibrilación auricular en Atención Primaria Abordaje de la fibrilación auricular estable en consulta: confirmación en ECG, búsqueda de desencadenantes, valoración tromboembólica, control inicial y decisión de seguimiento o derivación. Protocolos Cardiología Atención Primaria fibrilacion auricular atencion primaria consulta anticoagulacion cha2ds2-vasc has-bled control frecuencia derivacion Fibrilación auricular en Atención Primaria Abordaje de la fibrilación auricular estable en consulta: confirmación en ECG, búsqueda de desencadenantes, valoración tromboembólica, control inicial y decisión de seguimiento o derivación. Puntos clave En consulta lo primero es confirmar FA, estimar estabilidad clínica y decidir si el paciente puede seguir circuito ambulatorio o necesita Urgencias. CHA2DS2-VASc organiza el riesgo tromboembólico; HAS-BLED ayuda a revisar riesgo hemorrágico y factores corregibles, no a negar anticoagulación por sí solo. La estrategia de frecuencia, anticoagulación y derivación depende de edad, síntomas, comorbilidad, tiempo de evolución y contexto funcional. Valoración en consulta Confirmar la arritmia con ECG y registrar frecuencia ventricular, anchura del QRS, síntomas y antecedentes de episodios previos. Buscar desencadenantes corregibles: infección, anemia, hipertiroidismo, alcohol, descompensación cardiaca, fármacos o mala adherencia. Revisar función renal, iones, TSH cuando proceda y tratamientos concomitantes, sobre todo si ya usa anticoagulantes o antiarrítmicos. Manejo ambulatorio inicial En paciente estable, la prioridad suele ser controlar frecuencia, optimizar el desencadenante y planificar anticoagulación si corresponde. La necesidad de estrategia de ritmo o cardioversión no debe precipitarse desde consulta si la duración es incierta o faltan datos de seguridad. La educación sobre síntomas de alarma, adherencia y control del pulso es parte del tratamiento. Anticoagulación y seguimiento Usar CHA2DS2-VASc para ordenar el riesgo y revisar función renal, edad, peso, interacciones y antecedentes hemorrágicos antes de cerrar pauta. HAS-BLED obliga a corregir lo modificable: HTA mal controlada, alcohol, AINE, mal seguimiento o polifarmacia. Coordinar revisión con cardiología o medicina interna si hay recurrencia, mal control, cardiopatía estructural o dudas de estrategia. Derivación a Urgencias Hipotensión, síncope, dolor torácico, edema agudo de pulmón, mala perfusión, respuesta ventricular muy rápida o preexcitación. Deterioro neurológico, sospecha de ictus/AIT, sangrado relevante en anticoagulado o imposibilidad para control inicial seguro. Si hay inestabilidad o necesidad de cardioversión urgente, el manejo pasa al protocolo de FA en Urgencias. Herramientas y rutas relacionadas Fuentes integradas desde /biblio La ficha se ha apoyado en la guía ESC 2024 y la guía práctica EHRA, con bibliografía local de tratamiento y cardioversión. /biblio/temas/FA/GPC-ESC-2024-fibrilacion-auricular.pdf /biblio/temas/FA/gd_EHRA.pdf /biblio/temas/FA/es-tratamiento-farmacologico-de-la-fibrilac-articulo-S1131358716300127-pdf-file.pdf /biblio/temas/FA/Protocolo44TtoAnticoagulanteBiblioC.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-fibrilacion-auricular",
      "herramientas-cha2ds2-vasc",
      "herramientas-has-bled",
      "vademecum-digoxina",
      "vademecum-diltiazem"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-fibrilacion-auricular",
    "slug": "fibrilacion-auricular",
    "title": "Fibrilación auricular en Urgencias",
    "summary": "Arritmia supraventricular con activación auricular desorganizada en el área urgente. Obliga a decidir primero estabilidad hemodinámica, necesidad de cardioversión, control de frecuencia frente a control del ritmo y estrategia tromboembólica peri y post-cardioversión.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/fibrilacion-auricular",
    "sourcePath": "/content/protocolos/cardiologia/fibrilacion-auricular.html",
    "keywords": "Fibrilación auricular en Urgencias Arritmia supraventricular con activación auricular desorganizada en el área urgente. Obliga a decidir primero estabilidad hemodinámica, necesidad de cardioversión, control de frecuencia frente a control del ritmo y estrategia tromboembólica peri y post-cardioversión. Protocolos Cardiología Urgencias fibrilacion auricular urgencias respuesta ventricular rapida cardioversion control de frecuencia control del ritmo anticoagulacion ETE CHA2DS2 HAS-BLED Fibrilación auricular en Urgencias Arritmia supraventricular con activación auricular desorganizada en el área urgente. Obliga a decidir primero estabilidad hemodinámica, necesidad de cardioversión, control de frecuencia frente a control del ritmo y estrategia tromboembólica peri y post-cardioversión. Puntos clave La inestabilidad hemodinámica convierte la cardioversión eléctrica sincronizada en la prioridad inmediata. En paciente estable, el tiempo de evolución, la sintomatología, la cardiopatía estructural y el riesgo tromboembólico condicionan el plan. La guía ESC 2024 permite una estrategia de esperar y observar dentro de las primeras 48 horas en casos seleccionados sin compromiso hemodinámico. Abordaje urgente de la FA Abre el flujo interactivo para distinguir inestabilidad, estrategia de ritmo o frecuencia y requisitos previos de anticoagulación. Valoración inicial y enfoque diagnóstico Confirmar la FA en ECG, cuantificar respuesta ventricular, valorar anchura del QRS y documentar síntomas, duración estimada del episodio y episodios previos. Buscar desencadenantes o precipitantes: infección, síndrome coronario agudo, insuficiencia cardiaca, hipoxemia, tirotoxicosis, alcohol, fármacos o tromboembolismo. Solicitar analítica y pruebas dirigidas según contexto: función renal, iones, biomarcadores si hay dolor torácico o insuficiencia cardiaca, y TSH cuando el contexto lo justifique. Red flags e inestabilidad Hipotensión, shock, edema agudo de pulmón, dolor torácico isquémico, síncope o deterioro neurológico obligan a considerar la FA como causa o agravante del cuadro. La preexcitación, la respuesta ventricular extrema y la mala perfusión hacen prioritario el control eléctrico y la monitorización. En este escenario, la cardioversión eléctrica sincronizada debe hacerse sin retrasos innecesarios. Paciente estable: control inicial Corregir desencadenantes y decidir entre control de frecuencia o control del ritmo en función de síntomas, duración, cardiopatía estructural y plan terapéutico global. La ESC 2024 mantiene como fármacos de primera línea para control de frecuencia, cuando la FEVI es > 40%, a los bloqueadores beta, diltiazem, verapamilo o digoxina. Tras el tratamiento inicial, reevaluar frecuencia ventricular, síntomas, presión arterial y signos de insuficiencia cardiaca. Control del ritmo y cardioversión En pacientes estables y sintomáticos dentro de las primeras 48 horas, la guía ESC 2024 permite una estrategia de esperar y observar la conversión espontánea como alternativa a la cardioversión inmediata. Si la duración es superior a 24 horas o incierta, no debe realizarse cardioversión precoz sin anticoagulación adecuada o sin exclusión de trombo auricular mediante ETE cuando el contexto lo requiera. La cardioversión eléctrica sigue siendo la técnica de mayor eficacia cuando se decide restaurar ritmo sinusal y el cuadro no cede de forma espontánea o hay mala tolerancia. Riesgo tromboembólico y anticoagulación La decisión no debe limitarse al episodio actual: hay que valorar antecedentes de ictus/AIT, insuficiencia cardiaca, HTA, diabetes, enfermedad vascular, edad y función renal. La app mantiene disponibles CHA2DS2-VASc y HAS-BLED para estructurar el juicio clínico y revisar riesgo hemorrágico, aunque la guía ESC 2024 actualiza la estratificación tromboembólica. En pacientes anticoagulados con ACOD conviene revisar adherencia, interacciones, peso y función renal siguiendo el enfoque práctico de EHRA. Destino desde Urgencias Ingreso monitorizado si existe inestabilidad, insuficiencia cardiaca, isquemia, síncope, necesidad de cardioversión urgente o dificultad para controlar la respuesta ventricular. Derivar o coordinar seguimiento cardiológico cuando la estrategia de ritmo, la anticoagulación o la recurrencia del episodio exijan reevaluación especializada. Si el paciente queda estable y con plan claro, el alta debe incluir reevaluación precoz, educación sobre anticoagulación y coordinación con Atención Primaria o cardiología. Herramientas, procedimientos y fármacos relacionados Fuentes integradas desde /biblio El protocolo se ha ampliado con la guía ESC 2024, la guía práctica EHRA y bibliografía local sobre cardioversión. /biblio/temas/FA/GPC-ESC-2024-fibrilacion-auricular.pdf /biblio/temas/FA/gd_EHRA.pdf /biblio/temas/FA/CV electrica.pdf /biblio/temas/FA/CV farma.pdf",
    "algorithmId": "alg-fa-urgencias",
    "relatedEntryIds": [
      "protocolos-fibrilacion-auricular-atencion-primaria",
      "herramientas-cha2ds2-vasc",
      "herramientas-has-bled",
      "procedimientos-cardioversion-electrica-sincronizada",
      "vademecum-amiodarona",
      "vademecum-digoxina",
      "vademecum-diltiazem"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hta-atencion-primaria",
    "slug": "hta-atencion-primaria",
    "title": "HTA en Atención Primaria",
    "summary": "Abordaje longitudinal de la hipertensión arterial en consulta: confirmación diagnóstica, estratificación de riesgo, inicio o intensificación terapéutica y criterios de derivación cuando aparecen signos de daño agudo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/hta-atencion-primaria",
    "sourcePath": "/content/protocolos/cardiologia/hta-atencion-primaria.html",
    "keywords": "HTA en Atención Primaria Abordaje longitudinal de la hipertensión arterial en consulta: confirmación diagnóstica, estratificación de riesgo, inicio o intensificación terapéutica y criterios de derivación cuando aparecen signos de daño agudo. Protocolos Cardiología Atención Primaria hta atencion primaria hipertension arterial consulta ampa mapa riesgo cardiovascular score2 lesion organo diana derivacion HTA en Atención Primaria Abordaje longitudinal de la hipertensión arterial en consulta: confirmación diagnóstica, estratificación de riesgo, inicio o intensificación terapéutica y criterios de derivación cuando aparecen signos de daño agudo. Puntos clave En consulta la prioridad es confirmar si existe HTA sostenida y estimar riesgo cardiovascular global, no bajar cifras aisladas de forma brusca. AMPA o MAPA son especialmente útiles cuando hay sospecha de bata blanca, HTA enmascarada o mala correlación entre clínica y cifra aislada. La derivación urgente cambia el escenario cuando aparecen síntomas o hallazgos de posible lesión aguda de órgano diana. Confirmación diagnóstica Confirmar técnica de medición, manguito correcto, reposo previo, evitación de café, tabaco y ejercicio inmediato, y repetir en varias tomas. Considerar AMPA o MAPA cuando la consulta no refleja bien la situación basal o se sospecha variabilidad marcada. Revisar antecedentes familiares, obesidad, enfermedad renal, diabetes, apnea del sueño, fármacos y consumo de alcohol o AINE. Evaluación inicial en consulta Registrar peso, IMC, perímetro abdominal, tabaquismo, perfil lipídico, función renal, potasio, glucemia y albuminuria cuando esté indicada. Buscar lesión de órgano diana o comorbilidad que cambie objetivos: ERC, diabetes, cardiopatía, ictus previo, retinopatía o enfermedad vascular. La app mantiene SCORE2 y SCORE2-OP como apoyo para riesgo cardiovascular global en el paciente estable. Tratamiento ambulatorio Priorizar reducción de sal, pérdida ponderal, ejercicio, limitación de alcohol y abandono tabáquico como base del tratamiento. Si la cifra o el riesgo lo justifican, iniciar o intensificar tratamiento farmacológico con revisión de adherencia y tolerancia antes de escalar en exceso. La reevaluación debe incluir respuesta tensional, efectos adversos, potasio, creatinina y grado real de cumplimiento. Criterios de derivación a Urgencias Cefalea intensa con focalidad, dolor torácico, disnea, confusión, oliguria, dolor dorsal súbito, papiledema o edema agudo de pulmón. HTA muy elevada con mala tolerancia clínica o sospecha de emergencia hipertensiva, embarazo con datos de gravedad o deterioro renal agudo. Si el problema es una posible urgencia o emergencia hipertensiva, el protocolo operativo pasa al camino de Urgencias. Herramientas y rutas relacionadas Fuentes integradas desde /biblio Se ha priorizado la documentación local de HTA y la guía 2025 de prevención, detección y manejo de hipertensión. /biblio/temas/HTA/HTA .pdf /biblio/temas/HTA/hta2.pdf /biblio/temas/HTA/jones-et-al-2025-2025-aha-acc-aanp-aapa-abc-accp-acpm-ags-ama-aspc-nma-pcna-sgim-guideline-for-the-prevention-detection.pdf /biblio/temas/HTA/20250605_Tabla-Score_edited.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-crisis-hipertensiva",
      "herramientas-score2",
      "herramientas-score2-op",
      "vademecum-captopril"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-crisis-hipertensiva",
    "slug": "crisis-hipertensiva",
    "title": "HTA en Urgencias",
    "summary": "Elevación aguda y marcada de la presión arterial en el área urgente. Obliga a diferenciar falsa urgencia, urgencia hipertensiva y emergencia hipertensiva porque cambian monitorización, velocidad de descenso, fármacos y destino final.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/crisis-hipertensiva",
    "sourcePath": "/content/protocolos/cardiologia/crisis-hipertensiva.html",
    "keywords": "HTA en Urgencias Elevación aguda y marcada de la presión arterial en el área urgente. Obliga a diferenciar falsa urgencia, urgencia hipertensiva y emergencia hipertensiva porque cambian monitorización, velocidad de descenso, fármacos y destino final. Protocolos Cardiología Urgencias hta urgencias crisis hipertensiva urgencia hipertensiva emergencia hipertensiva dano organo diana labetalol captopril diseccion aortica encefalopatia HTA en Urgencias Elevación aguda y marcada de la presión arterial en el área urgente. Obliga a diferenciar falsa urgencia, urgencia hipertensiva y emergencia hipertensiva porque cambian monitorización, velocidad de descenso, fármacos y destino final. Puntos clave La primera decisión no es qué fármaco usar, sino si existe daño agudo de órgano diana o una falsa urgencia hipertensiva por dolor, ansiedad o reactividad. En urgencia hipertensiva el descenso debe ser progresivo, con objetivo aproximado de 160/110 mmHg en 24-48 horas. En emergencia hipertensiva el descenso debe hacerse en entorno monitorizado, con fármacos parenterales y objetivos dependientes del síndrome clínico. Algoritmo de decisión urgente Abre el flujo interactivo para separar falsa urgencia, urgencia y emergencia hipertensiva con objetivos tensionales y decisiones de monitorización o ingreso. Valoración inicial Confirmar la medición con manguito adecuado, revisar cifras previas, adherencia a antihipertensivos, consumo de tóxicos, dolor, ansiedad y embarazo. Dirigir la anamnesis a síntomas de daño agudo: cefalea intensa, focalidad, visión borrosa, dolor torácico, disnea, oliguria o dolor dorsal súbito. La exploración debe buscar encefalopatía, insuficiencia cardiaca, déficit neurológico, soplos, signos de hipoperfusión y afectación renal. Clasificación práctica Falsa urgencia hipertensiva: Urgencia hipertensiva: Emergencia hipertensiva: Pruebas complementarias y red flags El ECG es obligatorio; la analítica básica debe incluir función renal e iones, y las troponinas si hay clínica isquémica. La radiografía de tórax es útil si hay disnea o sospecha de edema agudo de pulmón; el TAC craneal o tóraco-abdominal se reserva al síndrome clínico sugerente. Dolor torácico o dorsal, disnea, focalidad neurológica, alteración del nivel de conciencia, papiledema o deterioro renal agudo obligan a manejar como posible emergencia. Objetivos de descenso tensional En urgencia hipertensiva el descenso debe ser paulatino, evitando caídas bruscas, con objetivo orientativo de 160/110 mmHg en 24-48 horas. En la mayoría de las emergencias hipertensivas el consenso es reducir la presión arterial media un 10-20% en la primera hora y un 5-15% adicional en las siguientes 23 horas. Esto suele equivaler a objetivos inferiores a 180/120 mmHg en la primera hora y por debajo de 160/110 mmHg durante las horas siguientes, salvo excepciones sindrómicas como ictus o síndrome aórtico agudo. Tratamiento urgente cuando no hay lesión aguda de órgano diana Cuando no hay emergencia hipertensiva pero la cifra persiste en el área urgente tras reevaluación clínica: Captopril Labetalol Debe mantenerse observación clínica, reevaluación tensional y evitar descensos bruscos que provoquen isquemia cerebral, coronaria o renal. Tratamiento de la emergencia hipertensiva Requiere traslado o ingreso en área monitorizada, tratamiento parenteral y elección del fármaco según el síndrome predominante. La guía local incluye labetalol urapidilo El objetivo no es normalizar la tensión de inmediato, sino reducirla con seguridad y de forma proporcional al riesgo. Destino desde Urgencias Toda emergencia hipertensiva debe ingresar en entorno monitorizado. Las urgencias hipertensivas que no descienden con manejo inicial, presentan mala adherencia, comorbilidad relevante o dudas diagnósticas pueden requerir observación o ingreso. Si se trata de una falsa urgencia, el alta debe incluir ajuste terapéutico, tratamiento de la causa precipitante y coordinación precoz con Atención Primaria. Herramientas y fármacos relacionados Fuentes integradas desde /biblio El protocolo se ha revisado con guía local de urgencias, resumen clínico de UpToDate y guía AHA/ACC 2025 de hipertensión arterial. /biblio/temas/HTA/crisis hta.pdf /biblio/temas/HTA/Evaluación y tratamiento de emergencias hipertensivas en adultos - UpToDate.pdf /biblio/temas/HTA/jones-et-al-2025-2025-aha-acc-aanp-aapa-abc-accp-acpm-ags-ama-aspc-nma-pcna-sgim-guideline-for-the-prevention-detection.pdf",
    "algorithmId": "alg-crisis-hipertensiva",
    "relatedEntryIds": [
      "protocolos-hta-atencion-primaria",
      "vademecum-captopril",
      "vademecum-labetalol",
      "herramientas-velocidad-de-infusion-ml-h"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-insuficiencia-cardiaca-aguda",
    "slug": "insuficiencia-cardiaca-aguda",
    "title": "Insuficiencia Cardíaca Aguda (ICA)",
    "summary": "Aparición rápida o empeoramiento de los signos y síntomas de insuficiencia cardíaca, requiriendo intervención médica urgente o de emergencia clínica de alto rendimiento.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/insuficiencia-cardiaca-aguda",
    "sourcePath": "/content/protocolos/cardiologia/insuficiencia-cardiaca-aguda.html",
    "keywords": "Insuficiencia Cardíaca Aguda (ICA) Aparición rápida o empeoramiento de los signos y síntomas de insuficiencia cardíaca, requiriendo intervención médica urgente o de emergencia clínica de alto rendimiento. Protocolos Cardiología Urgencias Insuficiencia Cardíaca Aguda (ICA) Aparición rápida o empeoramiento de los signos y síntomas de insuficiencia cardíaca, requiriendo intervención médica urgente o de emergencia clínica de alto rendimiento. Puntos Clave Diagnosticar y abordar causas precipitantes graves simultáneamente (acrónimo CHAMPIT: Coronario, Hipertensión, Arritmia, Mecánico, Pulmonar). Evaluación inmediata y estratificación usando la clínica de perfusión y congestión: Caliente/Frío, Húmedo/Seco. Algoritmo de Abordaje Rápido en la ICA Asistente dinámico para la clasificación Caliente vs Frío y Húmedo vs Seco y las derivaciones correspondientes. Banderas Rojas del Shock Cardiogénico (Perfil \"Frío y Húmedo/Seco\") Hipotensión persistente (PAS < 90 mmHg), oliguria extrema, alteración del estado mental, lactato elevado y mala perfusión periférica distal. A considerar: Tratamiento Descongestivo (Perfil \"Húmedo\") Diuréticos de asa IV: Soporte ventilatorio: Referencias: Guías Clínicas de la Sociedad Europea de Cardiología (ESC) 2021 sobre IC Aguda y Crónica.",
    "algorithmId": null,
    "relatedEntryIds": [
      "vademecum-furosemida",
      "vademecum-dobutamina",
      "vademecum-noradrenalina",
      "herramientas-velocidad-de-infusion-ml-h"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-pericarditis-aguda",
    "slug": "pericarditis-aguda",
    "title": "Pericarditis aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/pericarditis-aguda",
    "sourcePath": "/content/protocolos/cardiologia/pericarditis-aguda.html",
    "keywords": "Pericarditis aguda Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Pericarditis aguda Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Pericarditis aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-shock",
    "slug": "shock",
    "title": "Shock",
    "summary": "Urgencia vital con hipotension.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/shock",
    "sourcePath": "/content/protocolos/cardiologia/shock.html",
    "keywords": "Shock Urgencia vital con hipotension. Protocolos Cardiología Urgencias shock Shock Urgencia vital con hipotension. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-soporte-vital-avanzado-sva",
    "slug": "soporte-vital-avanzado-sva",
    "title": "Soporte vital avanzado (SVA)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/soporte-vital-avanzado-sva",
    "sourcePath": "/content/protocolos/cardiologia/soporte-vital-avanzado-sva.html",
    "keywords": "Soporte vital avanzado (SVA) Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Soporte vital avanzado (SVA) Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Soporte vital avanzado (SVA)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-soporte-vital-basico-en-adultos",
    "slug": "soporte-vital-basico-en-adultos",
    "title": "Soporte vital basico en adultos",
    "summary": "Guia de SVB adultos.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/soporte-vital-basico-en-adultos",
    "sourcePath": "/content/protocolos/cardiologia/soporte-vital-basico-en-adultos.html",
    "keywords": "Soporte vital basico en adultos Guia de SVB adultos. Protocolos Cardiología Urgencias soporte vital basico en adultos Soporte vital basico en adultos Guia de SVB adultos. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-soporte-vital-pediatrico",
    "slug": "soporte-vital-pediatrico",
    "title": "Soporte vital pediatrico",
    "summary": "Guia de SVP pediatrico.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/soporte-vital-pediatrico",
    "sourcePath": "/content/protocolos/cardiologia/soporte-vital-pediatrico.html",
    "keywords": "Soporte vital pediatrico Guia de SVP pediatrico. Protocolos Cardiología Urgencias soporte vital pediatrico Soporte vital pediatrico Guia de SVP pediatrico. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sincope",
    "slug": "sincope",
    "title": "Síncope",
    "summary": "Pérdida transitoria de conocimiento (PTC) y del tono postural, de inicio rápido, corta duración y recuperación espontánea, completa y sin secuelas, debida a hipoperfusión cerebral global transitoria.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/sincope",
    "sourcePath": "/content/protocolos/cardiologia/sincope.html",
    "keywords": "Síncope Pérdida transitoria de conocimiento (PTC) y del tono postural, de inicio rápido, corta duración y recuperación espontánea, completa y sin secuelas, debida a hipoperfusión cerebral global transitoria. Protocolos Cardiología Urgencias Síncope Pérdida transitoria de conocimiento (PTC) y del tono postural, de inicio rápido, corta duración y recuperación espontánea, completa y sin secuelas, debida a hipoperfusión cerebral global transitoria. Puntos Clave Lo fundamental es estratificar el riesgo: síncope neuromediado vs cardiogénico. Valorar siempre historia clínica (pródromos, desencadenantes), ECG basal de 12 derivaciones e indemnidad neurológica. Algoritmo de Estratificación (OESIL / San Francisco) Banderas Rojas (Alto Riesgo) Aparición durante el ejercicio o en decúbito. Antecedentes familiares de muerte súbita inexplicada. ECG anómalo (Bloqueo bifascicular, QRS ancho, Brugada, QT largo, repolarización precoz extrema). Dolor torácico previo o palpitaciones rápidas previas al síncope. Criterios de Ingreso Pacientes que cumplen los criterios de alto riesgo (alteraciones ECG, sospecha de arritmia maligna, TEP, o síncope cardiogénico estructural como estenosis aórtica severa) requieren monitorización e ingreso habitual. Referencias: Guías ESC 2018 para el diagnóstico y manejo del síncope.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sindrome-coronario-agudo",
    "slug": "sindrome-coronario-agudo",
    "title": "Síndrome Coronario Agudo (SCA)",
    "summary": "Conjunto de manifestaciones clínicas producidas por isquemia miocárdica aguda. Se divide en SCA con elevación del ST (SCACEST) y sin elevación del ST (SCASEST).",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/sindrome-coronario-agudo",
    "sourcePath": "/content/protocolos/cardiologia/sindrome-coronario-agudo.html",
    "keywords": "Síndrome Coronario Agudo (SCA) Conjunto de manifestaciones clínicas producidas por isquemia miocárdica aguda. Se divide en SCA con elevación del ST (SCACEST) y sin elevación del ST (SCASEST). Protocolos Cardiología Urgencias Síndrome Coronario Agudo (SCA) Conjunto de manifestaciones clínicas producidas por isquemia miocárdica aguda. Se divide en SCA con elevación del ST (SCACEST) y sin elevación del ST (SCASEST). Puntos Clave El tiempo es músculo: Realizar e interpretar ECG de 12 derivaciones en < 10 min desde el primer contacto médico (PCM). SCACEST: Reperfusión urgente (ICP primaria objetivo < 90 min o fibrinólisis si ICP > 120 min). SCASEST: Estratificación del riesgo isquémico y hemorrágico (ej. GRACE y CRUSADE). Algoritmo de Toma de Decisiones en SCA Visualiza el flujo paso a paso desde el triaje, la obtención del ECG de 12 derivadas y el abordaje farmacológico según elevación de ST. Pruebas y Diagnóstico ECG: Troponinas: Manejo Inicial (MONA / FONA) AAS (Aspirina): 250-300 mg VO masticada. Segundo antiagregante: Ticagrelor / Prasugrel / Clopidogrel según perfil isquémico/hemorrágico y hallazgos. Anticoagulación: HNF, Enoxaparina o Fondaparinux según estrategia invasiva. O2 si SatO2 < 90%. Control de dolor: Nitroglicerina SL (¡Ojo! CI si TAS < 90, bradicardia severa, o sospecha infarto VD) o Morfina/Fentanilo. Basado en: Guías ESC 2023 sobre el manejo de SCA.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sindrome-cardiorrenal",
    "slug": "sindrome-cardiorrenal",
    "title": "Síndrome cardiorrenal",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/sindrome-cardiorrenal",
    "sourcePath": "/content/protocolos/cardiologia/sindrome-cardiorrenal.html",
    "keywords": "Síndrome cardiorrenal Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Síndrome cardiorrenal Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Síndrome cardiorrenal",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-taquicardias-dependientes-de-ecg",
    "slug": "taquicardias-dependientes-de-ecg",
    "title": "Taquicardias dependientes de ECG",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/taquicardias-dependientes-de-ecg",
    "sourcePath": "/content/protocolos/cardiologia/taquicardias-dependientes-de-ecg.html",
    "keywords": "Taquicardias dependientes de ECG Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Taquicardias dependientes de ECG Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Taquicardias dependientes de ECG",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-trombosis-venosa-profunda",
    "slug": "trombosis-venosa-profunda",
    "title": "Trombosis venosa profunda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cardiología",
    "route": "/protocolos/trombosis-venosa-profunda",
    "sourcePath": "/content/protocolos/cardiologia/trombosis-venosa-profunda.html",
    "keywords": "Trombosis venosa profunda Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Protocolos Cardiología Urgencias Trombosis venosa profunda Documento clínico en desarrollo preparado estructuralmente. Área: CARDIOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Trombosis venosa profunda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-control-de-sintomas-en-paciente-paliativo",
    "slug": "control-de-sintomas-en-paciente-paliativo",
    "title": "Control de sintomas en paciente paliativo",
    "summary": "Manejo de dolor y disnea.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cuidados paliativos / final de vida",
    "route": "/protocolos/control-de-sintomas-en-paciente-paliativo",
    "sourcePath": "/content/protocolos/paliativos/control-de-sintomas-en-paciente-paliativo.html",
    "keywords": "Control de sintomas en paciente paliativo Manejo de dolor y disnea. Protocolos Cuidados paliativos / final de vida Atención Primaria control de sintomas en paciente paliativo Control de sintomas en paciente paliativo Manejo de dolor y disnea. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-manejo-de-final-de-vida-atencion-primaria",
    "slug": "manejo-de-final-de-vida-atencion-primaria",
    "title": "Manejo de final de vida en Atención Primaria",
    "summary": "Abordaje domiciliario y de consulta de la situación de últimos días: identificación precoz, planificación anticipada, control sintomático, apoyo familiar y coordinación con paliativos o Urgencias cuando el contexto deja de ser manejable en domicilio.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cuidados paliativos / final de vida",
    "route": "/protocolos/manejo-de-final-de-vida-atencion-primaria",
    "sourcePath": "/content/protocolos/cuidados-paliativos-final-de-vida/manejo-de-final-de-vida-atencion-primaria.html",
    "keywords": "Manejo de final de vida en Atención Primaria Abordaje domiciliario y de consulta de la situación de últimos días: identificación precoz, planificación anticipada, control sintomático, apoyo familiar y coordinación con paliativos o Urgencias cuando el contexto deja de ser manejable en domicilio. Protocolos Cuidados paliativos / final de vida Atención Primaria final de vida atencion primaria domicilio paliativos ultimos dias via subcutanea familia plan de cuidados Manejo de final de vida en Atención Primaria Abordaje domiciliario y de consulta de la situación de últimos días: identificación precoz, planificación anticipada, control sintomático, apoyo familiar y coordinación con paliativos o Urgencias cuando el contexto deja de ser manejable en domicilio. Puntos clave En Atención Primaria el valor principal está en anticipar problemas, pactar objetivos y sostener continuidad real de cuidados. La vía subcutánea, la medicación de rescate y la información a la familia deben quedar preparadas antes de la crisis, no durante ella. Cuando el síntoma se vuelve refractario, hay claudicación familiar o aparece una urgencia no controlable, cambia el nivel asistencial. Planificación anticipada Definir objetivos de confort, revisar voluntades anticipadas, representante y preferencias sobre lugar de cuidados y fallecimiento. Retirar medicación fútil y dejar pautas simples, visibles y comprensibles para cuidadores. Confirmar material domiciliario, teléfonos de contacto y red de apoyo antes de perder vía oral o capacidad funcional. Control sintomático en domicilio Revisar de forma periódica dolor, disnea, secreciones, delirium, ansiedad, náuseas, retención urinaria y estreñimiento. La vía subcutánea es especialmente útil cuando la vía oral deja de ser práctica o fiable. La familia debe saber qué síntomas son esperables, qué rescates usar y cuándo volver a llamar. Cuándo escalar Síntoma refractario, hemorragia masiva, disnea que no responde, delirium agitado persistente o conflicto ético relevante. Claudicación familiar, ausencia de soporte mínimo, dudas sobre adecuación del esfuerzo terapéutico o fracaso de la vía subcutánea en domicilio. Si la situación se vuelve inestable o no controlable, el circuito de Urgencias debe activarse con objetivo paliativo explícito. Fármacos y rutas relacionadas Fuentes integradas desde /biblio La ficha se apoya en la documentación docente y guías de paliativos ya disponibles en la biblioteca local. /biblio/Cursos/Paliativos/M3_ Sedación paliativa y urgencias en cuidados paliativos.pdf /biblio/Cursos/Paliativos/M4_ Vía subcutánea en atención paliativa.pdf /biblio/temas/UCP/gpc_612_atencion_paliativa_avaliat_compl.pdf /biblio/temas/UCP/Dudas miedos y oportunidades al final de la vida.pdf.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-manejo-de-final-de-vida",
      "vademecum-butilescopolamina",
      "vademecum-haloperidol",
      "vademecum-midazolam",
      "vademecum-morfina"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-manejo-de-final-de-vida",
    "slug": "manejo-de-final-de-vida",
    "title": "Manejo de final de vida en Urgencias",
    "summary": "Protocolo de atención paliativa al adulto en situación de últimos días dentro de Urgencias, centrado en reconocimiento de agonía, plan de confort, control sintomático, comunicación y decisiones proporcionadas sobre ingreso o retorno a domicilio.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cuidados paliativos / final de vida",
    "route": "/protocolos/manejo-de-final-de-vida",
    "sourcePath": "/content/protocolos/cuidados-paliativos-final-de-vida/manejo-de-final-de-vida.html",
    "keywords": "Manejo de final de vida en Urgencias Protocolo de atención paliativa al adulto en situación de últimos días dentro de Urgencias, centrado en reconocimiento de agonía, plan de confort, control sintomático, comunicación y decisiones proporcionadas sobre ingreso o retorno a domicilio. Protocolos Cuidados paliativos / final de vida Urgencias final de vida urgencias últimos días agonía confort disnea secreciones delirium sedación paliativa familia malas noticias Manejo de final de vida en Urgencias Protocolo de atención paliativa al adulto en situación de últimos días dentro de Urgencias, centrado en reconocimiento de agonía, plan de confort, control sintomático, comunicación y decisiones proporcionadas sobre ingreso o retorno a domicilio. Puntos clave El objetivo es aliviar sufrimiento y mantener confort, dignidad y coherencia con los valores y preferencias del paciente. La atención debe incluir valoración física, psíquica, social, espiritual y familiar, con objetivos terapéuticos explícitos. En la fase de últimos días deben retirarse intervenciones fútiles y anticiparse vías alternativas, rescates y problemas previsibles. Ruta clínica de últimos días en Urgencias Flujo breve para reconocer situación de últimos días, ajustar objetivos de cuidados y decidir si el paciente precisa ingreso paliativo o puede continuar cuidados fuera del hospital. Reconocimiento clínico Orienta a situación de agonía: debilidad extrema, postración, somnolencia creciente, disminución del nivel de conciencia y pérdida de vía oral. Otros signos de muerte cercana incluyen anuria u oliguria marcada, estertores, apneas, Cheyne-Stokes, disfagia a líquidos y cianosis periférica. En enfermedad no oncológica el reconocimiento puede requerir consenso clínico, reevaluación frecuente y apoyo de la familia/cuidador. Plan de atención inmediata Definir y documentar objetivos terapéuticos claros y proporcionales a la situación clínica. Revisar voluntades anticipadas, representante y preferencias sobre lugar de cuidados y fallecimiento si es posible. Retirar fármacos y medidas no orientadas a confort; evitar exploraciones, monitorización e intervenciones innecesarias. Si la vía oral deja de ser útil, priorizar vía subcutánea o transdérmica y dejar pautas fijas con rescates. Control sintomático prioritario Reevaluar de forma sistemática dolor, disnea, inquietud o delirium, náuseas, secreciones respiratorias y retención urinaria. Explicar a la familia que la disminución de ingesta suele ser consecuencia de la situación y no obliga a forzar hidratación o alimentación. Los estertores premortem y otros cambios respiratorios deben manejarse con medidas de confort y comunicación clara para reducir angustia familiar. Vía subcutánea y tratamiento anticipado Cuando la vía oral deja de ser útil o los síntomas no están controlados, la vía subcutánea es una de las rutas preferentes en cuidados paliativos. El kit local auditado incluye butilescopolamina Para dolor o disnea, el kit recoge cloruro mórfico En delirium o agitación, el kit recoge haloperidol midazolam Red flags y situaciones complejas Sufrimiento intenso pese a medidas iniciales, disnea refractaria, delirium agitado persistente, dolor difícil control o hemorragia masiva. Conflicto relevante en la toma de decisiones, ausencia de representante claro o dudas éticas sobre adecuación del esfuerzo terapéutico. Claudicación familiar o incapacidad del entorno para sostener cuidados básicos en domicilio. Sedación paliativa La sedación paliativa debe reservarse para síntomas refractarios en enfermedad avanzada o terminal, con intención de aliviar sufrimiento, nunca de acelerar la muerte. Confirmar que se trata de síntoma refractario y que no existe alternativa razonable en tiempo útil. Recoger consentimiento explícito, implícito o delegado, revisar instrucciones previas e informar al equipo asistencial. Siempre que sea posible, recabar segunda opinión y mantener continuidad de cuidados tras su inicio. Comunicación y familia Usar mensajes breves, claros y calmados; no abandonar la comunicación aunque el nivel de conciencia sea bajo. Informar sobre signos esperables, medidas de confort, cambios respiratorios y qué hacer ante crisis o fallecimiento. Favorecer despedidas, soporte emocional y coordinación con atención primaria, equipos de paliativos o recursos domiciliarios cuando existan. Destino y continuidad desde Urgencias Si existe claudicación familiar, conflicto ético, síntomas refractarios o soporte domiciliario insuficiente, debe activarse apoyo experto o ingreso con objetivo paliativo claro. La coordinación entre Urgencias, Atención Primaria y equipos de paliativos es parte del tratamiento, no un paso administrativo secundario. El alta solo es razonable si el plan de confort, la medicación de rescate y la red de apoyo están definidos. Fármacos relacionados Fuentes integradas desde /biblio La ficha se ha reforzado con recomendaciones de urgencias, protocolos de paliativos, sedación paliativa y guía local de vía subcutánea. /biblio/temas/Final de vida urg/Manejo_del_Final_de_Vida_en_Urgencias.pdf /biblio/temas/Final de vida urg/2022_Recomendaciones-de-cuidados-al-final-de-la-vida-en-los-servicios-de-urgencias.pdf /biblio/temas/Final de vida urg/protocolos-de-tratamiento-en-cuidados-paliativos-2023.pdf /biblio/temas/Final de vida urg/secpal-comprender-cuidados-paliativos-3-sedacion-paliativa.pdf /biblio/temas/Final de vida urg/Final de vida/Kit via subcutánea_032023-1.pdf /biblio/temas/Final de vida urg/comunicar-malas-noticias-ugencias.pdf",
    "algorithmId": "alg-manejo-final-de-vida",
    "relatedEntryIds": [
      "protocolos-manejo-de-final-de-vida-atencion-primaria",
      "vademecum-butilescopolamina",
      "vademecum-haloperidol",
      "vademecum-midazolam",
      "vademecum-morfina"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sedacion-paliativa-en-urgencias",
    "slug": "sedacion-paliativa-en-urgencias",
    "title": "Sedacion paliativa en urgencias",
    "summary": "Criterios y dosis iniciales.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Cuidados paliativos / final de vida",
    "route": "/protocolos/sedacion-paliativa-en-urgencias",
    "sourcePath": "/content/protocolos/paliativos/sedacion-paliativa-en-urgencias.html",
    "keywords": "Sedacion paliativa en urgencias Criterios y dosis iniciales. Protocolos Cuidados paliativos / final de vida Urgencias sedacion paliativa en urgencias Sedacion paliativa en urgencias Criterios y dosis iniciales. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-anafilaxia",
    "slug": "anafilaxia",
    "title": "Anafilaxia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Dermatología / Infecciosas",
    "route": "/protocolos/anafilaxia",
    "sourcePath": "/content/protocolos/dermatologia-infecciosas/anafilaxia.html",
    "keywords": "Anafilaxia Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Protocolos Dermatología / Infecciosas Urgencias Anafilaxia Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Anafilaxia",
    "algorithmId": null,
    "relatedEntryIds": [
      "vademecum-adrenalina",
      "vademecum-metilprednisolona",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-angioedema",
    "slug": "angioedema",
    "title": "Angioedema",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Dermatología / Infecciosas",
    "route": "/protocolos/angioedema",
    "sourcePath": "/content/protocolos/dermatologia-infecciosas/angioedema.html",
    "keywords": "Angioedema Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Protocolos Dermatología / Infecciosas Urgencias Angioedema Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Angioedema",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-celulitis-erisipela",
    "slug": "celulitis-erisipela",
    "title": "Celulitis / erisipela",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Dermatología / Infecciosas",
    "route": "/protocolos/celulitis-erisipela",
    "sourcePath": "/content/protocolos/dermatologia-infecciosas/celulitis-erisipela.html",
    "keywords": "Celulitis / erisipela Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Protocolos Dermatología / Infecciosas Atención Primaria Celulitis / erisipela Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Celulitis / erisipela",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-escabiosis",
    "slug": "escabiosis",
    "title": "Escabiosis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Dermatología / Infecciosas",
    "route": "/protocolos/escabiosis",
    "sourcePath": "/content/protocolos/dermatologia-infecciosas/escabiosis.html",
    "keywords": "Escabiosis Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Protocolos Dermatología / Infecciosas Atención Primaria Escabiosis Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Escabiosis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-herpes-zoster",
    "slug": "herpes-zoster",
    "title": "Herpes zóster",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Dermatología / Infecciosas",
    "route": "/protocolos/herpes-zoster",
    "sourcePath": "/content/protocolos/dermatologia-infecciosas/herpes-zoster.html",
    "keywords": "Herpes zóster Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Protocolos Dermatología / Infecciosas Atención Primaria Herpes zóster Documento clínico en desarrollo preparado estructuralmente. Área: DERMATOLOGÍA / INFECCIOSAS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Herpes zóster",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-ascitis",
    "slug": "ascitis",
    "title": "Ascitis",
    "summary": "Abordaje de paracentesis.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/ascitis",
    "sourcePath": "/content/protocolos/digestivo/ascitis.html",
    "keywords": "Ascitis Abordaje de paracentesis. Protocolos Digestivo Urgencias ascitis Ascitis Abordaje de paracentesis. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-complicaciones-de-la-enfermedad-inflamatoria-intestinal-crohn-y-colitis-ulcerosa",
    "slug": "complicaciones-de-la-enfermedad-inflamatoria-intestinal-crohn-y-colitis-ulcerosa",
    "title": "Complicaciones de la enfermedad inflamatoria intestinal (Crohn y colitis ulcerosa)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/complicaciones-de-la-enfermedad-inflamatoria-intestinal-crohn-y-colitis-ulcerosa",
    "sourcePath": "/content/protocolos/digestivo/complicaciones-de-la-enfermedad-inflamatoria-intestinal-crohn-y-colitis-ulcerosa.html",
    "keywords": "Complicaciones de la enfermedad inflamatoria intestinal (Crohn y colitis ulcerosa) Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Complicaciones de la enfermedad inflamatoria intestinal (Crohn y colitis ulcerosa) Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Complicaciones de la enfermedad inflamatoria intestinal (Crohn y colitis ulcerosa)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cuerpo-extrano-en-via-digestiva",
    "slug": "cuerpo-extrano-en-via-digestiva",
    "title": "Cuerpo extraño en vía digestiva",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/cuerpo-extrano-en-via-digestiva",
    "sourcePath": "/content/protocolos/digestivo/cuerpo-extrano-en-via-digestiva.html",
    "keywords": "Cuerpo extraño en vía digestiva Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Cuerpo extraño en vía digestiva Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Cuerpo extraño en vía digestiva",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-diarrea-aguda",
    "slug": "diarrea-aguda",
    "title": "Diarrea aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/diarrea-aguda",
    "sourcePath": "/content/protocolos/digestivo/diarrea-aguda.html",
    "keywords": "Diarrea aguda Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Diarrea aguda Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Diarrea aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-dolor-abdominal-agudo",
    "slug": "dolor-abdominal-agudo",
    "title": "Dolor abdominal agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/dolor-abdominal-agudo",
    "sourcePath": "/content/protocolos/digestivo/dolor-abdominal-agudo.html",
    "keywords": "Dolor abdominal agudo Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Dolor abdominal agudo Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Dolor abdominal agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-encefalopatia-hepatica-aguda",
    "slug": "encefalopatia-hepatica-aguda",
    "title": "Encefalopatia hepatica aguda",
    "summary": "Evaluacion y tratamiento.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/encefalopatia-hepatica-aguda",
    "sourcePath": "/content/protocolos/digestivo/encefalopatia-hepatica-aguda.html",
    "keywords": "Encefalopatia hepatica aguda Evaluacion y tratamiento. Protocolos Digestivo Urgencias encefalopatia hepatica aguda Encefalopatia hepatica aguda Evaluacion y tratamiento. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-estrenimiento-impactacion-fecal",
    "slug": "estrenimiento-impactacion-fecal",
    "title": "Estreñimiento / impactación fecal",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/estrenimiento-impactacion-fecal",
    "sourcePath": "/content/protocolos/digestivo/estrenimiento-impactacion-fecal.html",
    "keywords": "Estreñimiento / impactación fecal Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Estreñimiento / impactación fecal Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Estreñimiento / impactación fecal",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-fisura-anal",
    "slug": "fisura-anal",
    "title": "Fisura anal",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/fisura-anal",
    "sourcePath": "/content/protocolos/digestivo/fisura-anal.html",
    "keywords": "Fisura anal Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Atención Primaria Fisura anal Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Fisura anal",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-helicobacter-pylori",
    "slug": "helicobacter-pylori",
    "title": "Helicobacter pylori",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/helicobacter-pylori",
    "sourcePath": "/content/protocolos/digestivo/helicobacter-pylori.html",
    "keywords": "Helicobacter pylori Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Atención Primaria Helicobacter pylori Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Helicobacter pylori",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hemorragia-digestiva-alta",
    "slug": "hemorragia-digestiva-alta",
    "title": "Hemorragia digestiva alta",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/hemorragia-digestiva-alta",
    "sourcePath": "/content/protocolos/digestivo/hemorragia-digestiva-alta.html",
    "keywords": "Hemorragia digestiva alta Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Hemorragia digestiva alta Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hemorragia digestiva alta",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hemorragia-digestiva-media-y-baja",
    "slug": "hemorragia-digestiva-media-y-baja",
    "title": "Hemorragia digestiva media y baja",
    "summary": "Evaluacion y manejo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/hemorragia-digestiva-media-y-baja",
    "sourcePath": "/content/protocolos/digestivo/hemorragia-digestiva-media-y-baja.html",
    "keywords": "Hemorragia digestiva media y baja Evaluacion y manejo. Protocolos Digestivo Urgencias hemorragia digestiva media y baja Hemorragia digestiva media y baja Evaluacion y manejo. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hemorroides",
    "slug": "hemorroides",
    "title": "Hemorroides",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/hemorroides",
    "sourcePath": "/content/protocolos/digestivo/hemorroides.html",
    "keywords": "Hemorroides Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Atención Primaria Hemorroides Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hemorroides",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hepatitis-aguda",
    "slug": "hepatitis-aguda",
    "title": "Hepatitis aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/hepatitis-aguda",
    "sourcePath": "/content/protocolos/digestivo/hepatitis-aguda.html",
    "keywords": "Hepatitis aguda Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Protocolos Digestivo Urgencias Hepatitis aguda Documento clínico en desarrollo preparado estructuralmente. Área: DIGESTIVO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hepatitis aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-ictericia",
    "slug": "ictericia",
    "title": "Ictericia",
    "summary": "Algoritmo de ictericia.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/ictericia",
    "sourcePath": "/content/protocolos/digestivo/ictericia.html",
    "keywords": "Ictericia Algoritmo de ictericia. Protocolos Digestivo Urgencias ictericia Ictericia Algoritmo de ictericia. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-obstruccion-intestinal",
    "slug": "obstruccion-intestinal",
    "title": "Obstruccion intestinal",
    "summary": "Diagnostico y manejo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/obstruccion-intestinal",
    "sourcePath": "/content/protocolos/digestivo/obstruccion-intestinal.html",
    "keywords": "Obstruccion intestinal Diagnostico y manejo. Protocolos Digestivo Urgencias obstruccion intestinal Obstruccion intestinal Diagnostico y manejo. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-pancreatitis-aguda",
    "slug": "pancreatitis-aguda",
    "title": "Pancreatitis aguda",
    "summary": "Manejo de soporte.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/pancreatitis-aguda",
    "sourcePath": "/content/protocolos/digestivo/pancreatitis-aguda.html",
    "keywords": "Pancreatitis aguda Manejo de soporte. Protocolos Digestivo Urgencias pancreatitis aguda Pancreatitis aguda Manejo de soporte. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-patologia-esofagica-aguda",
    "slug": "patologia-esofagica-aguda",
    "title": "Patologia esofagica aguda",
    "summary": "Urgencias esofagicas.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Digestivo",
    "route": "/protocolos/patologia-esofagica-aguda",
    "sourcePath": "/content/protocolos/digestivo/patologia-esofagica-aguda.html",
    "keywords": "Patologia esofagica aguda Urgencias esofagicas. Protocolos Digestivo Urgencias patologia esofagica aguda Patologia esofagica aguda Urgencias esofagicas. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cetoacidosis-diabetica",
    "slug": "cetoacidosis-diabetica",
    "title": "Cetoacidosis diabética",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/cetoacidosis-diabetica",
    "sourcePath": "/content/protocolos/endocrinologia/cetoacidosis-diabetica.html",
    "keywords": "Cetoacidosis diabética Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Protocolos Endocrinología Urgencias Cetoacidosis diabética Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Cetoacidosis diabética",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-diabetes-urgencias",
    "slug": "diabetes-urgencias",
    "title": "Diabetes en Urgencias",
    "summary": "Puerta clínica para la diabetes descompensada en Urgencias: identificación de hipoglucemia grave, cetoacidosis, estado hiperosmolar y otras complicaciones agudas que exigen analítica inmediata, fluidos y decisión de ingreso.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/diabetes-urgencias",
    "sourcePath": "/content/protocolos/endocrinologia/diabetes-urgencias.html",
    "keywords": "Diabetes en Urgencias Puerta clínica para la diabetes descompensada en Urgencias: identificación de hipoglucemia grave, cetoacidosis, estado hiperosmolar y otras complicaciones agudas que exigen analítica inmediata, fluidos y decisión de ingreso. Protocolos Endocrinología Urgencias diabetes urgencias hipoglucemia cetoacidosis estado hiperosmolar deshidratacion anion gap osmolaridad sodio corregido Diabetes en Urgencias Puerta clínica para la diabetes descompensada en Urgencias: identificación de hipoglucemia grave, cetoacidosis, estado hiperosmolar y otras complicaciones agudas que exigen analítica inmediata, fluidos y decisión de ingreso. Puntos clave En Urgencias la diabetes se aborda por síndrome agudo: hipoglucemia grave, cetosis/cetoacidosis, estado hiperosmolar o infección asociada. Glucosa capilar aislada no basta; hay que integrar estado mental, hidratación, anion gap, bicarbonato, cetonas, sodio corregido y osmolaridad. La prioridad inicial es ABC, fluidoterapia, potasio y corrección segura del trastorno metabólico, no el ajuste crónico del tratamiento basal. Evaluación urgente Solicitar glucosa, gasometría o equilibrio ácido-base, sodio, potasio, creatinina, cetonas y osmolaridad calculada según presentación clínica. Buscar desencadenantes: infección, omisión de insulina, IAM, ictus, pancreatitis, tóxicos o tratamiento esteroideo reciente. La disminución del nivel de conciencia, la hipotensión, la polipnea o la deshidratación intensa obligan a escalar monitorización y nivel de cuidados. Síndromes principales Hipoglucemia grave: Cetoacidosis diabética: Estado hiperosmolar: Decisión práctica Si hay compromiso neurológico, shock, acidosis significativa, hiperosmolaridad marcada o imposibilidad de seguimiento, el ingreso es la norma. Los cuadros leves solo pueden cerrarse tras corrección clara, búsqueda de causa, reevaluación analítica y plan terapéutico seguro al alta. El seguimiento longitudinal y la optimización de objetivos glucémicos continúan después en Atención Primaria. Herramientas y protocolos relacionados Fuentes integradas desde /biblio La ficha se apoya en la documentación local de diabetes del proyecto y sirve como puerta urgente hacia las complicaciones agudas ya catalogadas. /biblio/Cursos/ Diabetes y obesidad/Diabetes y obesidad.pdf /biblio/temas/Pie diabetico/Guía Nacional Pie Diabético_DIGITAL.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-diabetes-mellitus-atencion-primaria",
      "protocolos-cetoacidosis-diabetica",
      "protocolos-estado-hiperglucemico-hiperosmolar",
      "protocolos-hipoglucemia",
      "herramientas-anion-gap",
      "herramientas-osmolaridad-calculada",
      "herramientas-sodio-corregido-por-glucosa"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-diabetes-mellitus-atencion-primaria",
    "slug": "diabetes-mellitus-atencion-primaria",
    "title": "Diabetes mellitus en Atención Primaria",
    "summary": "Manejo ambulatorio de la diabetes mellitus en consulta: confirmación diagnóstica, objetivos individualizados, educación terapéutica, prevención de complicaciones y criterios de derivación al circuito urgente.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/diabetes-mellitus-atencion-primaria",
    "sourcePath": "/content/protocolos/endocrinologia/diabetes-mellitus-atencion-primaria.html",
    "keywords": "Diabetes mellitus en Atención Primaria Manejo ambulatorio de la diabetes mellitus en consulta: confirmación diagnóstica, objetivos individualizados, educación terapéutica, prevención de complicaciones y criterios de derivación al circuito urgente. Protocolos Endocrinología Atención Primaria diabetes mellitus atencion primaria consulta hba1c objetivos complicaciones cronicas autocontrol pie diabetico derivacion Diabetes mellitus en Atención Primaria Manejo ambulatorio de la diabetes mellitus en consulta: confirmación diagnóstica, objetivos individualizados, educación terapéutica, prevención de complicaciones y criterios de derivación al circuito urgente. Puntos clave En Atención Primaria la diabetes se maneja como proceso longitudinal: control glucémico, riesgo cardiovascular, adherencia y prevención de complicaciones. El objetivo no es solo la HbA1c; hay que integrar fragilidad, hipoglucemias, función renal, peso y comorbilidad. La educación en autocuidado, pie diabético, alimentación y días de enfermedad evita descompensaciones y reduce derivaciones evitables. Evaluación en consulta Revisar HbA1c, glucemias domiciliarias cuando existan, peso, tensión arterial, función renal, albuminuria y perfil lipídico. Explorar hábitos, técnica de inyección o uso de sensores, adherencia, hipoglucemias previas y barreras sociales o cognitivas. Examinar pie, sensibilidad, pulsos y lesiones cutáneas; documentar retinografía o derivación oftalmológica cuando proceda. Ajuste terapéutico Individualizar objetivos glucémicos según edad, fragilidad, riesgo de hipoglucemia y carga de comorbilidad. Antes de intensificar tratamiento, revisar dieta, actividad física, errores de toma, técnica y adherencia real. Si hay insulinización o tratamiento complejo, dejar plan de autocontrol, corrección de hipoglucemia y cuándo pedir ayuda. Prevención de complicaciones Incluir control de HTA, dislipemia, tabaquismo, vacunación y seguimiento del pie diabético como parte del mismo plan. Reforzar dieta mediterránea, actividad física adaptada y educación terapéutica continuada. Si aparece ulceración, infección de pie, cetosis, vómitos, deshidratación o deterioro general, el paciente deja de estar en circuito ambulatorio simple. Cuándo derivar a Urgencias Hipoglucemia grave, disminución del nivel de conciencia, vómitos persistentes, cetonuria/cetonemia, polipnea o signos de deshidratación. Sospecha de cetoacidosis, estado hiperosmolar, sepsis, pie diabético complicado o imposibilidad de control en domicilio. El camino de Urgencias se centra en las complicaciones agudas, no en el ajuste longitudinal del tratamiento basal. Herramientas y rutas relacionadas Fuentes integradas desde /biblio Se ha priorizado la documentación docente local sobre diabetes y pie diabético para estructurar el seguimiento ambulatorio. /biblio/Cursos/ Diabetes y obesidad/Diabetes y obesidad.pdf /biblio/temas/Pie diabetico/Guía Nacional Pie Diabético_DIGITAL.pdf /biblio/temas/Pie diabetico/da-piediabetico-final.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-diabetes-urgencias",
      "protocolos-hipoglucemia",
      "herramientas-medas",
      "herramientas-ipaq"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-estado-hiperglucemico-hiperosmolar",
    "slug": "estado-hiperglucemico-hiperosmolar",
    "title": "Estado hiperglucémico hiperosmolar",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/estado-hiperglucemico-hiperosmolar",
    "sourcePath": "/content/protocolos/endocrinologia/estado-hiperglucemico-hiperosmolar.html",
    "keywords": "Estado hiperglucémico hiperosmolar Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Protocolos Endocrinología Urgencias Estado hiperglucémico hiperosmolar Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Estado hiperglucémico hiperosmolar",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipoglucemia",
    "slug": "hipoglucemia",
    "title": "Hipoglucemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/hipoglucemia",
    "sourcePath": "/content/protocolos/endocrinologia/hipoglucemia.html",
    "keywords": "Hipoglucemia Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Protocolos Endocrinología Urgencias Hipoglucemia Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipoglucemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-otras-complicaciones-agudas-de-la-diabetes",
    "slug": "otras-complicaciones-agudas-de-la-diabetes",
    "title": "Otras complicaciones agudas de la diabetes",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/otras-complicaciones-agudas-de-la-diabetes",
    "sourcePath": "/content/protocolos/endocrinologia/otras-complicaciones-agudas-de-la-diabetes.html",
    "keywords": "Otras complicaciones agudas de la diabetes Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Protocolos Endocrinología Urgencias Otras complicaciones agudas de la diabetes Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Otras complicaciones agudas de la diabetes",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-urgencias-tiroideas",
    "slug": "urgencias-tiroideas",
    "title": "Urgencias tiroideas",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Endocrinología",
    "route": "/protocolos/urgencias-tiroideas",
    "sourcePath": "/content/protocolos/endocrinologia/urgencias-tiroideas.html",
    "keywords": "Urgencias tiroideas Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Protocolos Endocrinología Urgencias Urgencias tiroideas Documento clínico en desarrollo preparado estructuralmente. Área: ENDOCRINOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Urgencias tiroideas",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-dolor-pelvico-agudo",
    "slug": "dolor-pelvico-agudo",
    "title": "Dolor pélvico agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/dolor-pelvico-agudo",
    "sourcePath": "/content/protocolos/ginecologia-ets/dolor-pelvico-agudo.html",
    "keywords": "Dolor pélvico agudo Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Urgencias Dolor pélvico agudo Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Dolor pélvico agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-enfermedad-inflamatoria-pelvica",
    "slug": "enfermedad-inflamatoria-pelvica",
    "title": "Enfermedad inflamatoria pélvica",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/enfermedad-inflamatoria-pelvica",
    "sourcePath": "/content/protocolos/ginecologia-ets/enfermedad-inflamatoria-pelvica.html",
    "keywords": "Enfermedad inflamatoria pélvica Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Urgencias Enfermedad inflamatoria pélvica Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Enfermedad inflamatoria pélvica",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-infecciones-agudas-de-transmision-sexual",
    "slug": "infecciones-agudas-de-transmision-sexual",
    "title": "Infecciones agudas de transmisión sexual",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/infecciones-agudas-de-transmision-sexual",
    "sourcePath": "/content/protocolos/ginecologia-ets/infecciones-agudas-de-transmision-sexual.html",
    "keywords": "Infecciones agudas de transmisión sexual Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Atención Primaria Infecciones agudas de transmisión sexual Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Infecciones agudas de transmisión sexual",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-infeccion-vaginal-aguda",
    "slug": "infeccion-vaginal-aguda",
    "title": "Infección vaginal aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/infeccion-vaginal-aguda",
    "sourcePath": "/content/protocolos/ginecologia-ets/infeccion-vaginal-aguda.html",
    "keywords": "Infección vaginal aguda Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Atención Primaria Infección vaginal aguda Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Infección vaginal aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sangrado-del-primer-trimestre-del-embarazo",
    "slug": "sangrado-del-primer-trimestre-del-embarazo",
    "title": "Sangrado del primer trimestre del embarazo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/sangrado-del-primer-trimestre-del-embarazo",
    "sourcePath": "/content/protocolos/ginecologia-ets/sangrado-del-primer-trimestre-del-embarazo.html",
    "keywords": "Sangrado del primer trimestre del embarazo Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Urgencias Sangrado del primer trimestre del embarazo Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Sangrado del primer trimestre del embarazo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sifilis",
    "slug": "sifilis",
    "title": "Sífilis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Ginecología / ETS",
    "route": "/protocolos/sifilis",
    "sourcePath": "/content/protocolos/ginecologia-ets/sifilis.html",
    "keywords": "Sífilis Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Protocolos Ginecología / ETS Atención Primaria Sífilis Documento clínico en desarrollo preparado estructuralmente. Área: GINECOLOGÍA / ETS. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Sífilis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cistitis-uretritis",
    "slug": "cistitis-uretritis",
    "title": "Cistitis / uretritis",
    "summary": "Tto y prevencion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/cistitis-uretritis",
    "sourcePath": "/content/protocolos/nefro-urologia/cistitis-uretritis.html",
    "keywords": "Cistitis / uretritis Tto y prevencion. Protocolos Nefro-urología Atención Primaria cistitis / uretritis Cistitis / uretritis Tto y prevencion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hematuria",
    "slug": "hematuria",
    "title": "Hematuria",
    "summary": "Criterios de sospecha urgente.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/hematuria",
    "sourcePath": "/content/protocolos/nefro-urologia/hematuria.html",
    "keywords": "Hematuria Criterios de sospecha urgente. Protocolos Nefro-urología Urgencias hematuria Hematuria Criterios de sospecha urgente. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-pielonefritis-aguda",
    "slug": "pielonefritis-aguda",
    "title": "Pielonefritis aguda",
    "summary": "Antibioticos y apoyo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/pielonefritis-aguda",
    "sourcePath": "/content/protocolos/nefro-urologia/pielonefritis-aguda.html",
    "keywords": "Pielonefritis aguda Antibioticos y apoyo. Protocolos Nefro-urología Urgencias pielonefritis aguda Pielonefritis aguda Antibioticos y apoyo. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-prostatitis-aguda",
    "slug": "prostatitis-aguda",
    "title": "Prostatitis aguda",
    "summary": "Abordaje urgencias.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/prostatitis-aguda",
    "sourcePath": "/content/protocolos/nefro-urologia/prostatitis-aguda.html",
    "keywords": "Prostatitis aguda Abordaje urgencias. Protocolos Nefro-urología Urgencias prostatitis aguda Prostatitis aguda Abordaje urgencias. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-retencion-aguda-de-orina",
    "slug": "retencion-aguda-de-orina",
    "title": "Retencion aguda de orina",
    "summary": "Sondaje y causa obstructiva.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/retencion-aguda-de-orina",
    "sourcePath": "/content/protocolos/nefro-urologia/retencion-aguda-de-orina.html",
    "keywords": "Retencion aguda de orina Sondaje y causa obstructiva. Protocolos Nefro-urología Urgencias retencion aguda de orina Retencion aguda de orina Sondaje y causa obstructiva. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sindrome-escrotal-agudo",
    "slug": "sindrome-escrotal-agudo",
    "title": "Sindrome escrotal agudo",
    "summary": "Diferencia torsion/infeccion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefro-urología",
    "route": "/protocolos/sindrome-escrotal-agudo",
    "sourcePath": "/content/protocolos/nefro-urologia/sindrome-escrotal-agudo.html",
    "keywords": "Sindrome escrotal agudo Diferencia torsion/infeccion. Protocolos Nefro-urología Urgencias sindrome escrotal agudo Sindrome escrotal agudo Diferencia torsion/infeccion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-acidosis-metabolica",
    "slug": "acidosis-metabolica",
    "title": "Acidosis metabólica",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/acidosis-metabolica",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/acidosis-metabolica.html",
    "keywords": "Acidosis metabólica Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Acidosis metabólica Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Acidosis metabólica",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-acidosis-respiratoria",
    "slug": "acidosis-respiratoria",
    "title": "Acidosis respiratoria",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/acidosis-respiratoria",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/acidosis-respiratoria.html",
    "keywords": "Acidosis respiratoria Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Acidosis respiratoria Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Acidosis respiratoria",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-alcalosis-metabolica",
    "slug": "alcalosis-metabolica",
    "title": "Alcalosis metabólica",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/alcalosis-metabolica",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/alcalosis-metabolica.html",
    "keywords": "Alcalosis metabólica Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Alcalosis metabólica Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Alcalosis metabólica",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-alcalosis-respiratoria",
    "slug": "alcalosis-respiratoria",
    "title": "Alcalosis respiratoria",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/alcalosis-respiratoria",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/alcalosis-respiratoria.html",
    "keywords": "Alcalosis respiratoria Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Alcalosis respiratoria Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Alcalosis respiratoria",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-colico-renal",
    "slug": "colico-renal",
    "title": "Cólico renal",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/colico-renal",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/colico-renal.html",
    "keywords": "Cólico renal Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Cólico renal Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Cólico renal",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-enfermedad-renal-cronica-reagudizada",
    "slug": "enfermedad-renal-cronica-reagudizada",
    "title": "Enfermedad renal crónica reagudizada",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/enfermedad-renal-cronica-reagudizada",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/enfermedad-renal-cronica-reagudizada.html",
    "keywords": "Enfermedad renal crónica reagudizada Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Enfermedad renal crónica reagudizada Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Enfermedad renal crónica reagudizada",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipercalcemia",
    "slug": "hipercalcemia",
    "title": "Hipercalcemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipercalcemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipercalcemia.html",
    "keywords": "Hipercalcemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hipercalcemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipercalcemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipermagnesemia",
    "slug": "hipermagnesemia",
    "title": "Hipermagnesemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipermagnesemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipermagnesemia.html",
    "keywords": "Hipermagnesemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hipermagnesemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipermagnesemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipernatremia",
    "slug": "hipernatremia",
    "title": "Hipernatremia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipernatremia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipernatremia.html",
    "keywords": "Hipernatremia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hipernatremia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipernatremia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hiperpotasemia",
    "slug": "hiperpotasemia",
    "title": "Hiperpotasemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hiperpotasemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hiperpotasemia.html",
    "keywords": "Hiperpotasemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hiperpotasemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hiperpotasemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipocalcemia",
    "slug": "hipocalcemia",
    "title": "Hipocalcemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipocalcemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipocalcemia.html",
    "keywords": "Hipocalcemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hipocalcemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipocalcemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipomagnesemia",
    "slug": "hipomagnesemia",
    "title": "Hipomagnesemia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipomagnesemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipomagnesemia.html",
    "keywords": "Hipomagnesemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hipomagnesemia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hipomagnesemia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hiponatremia",
    "slug": "hiponatremia",
    "title": "Hiponatremia",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hiponatremia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hiponatremia.html",
    "keywords": "Hiponatremia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Hiponatremia Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hiponatremia",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hipopotasemia",
    "slug": "hipopotasemia",
    "title": "Hipopotasemia",
    "summary": "Descenso del potasio sérico por debajo de 3,5 mEq/L. La prioridad clínica es identificar arritmias, causas corregibles, déficit de magnesio y decidir si la reposición puede ser oral o necesita vía intravenosa monitorizada.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/hipopotasemia",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/hipopotasemia.html",
    "keywords": "Hipopotasemia Descenso del potasio sérico por debajo de 3,5 mEq/L. La prioridad clínica es identificar arritmias, causas corregibles, déficit de magnesio y decidir si la reposición puede ser oral o necesita vía intravenosa monitorizada. Protocolos Nefrología / Metabólico Urgencias hipopotasemia ECG onda U QT debilidad potasio oral intravenoso magnesio diuréticos vómitos diarrea digoxina Hipopotasemia Descenso del potasio sérico por debajo de 3,5 mEq/L. La prioridad clínica es identificar arritmias, causas corregibles, déficit de magnesio y decidir si la reposición puede ser oral o necesita vía intravenosa monitorizada. Puntos clave Clasificación práctica: leve 3-3,5 mEq/L, moderada 2,5-3 mEq/L y grave < 2,5 mEq/L o con síntomas/ECG patológico. La anamnesis suele orientar la causa: diuréticos, pérdidas digestivas, hiperaldosteronismo, redistribución intracelular o hipomagnesemia asociada. El potasio IV se reserva para pacientes sintomáticos, con ECG patológico, cifras muy bajas o imposibilidad de vía oral. Valoración inicial Monitorizar constantes y ECG continuo si hay síntomas, cardiopatía, digoxina o cifras marcadamente bajas. Buscar debilidad, calambres, parestesias, parálisis, estreñimiento, íleo o datos de insuficiencia respiratoria. Solicitar función renal, magnesio, glucemia y valorar pérdidas digestivas/renales o redistribución. Hallazgos de gravedad Onda U prominente, aplanamiento o inversión de T, descenso del ST, prolongación del QT y arritmias ventriculares/supraventriculares. Debilidad progresiva, parálisis, intolerancia digestiva grave o potasio < 2,5 mEq/L. Mayor riesgo si coexisten cardiopatía, diuréticos crónicos, digoxina, alcalosis o hipomagnesemia. Reposición práctica Si la hipopotasemia es leve y el paciente está estable, priorizar reposición oral y corrección de la causa. Iniciar potasio IV cuando hay síntomas, ECG patológico, imposibilidad de vía oral o cifras graves; usar perfusión monitorizada. Evitar diluir en glucosa cuando pueda favorecer liberación de insulina y empeorar el descenso sérico. Corregir magnesio si está bajo o si la respuesta al potasio es insuficiente. Objetivo de potasio según contexto Tabla práctica procedente de la bibliografía local auditada. En cardiopatía, digoxina o uso crónico de diuréticos conviene mantener objetivos más altos y reevaluación estrecha. Herramientas relacionadas Fuentes integradas desde /biblio Se ha priorizado material práctico de urgencias y revisión clínica actualizada. /biblio/temas/hipokalemia/HK_Fisterra.pdf /biblio/temas/hipokalemia/HK_Samu.pdf /biblio/temas/hipokalemia/Hipokalemia definitivo.pdf /biblio/temas/hipokalemia/Hklemia .jpg",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-insuficiencia-renal-aguda",
    "slug": "insuficiencia-renal-aguda",
    "title": "Insuficiencia renal aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/insuficiencia-renal-aguda",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/insuficiencia-renal-aguda.html",
    "keywords": "Insuficiencia renal aguda Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Insuficiencia renal aguda Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Insuficiencia renal aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-rabdomiolisis",
    "slug": "rabdomiolisis",
    "title": "Rabdomiólisis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Nefrología / Metabólico",
    "route": "/protocolos/rabdomiolisis",
    "sourcePath": "/content/protocolos/nefrologia-metabolico/rabdomiolisis.html",
    "keywords": "Rabdomiólisis Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Protocolos Nefrología / Metabólico Urgencias Rabdomiólisis Documento clínico en desarrollo preparado estructuralmente. Área: NEFROLOGÍA / METABÓLICO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Rabdomiólisis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-absceso-cerebral",
    "slug": "absceso-cerebral",
    "title": "Absceso cerebral",
    "summary": "Manejo medico-quirurgico.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/absceso-cerebral",
    "sourcePath": "/content/protocolos/neurologia/absceso-cerebral.html",
    "keywords": "Absceso cerebral Manejo medico-quirurgico. Protocolos Neurología Urgencias absceso cerebral Absceso cerebral Manejo medico-quirurgico. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-absceso-epidural-espinal",
    "slug": "absceso-epidural-espinal",
    "title": "Absceso epidural espinal",
    "summary": "Urgencia neuroquirurgica.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/absceso-epidural-espinal",
    "sourcePath": "/content/protocolos/neurologia/absceso-epidural-espinal.html",
    "keywords": "Absceso epidural espinal Urgencia neuroquirurgica. Protocolos Neurología Urgencias absceso epidural espinal Absceso epidural espinal Urgencia neuroquirurgica. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cefalea-con-banderas-rojas",
    "slug": "cefalea-con-banderas-rojas",
    "title": "Cefalea con banderas rojas",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/cefalea-con-banderas-rojas",
    "sourcePath": "/content/protocolos/neurologia/cefalea-con-banderas-rojas.html",
    "keywords": "Cefalea con banderas rojas Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Cefalea con banderas rojas Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Cefalea con banderas rojas",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-coma",
    "slug": "coma",
    "title": "Coma",
    "summary": "Protocolo ABC+DI.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/coma",
    "sourcePath": "/content/protocolos/neurologia/coma.html",
    "keywords": "Coma Protocolo ABC+DI. Protocolos Neurología Urgencias coma Coma Protocolo ABC+DI. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-crisis-convulsiva",
    "slug": "crisis-convulsiva",
    "title": "Crisis convulsiva",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/crisis-convulsiva",
    "sourcePath": "/content/protocolos/neurologia/crisis-convulsiva.html",
    "keywords": "Crisis convulsiva Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Crisis convulsiva Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Crisis convulsiva",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-delirium-sindrome-confusional-agudo",
    "slug": "delirium-sindrome-confusional-agudo",
    "title": "Delirium / síndrome confusional agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/delirium-sindrome-confusional-agudo",
    "sourcePath": "/content/protocolos/neurologia/delirium-sindrome-confusional-agudo.html",
    "keywords": "Delirium / síndrome confusional agudo Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Delirium / síndrome confusional agudo Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Delirium / síndrome confusional agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-distonias-agudas-iatrogenicas",
    "slug": "distonias-agudas-iatrogenicas",
    "title": "Distonias agudas iatrogenicas",
    "summary": "Cese de farmacos desencadenantes.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/distonias-agudas-iatrogenicas",
    "sourcePath": "/content/protocolos/neurologia/distonias-agudas-iatrogenicas.html",
    "keywords": "Distonias agudas iatrogenicas Cese de farmacos desencadenantes. Protocolos Neurología Urgencias distonias agudas iatrogenicas Distonias agudas iatrogenicas Cese de farmacos desencadenantes. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-encefalitis-infeccion-del-snc",
    "slug": "encefalitis-infeccion-del-snc",
    "title": "Encefalitis (infección del SNC)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/encefalitis-infeccion-del-snc",
    "sourcePath": "/content/protocolos/neurologia/encefalitis-infeccion-del-snc.html",
    "keywords": "Encefalitis (infección del SNC) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Encefalitis (infección del SNC) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Encefalitis (infección del SNC)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-epilepsia-seguimiento-y-ajustes",
    "slug": "epilepsia-seguimiento-y-ajustes",
    "title": "Epilepsia (seguimiento y ajustes)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/epilepsia-seguimiento-y-ajustes",
    "sourcePath": "/content/protocolos/neurologia/epilepsia-seguimiento-y-ajustes.html",
    "keywords": "Epilepsia (seguimiento y ajustes) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Atención Primaria Epilepsia (seguimiento y ajustes) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Epilepsia (seguimiento y ajustes)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-fiebre-sin-foco-adulto-no-inmunodeprimido",
    "slug": "fiebre-sin-foco-adulto-no-inmunodeprimido",
    "title": "Fiebre sin foco adulto no inmunodeprimido",
    "summary": "Enfoque sistematico.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/fiebre-sin-foco-adulto-no-inmunodeprimido",
    "sourcePath": "/content/protocolos/neurologia/fiebre-sin-foco-adulto-no-inmunodeprimido.html",
    "keywords": "Fiebre sin foco adulto no inmunodeprimido Enfoque sistematico. Protocolos Neurología Urgencias fiebre sin foco adulto no inmunodeprimido Fiebre sin foco adulto no inmunodeprimido Enfoque sistematico. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hemorragia-subaracnoidea-espontanea",
    "slug": "hemorragia-subaracnoidea-espontanea",
    "title": "Hemorragia subaracnoidea espontanea",
    "summary": "Diagnostico TAC.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/hemorragia-subaracnoidea-espontanea",
    "sourcePath": "/content/protocolos/neurologia/hemorragia-subaracnoidea-espontanea.html",
    "keywords": "Hemorragia subaracnoidea espontanea Diagnostico TAC. Protocolos Neurología Urgencias hemorragia subaracnoidea espontanea Hemorragia subaracnoidea espontanea Diagnostico TAC. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-ictus-agudo-codigo-ictus",
    "slug": "ictus-agudo-codigo-ictus",
    "title": "Ictus agudo (código ictus)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/ictus-agudo-codigo-ictus",
    "sourcePath": "/content/protocolos/neurologia/ictus-agudo-codigo-ictus.html",
    "keywords": "Ictus agudo (código ictus) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Ictus agudo (código ictus) Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Ictus agudo (código ictus)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-migrana",
    "slug": "migrana",
    "title": "Migraña",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/migrana",
    "sourcePath": "/content/protocolos/neurologia/migrana.html",
    "keywords": "Migraña Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Migraña Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Migraña",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sepsis",
    "slug": "sepsis",
    "title": "Sepsis",
    "summary": "Soporte inicial y escalas.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/sepsis",
    "sourcePath": "/content/protocolos/neurologia/sepsis.html",
    "keywords": "Sepsis Soporte inicial y escalas. Protocolos Neurología Urgencias sepsis Sepsis Soporte inicial y escalas. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sindrome-meningeo",
    "slug": "sindrome-meningeo",
    "title": "Sindrome meningeo",
    "summary": "Puncion lumbar.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/sindrome-meningeo",
    "sourcePath": "/content/protocolos/neurologia/sindrome-meningeo.html",
    "keywords": "Sindrome meningeo Puncion lumbar. Protocolos Neurología Urgencias sindrome meningeo Sindrome meningeo Puncion lumbar. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-traumatismo-craneoencefalico-en-paciente-antiagregado-o-anticoagulado",
    "slug": "traumatismo-craneoencefalico-en-paciente-antiagregado-o-anticoagulado",
    "title": "Traumatismo craneoencefálico en paciente antiagregado o anticoagulado",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/traumatismo-craneoencefalico-en-paciente-antiagregado-o-anticoagulado",
    "sourcePath": "/content/protocolos/neurologia/traumatismo-craneoencefalico-en-paciente-antiagregado-o-anticoagulado.html",
    "keywords": "Traumatismo craneoencefálico en paciente antiagregado o anticoagulado Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Traumatismo craneoencefálico en paciente antiagregado o anticoagulado Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Traumatismo craneoencefálico en paciente antiagregado o anticoagulado",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-vertigo-agudo-sindrome-vestibular-agudo",
    "slug": "vertigo-agudo-sindrome-vestibular-agudo",
    "title": "Vértigo agudo / síndrome vestibular agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Neurología",
    "route": "/protocolos/vertigo-agudo-sindrome-vestibular-agudo",
    "sourcePath": "/content/protocolos/neurologia/vertigo-agudo-sindrome-vestibular-agudo.html",
    "keywords": "Vértigo agudo / síndrome vestibular agudo Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Protocolos Neurología Urgencias Vértigo agudo / síndrome vestibular agudo Documento clínico en desarrollo preparado estructuralmente. Área: NEUROLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Vértigo agudo / síndrome vestibular agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-absceso-periamigdalino",
    "slug": "absceso-periamigdalino",
    "title": "Absceso periamigdalino",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ORL.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/absceso-periamigdalino",
    "sourcePath": "/content/protocolos/orl/absceso-periamigdalino.html",
    "keywords": "Absceso periamigdalino Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Protocolos ORL Urgencias Absceso periamigdalino Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Absceso periamigdalino",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-celulitis-cervicofacial",
    "slug": "celulitis-cervicofacial",
    "title": "Celulitis cervicofacial",
    "summary": "Urgencia facial.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/celulitis-cervicofacial",
    "sourcePath": "/content/protocolos/orl/celulitis-cervicofacial.html",
    "keywords": "Celulitis cervicofacial Urgencia facial. Protocolos ORL Urgencias celulitis cervicofacial Celulitis cervicofacial Urgencia facial. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-dolor-faringeo-agudo",
    "slug": "dolor-faringeo-agudo",
    "title": "Dolor faringeo agudo",
    "summary": "Centor y manejo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/dolor-faringeo-agudo",
    "sourcePath": "/content/protocolos/orl/dolor-faringeo-agudo.html",
    "keywords": "Dolor faringeo agudo Centor y manejo. Protocolos ORL Atención Primaria dolor faringeo agudo Dolor faringeo agudo Centor y manejo. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-epistaxis",
    "slug": "epistaxis",
    "title": "Epistaxis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ORL.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/epistaxis",
    "sourcePath": "/content/protocolos/orl/epistaxis.html",
    "keywords": "Epistaxis Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Protocolos ORL Urgencias Epistaxis Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Epistaxis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-otalgia-aguda",
    "slug": "otalgia-aguda",
    "title": "Otalgia aguda",
    "summary": "Estratificacion de origen.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/otalgia-aguda",
    "sourcePath": "/content/protocolos/orl/otalgia-aguda.html",
    "keywords": "Otalgia aguda Estratificacion de origen. Protocolos ORL Atención Primaria otalgia aguda Otalgia aguda Estratificacion de origen. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-otitis",
    "slug": "otitis",
    "title": "Otitis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: ORL.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/otitis",
    "sourcePath": "/content/protocolos/orl/otitis.html",
    "keywords": "Otitis Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Protocolos ORL Atención Primaria Otitis Documento clínico en desarrollo preparado estructuralmente. Área: ORL. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Otitis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-procesos-agudos-glandulas-salivales",
    "slug": "procesos-agudos-glandulas-salivales",
    "title": "Procesos agudos glandulas salivales",
    "summary": "Tto de sialoadenitis.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/procesos-agudos-glandulas-salivales",
    "sourcePath": "/content/protocolos/orl/procesos-agudos-glandulas-salivales.html",
    "keywords": "Procesos agudos glandulas salivales Tto de sialoadenitis. Protocolos ORL Atención Primaria procesos agudos glandulas salivales Procesos agudos glandulas salivales Tto de sialoadenitis. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-procesos-agudos-odontologicos",
    "slug": "procesos-agudos-odontologicos",
    "title": "Procesos agudos odontologicos",
    "summary": "Derivacion y analgesia.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/procesos-agudos-odontologicos",
    "sourcePath": "/content/protocolos/orl/procesos-agudos-odontologicos.html",
    "keywords": "Procesos agudos odontologicos Derivacion y analgesia. Protocolos ORL Atención Primaria procesos agudos odontologicos Procesos agudos odontologicos Derivacion y analgesia. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-rinosinusitis-aguda",
    "slug": "rinosinusitis-aguda",
    "title": "Rinosinusitis aguda",
    "summary": "Criterios y tratamiento.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/rinosinusitis-aguda",
    "sourcePath": "/content/protocolos/orl/rinosinusitis-aguda.html",
    "keywords": "Rinosinusitis aguda Criterios y tratamiento. Protocolos ORL Atención Primaria rinosinusitis aguda Rinosinusitis aguda Criterios y tratamiento. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sordera-brusca",
    "slug": "sordera-brusca",
    "title": "Sordera brusca",
    "summary": "Intervencion urgente.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "ORL",
    "route": "/protocolos/sordera-brusca",
    "sourcePath": "/content/protocolos/orl/sordera-brusca.html",
    "keywords": "Sordera brusca Intervencion urgente. Protocolos ORL Urgencias sordera brusca Sordera brusca Intervencion urgente. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-blefaritis",
    "slug": "blefaritis",
    "title": "Blefaritis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/blefaritis",
    "sourcePath": "/content/protocolos/oftalmologia/blefaritis.html",
    "keywords": "Blefaritis Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Blefaritis Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Blefaritis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-chalazion",
    "slug": "chalazion",
    "title": "Chalazión",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/chalazion",
    "sourcePath": "/content/protocolos/oftalmologia/chalazion.html",
    "keywords": "Chalazión Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Chalazión Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Chalazión",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cuerpo-extrano-ocular",
    "slug": "cuerpo-extrano-ocular",
    "title": "Cuerpo extraño ocular",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/cuerpo-extrano-ocular",
    "sourcePath": "/content/protocolos/oftalmologia/cuerpo-extrano-ocular.html",
    "keywords": "Cuerpo extraño ocular Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Cuerpo extraño ocular Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Cuerpo extraño ocular",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-dacriocistitis-aguda",
    "slug": "dacriocistitis-aguda",
    "title": "Dacriocistitis aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/dacriocistitis-aguda",
    "sourcePath": "/content/protocolos/oftalmologia/dacriocistitis-aguda.html",
    "keywords": "Dacriocistitis aguda Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Dacriocistitis aguda Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Dacriocistitis aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-desprendimiento-de-retina",
    "slug": "desprendimiento-de-retina",
    "title": "Desprendimiento de retina",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/desprendimiento-de-retina",
    "sourcePath": "/content/protocolos/oftalmologia/desprendimiento-de-retina.html",
    "keywords": "Desprendimiento de retina Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Desprendimiento de retina Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Desprendimiento de retina",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-disminucion-de-la-agudeza-visual",
    "slug": "disminucion-de-la-agudeza-visual",
    "title": "Disminución de la agudeza visual",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/disminucion-de-la-agudeza-visual",
    "sourcePath": "/content/protocolos/oftalmologia/disminucion-de-la-agudeza-visual.html",
    "keywords": "Disminución de la agudeza visual Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Disminución de la agudeza visual Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Disminución de la agudeza visual",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-epiescleritis",
    "slug": "epiescleritis",
    "title": "Epiescleritis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/epiescleritis",
    "sourcePath": "/content/protocolos/oftalmologia/epiescleritis.html",
    "keywords": "Epiescleritis Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Epiescleritis Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Epiescleritis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-glaucoma-agudo",
    "slug": "glaucoma-agudo",
    "title": "Glaucoma agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/glaucoma-agudo",
    "sourcePath": "/content/protocolos/oftalmologia/glaucoma-agudo.html",
    "keywords": "Glaucoma agudo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Glaucoma agudo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Glaucoma agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hiposfagma",
    "slug": "hiposfagma",
    "title": "Hiposfagma",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/hiposfagma",
    "sourcePath": "/content/protocolos/oftalmologia/hiposfagma.html",
    "keywords": "Hiposfagma Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Hiposfagma Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hiposfagma",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-ojo-rojo-agudo",
    "slug": "ojo-rojo-agudo",
    "title": "Ojo rojo agudo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/ojo-rojo-agudo",
    "sourcePath": "/content/protocolos/oftalmologia/ojo-rojo-agudo.html",
    "keywords": "Ojo rojo agudo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Ojo rojo agudo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Ojo rojo agudo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-orzuelo",
    "slug": "orzuelo",
    "title": "Orzuelo",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/orzuelo",
    "sourcePath": "/content/protocolos/oftalmologia/orzuelo.html",
    "keywords": "Orzuelo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Atención Primaria Orzuelo Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Orzuelo",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-traumatismo-ocular",
    "slug": "traumatismo-ocular",
    "title": "Traumatismo ocular",
    "summary": "Valoración inicial del trauma ocular en urgencias con foco en detección de globo abierto, cuerpo extraño intraocular y decisiones que no deben retrasarse en la primera revisión.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/traumatismo-ocular",
    "sourcePath": "/content/protocolos/oftalmologia/traumatismo-ocular.html",
    "keywords": "Traumatismo ocular Valoración inicial del trauma ocular en urgencias con foco en detección de globo abierto, cuerpo extraño intraocular y decisiones que no deben retrasarse en la primera revisión. Protocolos Oftalmología Urgencias traumatismo ocular globo abierto seidel ceio tc orbitario agudeza visual pupilas motilidad ocular profilaxis tetánica vancomicina ceftazidima Traumatismo ocular Valoración inicial del trauma ocular en urgencias con foco en detección de globo abierto, cuerpo extraño intraocular y decisiones que no deben retrasarse en la primera revisión. Puntos clave En politrauma o TCE la estabilización general precede a la exploración ocular específica. Si se sospecha traumatismo ocular abierto no debe manipularse el ojo, no deben instilarse gotas y debe evitarse cualquier presión sobre el globo. La agudeza visual, las pupilas, la motilidad ocular y el mecanismo lesional tienen valor pronóstico y deben recogerse en la primera valoración. Valoración inicial Preguntar por mecanismo, velocidad del impacto y material implicado: metal, cristal, herramientas, explosión o agente químico. Explorar agudeza visual, pupilas, motilidad ocular y campo visual por confrontación si el contexto lo permite. En presencia de edema o hematoma palpebral, usar retractores sin comprimir el ojo si es imprescindible para la valoración. La bibliografía local recomienda examen oftalmológico completo en las siguientes 24-48 horas incluso cuando la primera evaluación parece tranquilizadora. Red flags Sospecha de globo abierto, prolapso de contenido ocular, pupila irregular, dolor intenso con pérdida visual o test de Seidel positivo. Sospecha de cuerpo extraño intraocular por mecanismo de alta velocidad. Diplopía, restricción de la motilidad, hipoestesia infraorbitaria, enoftalmos o exoftalmos tras traumatismo orbitario. Manejo inmediato si se sospecha traumatismo abierto No presionar el globo, no manipular el contenido prolapsado y no instilar colirios ni pomadas. Proteger el ojo con escudo no compresivo, mantener ayuno y controlar dolor, ansiedad y vómitos. Solicitar TC orbitario si se sospecha cuerpo extraño intraocular. Administrar profilaxis antitetánica y antibioterapia sistémica precoz según protocolo local. Tratamiento inicial orientativo La presentación local revisada recoge vancomicina IV y ceftazidima IV como pauta antibiótica de cobertura en trauma ocular abierto, con moxifloxacino oral como alternativa contextual. El cierre primario se prioriza en torno a las primeras 24 horas, evitando retrasos innecesarios cuando el paciente está estabilizado. El objetivo inicial es cerrar el globo con la mínima manipulación, reducir endoftalmitis y maximizar recuperación funcional. Trauma orbitario y lesiones asociadas Buscar lesiones palpebrales, sección canalicular, afectación del reborde orbitario y signos de atrapamiento muscular. En fracturas orbitarias pequeñas sin atrapamiento ni progresión clínica inmediata puede no requerirse cirugía urgente. Las alteraciones de la motilidad y la diplopía persistente obligan a reevaluación especializada. Módulos relacionados Fuentes integradas desde /biblio La ficha se apoya en la presentación local de urgencias oftalmológicas sobre traumatismos y en su resumen operativo de exploración y manejo inicial. /biblio/temas/OFTALMOLOGIA-URG 2011/OFT- Urgencias oftalmológicas Traumatismos ( 17-1-19).pdf",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-uveitis-anterior",
    "slug": "uveitis-anterior",
    "title": "Uveítis anterior",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/uveitis-anterior",
    "sourcePath": "/content/protocolos/oftalmologia/uveitis-anterior.html",
    "keywords": "Uveítis anterior Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Uveítis anterior Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Uveítis anterior",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-ulcera-corneal",
    "slug": "ulcera-corneal",
    "title": "Úlcera corneal",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Oftalmología",
    "route": "/protocolos/ulcera-corneal",
    "sourcePath": "/content/protocolos/oftalmologia/ulcera-corneal.html",
    "keywords": "Úlcera corneal Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Protocolos Oftalmología Urgencias Úlcera corneal Documento clínico en desarrollo preparado estructuralmente. Área: OFTALMOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Úlcera corneal",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-bronquiolitis",
    "slug": "bronquiolitis",
    "title": "Bronquiolitis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/bronquiolitis",
    "sourcePath": "/content/protocolos/pediatria/bronquiolitis.html",
    "keywords": "Bronquiolitis Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Protocolos Pediatría Urgencias Bronquiolitis Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Bronquiolitis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-convulsion-febril",
    "slug": "convulsion-febril",
    "title": "Convulsión febril",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/convulsion-febril",
    "sourcePath": "/content/protocolos/pediatria/convulsion-febril.html",
    "keywords": "Convulsión febril Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Protocolos Pediatría Urgencias Convulsión febril Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Convulsión febril",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-fiebre-sin-foco",
    "slug": "fiebre-sin-foco",
    "title": "Fiebre sin foco",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/fiebre-sin-foco",
    "sourcePath": "/content/protocolos/pediatria/fiebre-sin-foco.html",
    "keywords": "Fiebre sin foco Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Protocolos Pediatría Urgencias Fiebre sin foco Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Fiebre sin foco",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-gastroenteritis-aguda-deshidratacion",
    "slug": "gastroenteritis-aguda-deshidratacion",
    "title": "Gastroenteritis aguda / deshidratación",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/gastroenteritis-aguda-deshidratacion",
    "sourcePath": "/content/protocolos/pediatria/gastroenteritis-aguda-deshidratacion.html",
    "keywords": "Gastroenteritis aguda / deshidratación Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Protocolos Pediatría Urgencias Gastroenteritis aguda / deshidratación Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Gastroenteritis aguda / deshidratación",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-infeccion-respiratoria-en-la-infancia",
    "slug": "infeccion-respiratoria-en-la-infancia",
    "title": "Infeccion respiratoria en la infancia",
    "summary": "Criterios de ingreso pediatrico.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/infeccion-respiratoria-en-la-infancia",
    "sourcePath": "/content/protocolos/pediatria/infeccion-respiratoria-en-la-infancia.html",
    "keywords": "Infeccion respiratoria en la infancia Criterios de ingreso pediatrico. Protocolos Pediatría Urgencias infeccion respiratoria en la infancia Infeccion respiratoria en la infancia Criterios de ingreso pediatrico. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicaciones-en-pediatria",
    "slug": "intoxicaciones-en-pediatria",
    "title": "Intoxicaciones en pediatria",
    "summary": "Primeros pasos y toxicologia.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/intoxicaciones-en-pediatria",
    "sourcePath": "/content/protocolos/pediatria/intoxicaciones-en-pediatria.html",
    "keywords": "Intoxicaciones en pediatria Primeros pasos y toxicologia. Protocolos Pediatría Urgencias intoxicaciones en pediatria Intoxicaciones en pediatria Primeros pasos y toxicologia. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-laringotraqueitis-tos-perruna",
    "slug": "laringotraqueitis-tos-perruna",
    "title": "Laringotraqueítis (tos perruna)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/laringotraqueitis-tos-perruna",
    "sourcePath": "/content/protocolos/pediatria/laringotraqueitis-tos-perruna.html",
    "keywords": "Laringotraqueítis (tos perruna) Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Protocolos Pediatría Urgencias Laringotraqueítis (tos perruna) Documento clínico en desarrollo preparado estructuralmente. Área: PEDIATRÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Laringotraqueítis (tos perruna)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-urgencias-en-lactante-menor-de-3-meses",
    "slug": "urgencias-en-lactante-menor-de-3-meses",
    "title": "Urgencias en lactante menor de 3 meses",
    "summary": "ABC en fiebre infantil.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Pediatría",
    "route": "/protocolos/urgencias-en-lactante-menor-de-3-meses",
    "sourcePath": "/content/protocolos/pediatria/urgencias-en-lactante-menor-de-3-meses.html",
    "keywords": "Urgencias en lactante menor de 3 meses ABC en fiebre infantil. Protocolos Pediatría Urgencias urgencias en lactante menor de 3 meses Urgencias en lactante menor de 3 meses ABC en fiebre infantil. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cuerpos-extranos-ingeridos-pila-boton",
    "slug": "cuerpos-extranos-ingeridos-pila-boton",
    "title": "Cuerpos extranos ingeridos con subapartado especifico de pila de boton",
    "summary": "Algoritmo de manejo rapido.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/cuerpos-extranos-ingeridos-pila-boton",
    "sourcePath": "/content/protocolos/radiologia/cuerpos-extranos-ingeridos-pila-boton.html",
    "keywords": "Cuerpos extranos ingeridos con subapartado especifico de pila de boton Algoritmo de manejo rapido. Protocolos Radiología Urgencias cuerpos extranos ingeridos con subapartado especifico de pila de boton Cuerpos extranos ingeridos con subapartado especifico de pila de boton Algoritmo de manejo rapido. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-cuerpos-extranos-penetrantes",
    "slug": "cuerpos-extranos-penetrantes",
    "title": "Cuerpos extranos penetrantes",
    "summary": "Localizacion y manejo.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/cuerpos-extranos-penetrantes",
    "sourcePath": "/content/protocolos/radiologia/cuerpos-extranos-penetrantes.html",
    "keywords": "Cuerpos extranos penetrantes Localizacion y manejo. Protocolos Radiología Urgencias cuerpos extranos penetrantes Cuerpos extranos penetrantes Localizacion y manejo. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-diagnostico-radiologico-politrauma-simple",
    "slug": "diagnostico-radiologico-politrauma-simple",
    "title": "Diagnostico radiologico basico del politrauma simple",
    "summary": "Secuencia de imagen y verificacion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/diagnostico-radiologico-politrauma-simple",
    "sourcePath": "/content/protocolos/radiologia/diagnostico-radiologico-politrauma-simple.html",
    "keywords": "Diagnostico radiologico basico del politrauma simple Secuencia de imagen y verificacion. Protocolos Radiología Urgencias diagnostico radiologico basico del politrauma simple Diagnostico radiologico basico del politrauma simple Secuencia de imagen y verificacion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-lectura-rx-abdomen-urgencias",
    "slug": "lectura-rx-abdomen-urgencias",
    "title": "Lectura sistematica de radiografia de abdomen en urgencias",
    "summary": "Hallazgos de obstruccion y perforacion.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/lectura-rx-abdomen-urgencias",
    "sourcePath": "/content/protocolos/radiologia/lectura-rx-abdomen-urgencias.html",
    "keywords": "Lectura sistematica de radiografia de abdomen en urgencias Hallazgos de obstruccion y perforacion. Protocolos Radiología Urgencias lectura sistematica de radiografia de abdomen en urgencias Lectura sistematica de radiografia de abdomen en urgencias Hallazgos de obstruccion y perforacion. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-lectura-rx-torax-urgencias",
    "slug": "lectura-rx-torax-urgencias",
    "title": "Lectura sistematica de radiografia de torax en urgencias",
    "summary": "Checklist de signos.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/lectura-rx-torax-urgencias",
    "sourcePath": "/content/protocolos/radiologia/lectura-rx-torax-urgencias.html",
    "keywords": "Lectura sistematica de radiografia de torax en urgencias Checklist de signos. Protocolos Radiología Urgencias lectura sistematica de radiografia de torax en urgencias Lectura sistematica de radiografia de torax en urgencias Checklist de signos. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-sospecha-radiologica-traumatismo-no-accidental-maltrato-infantil",
    "slug": "sospecha-radiologica-traumatismo-no-accidental-maltrato-infantil",
    "title": "Sospecha radiologica de traumatismo no accidental / maltrato infantil",
    "summary": "Lectura sistematica y hallazgos.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Radiología",
    "route": "/protocolos/sospecha-radiologica-traumatismo-no-accidental-maltrato-infantil",
    "sourcePath": "/content/protocolos/radiologia/sospecha-radiologica-traumatismo-no-accidental-maltrato-infantil.html",
    "keywords": "Sospecha radiologica de traumatismo no accidental / maltrato infantil Lectura sistematica y hallazgos. Protocolos Radiología Urgencias sospecha radiologica de traumatismo no accidental / maltrato infantil Sospecha radiologica de traumatismo no accidental / maltrato infantil Lectura sistematica y hallazgos. Resumen operativo Incorporar bibliografia de /biblio. Definir diagnostico, clasificacion y tratamiento de primera linea. Incluir criterios de derivacion y seguimiento. Bibliografia regional En revision. Añadir articulos de /biblio.",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-asma-exacerbacion-asmatica",
    "slug": "asma-exacerbacion-asmatica",
    "title": "Asma (exacerbación asmática)",
    "summary": "Empeoramiento agudo o subagudo de disnea, tos, sibilancias u opresión torácica con aumento variable de la limitación al flujo aéreo. Requiere valorar gravedad, respuesta precoz al tratamiento y necesidad de ingreso.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/asma-exacerbacion-asmatica",
    "sourcePath": "/content/protocolos/respiratorio/asma-exacerbacion-asmatica.html",
    "keywords": "Asma (exacerbación asmática) Empeoramiento agudo o subagudo de disnea, tos, sibilancias u opresión torácica con aumento variable de la limitación al flujo aéreo. Requiere valorar gravedad, respuesta precoz al tratamiento y necesidad de ingreso. Protocolos Respiratorio Urgencias asma aguda crisis asmática broncoespasmo sibilancias salbutamol ipratropio corticoides sistémicos sulfato de magnesio pico flujo pulsioximetría Asma (exacerbación asmática) Empeoramiento agudo o subagudo de disnea, tos, sibilancias u opresión torácica con aumento variable de la limitación al flujo aéreo. Requiere valorar gravedad, respuesta precoz al tratamiento y necesidad de ingreso. Puntos clave La gravedad se decide por clínica, trabajo respiratorio, SatO2, capacidad para hablar, flujo espiratorio y respuesta al tratamiento inicial. En crisis moderada-grave conviene iniciar pronto SABA repetido, asociar ipratropio y administrar corticoide sistémico sin retrasos. Fatiga, silencio auscultatorio, alteración del nivel de conciencia, hipoxemia mantenida o empeoramiento tras la primera hora obligan a escalar. Valoración inicial Priorizar ABC, frecuencia respiratoria, frecuencia cardiaca, SatO2, uso de musculatura accesoria y capacidad para completar frases. Preguntar por crisis previas graves, ingresos/UCI, intubación, uso de corticoides recientes, desencadenantes y tratamiento de mantenimiento. Si es posible, objetivar flujo espiratorio máximo o FEV1 basal/actual y repetir tras el tratamiento inicial. Red flags SatO2 persistente baja, cianosis, agotamiento, tórax silente, bradipsiquia, confusión o disminución del nivel de conciencia. Habla entrecortada, necesidad de incorporarse, tiraje intenso o escasa entrada de aire. Empeoramiento pese a broncodilatadores repetidos en la primera hora o necesidad creciente de FiO2. Tratamiento inicial Oxígeno para mantener SatO2 en rango seguro y reevaluación frecuente de respuesta clínica. SABA inhalado repetido en tandas durante la primera hora; en crisis moderada-grave asociar bromuro de ipratropio en las primeras tandas. Corticoide sistémico precoz si la crisis no es leve o si necesita varias tandas de broncodilatador. En mala respuesta o gravedad elevada, valorar sulfato de magnesio IV y soporte respiratorio avanzado según contexto. Criterios de observación o ingreso Persistencia de disnea, taquipnea, sibilancias intensas o necesidad de broncodilatador frecuente tras la primera hora. SatO2 no estable, antecedentes de crisis grave, comorbilidad relevante, embarazo o soporte social precario. Ingreso/UCI si hay fracaso ventilatorio inminente, deterioro del estado mental o necesidad de escalada respiratoria. Herramientas relacionadas Fuentes integradas desde /biblio Resumen estructurado a partir de guías operativas para crisis asmática y manejo actualizado del asma. /biblio/temas/Asma/GEMA_5.5.pdf /biblio/temas/Asma/CRISIS DE ASMA 2017.pdf /biblio/temas/Asma/GIDEP_Asma.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "vademecum-salbutamol",
      "vademecum-ipratropio",
      "vademecum-metilprednisolona",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-derrame-pleural",
    "slug": "derrame-pleural",
    "title": "Derrame pleural",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/derrame-pleural",
    "sourcePath": "/content/protocolos/respiratorio/derrame-pleural.html",
    "keywords": "Derrame pleural Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Protocolos Respiratorio Urgencias Derrame pleural Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Derrame pleural",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-exacerbacion-aguda-de-epoc",
    "slug": "exacerbacion-aguda-de-epoc",
    "title": "EPOC agudizado en Urgencias",
    "summary": "Empeoramiento mantenido de disnea, tos o expectoración valorado en Urgencias. La evaluación debe identificar gravedad, hipercapnia, infección, necesidad de antibiótico y posible indicación de VMNI o ingreso.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/exacerbacion-aguda-de-epoc",
    "sourcePath": "/content/protocolos/respiratorio/exacerbacion-aguda-de-epoc.html",
    "keywords": "EPOC agudizado en Urgencias Empeoramiento mantenido de disnea, tos o expectoración valorado en Urgencias. La evaluación debe identificar gravedad, hipercapnia, infección, necesidad de antibiótico y posible indicación de VMNI o ingreso. Protocolos Respiratorio Urgencias EPOC urgencias agudización SAE disnea hipercapnia oxigenoterapia 88 92 broncodilatadores corticoides antibióticos VMNI BiPAP EPOC agudizado en Urgencias Empeoramiento mantenido de disnea, tos o expectoración valorado en Urgencias. La evaluación debe identificar gravedad, hipercapnia, infección, necesidad de antibiótico y posible indicación de VMNI o ingreso. Puntos clave El diagnóstico es clínico, pero la gasometría, la radiografía y la monitorización de SatO2 ayudan a graduar la gravedad y a detectar fracaso respiratorio. La oxigenoterapia debe ser controlada, evitando hiperoxia; la hipercapnia con acidosis orienta a soporte ventilatorio no invasivo. Broncodilatadores de acción corta, corticoide sistémico y antibiótico cuando hay indicación clínica siguen siendo los pilares iniciales. Valoración inicial Cuantificar disnea, frecuencia respiratoria, nivel de conciencia, uso de músculos accesorios, cianosis y hemodinamia. Solicitar gasometría si la exacerbación es moderada-grave, hay deterioro clínico o precisa oxígeno. Buscar desencadenantes: infección respiratoria, insuficiencia cardiaca, tromboembolismo, neumonía, mala adherencia o técnica inhalatoria ineficaz. Red flags Somnolencia, empeoramiento de acidosis, SatO2 insuficiente pese a oxígeno controlado o agotamiento respiratorio. Hipotensión, arritmias, dolor torácico, fiebre alta o consolidación radiológica. Ausencia de respuesta precoz al tratamiento broncodilatador, hipercapnia con acidosis o imposibilidad para tolerar la ventilación espontánea. Tratamiento inicial Oxígeno titulado con objetivo habitual de SatO2 88-92% y reevaluación con gasometría si hay riesgo de retención de CO2. SABA y/o SAMA de acción corta como rescate inhalado repetido en la fase aguda. Corticoide sistémico corto y antibiótico si aumenta la purulencia/esputo, hay mayor volumen de expectoración o datos de infección. La VMNI debe plantearse pronto en hipercapnia con acidosis o trabajo respiratorio elevado si no hay contraindicaciones. Destino desde Urgencias Disnea intensa persistente, fracaso del tratamiento inicial, hipoxemia significativa, hipercapnia/acidosis o descompensación comórbida. Valorar UCRI/UCI si precisa VMNI, hay deterioro neurológico o posible intubación. Puede manejarse de forma ambulatoria solo si la respuesta es clara, sin red flags y con seguimiento cercano coordinado con Atención Primaria. Herramientas relacionadas Fuentes integradas desde /biblio Se ha priorizado material práctico de manejo clínico y actualizaciones respiratorias recientes. /biblio/procedimeintos/Espirometria/Manejo practico del paciente con EPOC.pdf /biblio/temas/EPOC/epoc-gold-2025.pdf /biblio/procedimeintos/VMNI/VMNI.pdf /biblio/procedimeintos/VMNI/Ventilación2025.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-epoc-atencion-primaria",
      "procedimientos-ventilacion-mecanica-no-invasiva",
      "herramientas-objetivo-de-oxigenoterapia",
      "herramientas-conversor-de-fio2-segun-dispositivo"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-epoc-atencion-primaria",
    "slug": "epoc-atencion-primaria",
    "title": "EPOC en Atención Primaria",
    "summary": "Abordaje ambulatorio de la EPOC: confirmación con espirometría, optimización de inhaladores, prevención de exacerbaciones, oxigenoterapia cuando proceda y criterios de derivación a Urgencias.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/epoc-atencion-primaria",
    "sourcePath": "/content/protocolos/respiratorio/epoc-atencion-primaria.html",
    "keywords": "EPOC en Atención Primaria Abordaje ambulatorio de la EPOC: confirmación con espirometría, optimización de inhaladores, prevención de exacerbaciones, oxigenoterapia cuando proceda y criterios de derivación a Urgencias. Protocolos Respiratorio Atención Primaria epoc atencion primaria consulta espirometria tabaquismo inhaladores vacunacion exacerbaciones seguimiento EPOC en Atención Primaria Abordaje ambulatorio de la EPOC: confirmación con espirometría, optimización de inhaladores, prevención de exacerbaciones, oxigenoterapia cuando proceda y criterios de derivación a Urgencias. Puntos clave La EPOC no debe cerrarse clínicamente sin espirometría interpretada en contexto. En consulta el valor principal está en dejar de fumar, técnica inhalatoria correcta, vacunación y reducción de exacerbaciones. Cuando aparece trabajo respiratorio, hipoxemia o deterioro del estado general, el escenario deja de ser ambulatorio simple. Evaluación basal Confirmar obstrucción persistente con espirometría y revisar disnea, tos, expectoración, exacerbaciones previas y comorbilidad cardiovascular. Registrar tabaquismo activo o previo, exposición ocupacional, estado nutricional, actividad física y saturación basal si hay sospecha de insuficiencia respiratoria. Comprobar técnica inhalatoria y adherencia antes de aumentar tratamiento. Tratamiento y seguimiento Escalonar broncodilatación según síntomas y exacerbaciones, siempre junto a educación terapéutica y abandono tabáquico. Planificar vacunas, rehabilitación o actividad física adaptada y revisión periódica de técnica inhalatoria. Si existen exacerbaciones frecuentes o incertidumbre diagnóstica, coordinar seguimiento respiratorio y revisar comorbilidad cardiaca o asmática. Cuándo derivar a Urgencias Disnea intensa, SatO2 baja, somnolencia, confusión, sospecha de hipercapnia, fiebre con mal estado general o consolidación asociada. Fracaso del tratamiento broncodilatador inicial, imposibilidad para tolerar vía oral, dolor torácico o sospecha de neumonía, TEP o insuficiencia cardiaca. El manejo de acidosis, VMNI y oxigenoterapia controlada pertenece al circuito de Urgencias. Herramientas y rutas relacionadas Fuentes integradas desde /biblio Se ha priorizado la documentación local de EPOC, GOLD y material de espirometría ya integrado en el proyecto. /biblio/temas/EPOC/epoc-gold-2025.pdf /biblio/temas/EPOC/GesEPOC.pdf /biblio/procedimeintos/Espirometria/Manejo practico del paciente con EPOC.pdf /biblio/procedimeintos/Espirometria/Guía Rápida .pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-exacerbacion-aguda-de-epoc",
      "herramientas-espirometria",
      "vademecum-salbutamol",
      "vademecum-ipratropio"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-hemoptisis",
    "slug": "hemoptisis",
    "title": "Hemoptisis",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/hemoptisis",
    "sourcePath": "/content/protocolos/respiratorio/hemoptisis.html",
    "keywords": "Hemoptisis Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Protocolos Respiratorio Urgencias Hemoptisis Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Hemoptisis",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-insuficiencia-respiratoria-aguda",
    "slug": "insuficiencia-respiratoria-aguda",
    "title": "Insuficiencia respiratoria aguda",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/insuficiencia-respiratoria-aguda",
    "sourcePath": "/content/protocolos/respiratorio/insuficiencia-respiratoria-aguda.html",
    "keywords": "Insuficiencia respiratoria aguda Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Protocolos Respiratorio Urgencias Insuficiencia respiratoria aguda Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Insuficiencia respiratoria aguda",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-neumonia-atencion-primaria",
    "slug": "neumonia-atencion-primaria",
    "title": "Neumonía en Atención Primaria",
    "summary": "Abordaje ambulatorio de la sospecha de neumonía adquirida en la comunidad: selección del paciente tratable en domicilio, antibiótico inicial, reevaluación precoz y criterios de derivación hospitalaria.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/neumonia-atencion-primaria",
    "sourcePath": "/content/protocolos/respiratorio/neumonia-atencion-primaria.html",
    "keywords": "Neumonía en Atención Primaria Abordaje ambulatorio de la sospecha de neumonía adquirida en la comunidad: selección del paciente tratable en domicilio, antibiótico inicial, reevaluación precoz y criterios de derivación hospitalaria. Protocolos Respiratorio Atención Primaria neumonia atencion primaria consulta crb-65 manejo ambulatorio reevaluacion antibiotico derivacion Neumonía en Atención Primaria Abordaje ambulatorio de la sospecha de neumonía adquirida en la comunidad: selección del paciente tratable en domicilio, antibiótico inicial, reevaluación precoz y criterios de derivación hospitalaria. Puntos clave En consulta la decisión clave es si el paciente puede tratarse en domicilio con reevaluación estrecha o debe derivarse el mismo día. CRB-65 ayuda a ordenar el riesgo cuando no hay analítica, pero no sustituye la valoración de hipoxemia, fragilidad o soporte social. La revaloración a las 48-72 horas es parte del tratamiento, no una recomendación opcional. Evaluación inicial en consulta Registrar frecuencia respiratoria, frecuencia cardiaca, tensión arterial, saturación de oxígeno y estado mental. Preguntar por fiebre, tos, disnea, dolor pleurítico, comorbilidades respiratorias, antibióticos recientes y situación funcional basal. Cuando la radiografía no está disponible, el manejo clínico debe ser prudente y con umbral bajo de derivación si hay dudas diagnósticas. Manejo domiciliario CRB-65 de 0, SatO2 estable, tolerancia oral y soporte domiciliario adecuado apoyan tratamiento ambulatorio. La pauta inicial depende del perfil clínico y del riesgo de resistencia o comorbilidad respiratoria. Explicar señales de alarma, hidratación, adherencia antibiótica y fecha de revisión cerrada antes del alta desde consulta. Cuándo derivar a Urgencias Hipoxemia, hipotensión, confusión, taquipnea marcada, deshidratación, intolerancia oral, derrame pleural o afectación multilobular sospechada. CRB-65 igual o mayor a 1 con mala situación basal, fragilidad marcada o ausencia de soporte seguro en domicilio. La ausencia de mejoría o el empeoramiento en las primeras 48-72 horas obliga a reevaluación hospitalaria. Herramientas y rutas relacionadas Fuentes integradas desde /biblio Se ha priorizado la guía Fisterra y el material local de NAC, contrastado con SEPAR y PRIOAM. /biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf /biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf /biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia",
      "vademecum-amoxicilina",
      "vademecum-amoxicilina-clavulanico",
      "vademecum-azitromicina",
      "herramientas-crb-65"
    ],
    "carePaths": [
      "atencion-primaria"
    ],
    "carePathLabels": [
      "Atención Primaria"
    ],
    "carePathPillLabel": "Atención Primaria",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-neumonia",
    "slug": "neumonia",
    "title": "Neumonía en Urgencias",
    "summary": "Abordaje operativo de neumonía adquirida en la comunidad en Urgencias: confirmación diagnóstica, estratificación de gravedad, decisión de alta, observación o ingreso y antibioterapia inicial según riesgo respiratorio y séptico.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/neumonia",
    "sourcePath": "/content/protocolos/respiratorio/neumonia.html",
    "keywords": "Neumonía en Urgencias Abordaje operativo de neumonía adquirida en la comunidad en Urgencias: confirmación diagnóstica, estratificación de gravedad, decisión de alta, observación o ingreso y antibioterapia inicial según riesgo respiratorio y séptico. Protocolos Respiratorio Urgencias neumonía urgencias NAC adulto inmunocompetente CRB-65 CURB-65 ingreso observacion azitromicina ceftriaxona levofloxacino derrame pleural hipoxemia sepsis Neumonía en Urgencias Abordaje operativo de neumonía adquirida en la comunidad en Urgencias: confirmación diagnóstica, estratificación de gravedad, decisión de alta, observación o ingreso y antibioterapia inicial según riesgo respiratorio y séptico. Puntos clave La NAC exige integrar clínica respiratoria baja con infiltrado radiológico nuevo cuando está disponible; las escalas CRB-65 y CURB-65 ayudan, pero no sustituyen el juicio clínico. La decisión de ingreso no depende solo de la puntuación: hipoxemia, afectación multilobular, derrame pleural, intolerancia oral, fracaso antibiótico previo o ausencia de soporte social obligan a subir el nivel de atención. La antibioterapia empírica debe iniciarse pronto, durar al menos 5 días en cuadros leves-moderados con estabilidad clínica y reevaluarse a las 48-72 horas. Algoritmo operativo de NAC urgente Flujo breve para decidir gravedad, necesidad de observación o ingreso y pauta inicial sin perder de vista los criterios clínicos que no caben en una sola escala. Confirmación diagnóstica y anamnesis útil La documentación local revisada define la NAC por clínica compatible de infección respiratoria baja y un nuevo infiltrado radiológico no explicado por otra causa; si el paciente es de bajo riesgo y la radiografía no está disponible, Fisterra permite manejo clínico prudente solo si no hay dudas diagnósticas y se garantiza seguimiento estrecho. Preguntar por fiebre o escalofríos, tos nueva o empeoramiento de tos crónica, cambios en el esputo, dolor pleurítico, disnea y tiempo de evolución. Recoger comorbilidad y factores de riesgo que cambian etiología o tratamiento: EPOC/asma, bronquiectasias, alcoholismo, aspiración, esplenectomía, antibióticos betalactámicos recientes, inmunosupresión, exposición a aves o animales de granja y brote gripal. Exploración física y pruebas complementarias La exploración inicial debe incluir frecuencia respiratoria, frecuencia cardiaca, tensión arterial, saturación basal de oxígeno y nivel de conciencia, además de auscultación y evaluación general de perfusión. La radiografía de tórax postero-anterior y lateral es la prueba de referencia cuando está disponible; repetirla a las 48-72 horas solo si la evolución es desfavorable. La radiografía de control tras el tratamiento no debe hacerse de rutina salvo mala evolución o sospecha de neoplasia subyacente. Si la gravedad o el ingreso lo justifican, solicitar hemograma, glucosa, creatinina, iones, transaminasas y PCR. La guía PRIOAM añade gasometría arterial si la SatO2 basal es menor de 92%. Los estudios microbiológicos no se recomiendan de forma rutinaria en el paciente ambulatorio. Si ingresa, la guía PRIOAM propone hemocultivos previos al antibiótico, esputo, antigenuria de neumococo y Legionella, y PCR respiratoria según contexto epidemiológico. Red flags y criterios de gravedad Insuficiencia respiratoria, SatO2 baja, taquipnea marcada, hipotensión, confusión, sepsis, incapacidad para mantener hidratación o vía oral y deterioro hemodinámico. Afectación de dos o más lóbulos, derrame pleural, cavitación, neumonía necrotizante o sospecha de aspiración complicada con absceso o empiema. Descompensación de comorbilidades, fragilidad marcada, ausencia de soporte social seguro o fracaso a un tratamiento antibiótico empírico correcto en las primeras 48-72 horas. Decisión desde Urgencias: alta, observación o ingreso Si se dispone de analítica, CURB-65 ordena mejor el riesgo desde Urgencias: 0-1 puede apoyar alta vigilada, 2 suele justificar observación o ingreso y 3 o más obliga a valorar ingreso monitorizado. CRB-65 sigue siendo útil para no infravalorar gravedad cuando aún no hay analítica, pero la decisión final debe integrar SatO2, trabajo respiratorio y perfusión. Incluso con escalas bajas se debe ingresar si existe insuficiencia respiratoria, inestabilidad hemodinámica, afectación multilobular, derrame pleural, neumonía necrotizante, intolerancia digestiva o mala red de apoyo. Tratamiento antibiótico inicial Manejo ambulatorio de bajo riesgo: amoxicilina 1 g VO cada 8 horas Si existe EPOC, asma o necesidad de mayor cobertura oral: amoxicilina-clavulánico 875/125 mg VO cada 8 horas Si el patrón clínico sugiere neumonía atípica en cuadro leve puede considerarse azitromicina 500 mg cada 24 horas durante 3 días En ingreso convencional o vigilancia hospitalaria, la guía PRIOAM propone ceftriaxona 2 g IV cada 24 horas azitromicina 500 mg cada 24 horas VO o IV Como alternativa en alergia a penicilinas o escenarios seleccionados, la documentación local recoge levofloxacino En neumonía aspirativa no se añade cobertura anaerobicida de rutina salvo sospecha de absceso pulmonar o empiema. Reevaluación, alta y mala evolución Si se da de alta desde Urgencias, la reevaluación clínica en 48-72 horas debe quedar explícitamente cerrada. Si ingresa, la revisión debe integrar estabilidad clínica, oxigenación, resultados microbiológicos y tolerancia al tratamiento. La duración habitual es de 5 días en NAC leve-moderada y 7 días en NAC grave si la respuesta es buena, pero el cierre final debe apoyarse en estabilidad clínica y no solo en calendario. Si no mejora o empeora, hay que replantear diagnóstico y cobertura: TEP, neoplasia, vasculitis, neumonitis por fármacos, hemorragia pulmonar, neumonía organizativa, derrame/empiema o dosificación insuficiente. Herramientas y fármacos relacionados Fuentes integradas desde /biblio Refuerzo clínico del protocolo a partir de la normativa SEPAR, la guía Fisterra de NAC y la guía PRIOAM de neumonía comunitaria. /biblio/temas/Neumonía/Neumonia SEPAR 2020.pdf /biblio/temas/Neumonía/Neumonia Fisterra 2021.pdf /biblio/temas/Neumonía/Neumonía comunitaria – Guía PRIOAM.pdf",
    "algorithmId": "alg-neumonia",
    "relatedEntryIds": [
      "protocolos-neumonia-atencion-primaria",
      "vademecum-amoxicilina",
      "vademecum-amoxicilina-clavulanico",
      "vademecum-azitromicina",
      "vademecum-ceftriaxona",
      "vademecum-levofloxacino",
      "herramientas-crb-65",
      "herramientas-curb-65",
      "herramientas-objetivo-de-oxigenoterapia",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-neumotorax",
    "slug": "neumotorax",
    "title": "Neumotórax",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/neumotorax",
    "sourcePath": "/content/protocolos/respiratorio/neumotorax.html",
    "keywords": "Neumotórax Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Protocolos Respiratorio Urgencias Neumotórax Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Neumotórax",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-tromboembolismo-pulmonar-tep",
    "slug": "tromboembolismo-pulmonar-tep",
    "title": "Tromboembolismo pulmonar (TEP)",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Respiratorio",
    "route": "/protocolos/tromboembolismo-pulmonar-tep",
    "sourcePath": "/content/protocolos/respiratorio/tromboembolismo-pulmonar-tep.html",
    "keywords": "Tromboembolismo pulmonar (TEP) Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Protocolos Respiratorio Urgencias Tromboembolismo pulmonar (TEP) Documento clínico en desarrollo preparado estructuralmente. Área: RESPIRATORIO. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Tromboembolismo pulmonar (TEP)",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicacion-por-alcohol",
    "slug": "intoxicacion-por-alcohol",
    "title": "Intoxicación por alcohol",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Toxicología",
    "route": "/protocolos/intoxicacion-por-alcohol",
    "sourcePath": "/content/protocolos/toxicologia/intoxicacion-por-alcohol.html",
    "keywords": "Intoxicación por alcohol Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Protocolos Toxicología Urgencias Intoxicación por alcohol Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Intoxicación por alcohol",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicacion-por-benzodiacepinas",
    "slug": "intoxicacion-por-benzodiacepinas",
    "title": "Intoxicación por benzodiacepinas",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Toxicología",
    "route": "/protocolos/intoxicacion-por-benzodiacepinas",
    "sourcePath": "/content/protocolos/toxicologia/intoxicacion-por-benzodiacepinas.html",
    "keywords": "Intoxicación por benzodiacepinas Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Protocolos Toxicología Urgencias Intoxicación por benzodiacepinas Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Intoxicación por benzodiacepinas",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicacion-por-monoxido-de-carbono",
    "slug": "intoxicacion-por-monoxido-de-carbono",
    "title": "Intoxicación por monóxido de carbono",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Toxicología",
    "route": "/protocolos/intoxicacion-por-monoxido-de-carbono",
    "sourcePath": "/content/protocolos/toxicologia/intoxicacion-por-monoxido-de-carbono.html",
    "keywords": "Intoxicación por monóxido de carbono Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Protocolos Toxicología Urgencias Intoxicación por monóxido de carbono Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Intoxicación por monóxido de carbono",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicacion-por-opiaceos",
    "slug": "intoxicacion-por-opiaceos",
    "title": "Intoxicación por opiáceos",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Toxicología",
    "route": "/protocolos/intoxicacion-por-opiaceos",
    "sourcePath": "/content/protocolos/toxicologia/intoxicacion-por-opiaceos.html",
    "keywords": "Intoxicación por opiáceos Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Protocolos Toxicología Urgencias Intoxicación por opiáceos Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Intoxicación por opiáceos",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "protocolos-intoxicacion-por-paracetamol",
    "slug": "intoxicacion-por-paracetamol",
    "title": "Intoxicación por paracetamol",
    "summary": "Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA.",
    "section": "protocolos",
    "sectionLabel": "Protocolos",
    "kind": "protocolos",
    "kindLabel": "Protocolo",
    "category": "Toxicología",
    "route": "/protocolos/intoxicacion-por-paracetamol",
    "sourcePath": "/content/protocolos/toxicologia/intoxicacion-por-paracetamol.html",
    "keywords": "Intoxicación por paracetamol Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Protocolos Toxicología Urgencias Intoxicación por paracetamol Documento clínico en desarrollo preparado estructuralmente. Área: TOXICOLOGÍA. Puntos Clave Estructuración inicial completada en base al Catálogo Consolidado V1. Pendiente de volcado de contenido exhaustivo. Algoritmo de Intoxicación por paracetamol",
    "algorithmId": null,
    "relatedEntryIds": [],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {},
    "externalReferenceUrl": null,
    "interactions": []
  },
  {
    "id": "vademecum-amoxicilina",
    "slug": "amoxicilina",
    "title": "Amoxicilina",
    "summary": "Betalactámico oral de referencia en la neumonía adquirida en la comunidad de bajo riesgo, con especial interés en manejo ambulatorio del adulto inmunocompetente.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Antiinfecciosos frecuentes",
    "route": "/vademecum/amoxicilina",
    "sourcePath": "/content/vademecum/amoxicilina.html",
    "keywords": "Amoxicilina Betalactámico oral de referencia en la neumonía adquirida en la comunidad de bajo riesgo, con especial interés en manejo ambulatorio del adulto inmunocompetente. Vademécum Antiinfecciosos frecuentes Atención Primaria Urgencias Amoxicilina Betalactámico oral de referencia en la neumonía adquirida en la comunidad de bajo riesgo, con especial interés en manejo ambulatorio del adulto inmunocompetente. Contexto dentro de la app Aparece en el protocolo de neumonía como primera opción oral en NAC ambulatoria de bajo riesgo cuando no se necesitan coberturas más amplias. La revisión Fisterra recuerda que en España deben usarse dosis altas de penicilinas o betalactámicos si se sospecha neumococo con sensibilidad reducida. No cubre de forma fiable patógenos atípicos ni sustituye la hospitalización si hay hipoxemia, inestabilidad o mala tolerancia oral. Posología orientativa NAC ambulatoria adulta: 1 g VO cada 8 horas Duración mínima habitual: 5 días Si el protocolo clínico obliga a dosificación pediátrica o cálculo de máximo diario, esta ficha se apoya en la calculadora de dosis por peso. Ajustes y precauciones Revisar función renal para adaptar intervalo en insuficiencia renal relevante. Vigilar alergia a betalactámicos, diarrea, exantema y falta de respuesta precoz. Si persiste fiebre o mala evolución, reevaluar diagnóstico, cobertura y necesidad de ingreso en lugar de mantener una pauta insuficiente por inercia. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "La pauta pediátrica y el ajuste renal son los cálculos más relevantes en esta ficha."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-amoxicilina-clavulanico",
    "slug": "amoxicilina-clavulanico",
    "title": "Amoxicilina-clavulánico",
    "summary": "Betalactámico con inhibidor de betalactamasas útil en neumonía comunitaria con comorbilidad respiratoria, mayor complejidad clínica o necesidad de cobertura oral más amplia.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Antiinfecciosos frecuentes",
    "route": "/vademecum/amoxicilina-clavulanico",
    "sourcePath": "/content/vademecum/amoxicilina-clavulanico.html",
    "keywords": "Amoxicilina-clavulánico Betalactámico con inhibidor de betalactamasas útil en neumonía comunitaria con comorbilidad respiratoria, mayor complejidad clínica o necesidad de cobertura oral más amplia. Vademécum Antiinfecciosos frecuentes Atención Primaria Urgencias Amoxicilina-clavulánico Betalactámico con inhibidor de betalactamasas útil en neumonía comunitaria con comorbilidad respiratoria, mayor complejidad clínica o necesidad de cobertura oral más amplia. Contexto dentro de la app En el protocolo de neumonía se usa como opción oral de mayor cobertura que amoxicilina sola cuando existe EPOC, asma o complejidad clínica añadida. La guía Fisterra lo sitúa como betalactámico de elección en pacientes con EPOC o asma, pudiendo asociarse a un macrólido según gravedad o sospecha de atípicos. No reemplaza la valoración de ingreso ni las pautas intravenosas si hay hipoxemia, derrame pleural o deterioro hemodinámico. Posología orientativa NAC ambulatoria adulta con mayor cobertura oral: 875/125 mg VO cada 8 horas Duración habitual: 5-7 días En pediatría o cuando la formulación condiciona el cálculo, la ficha se conecta con la calculadora de dosis por peso y obliga a revisar la concentración real. Ajustes y precauciones Revisar función renal antes de cerrar dosis e intervalo. Valorar antecedente de hepatotoxicidad colestásica, diarrea intensa o mala tolerancia digestiva. Si la evolución es desfavorable, no debe perpetuarse como cobertura “intermedia” sin revisar si el paciente requiere ingreso, macrólido asociado u otro esquema. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "La formulación, la dosis pediátrica y el ajuste renal condicionan la pauta final."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-azitromicina",
    "slug": "azitromicina",
    "title": "Azitromicina",
    "summary": "Macrólido útil en la neumonía adquirida en la comunidad cuando existe sospecha de microorganismos atípicos o como complemento de pautas hospitalarias seleccionadas.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Antiinfecciosos frecuentes",
    "route": "/vademecum/azitromicina",
    "sourcePath": "/content/vademecum/azitromicina.html",
    "keywords": "Azitromicina Macrólido útil en la neumonía adquirida en la comunidad cuando existe sospecha de microorganismos atípicos o como complemento de pautas hospitalarias seleccionadas. Vademécum Antiinfecciosos frecuentes Atención Primaria Urgencias Azitromicina Macrólido útil en la neumonía adquirida en la comunidad cuando existe sospecha de microorganismos atípicos o como complemento de pautas hospitalarias seleccionadas. Contexto dentro de la app En el protocolo de neumonía aparece como opción contextual en cuadros leves con sospecha de atípica y como combinación con betalactámicos en escenarios hospitalarios. La guía Fisterra advierte de resistencias relevantes del neumococo a macrólidos en España, por lo que no debe usarse como monoterapia indiscriminada fuera del patrón atípico. En ingreso convencional se asocia a ceftriaxona cuando el contexto hace razonable ampliar cobertura a atípicos. Posología orientativa Sospecha de neumonía atípica leve: 500 mg VO cada 24 horas durante 3 días En ingreso o mayor gravedad: 500 mg cada 24 horas VO o IV La bibliografía local usada en este módulo es de adulto; no consolida una pauta pediátrica específica para esta ficha. Ajustes y precauciones Revisar riesgo de prolongación del QT e interacciones con otros fármacos arritmogénicos. Evitar usarla como cobertura única si el patrón clínico sugiere neumococo típico o gravedad moderada-alta. Considerar precaución adicional en hepatopatía o mala tolerancia digestiva. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "Conviene revisar QT, interacciones y si realmente existe indicación para cubrir atípicos."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-ceftriaxona",
    "slug": "ceftriaxona",
    "title": "Ceftriaxona",
    "summary": "Cefalosporina de tercera generación usada como base de tratamiento intravenoso en neumonía comunitaria moderada o grave cuando el paciente requiere observación o ingreso.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Antiinfecciosos frecuentes",
    "route": "/vademecum/ceftriaxona",
    "sourcePath": "/content/vademecum/ceftriaxona.html",
    "keywords": "Ceftriaxona Cefalosporina de tercera generación usada como base de tratamiento intravenoso en neumonía comunitaria moderada o grave cuando el paciente requiere observación o ingreso. Vademécum Antiinfecciosos frecuentes Urgencias Ceftriaxona Cefalosporina de tercera generación usada como base de tratamiento intravenoso en neumonía comunitaria moderada o grave cuando el paciente requiere observación o ingreso. Contexto dentro de la app La guía PRIOAM la sitúa como antibiótico de elección en NAC con CURB-65 = 2 y también en cuadros graves, asociando azitromicina cuando hay sospecha de atípicos o mayor gravedad. Su lugar es hospitalario; no se plantea como pauta ambulatoria del protocolo. Debe reevaluarse cuando el paciente se estabiliza para decidir desescalada o paso a vía oral. Posología orientativa NAC moderada o grave en ingreso: 2 g IV cada 24 horas Puede asociarse azitromicina 500 mg cada 24 horas La duración final depende de la estabilidad clínica, de la respuesta en las primeras 48-72 horas y de la posibilidad de paso a vía oral. Ajustes y precauciones No demorar el inicio del tratamiento cuando el paciente requiere ingreso o cumple criterios de sepsis. Vigilar diarrea asociada a antibióticos, evolución del derrame pleural y necesidad de escalada si no responde. Si concurren insuficiencia hepática y renal relevantes o aparecen complicaciones biliares, la pauta debe revisarse de forma individual. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La revisión principal es clínica: respuesta, necesidad de desescalada y reevaluación de complicaciones pleuropulmonares."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-levofloxacino",
    "slug": "levofloxacino",
    "title": "Levofloxacino",
    "summary": "Quinolona respiratoria reservada como alternativa contextual en neumonía comunitaria, sobre todo ante alergia a betalactámicos o necesidad de un esquema alternativo bien justificado.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Antiinfecciosos frecuentes",
    "route": "/vademecum/levofloxacino",
    "sourcePath": "/content/vademecum/levofloxacino.html",
    "keywords": "Levofloxacino Quinolona respiratoria reservada como alternativa contextual en neumonía comunitaria, sobre todo ante alergia a betalactámicos o necesidad de un esquema alternativo bien justificado. Vademécum Antiinfecciosos frecuentes Atención Primaria Urgencias Levofloxacino Quinolona respiratoria reservada como alternativa contextual en neumonía comunitaria, sobre todo ante alergia a betalactámicos o necesidad de un esquema alternativo bien justificado. Contexto dentro de la app La guía PRIOAM lo recoge como alternativa en alergia a penicilinas, tanto en cuadros moderados como graves, y Fisterra lo incluye entre las quinolonas respiratorias útiles en escenarios seleccionados. No debe banalizarse como primera línea universal; su sitio es el contexto con alergia, intolerancia o decisión clínica razonada. En el protocolo de neumonía se reserva como alternativa y no como pauta estándar del paciente estable de bajo riesgo. Posología orientativa La documentación local revisada recoge 500 mg cada 12 horas VO o IV Fisterra añade que algunas pautas comienzan con 500 mg cada 12 horas durante 1-2 días 500 mg cada 24 horas La pauta final debe cerrarse con el protocolo local, la función renal y la evolución clínica del paciente. Ajustes y precauciones Precisa revisión de función renal para ajustar dosis o intervalo. Vigilar prolongación del QT, neurotoxicidad, tendinopatía y riesgo de eventos adversos desproporcionados en ancianos frágiles. Si la respuesta es mala, reevaluar diagnóstico y no prolongar una quinolona por inercia. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-neumonia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La función renal y el riesgo de efectos adversos condicionan el cierre final de pauta e intervalo."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-amiodarona",
    "slug": "amiodarona",
    "title": "Amiodarona",
    "summary": "Antiarrítmico de uso frecuente en FA rápida, taquiarritmias y soporte avanzado, con interés especial en perfusión y vigilancia del QT.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/amiodarona",
    "sourcePath": "/content/vademecum/amiodarona.html",
    "keywords": "Amiodarona Antiarrítmico de uso frecuente en FA rápida, taquiarritmias y soporte avanzado, con interés especial en perfusión y vigilancia del QT. Vademécum Cardiovasculares y vasoactivos Urgencias Amiodarona Antiarrítmico de uso frecuente en FA rápida, taquiarritmias y soporte avanzado, con interés especial en perfusión y vigilancia del QT. Posología orientativa en Urgencias Parada cardiorrespiratoria por FV/TV sin pulso: 300 mg IV bolo, con dosis adicional si procede. FA o taquiarritmia estable: carga IV lenta y perfusión posterior según respuesta y protocolo local. Vigilar hipotensión, bradicardia y prolongación del QT. Precauciones Revisar medicación concomitante con riesgo de QT largo. Evitar mezclar sin comprobar compatibilidades y vía adecuada. Monitorización ECG continua cuando se usa IV. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "herramientas-correccion-qtc",
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-concentracion-reconstitucion",
      "protocolos-fibrilacion-auricular"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": true,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "Monitorizar QT y ajustar concentración/velocidad cuando se usa en perfusión."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-propofol",
        "note": "Valorar mayor riesgo de hipotensión y depresión hemodinámica en sedación compleja."
      },
      {
        "withId": "vademecum-digoxina",
        "note": "Puede aumentar concentraciones de digoxina y favorecer bradiarritmia o bloqueo."
      }
    ]
  },
  {
    "id": "vademecum-captopril",
    "slug": "captopril",
    "title": "Captopril",
    "summary": "IECA útil como opción oral en urgencia hipertensiva sin daño agudo de órgano diana, con inicio de acción relativamente rápido y necesidad de vigilar función renal y potasio.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/captopril",
    "sourcePath": "/content/vademecum/captopril.html",
    "keywords": "Captopril IECA útil como opción oral en urgencia hipertensiva sin daño agudo de órgano diana, con inicio de acción relativamente rápido y necesidad de vigilar función renal y potasio. Vademécum Cardiovasculares y vasoactivos Atención Primaria Urgencias Captopril IECA útil como opción oral en urgencia hipertensiva sin daño agudo de órgano diana, con inicio de acción relativamente rápido y necesidad de vigilar función renal y potasio. Contexto dentro de la app En el protocolo de crisis hipertensiva aparece como opción oral cuando la cifra persiste tras reevaluación clínica y no existe lesión aguda de órgano diana. Su papel es facilitar un descenso progresivo, no una normalización brusca de la presión arterial. Debe usarse dentro de un plan de observación y reevaluación tensional, no como gesto aislado sin seguimiento. Posología orientativa En urgencia hipertensiva adulta puede emplearse captopril 25-50 mg VO, con reevaluación clínica y tensional a los 15-30 minutos. La pauta exacta debe individualizarse según fragilidad, tratamiento previo, perfusión renal y tolerancia hemodinámica. Si la respuesta es insuficiente o aparecen signos de emergencia hipertensiva, debe replantearse el manejo y no insistir con descenso oral secuencial agresivo. Precauciones y ajustes Vigilar hipotensión excesiva, deterioro renal agudo e hiperpotasemia, especialmente si coexiste deshidratación, diuréticos o nefropatía previa. Evitarlo si hay sospecha de estenosis bilateral de arterias renales, embarazo o antecedente de angioedema por IECA. Conviene revisar creatinina y potasio si se mantiene o reintroduce como tratamiento ambulatorio tras el episodio. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-crisis-hipertensiva"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "Conviene revisar función renal, potasio y tolerancia tensional antes de repetir dosis."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-furosemida",
        "note": "La combinación puede potenciar hipotensión inicial y deterioro renal si el paciente está hipovolémico."
      }
    ]
  },
  {
    "id": "vademecum-digoxina",
    "slug": "digoxina",
    "title": "Digoxina",
    "summary": "Glucósido cardiaco útil para control de frecuencia en fibrilación auricular seleccionada, especialmente si coexiste insuficiencia cardiaca o la tolerancia hemodinámica limita otras opciones.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/digoxina",
    "sourcePath": "/content/vademecum/digoxina.html",
    "keywords": "Digoxina Glucósido cardiaco útil para control de frecuencia en fibrilación auricular seleccionada, especialmente si coexiste insuficiencia cardiaca o la tolerancia hemodinámica limita otras opciones. Vademécum Cardiovasculares y vasoactivos Atención Primaria Urgencias Digoxina Glucósido cardiaco útil para control de frecuencia en fibrilación auricular seleccionada, especialmente si coexiste insuficiencia cardiaca o la tolerancia hemodinámica limita otras opciones. Contexto clínico en la app En fibrilación auricular aparece como opción de control de frecuencia junto a bloqueadores beta o calcioantagonistas cuando la FEVI es mayor de 40%. En hipopotasemia se recuerda como marcador de mayor riesgo arrítmico y de toxicidad digitálica si el potasio está bajo. Su uso debe individualizarse más por contexto hemodinámico y función renal que por una pauta universal rápida. Uso y posología orientativa La dosis de carga y mantenimiento debe individualizarse según edad, función renal, peso, frecuencia cardiaca y posibilidad de monitorización. Es más razonable en pacientes sedentarios, con insuficiencia cardiaca o cuando la hipotensión limita otras estrategias de control de frecuencia. Antes de iniciar o intensificar conviene revisar potasio, magnesio, creatinina y ECG basal. Precauciones prácticas Mayor riesgo de toxicidad si hay insuficiencia renal, hipopotasemia, hipomagnesemia, bradicardia o combinación con amiodarona o diltiazem. Si se sospecha intoxicación digitálica deben evitarse decisiones precipitadas como cardioversión sin valoración completa del riesgo. Reevaluar náuseas, confusión, alteraciones visuales, bloqueo AV o arritmias como posibles signos de toxicidad. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-fibrilacion-auricular",
      "protocolos-hipopotasemia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La dosis de carga y mantenimiento exige revisar función renal, potasio y frecuencia cardiaca."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-amiodarona",
        "note": "La amiodarona puede aumentar niveles de digoxina y requerir ajuste."
      },
      {
        "withId": "vademecum-diltiazem",
        "note": "Mayor riesgo de bradicardia o bloqueo AV si se combinan."
      }
    ]
  },
  {
    "id": "vademecum-diltiazem",
    "slug": "diltiazem",
    "title": "Diltiazem",
    "summary": "Calcioantagonista no dihidropiridínico útil para control de frecuencia en fibrilación auricular estable cuando la función sistólica y la hemodinámica lo permiten.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/diltiazem",
    "sourcePath": "/content/vademecum/diltiazem.html",
    "keywords": "Diltiazem Calcioantagonista no dihidropiridínico útil para control de frecuencia en fibrilación auricular estable cuando la función sistólica y la hemodinámica lo permiten. Vademécum Cardiovasculares y vasoactivos Atención Primaria Urgencias Diltiazem Calcioantagonista no dihidropiridínico útil para control de frecuencia en fibrilación auricular estable cuando la función sistólica y la hemodinámica lo permiten. Contexto dentro de la app La guía de fibrilación auricular lo sitúa entre las opciones de primera línea para control de frecuencia cuando la FEVI es mayor de 40%. Su papel es más claro en paciente estable, sin insuficiencia cardiaca sistólica ni sospecha de vía accesoria. Debe elegirse frente a otras opciones según tensión arterial, función ventricular y comorbilidad. Posología orientativa en Urgencias En FA rápida estable puede administrarse un bolo IV inicial de 0,25 mg/kg en 2 minutos y valorar un segundo bolo de 0,35 mg/kg si la respuesta es insuficiente. Si hace falta mantenimiento IV, la perfusión suele moverse en un rango aproximado de 5-15 mg/h con reevaluación clínica y ECG. La pauta debe frenar la frecuencia sin precipitar hipotensión ni empeorar la perfusión. Precauciones Evitarlo en hipotensión, edema agudo de pulmón, FEVI reducida, bloqueo AV avanzado o FA con preexcitación. Puede potenciar bradicardia o bloqueo cuando se combina con digoxina u otros frenadores nodales. Precisa control de tensión arterial, frecuencia cardiaca y síntomas de insuficiencia cardiaca durante la titulación. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-fibrilacion-auricular",
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "En FA rápida puede requerir bolo por peso y perfusión titulada."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-digoxina",
        "note": "La combinación precisa vigilancia de frecuencia, conducción y niveles clínicos."
      }
    ]
  },
  {
    "id": "vademecum-dobutamina",
    "slug": "dobutamina",
    "title": "Dobutamina",
    "summary": "Inotrópico de elección frecuente en shock cardiogénico o hipoperfusión con bajo gasto, dependiente de cálculo por peso, concentración y ajuste continuo por respuesta clínica.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/dobutamina",
    "sourcePath": "/content/vademecum/dobutamina.html",
    "keywords": "Dobutamina Inotrópico de elección frecuente en shock cardiogénico o hipoperfusión con bajo gasto, dependiente de cálculo por peso, concentración y ajuste continuo por respuesta clínica. Vademécum Cardiovasculares y vasoactivos Urgencias Dobutamina Inotrópico de elección frecuente en shock cardiogénico o hipoperfusión con bajo gasto, dependiente de cálculo por peso, concentración y ajuste continuo por respuesta clínica. Contexto clínico en la app La ficha de insuficiencia cardiaca aguda la contempla para perfiles fríos con mala perfusión o shock cardiogénico. Su objetivo es mejorar gasto cardiaco y perfusión, no sustituir la corrección de la causa desencadenante. En algunos pacientes puede requerir combinación con vasopresor si la presión arterial no se sostiene. Posología orientativa La perfusión suele iniciarse en torno a 2-5 microgramos/kg/min y titularse según perfusión, tensión arterial, diuresis y lactato, pudiendo escalar a rangos mayores si el contexto lo exige. Necesita preparación correcta de la concentración y cálculo fiable de velocidad de infusión. La respuesta debe reevaluarse de forma estrecha, evitando mantener dosis altas sin beneficio hemodinámico claro. Precauciones Puede inducir taquicardia, arritmias, isquemia, temblor e incremento del consumo miocárdico de oxígeno. Requiere ECG continuo, control de TA y revisión del equilibrio ácido-base, potasio y magnesio. La retirada también debe ser escalonada si el soporte prolongado ha sido relevante. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-insuficiencia-cardiaca-aguda",
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-concentracion-reconstitucion"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": true,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": false,
      "skipBolusCalc": true,
      "calculationNotes": "La perfusión se titula por peso y respuesta hemodinámica; conviene ajustar concentración y velocidad."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-noradrenalina",
        "note": "El soporte combinado requiere objetivo hemodinámico definido y vigilancia estrecha."
      }
    ]
  },
  {
    "id": "vademecum-furosemida",
    "slug": "furosemida",
    "title": "Furosemida",
    "summary": "Diurético de asa clave en insuficiencia cardiaca aguda congestiva, muy dependiente del contexto clínico, la dosis previa del paciente y la vigilancia de diuresis, función renal y electrolitos.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/furosemida",
    "sourcePath": "/content/vademecum/furosemida.html",
    "keywords": "Furosemida Diurético de asa clave en insuficiencia cardiaca aguda congestiva, muy dependiente del contexto clínico, la dosis previa del paciente y la vigilancia de diuresis, función renal y electrolitos. Vademécum Cardiovasculares y vasoactivos Atención Primaria Urgencias Furosemida Diurético de asa clave en insuficiencia cardiaca aguda congestiva, muy dependiente del contexto clínico, la dosis previa del paciente y la vigilancia de diuresis, función renal y electrolitos. Contextos dentro de la app En insuficiencia cardiaca aguda aparece como diurético IV de referencia en el perfil húmedo, especialmente cuando hay congestión pulmonar o periférica. Su objetivo no es solo bajar edema, sino mejorar congestión y respuesta clínica sin precipitar hipoperfusión ni deterioro renal evitable. En la app debe leerse junto a soporte ventilatorio, reevaluación hemodinámica y control del balance. Posología orientativa En paciente naïve, una referencia útil es 20-40 mg IV iniciales, con reevaluación de diuresis, congestión y tolerancia. Si el paciente ya recibe diurético de asa oral, puede necesitarse al menos el equivalente o el doble de su dosis oral diaria habitual por vía intravenosa. La respuesta debe valorarse con diuresis, sodio urinario si está disponible, peso, función renal y mejoría clínica; la escalada depende de esa reevaluación. Precauciones y ajustes Riesgo de hipovolemia, hipotensión, hipopotasemia, hiponatremia y empeoramiento renal si se intensifica sin reevaluación adecuada. En el proyecto tiene relación práctica con hipopotasemia y con el control estrecho del balance hídrico. Si coexiste digoxina, la pérdida de potasio aumenta riesgo de toxicidad arrítmica y obliga a vigilancia clínica y analítica más estrecha. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-insuficiencia-cardiaca-aguda",
      "protocolos-hipopotasemia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La intensidad diurética debe ajustarse a respuesta clínica, función renal y electrolitos."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-digoxina",
        "note": "La depleción de potasio favorece toxicidad digitálica y obliga a vigilar iones y ritmo."
      },
      {
        "withId": "vademecum-captopril",
        "note": "La combinación precisa revisar tensión, volemia y función renal tras iniciar o intensificar tratamiento."
      }
    ]
  },
  {
    "id": "vademecum-labetalol",
    "slug": "labetalol",
    "title": "Labetalol",
    "summary": "Betabloqueante alfa y beta usado con frecuencia en crisis hipertensivas y control de presión arterial en entornos agudos.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/labetalol",
    "sourcePath": "/content/vademecum/labetalol.html",
    "keywords": "Labetalol Betabloqueante alfa y beta usado con frecuencia en crisis hipertensivas y control de presión arterial en entornos agudos. Vademécum Cardiovasculares y vasoactivos Urgencias Labetalol Betabloqueante alfa y beta usado con frecuencia en crisis hipertensivas y control de presión arterial en entornos agudos. Posología orientativa en Urgencias Bolo IV lento con reevaluación tensional y clínica tras cada dosis. Puede plantearse perfusión continua si el objetivo tensional requiere titulación estrecha. Comprobar broncoespasmo, bradicardia, bloqueo AV y contexto hemodinámico. Precauciones Evitar descensos bruscos de presión arterial. Monitorizar frecuencia cardiaca y perfusión. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-crisis-hipertensiva",
      "herramientas-velocidad-de-infusion-ml-h"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "Útil en crisis hipertensiva con apoyo para perfusión y control de dosis máxima."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-noradrenalina",
    "slug": "noradrenalina",
    "title": "Noradrenalina",
    "summary": "Vasopresor de referencia para shock vasodilatador, dependiente de preparación correcta, perfusión y ajuste por respuesta clínica.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Cardiovasculares y vasoactivos",
    "route": "/vademecum/noradrenalina",
    "sourcePath": "/content/vademecum/noradrenalina.html",
    "keywords": "Noradrenalina Vasopresor de referencia para shock vasodilatador, dependiente de preparación correcta, perfusión y ajuste por respuesta clínica. Vademécum Cardiovasculares y vasoactivos Urgencias Noradrenalina Vasopresor de referencia para shock vasodilatador, dependiente de preparación correcta, perfusión y ajuste por respuesta clínica. Uso orientativo Indicado en hipotensión persistente tras reposición inicial adecuada o cuando el contexto clínico requiera soporte vasopresor. La dosificación se titula por objetivo hemodinámico y perfusión tisular. Preferir vía central cuando sea posible y vigilar extravasación. Precauciones Requiere cálculo de concentración y velocidad de infusión. Monitorización estrecha de TA y perfusión periférica. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "herramientas-goteo-y-perfusion",
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-concentracion-reconstitucion",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": true,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": false,
      "skipBolusCalc": true,
      "calculationNotes": "Precisa cálculo por peso, concentración y velocidad de perfusión."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-adrenalina",
        "note": "Revisar estrategia vasoactiva para evitar solapamiento no planificado."
      },
      {
        "withId": "vademecum-dobutamina",
        "note": "La combinación puede ser útil, pero debe titrarse por objetivo hemodinámico claro."
      }
    ]
  },
  {
    "id": "vademecum-adrenalina",
    "slug": "adrenalina",
    "title": "Adrenalina",
    "summary": "Fármaco crítico en anafilaxia, parada cardiorrespiratoria y soporte vasopresor, con dependencia clara de concentración, vía y contexto clínico.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Emergencias críticas",
    "route": "/vademecum/adrenalina",
    "sourcePath": "/content/vademecum/adrenalina.html",
    "keywords": "Adrenalina Fármaco crítico en anafilaxia, parada cardiorrespiratoria y soporte vasopresor, con dependencia clara de concentración, vía y contexto clínico. Vademécum Emergencias críticas Urgencias Adrenalina Fármaco crítico en anafilaxia, parada cardiorrespiratoria y soporte vasopresor, con dependencia clara de concentración, vía y contexto clínico. Uso orientativo Anafilaxia: la vía intramuscular es la referencia inicial salvo indicación específica distinta. En perfusión o dosis tituladas requiere cálculo estricto de concentración y velocidad. En pediatría exige cálculo por peso y validación de la concentración utilizada. Precauciones Diferenciar siempre presentación y concentración para evitar errores. Monitorizar frecuencia cardiaca, TA y signos de isquemia o arritmia. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-anafilaxia",
      "herramientas-dosis-pediatrica",
      "herramientas-calculo-de-bolos",
      "herramientas-concentracion-reconstitucion"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": true,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "Es crítico distinguir concentración, vía y contexto clínico; activar siempre ayudas de cálculo."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-noradrenalina",
        "note": "Evitar duplicidad vasoactiva sin objetivo hemodinámico claro."
      }
    ]
  },
  {
    "id": "vademecum-butilescopolamina",
    "slug": "butilescopolamina",
    "title": "Butilescopolamina",
    "summary": "Anticolinérgico útil para secreciones respiratorias y estertores premortem, con papel práctico en la vía subcutánea de cuidados paliativos y necesidad de vigilar carga anticolinérgica.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Paliativos y neuropsiquiatría",
    "route": "/vademecum/butilescopolamina",
    "sourcePath": "/content/vademecum/butilescopolamina.html",
    "keywords": "Butilescopolamina Anticolinérgico útil para secreciones respiratorias y estertores premortem, con papel práctico en la vía subcutánea de cuidados paliativos y necesidad de vigilar carga anticolinérgica. Vademécum Paliativos y neuropsiquiatría Atención Primaria Urgencias Butilescopolamina Anticolinérgico útil para secreciones respiratorias y estertores premortem, con papel práctico en la vía subcutánea de cuidados paliativos y necesidad de vigilar carga anticolinérgica. Contexto dentro de la app En manejo de final de vida se incluye como fármaco del kit subcutáneo para estertores y secreciones respiratorias de la agonía. Su valor principal es mejorar confort y reducir el componente angustiante de las secreciones, no “normalizar” la respiración. Debe usarse junto a medidas posturales, revisión de fluidos y comunicación clara con la familia. Posología orientativa El protocolo local auditado recoge bolo subcutáneo de 20 mg para secreciones y estertores. Como perfusión o pauta mantenida se usa habitualmente 20-60 mg/día por vía subcutánea, con dosis máxima orientativa de 120 mg/día. La necesidad real de repetición o perfusión continua depende de respuesta clínica y del objetivo de confort. Precauciones y observaciones Puede empeorar sequedad intensa, retención urinaria, visión borrosa o delirium en pacientes predispuestos. Usar con cautela si coexiste glaucoma de ángulo cerrado, íleo o gran carga anticolinérgica con otros fármacos. La ausencia de respuesta no obliga a seguir escalando si el síntoma no mejora el confort del paciente. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-manejo-de-final-de-vida",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "En paliativos conviene controlar acumulado diario y reevaluar si realmente mejora confort."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-ipratropio",
        "note": "La carga anticolinérgica combinada puede aumentar sequedad, retención urinaria o confusión."
      }
    ]
  },
  {
    "id": "vademecum-haloperidol",
    "slug": "haloperidol",
    "title": "Haloperidol",
    "summary": "Antipsicótico útil para delirium, agitación y náuseas seleccionadas, especialmente en el contexto de final de vida, con vigilancia del QT y de los efectos extrapiramidales.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Paliativos y neuropsiquiatría",
    "route": "/vademecum/haloperidol",
    "sourcePath": "/content/vademecum/haloperidol.html",
    "keywords": "Haloperidol Antipsicótico útil para delirium, agitación y náuseas seleccionadas, especialmente en el contexto de final de vida, con vigilancia del QT y de los efectos extrapiramidales. Vademécum Paliativos y neuropsiquiatría Atención Primaria Urgencias Haloperidol Antipsicótico útil para delirium, agitación y náuseas seleccionadas, especialmente en el contexto de final de vida, con vigilancia del QT y de los efectos extrapiramidales. Contexto clínico en la app El protocolo de manejo de final de vida lo incluye por vía subcutánea para delirium o agitación. Su papel principal dentro de la app es controlar delirium hiperactivo y agitación cuando las medidas no farmacológicas o la reevaluación causal no bastan. No sustituye la valoración de causas reversibles ni el abordaje proporcionado del sufrimiento. Posología orientativa En el kit paliativo auditado figura haloperidol subcutáneo con dosis global de 1-20 mg/día para delirium, ajustando la pauta al perfil de agitación y a la respuesta. Puede fraccionarse en dosis pautadas con rescates adicionales si el delirium reaparece antes del siguiente pase. Requiere reevaluar nivel de sedación, rigidez, respuesta clínica y necesidad real de mantener la pauta. Precauciones relevantes Evitar o extremar la prudencia si hay prolongación de QT, parkinsonismo, cuerpos de Lewy, rigidez intensa o antecedentes de reacción extrapiramidal grave. Puede empeorar parkinsonismo, generar acatisia o favorecer distonías, sobre todo si se acumula dosis. Si el síntoma es refractario pese a haloperidol o predomina sedación paliativa proporcional, midazolam puede ser el siguiente escalón clínico. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-manejo-de-final-de-vida"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "Conviene controlar acumulación diaria, QT y riesgo extrapiramidal."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-amiodarona",
        "note": "La combinación aumenta el riesgo de prolongación del QT y arritmias."
      }
    ]
  },
  {
    "id": "vademecum-ipratropio",
    "slug": "ipratropio",
    "title": "Ipratropio",
    "summary": "Anticolinérgico inhalado que complementa al salbutamol en la crisis asmática moderada-grave, especialmente durante las primeras tandas de tratamiento.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Respiratorio y corticoides",
    "route": "/vademecum/ipratropio",
    "sourcePath": "/content/vademecum/ipratropio.html",
    "keywords": "Ipratropio Anticolinérgico inhalado que complementa al salbutamol en la crisis asmática moderada-grave, especialmente durante las primeras tandas de tratamiento. Vademécum Respiratorio y corticoides Atención Primaria Urgencias Ipratropio Anticolinérgico inhalado que complementa al salbutamol en la crisis asmática moderada-grave, especialmente durante las primeras tandas de tratamiento. Contexto dentro de la app El protocolo de asma recomienda asociarlo pronto al SABA cuando la crisis es moderada o grave. No actúa como broncodilatador único de rescate en esta app, sino como apoyo al tratamiento inhalado inicial. Su utilidad es mayor en la primera hora y pierde protagonismo cuando la crisis se estabiliza. Posología orientativa En nebulización suele emplearse 500 microgramos por tanda en adultos, asociado a salbutamol durante la primera hora. También puede utilizarse con inhalador presurizado y cámara en número de inhalaciones equivalente según disponibilidad y técnica. En población pediátrica la dosis y la repetición deben ajustarse a edad, gravedad y protocolo local. Precauciones Puede favorecer sequedad de boca, visión borrosa o retención urinaria en pacientes predispuestos. Evitar que la nebulización o el aerosol contacten con los ojos en personas con glaucoma de ángulo cerrado. Si tras la primera hora sigue siendo imprescindible un soporte broncodilatador muy intensivo, debe reevaluarse la gravedad global del episodio. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-asma-exacerbacion-asmatica",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "Se usa como apoyo al broncodilatador principal durante las primeras tandas en crisis moderada-grave."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-metilprednisolona",
    "slug": "metilprednisolona",
    "title": "Metilprednisolona",
    "summary": "Corticoide sistémico utilizado en exacerbaciones respiratorias, reacciones inflamatorias y otros cuadros agudos seleccionados.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Respiratorio y corticoides",
    "route": "/vademecum/metilprednisolona",
    "sourcePath": "/content/vademecum/metilprednisolona.html",
    "keywords": "Metilprednisolona Corticoide sistémico utilizado en exacerbaciones respiratorias, reacciones inflamatorias y otros cuadros agudos seleccionados. Vademécum Respiratorio y corticoides Atención Primaria Urgencias Metilprednisolona Corticoide sistémico utilizado en exacerbaciones respiratorias, reacciones inflamatorias y otros cuadros agudos seleccionados. Posología orientativa Dosificación variable según indicación, gravedad y vía de administración. En pediatría y determinadas indicaciones puede requerir cálculo por peso. Considerar control glucémico, riesgo infeccioso y equilibrio hidroelectrolítico. Precauciones Revisar antecedentes de diabetes, úlcera y contraindicaciones relativas. Documentar la indicación concreta y plan de reevaluación. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "herramientas-dosis-pediatrica",
      "herramientas-concentracion-reconstitucion",
      "protocolos-asma-exacerbacion-asmatica",
      "protocolos-anafilaxia"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": true,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "En pediatría y dosis altas conviene controlar peso, reconstitución y límites diarios."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-salbutamol",
    "slug": "salbutamol",
    "title": "Salbutamol",
    "summary": "Broncodilatador beta2 de acción corta de referencia en la crisis asmática, con necesidad de repetir tandas al inicio y vigilar respuesta clínica, frecuencia cardiaca y potasio.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Respiratorio y corticoides",
    "route": "/vademecum/salbutamol",
    "sourcePath": "/content/vademecum/salbutamol.html",
    "keywords": "Salbutamol Broncodilatador beta2 de acción corta de referencia en la crisis asmática, con necesidad de repetir tandas al inicio y vigilar respuesta clínica, frecuencia cardiaca y potasio. Vademécum Respiratorio y corticoides Atención Primaria Urgencias Salbutamol Broncodilatador beta2 de acción corta de referencia en la crisis asmática, con necesidad de repetir tandas al inicio y vigilar respuesta clínica, frecuencia cardiaca y potasio. Contexto clínico en la app El protocolo de asma lo usa como broncodilatador inicial repetido durante la primera hora. Su papel principal es aliviar broncoespasmo agudo y ganar tiempo para que el corticoide sistémico actúe. En crisis moderada-grave se asocia a ipratropio en las primeras tandas. Posología orientativa En adultos puede administrarse con inhalador presurizado y cámara en tandas repetidas o con nebulización de 2,5-5 mg según gravedad y respuesta. La pauta inicial suele repetirse cada 20 minutos durante la primera hora en crisis moderada o grave. En pediatría y en pacientes de bajo peso conviene usar la ayuda de dosis para no sobredosificar el rescate. Precauciones Puede producir temblor, taquicardia, palpitaciones, agitación e hipopotasemia, sobre todo si las tandas son muy repetidas. Revisar frecuencia cardiaca, respuesta clínica y saturación; si la respuesta es escasa no basta con seguir repitiendo broncodilatador sin reevaluación. La necesidad persistente de tandas frecuentes obliga a considerar observación, ingreso o escalada de soporte. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-asma-exacerbacion-asmatica",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": false,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "En crisis asmática la repetición de tandas y la edad condicionan la pauta."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-etomidato",
    "slug": "etomidato",
    "title": "Etomidato",
    "summary": "Hipnótico de inducción breve útil cuando se busca sedación rápida con relativa estabilidad hemodinámica, especialmente en procedimientos como la cardioversión eléctrica.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Sedación y analgesia",
    "route": "/vademecum/etomidato",
    "sourcePath": "/content/vademecum/etomidato.html",
    "keywords": "Etomidato Hipnótico de inducción breve útil cuando se busca sedación rápida con relativa estabilidad hemodinámica, especialmente en procedimientos como la cardioversión eléctrica. Vademécum Sedación y analgesia Urgencias Etomidato Hipnótico de inducción breve útil cuando se busca sedación rápida con relativa estabilidad hemodinámica, especialmente en procedimientos como la cardioversión eléctrica. Contextos dentro de la app La cardioversión eléctrica sincronizada lo recoge como alternativa a midazolam o propofol según estabilidad hemodinámica y experiencia del equipo. Es especialmente útil cuando preocupa la hipotensión inducida por otros sedantes. No aporta analgesia, por lo que debe integrarse dentro de una estrategia completa de sedación procedimental. Posología orientativa En inducción o sedación breve suele emplearse un bolo IV de 0,15-0,3 mg/kg, administrado lentamente y con preparación respiratoria completa. La dosis debe ajustarse al contexto clínico, al peso y a la profundidad de sedación deseada. Tras el procedimiento conviene reevaluar ventilación, recuperación y necesidad de medidas de soporte complementarias. Precauciones Puede provocar apnea transitoria, mioclonías, náuseas o dolor en la inyección. Si se prevé uso repetido o sostenido, recordar el potencial de supresión suprarrenal y evitarlo como pauta continuada. Precisa monitorización respiratoria y hemodinámica igual que otras sedaciones profundas. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "procedimientos-cardioversion-electrica-sincronizada",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La inducción depende de peso y del contexto hemodinámico del procedimiento."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": []
  },
  {
    "id": "vademecum-fentanilo",
    "slug": "fentanilo",
    "title": "Fentanilo",
    "summary": "Opioide potente útil en analgesia aguda, sedoanalgesia y perfusión, con necesidad de ajuste por peso y vigilancia respiratoria.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Sedación y analgesia",
    "route": "/vademecum/fentanilo",
    "sourcePath": "/content/vademecum/fentanilo.html",
    "keywords": "Fentanilo Opioide potente útil en analgesia aguda, sedoanalgesia y perfusión, con necesidad de ajuste por peso y vigilancia respiratoria. Vademécum Sedación y analgesia Urgencias Fentanilo Opioide potente útil en analgesia aguda, sedoanalgesia y perfusión, con necesidad de ajuste por peso y vigilancia respiratoria. Posología orientativa Administración en bolos lentos o perfusión según indicación clínica y monitorización. Valorar contexto respiratorio, comorbilidad, edad y combinación con otros sedantes. Puede requerir cálculo por peso y control de dosis máxima acumulada. Precauciones Riesgo de depresión respiratoria, rigidez torácica y sedación excesiva. Usar con extrema prudencia con otros depresores del SNC. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "herramientas-dosis-pediatrica",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": true,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": true,
      "requiresIntervalCheck": true,
      "calculationNotes": "Ajustar por peso y revisar acumulación con sedantes concomitantes."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-propofol",
        "note": "Potenciación sedante y respiratoria; precisa vigilancia estrecha."
      },
      {
        "withId": "vademecum-midazolam",
        "note": "Aumenta sedación y riesgo de depresión respiratoria cuando se combinan."
      }
    ]
  },
  {
    "id": "vademecum-midazolam",
    "slug": "midazolam",
    "title": "Midazolam",
    "summary": "Benzodiacepina de inicio rápido útil para sedación procedimental, control de agitación y sedación proporcional, con necesidad de titulación prudente y vigilancia respiratoria.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Sedación y analgesia",
    "route": "/vademecum/midazolam",
    "sourcePath": "/content/vademecum/midazolam.html",
    "keywords": "Midazolam Benzodiacepina de inicio rápido útil para sedación procedimental, control de agitación y sedación proporcional, con necesidad de titulación prudente y vigilancia respiratoria. Vademécum Sedación y analgesia Urgencias Midazolam Benzodiacepina de inicio rápido útil para sedación procedimental, control de agitación y sedación proporcional, con necesidad de titulación prudente y vigilancia respiratoria. Contextos dentro de la app La cardioversión eléctrica sincronizada lo incluye entre las opciones habituales de sedación breve, junto con propofol o etomidato. En manejo de final de vida se usa para agitación refractaria, ansiedad intensa o sedación paliativa proporcional cuando el síntoma es refractario. La utilidad clínica depende del objetivo: ansiolisis, sedación breve o control sintomático mantenido. Posología orientativa En sedación procedimental adulta suele iniciarse con bolos IV lentos de 1-2 mg, repitiendo pequeñas fracciones cada pocos minutos hasta alcanzar el objetivo clínico. En final de vida puede emplearse por vía subcutánea o intravenosa con rescates titulados y, si hace falta, perfusión continua según protocolo local de paliativos. En pacientes añosos, frágiles, con EPOC, obesidad o coadministración de opioides conviene reducir dosis inicial y ritmo de escalada. Precauciones y ajustes Riesgo de depresión respiratoria, hipotensión, somnolencia prolongada y amnesia más intensa si se combina con opioides o propofol. En insuficiencia hepática o sedación mantenida puede prolongarse el efecto y retrasar la recuperación. Debe administrarse con monitorización respiratoria y material de soporte de vía aérea cuando se usa para sedación procedimental. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "procedimientos-cardioversion-electrica-sincronizada",
      "protocolos-manejo-de-final-de-vida",
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": true,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "En sedación procedimental o paliativa conviene titular lentamente y vigilar depresión respiratoria."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-fentanilo",
        "note": "Mayor riesgo de depresión respiratoria y necesidad de titulación prudente."
      },
      {
        "withId": "vademecum-propofol",
        "note": "La sedación combinada debe hacerse con monitorización respiratoria y hemodinámica."
      }
    ]
  },
  {
    "id": "vademecum-morfina",
    "slug": "morfina",
    "title": "Morfina",
    "summary": "Opioide de referencia para dolor y disnea en múltiples contextos clínicos, con especial relevancia en final de vida, donde requiere titulación prudente y atención al contexto renal y respiratorio.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Sedación y analgesia",
    "route": "/vademecum/morfina",
    "sourcePath": "/content/vademecum/morfina.html",
    "keywords": "Morfina Opioide de referencia para dolor y disnea en múltiples contextos clínicos, con especial relevancia en final de vida, donde requiere titulación prudente y atención al contexto renal y respiratorio. Vademécum Sedación y analgesia Atención Primaria Urgencias Morfina Opioide de referencia para dolor y disnea en múltiples contextos clínicos, con especial relevancia en final de vida, donde requiere titulación prudente y atención al contexto renal y respiratorio. Contextos dentro de la app En el protocolo de manejo de final de vida figura como fármaco útil para dolor o disnea cuando la vía subcutánea pasa a ser prioritaria. También aparece como analgésico posible en síndrome coronario agudo, aunque ese módulo sigue pendiente de revisión clínica completa. Su utilidad depende tanto del alivio sintomático como de la capacidad del equipo para reevaluar sedación, confort y efectos adversos. Posología orientativa En el kit local de paliativos auditado se recoge una pauta subcutánea orientativa de 0,5 mg/kg/día dividida en 6 dosis cada 4 horas. La equivalencia oral:subcutánea aproximada usada en la app es 2:1, útil para reconvertir tratamiento previo cuando la vía oral deja de ser útil. Los rescates y la necesidad de perfusión continua deben individualizarse según dolor, disnea, respuesta previa y nivel de fragilidad. Precauciones y ajustes Vigilar somnolencia excesiva, depresión respiratoria, estreñimiento, retención urinaria y mioclonías, especialmente con escalada rápida o fallo renal. La insuficiencia renal favorece acumulación de metabolitos activos y obliga a titulación más prudente o a valorar alternativas. La combinación con midazolam u otros sedantes exige mayor vigilancia del nivel de sedación y del objetivo clínico buscado. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "protocolos-manejo-de-final-de-vida",
      "herramientas-dosis-pediatrica"
    ],
    "carePaths": [
      "atencion-primaria",
      "urgencias"
    ],
    "carePathLabels": [
      "Atención Primaria",
      "Urgencias"
    ],
    "carePathPillLabel": "Transversal",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": true,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": false,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "La titulación depende de peso, objetivo sintomático y función renal."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-midazolam",
        "note": "La combinación puede ser útil en paliativos, pero aumenta sedación y riesgo de depresión respiratoria."
      }
    ]
  },
  {
    "id": "vademecum-propofol",
    "slug": "propofol",
    "title": "Propofol",
    "summary": "Hipnótico de uso frecuente en inducción y sedación procedimental, muy dependiente de cálculo por peso y de la velocidad de perfusión.",
    "section": "vademecum",
    "sectionLabel": "Vademécum",
    "kind": "vademecum",
    "kindLabel": "Fármaco",
    "category": "Sedación y analgesia",
    "route": "/vademecum/propofol",
    "sourcePath": "/content/vademecum/propofol.html",
    "keywords": "Propofol Hipnótico de uso frecuente en inducción y sedación procedimental, muy dependiente de cálculo por peso y de la velocidad de perfusión. Vademécum Sedación y analgesia Urgencias Propofol Hipnótico de uso frecuente en inducción y sedación procedimental, muy dependiente de cálculo por peso y de la velocidad de perfusión. Uso orientativo Considerar peso, objetivo de sedación, soporte respiratorio disponible y estabilidad hemodinámica. La administración suele hacerse en bolo titulado o perfusión continua. Revisar hipotensión, depresión respiratoria y contexto de ayuno/procedimiento. Precauciones Monitorización respiratoria y hemodinámica obligatoria. Compatibilidad y manipulación cuidadosa por emulsión lipídica. CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion",
    "algorithmId": null,
    "relatedEntryIds": [
      "herramientas-velocidad-de-infusion-ml-h",
      "herramientas-calculo-de-bolos"
    ],
    "carePaths": [
      "urgencias"
    ],
    "carePathLabels": [
      "Urgencias"
    ],
    "carePathPillLabel": "Urgencias",
    "flags": {
      "requiresWeightCalc": true,
      "requiresPediatricDose": false,
      "requiresBsaCalc": false,
      "requiresRenalAdjustment": false,
      "requiresHepaticAdjustment": false,
      "requiresInfusionRateCalc": true,
      "requiresReconstitutionCalc": false,
      "requiresMaxDailyDoseCheck": false,
      "requiresIntervalCheck": true,
      "calculationNotes": "El cálculo depende de peso y del objetivo de sedación o inducción."
    },
    "externalReferenceUrl": "https://cima.aemps.es/cima/publico/home.html",
    "interactions": [
      {
        "withId": "vademecum-fentanilo",
        "note": "Aumenta depresión respiratoria y requerimientos de monitorización."
      },
      {
        "withId": "vademecum-midazolam",
        "note": "La sedación combinada exige reducción de dosis y monitorización estrecha."
      }
    ]
  }
];

export const REGISTRY = {
  entries: ENTRIES,
  byId: new Map(ENTRIES.map((entry) => [entry.id, entry])),
  byRoute: new Map(ENTRIES.map((entry) => [entry.route, entry])),
  bySourcePath: new Map(ENTRIES.map((entry) => [entry.sourcePath, entry])),
};
