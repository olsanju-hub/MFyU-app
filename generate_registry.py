from __future__ import annotations

import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "content"
CORE_DIR = ROOT / "core"

SECTION_LABELS = {
    "inicio": "Inicio",
    "protocolos": "Protocolos",
    "procedimientos": "Procedimientos",
    "herramientas": "Herramientas",
    "vademecum": "Vademécum",
    "buscar": "Buscar",
    "favoritos": "Favoritos",
}

SECTION_SUMMARIES = {
    "inicio": "Biblioteca clínica operativa para consulta, decisión y cálculo en el punto de atención.",
    "protocolos": "Fichas consultivas modulares con preparación para algoritmos interactivos.",
    "procedimientos": "Técnicas clínicas con pasos críticos, seguridad y soporte de checklist o flujo.",
    "herramientas": "Scores, escalas, calculadoras y conversores integrados en el shell común.",
    "vademecum": "Fichas farmacológicas con metadatos internos para activar cálculos contextuales.",
    "buscar": "Búsqueda global, filtros, historial local y acceso rápido a favoritos.",
    "favoritos": "Persistencia local centralizada de accesos clínicos frecuentes.",
}

KIND_LABELS = {
    "protocolos": "Protocolo",
    "procedimientos": "Procedimiento",
    "herramientas": "Herramienta",
    "vademecum": "Fármaco",
}

PROTOCOL_CATEGORY_LABELS = {
    "cardiologia": "Cardiología",
    "respiratorio": "Respiratorio",
    "neurologia": "Neurología",
    "digestivo": "Digestivo",
    "nefrologia-metabolico": "Nefrología / Metabólico",
    "nefro-urologia": "Nefro-urología",
    "endocrinologia": "Endocrinología",
    "orl": "ORL",
    "oftalmologia": "Oftalmología",
    "ginecologia-ets": "Ginecología / ETS",
    "pediatria": "Pediatría",
    "toxicologia": "Toxicología",
    "dermatologia-infecciosas": "Dermatología / Infecciosas",
    "cuidados-paliativos-final-de-vida": "Cuidados paliativos / final de vida",
    "paliativos": "Cuidados paliativos / final de vida",
    "agentes-fisicos-ambientales": "Agentes físicos / ambientales",
    "radiologia": "Radiología",
}

TOOL_CATEGORY_LABELS = {
    "scores-y-escalas": "Scores y escalas",
    "calculadoras-clinicas": "Calculadoras clínicas",
    "electrolitos-y-metabolico": "Electrolitos y metabólico",
    "respiratorio": "Respiratorio",
    "farmacos-y-perfusion": "Fármacos y perfusión",
    "conversores": "Conversores",
}

VADEMECUM_CATEGORY_LABELS = {
    "amiodarona": "Cardiovasculares y vasoactivos",
    "captopril": "Cardiovasculares y vasoactivos",
    "digoxina": "Cardiovasculares y vasoactivos",
    "diltiazem": "Cardiovasculares y vasoactivos",
    "dobutamina": "Cardiovasculares y vasoactivos",
    "furosemida": "Cardiovasculares y vasoactivos",
    "labetalol": "Cardiovasculares y vasoactivos",
    "noradrenalina": "Cardiovasculares y vasoactivos",
    "adrenalina": "Emergencias críticas",
    "amoxicilina": "Antiinfecciosos frecuentes",
    "amoxicilina-clavulanico": "Antiinfecciosos frecuentes",
    "fentanilo": "Sedación y analgesia",
    "midazolam": "Sedación y analgesia",
    "morfina": "Sedación y analgesia",
    "etomidato": "Sedación y analgesia",
    "propofol": "Sedación y analgesia",
    "butilescopolamina": "Paliativos y neuropsiquiatría",
    "haloperidol": "Paliativos y neuropsiquiatría",
    "metilprednisolona": "Respiratorio y corticoides",
    "salbutamol": "Respiratorio y corticoides",
    "ipratropio": "Respiratorio y corticoides",
}

