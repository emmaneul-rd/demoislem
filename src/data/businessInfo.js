// =============================================
// INSLEM — Real Business Information
// Centralized for easy updates
// =============================================

export const businessInfo = {
  name: 'Instituto de Lenguas Modernas INSLEM',
  shortName: 'INSLEM',
  tagline: 'Instituto de Lenguas Modernas',

  // Contact
  phone: '+1 809-554-6012',
  phoneAlt: '809-904-6043',
  email: 'Inslem@gmail.com',
  whatsappNumber: '18095546012',

  // Location
  address: 'C. Eustaquio Ducoudray #28',
  sector: 'Sector Savica, casi esq. Hermanos Trejo',
  reference: 'frente al Pica Pollo Matías',
  city: 'Higüey',
  province: 'La Altagracia',
  postalCode: '23000',
  country: 'República Dominicana',

  // Maps
  mapsUrl: 'https://maps.google.com/?q=Instituto+INSLEM+Hig%C3%BCey+Eustaquio+Ducoudray',
}

export const trackingIds = {
  header: 'whatsapp_header',
  hero: 'whatsapp_hero',
  heroSecondary: 'whatsapp_hero_secondary',
  languageEnglish: 'whatsapp_language_ingles',
  languageFrench: 'whatsapp_language_frances',
  languageGerman: 'whatsapp_language_aleman',
  languageSpanish: 'whatsapp_language_espanol',
  englishIntensive: 'whatsapp_english_intensivo',
  englishWeekend: 'whatsapp_english_finsemana',
  location: 'whatsapp_ubicacion',
  faq: 'whatsapp_faq',
  ctaFinal: 'whatsapp_cta_final',
  floating: 'whatsapp_flotante',
}

// =============================================
// WhatsApp links with IMPROVED messages
// Each message asks for specific action: schedule, availability, or enrollment
// =============================================

