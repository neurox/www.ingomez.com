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
    model: { en: 'Model', es: 'Modelo' },
    about: { en: 'About', es: 'Nosotros' },
    getQuote: { en: 'Start your project', es: 'Cuéntanos tu proyecto' },
    languageName: { en: 'English', es: 'Español' },
  },

  hero: {
    eyebrow: { en: 'Web + AI Studio | Morelos, Mexico', es: 'Estudio Web + IA | Morelos, México' },
    title: {
      en: 'We build <em>intelligent</em> web platforms for Mexican businesses',
      es: 'Creamos plataformas web <em>inteligentes</em> para empresas mexicanas',
    },
    copy: {
      en: 'Custom software, practical AI integration, and process automation — without agency overhead or enterprise price tags. We assemble the right team for your project, deliver, and move on.',
      es: 'Software a medida, integración de IA práctica y automatización de procesos — sin la estructura de una agencia tradicional. Reunimos al equipo correcto para tu proyecto, entregamos y seguimos adelante.',
    },
    servicesLink: { en: 'Our services', es: 'Nuestros servicios' },
    modelLink: { en: 'How we work', es: 'Cómo trabajamos' },
  },

  differentiators: {
    sectionTitle: { en: 'Why INGOMEZ', es: 'Por qué INGOMEZ' },
    items: [
      {
        title: { en: 'Zero overhead', es: 'Cero overhead' },
        desc: {
          en: 'No office, no bench, no bloated structure. You pay for engineering, not for our rent.',
          es: 'Sin oficina, sin equipo en banca, sin estructura inflada. Pagas por ingeniería, no por nuestra renta.',
        },
      },
      {
        title: { en: 'Team per project', es: 'Equipo por proyecto' },
        desc: {
          en: 'We curate the right designer and developers for your specific needs. When the project ends, you stop paying.',
          es: 'Curamos al diseñador y desarrolladores correctos para tu proyecto. Cuando termina, dejas de pagar.',
        },
      },
      {
        title: { en: 'AI where it matters', es: 'IA donde aporta' },
        desc: {
          en: 'No buzzwords. We integrate AI to automate real tasks — customer intake, document processing, smart search.',
          es: 'Sin buzzwords. Integramos IA para automatizar tareas reales — atención a clientes, procesamiento de documentos, búsqueda inteligente.',
        },
      },
    ],
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
    label: { en: 'Process', es: 'Proceso' },
    title: {
      en: 'How we deliver',
      es: 'Cómo entregamos',
    },
    copy: {
      en: 'A clear three-phase approach. No black boxes, no surprises. You\'ll know exactly what\'s being built and why.',
      es: 'Un proceso claro en tres fases. Sin cajas negras, sin sorpresas. Sabrás exactamente qué se está construyendo y por qué.',
    },
    phases: [
      {
        number: { en: '01', es: '01' },
        title: { en: 'Discovery & Audit', es: 'Diagnóstico Digital' },
        desc: {
          en: 'We analyze your current tools, workflows, and pain points. Deliverable: a technical roadmap with priorities, architecture, and a fixed-price proposal.',
          es: 'Analizamos tus herramientas actuales, flujos de trabajo y puntos de dolor. Entregable: una hoja de ruta técnica con prioridades, arquitectura y propuesta a precio fijo.',
        },
      },
      {
        number: { en: '02', es: '02' },
        title: { en: 'Build & Iterate', es: 'Construcción Iterativa' },
        desc: {
          en: 'We assemble the team, set up a shared workspace, and build in cycles. You see progress every two weeks. Adjustments happen early, not at launch.',
          es: 'Reunimos al equipo, configuramos un espacio de trabajo compartido y construimos en ciclos. Ves avances cada dos semanas. Los ajustes suceden temprano, no al final.',
        },
      },
      {
        number: { en: '03', es: '03' },
        title: { en: 'Launch & Support', es: 'Lanzamiento y Soporte' },
        desc: {
          en: 'We deploy, train your team, and stay on retainer for iterations and maintenance. Your platform keeps improving after launch.',
          es: 'Desplegamos, capacitamos a tu equipo y nos quedamos en retainer para iteraciones y mantenimiento. Tu plataforma sigue mejorando después del lanzamiento.',
        },
      },
    ],
  },

  model: {
    label: { en: 'Team Model', es: 'Modelo de Trabajo' },
    title: {
      en: 'A studio, not an agency',
      es: 'Un estudio, no una agencia',
    },
    copy: {
      en: 'We operate as a distributed studio. No office, no fixed headcount, no overhead passed to you. Each project gets a hand-picked team from our network of designers and developers across Mexico.',
      es: 'Operamos como un estudio distribuido. Sin oficina, sin nómina fija, sin overhead que se traslada a tu factura. Cada proyecto recibe un equipo curado de nuestra red de diseñadores y desarrolladores en todo México.',
    },
    lead: {
      title: { en: 'Technical Lead', es: 'Líder Técnico' },
      name: { en: 'Juan Gómez', es: 'Juan Gómez' },
      location: { en: 'Cuernavaca, Morelos', es: 'Cuernavaca, Morelos' },
      desc: {
        en: 'I\'m the tech lead on every project. Architecture decisions, code quality, and client communication go through me. You always know who\'s responsible.',
        es: 'Soy el líder técnico en cada proyecto. Las decisiones de arquitectura, la calidad del código y la comunicación con el cliente pasan por mí. Siempre sabes quién es el responsable.',
      },
    },
    network: {
      title: { en: 'Curated Network', es: 'Red Curada' },
      desc: {
        en: 'We bring in senior designers and developers from our network based on what your project needs. UI/UX, backend, AI, DevOps — each person is chosen for the job, not pulled from a bench.',
        es: 'Traemos diseñadores y desarrolladores senior de nuestra red según lo que tu proyecto necesita. UI/UX, backend, IA, DevOps — cada persona se elige para el trabajo, no se toma de una banca.',
      },
    },
    result: {
      title: { en: 'The Result', es: 'El Resultado' },
      desc: {
        en: 'Agency-level technical quality at a price Mexican businesses can afford. You work directly with the people building your product — no account managers, no telephone game.',
        es: 'Calidad técnica de agencia a un precio que un negocio mexicano puede pagar. Trabajas directo con quienes construyen tu producto — sin account managers, sin teléfono descompuesto.',
      },
    },
  },

  about: {
    label: { en: 'About', es: 'Nosotros' },
    title: {
      en: 'INGOMEZ is a web + AI studio based in Morelos, Mexico.',
      es: 'INGOMEZ es un estudio de web + IA basado en Morelos, México.',
    },
    copy1: {
      en: 'Founded by Juan Gómez, a software engineer with deep experience in web architecture, DevOps, and platform engineering. After years of building digital products for others, I started INGOMEZ to bring that same technical rigor to Mexican businesses.',
      es: 'Fundado por Juan Gómez, ingeniero de software con experiencia en arquitectura web, DevOps e ingeniería de plataformas. Después de años construyendo productos digitales para otros, inicié INGOMEZ para traer ese mismo rigor técnico a empresas mexicanas.',
    },
    copy2: {
      en: 'We believe good software shouldn\'t require an enterprise budget. Our distributed model — no office, no fixed payroll, curated teams per project — makes serious engineering accessible to growing Mexican companies.',
      es: 'Creemos que el buen software no debería requerir un presupuesto enterprise. Nuestro modelo distribuido — sin oficina, sin nómina fija, equipos curados por proyecto — hace que la ingeniería seria sea accesible para empresas mexicanas en crecimiento.',
    },
    principles: {
      title: { en: 'How we operate', es: 'Cómo operamos' },
      items: [
        {
          en: 'We\'re engineers, not salespeople. If your project isn\'t a fit, we\'ll tell you.',
          es: 'Somos ingenieros, no vendedores. Si tu proyecto no encaja, te lo decimos.',
        },
        {
          en: 'Fixed-price proposals. You know the cost before we write a single line of code.',
          es: 'Propuestas a precio fijo. Conoces el costo antes de que escribamos una sola línea de código.',
        },
        {
          en: 'Every project has a single tech lead — no handoffs, no confusion about who\'s accountable.',
          es: 'Cada proyecto tiene un solo líder técnico — sin pases de responsabilidad, sin confusión sobre quién responde.',
        },
      ],
    },
    contact: {
      label: { en: 'Start the conversation', es: 'Inicia la conversación' },
      title: {
        en: 'Tell us about your project',
        es: 'Cuéntanos sobre tu proyecto',
      },
      copy: {
        en: 'Share what you\'re building, what\'s slowing you down, or what you want to automate. We\'ll respond with honest feedback — including whether we\'re the right team for it.',
        es: 'Comparte qué estás construyendo, qué te está frenando o qué quieres automatizar. Te respondemos con retroalimentación honesta — incluyendo si somos el equipo correcto para hacerlo.',
      },
    },
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
      en: 'Web platforms and practical AI for Mexican businesses. Distributed studio based in Cuernavaca, Morelos.',
      es: 'Plataformas web e IA práctica para empresas mexicanas. Estudio distribuido desde Cuernavaca, Morelos.',
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
      en: 'INGOMEZ. Built by <a href="https://www.juaning.dev" target="_blank" rel="noreferrer">Juan Gómez</a>. Cuernavaca, Morelos.',
      es: 'INGOMEZ. Construido por <a href="https://www.juaning.dev" target="_blank" rel="noreferrer">Juan Gómez</a>. Cuernavaca, Morelos.',
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
