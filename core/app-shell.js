import { createHeader } from "../components/header.js";
import { createDrawer, mapHistoryToDrawerItems, mapRegistryToDrawerItems } from "../components/drawer.js";
import { createBottomNav, createNav } from "../components/nav.js";
import { createToolbar } from "../components/toolbar.js";
import { resolveAppUrl, withBasePath } from "./base-path.js";
import { Router } from "./router.js";
import { SearchEngine } from "./search.js";
import { AppStorage } from "./storage.js";
import { CATEGORY_ORDER, NAV_ITEMS, REGISTRY, SECTION_SUMMARIES } from "./registry.js";
import {
  clamp,
  createElement,
  createFragment,
  formatTimestamp,
  groupBy,
  isExternalUrl,
  normalizeText,
  slugify,
  sumNumbers,
  titleFromSection,
} from "./utils.js";

const APP_ASSET_VERSION = "20260327g";
const SEARCH_FILTERS = [
  { value: "todos", label: "Todo" },
  { value: "protocolos", label: "Protocolos" },
  { value: "procedimientos", label: "Procedimientos" },
  { value: "herramientas", label: "Herramientas" },
  { value: "vademecum", label: "Vademécum" },
  { value: "favoritos", label: "Favoritos" },
  { value: "historial", label: "Historial" },
];

const HOME_PRIMARY_SECTIONS = [
  {
    path: "/protocolos",
    title: "Protocolos",
    copy: "Guías clínicas rápidas para decisiones frecuentes.",
    tone: "accent",
  },
  {
    path: "/procedimientos",
    title: "Procedimientos",
    copy: "Técnicas paso a paso con puntos críticos y seguridad.",
    tone: "warning",
  },
  {
    path: "/herramientas",
    title: "Herramientas",
    copy: "Scores y calculadoras de apoyo clínico.",
    tone: "success",
  },
  {
    path: "/vademecum",
    title: "Vademécum",
    copy: "Medicamentos incorporados en la app y referencia oficial.",
    tone: "accent",
  },
];

const HOME_UTILITY_SECTIONS = [
  {
    path: "/favoritos",
    title: "Favoritos",
    copy: "Accesos guardados para consulta rápida.",
    tone: "neutral",
  },
];

const CIMA_ADVANCED_SEARCH_URL = "https://cima.aemps.es/cima/publico/buscadoravanzado.html";
const CIMA_API_SEARCH_URL = "https://cima.aemps.es/cima/rest/medicamentos?nombre=";
const CIMA_DIRECT_REFERENCE_OVERRIDES = new Map([
  [
    "amiodarona",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/85739/FT_85739.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "digoxina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/34566/FT_34566.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "diltiazem",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/77587/FT_77587.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "dobutamina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/61952/FT_61952.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "etomidato",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/64095/FT_64095.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "fentanilo",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/71854/FT_71854.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "haloperidol",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/58343/FT_58343.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "ipratropio",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/70939/FT_70939.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "labetalol",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/89082/FT_89082.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "levosimendan",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/86667/FT_86667.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "metilprednisolona",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/71864/FT_71864.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "midazolam",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/63936/FT_63936.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "noradrenalina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/62002/FT_62002.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "propofol",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/84394/FT_84394.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "salbutamol",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/65850/FT_65850.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "furosemida",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/62746/FT_62746.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "captopril",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/65422/FT_65422.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "morfina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/54339/FT_54339.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "butilescopolamina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/52237/FT_52237.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "amoxicilina",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/83628/FT_83628.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
  [
    "amoxicilina-clavulanico",
    {
      url: "https://cima.aemps.es/cima/dochtml/ft/82040/FT_82040.html",
      label: "Abrir ficha oficial en CIMA/AEMPS",
    },
  ],
]);
const PENDING_VADEMECUM_MEDICATIONS = [
  {
    slug: "captopril",
    title: "Captopril",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "crisis-hipertensiva" }],
  },
  {
    slug: "urapidilo",
    title: "Urapidilo",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "crisis-hipertensiva" }],
  },
  {
    slug: "diltiazem",
    title: "Diltiazem",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "fibrilacion-auricular" }],
  },
  {
    slug: "verapamilo",
    title: "Verapamilo",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "fibrilacion-auricular" }],
  },
  {
    slug: "digoxina",
    title: "Digoxina",
    aliases: [],
    sourceRefs: [
      { section: "protocolos", slug: "fibrilacion-auricular" },
      { section: "protocolos", slug: "hipopotasemia" },
    ],
  },
  {
    slug: "midazolam",
    title: "Midazolam",
    aliases: [],
    sourceRefs: [
      { section: "procedimientos", slug: "cardioversion-electrica-sincronizada" },
      { section: "protocolos", slug: "manejo-de-final-de-vida" },
    ],
  },
  {
    slug: "etomidato",
    title: "Etomidato",
    aliases: [],
    sourceRefs: [{ section: "procedimientos", slug: "cardioversion-electrica-sincronizada" }],
  },
  {
    slug: "salbutamol",
    title: "Salbutamol",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "asma-exacerbacion-asmatica" }],
  },
  {
    slug: "ipratropio",
    title: "Ipratropio",
    aliases: ["bromuro de ipratropio"],
    sourceRefs: [{ section: "protocolos", slug: "asma-exacerbacion-asmatica" }],
  },
  {
    slug: "dobutamina",
    title: "Dobutamina",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "insuficiencia-cardiaca-aguda" }],
  },
  {
    slug: "furosemida",
    title: "Furosemida",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "insuficiencia-cardiaca-aguda" }],
  },
  {
    slug: "levosimendan",
    title: "Levosimendán",
    aliases: ["levosimendan"],
    sourceRefs: [{ section: "protocolos", slug: "insuficiencia-cardiaca-aguda" }],
  },
  {
    slug: "haloperidol",
    title: "Haloperidol",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "manejo-de-final-de-vida" }],
  },
  {
    slug: "butilescopolamina",
    title: "Butilescopolamina",
    aliases: ["butilescopolamina", "butil bromuro de escopolamina", "hioscina butilbromuro"],
    sourceRefs: [{ section: "protocolos", slug: "manejo-de-final-de-vida" }],
  },
  {
    slug: "morfina",
    title: "Morfina",
    aliases: ["cloruro morfico", "cloruro mórfico"],
    sourceRefs: [{ section: "protocolos", slug: "manejo-de-final-de-vida" }],
  },
  {
    slug: "amoxicilina",
    title: "Amoxicilina",
    aliases: [],
    sourceRefs: [{ section: "protocolos", slug: "neumonia" }],
  },
  {
    slug: "amoxicilina-clavulanico",
    title: "Amoxicilina-clavulánico",
    aliases: ["amoxicilina clavulanico", "amoxicilina-clavulanico"],
    sourceRefs: [{ section: "protocolos", slug: "neumonia" }],
  },
];
const ENTRY_PROGRESS_OVERRIDES = new Map([
  ["protocolos:asma-exacerbacion-asmatica", { label: "Base", tone: "base" }],
  ["protocolos:exacerbacion-aguda-de-epoc", { label: "Base", tone: "base" }],
  ["protocolos:neumonia", { label: "Base", tone: "base" }],
  ["protocolos:hipopotasemia", { label: "Base", tone: "base" }],
  ["protocolos:fibrilacion-auricular", { label: "Base", tone: "base" }],
  ["protocolos:crisis-hipertensiva", { label: "Base", tone: "base" }],
  ["protocolos:manejo-de-final-de-vida", { label: "Base", tone: "base" }],
  ["protocolos:traumatismo-ocular", { label: "Base", tone: "base" }],
  ["protocolos:insuficiencia-cardiaca-aguda", { label: "Completo", tone: "complete" }],
  ["procedimientos:cardioversion-electrica-sincronizada", { label: "Base", tone: "base" }],
  ["procedimientos:ventilacion-mecanica-no-invasiva", { label: "Base", tone: "base" }],
]);

function resolveVersionedUrl(path) {
  const url = new URL(resolveAppUrl(path), window.location.href);
  url.searchParams.set("v", APP_ASSET_VERSION);
  return url.toString();
}