ALGORITHM_MAP = {
    "protocolos-crisis-hipertensiva": "alg-crisis-hipertensiva",
    "protocolos-fibrilacion-auricular": "alg-fa-urgencias",
    "protocolos-manejo-de-final-de-vida": "alg-manejo-final-de-vida",
}

CIMA_HOME = "https://cima.aemps.es/cima/publico/home.html"

DRUG_FLAGS = {
    "amiodarona": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": True,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "Monitorizar QT y ajustar concentración/velocidad cuando se usa en perfusión.",
    },
    "labetalol": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "Útil en crisis hipertensiva con apoyo para perfusión y control de dosis máxima.",
    },
    "noradrenalina": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": True,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": False,
        "skipBolusCalc": True,
        "calculationNotes": "Precisa cálculo por peso, concentración y velocidad de perfusión.",
    },
    "fentanilo": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "Ajustar por peso y revisar acumulación con sedantes concomitantes.",
    },
    "propofol": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "El cálculo depende de peso y del objetivo de sedación o inducción.",
    },
    "metilprednisolona": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": True,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "En pediatría y dosis altas conviene controlar peso, reconstitución y límites diarios.",
    },
    "adrenalina": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": True,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "Es crítico distinguir concentración, vía y contexto clínico; activar siempre ayudas de cálculo.",
    },
    "midazolam": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "En sedación procedimental o paliativa conviene titular lentamente y vigilar depresión respiratoria.",
    },
    "haloperidol": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "Conviene controlar acumulación diaria, QT y riesgo extrapiramidal.",
    },
    "etomidato": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La inducción depende de peso y del contexto hemodinámico del procedimiento.",
    },
    "digoxina": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La dosis de carga y mantenimiento exige revisar función renal, potasio y frecuencia cardiaca.",
    },
    "diltiazem": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "En FA rápida puede requerir bolo por peso y perfusión titulada.",
    },
    "dobutamina": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": True,
        "requiresReconstitutionCalc": True,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": False,
        "skipBolusCalc": True,
        "calculationNotes": "La perfusión se titula por peso y respuesta hemodinámica; conviene ajustar concentración y velocidad.",
    },
    "salbutamol": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "En crisis asmática la repetición de tandas y la edad condicionan la pauta.",
    },
    "captopril": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "Conviene revisar función renal, potasio y tolerancia tensional antes de repetir dosis.",
    },
    "furosemida": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La intensidad diurética debe ajustarse a respuesta clínica, función renal y electrolitos.",
    },
    "morfina": {
        "requiresWeightCalc": True,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La titulación depende de peso, objetivo sintomático y función renal.",
    },
    "butilescopolamina": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "En paliativos conviene controlar acumulado diario y reevaluar si realmente mejora confort.",
    },
    "amoxicilina": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "La pauta pediátrica y el ajuste renal son los cálculos más relevantes en esta ficha.",
    },
    "amoxicilina-clavulanico": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": True,
        "requiresIntervalCheck": True,
        "calculationNotes": "La formulación, la dosis pediátrica y el ajuste renal condicionan la pauta final.",
    },
    "ipratropio": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": True,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "Se usa como apoyo al broncodilatador principal durante las primeras tandas en crisis moderada-grave.",
    },
}