const wa = (num, text) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`

export const whatsappLinks = {
  // Header — general inquiry
  header: wa(businessInfo.whatsappNumber,
    'Hola, vi su página web y quiero información sobre los cursos de INSLEM. ¿Qué idiomas tienen disponibles?'
  ),

  // Hero — asks for schedule directly
  hero: wa(businessInfo.whatsappNumber,
    'Hola, vi su página web y me interesan los cursos de idiomas en INSLEM. ¿Cuáles son los horarios disponibles y cómo puedo inscribirme?'
  ),

  // Hero secondary (Ver curso de inglés) — goes to section, not WhatsApp
  // This is handled in Hero.jsx as anchor link

  // Language cards — specific to each language, asks for availability
  languageEnglish: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de inglés en INSLEM. ¿Tienen disponibilidad para inscribirme? ¿Cuáles son los horarios?'
  ),
  languageFrench: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de francés en INSLEM. ¿Tienen disponibilidad? ¿Cuáles son los horarios y precios?'
  ),
  languageGerman: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de alemán en INSLEM. ¿Tienen disponibilidad? ¿Cuáles son los horarios y precios?'
  ),
  languageSpanish: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de español en INSLEM. ¿Tienen disponibilidad? ¿Cuáles son los horarios?'
  ),

  // English course modalities — ask for specific enrollment
  englishIntensive: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de inglés de lunes a jueves (intensivo semanal). ¿Tienen disponibilidad? ¿Qué horarios hay disponibles: mañana, tarde o noche?'
  ),
  englishWeekend: wa(businessInfo.whatsappNumber,
    'Hola, me interesa el curso de inglés de viernes o sábados (un día a la semana). ¿Tienen disponibilidad? ¿Qué horarios hay disponibles?'
  ),

  // Location — asks to visit or WhatsApp
  location: wa(businessInfo.whatsappNumber,
    'Hola, quiero información sobre los cursos de INSLEM. ¿Puedo ir al instituto a preguntar o me pueden dar toda la información por aquí?'
  ),

  // FAQ — after reading doubts
  faq: wa(businessInfo.whatsappNumber,
    'Hola, tengo una pregunta sobre los cursos de INSLEM que no encontré en su página. ¿Me pueden ayudar?'
  ),

  // CTA final — asks which language they want
  ctaFinal: wa(businessInfo.whatsappNumber,
    'Hola, vi su página web y quiero estudiar un idioma en INSLEM. ¿Me pueden orientar sobre cuál me conviene y cómo empezar?'
  ),

  // Floating button — general
  floating: wa(businessInfo.whatsappNumber,
    'Hola, vi su página web y quiero información sobre los cursos de INSLEM.'
  ),
}

// =============================================
// A/B TEST CONFIGURATION
// Change ctaTextVariant to 'A' or 'B' to test different CTA texts
// =============================================

export const abTest = {
  // Set to 'A' or 'B' to switch variants
  // Variant A = current (proven)
  // Variant B = experimental
  ctaTextVariant: 'A',

  // English course card CTAs
  englishCardCta: {
    A: 'Preguntar por esta modalidad',
    B: 'Quiero saber horarios',
  },

  // Hero CTA
  heroCta: {
    A: 'Solicitar información por WhatsApp',
    B: 'Preguntar por WhatsApp',
  },

  // CTA final button
  finalCta: {
    A: 'Escribir por WhatsApp',
    B: 'Hablar con INSLEM',
  },
}

// Helper to get current A/B variant
export function getCtaVariant(key) {
  const variant = abTest.ctaTextVariant
  const options = abTest[key]
  return options ? options[variant] : options.A
}

// =============================================
// Course pricing — exact data, no inventions
// =============================================

export const englishCourses = {
  intro: 'Elige la modalidad que mejor se adapte a tu tiempo. Tenemos opciones para quienes prefieren clases entre semana o una vez por semana.',

  modalities: [
    {
      id: 'intensive',
      badge: 'Lunes a jueves',
      subtitle: 'Curso intensivo semanal',
      hours: '2h/día',
      hoursIcon: 'fa-calendar-week',
      decisionLabel: 'Ideal si quieres avanzar de forma constante',
      decisionReinforce: '4 días de clases por semana para que el avance sea real. No te quedes estancado.',
      features: [
        '2 horas de clases diarias',
        '1 hora de lectura y escritura',
        '1 hora de expresión oral y comprensión auditiva',
        'Acceso a plataforma digital con materiales audiovisuales',
        'Horarios: mañana, tarde o noche',
      ],
      enrollment: 4300,
      monthly: 2500,
      ctaText: 'Preguntar por esta modalidad',
      ctaKey: 'englishCardCta',
      whatsappKey: 'englishIntensive',
      trackingId: 'englishIntensive',
    },
    {
      id: 'weekend',
      badge: 'Viernes o sábados',
      subtitle: 'Curso un día a la semana',
      hours: '4h continuas',
      hoursIcon: 'fa-calendar-day',
      decisionLabel: 'Ideal si trabajas o estudias durante la semana',
      decisionReinforce: '1 día a la semana pero con 4 horas intensivas. Igual de efectivo, más cómodo.',
      features: [
        '4 horas de clases continuas',
        'Ideal para quienes trabajan o estudian otros días',
        'Elige el horario que más te convenga',
      ],
      enrollment: 3800,
      monthly: 2000,
      ctaText: 'Preguntar por esta modalidad',
      ctaKey: 'englishCardCta',
      whatsappKey: 'englishWeekend',
      trackingId: 'englishWeekend',
    },
  ],

  trustNotes: [
    'Inscripción, materiales y camiseta incluidos',
    'Horarios según preferencia',
    'Consulta disponibilidad por WhatsApp',
  ],

  note: 'Precios válidos para Higüey.',
}

// =============================================
// Program duration
// =============================================

export const programDuration = {
  totalLevels: 6,
  firstLevels: { count: 4, duration: '~4 meses c/u', label: 'Primeros niveles' },
  lastLevels: { count: 2, duration: '~3 meses c/u', label: 'Últimos niveles' },
  note: 'Avanza a tu ritmo con el acompañamiento de nuestros docentes.',
}

// =============================================
// Languages offered
// =============================================

export const languages = [
  {
    name: 'Inglés',
    description: 'Útil para estudio, trabajo y crecimiento personal. El más demandado.',
    icon: 'fa-language',
    ctaText: 'Preguntar por inglés',
    whatsappKey: 'languageEnglish',
    trackingId: 'languageEnglish',
  },
  {
    name: 'Francés',
    description: 'Ideal para turismo, cultura y nuevas oportunidades.',
    icon: 'fa-globe-americas',
    ctaText: 'Preguntar por francés',
    whatsappKey: 'languageFrench',
    trackingId: 'languageFrench',
  },
  {
    name: 'Alemán',
    description: 'Opción valiosa para crecimiento académico y profesional.',
    icon: 'fa-globe-europe',
    ctaText: 'Preguntar por alemán',
    whatsappKey: 'languageGerman',
    trackingId: 'languageGerman',
  },
  {
    name: 'Español',
    description: 'Para extranjeros o quienes desean fortalecer su comunicación.',
    icon: 'fa-book-open',
    ctaText: 'Preguntar por español',
    whatsappKey: 'languageSpanish',
    trackingId: 'languageSpanish',
  },
]

// =============================================
// FAQ — real objections, short answers
// =============================================

export const faqItems = [
  {
    question: '¿Necesito experiencia previa?',
    answer: 'No. Empezamos desde el nivel que tú tengas. Nuestro primer paso es ubicarte en el nivel que más te conviene.',
  },
  {
    question: '¿Puedo elegir horario?',
    answer: 'Sí. Ofrecemos horarios de mañana, tarde y noche. Tú eliges el que mejor se adapte a tu rutina.',
  },
  {
    question: '¿Cómo sé qué nivel me toca?',
    answer: 'No te preocupes por eso. Cuando escribas o visites el instituto, te orientamos para ubicarte correctamente.',
  },
  {
    question: '¿Qué incluye la inscripción?',
    answer: 'Incluye la matrícula, materiales de estudio, camiseta institucional y acceso a la plataforma digital con materiales audiovisuales.',
  },
  {
    question: '¿Puedo pedir información por WhatsApp?',
    answer: 'Sí, es la forma más rápida. Escríbenos y te respondemos enseguida con toda la información que necesites.',
  },
  {
    question: '¿Dónde están ubicados?',
    answer: 'Estamos en C. Eustaquio Ducoudray #28, sector Savica, frente al Pica Pollo Matías, en Higüey.',
  },
  {
    question: '¿Qué días tienen clases?',
    answer: 'Tenemos dos modalidades: lunes a jueves (2 horas diarias) o viernes/sábado (4 horas continuas). Tú eliges.',
  },
]