const TOOL_WIDGETS = {
  "cha2ds2-vasc": {
    title: "CHA2DS2-VASc",
    hint: "Estimación de riesgo tromboembólico en fibrilación auricular no valvular.",
    fields: [
      { name: "congestive", label: "Insuficiencia cardiaca", type: "checkbox" },
      { name: "hypertension", label: "Hipertensión arterial", type: "checkbox" },
      {
        name: "age",
        label: "Edad",
        type: "select",
        options: [
          { value: "0", label: "< 65 años" },
          { value: "1", label: "65-74 años" },
          { value: "2", label: ">= 75 años" },
        ],
      },
      { name: "diabetes", label: "Diabetes", type: "checkbox" },
      { name: "stroke", label: "Ictus/AIT/tromboembolismo previo", type: "checkbox" },
      { name: "vascular", label: "Enfermedad vascular", type: "checkbox" },
      { name: "female", label: "Sexo femenino", type: "checkbox" },
    ],
    compute(values) {
      const total =
        Number(values.congestive) +
        Number(values.hypertension) +
        Number(values.age) +
        Number(values.diabetes) +
        Number(values.stroke) * 2 +
        Number(values.vascular) +
        Number(values.female);

      const note =
        total >= 2
          ? "Riesgo tromboembólico relevante: valorar anticoagulación salvo contraindicación."
          : total === 1
            ? "Riesgo intermedio: individualizar según contexto clínico y preferencias."
            : "Riesgo bajo: anticoagulación no suele ser necesaria si no hay otros factores.";

      return {
        primary: `${total} puntos`,
        secondary: note,
        footer: "Escala útil como apoyo; no sustituye la valoración clínica integral.",
      };
    },
  },
  "has-bled": {
    title: "HAS-BLED",
    hint: "Apoyo para estimar riesgo hemorrágico y detectar factores modificables.",
    fields: [
      { name: "hypertension", label: "HTA no controlada", type: "checkbox" },
      { name: "renal", label: "Insuficiencia renal", type: "checkbox" },
      { name: "hepatic", label: "Enfermedad hepática", type: "checkbox" },
      { name: "stroke", label: "Ictus previo", type: "checkbox" },
      { name: "bleeding", label: "Sangrado previo/predisposición", type: "checkbox" },
      { name: "inr", label: "INR lábil", type: "checkbox" },
      { name: "elderly", label: "Edad > 65 años", type: "checkbox" },
      { name: "drugs", label: "Fármacos o alcohol", type: "checkbox" },
    ],
    compute(values) {
      const total = sumNumbers(Object.values(values));
      return {
        primary: `${total} puntos`,
        secondary:
          total >= 3
            ? "Riesgo hemorrágico alto: corregir factores reversibles y vigilar estrechamente."
            : "Riesgo hemorrágico no alto: mantener vigilancia clínica y factores modificables.",
        footer: "Una puntuación alta no contraindica por sí sola la anticoagulación.",
      };
    },
  },
  "anion-gap": {
    title: "Anion gap",
    hint: "Na - (Cl + HCO3). Útil para orientar acidosis metabólica.",
    fields: [
      { name: "sodium", label: "Sodio (mEq/L)", type: "number", step: "0.1" },
      { name: "chloride", label: "Cloro (mEq/L)", type: "number", step: "0.1" },
      { name: "bicarbonate", label: "Bicarbonato (mEq/L)", type: "number", step: "0.1" },
      { name: "albumin", label: "Albúmina (g/dL, opcional)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.sodium || !values.chloride || !values.bicarbonate) {
        return null;
      }

      const base = Number(values.sodium) - (Number(values.chloride) + Number(values.bicarbonate));
      const corrected = values.albumin ? base + 2.5 * (4 - Number(values.albumin)) : base;
      return {
        primary: `${corrected.toFixed(1)} mEq/L`,
        secondary: values.albumin ? `Corregido por albúmina. AG basal: ${base.toFixed(1)} mEq/L.` : `AG estimado: ${base.toFixed(1)} mEq/L.`,
        footer: corrected > 12 ? "Compatible con anion gap elevado si el laboratorio usa rango habitual." : "No sugiere anion gap alto con rango habitual.",
      };
    },
  },
  "dosis-pediatrica": {
    title: "Dosis pediátrica",
    hint: "Calculadora genérica para fármacos dosificados por peso.",
    fields: [
      { name: "weight", label: "Peso (kg)", type: "number", step: "0.1" },
      { name: "dosePerKg", label: "Dosis (mg/kg)", type: "number", step: "0.01" },
      { name: "maxDose", label: "Dosis máxima (mg, opcional)", type: "number", step: "0.1" },
      { name: "concentration", label: "Concentración (mg/mL, opcional)", type: "number", step: "0.01" },
    ],
    compute(values) {
      if (!values.weight || !values.dosePerKg) {
        return null;
      }

      const calculatedDose = Number(values.weight) * Number(values.dosePerKg);
      const finalDose = values.maxDose ? Math.min(calculatedDose, Number(values.maxDose)) : calculatedDose;
      const volume = values.concentration ? finalDose / Number(values.concentration) : null;
      return {
        primary: `${finalDose.toFixed(2)} mg`,
        secondary: volume ? `Equivale a ${volume.toFixed(2)} mL con la concentración indicada.` : `Dosis teórica por peso: ${calculatedDose.toFixed(2)} mg.`,
        footer: values.maxDose && calculatedDose > values.maxDose ? "La dosis se ha limitado por el máximo diario introducido." : "Verifica siempre formulación y intervalo posológico.",
      };
    },
  },
  "peso-estimado-pediatrico": {
    title: "Peso estimado pediátrico",
    hint: "Estimación orientativa cuando no se dispone de peso medido.",
    fields: [
      { name: "age", label: "Edad (años)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.age) {
        return null;
      }

      const age = Number(values.age);
      const estimate = age <= 1 ? (age * 12 + 9) / 2 : age <= 5 ? 2 * age + 8 : 3 * age + 7;
      return {
        primary: `${estimate.toFixed(1)} kg`,
        secondary: "Estimación orientativa basada en fórmulas rápidas de uso clínico.",
        footer: "Sustituir por peso real tan pronto como esté disponible.",
      };
    },
  },
  "superficie-corporal": {
    title: "Superficie corporal",
    hint: "Fórmula de Mosteller: sqrt((peso x talla)/3600).",
    fields: [
      { name: "weight", label: "Peso (kg)", type: "number", step: "0.1" },
      { name: "height", label: "Talla (cm)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.weight || !values.height) {
        return null;
      }

      const bsa = Math.sqrt((Number(values.weight) * Number(values.height)) / 3600);
      return {
        primary: `${bsa.toFixed(2)} m²`,
        secondary: "Útil para dosificación por superficie corporal.",
        footer: "Revisar siempre la indicación concreta del fármaco o protocolo.",
      };
    },
  },
  "goteo-y-perfusion": {
    title: "Goteo y perfusión",
    hint: "Convierte volumen y tiempo en gotas por minuto.",
    fields: [
      { name: "volume", label: "Volumen (mL)", type: "number", step: "0.1" },
      { name: "time", label: "Tiempo (min)", type: "number", step: "1" },
      {
        name: "factor",
        label: "Factor de goteo",
        type: "select",
        options: [
          { value: "20", label: "Macrogotero 20 gtt/mL" },
          { value: "60", label: "Microgotero 60 gtt/mL" },
        ],
      },
    ],
    compute(values) {
      if (!values.volume || !values.time || !values.factor) {
        return null;
      }

      const drops = (Number(values.volume) * Number(values.factor)) / Number(values.time);
      return {
        primary: `${drops.toFixed(0)} gotas/min`,
        secondary: `Equivale a ${(Number(values.volume) / (Number(values.time) / 60)).toFixed(1)} mL/h.`,
        footer: "Ajusta según tolerancia clínica y dispositivo real.",
      };
    },
  },
  "velocidad-de-infusion-ml-h": {
    title: "Velocidad de infusión",
    hint: "Cálculo directo de volumen por hora.",
    fields: [
      { name: "volume", label: "Volumen total (mL)", type: "number", step: "0.1" },
      { name: "hours", label: "Tiempo (h)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.volume || !values.hours) {
        return null;
      }

      const rate = Number(values.volume) / Number(values.hours);
      return {
        primary: `${rate.toFixed(1)} mL/h`,
        secondary: `Tiempo total estimado: ${Number(values.hours).toFixed(2)} horas.`,
        footer: "Verifica la concentración final antes de iniciar la perfusión.",
      };
    },
  },
  "concentracion-reconstitucion": {
    title: "Concentración / reconstitución",
    hint: "Apoyo rápido para obtener concentración final tras dilución.",
    fields: [
      { name: "dose", label: "Cantidad total de fármaco (mg)", type: "number", step: "0.1" },
      { name: "volume", label: "Volumen final (mL)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.dose || !values.volume) {
        return null;
      }

      const concentration = Number(values.dose) / Number(values.volume);
      return {
        primary: `${concentration.toFixed(2)} mg/mL`,
        secondary: `${Number(values.dose).toFixed(1)} mg en ${Number(values.volume).toFixed(1)} mL.`,
        footer: "Corrobora compatibilidades, estabilidad y diluyente antes de administrar.",
      };
    },
  },
  "fluidoterapia-endovenosa": {
    title: "Fluidoterapia endovenosa",
    hint: "Ayuda rápida para un bolo inicial orientativo.",
    fields: [
      { name: "weight", label: "Peso (kg)", type: "number", step: "0.1" },
      {
        name: "intensity",
        label: "Estrategia",
        type: "select",
        options: [
          { value: "10", label: "Bolo moderado 10 mL/kg" },
          { value: "20", label: "Bolo estándar 20 mL/kg" },
          { value: "30", label: "Expansión intensa 30 mL/kg" },
        ],
      },
    ],
    compute(values) {
      if (!values.weight || !values.intensity) {
        return null;
      }

      const total = Number(values.weight) * Number(values.intensity);
      return {
        primary: `${total.toFixed(0)} mL`,
        secondary: `Equivale a ${values.intensity} mL/kg.`,
        footer: "No sustituye la revaloración clínica seriada ni las indicaciones específicas del cuadro.",
      };
    },
  },
  "mantenimiento-hidrico": {
    title: "Mantenimiento hídrico",
    hint: "Holliday-Segar para necesidades basales orientativas.",
    fields: [
      { name: "weight", label: "Peso (kg)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.weight) {
        return null;
      }

      const weight = Number(values.weight);
      let daily = 0;

      if (weight <= 10) {
        daily = weight * 100;
      } else if (weight <= 20) {
        daily = 1000 + (weight - 10) * 50;
      } else {
        daily = 1500 + (weight - 20) * 20;
      }

      return {
        primary: `${daily.toFixed(0)} mL/día`,
        secondary: `${(daily / 24).toFixed(1)} mL/h.`,
        footer: "Ajustar por fiebre, pérdidas, insuficiencia cardiaca o renal y contexto hemodinámico.",
      };
    },
  },
  "reposicion-de-perdidas": {
    title: "Reposición de pérdidas",
    hint: "Suma pérdidas objetivadas a la reposición planificada.",
    fields: [
      { name: "ongoingLoss", label: "Pérdidas estimadas (mL)", type: "number", step: "1" },
      { name: "hours", label: "Tiempo de reposición (h)", type: "number", step: "0.1" },
    ],
    compute(values) {
      if (!values.ongoingLoss || !values.hours) {
        return null;
      }

      const rate = Number(values.ongoingLoss) / Number(values.hours);
      return {
        primary: `${rate.toFixed(1)} mL/h`,
        secondary: `${Number(values.ongoingLoss).toFixed(0)} mL a reponer en ${Number(values.hours).toFixed(1)} horas.`,
        footer: "Valora composición de las pérdidas y corrige electrolitos si procede.",
      };
    },
  },
  "calculo-de-bolos": {
    title: "Cálculo de bolos",
    hint: "Apoyo rápido para bolos IV basados en peso y concentración.",
    fields: [
      { name: "weight", label: "Peso (kg)", type: "number", step: "0.1" },
      { name: "dosePerKg", label: "Dosis (mg/kg)", type: "number", step: "0.01" },
      { name: "concentration", label: "Concentración (mg/mL)", type: "number", step: "0.01" },
    ],
    compute(values) {
      if (!values.weight || !values.dosePerKg || !values.concentration) {
        return null;
      }

      const dose = Number(values.weight) * Number(values.dosePerKg);
      const volume = dose / Number(values.concentration);
      return {
        primary: `${volume.toFixed(2)} mL`,
        secondary: `${dose.toFixed(2)} mg totales.`,
        footer: "Confirmar concentración final, vía y velocidad de administración.",
      };
    },
  },
};