RELATED_MAP = {
    "protocolos-crisis-hipertensiva": [
        "vademecum-captopril",
        "vademecum-labetalol",
        "herramientas-velocidad-de-infusion-ml-h",
    ],
    "protocolos-fibrilacion-auricular": [
        "herramientas-cha2ds2-vasc",
        "herramientas-has-bled",
        "procedimientos-cardioversion-electrica-sincronizada",
        "vademecum-amiodarona",
        "vademecum-digoxina",
        "vademecum-diltiazem",
    ],
    "protocolos-insuficiencia-cardiaca-aguda": [
        "vademecum-furosemida",
        "vademecum-dobutamina",
        "vademecum-noradrenalina",
        "herramientas-velocidad-de-infusion-ml-h",
    ],
    "protocolos-asma-exacerbacion-asmatica": [
        "vademecum-salbutamol",
        "vademecum-ipratropio",
        "vademecum-metilprednisolona",
        "herramientas-dosis-pediatrica",
    ],
    "protocolos-anafilaxia": [
        "vademecum-adrenalina",
        "vademecum-metilprednisolona",
        "herramientas-dosis-pediatrica",
    ],
    "protocolos-manejo-de-final-de-vida": [
        "vademecum-butilescopolamina",
        "vademecum-haloperidol",
        "vademecum-midazolam",
        "vademecum-morfina",
    ],
    "protocolos-neumonia": [
        "vademecum-amoxicilina",
        "vademecum-amoxicilina-clavulanico",
        "herramientas-dosis-pediatrica",
    ],
    "procedimientos-cardioversion-electrica-sincronizada": [
        "protocolos-fibrilacion-auricular",
        "vademecum-amiodarona",
        "vademecum-midazolam",
        "vademecum-propofol",
        "vademecum-etomidato",
    ],
    "vademecum-amiodarona": [
        "herramientas-correccion-qtc",
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-concentracion-reconstitucion",
        "protocolos-fibrilacion-auricular",
    ],
    "vademecum-midazolam": [
        "procedimientos-cardioversion-electrica-sincronizada",
        "protocolos-manejo-de-final-de-vida",
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-captopril": [
        "protocolos-crisis-hipertensiva",
    ],
    "vademecum-furosemida": [
        "protocolos-insuficiencia-cardiaca-aguda",
        "protocolos-hipopotasemia",
    ],
    "vademecum-morfina": [
        "protocolos-manejo-de-final-de-vida",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-butilescopolamina": [
        "protocolos-manejo-de-final-de-vida",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-amoxicilina": [
        "protocolos-neumonia",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-amoxicilina-clavulanico": [
        "protocolos-neumonia",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-haloperidol": [
        "protocolos-manejo-de-final-de-vida",
    ],
    "vademecum-etomidato": [
        "procedimientos-cardioversion-electrica-sincronizada",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-digoxina": [
        "protocolos-fibrilacion-auricular",
        "protocolos-hipopotasemia",
    ],
    "vademecum-diltiazem": [
        "protocolos-fibrilacion-auricular",
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-dobutamina": [
        "protocolos-insuficiencia-cardiaca-aguda",
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-concentracion-reconstitucion",
    ],
    "vademecum-salbutamol": [
        "protocolos-asma-exacerbacion-asmatica",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-ipratropio": [
        "protocolos-asma-exacerbacion-asmatica",
        "herramientas-dosis-pediatrica",
    ],
    "vademecum-labetalol": [
        "protocolos-crisis-hipertensiva",
        "herramientas-velocidad-de-infusion-ml-h",
    ],
    "vademecum-noradrenalina": [
        "herramientas-goteo-y-perfusion",
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-concentracion-reconstitucion",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-fentanilo": [
        "herramientas-dosis-pediatrica",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-propofol": [
        "herramientas-velocidad-de-infusion-ml-h",
        "herramientas-calculo-de-bolos",
    ],
    "vademecum-metilprednisolona": [
        "herramientas-dosis-pediatrica",
        "herramientas-concentracion-reconstitucion",
        "protocolos-asma-exacerbacion-asmatica",
        "protocolos-anafilaxia",
    ],
    "vademecum-adrenalina": [
        "protocolos-anafilaxia",
        "herramientas-dosis-pediatrica",
        "herramientas-calculo-de-bolos",
        "herramientas-concentracion-reconstitucion",
    ],
}

DRUG_INTERACTIONS = {
    "amiodarona": [
        {"withId": "vademecum-propofol", "note": "Valorar mayor riesgo de hipotensión y depresión hemodinámica en sedación compleja."},
        {"withId": "vademecum-digoxina", "note": "Puede aumentar concentraciones de digoxina y favorecer bradiarritmia o bloqueo."},
    ],
    "noradrenalina": [
        {"withId": "vademecum-adrenalina", "note": "Revisar estrategia vasoactiva para evitar solapamiento no planificado."},
        {"withId": "vademecum-dobutamina", "note": "La combinación puede ser útil, pero debe titrarse por objetivo hemodinámico claro."},
    ],
    "fentanilo": [
        {"withId": "vademecum-propofol", "note": "Potenciación sedante y respiratoria; precisa vigilancia estrecha."},
        {"withId": "vademecum-midazolam", "note": "Aumenta sedación y riesgo de depresión respiratoria cuando se combinan."},
    ],
    "propofol": [
        {"withId": "vademecum-fentanilo", "note": "Aumenta depresión respiratoria y requerimientos de monitorización."},
        {"withId": "vademecum-midazolam", "note": "La sedación combinada exige reducción de dosis y monitorización estrecha."},
    ],
    "adrenalina": [
        {"withId": "vademecum-noradrenalina", "note": "Evitar duplicidad vasoactiva sin objetivo hemodinámico claro."},
    ],
    "haloperidol": [
        {"withId": "vademecum-amiodarona", "note": "La combinación aumenta el riesgo de prolongación del QT y arritmias."},
    ],
    "digoxina": [
        {"withId": "vademecum-amiodarona", "note": "La amiodarona puede aumentar niveles de digoxina y requerir ajuste."},
        {"withId": "vademecum-diltiazem", "note": "Mayor riesgo de bradicardia o bloqueo AV si se combinan."},
    ],
    "diltiazem": [
        {"withId": "vademecum-digoxina", "note": "La combinación precisa vigilancia de frecuencia, conducción y niveles clínicos."},
    ],
    "captopril": [
        {"withId": "vademecum-furosemida", "note": "La combinación puede potenciar hipotensión inicial y deterioro renal si el paciente está hipovolémico."},
    ],
    "dobutamina": [
        {"withId": "vademecum-noradrenalina", "note": "El soporte combinado requiere objetivo hemodinámico definido y vigilancia estrecha."},
    ],
    "furosemida": [
        {"withId": "vademecum-digoxina", "note": "La depleción de potasio favorece toxicidad digitálica y obliga a vigilar iones y ritmo."},
        {"withId": "vademecum-captopril", "note": "La combinación precisa revisar tensión, volemia y función renal tras iniciar o intensificar tratamiento."},
    ],
    "midazolam": [
        {"withId": "vademecum-fentanilo", "note": "Mayor riesgo de depresión respiratoria y necesidad de titulación prudente."},
        {"withId": "vademecum-propofol", "note": "La sedación combinada debe hacerse con monitorización respiratoria y hemodinámica."},
    ],
    "morfina": [
        {"withId": "vademecum-midazolam", "note": "La combinación puede ser útil en paliativos, pero aumenta sedación y riesgo de depresión respiratoria."},
    ],
    "butilescopolamina": [
        {"withId": "vademecum-ipratropio", "note": "La carga anticolinérgica combinada puede aumentar sequedad, retención urinaria o confusión."},
    ],
}

NAV_ITEMS = [
    {"id": "inicio", "label": "Inicio", "path": "/"},
    {"id": "protocolos", "label": "Protocolos", "path": "/protocolos"},
    {"id": "procedimientos", "label": "Procedimientos", "path": "/procedimientos"},
    {"id": "herramientas", "label": "Herramientas", "path": "/herramientas"},
    {"id": "vademecum", "label": "Vademécum", "path": "/vademecum"},
    {"id": "buscar", "label": "Buscar", "path": "/buscar"},
    {"id": "favoritos", "label": "Favoritos", "path": "/favoritos"},
]

CATEGORY_ORDER = {
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
        "Cuidados paliativos / final de vida",
    ],
    "procedimientos": [
        "Urgencias y consulta",
    ],
    "herramientas": [
        "Scores y escalas",
        "Calculadoras clínicas",
        "Electrolitos y metabólico",
        "Respiratorio",
        "Fármacos y perfusión",
        "Conversores",
    ],
    "vademecum": [
        "Cardiovasculares y vasoactivos",
        "Sedación y analgesia",
        "Paliativos y neuropsiquiatría",
        "Respiratorio y corticoides",
        "Antiinfecciosos frecuentes",
        "Emergencias críticas",
    ],
}

