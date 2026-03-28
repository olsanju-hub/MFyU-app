from __future__ import annotations

from collections import Counter
from datetime import datetime
import html
import json
import re
from pathlib import Path
import unicodedata


ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "content"
CORE_DIR = ROOT / "core"
BIBLIO_DIR = ROOT / "biblio"

SECTION_LABELS = {
    "inicio": "Inicio",
    "atencion-primaria": "Atención Primaria",
    "urgencias": "Urgencias",
    "protocolos": "Protocolos",
    "procedimientos": "Procedimientos",
    "herramientas": "Herramientas",
    "vademecum": "Vademécum",
    "buscar": "Buscar",
    "favoritos": "Favoritos",
}

SECTION_SUMMARIES = {
    "inicio": "Biblioteca clínica operativa para consulta, decisión y cálculo en el punto de atención.",
    "atencion-primaria": "Ruta clínica para valoración ambulatoria, seguimiento, tratamiento escalonado y derivación desde consulta.",
    "urgencias": "Ruta clínica para triage, red flags, tratamiento agudo y decisión de ingreso o alta.",
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
    "azitromicina": "Antiinfecciosos frecuentes",
    "ceftriaxona": "Antiinfecciosos frecuentes",
    "fentanilo": "Sedación y analgesia",
    "midazolam": "Sedación y analgesia",
    "levofloxacino": "Antiinfecciosos frecuentes",
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
    "protocolos-neumonia": "alg-neumonia",
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
    "azitromicina": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "Conviene revisar QT, interacciones y si realmente existe indicación para cubrir atípicos.",
    },
    "ceftriaxona": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": False,
        "requiresHepaticAdjustment": True,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La revisión principal es clínica: respuesta, necesidad de desescalada y reevaluación de complicaciones pleuropulmonares.",
    },
    "levofloxacino": {
        "requiresWeightCalc": False,
        "requiresPediatricDose": False,
        "requiresBsaCalc": False,
        "requiresRenalAdjustment": True,
        "requiresHepaticAdjustment": False,
        "requiresInfusionRateCalc": False,
        "requiresReconstitutionCalc": False,
        "requiresMaxDailyDoseCheck": False,
        "requiresIntervalCheck": True,
        "calculationNotes": "La función renal y el riesgo de efectos adversos condicionan el cierre final de pauta e intervalo.",
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
        "protocolos-hta-atencion-primaria",
        "vademecum-captopril",
        "vademecum-labetalol",
        "herramientas-velocidad-de-infusion-ml-h",
    ],
    "protocolos-hta-atencion-primaria": [
        "protocolos-crisis-hipertensiva",
        "herramientas-score2",
        "herramientas-score2-op",
        "vademecum-captopril",
    ],
    "protocolos-fibrilacion-auricular": [
        "protocolos-fibrilacion-auricular-atencion-primaria",
        "herramientas-cha2ds2-vasc",
        "herramientas-has-bled",
        "procedimientos-cardioversion-electrica-sincronizada",
        "vademecum-amiodarona",
        "vademecum-digoxina",
        "vademecum-diltiazem",
    ],
    "protocolos-fibrilacion-auricular-atencion-primaria": [
        "protocolos-fibrilacion-auricular",
        "herramientas-cha2ds2-vasc",
        "herramientas-has-bled",
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
        "protocolos-manejo-de-final-de-vida-atencion-primaria",
        "vademecum-butilescopolamina",
        "vademecum-haloperidol",
        "vademecum-midazolam",
        "vademecum-morfina",
    ],
    "protocolos-manejo-de-final-de-vida-atencion-primaria": [
        "protocolos-manejo-de-final-de-vida",
        "vademecum-butilescopolamina",
        "vademecum-haloperidol",
        "vademecum-midazolam",
        "vademecum-morfina",
    ],
    "protocolos-neumonia": [
        "protocolos-neumonia-atencion-primaria",
        "vademecum-amoxicilina",
        "vademecum-amoxicilina-clavulanico",
        "vademecum-azitromicina",
        "vademecum-ceftriaxona",
        "vademecum-levofloxacino",
        "herramientas-crb-65",
        "herramientas-curb-65",
        "herramientas-objetivo-de-oxigenoterapia",
        "herramientas-dosis-pediatrica",
    ],
    "protocolos-neumonia-atencion-primaria": [
        "protocolos-neumonia",
        "vademecum-amoxicilina",
        "vademecum-amoxicilina-clavulanico",
        "vademecum-azitromicina",
        "herramientas-crb-65",
    ],
    "protocolos-diabetes-mellitus-atencion-primaria": [
        "protocolos-diabetes-urgencias",
        "protocolos-hipoglucemia",
        "herramientas-medas",
        "herramientas-ipaq",
    ],
    "protocolos-diabetes-urgencias": [
        "protocolos-diabetes-mellitus-atencion-primaria",
        "protocolos-cetoacidosis-diabetica",
        "protocolos-estado-hiperglucemico-hiperosmolar",
        "protocolos-hipoglucemia",
        "herramientas-anion-gap",
        "herramientas-osmolaridad-calculada",
        "herramientas-sodio-corregido-por-glucosa",
    ],
    "protocolos-epoc-atencion-primaria": [
        "protocolos-exacerbacion-aguda-de-epoc",
        "herramientas-espirometria",
        "vademecum-salbutamol",
        "vademecum-ipratropio",
    ],
    "protocolos-exacerbacion-aguda-de-epoc": [
        "protocolos-epoc-atencion-primaria",
        "procedimientos-ventilacion-mecanica-no-invasiva",
        "herramientas-objetivo-de-oxigenoterapia",
        "herramientas-conversor-de-fio2-segun-dispositivo",
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
    "vademecum-azitromicina": [
        "protocolos-neumonia",
    ],
    "vademecum-ceftriaxona": [
        "protocolos-neumonia",
    ],
    "vademecum-levofloxacino": [
        "protocolos-neumonia",
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
    "herramientas-crb-65": [
        "protocolos-neumonia",
    ],
    "herramientas-curb-65": [
        "protocolos-neumonia",
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
    {"id": "atencion-primaria", "label": "Atención Primaria", "path": "/atencion-primaria"},
    {"id": "urgencias", "label": "Urgencias", "path": "/urgencias"},
    {"id": "buscar", "label": "Buscar", "path": "/buscar"},
    {"id": "vademecum", "label": "Vademécum", "path": "/vademecum"},
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

CARE_PATHS = {
    "atencion-primaria": {
        "label": "Atención Primaria",
        "copy": "Contenido orientado a consulta, continuidad asistencial, seguimiento y derivación razonada.",
        "sectionCopy": "Protocolos y recursos priorizados para cribado, manejo ambulatorio y control evolutivo.",
    },
    "urgencias": {
        "label": "Urgencias",
        "copy": "Contenido orientado a valoración inmediata, red flags, tratamiento agudo y decisión de ingreso o alta.",
        "sectionCopy": "Protocolos y recursos priorizados para inestabilidad, pruebas inmediatas y soporte urgente.",
    },
}

PRIMARY_PROTOCOL_SLUGS = {
    "blefaritis",
    "celulitis-erisipela",
    "chalazion",
    "cistitis-uretritis",
    "control-de-sintomas-en-paciente-paliativo",
    "dacriocistitis-aguda",
    "diabetes-mellitus-atencion-primaria",
    "dolor-faringeo-agudo",
    "epiescleritis",
    "epilepsia-seguimiento-y-ajustes",
    "epoc-atencion-primaria",
    "escabiosis",
    "fibrilacion-auricular-atencion-primaria",
    "fisura-anal",
    "helicobacter-pylori",
    "hemorroides",
    "herpes-zoster",
    "hiposfagma",
    "hta-atencion-primaria",
    "infeccion-vaginal-aguda",
    "infecciones-agudas-de-transmision-sexual",
    "manejo-de-final-de-vida-atencion-primaria",
    "neumonia-atencion-primaria",
    "otalgia-aguda",
    "otitis",
    "orzuelo",
    "procesos-agudos-glandulas-salivales",
    "procesos-agudos-odontologicos",
    "rinosinusitis-aguda",
    "sifilis",
}

SHARED_PROCEDURE_SLUGS = {
    "drenaje-de-absceso-cutaneo",
    "exploracion-con-especulo",
    "extraccion-de-cuerpo-extrano-ocular-superficial",
    "infiltracion-anestesica-local",
    "sutura-simple",
    "taponamiento-nasal-anterior",
    "tincion-con-fluoresceina",
}

PRIMARY_TOOL_SLUGS = {
    "centor-mcisaac",
    "espirometria",
    "ipaq",
    "medas",
    "score2",
    "score2-op",
}

SHARED_TOOL_SLUGS = {
    "cha2ds2-vasc",
    "crb-65",
    "dosis-pediatrica",
    "has-bled",
    "kg-lb",
    "mantenimiento-hidrico",
    "mg-g-mcg",
    "ml-l-dl",
    "mmol-meq-cuando-aplique",
    "peso-estimado-pediatrico",
    "reposicion-de-perdidas",
    "superficie-corporal",
}

URGENT_TOOL_SLUGS = {
    "anion-gap",
    "calcio-corregido",
    "calculadora-basica-de-vmni",
    "calculo-de-bolos",
    "calculo-orientativo-de-reposicion-de-magnesio",
    "concentracion-reconstitucion",
    "conversor-de-fio2-segun-dispositivo",
    "correccion-qtc",
    "curb-65",
    "deficit-de-agua-libre",
    "deficit-de-sodio",
    "deficit-orientativo-de-potasio",
    "fena",
    "feurea",
    "fluidoterapia-endovenosa",
    "glasgow-coma-scale",
    "goteo-y-perfusion",
    "gradiente-alveolo-arterial",
    "indice-de-shock",
    "news2",
    "objetivo-de-oxigenoterapia",
    "osmolaridad-calculada",
    "pao2-fio2",
    "perc",
    "qsofa",
    "sofa",
    "sodio-corregido-por-glucosa",
    "velocidad-de-infusion-ml-h",
    "wells-para-tep",
    "years",
}

SHARED_DRUG_SLUGS = {
    "amoxicilina",
    "amoxicilina-clavulanico",
    "azitromicina",
    "butilescopolamina",
    "captopril",
    "digoxina",
    "diltiazem",
    "furosemida",
    "haloperidol",
    "ipratropio",
    "levofloxacino",
    "metilprednisolona",
    "morfina",
    "salbutamol",
}

URGENT_DRUG_SLUGS = {
    "adrenalina",
    "amiodarona",
    "ceftriaxona",
    "dobutamina",
    "etomidato",
    "fentanilo",
    "labetalol",
    "midazolam",
    "noradrenalina",
    "propofol",
}

HTML_STRIPPER = re.compile(r"<[^>]+>")
TITLE_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.IGNORECASE | re.DOTALL)
SUMMARY_RE = re.compile(r'<p[^>]*class="[^"]*summary[^"]*"[^>]*>(.*?)</p>', re.IGNORECASE | re.DOTALL)
SEARCH_TERMS_RE = re.compile(r'data-search-terms="([^"]+)"', re.IGNORECASE)
CONTENT_RE = re.compile(r"<(?:h1|h2|h3|h4|p|li|figcaption|small|strong)[^>]*>(.*?)</(?:h1|h2|h3|h4|p|li|figcaption|small|strong)>", re.IGNORECASE | re.DOTALL)
BIBLIO_IGNORED_FILES = {".DS_Store", "INDEX.md"}
BIBLIO_ROOT_BUCKET = "__root__"


def slug_to_title(slug: str) -> str:
    return slug.replace("-", " ").strip().title()


def clean_text(raw: str | None) -> str:
    if not raw:
        return ""
    text = html.unescape(HTML_STRIPPER.sub(" ", raw))
    return " ".join(text.split())


def sort_key(value: str) -> str:
    return unicodedata.normalize("NFKD", value).casefold()


def count_label(count: int, singular: str, plural: str) -> str:
    return singular if count == 1 else plural


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


def build_care_path_meta(care_paths: list[str]) -> tuple[list[str], str]:
    labels = [CARE_PATHS[path]["label"] for path in care_paths]

    if len(labels) == 1:
        pill = labels[0]
    else:
        pill = "Transversal"

    return labels, pill


def detect_protocol_care_paths(slug: str) -> list[str]:
    return ["atencion-primaria"] if slug in PRIMARY_PROTOCOL_SLUGS else ["urgencias"]


def detect_procedure_care_paths(slug: str) -> list[str]:
    if slug in SHARED_PROCEDURE_SLUGS:
        return ["atencion-primaria", "urgencias"]

    return ["urgencias"]


def detect_tool_care_paths(slug: str) -> list[str]:
    if slug in PRIMARY_TOOL_SLUGS:
        return ["atencion-primaria"]
    if slug in SHARED_TOOL_SLUGS:
        return ["atencion-primaria", "urgencias"]
    if slug in URGENT_TOOL_SLUGS:
        return ["urgencias"]

    return ["urgencias"]


def detect_drug_care_paths(slug: str) -> list[str]:
    if slug in SHARED_DRUG_SLUGS:
        return ["atencion-primaria", "urgencias"]
    if slug in URGENT_DRUG_SLUGS:
        return ["urgencias"]

    return ["urgencias"]


def detect_care_paths(section: str, slug: str) -> list[str]:
    if section == "protocolos":
        return detect_protocol_care_paths(slug)
    if section == "procedimientos":
        return detect_procedure_care_paths(slug)
    if section == "herramientas":
        return detect_tool_care_paths(slug)

    return detect_drug_care_paths(slug)


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
    care_paths = detect_care_paths(section, slug)
    care_path_labels, care_path_pill_label = build_care_path_meta(care_paths)
    keyword_parts = [
        title,
        summary,
        SECTION_LABELS[section],
        category,
        " ".join(care_path_labels),
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
        "carePaths": care_paths,
        "carePathLabels": care_path_labels,
        "carePathPillLabel": care_path_pill_label,
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


def list_biblio_files() -> list[Path]:
    if not BIBLIO_DIR.exists():
        return []

    files = [
        path
        for path in BIBLIO_DIR.rglob("*")
        if path.is_file() and path.name not in BIBLIO_IGNORED_FILES
    ]
    return sorted(files, key=lambda path: sort_key(path.relative_to(BIBLIO_DIR).as_posix()))


def format_counter(counter: Counter[str]) -> str:
    items = []
    for key in sorted(counter, key=sort_key):
        label = key[1:].upper() if key.startswith(".") else key
        items.append(f"**{label}** {counter[key]}")
    return ", ".join(items)


def build_biblio_sections(files: list[Path]) -> dict[str, dict[str, list[Path]]]:
    sections: dict[str, dict[str, list[Path]]] = {}

    for path in files:
        relative = path.relative_to(BIBLIO_DIR)
        if len(relative.parts) == 1:
            sections.setdefault("raiz", {}).setdefault(BIBLIO_ROOT_BUCKET, []).append(path)
            continue

        section_name = relative.parts[0]
        subsection_name = relative.parts[1] if len(relative.parts) > 2 else BIBLIO_ROOT_BUCKET
        section_bucket = sections.setdefault(section_name, {})
        file_bucket = section_bucket.setdefault(subsection_name, [])
        file_bucket.append(path)

    return {
        section_name: {
            subsection_name: sorted(
                paths, key=lambda item: sort_key(item.relative_to(BIBLIO_DIR).as_posix())
            )
            for subsection_name, paths in sorted(
                subsection_map.items(), key=lambda item: sort_key(item[0])
            )
        }
        for section_name, subsection_map in sorted(sections.items(), key=lambda item: sort_key(item[0]))
    }


def generate_biblio_index() -> str:
    files = list_biblio_files()
    extension_counts = Counter(path.suffix.lower() or "<sin extensión>" for path in files)
    sections = build_biblio_sections(files)
    subsection_count = sum(len(subsections) for subsections in sections.values())
    generated_at = datetime.now().strftime("%d/%m/%Y %H:%M")

    lines = [
        "# Índice documental de `biblio`",
        "",
        f"Generado automáticamente desde disco el **{generated_at}**.",
        "",
        "## Resumen",
        "",
        f"- Archivos indexados: **{len(files)}**",
        f"- Secciones de primer nivel: **{len(sections)}**",
        f"- Subcarpetas indexadas: **{subsection_count}**",
        f"- Formatos detectados: {format_counter(extension_counts)}" if extension_counts else "- Formatos detectados: sin archivos",
        "- Exclusiones automáticas: `.DS_Store` y el propio `biblio/INDEX.md`",
        "",
        "## Estructura",
        "",
    ]

    for section_name, subsection_map in sections.items():
        section_files = [path for paths in subsection_map.values() for path in paths]
        section_label = "`biblio/` (raíz)" if section_name == "raiz" else f"`biblio/{section_name}`"
        lines.append(
            f"- {section_label}: **{len(section_files)}** {count_label(len(section_files), 'archivo', 'archivos')} en **{len(subsection_map)}** {count_label(len(subsection_map), 'bloque', 'bloques')}"
        )
        for subsection_name, subsection_files in subsection_map.items():
            if subsection_name == BIBLIO_ROOT_BUCKET:
                subsection_label = "`biblio/`" if section_name == "raiz" else f"`biblio/{section_name}`"
            elif section_name == "raiz":
                subsection_label = "`biblio/`"
            else:
                subsection_label = f"`biblio/{section_name}/{subsection_name}`"
            subsection_ext = Counter(path.suffix.lower() or "<sin extensión>" for path in subsection_files)
            lines.append(
                f"  - {subsection_label}: {len(subsection_files)} {count_label(len(subsection_files), 'archivo', 'archivos')} ({format_counter(subsection_ext)})"
            )

    lines.extend([
        "",
        "## Inventario completo",
        "",
    ])

    for section_name, subsection_map in sections.items():
        section_heading = "`biblio/` (raíz)" if section_name == "raiz" else f"`biblio/{section_name}`"
        lines.append(f"### {section_heading}")
        lines.append("")
        for subsection_name, subsection_files in subsection_map.items():
            if subsection_name == BIBLIO_ROOT_BUCKET:
                subsection_heading = "`biblio/`" if section_name == "raiz" else f"`biblio/{section_name}`"
            elif section_name == "raiz":
                subsection_heading = "`biblio/`"
            else:
                subsection_heading = f"`biblio/{section_name}/{subsection_name}`"
            lines.append(
                f"#### {subsection_heading} — {len(subsection_files)} {count_label(len(subsection_files), 'archivo', 'archivos')}"
            )
            lines.append("")
            for path in subsection_files:
                lines.append(f"- `{path.relative_to(ROOT).as_posix()}`")
            lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def generate_registry(entries: list[dict]) -> str:
    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    care_path_payload = json.dumps(CARE_PATHS, ensure_ascii=False, indent=2)
    nav_payload = json.dumps(NAV_ITEMS, ensure_ascii=False, indent=2)
    section_payload = json.dumps(SECTION_SUMMARIES, ensure_ascii=False, indent=2)
    category_order_payload = json.dumps(CATEGORY_ORDER, ensure_ascii=False, indent=2)

    return f"""export const CARE_PATHS = {care_path_payload};

export const NAV_ITEMS = {nav_payload};

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
        "/apps/atencion-primaria/index.html",
        "/apps/urgencias/index.html",
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
    if BIBLIO_DIR.exists():
        (BIBLIO_DIR / "INDEX.md").write_text(generate_biblio_index(), encoding="utf-8")

    counts = {
        "protocolos": sum(1 for entry in entries if entry["section"] == "protocolos"),
        "procedimientos": sum(1 for entry in entries if entry["section"] == "procedimientos"),
        "herramientas": sum(1 for entry in entries if entry["section"] == "herramientas"),
        "vademecum": sum(1 for entry in entries if entry["section"] == "vademecum"),
    }
    print(json.dumps(counts, ensure_ascii=False))


if __name__ == "__main__":
    main()