class MFYUApp {
  constructor(root) {
    this.root = root;
    this.storage = new AppStorage();
    this.searchEngine = new SearchEngine({ registry: REGISTRY, storage: this.storage });
    this.router = new Router({
      registry: REGISTRY,
      onRouteChange: (route) => {
        this.renderRoute(route);
      },
    });
    this.fragmentCache = new Map();
    this.cimaLookupCache = new Map();
    this.preferences = this.storage.getPreferences();
    this.vademecumLookupNonce = 0;
    this.state = {
      currentRoute: null,
      searchQuery: this.preferences.lastSearch || "",
      searchFilter: "todos",
      catalogFilters: {},
      vademecumTab: "fichas",
      vademecumQuery: "",
      isOffline: !navigator.onLine,
      sidebarOpen: window.innerWidth > 1180,
      drawerOpen: window.innerWidth > 1180,
      bottomNavHidden: false,
      lastContentScrollTop: 0,
    };
    this.algorithmState = {
      isOpen: false,
      data: null,
      currentNodeId: null,
      path: [],
      originEntry: null,
    };
  }

  init() {
    this.renderShell();
    this.bindEvents();
    this.installCompatApi();
    this.registerServiceWorker();
    this.router.start();
  }

  renderShell() {
    this.root.innerHTML = "";

    this.shell = createElement("div", "app-shell");
    this.sidebarSlot = createElement("div");
    this.main = createElement("main", "shell-main");
    this.headerSlot = createElement("div");
    this.contentSlot = createElement("section", "shell-content");
    this.drawerSlot = createElement("div");
    this.bottomNavSlot = createElement("div");
    this.signatureSlot = createElement("div", "shell-signature-slot");
    this.algorithmSheet = createElement("section", "algorithm-sheet");
    this.algorithmSheet.setAttribute("aria-hidden", "true");
    this.signatureSlot.innerHTML = `
      <div class="shell-signature" aria-hidden="true">
        <img src="${resolveAppUrl("assets/icons/logo.png")}" alt="" />
      </div>
    `;

    this.main.append(this.headerSlot, this.contentSlot);
    this.shell.append(this.sidebarSlot, this.main, this.drawerSlot);
    this.root.append(this.shell, this.bottomNavSlot, this.signatureSlot, this.algorithmSheet);

    this.refreshChrome();
    this.syncAdaptiveChrome({ forceVisible: true });
  }

  bindEvents() {
    this.root.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]");

      if (action) {
        const type = action.dataset.action;

        if (type === "toggle-drawer") {
          this.state.sidebarOpen = !this.state.sidebarOpen;
          this.refreshChrome();
          return;
        }

        if (type === "toggle-favorite") {
          this.toggleFavorite(action.dataset.entryId);
          return;
        }

        if (type === "open-algorithm") {
          this.openAlgorithm(
            action.dataset.algorithmId,
            this.state.currentRoute && this.state.currentRoute.entry ? this.state.currentRoute.entry : null,
          );
          return;
        }

        if (type === "algorithm-close") {
          this.closeAlgorithm();
          return;
        }

        if (type === "algorithm-back") {
          this.goBackAlgorithm();
          return;
        }

        if (type === "algorithm-reset") {
          this.resetAlgorithm();
          return;
        }

        if (type === "algorithm-option") {
          this.selectAlgorithmOption(action.dataset.optionIndex);
          return;
        }

        if (type === "toggle-context") {
          this.state.drawerOpen = !this.state.drawerOpen;
          this.refreshChrome();
          return;
        }
      }

      const filterButton = event.target.closest("[data-search-filter]");

      if (filterButton) {
        this.state.searchFilter = filterButton.dataset.searchFilter;
        this.renderSearchView(this.contentSlot.querySelector('[data-app-view="buscar"]'));
      }

      const catalogFilter = event.target.closest("[data-filter]");

      if (catalogFilter && this.state.currentRoute && this.state.currentRoute.kind === "app") {
        this.state.catalogFilters[this.state.currentRoute.appId] = catalogFilter.dataset.filter;
        this.refreshChrome();
        this.enhanceAppView(this.state.currentRoute);
      }

      const vademecumTab = event.target.closest("[data-vademecum-tab]");

      if (vademecumTab) {
        this.state.vademecumTab = vademecumTab.dataset.vademecumTab;
        this.renderVademecumView(this.contentSlot.querySelector('[data-app-view="vademecum"]'));
        this.syncAdaptiveChrome({ forceVisible: true });
      }

      const vademecumQueryTrigger = event.target.closest("[data-vademecum-query]");

      if (vademecumQueryTrigger) {
        event.preventDefault();
        this.state.vademecumQuery = vademecumQueryTrigger.dataset.vademecumQuery || "";
        const vademecumView = this.contentSlot.querySelector('[data-app-view="vademecum"]');
        if (vademecumView) {
          const input = vademecumView.querySelector("[data-vademecum-search]");
          if (input) {
            input.value = this.state.vademecumQuery;
          }
          this.renderVademecumView(vademecumView);
          this.syncAdaptiveChrome({ forceVisible: true });
        }
        return;
      }

      const suggestionLink = event.target.closest("[data-suggestion-route]");

      if (suggestionLink) {
        event.preventDefault();
        this.router.navigate(suggestionLink.dataset.suggestionRoute);
        this.hideSuggestions();
        return;
      }