HTML_STRIPPER = re.compile(r"<[^>]+>")
TITLE_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.IGNORECASE | re.DOTALL)
SUMMARY_RE = re.compile(r'<p[^>]*class="[^"]*summary[^"]*"[^>]*>(.*?)</p>', re.IGNORECASE | re.DOTALL)
SEARCH_TERMS_RE = re.compile(r'data-search-terms="([^"]+)"', re.IGNORECASE)
CONTENT_RE = re.compile(r"<(?:h1|h2|h3|h4|p|li|figcaption|small|strong)[^>]*>(.*?)</(?:h1|h2|h3|h4|p|li|figcaption|small|strong)>", re.IGNORECASE | re.DOTALL)


def slug_to_title(slug: str) -> str:
    return slug.replace("-", " ").strip().title()


def clean_text(raw: str | None) -> str:
    if not raw:
        return ""
    text = html.unescape(HTML_STRIPPER.sub(" ", raw))
    return " ".join(text.split())


def extract_title_summary_and_keywords(path: Path) -> tuple[str, str, str]:
    raw = path.read_text(encoding="utf-8")
    title_match = TITLE_RE.search(raw)
    summary_match = SUMMARY_RE.search(raw)
    search_terms_match = SEARCH_TERMS_RE.search(raw)
    title = clean_text(title_match.group(1)) if title_match else slug_to_title(path.stem)
    summary = clean_text(summary_match.group(1)) if summary_match else ""
    search_terms = clean_text(search_terms_match.group(1)) if search_terms_match else ""
    content_fragments = [clean_text(match) for match in CONTENT_RE.findall(raw)]
    content_text = " ".join(fragment for fragment in content_fragments if fragment)
    keywords = " ".join(part for part in [search_terms, content_text] if part).strip()
    return title, summary, keywords


