(() => {
  const dialog = document.getElementById('team-profile');
  if (!dialog) return;

  const profiles = {
    0: {
      name: 'Ing. Olman Joaquin Ledezma Unzueta',
      role: 'Gerente de Proyectos',
      summary: 'Ingeniero Electromecánico especializado en electricidad y energía, con experiencia en gestión, diseño y supervisión de proyectos eléctricos y energéticos. Su trayectoria integra instalaciones eléctricas en Baja y Media Tensión, eficiencia energética, energías renovables, sostenibilidad y gestión de proyectos.',
      formation: [
        'Ingeniero Electromecánico – Universidad Autónoma Gabriel René Moreno.',
        'Diplomado en Edificación con Eficiencia Energética y Confort Adaptativo – Universidad Nacional Autónoma de México.',
        'Diplomado en Energías Renovables en Sistemas Eléctricos de Distribución – Universidad Autónoma Gabriel René Moreno.',
        'Maestría en Sistemas Eléctricos de Distribución – UAGRM (en curso).',
        'Maestría en Gerencia de la Ingeniería y Tecnología, mención Gerencia de Proyectos – Universidad Privada de Bolivia (en curso).',
      ],
      experience: 'Experiencia en diseño, proyección, gestión y supervisión de proyectos eléctricos en Baja y Media Tensión, instalaciones eléctricas para edificaciones, eficiencia energética, sistemas fotovoltaicos, climatización y domótica. Trayectoria en dirección y gestión de proyectos, con experiencia como Director de Proyectos y actualmente Gerente de Proyectos en Servicios Energéticos Profesionales (SEP).',
      certifications: [
        'Autodesk Certified Professional – AutoCAD.',
        'Autodesk Inventor Certified Professional.',
        'Autodesk Revit Certified Professional.',
        'LEED Green Associate.',
        'LEED AP® Building Operations + Maintenance.',
        'EDGE Expert.',
        'EDGE Faculty.',
        'Ingeniero habilitado por la Sociedad de Ingenieros de Bolivia.',
      ],
      activity: [
        'Gerente de Proyectos en Servicios Energéticos Profesionales (SEP).',
        'Participante del Comité Técnico de Normalización CTN 14.1 Electricidad y Energía de IBNORCA y, desde 2026, del CTN 12.2 Construcción.',
        'Líder de Proyecto en IBNORCA para la revisión y actualización de la Norma Boliviana NB 777 – Instalaciones Eléctricas Interiores en Baja Tensión.',
        'Verificador de Proyectos Eléctricos en Baja Tensión para la Sociedad de Ingenieros de Bolivia – Departamental Santa Cruz.',
        'Perito externo en instalaciones eléctricas y perito designado por el Colegio de Ingenieros Electricistas y Electrónicos de Santa Cruz para actuaciones periciales técnicas.',
        'Perito externo de instalaciones eléctricas en Baja Tensión para CRE R.L.',
        'Experiencia como instructor y disertante en instalaciones eléctricas, normativa NB 777, seguridad eléctrica, puesta a tierra, domótica, eficiencia energética y energías renovables.',
      ],
    },
    2: {
      name: 'Arq. Ariana Quiroga Velásquez',
      role: 'Coordinadora de Desarrollo Corporativo',
      summary: 'Arquitecta con experiencia en elaboración de planos en AutoCAD, relevamientos arquitectónicos y modelado 3D. Su perfil integra el área técnica con el diseño gráfico, la comunicación corporativa y la creación de contenido digital.',
      formation: ['Grado en Arquitectura – Universidad Privada de Santa Cruz de la Sierra (UPSA).'],
      experience: 'Experiencia en elaboración de planos arquitectónicos en AutoCAD, relevamientos arquitectónicos y desarrollo de modelos 3D. Experiencia complementaria en diseño gráfico, comunicación corporativa, creación de contenido digital y desarrollo de material institucional.',
      certifications: [
        'Autodesk Certified Professional: AutoCAD – Certificación internacional.',
        'Revit Architecture + Lumion – Nivel Básico–Intermedio.',
        'Valuación de Predios Rurales Agrícolas.',
        'Excel Básico–Intermedio.',
      ],
      activity: [
        'Coordinadora de Desarrollo Corporativo en Servicios Energéticos Profesionales (SEP), participando en la elaboración de planos y dibujos técnicos en AutoCAD, gestión de redes sociales, comunicación corporativa y desarrollo de piezas gráficas y material institucional.',
        'Experiencia en relevamientos arquitectónicos y elaboración de planos en AutoCAD en Hillplus.',
        'Experiencia previa en elaboración de planos arquitectónicos, desarrollo de modelos 3D y modelado de mobiliario para proyectos arquitectónicos.',
      ],
    },
    3: {
      name: 'Ing. Jhara Torrelio Robles',
      role: 'Ingeniera de Energías Renovables',
      summary: 'Ingeniera Industrial especializada en energía, eficiencia energética y mantenimiento, con formación y experiencia orientadas a sistemas eléctricos y energías renovables. Su trayectoria integra mantenimiento de subestaciones eléctricas, gestión técnica y desarrollo de proyectos fotovoltaicos y de generación renovable.',
      formation: [
        'Ingeniera Industrial – Universidad Autónoma Gabriel René Moreno.',
        'Diplomado en Energía y Eficiencia Energética – Universidad Tecnológica Privada de Santa Cruz.',
        'Diplomado en Energías Renovables – Universidad Tecnológica Privada de Santa Cruz.',
        'Diplomado en Energías Renovables en Sistemas Eléctricos de Distribución – Centro de Formación CRECE.',
        'Diplomado en Gestión de Proyectos de Energías Renovables bajo guía PMBOK – en curso.',
        'Maestría en Gestión de Energías Renovables y Eficiencia Energética – en curso.',
      ],
      experience: 'Experiencia en mantenimiento y gestión técnica de subestaciones eléctricas, elaboración de procedimientos conforme a normas IEEE e IEC, seguimiento de ensayos eléctricos e interpretación de resultados de pruebas. Actualmente participa en el diseño, documentación, seguimiento y soporte técnico de proyectos de energías renovables, instalaciones eléctricas y sistemas fotovoltaicos en Servicios Energéticos Profesionales (SEP).',
      certificationsTitle: 'Certificaciones y especialización',
      certifications: [
        'Técnico Instalador de Sistemas Fotovoltaicos de Generación Distribuida.',
        'Formación como Experto en Subestaciones Eléctricas de Potencia.',
        'Especialización en operación, mantenimiento, planificación y gestión de subestaciones eléctricas de potencia.',
        'Protección de Sistemas Eléctricos de Potencia.',
        'Termografía infrarroja aplicada al mantenimiento eléctrico.',
        'Seguridad y Riesgo Eléctrico según NFPA 70E.',
        'Diseño y Operación de Parques Eólicos.',
      ],
      activity: [
        'Ingeniera de Energías Renovables en Servicios Energéticos Profesionales (SEP).',
        'Experiencia en consultoría profesional para procedimientos de mantenimiento de subestaciones eléctricas en ENDE Guaracachi S.A.',
        'Miembro asociado de la Association of Energy Engineers (AEE).',
        'Miembro asociado de la Asociación de Mujeres en Energía de Bolivia (AMEB).',
        'Miembro asociado de Women in Industrial Engineering (WIIE).',
        'Participación en espacios técnicos y profesionales vinculados a transición energética, descarbonización de la matriz eléctrica, hidrógeno verde y sector energético.',
      ],
    },
  };

  const placeholders = {
    summary: 'Reseña profesional por confirmar.',
    formation: 'Estudios y formación académica por confirmar.',
    experience: 'Trayectoria y áreas de especialidad por confirmar.',
    certifications: 'Certificaciones y acreditaciones por confirmar.',
    activity: 'Participación y actividad profesional por confirmar.',
  };

  const blocks = Array.from(dialog.querySelectorAll('.profile-block'));
  const summary = dialog.querySelector('.profile-summary > p:last-of-type');
  const setBlock = (block, content) => {
    block.querySelector('.profile-copy, p')?.remove();
    const copy = document.createElement('div');
    copy.className = 'profile-copy';
    if (Array.isArray(content)) {
      const list = document.createElement('ul');
      content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
      });
      copy.append(list);
    } else {
      const paragraph = document.createElement('p');
      paragraph.textContent = content;
      copy.append(paragraph);
    }
    block.append(copy);
  };

  let opener;
  document.querySelectorAll('[data-person]').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.team-card');
      const profile = profiles[button.dataset.person];
      dialog.querySelector('#profile-name').textContent = profile?.name || card.querySelector('h3').textContent;
      dialog.querySelector('#profile-role').textContent = profile?.role || card.querySelector('.team-role').textContent;
      summary.textContent = profile?.summary || placeholders.summary;
      setBlock(blocks[0], profile?.formation || placeholders.formation);
      setBlock(blocks[1], profile?.experience || placeholders.experience);
      setBlock(blocks[2], profile?.certifications || placeholders.certifications);
      setBlock(blocks[3], profile?.activity || placeholders.activity);
      blocks[2].querySelector('h3').lastChild.nodeValue = profile?.certificationsTitle || 'Certificaciones';
      opener = button;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.profile-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
})();