      if (!event.target.closest("[data-search-suggestions]") && !event.target.closest("[data-global-search-input]")) {
        this.hideSuggestions();
      }
    });

    this.root.addEventListener("input", (event) => {
      const target = event.target;

      if (target.matches("[data-global-search-input], [data-search-page-input]")) {
        this.state.searchQuery = target.value;
        this.storage.setPreference("lastSearch", this.state.searchQuery);
        this.syncSearchInputs(target);
        this.renderSuggestions();

        if (this.state.currentRoute && this.state.currentRoute.appId === "buscar") {
          this.renderSearchView(this.contentSlot.querySelector('[data-app-view="buscar"]'));
        }
      }

      if (target.matches("[data-vademecum-search]")) {
        this.state.vademecumQuery = target.value;
        this.renderVademecumView(this.contentSlot.querySelector('[data-app-view="vademecum"]'));
      }
    });

    this.root.addEventListener("focusin", (event) => {
      if (!this.isCompactViewport()) {
        return;
      }

      if (event.target.matches("input, textarea, select")) {
        this.state.bottomNavHidden = true;
        this.syncAdaptiveChrome();
      }
    });

    this.root.addEventListener("focusout", () => {
      if (!this.isCompactViewport()) {
        return;
      }

      queueMicrotask(() => {
        const active = document.activeElement;
        if (active && active.matches && active.matches("input, textarea, select")) {
          return;
        }
        this.state.bottomNavHidden = false;
        this.syncAdaptiveChrome();
      });
    });

    this.contentSlot.addEventListener(
      "scroll",
      () => {
        this.handleContentScroll();
      },
      { passive: true },
    );
    window.addEventListener(
      "scroll",
      () => {
        this.handleContentScroll();
      },
      { passive: true },
    );

    window.addEventListener("online", () => {
      this.state.isOffline = false;
      this.refreshChrome();
    });

    window.addEventListener("offline", () => {
      this.state.isOffline = true;
      this.refreshChrome();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1180) {
        this.state.sidebarOpen = true;
        this.state.drawerOpen = true;
      }
      this.state.bottomNavHidden = false;
      this.state.lastContentScrollTop = Math.max(window.scrollY || 0, this.contentSlot ? this.contentSlot.scrollTop : 0);
      this.syncAdaptiveChrome({ forceVisible: true });
    });
  }

  installCompatApi() {
    window.app = {
      navigate: (path) => this.router.navigate(path),
      route: (event, path) => {
        if (event) {
          event.preventDefault();
        }
        this.router.navigate(path);
      },
      openAlgorithm: (algorithmId) =>
        this.openAlgorithm(
          algorithmId,
          this.state.currentRoute && this.state.currentRoute.entry ? this.state.currentRoute.entry : null,
        ),
      openTool: (slug) => this.openEntryBySlug("herramientas", slug),
      openDrug: (slug) => this.openEntryBySlug("vademecum", slug),
      toggleFavorite: (entryId) => this.toggleFavorite(entryId),
    };
  }

  refreshChrome() {
    const route = this.state.currentRoute;
    const currentPath = route && route.path ? route.path : "/";
    const isHome = !route || route.appId === "inicio";
    const title =
      isHome
        ? "MFyU aap"
        : route && route.entry && route.entry.title
          ? route.entry.title
          : titleFromSection(route && route.appId ? route.appId : "inicio");
    const subtitle =
      route && route.kind === "app" && route.appId && route.appId !== "inicio"
        ? route.appId === "vademecum"
          ? "Fichas farmacológicas internas realmente disponibles y consulta oficial restringida a CIMA/AEMPS."
          : SECTION_SUMMARIES[route.appId] || ""
        : "";

    this.sidebarSlot.replaceChildren(createNav({ items: NAV_ITEMS, currentPath }));
    this.drawerSlot.replaceChildren(...(isHome ? [] : [this.buildContextDrawer(route)]));
    this.headerSlot.replaceChildren(
      createHeader({
        title,
        subtitle,
        isOffline: this.state.isOffline,
        searchValue: this.state.searchQuery,
        showContext: !isHome,
        homeMode: isHome,
      }),
    );
    this.bottomNavSlot.replaceChildren(createBottomNav({ items: NAV_ITEMS.filter((item) => item.id !== "favoritos"), currentPath }));
    this.shell.classList.toggle("is-home", isHome);
    this.root.classList.toggle("is-home-route", isHome);

    if (window.innerWidth <= 1180) {
      if (this.sidebarSlot.firstElementChild) {
        this.sidebarSlot.firstElementChild.classList.toggle("is-open", this.state.sidebarOpen);
      }
      if (this.drawerSlot.firstElementChild) {
        this.drawerSlot.firstElementChild.classList.toggle("is-open", this.state.drawerOpen);
      }
    }

    this.syncAdaptiveChrome();

    document.title = route && route.entry && route.entry.title ? `${route.entry.title} · MFyU aap` : `${title} · MFyU aap`;
  }

  isCompactViewport() {
    return window.innerWidth <= 1180;
  }

  syncAdaptiveChrome({ forceVisible = false } = {}) {
    const compact = this.isCompactViewport();
    const bottomNav = this.bottomNavSlot && this.bottomNavSlot.firstElementChild ? this.bottomNavSlot.firstElementChild : null;

    if (!compact) {
      this.state.bottomNavHidden = false;
      this.root.classList.remove("has-mobile-nav", "has-retracted-bottom-nav");
      if (bottomNav) {
        bottomNav.classList.remove("is-retracted");
      }
      if (this.signatureSlot) {
        this.signatureSlot.classList.remove("is-retracted");
      }
      return;
    }

    if (forceVisible) {
      this.state.bottomNavHidden = false;
    }

    this.root.classList.add("has-mobile-nav");
    this.root.classList.toggle("has-retracted-bottom-nav", this.state.bottomNavHidden);

    if (bottomNav) {
      bottomNav.classList.toggle("is-retracted", this.state.bottomNavHidden);
    }

    if (this.signatureSlot) {
      this.signatureSlot.classList.toggle("is-retracted", this.state.bottomNavHidden);
    }
  }

  handleContentScroll() {
    if (!this.isCompactViewport() || !this.contentSlot) {
      return;
    }

    if (!this.state.currentRoute || this.state.currentRoute.appId === "inicio") {
      if (this.state.bottomNavHidden) {
        this.state.bottomNavHidden = false;
        this.syncAdaptiveChrome();
      }
      this.state.lastContentScrollTop = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);
      return;
    }

    const scrollTop = Math.max(
      0,
      window.scrollY || document.documentElement.scrollTop || 0,
      this.contentSlot.scrollTop || 0,
    );
    const previous = this.state.lastContentScrollTop || 0;
    const delta = scrollTop - previous;
    const nearTop = scrollTop < 28;
    let nextHidden = this.state.bottomNavHidden;

    if (nearTop) {
      nextHidden = false;
    } else if (delta > 16 && scrollTop > 104) {
      nextHidden = true;
    } else if (delta < -10) {
      nextHidden = false;
    }

    this.state.lastContentScrollTop = scrollTop;

    if (nextHidden !== this.state.bottomNavHidden) {
      this.state.bottomNavHidden = nextHidden;
      this.syncAdaptiveChrome();
    }
  }

  buildContextDrawer(route) {
    const historyItems = this.storage.getHistory().slice(0, 6);
    const favoriteEntries = this.storage
      .getFavorites()
      .map((id) => REGISTRY.byId.get(id))
      .filter(Boolean)
      .slice(0, 6);

    if (!route || route.appId === "inicio") {
      return createDrawer({
        title: "Atajos clínicos",
        sections: [
          {
            type: "links",
            title: "Recientes",
            items: mapHistoryToDrawerItems(historyItems),
            emptyText: "Aún no hay historial registrado.",
          },
          {
            type: "links",
            title: "Favoritos",
            items: mapRegistryToDrawerItems(favoriteEntries),
            emptyText: "Todavía no hay favoritos guardados.",
          },
        ],
      });
    }

    if (route.kind === "content" && route.entry) {
      const relatedEntries = (route.entry.relatedEntryIds || [])
        .map((id) => REGISTRY.byId.get(id))
        .filter(Boolean);

      return createDrawer({
        title: route.entry.title,
        sections: [
          {
            type: "links",
            title: "Relacionados",
            items: mapRegistryToDrawerItems(relatedEntries),
            emptyText: "No hay contenidos relacionados disponibles en esta ficha.",
          },
          {
            type: "links",
            title: "Historial reciente",
            items: mapHistoryToDrawerItems(historyItems),
            emptyText: "Todavía no hay aperturas recientes en esta vista.",
          },
        ],
      });
    }

    const sectionHistoryItems = historyItems.filter((item) => {
      const entry = REGISTRY.byId.get(item.id);
      return entry && entry.section === route.appId;
    });
    const sectionFavorites = favoriteEntries.filter((entry) => entry.section === route.appId);

    return createDrawer({
      title: titleFromSection(route.appId),
      sections: [
        {
          type: "links",
          title: "Recientes",
          items: mapHistoryToDrawerItems(sectionHistoryItems),
          emptyText: route.appId === "vademecum" ? "Todavía no has abierto fichas de esta sección." : "Todavía no hay aperturas recientes en esta sección.",
        },
        {
          type: "links",
          title: "Favoritos",
          items: mapRegistryToDrawerItems(sectionFavorites),
          emptyText: route.appId === "vademecum" ? "No hay medicamentos guardados en esta sección." : "Sin favoritos guardados en esta sección.",
        },
      ],
    });
  }

  async renderRoute(route) {
    this.state.currentRoute = route;
    this.state.bottomNavHidden = false;
    this.state.lastContentScrollTop = 0;
    this.refreshChrome();
    this.hideSuggestions();
    this.contentSlot.classList.add("is-loading");

    try {
      const html = await this.fetchFragment(route.source);
      this.contentSlot.innerHTML = html;
      this.contentSlot.classList.remove("is-loading");
      this.contentSlot.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });

      if (route.kind === "content" && route.entry) {
        this.enhanceContentView(route);
      } else {
        this.enhanceAppView(route);
      }

      if (route.kind === "not-found") {
        this.showNotFound(route);
      }

      this.syncAdaptiveChrome({ forceVisible: true });
    } catch (error) {
      this.contentSlot.classList.remove("is-loading");
      this.contentSlot.innerHTML = `
        <section class="app-screen">
          <div class="surface-panel">
            <div class="section-head">
              <h1>Contenido no disponible</h1>
              <p>Esta vista no está disponible ahora. Vuelve a Inicio o usa Buscar para continuar.</p>
            </div>
            <div class="toolbar-actions">
              <a class="toolbar-button is-primary" href="${withBasePath("/")}">Ir a Inicio</a>
              <a class="toolbar-button" href="${withBasePath("/buscar")}">Abrir Buscar</a>
            </div>
          </div>
        </section>
      `;
      this.contentSlot.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });
      this.syncAdaptiveChrome({ forceVisible: true });
    }

    if (window.innerWidth <= 1180) {
      this.state.sidebarOpen = false;
      this.state.drawerOpen = false;
      this.refreshChrome();
    }
  }

  async fetchFragment(source) {
    if (this.fragmentCache.has(source)) {
      return this.fragmentCache.get(source);
    }

    const response = await fetch(resolveVersionedUrl(source));

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${source}`);
    }

    const html = await response.text();
    this.fragmentCache.set(source, html);
    return html;
  }

  enhanceAppView(route) {
    switch (route.appId) {
      case "inicio":
        this.renderHomeView(this.contentSlot.querySelector('[data-app-view="inicio"]'));
        break;
      case "protocolos":
      case "procedimientos":
      case "herramientas":
        this.renderCatalogView(this.contentSlot.querySelector(`[data-app-view="${route.appId}"]`), route.appId);
        break;
      case "vademecum":
        this.renderVademecumView(this.contentSlot.querySelector('[data-app-view="vademecum"]'));
        break;
      case "buscar":
        this.renderSearchView(this.contentSlot.querySelector('[data-app-view="buscar"]'));
        break;
      case "favoritos":
        this.renderFavoritesView(this.contentSlot.querySelector('[data-app-view="favoritos"]'));
        break;
      default:
        break;
    }
  }

  getOrderedCategoryPairs(groupedEntries, section) {
    const explicitOrder = CATEGORY_ORDER[section] || [];
    const pairs = Object.entries(groupedEntries);
    const rank = new Map(explicitOrder.map((category, index) => [category, index]));

    return pairs.sort(([left], [right]) => {
      const leftRank = rank.has(left) ? rank.get(left) : Number.MAX_SAFE_INTEGER;
      const rightRank = rank.has(right) ? rank.get(right) : Number.MAX_SAFE_INTEGER;

      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      return left.localeCompare(right, "es");
    });
  }

  getOrderedCategoriesForSection(section, entries) {
    const groupedEntries = groupBy(entries, "category");

    return this.getOrderedCategoryPairs(groupedEntries, section).map(([category, items]) => ({
      label: `${category} (${items.length})`,
      value: category,
    }));
  }

  renderHomeView(view) {
    if (!view) {
      return;
    }

    const primaryRoot = view.querySelector("[data-home-primary-sections]");
    const utilityRoot = view.querySelector("[data-home-utility-sections]");

    if (primaryRoot) {
      primaryRoot.innerHTML = HOME_PRIMARY_SECTIONS.map((section) => {
        const sectionId = section.path.replace(/^\/+/, "");
        const total = REGISTRY.entries.filter((entry) => entry.section === sectionId).length;
        return this.renderHomeShortcut(section, { count: total });
      }).join("");
    }

    if (utilityRoot) {
      utilityRoot.innerHTML = HOME_UTILITY_SECTIONS.map((section) => this.renderHomeShortcut(section, { compact: true })).join("");
    }
  }

  renderCatalogView(view, section) {
    if (!view) {
      return;
    }

    const root = view.querySelector("[data-catalog-root]");
    const selectedCategory = this.state.catalogFilters[section] || "all";
    const sectionEntries = REGISTRY.entries.filter((entry) => entry.section === section);
    const filteredEntries =
      selectedCategory === "all"
        ? sectionEntries
        : sectionEntries.filter((entry) => entry.category === selectedCategory);
    const groupedEntries = groupBy(filteredEntries, "category");

    root.innerHTML = this.getOrderedCategoryPairs(groupedEntries, section)
      .map(
        ([category, items]) => `
          <section class="catalog-group">
            <div class="catalog-group-title">
              <h2>${category}</h2>
              <span class="catalog-group-count">${items.length} módulos</span>
            </div>
            <div class="catalog-group-grid">
              ${this.sortEntriesForCatalog(section, items).map((entry) => this.renderRegistryCard(entry, { showProgress: true })).join("")}
            </div>
          </section>
        `,
      )
      .join("");
  }

  async renderVademecumView(view) {
    if (!view) {
      return;
    }

    const requestNonce = ++this.vademecumLookupNonce;
    const root = view.querySelector("[data-vademecum-root]");
    const favoritesRoot = view.querySelector("[data-vademecum-favorites]");
    const recentsRoot = view.querySelector("[data-vademecum-recents]");
    const favoritesCount = view.querySelector("[data-vademecum-favorites-count]");
    const recentsCount = view.querySelector("[data-vademecum-recents-count]");
    const buttons = view.querySelectorAll("[data-vademecum-tab]");
    const searchInput = view.querySelector("[data-vademecum-search]");
    const tab = this.state.vademecumTab;
    const rawQuery = (this.state.vademecumQuery || "").trim();
    const query = normalizeText(rawQuery);
    const drugs = REGISTRY.entries.filter((entry) => entry.section === "vademecum");
    const { pendingCatalog } = this.getIndexedDrugCatalog();
    const exactInternalMatch = query ? this.findExactDrugEntry(rawQuery, drugs) : null;
    const exactPendingMatch = query ? this.findExactPendingDrug(rawQuery, pendingCatalog) : null;
    const utilityActions = this.getVademecumUtilityActions(drugs);
    const pediatricCount = drugs.filter((entry) => entry.flags && entry.flags.requiresPediatricDose).length;
    const interactionCount = drugs.filter((entry) => entry.interactions && entry.interactions.length).length;

    if (searchInput) {
      searchInput.value = this.state.vademecumQuery;
    }

    const favorites = this.storage
      .getFavorites()
      .map((id) => REGISTRY.byId.get(id))
      .filter((entry) => entry && entry.section === "vademecum");

    const recents = this.storage
      .getHistory()
      .map((item) => REGISTRY.byId.get(item.id))
      .filter((entry) => entry && entry.section === "vademecum");
    const favoritesGroup = favoritesRoot ? favoritesRoot.closest(".catalog-group") : null;
    const recentsGroup = recentsRoot ? recentsRoot.closest(".catalog-group") : null;

    if (favoritesGroup) {
      favoritesGroup.classList.toggle("is-hidden", Boolean(query) || !favorites.length);
    }

    if (recentsGroup) {
      recentsGroup.classList.toggle("is-hidden", Boolean(query) || !recents.length);
    }

    if (favoritesRoot) {
      favoritesRoot.innerHTML = favorites.length
        ? `<div class="catalog-group-grid">${favorites.map((entry) => this.renderDrugCard(entry, { compact: true })).join("")}</div>`
        : `<p class="empty-state">No hay medicamentos guardados todavía. Marca las fichas disponibles para tenerlas a mano.</p>`;
    }

    if (recentsRoot) {
      recentsRoot.innerHTML = recents.length
        ? `<div class="catalog-group-grid">${recents.map((entry) => this.renderDrugCard(entry, { compact: true })).join("")}</div>`
        : `<p class="empty-state">Aún no has abierto fichas de medicamentos. Las últimas aperturas aparecerán aquí.</p>`;
    }

    if (favoritesCount) {
      favoritesCount.textContent = String(favorites.length);
    }

    if (recentsCount) {
      recentsCount.textContent = String(recents.length);
    }

    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.vademecumTab === tab);
    });

    const filteredDrugs = query
      ? drugs.filter((entry) =>
          normalizeText(entry.title).includes(query) || normalizeText(entry.keywords || "").includes(query),
        )
      : drugs;
    const renderDrugList = (
      items,
      options = {},
      emptyMessage = "No se han encontrado resultados dentro de las fichas internas disponibles.",
    ) =>
      items.length
        ? `<div class="catalog-group-grid">${items.map((entry) => this.renderDrugCard(entry, options)).join("")}</div>`
        : `
            <div class="surface-panel">
              <p class="empty-state">${emptyMessage}</p>
              <div class="toolbar-actions">
                <a class="toolbar-button" href="${CIMA_ADVANCED_SEARCH_URL}" target="_blank" rel="noreferrer">Abrir consulta oficial en CIMA/AEMPS</a>
              </div>
            </div>
          `;

    if (tab === "pediatria") {
      const pediatric = filteredDrugs.filter((entry) => entry.flags && entry.flags.requiresPediatricDose);
      root.innerHTML = `
        <div class="section-head section-head-compact">
          <h2>Dosis pediátrica</h2>
          <p>Solo se muestran medicamentos con pauta pediátrica ya incorporada en la app.</p>
        </div>
        ${renderDrugList(pediatric)}
      `;
      return;
    }

    if (tab === "interacciones") {
      const interactionCards = filteredDrugs
        .filter((entry) => entry.interactions && entry.interactions.length)
        .map(
          (entry) => `
          <article class="drug-card">
            <strong>${entry.title}</strong>
            <div class="drug-card-meta">${entry.interactions.length} interacciones</div>
            ${entry.interactions
              .map((interaction) => {
                const related = REGISTRY.byId.get(interaction.withId);
                return `<span>${related ? `${related.title}: ` : ""}${interaction.note}</span>`;
              })
              .join("")}
            <a href="${withBasePath(entry.route)}" class="toolbar-button">Abrir ficha</a>
          </article>
        `,
        );

      root.innerHTML = interactionCards.length
        ? `<div class="drug-stack">${interactionCards.join("")}</div>`
        : `
            <div class="surface-panel">
              <p class="empty-state">No hay interacciones incorporadas para esta selección.</p>
            </div>
          `;
      return;
    }

    if (query) {
      if (exactInternalMatch) {
        root.innerHTML = `
          <div class="section-head section-head-compact">
            <h2>Ficha interna disponible</h2>
            <p>El medicamento ya está incorporado al Vademécum. Abriendo la ficha interna…</p>
          </div>
          <div class="surface-panel vademecum-search-state">
            ${this.renderDrugCard(exactInternalMatch)}
          </div>
        `;

        queueMicrotask(() => {
          if (requestNonce !== this.vademecumLookupNonce) {
            return;
          }
          if (!this.state.currentRoute || this.state.currentRoute.appId !== "vademecum") {
            return;
          }
          this.router.navigate(exactInternalMatch.route);
        });
        return;
      }

      if (filteredDrugs.length) {
        root.innerHTML = `
          <div class="section-head section-head-compact">
            <h2>Fichas internas disponibles</h2>
            <p>La búsqueda coincide con medicamentos ya incorporados al Vademécum. La resolución principal se mantiene dentro de las fichas internas.</p>
          </div>
          ${renderDrugList(filteredDrugs)}
        `;
        return;
      }

      root.innerHTML = `
        <div class="section-head section-head-compact">
          <h2>Consulta farmacológica oficial</h2>
          <p>No hay una ficha interna disponible para esta búsqueda. La consulta se limitará a la referencia oficial de CIMA/AEMPS dentro del Vademécum.</p>
        </div>
        <div class="surface-panel">
          <p class="empty-state">Consultando referencia oficial de CIMA/AEMPS…</p>
        </div>
      `;

      const officialLookup = await this.lookupCimaResults(rawQuery);
      if (requestNonce !== this.vademecumLookupNonce) {
        return;
      }

      root.innerHTML = this.renderCimaLookupSection(rawQuery, officialLookup, { pendingRecord: exactPendingMatch });
      return;
    }

    root.innerHTML = `
      <section class="surface-panel vademecum-scope">
        <div class="section-head section-head-compact">
          <h2>Cobertura interna actual</h2>
          <p>El Vademécum reúne fichas farmacológicas realmente incorporadas y medicamentos ya detectados en protocolos o procedimientos. Cuando una búsqueda no corresponde a una ficha interna, la consulta oficial se resuelve dentro del módulo mediante referencia restringida a CIMA/AEMPS.</p>
        </div>
        <div class="catalog-meta">
          <span class="eyebrow-tag">${drugs.length} fichas internas</span>
          <span class="eyebrow-tag">${pendingCatalog.length} detectados sin ficha completa</span>
          <span class="eyebrow-tag">${pediatricCount} con dosis pediátrica</span>
          <span class="eyebrow-tag">${interactionCount} con interacciones internas</span>
        </div>
        <div class="toolbar-actions">
          <a class="toolbar-button" href="${CIMA_ADVANCED_SEARCH_URL}" target="_blank" rel="noreferrer">Abrir consulta oficial en CIMA/AEMPS</a>
          <a class="toolbar-button" href="${withBasePath("/herramientas")}">Ver herramientas</a>
        </div>
      </section>
      <section class="surface-panel">
        <div class="card-header">
          <h2>Accesos farmacológicos útiles</h2>
          <p>Se muestran solo las utilidades que ya tienen sentido real para las fichas incorporadas.</p>
        </div>
        <div class="medication-chip-grid">
          ${utilityActions.length
            ? utilityActions
                .map(
                  (action) => `
                    <a class="home-shortcut" href="${withBasePath(action.route)}">
                      <strong>${action.title}</strong>
                      <span>${action.copy}</span>
                    </a>
                  `,
                )
                .join("")
            : '<p class="empty-state">Todavía no hay utilidades farmacológicas adicionales visibles para esta selección.</p>'}
        </div>
      </section>
      <section class="surface-panel">
        <div class="card-header">
          <h2>Fichas internas disponibles</h2>
          <p>Acceso al conjunto de medicamentos ya incorporados de forma real al Vademécum.</p>
        </div>
        ${renderDrugList(drugs, { compact: true })}
      </section>
      <section class="surface-panel">
        <div class="card-header">
          <h2>Medicamentos detectados en protocolos y procedimientos</h2>
          <p>Estos fármacos ya aparecen en módulos clínicos de la app. Mientras no exista ficha propia completa, la consulta se resuelve dentro del Vademécum mediante la referencia oficial de CIMA/AEMPS.</p>
        </div>
        <div class="catalog-group-grid">
          ${pendingCatalog.map((record) => this.renderPendingDrugSummaryCard(record)).join("")}
        </div>
      </section>
    `;
  }

  renderSearchView(view) {
    if (!view) {
      return;
    }

    const resultsRoot = view.querySelector("[data-search-results]");
    const historyRoot = view.querySelector("[data-search-history]");
    const filtersRoot = view.querySelector("[data-search-filters]");
    const input = view.querySelector("[data-search-page-input]");
    const results = this.searchEngine.search(this.state.searchQuery, {
      filter: this.state.searchFilter,
      limit: 80,
    });
    const history = this.storage.getHistory();

    if (input) {
      input.value = this.state.searchQuery;
    }

    if (filtersRoot) {
      filtersRoot.innerHTML = SEARCH_FILTERS.map(
        (filter) => `
          <button
            class="segmented-control-button${this.state.searchFilter === filter.value ? " is-active" : ""}"
            type="button"
            data-search-filter="${filter.value}">
            ${filter.label}
          </button>
        `,
      ).join("");
    }

    if (resultsRoot) {
      resultsRoot.innerHTML = results.length
        ? `<div class="results-stack">${results.map((entry) => this.renderSearchResultCard(entry)).join("")}</div>`
        : `<p class="empty-state">Sin resultados para la combinación actual de búsqueda y filtros.</p>`;
    }

    if (historyRoot) {
      historyRoot.innerHTML = history.length
        ? `<div class="results-stack">${history
            .slice(0, 12)
            .map((item) => {
              const entry = REGISTRY.byId.get(item.id);
              if (!entry) {
                return "";
              }

              return `
                <a class="result-card" href="${withBasePath(entry.route)}">
                  <strong>${entry.title}</strong>
                  <span>${entry.sectionLabel} · ${entry.category}</span>
                  <span>Última visita: ${formatTimestamp(item.visitedAt)}</span>
                </a>
              `;
            })
            .join("")}</div>`
        : `<p class="empty-state">Todavía no hay historial. La búsqueda incorporará aquí tus aperturas recientes.</p>`;
    }
  }

  renderFavoritesView(view) {
    if (!view) {
      return;
    }

    const root = view.querySelector("[data-favorites-root]");
    const favorites = this.storage
      .getFavorites()
      .map((id) => REGISTRY.byId.get(id))
      .filter(Boolean);

    root.innerHTML = favorites.length
      ? `<div class="catalog-group-grid">${favorites.map((entry) => this.renderRegistryCard(entry)).join("")}</div>`
      : `<p class="empty-state">No hay favoritos guardados. Usa la barra de acciones de cada módulo para fijarlos.</p>`;
  }

  enhanceContentView(route) {
    let wrapper = this.contentSlot.querySelector(":scope > .module-shell");
    const effectiveEntry =
      route.entry.section === "vademecum"
        ? {
            ...route.entry,
            externalReferenceUrl: this.getDrugOfficialReference(route.entry).url,
          }
        : route.entry;
    const toolbar = createToolbar({
      entry: effectiveEntry,
      isFavorite: this.storage.isFavorite(route.entry.id),
    });

    if (!wrapper) {
      const currentNodes = [...this.contentSlot.childNodes];
      wrapper = createElement("div", "module-shell");
      wrapper.append(toolbar);
      currentNodes.forEach((node) => wrapper.append(node));
      this.contentSlot.replaceChildren(wrapper);
      this.storage.pushHistory({
        id: route.entry.id,
        route: route.entry.route,
        title: route.entry.title,
        sectionLabel: route.entry.sectionLabel,
      });
    } else {
      const currentToolbar = wrapper.querySelector(":scope > .content-toolbar");
      if (currentToolbar) {
        currentToolbar.replaceWith(toolbar);
      } else {
        wrapper.prepend(toolbar);
      }
    }

    const moduleRoot = this.contentSlot.querySelector(".module-content") || wrapper.lastElementChild || wrapper;

    if (route.entry.section === "herramientas") {
      this.mountToolWidget(route.entry, moduleRoot);
    }

    if (route.entry.section === "vademecum") {
      this.mountDrugEnhancements(route.entry, moduleRoot);
    }

    this.refreshChrome();
  }

  mountToolWidget(entry, moduleRoot) {
    const config = TOOL_WIDGETS[entry.slug];

    if (!config || moduleRoot.querySelector("[data-tool-widget]")) {
      return;
    }

    const widget = createElement("section", "card widget-shell");
    widget.dataset.toolWidget = entry.slug;
    widget.innerHTML = `
      <div class="card-header">
        <h2>${config.title}</h2>
        <p>${config.hint}</p>
      </div>
      <form class="widget-grid" novalidate></form>
      <div class="widget-output">
        <span class="widget-hint">Introduce los datos necesarios para obtener el cálculo.</span>
      </div>
    `;

    const form = widget.querySelector("form");
    const output = widget.querySelector(".widget-output");

    config.fields.forEach((field) => {
      form.append(this.createWidgetField(field));
    });

    const update = () => {
      const values = this.readWidgetValues(form, config.fields);
      const result = config.compute(values);

      if (!result) {
        output.innerHTML = '<span class="widget-hint">Introduce los datos necesarios para obtener el cálculo.</span>';
        return;
      }

      output.innerHTML = `
        <strong>${result.primary}</strong>
        <span>${result.secondary}</span>
        <span class="widget-hint">${result.footer}</span>
      `;
    };

    form.addEventListener("input", update);
    form.addEventListener("change", update);
    moduleRoot.append(widget);
  }

  createWidgetField(field) {
    const wrapper = createElement("label", "widget-field");
    wrapper.innerHTML = "";
    wrapper.append(createElement("span", "", field.label));

    if (field.type === "select") {
      const select = document.createElement("select");
      select.name = field.name;
      select.innerHTML = field.options
        .map((option) => `<option value="${option.value}">${option.label}</option>`)
        .join("");
      wrapper.append(select);
      return wrapper;
    }

    if (field.type === "checkbox") {
      const checkWrapper = createElement("div", "widget-field checkbox-field");
      checkWrapper.innerHTML = `
        <label class="toolbar-button" style="display:flex;align-items:center;gap:.6rem;justify-content:flex-start;border-radius:1rem;padding:.85rem .95rem;">
          <input type="checkbox" name="${field.name}" value="1" style="width:1rem;height:1rem;">
          <span>${field.label}</span>
        </label>
      `;
      return checkWrapper;
    }

    const input = document.createElement("input");
    input.type = field.type || "number";
    input.name = field.name;
    input.step = field.step || "any";
    input.placeholder = field.placeholder || "";
    wrapper.append(input);
    return wrapper;
  }

  readWidgetValues(form, fields) {
    const values = {};

    fields.forEach((field) => {
      if (field.type === "checkbox") {
        const checkbox = form.querySelector(`[name="${field.name}"]`);
        values[field.name] = checkbox && checkbox.checked ? 1 : 0;
        return;
      }

      const input = form.querySelector(`[name="${field.name}"]`);
      const raw = input ? input.value : "";
      values[field.name] = raw === "" ? "" : raw;
    });

    return values;
  }

  mountDrugEnhancements(entry, moduleRoot) {
    if (moduleRoot.querySelector("[data-drug-enhancements]")) {
      return;
    }

    const actions = this.getDrugCalculationActions(entry);
    const relatedTools = (entry.relatedEntryIds || [])
      .map((id) => REGISTRY.byId.get(id))
      .filter((related) => related && related.section === "herramientas");

    const card = createElement("section", "card");
    card.dataset.drugEnhancements = entry.id;
    card.innerHTML = `
      <div class="card-header">
        <h2>Utilidades asociadas</h2>
        <p>Las utilidades visibles solo aparecen cuando esta ficha las necesita de forma real.</p>
      </div>
      <div class="medication-chip-grid">
        ${actions.length
          ? actions
              .map(
                (action) => `
                  <a class="home-shortcut" href="${withBasePath(action.route)}">
                    <strong>${action.title}</strong>
                    <span>${action.copy}</span>
                  </a>
                `,
              )
              .join("")
          : '<p class="empty-state">Esta ficha no necesita utilidades adicionales en el estado actual de la app.</p>'}
      </div>
      ${
        entry.interactions && entry.interactions.length
          ? `
            <div class="card-header" style="margin-top:.25rem;">
              <h2>Interacciones relevantes</h2>
            </div>
            <div class="related-grid">
              ${entry.interactions
                .map((interaction) => {
                  const related = REGISTRY.byId.get(interaction.withId);
                  return `
                    <div class="home-shortcut">
                      <strong>${related && related.title ? related.title : "Interacción"}</strong>
                      <span>${interaction.note}</span>
                    </div>
                  `;
                })
                .join("")}
            </div>
          `
          : ""
      }
      ${
        relatedTools.length
          ? `
            <div class="card-header" style="margin-top:.25rem;">
              <h2>Herramientas relacionadas</h2>
            </div>
            <div class="related-grid">
              ${relatedTools.map((related) => this.renderRegistryCard(related)).join("")}
            </div>
          `
          : ""
      }
    `;

    moduleRoot.append(card);
  }

  getDrugCalculationActions(entry) {
    const flags = entry.flags || {};
    const actions = [];
    const pushIfExists = (slug, title, copy) => {
      const related = REGISTRY.entries.find((item) => item.section === "herramientas" && item.slug === slug);
      if (related) {
        actions.push({
          title,
          copy,
          route: related.route,
        });
      }
    };

    if (flags.requiresWeightCalc || flags.requiresPediatricDose) {
      pushIfExists("dosis-pediatrica", "Dosis por peso", "Calculadora genérica por kg con tope máximo opcional.");
    }

    if (flags.requiresBsaCalc) {
      pushIfExists("superficie-corporal", "Superficie corporal", "Dosificación basada en m².");
    }

    if (flags.requiresInfusionRateCalc) {
      pushIfExists("velocidad-de-infusion-ml-h", "Velocidad de infusión", "Cálculo directo en mL/h.");
    }

    if (flags.requiresReconstitutionCalc) {
      pushIfExists("concentracion-reconstitucion", "Concentración y reconstitución", "Ayuda para concentración final tras dilución.");
    }

    if (flags.requiresMaxDailyDoseCheck) {
      pushIfExists("dosis-pediatrica", "Control de dosis máxima", "Aplicar límite máximo al cálculo por peso.");
    }

    if (flags.requiresWeightCalc && !flags.requiresPediatricDose && !flags.skipBolusCalc) {
      pushIfExists("calculo-de-bolos", "Bolos por peso", "Conversión de mg/kg a volumen final.");
    }

    return actions;
  }

  getVademecumUtilityActions(entries) {
    const seenRoutes = new Set();

    return entries
      .flatMap((entry) => this.getDrugCalculationActions(entry))
      .filter((action) => {
        if (!action || seenRoutes.has(action.route)) {
          return false;
        }

        seenRoutes.add(action.route);
        return true;
      });
  }

  getIndexedDrugCatalog() {
    const internalEntries = REGISTRY.entries.filter((entry) => entry.section === "vademecum");
    const internalSlugs = new Set(internalEntries.map((entry) => entry.slug));
    const pendingCatalog = PENDING_VADEMECUM_MEDICATIONS.filter((record) => !internalSlugs.has(record.slug)).map((record) => ({
      ...record,
      searchTerms: [record.title, ...(record.aliases || [])].map((term) => normalizeText(term)).filter(Boolean),
      sourceEntries: (record.sourceRefs || [])
        .map((ref) => REGISTRY.entries.find((entry) => entry.section === ref.section && entry.slug === ref.slug))
        .filter(Boolean),
    }));

    return { internalEntries, pendingCatalog };
  }

  getDrugSearchTerms(entry) {
    return [entry.title, entry.slug, ...(String(entry.keywords || "").split(/[;,|]/g) || [])]
      .map((term) => normalizeText(term))
      .filter(Boolean);
  }

  findExactDrugEntry(query, entries) {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) {
      return null;
    }

    return (
      entries.find((entry) =>
        this.getDrugSearchTerms(entry).some((term) => term === normalizedQuery),
      ) || null
    );
  }

  findExactPendingDrug(query, pendingCatalog) {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) {
      return null;
    }

    return (
      pendingCatalog.find((record) =>
        record.searchTerms.some((term) => term === normalizedQuery),
      ) || null
    );
  }

  getDrugOfficialReference(target, lookup = null) {
    const slug = slugify(target.slug || target.title || target);
    const override = CIMA_DIRECT_REFERENCE_OVERRIDES.get(slug);

    if (override) {
      return override;
    }

    const targetTerms = [target.cimaQuery || target.title || target, ...(target.aliases || []), slug]
      .map((term) => normalizeText(term))
      .filter(Boolean);
    const officialCandidates =
      lookup && Array.isArray(lookup.exactResults) && lookup.exactResults.length ? lookup.exactResults : lookup && lookup.results;
    const officialMatch =
      officialCandidates &&
      officialCandidates.find((result) =>
        targetTerms.some((term) => result.searchTerms.some((candidate) => candidate === term || candidate.includes(term) || term.includes(candidate))),
      );

    if (officialMatch) {
      return {
        url: officialMatch.officialUrl,
        label: "Abrir ficha oficial en CIMA/AEMPS",
      };
    }

    return {
      url: CIMA_ADVANCED_SEARCH_URL,
      label: "Abrir búsqueda oficial en CIMA/AEMPS",
    };
  }

  getOfficialDocUrl(result) {
    const docs = Array.isArray(result.docs) ? result.docs : [];
    const preferred = docs.find((doc) => doc.tipo === 1 && (doc.urlHtml || doc.url));
    const fallback = docs.find((doc) => doc.urlHtml || doc.url);
    return (preferred && (preferred.urlHtml || preferred.url)) || (fallback && (fallback.urlHtml || fallback.url)) || null;
  }

  async lookupCimaResults(query) {
    const cacheKey = normalizeText(query);

    if (!cacheKey) {
      return { results: [], exactResults: [] };
    }

    if (this.cimaLookupCache.has(cacheKey)) {
      return this.cimaLookupCache.get(cacheKey);
    }

    try {
      const response = await fetch(`${CIMA_API_SEARCH_URL}${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error("CIMA lookup failed");
      }

      const payload = await response.json();
      const results = (payload.resultados || [])
        .map((result) => {
          const officialUrl = this.getOfficialDocUrl(result);
          const terms = [result.vtm && result.vtm.nombre, result.nombre]
            .filter(Boolean)
            .map((term) => normalizeText(term));
          return {
            title: result.nombre,
            subtitle: [result.vtm && result.vtm.nombre, result.formaFarmaceuticaSimplificada && result.formaFarmaceuticaSimplificada.nombre]
              .filter(Boolean)
              .join(" · "),
            officialUrl,
            searchTerms: terms,
            isExact: terms.some((term) => term === cacheKey) || false,
          };
        })
        .filter((result) => result.officialUrl)
        .sort((left, right) => Number(right.isExact) - Number(left.isExact))
        .slice(0, 3);

      const lookup = {
        results,
        exactResults: results.filter((result) => result.isExact),
      };
      this.cimaLookupCache.set(cacheKey, lookup);
      return lookup;
    } catch (error) {
      const lookup = { results: [], exactResults: [], failed: true };
      this.cimaLookupCache.set(cacheKey, lookup);
      return lookup;
    }
  }

  renderCimaLookupSection(query, lookup, { pendingRecord = null } = {}) {
    const hasOfficialResults = lookup && lookup.results && lookup.results.length;
    const title = lookup && lookup.exactResults && lookup.exactResults.length ? "Consulta oficial precisa" : "Consulta oficial CIMA/AEMPS";
    const copy = "No hay una ficha interna disponible para este término. La consulta se mantiene dentro del módulo y se limita a la referencia farmacológica oficial de CIMA/AEMPS.";
    const pendingNote =
      pendingRecord && pendingRecord.sourceEntries && pendingRecord.sourceEntries.length
        ? `
          <div class="catalog-meta">
            <span class="catalog-status is-review">Ficha interna pendiente</span>
            <span class="eyebrow-tag">Uso detectado en ${pendingRecord.sourceEntries.map((entry) => entry.title).join(" · ")}</span>
          </div>
        `
        : "";

    if (!hasOfficialResults) {
      return `
        <section class="surface-panel vademecum-search-state cima-consultation-state">
          <div class="section-head section-head-compact">
            <h2>${title}</h2>
            <p>${copy}</p>
          </div>
          ${pendingNote}
          <p class="empty-state">No se ha encontrado una coincidencia oficial clara para esta búsqueda. Puedes continuar la consulta dentro de la búsqueda avanzada oficial de CIMA/AEMPS.</p>
          <div class="toolbar-actions">
            <a class="toolbar-button" href="${CIMA_ADVANCED_SEARCH_URL}" target="_blank" rel="noreferrer">Abrir consulta avanzada oficial</a>
          </div>
        </section>
      `;
    }

    return `
      <section class="surface-panel vademecum-search-state cima-consultation-state">
        <div class="section-head section-head-compact">
          <h2>${title}</h2>
          <p>${copy}</p>
        </div>
        ${pendingNote}
        <div class="drug-stack">
          ${(lookup.exactResults && lookup.exactResults.length ? lookup.exactResults : lookup.results)
            .map(
              (result) => `
                <article class="drug-card drug-card-official">
                  <strong>${result.title}</strong>
                  <span>${result.subtitle || "Ficha oficial disponible en CIMA/AEMPS."}</span>
                  <div class="toolbar-actions">
                    <a class="toolbar-button" href="${result.officialUrl}" target="_blank" rel="noreferrer">Abrir ficha oficial</a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="toolbar-actions">
          <a class="toolbar-button" href="${CIMA_ADVANCED_SEARCH_URL}" target="_blank" rel="noreferrer">Abrir consulta avanzada oficial</a>
        </div>
      </section>
    `;
  }

  renderHomeShortcut(section, { compact = false, count = null } = {}) {
    const icons = {
      "/protocolos": "M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18.5a1.5 1.5 0 0 0-1.5-1.5H6.5A3.5 3.5 0 0 1 3 15.5V7a2.5 2.5 0 0 1 2-2.45 M7 6h9M7 10h9M7 14h6",
      "/procedimientos": "m14.5 4.5 5 5M8 21l-5-5 11-11 5 5Z M13 6 18 11",
      "/herramientas": "M4 12h5l2 8 2-16 2 8h5",
      "/vademecum": "M10 4.5v15M14 4.5v15M7 7.5h10M7 16.5h10 M4 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z",
      "/buscar": "M16 16l5 5M5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z",
      "/favoritos": "m12 3.5 2.7 5.48 6.05.88-4.38 4.27 1.03 6.03L12 17.34 6.6 20.16l1.03-6.03-4.38-4.27 6.05-.88Z",
    };

    return `
      <a class="home-shortcut${compact ? " home-shortcut-compact" : ""} is-${section.tone || "neutral"}" href="${withBasePath(section.path)}">
        <span class="home-shortcut-row">
          <span class="home-shortcut-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="${icons[section.path] || icons["/buscar"]}"></path>
            </svg>
          </span>
          <strong>${section.title}</strong>
          ${count !== null && !compact ? `<span class="home-shortcut-count">${count}</span>` : ""}
        </span>
        <span>${section.copy}</span>
      </a>
    `;
  }

  getEntryProgress(entry) {
    if (!entry || !["protocolos", "procedimientos"].includes(entry.section)) {
      return null;
    }

    const override = ENTRY_PROGRESS_OVERRIDES.get(`${entry.section}:${entry.slug}`);
    if (override) {
      return override;
    }

    const haystack = `${entry.summary || ""} ${entry.keywords || ""}`.toLowerCase();

    if (haystack.includes("validado")) {
      return { label: "Completo", tone: "complete" };
    }

    if (haystack.includes("base clínica")) {
      return { label: "Base", tone: "base" };
    }

    if (
      haystack.includes("pendiente") ||
      haystack.includes("plantilla") ||
      haystack.includes("en preparación") ||
      haystack.includes("módulo interactivo en desarrollo")
    ) {
      return { label: "En revisión", tone: "review" };
    }

    return null;
  }

  sortEntriesForCatalog(section, entries) {
    const progressRank = {
      complete: 0,
      base: 1,
      review: 2,
    };

    return [...entries].sort((left, right) => {
      if (!["protocolos", "procedimientos"].includes(section)) {
        return left.title.localeCompare(right.title, "es");
      }

      const leftProgress = this.getEntryProgress(left);
      const rightProgress = this.getEntryProgress(right);
      const leftRank = leftProgress ? (progressRank[leftProgress.tone] ?? 3) : 3;
      const rightRank = rightProgress ? (progressRank[rightProgress.tone] ?? 3) : 3;

      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      return left.title.localeCompare(right.title, "es");
    });
  }

  renderRegistryCard(entry, { showProgress = false } = {}) {
    const progress = showProgress ? this.getEntryProgress(entry) : null;

    return `
      <a class="catalog-card" href="${withBasePath(entry.route)}">
        <div class="catalog-card-main">
          <strong>${entry.title}</strong>
        </div>
        ${progress ? `<span class="catalog-status is-${progress.tone}">${progress.label}</span>` : ""}
        <div class="catalog-card-meta">
          <span class="eyebrow-tag">${entry.kindLabel}</span>
          ${this.storage.isFavorite(entry.id) ? '<span class="eyebrow-tag">Favorito</span>' : ""}
          ${entry.algorithmId ? '<span class="eyebrow-tag">Algoritmo</span>' : ""}
        </div>
      </a>
    `;
  }

  renderDrugCard(entry, { compact = false, officialLookup = null } = {}) {
    const flags = this.getDrugCalculationActions(entry).map((action) => action.title);
    const officialReference = this.getDrugOfficialReference(entry, officialLookup);

    if (compact) {
      return `
        <a class="drug-card drug-card-compact" href="${withBasePath(entry.route)}">
          <strong>${entry.title}</strong>
          <div class="drug-card-meta">
            ${flags.slice(0, 2).map((flag) => `<span class="eyebrow-tag">${flag}</span>`).join("")}
          </div>
        </a>
      `;
    }

    return `
      <article class="drug-card">
        <a class="drug-card-link" href="${withBasePath(entry.route)}">
          <strong>${entry.title}</strong>
        </a>
        <div class="drug-card-meta">
          ${flags.slice(0, 2).map((flag) => `<span class="eyebrow-tag">${flag}</span>`).join("")}
        </div>
        <div class="toolbar-actions">
          <a class="toolbar-button" href="${withBasePath(entry.route)}">Abrir ficha interna</a>
          <a class="toolbar-button" href="${officialReference.url}" target="_blank" rel="noreferrer">${officialReference.label}</a>
        </div>
      </article>
    `;
  }

  renderPendingDrugSummaryCard(record) {
    const officialReference = this.getDrugOfficialReference(record);
    return `
      <article class="drug-card drug-card-pending">
        <strong>${record.title}</strong>
        <div class="catalog-meta">
          <span class="catalog-status is-review">Ficha pendiente</span>
          <span class="eyebrow-tag">${record.sourceEntries.map((entry) => entry.title).join(" · ")}</span>
        </div>
        <div class="toolbar-actions">
          <button class="toolbar-button" type="button" data-vademecum-query="${record.title}">Consultar en este módulo</button>
          <a class="toolbar-button" href="${officialReference.url}" target="_blank" rel="noreferrer">${officialReference.label}</a>
        </div>
      </article>
    `;
  }

  renderSearchResultCard(entry) {
    return `
      <a class="result-card" href="${withBasePath(entry.route)}">
        <strong>${entry.title}</strong>
        <div class="result-card-meta">
          <span class="eyebrow-tag">${entry.sectionLabel}</span>
          ${entry.isFavorite ? '<span class="eyebrow-tag">Favorito</span>' : ""}
          ${entry.isRecent ? '<span class="eyebrow-tag">Historial</span>' : ""}
        </div>
      </a>
    `;
  }

  syncSearchInputs(origin) {
    this.root.querySelectorAll("[data-global-search-input], [data-search-page-input]").forEach((input) => {
      if (input !== origin) {
        input.value = this.state.searchQuery;
      }
    });
  }

  renderSuggestions() {
    const suggestionsHost = this.headerSlot.querySelector("[data-search-suggestions]");

    if (!suggestionsHost) {
      return;
    }

    if (!this.state.searchQuery || this.state.searchQuery.trim().length < 2) {
      this.hideSuggestions();
      return;
    }

    const suggestions = this.searchEngine.suggest(this.state.searchQuery, 8);

    if (!suggestions.length) {
      suggestionsHost.hidden = false;
      suggestionsHost.innerHTML = '<p class="drawer-empty">No hay coincidencias rápidas. Abre Buscar para ampliar la consulta.</p>';
      return;
    }

    suggestionsHost.hidden = false;
    suggestionsHost.innerHTML = suggestions
      .map(
        (entry) => `
          <a class="suggestion-link" href="${withBasePath(entry.route)}" data-suggestion-route="${entry.route}">
            <strong>${entry.title}</strong>
            <span>${entry.sectionLabel} · ${entry.category}</span>
          </a>
        `,
      )
      .join("");
  }

  hideSuggestions() {
    const suggestionsHost = this.headerSlot.querySelector("[data-search-suggestions]");

    if (suggestionsHost) {
      suggestionsHost.hidden = true;
      suggestionsHost.innerHTML = "";
    }
  }

  showNotFound(route) {
    const current = this.contentSlot.firstElementChild;
    const panel = createElement("section", "surface-panel");
    panel.innerHTML = `
      <div class="section-head">
        <h1>Contenido no disponible</h1>
        <p>La vista solicitada no está disponible en este momento. Puedes volver a Inicio o localizarla desde Buscar.</p>
      </div>
      <div class="toolbar-actions">
        <a class="toolbar-button is-primary" href="${withBasePath("/")}">Ir a Inicio</a>
        <a class="toolbar-button" href="${withBasePath("/buscar")}">Abrir Buscar</a>
      </div>
    `;

    if (current) {
      current.prepend(panel);
    } else {
      this.contentSlot.prepend(panel);
    }
  }

  toggleFavorite(entryId) {
    if (!entryId) {
      return;
    }

    this.storage.toggleFavorite(entryId);
    this.refreshChrome();

    if (this.state.currentRoute && this.state.currentRoute.kind === "content") {
      this.enhanceContentView(this.state.currentRoute);
    } else if (this.state.currentRoute && this.state.currentRoute.appId === "favoritos") {
      this.renderFavoritesView(this.contentSlot.querySelector('[data-app-view="favoritos"]'));
    } else if (this.state.currentRoute && this.state.currentRoute.appId === "buscar") {
      this.renderSearchView(this.contentSlot.querySelector('[data-app-view="buscar"]'));
    } else if (this.state.currentRoute && this.state.currentRoute.appId === "inicio") {
      this.renderHomeView(this.contentSlot.querySelector('[data-app-view="inicio"]'));
    }
  }

  openEntryBySlug(section, slug) {
    const entry = REGISTRY.entries.find((item) => item.section === section && item.slug === slugify(slug));

    if (entry) {
      this.router.navigate(entry.route);
    }
  }

  async openAlgorithm(algorithmId, originEntry) {
    if (!algorithmId) {
      return;
    }

    const response = await fetch(resolveVersionedUrl(`content/algorithms/${algorithmId}.json`));

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    this.algorithmState = {
      isOpen: true,
      data,
      currentNodeId: data.startNode,
      path: [data.startNode],
      originEntry,
    };
    this.renderAlgorithmSheet();
  }

  closeAlgorithm() {
    this.algorithmState = {
      isOpen: false,
      data: null,
      currentNodeId: null,
      path: [],
      originEntry: null,
    };
    this.renderAlgorithmSheet();
  }

  resetAlgorithm() {
    if (!this.algorithmState.data) {
      return;
    }

    this.algorithmState.currentNodeId = this.algorithmState.data.startNode;
    this.algorithmState.path = [this.algorithmState.data.startNode];
    this.renderAlgorithmSheet();
  }

  goBackAlgorithm() {
    if (this.algorithmState.path.length <= 1) {
      return;
    }

    this.algorithmState.path.pop();
    this.algorithmState.currentNodeId = this.algorithmState.path[this.algorithmState.path.length - 1];
    this.renderAlgorithmSheet();
  }

  selectAlgorithmOption(index) {
    const currentNode =
      this.algorithmState.data &&
      this.algorithmState.data.nodes &&
      this.algorithmState.data.nodes[this.algorithmState.currentNodeId]
        ? this.algorithmState.data.nodes[this.algorithmState.currentNodeId]
        : null;
    const option = currentNode && currentNode.options ? currentNode.options[Number(index)] : null;

    if (!option) {
      return;
    }

    if (option.action && option.action.type === "navigate" && option.action.target) {
      this.closeAlgorithm();
      this.router.navigate(option.action.target);
      return;
    }

    if (!option.nextId) {
      this.closeAlgorithm();
      return;
    }

    this.algorithmState.currentNodeId = option.nextId;
    this.algorithmState.path.push(option.nextId);
    this.renderAlgorithmSheet();
  }

  renderAlgorithmSheet() {
    if (!this.algorithmState.isOpen || !this.algorithmState.data) {
      this.algorithmSheet.classList.remove("is-open");
      this.algorithmSheet.setAttribute("aria-hidden", "true");
      this.algorithmSheet.innerHTML = "";
      this.state.bottomNavHidden = false;
      this.syncAdaptiveChrome({ forceVisible: true });
      return;
    }

    const { data, currentNodeId, path } = this.algorithmState;
    const currentNode = data.nodes[currentNodeId];
    const mapNodes = (data.nodeOrder || Object.keys(data.nodes)).map((nodeId) => {
      const node = data.nodes[nodeId];
      const isCurrent = nodeId === currentNodeId;
      const isVisited = path.includes(nodeId);
      return `
        <div class="algorithm-trail-item" style="${isCurrent ? "border:1px solid rgba(23,104,255,.28);background:rgba(23,104,255,.08);" : isVisited ? "background:rgba(19,32,51,.08);" : ""}">
          <strong>${node.label || node.title || node.text.slice(0, 42)}</strong>
          <span>${node.type || "step"}</span>
        </div>
      `;
    });

    this.algorithmSheet.classList.add("is-open");
    this.algorithmSheet.setAttribute("aria-hidden", "false");
    this.state.bottomNavHidden = true;
    this.syncAdaptiveChrome();
    this.algorithmSheet.innerHTML = `
      <div class="algorithm-sheet-dialog">
        <div class="algorithm-sheet-header">
          <div>
            <p class="drawer-kicker">Algoritmo interactivo</p>
            <h2 class="header-title">${data.title}</h2>
          </div>
          <div class="toolbar-actions">
            <button class="toolbar-button" type="button" data-action="algorithm-back">Atrás</button>
            <button class="toolbar-button" type="button" data-action="algorithm-reset">Reiniciar</button>
            <button class="toolbar-button" type="button" data-action="algorithm-close">Cerrar</button>
          </div>
        </div>
        <div class="algorithm-sheet-body">
          <div class="algorithm-node is-${currentNode.type || "decision"}">
            <span class="algorithm-node-type">${currentNode.type || "decision"}</span>
            <strong>${currentNode.label || "Paso actual"}</strong>
            <p>${currentNode.text}</p>
            ${
              currentNode.note
                ? `<p class="widget-hint">${currentNode.note}</p>`
                : ""
            }
            <div class="algorithm-option-grid">
              ${(currentNode.options || [])
                .map(
                  (option, index) => `
                    <button
                      class="toolbar-button${option.type === "primary" ? " is-primary" : ""}"
                      type="button"
                      data-action="algorithm-option"
                      data-option-index="${index}">
                      ${option.text}
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div class="algorithm-path">
            <div class="card-header">
              <h3>Mapa de flujo</h3>
              <p>Ruta recorrida y nodos disponibles del algoritmo actual.</p>
            </div>
            <div class="related-grid">
              ${mapNodes.join("")}
            </div>
          </div>
        </div>
        <div class="algorithm-sheet-footer">
          <span class="widget-hint">${this.algorithmState.originEntry ? `Origen: ${this.algorithmState.originEntry.title}` : "Modo algoritmo dentro del mismo shell clínico."}</span>
        </div>
      </div>
    `;
  }

  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register(resolveVersionedUrl("sw.js"));
      } catch (error) {
        console.error("No se pudo registrar el service worker", error);
      }
    });
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderStartupFallback(root, error) {
  if (!root) {
    return;
  }

  root.innerHTML = `
    <section class="app-screen">
      <div class="surface-panel">
        <div class="section-head">
          <h1>La app no está disponible ahora</h1>
          <p>Recarga la vista o vuelve a abrir Inicio para continuar. Se muestra esta pantalla para evitar una vista en blanco.</p>
        </div>
        <div class="toolbar-actions">
          <a class="toolbar-button is-primary" href="${withBasePath("/")}">Ir a Inicio</a>
        </div>
      </div>
    </section>
  `;
}

const root = document.getElementById("app");

if (root) {
  window.addEventListener("error", (event) => {
    if (!root.childElementCount) {
      renderStartupFallback(root, event.error || new Error(event.message || "Error de arranque no controlado."));
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    if (!root.childElementCount) {
      const reason =
        event.reason instanceof Error
          ? event.reason
          : new Error(typeof event.reason === "string" ? event.reason : "Promesa rechazada durante el arranque.");
      renderStartupFallback(root, reason);
    }
  });

  try {
    const app = new MFYUApp(root);
    app.init();
  } catch (error) {
    console.error("No se pudo iniciar MFyU aap", error);
    renderStartupFallback(root, error);
  }
}