def detect_category(section: str, path: Path) -> str:
    if section == "protocolos":
        return PROTOCOL_CATEGORY_LABELS[path.parent.name]
    if section == "procedimientos":
        return "Urgencias y consulta"
    if section == "herramientas":
        return TOOL_CATEGORY_LABELS[path.parent.name]
    return VADEMECUM_CATEGORY_LABELS.get(path.stem, "Vademécum")


def build_route(section: str, slug: str) -> str:
    return f"/{section}/{slug}"


def build_source_path(path: Path) -> str:
    return "/" + path.relative_to(ROOT).as_posix()


def build_entry(path: Path) -> dict:
    relative = path.relative_to(CONTENT_DIR)
    section = relative.parts[0]
    slug = path.stem
    title, summary, content_keywords = extract_title_summary_and_keywords(path)
    category = detect_category(section, path)
    entry_id = f"{section}-{slug}"
    keyword_parts = [
        title,
        summary,
        SECTION_LABELS[section],
        category,
        content_keywords,
    ]
    entry = {
        "id": entry_id,
        "slug": slug,
        "title": title,
        "summary": summary or SECTION_SUMMARIES[section],
        "section": section,
        "sectionLabel": SECTION_LABELS[section],
        "kind": section,
        "kindLabel": KIND_LABELS[section],
        "category": category,
        "route": build_route(section, slug),
        "sourcePath": build_source_path(path),
        "keywords": " ".join(part for part in keyword_parts if part).strip(),
        "algorithmId": ALGORITHM_MAP.get(entry_id),
        "relatedEntryIds": RELATED_MAP.get(entry_id, []),
        "flags": {},
        "externalReferenceUrl": None,
        "interactions": [],
    }

    if section == "vademecum":
        entry["flags"] = DRUG_FLAGS.get(slug, {})
        entry["externalReferenceUrl"] = CIMA_HOME
        entry["interactions"] = DRUG_INTERACTIONS.get(slug, [])
        entry["keywords"] += " CIMA AEMPS dosis pediatrica interacciones ajustes renales perfusion"

    return entry


