type Locale = 'en' | 'es';

type NestedStrings = {
  [key: string]: string | NestedStrings;
};

const strings = {
  siteTitle: { en: 'INGOMEZ', es: 'INGOMEZ' },

  skipToContent: {
    en: 'Skip to content',
    es: 'Saltar al contenido',
  },

  header: {
    openNav: { en: 'Open navigation', es: 'Abrir navegación' },
    navAria: { en: 'Primary', es: 'Principal' },
    services: { en: 'Services', es: 'Servicios' },
    process: { en: 'Process', es: 'Proceso' },
    model: { en: 'Collaboration', es: 'Colaboración' },
    about: { en: 'About', es: 'Nosotros' },
    getQuote: { en: 'Start your project', es: 'Cuéntanos tu proyecto' },
    languageName: { en: 'English', es: 'Español' },
  },

  hero: {
    eyebrow: { en: 'Web + AI Studio | Working worldwide', es: 'Estudio Web + IA | Clientes en todo el mundo' },
    title: {
      en: 'We build <em>intelligent</em> web platforms for clients worldwide',
      es: 'Creamos plataformas web <em>inteligentes</em> para clientes de todo el mundo',
    },
    copy: {
      en: 'Custom software, practical AI integration, and process automation. We are professionals who enjoy building together and bring our international project experience to independent work for clients like you.',
      es: 'Software a medida, integración de IA práctica y automatización de procesos. Somos profesionales que disfrutamos construir juntos y aportamos nuestra experiencia en proyectos internacionales al trabajo independiente con clientes como tú.',
    },
    servicesLink: { en: 'Our services', es: 'Nuestros servicios' },
    modelLink: { en: 'How we work', es: 'Cómo trabajamos' },
  },

  differentiators: {
  "label": {
    "es": "Nuestro enfoque",
    "en": "Our approach"
  },
  "sectionTitle": {
    "es": "Por qué INGOMEZ",
    "en": "Why INGOMEZ"
  },
  "items": [
    {
      "title": {
        "es": "Tu operación primero",
        "en": "Your operation first"
      },
      "desc": {
        "es": "Partimos de cómo trabaja tu equipo: qué necesita resolver, qué herramientas utiliza y dónde se pierde tiempo. Eso guía lo que construimos.",
        "en": "We start with how your team works: what it needs to solve, which tools it uses and where time is lost. That guides what we build."
      }
    },
    {
      "title": {
        "es": "Colaboración directa",
        "en": "Direct collaboration"
      },
      "desc": {
        "es": "Hablas con quienes diseñan y desarrollan tu solución. Puedes plantear dudas, revisar opciones y entender las decisiones del proyecto.",
        "en": "You talk to the people designing and developing your solution. You can ask questions, review options and understand project decisions."
      }
    },
    {
      "title": {
        "es": "Tecnología con propósito",
        "en": "Technology with purpose"
      },
      "desc": {
        "es": "Elegimos software, automatización o IA según el problema. Definimos contigo qué resultado buscamos y cómo comprobar si la solución ayuda.",
        "en": "We choose software, automation or AI to suit the problem. Together, we define the intended outcome and how to assess whether the solution helps."
      }
    }
  ]
},

  services: {
    label: { en: 'Services', es: 'Servicios' },
    title: {
      en: 'What we build',
      es: 'Lo que construimos',
    },
    copy: {
      en: 'Modern web platforms with practical AI — designed for businesses that outgrew templates but don\'t need an enterprise consultancy.',
      es: 'Plataformas web modernas con IA práctica — pensadas para empresas que superaron las plantillas pero no necesitan una consultoría enterprise.',
    },
    items: [
      {
        title: { en: 'Custom Web Platforms', es: 'Plataformas Web a Medida' },
        desc: {
          en: 'Client portals, booking systems, operational dashboards, inventory management. Built with modern stacks, tailored to how your business actually operates.',
          es: 'Portales de cliente, sistemas de reservas, dashboards operativos, control de inventarios. Construidos con stacks modernos y adaptados a cómo opera tu negocio realmente.',
        },
      },
      {
        title: { en: 'Practical AI Integration', es: 'Integración de IA Práctica' },
        desc: {
          en: 'Smart chatbots that qualify leads, document processing that cuts data entry, product recommendations that convert. AI applied to specific business problems, not generic demos.',
          es: 'Chatbots inteligentes que califican leads, procesamiento de documentos que elimina captura manual, recomendaciones de producto que convierten. IA aplicada a problemas concretos, no demos genéricos.',
        },
      },
      {
        title: { en: 'Process Automation', es: 'Automatización de Procesos' },
        desc: {
          en: 'Connect your CRM, email, invoicing, and inventory into automated workflows. Fewer spreadsheets, fewer manual steps, fewer errors.',
          es: 'Conectamos tu CRM, correo, facturación e inventario en flujos automatizados. Menos Excel, menos pasos manuales, menos errores.',
        },
      },
      {
        title: { en: 'Technical Consulting', es: 'Consultoría Técnica' },
        desc: {
          en: 'Architecture review, technology selection, vendor evaluation, digitalization roadmap. Technical clarity before committing to a build.',
          es: 'Revisión de arquitectura, selección de tecnología, evaluación de proveedores, hoja de ruta de digitalización. Claridad técnica antes de comprometerte a construir.',
        },
      },
    ],
  },

  process: {
  "label": {
    "es": "Proceso",
    "en": "Process"
  },
  "title": {
    "es": "De la necesidad a la puesta en marcha",
    "en": "From need to launch"
  },
  "copy": {
    "es": "Cada etapa tiene un objetivo y una revisión contigo. El alcance, el calendario y las entregas se acuerdan antes de empezar.",
    "en": "Each stage has a goal and a review with you. We agree on scope, schedule and deliverables before starting."
  },
  "phases": [
    {
      "number": {
        "es": "01",
        "en": "01"
      },
      "title": {
        "es": "Entender y delimitar",
        "en": "Understand and scope"
      },
      "desc": {
        "es": "Revisamos el problema, tus herramientas y las prioridades. Con esa base proponemos una solución, un alcance y un presupuesto.",
        "en": "We review the problem, your tools and priorities. From there, we propose a solution, scope and budget."
      }
    },
    {
      "number": {
        "es": "02",
        "en": "02"
      },
      "title": {
        "es": "Construir y revisar",
        "en": "Build and review"
      },
      "desc": {
        "es": "Diseñamos y desarrollamos por etapas. Revisas avances con la frecuencia acordada y ajustamos prioridades contigo cuando hace falta.",
        "en": "We design and develop in stages. You review progress at an agreed cadence, and we adjust priorities together when needed."
      }
    },
    {
      "number": {
        "es": "03",
        "en": "03"
      },
      "title": {
        "es": "Entregar y acompañar",
        "en": "Deliver and support"
      },
      "desc": {
        "es": "Preparamos la puesta en marcha y el uso de la solución. Definimos contigo la documentación, la capacitación y el soporte que requiere el proyecto.",
        "en": "We prepare the solution for launch and use. Together, we define the documentation, training and support the project needs."
      }
    }
  ]
},

  model: {
  "label": {
    "es": "Colaboración",
    "en": "Collaboration"
  },
  "title": {
    "es": "Un equipo conectado con el tuyo",
    "en": "A team connected to yours"
  },
  "copy": {
    "es": "La colaboración también se diseña: acordamos quién participa, dónde revisamos el trabajo y cómo se toman las decisiones.",
    "en": "Collaboration needs planning too: we agree on who participates, where we review work and how decisions are made."
  },
  "team": {
    "title": {
      "es": "Responsabilidades",
      "en": "Responsibilities"
    },
    "heading": {
      "es": "Sabes con quién hablar",
      "en": "You know who to contact"
    },
    "desc": {
      "es": "Definimos las especialidades y responsabilidades que necesita tu proyecto, con interlocutores claros para cada etapa.",
      "en": "We define the skills and responsibilities your project needs, with clear points of contact at each stage."
    }
  },
  "network": {
    "title": {
      "es": "Visibilidad",
      "en": "Visibility"
    },
    "desc": {
      "es": "Compartimos avances, preguntas y decisiones en los canales acordados. Puedes seguir el trabajo y aportar contexto mientras la solución toma forma.",
      "en": "We share progress, questions and decisions through agreed channels. You can follow the work and add context as the solution takes shape."
    }
  },
  "result": {
    "title": {
      "es": "Decisiones",
      "en": "Decisions"
    },
    "desc": {
      "es": "Cuando surge un cambio, revisamos su efecto en el alcance, el tiempo y el presupuesto. Acordamos el siguiente paso contigo.",
      "en": "When a change comes up, we review its effect on scope, time and budget. We agree on the next step with you."
    }
  }
},

  about: {
  "label": {
    "es": "Nosotros",
    "en": "About"
  },
  "title": {
    "es": "Distintas disciplinas. Una práctica compartida.",
    "en": "Different disciplines. A shared practice."
  },
  "copy1": {
    "es": "INGOMEZ es un equipo independiente que reúne diseño, ingeniería de software, IA y automatización. Nos une el gusto por construir soluciones útiles y entender los problemas detrás de cada proyecto.",
    "en": "INGOMEZ is an independent team bringing together design, software engineering, AI and automation. We share a passion for building useful solutions and understanding the problems behind each project."
  },
  "copy2": {
    "es": "Nuestra experiencia profesional incluye trabajo con clientes internacionales a través de empresas de outsourcing. Esa práctica nos ha familiarizado con equipos distribuidos, comunicación remota y entrega de proyectos. En INGOMEZ la aplicamos a colaboraciones propias con clientes de cualquier parte del mundo.",
    "en": "Our professional experience includes working with international clients through outsourcing companies. That practice has made us familiar with distributed teams, remote communication and project delivery. At INGOMEZ, we apply it to our own collaborations with clients worldwide."
  },
  "principles": {
    "title": {
      "es": "Lo que valoramos",
      "en": "What we value"
    },
    "items": [
      {
        "es": "Entender el contexto antes de proponer una solución.",
        "en": "Understanding the context before proposing a solution."
      },
      {
        "es": "Explicar las opciones y sus implicaciones con claridad.",
        "en": "Explaining options and their implications clearly."
      },
      {
        "es": "Crear software que las personas puedan usar y mantener.",
        "en": "Creating software people can use and maintain."
      }
    ]
  },
  "contact": {
    "label": {
      "es": "Primer paso",
      "en": "First step"
    },
    "title": {
      "es": "¿Qué necesitas resolver?",
      "en": "What do you need to solve?"
    },
    "copy": {
      "es": "Cuéntanos qué quieres mejorar, qué herramientas usas y si tienes un plazo en mente. Revisaremos tu mensaje para identificar qué información falta y acordar el siguiente paso.",
      "en": "Tell us what you want to improve, which tools you use and whether you have a deadline in mind. We will review your message to identify any missing information and agree on the next step."
    }
  }
},

  form: {
    name: { en: 'Name', es: 'Nombre' },
    email: { en: 'Email', es: 'Correo electrónico' },
    company: { en: 'Company', es: 'Empresa' },
    message: { en: 'Message', es: 'Mensaje' },
    submit: { en: 'Send message', es: 'Enviar mensaje' },
  },

  footer: {
    tagline: {
      en: 'An independent team building web platforms, AI integrations, and automation for clients worldwide.',
      es: 'Un equipo independiente que crea plataformas web, integraciones de IA y automatización para clientes de todo el mundo.',
    },
    services: { en: 'Services', es: 'Servicios' },
    webPlatforms: { en: 'Web Platforms', es: 'Plataformas Web' },
    aiIntegration: { en: 'AI Integration', es: 'Integración de IA' },
    automation: { en: 'Automation', es: 'Automatización' },
    consulting: { en: 'Consulting', es: 'Consultoría' },
    company: { en: 'Company', es: 'Estudio' },
    process: { en: 'How we work', es: 'Cómo trabajamos' },
    about: { en: 'About', es: 'Nosotros' },
    contact: { en: 'Contact', es: 'Contacto' },
    copyright: {
      en: 'INGOMEZ. Built together. Based in Mexico, working worldwide.',
      es: 'INGOMEZ. Construimos juntos. Desde México, para todo el mundo.',
    },
    home: { en: 'Home', es: 'Inicio' },
  },

  notFound: {
    eyebrow: { en: '404', es: '404' },
    title: {
      en: 'This page doesn\'t exist.',
      es: 'Esta página no existe.',
    },
    copy: {
      en: 'The URL may have changed or the content was moved.',
      es: 'La URL puede haber cambiado o el contenido fue movido.',
    },
    link: { en: 'Back to homepage', es: 'Volver al inicio' },
  },
} as const;

export function t(key: string, locale: Locale): string {
  const parts = key.split('.');
  let current: any = strings;

  for (const part of parts) {
    if (Array.isArray(current)) {
      const idx = parseInt(part, 10);
      if (isNaN(idx) || idx >= current.length) {
        return key;
      }
      current = current[idx];
    } else {
      current = current[part];
    }
    if (current === undefined) {
      return key;
    }
  }

  if (typeof current === 'object' && current !== null && 'en' in current) {
    return (current as { en: string; es: string })[locale] || key;
  }

  return key;
}

export function getLocaleFromUrl(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'es';
}