def list_content_files() -> list[Path]:
    paths: list[Path] = []
    for section in ("protocolos", "procedimientos", "herramientas", "vademecum"):
        paths.extend(sorted((CONTENT_DIR / section).rglob("*.html")))
    return [path for path in paths if path.name != ".gitkeep"]


def generate_registry(entries: list[dict]) -> str:
    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    nav_payload = json.dumps(NAV_ITEMS, ensure_ascii=False, indent=2)
    section_payload = json.dumps(SECTION_SUMMARIES, ensure_ascii=False, indent=2)
    category_order_payload = json.dumps(CATEGORY_ORDER, ensure_ascii=False, indent=2)

    return f"""export const NAV_ITEMS = {nav_payload};

export const SECTION_SUMMARIES = {section_payload};

export const CATEGORY_ORDER = {category_order_payload};

export const ENTRIES = {payload};

export const REGISTRY = {{
  entries: ENTRIES,
  byId: new Map(ENTRIES.map((entry) => [entry.id, entry])),
  byRoute: new Map(ENTRIES.map((entry) => [entry.route, entry])),
  bySourcePath: new Map(ENTRIES.map((entry) => [entry.sourcePath, entry])),
}};
"""


def generate_precache(entries: list[dict]) -> str:
    static_assets = [
        "/index.html",
        "/404.html",
        "/manifest.json",
        "/sw.js",
        "/core/app-shell.css",
        "/core/app-shell.js",
        "/core/base-path.js",
        "/core/router.js",
        "/core/search.js",
        "/core/storage.js",
        "/core/utils.js",
        "/core/registry.js",
        "/components/header.js",
        "/components/nav.js",
        "/components/drawer.js",
        "/components/toolbar.js",
        "/apps/inicio/index.html",
        "/apps/protocolos/index.html",
        "/apps/procedimientos/index.html",
        "/apps/herramientas/index.html",
        "/apps/vademecum/index.html",
        "/apps/buscar/index.html",
        "/apps/favoritos/index.html",
        "/assets/images/logo.svg",
        "/assets/icons/pwa-icon.svg",
        "/assets/icons/pwa-icon-192.png",
        "/assets/icons/pwa-icon-512.png",
    ]
    image_assets = [
        "/" + path.relative_to(ROOT).as_posix()
        for path in sorted((ROOT / "assets" / "images").rglob("*"))
        if path.is_file()
    ]
    icon_assets = [
        "/" + path.relative_to(ROOT).as_posix()
        for path in sorted((ROOT / "assets" / "icons").rglob("*"))
        if path.is_file() and path.name != ".DS_Store"
    ]
    algorithm_assets = ["/" + path.relative_to(ROOT).as_posix() for path in sorted((CONTENT_DIR / "algorithms").glob("*.json"))]
    content_assets = [entry["sourcePath"] for entry in entries]
    assets = sorted(set(static_assets + image_assets + icon_assets + algorithm_assets + content_assets))
    return "self.__MFYU_PRECACHE = " + json.dumps(assets, ensure_ascii=False, indent=2) + ";\n"


def main() -> None:
    CORE_DIR.mkdir(exist_ok=True)
    entries = sorted(
        (build_entry(path) for path in list_content_files()),
        key=lambda item: (item["section"], item["category"], item["title"]),
    )

    (CORE_DIR / "registry.js").write_text(generate_registry(entries), encoding="utf-8")
    (CORE_DIR / "precache-manifest.js").write_text(generate_precache(entries), encoding="utf-8")

    counts = {
        "protocolos": sum(1 for entry in entries if entry["section"] == "protocolos"),
        "procedimientos": sum(1 for entry in entries if entry["section"] == "procedimientos"),
        "herramientas": sum(1 for entry in entries if entry["section"] == "herramientas"),
        "vademecum": sum(1 for entry in entries if entry["section"] == "vademecum"),
    }
    print(json.dumps(counts, ensure_ascii=False))


if __name__ == "__main__":
    main()
