/**
 * TrueAge | Exact Age Calculator & Milestone Tracker
 * High-Performance Vanilla ES6 i18n & Dynamic SEO JSON-LD Engine
 * Supported Locales: English (en), Español (es), Português (pt), Deutsch (de), Français (fr), 日本語 (ja)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Comprehensive Multi-Language Dictionary
  // =========================================================================
  const TRANSLATIONS = {
    en: {
      meta_title: "TrueAge | Exact Age Calculator, 60FPS Live Ticking & Milestone Tracker",
      meta_desc: "Calculate your exact age down to the second with a real-time ticking 60FPS counter. Track your next birthday, 10,000th day, 1 billion seconds, planetary age on Mars & Jupiter, and life statistics. 100% client-side and private.",
      support_btn: "Support Developer",
      tag_badge: "100% Client-Side & Zero-Server Private",
      hero_title_prefix: "Calculate Your",
      hero_title_gradient: "Exact Age & Life Milestones",
      hero_subtitle: "High-precision chronological age calculator with real-time 60FPS ticking. Explore total hours, days, seconds alive, upcoming quirky milestones, and your age across the solar system.",
      label_dob: "Date of Birth",
      label_required: "Required",
      label_time: "Time of Birth",
      label_optional: "Optional (for 60FPS precision)",
      btn_calculate: "Calculate Exact Age",
      btn_example: "Try Example",
      btn_reset: "Reset",
      privacy_note: "Calculations run locally in your browser. Zero data leaves your device.",
      live_ticking: "Live 60FPS Chronometer",
      unit_years: "Years",
      unit_months: "Months",
      unit_days: "Days",
      unit_hours: "Hours",
      unit_minutes: "Minutes",
      unit_seconds: "Seconds",
      bday_next_title: "Next Birthday Countdown",
      bday_celebration_prefix: "Celebration falls on a",
      title_total_alive: "Total Time Alive Breakdown",
      desc_total_alive: "Your complete existence converted into individual cumulative metrics.",
      stat_days: "Total Days Alive",
      stat_hours: "Total Hours Alive",
      stat_minutes: "Total Minutes Alive",
      stat_seconds: "Total Seconds Alive",
      stat_breaths: "Estimated Breaths (~16/min)",
      stat_heartbeats: "Estimated Heartbeats (~75 bpm)",
      title_milestones: "Life Milestone Dashboard",
      desc_milestones: "Quirky and profound life achievements with progress tracking.",
      title_planets: "Planetary Age Calculator",
      desc_planets: "How old you would be if you were born on other planets in our solar system.",
      unit_planetary_years: "Planetary Years",
      orbit_prefix: "Next orbit:",
      earth_days_suffix: "Earth days",
      title_profile: "Astrological & Life Profile",
      desc_profile: "Fascinating astrological facts and generational cohort identification.",
      prof_zodiac: "Western Zodiac",
      prof_chinese: "Chinese Zodiac",
      prof_dayborn: "Day of Week Born",
      prof_generation: "Generation",
      tool_copy_summary: "Copy Age Summary",
      tool_copy_link: "Copy Shareable Link",
      tool_share_whatsapp: "Share on WhatsApp",
      tool_share_twitter: "Share on X",
      tool_print: "Print / PDF",
      title_faq: "Frequently Asked Questions",
      desc_faq: "Learn more about exact age mathematics, leap year corrections, and astronomical timekeeping.",
      faq_q1: "How does TrueAge calculate exact chronological age?",
      faq_a1: "TrueAge calculates exact age using calendar-accurate algorithms that account for varying days in each month and leap years (such as February 29th). It computes the difference between your birth moment and the exact current system time down to the second.",
      faq_q2: "How does leap year affect age calculations?",
      faq_a2: "A standard Gregorian year has 365 days, while a leap year has 366 days. TrueAge's mathematical engine determines whether your elapsed periods crossed a leap day (Feb 29) and dynamically adjusts the month length when calculating exact elapsed days, months, and years.",
      faq_q3: "What is a 10,000th Day and 1 Billion Seconds milestone?",
      faq_a3: "Your 10,000th day occurs when you are approximately 27 years and 4.5 months old. One billion seconds alive occurs around age 31 years, 8 months, and 19 days. TrueAge calculates the precise calendar date and time for each milestone.",
      faq_q4: "How is age calculated on other planets like Mars or Jupiter?",
      faq_a4: "Planetary age is determined by each planet's orbital period around the Sun relative to Earth. For instance, Mars takes 1.8808 Earth years to complete one orbit, so a 30-year-old on Earth is approximately 15.95 Martian years old.",
      faq_q5: "What is a half-birthday?",
      faq_a5: "A half-birthday occurs exactly 6 calendar months from your birth date. It serves as an enjoyable mid-year milestone celebration point.",
      faq_q6: "Is my birth date stored on any server?",
      faq_a6: "No. TrueAge is 100% client-side. All date calculations and processing occur entirely inside your browser sandbox. No personal data or birth details are ever sent to any remote server.",
      art_title: "The Science of Chronological Age & Astronomical Timekeeping",
      art_p1: "Chronological age measures the duration of time elapsed from a person's moment of birth to the current instant. While civil time uses simple yearly anniversaries, true biological and mathematical age is continuous and affected by the complexities of the Gregorian calendar system.",
      art_h2_1: "Gregorian Drift and Leap Year Corrections",
      art_p2: "The Earth requires approximately 365.2422 solar days to complete one full revolution around the Sun (a tropical year). To account for this fractional day, the Gregorian calendar adds a leap day on February 29th every 4 years, omitting years divisible by 100 unless also divisible by 400. TrueAge dynamically evaluates every month boundary to ensure precise year-month-day decomposition.",
      art_h2_2: "Planetary Orbital Periods",
      art_p3: "A year is physically defined as one orbital revolution of a celestial body around its host star. Because orbital distances follow Kepler's laws of planetary motion, inner planets like Mercury orbit rapidly in just 87.97 Earth days, while outer giants like Jupiter require nearly 12 Earth years. TrueAge provides exact astronomical translations of your lifespan across all major planets in the solar system.",
      footer_desc: "The high-precision, 100% client-side chronological age calculator and life milestone tracker. Free, open, and private.",
      footer_languages: "Global Editions"
    },

    es: {
      meta_title: "TrueAge | Calculadora de Edad Exacta, Contador 60FPS y Seguidor de Hitos",
      meta_desc: "Calcula tu edad exacta al segundo con un contador en tiempo real a 60FPS. Descubre tu próximo cumpleaños, día 10.000, 1.000 millones de segundos, edad en Marte y Júpiter. 100% del lado del cliente y privado.",
      support_btn: "Apoyar al Creador",
      tag_badge: "100% en el Navegador y Privacidad Total",
      hero_title_prefix: "Calcula Tu",
      hero_title_gradient: "Edad Exacta e Hitos de Vida",
      hero_subtitle: "Calculadora de edad cronológica de alta precisión con segundero en vivo a 60FPS. Explora tus horas, días y segundos vividos, próximos hitos curiosos y tu edad en el sistema solar.",
      label_dob: "Fecha de Nacimiento",
      label_required: "Obligatorio",
      label_time: "Hora de Nacimiento",
      label_optional: "Opcional (para precisión a 60FPS)",
      btn_calculate: "Calcular Edad Exacta",
      btn_example: "Probar Ejemplo",
      btn_reset: "Restablecer",
      privacy_note: "Los cálculos se ejecutan localmente en tu navegador. Cero datos salen de tu dispositivo.",
      live_ticking: "Cronómetro en Vivo a 60FPS",
      unit_years: "Años",
      unit_months: "Meses",
      unit_days: "Días",
      unit_hours: "Horas",
      unit_minutes: "Minutos",
      unit_seconds: "Segundos",
      bday_next_title: "Cuenta Atrás para el Próximo Cumpleaños",
      bday_celebration_prefix: "La celebración cae en",
      title_total_alive: "Desglose del Tiempo Total Vivido",
      desc_total_alive: "Tu existencia completa convertida en métricas acumulativas individuales.",
      stat_days: "Total de Días Vividos",
      stat_hours: "Total de Horas Vividas",
      stat_minutes: "Total de Minutos Vividos",
      stat_seconds: "Total de Segundos Vividos",
      stat_breaths: "Respiraciones Estimadas (~16/min)",
      stat_heartbeats: "Latidos Estimados (~75 lpm)",
      title_milestones: "Panel de Hitos de Vida",
      desc_milestones: "Logros vitales curiosos y profundos con seguimiento del progreso.",
      title_planets: "Calculadora de Edad Planetaria",
      desc_planets: "Qué edad tendrías si hubieras nacido en otros planetas de nuestro sistema solar.",
      unit_planetary_years: "Años Planetarios",
      orbit_prefix: "Próxima órbita:",
      earth_days_suffix: "días terrestres",
      title_profile: "Perfil Astrológico y de Vida",
      desc_profile: "Datos astrológicos fascinantes e identificación de tu cohorte generacional.",
      prof_zodiac: "Zodíaco Occidental",
      prof_chinese: "Zodíaco Chino",
      prof_dayborn: "Día de Nacimiento",
      prof_generation: "Generación",
      tool_copy_summary: "Copiar Resumen",
      tool_copy_link: "Copiar Enlace",
      tool_share_whatsapp: "Compartir en WhatsApp",
      tool_share_twitter: "Publicar en X",
      tool_print: "Imprimir / PDF",
      title_faq: "Preguntas Frecuentes",
      desc_faq: "Conoce más sobre la matemática de la edad exacta, años bisiestos y tiempo astronómico.",
      faq_q1: "¿Cómo calcula TrueAge la edad cronológica exacta?",
      faq_a1: "TrueAge calcula la edad exacta mediante algoritmos que consideran la duración variable de cada mes y los años bisiestos (como el 29 de febrero), midiendo la diferencia exacta hasta el segundo actual.",
      faq_q2: "¿Cómo afectan los años bisiestos al cálculo de la edad?",
      faq_a2: "Un año estándar tiene 365 días y uno bisiesto 366. El motor matemático de TrueAge evalúa si tus períodos transcurridos cruzaron el 29 de febrero y ajusta dinámicamente la duración mensual.",
      faq_q3: "¿Qué son los hitos del día 10.000 y los mil millones de segundos?",
      faq_a3: "Tu día 10.000 ocurre aproximadamente a los 27 años y 4,5 meses. Mil millones de segundos vividos se alcanzan cerca de los 31 años y 8 meses. TrueAge calcula la fecha y hora exactas.",
      faq_q4: "¿Cómo se calcula la edad en otros planetas como Marte o Júpiter?",
      faq_a4: "La edad planetaria se calcula dividiendo tus años terrestres por el período orbital de cada planeta alrededor del Sol. Por ejemplo, Marte tarda 1,8808 años terrestres en completar una órbita.",
      faq_q5: "¿Qué es un medio cumpleaños?",
      faq_a5: "Un medio cumpleaños ocurre exactamente a los 6 meses de tu fecha de nacimiento, sirviendo como una divertida celebración de mitad de año.",
      faq_q6: "¿Se almacena mi fecha de nacimiento en algún servidor?",
      faq_a6: "No. TrueAge es 100% del lado del cliente. Todos los cálculos se realizan exclusivamente en tu navegador. Ningún dato viaja a servidores externos.",
      art_title: "La Ciencia de la Edad Cronológica y el Tiempo Astronómico",
      art_p1: "La edad cronológica mide el tiempo transcurrido desde el momento del nacimiento hasta el instante presente. La edad matemática real es continua y responde a las complejidades del calendario gregoriano.",
      art_h2_1: "Deriva Gregoriana y Correcciones por Años Bisiestos",
      art_p2: "La Tierra tarda aproximadamente 365,2422 días solares en completar una vuelta al Sol. Para compensar esa fracción, el calendario gregoriano añade un día bisiesto el 29 de febrero cada 4 años. TrueAge evalúa cada límite mensual con precisión.",
      art_h2_2: "Períodos Orbitales Planetarios",
      art_p3: "Un año se define físicamente como una revolución orbital alrededor del Sol. Según las leyes de Kepler, Mercurio orbita en 87,97 días terrestres, mientras Júpiter requiere casi 12 años. TrueAge traduce tu vida a través del cosmos.",
      footer_desc: "Calculadora de edad cronológica de alta precisión y seguimiento de hitos de vida 100% en el cliente. Gratis, abierta y privada.",
      footer_languages: "Ediciones Globales"
    },

    pt: {
      meta_title: "TrueAge | Calculadora de Idade Exata, Contador 60FPS e Rastreador de Marcos",
      meta_desc: "Calcule sua idade exata até o segundo com cronômetro em tempo real a 60FPS. Descubra seu próximo aniversário, 10.000º dia, 1 bilhão de segundos e idade em Marte. 100% no navegador e privado.",
      support_btn: "Apoiar o Criador",
      tag_badge: "100% no Navegador & Totalmente Privado",
      hero_title_prefix: "Calcule Sua",
      hero_title_gradient: "Idade Exata & Marcos de Vida",
      hero_subtitle: "Calculadora cronológica de alta precisão com contador ao vivo a 60FPS. Explore dias, horas e segundos vividos, marcos curiosos e sua idade no sistema solar.",
      label_dob: "Data de Nascimento",
      label_required: "Obrigatório",
      label_time: "Hora de Nascimento",
      label_optional: "Opcional (para precisão a 60FPS)",
      btn_calculate: "Calcular Idade Exata",
      btn_example: "Testar Exemplo",
      btn_reset: "Redefinir",
      privacy_note: "Os cálculos ocorrem localmente no seu navegador. Nenhum dado sai do seu dispositivo.",
      live_ticking: "Cronômetro em Tempo Real 60FPS",
      unit_years: "Anos",
      unit_months: "Meses",
      unit_days: "Dias",
      unit_hours: "Horas",
      unit_minutes: "Minutos",
      unit_seconds: "Segundos",
      bday_next_title: "Contagem Regressiva para o Próximo Aniversário",
      bday_celebration_prefix: "A celebração cai em",
      title_total_alive: "Tempo Total Vivido Detalhado",
      desc_total_alive: "Sua existência completa convertida em métricas cumulativas individuais.",
      stat_days: "Total de Dias Vividos",
      stat_hours: "Total de Horas Vividas",
      stat_minutes: "Total de Minutos Vividos",
      stat_seconds: "Total de Segundos Vividos",
      stat_breaths: "Respirações Estimadas (~16/min)",
      stat_heartbeats: "Batimentos Estimados (~75 bpm)",
      title_milestones: "Painel de Marcos da Vida",
      desc_milestones: "Conquistas curiosas e profundas da vida com acompanhamento do progresso.",
      title_planets: "Calculadora de Idade Planetária",
      desc_planets: "Quantos anos você teria se tivesse nascido em outros planetas do sistema solar.",
      unit_planetary_years: "Anos Planetários",
      orbit_prefix: "Próxima órbita:",
      earth_days_suffix: "dias terrestres",
      title_profile: "Perfil Astrológico e de Vida",
      desc_profile: "Fatos astrológicos fascinantes e identificação da sua geração.",
      prof_zodiac: "Zodíaco Ocidental",
      prof_chinese: "Zodíaco Chinês",
      prof_dayborn: "Dia da Semana de Nascimento",
      prof_generation: "Geração",
      tool_copy_summary: "Copiar Resumo",
      tool_copy_link: "Copiar Link",
      tool_share_whatsapp: "Compartilhar no WhatsApp",
      tool_share_twitter: "Postar no X",
      tool_print: "Imprimir / PDF",
      title_faq: "Perguntas Frequentes",
      desc_faq: "Saiba mais sobre a matemática da idade exata, anos bissextos e tempo astronômico.",
      faq_q1: "Como o TrueAge calcula a idade cronológica exata?",
      faq_a1: "O TrueAge calcula a idade exata com algoritmos precisos que consideram a duração exata de cada mês e anos bissextos (como 29 de fevereiro), calculando a diferença até o segundo atual.",
      faq_q2: "Como o ano bissexto afeta os cálculos de idade?",
      faq_a2: "Um ano normal tem 365 dias e um bissexto tem 366. O TrueAge detecta se o período cruzou o dia 29 de fevereiro e ajusta o cálculo mês a mês.",
      faq_q3: "O que são os marcos do 10.000º dia e 1 bilhão de segundos?",
      faq_a3: "O 10.000º dia ocorre aproximadamente aos 27 anos e 4,5 meses. 1 bilhão de segundos vivos acontece por volta dos 31 anos e 8 meses.",
      faq_q4: "Como a idade é calculada em outros planetas?",
      faq_a4: "A idade planetária é calculada dividindo os anos terrestres pelo período orbital de cada planeta. Por exemplo, Marte leva 1,8808 anos terrestres para dar uma volta ao Sol.",
      faq_q5: "O que é um meio-aniversário?",
      faq_a5: "Um meio-aniversário ocorre exatamente 6 meses após a sua data de nascimento, como uma data festiva de meio de ano.",
      faq_q6: "Minha data de nascimento fica salva em algum servidor?",
      faq_a6: "Não. O TrueAge é 100% no cliente. Todos os dados permanecem estritamente no seu navegador.",
      art_title: "A Ciência da Idade Cronológica e Cronometria Astronômica",
      art_p1: "A idade cronológica mede o tempo decorrido desde o instante do nascimento até o momento presente, considerando todas as nuances do calendário gregoriano.",
      art_h2_1: "Deriva Gregoriana e Ajustes de Anos Bissextos",
      art_p2: "A Terra leva cerca de 365,2422 dias para completar uma translação ao redor do Sol. Para sincronizar o calendário, adiciona-se o dia 29 de fevereiro a cada 4 anos.",
      art_h2_2: "Períodos Orbitais Planetários",
      art_p3: "Um ano é a revolução completa de um corpo celeste ao redor da sua estrela. Mercúrio completa uma órbita em apenas 87,97 dias, enquanto Júpiter leva quase 12 anos terrestres.",
      footer_desc: "Calculadora de idade cronológica de alta precisão e rastreador de marcos da vida. Grátis, aberta e privada.",
      footer_languages: "Edições Globais"
    },

    de: {
      meta_title: "TrueAge | Exakter Altersrechner, 60FPS Live-Zähler & Meilenstein-Tracker",
      meta_desc: "Berechnen Sie Ihr genaues Alter sekundengenau mit einem flüssigen 60FPS-Echtzeitzähler. Verfolgen Sie Ihren nächsten Geburtstag, den 10.000sten Tag, 1 Milliarde Sekunden und Ihr Alter auf Mars & Jupiter.",
      support_btn: "Entwickler unterstützen",
      tag_badge: "100% Client-Side & Vollständig Privat",
      hero_title_prefix: "Berechnen Sie Ihr",
      hero_title_gradient: "Exaktes Alter & Lebens-Meilensteine",
      hero_subtitle: "Hochpräziser chronologischer Altersrechner mit flüssigem 60FPS-Echtzeitticker. Entdecken Sie Tage, Stunden, Sekunden, bevorstehende Meilensteine und Ihr kosmisches Alter.",
      label_dob: "Geburtsdatum",
      label_required: "Erforderlich",
      label_time: "Geburtszeit",
      label_optional: "Optional (für 60FPS-Präzision)",
      btn_calculate: "Exaktes Alter berechnen",
      btn_example: "Beispiel testen",
      btn_reset: "Zurücksetzen",
      privacy_note: "Berechnungen erfolgen lokal im Browser. Keine Daten verlassen Ihr Gerät.",
      live_ticking: "Live 60FPS Chronometer",
      unit_years: "Jahre",
      unit_months: "Monate",
      unit_days: "Tage",
      unit_hours: "Stunden",
      unit_minutes: "Minuten",
      unit_seconds: "Sekunden",
      bday_next_title: "Countdown zum nächsten Geburtstag",
      bday_celebration_prefix: "Geburtstag fällt auf einen",
      title_total_alive: "Gesamte Lebenszeit im Überblick",
      desc_total_alive: "Ihre vollständige Existenz umgerechnet in kumulative Einzelmetriken.",
      stat_days: "Gelebte Tage gesamt",
      stat_hours: "Gelebte Stunden gesamt",
      stat_minutes: "Gelebte Minuten gesamt",
      stat_seconds: "Gelebte Sekunden gesamt",
      stat_breaths: "Geschätzte Atemzüge (~16/Min)",
      stat_heartbeats: "Geschätzte Herzschläge (~75 bpm)",
      title_milestones: "Lebens-Meilenstein Dashboard",
      desc_milestones: "Besondere und tiefgründige Lebensereignisse mit Fortschrittsanzeige.",
      title_planets: "Planetarer Altersrechner",
      desc_planets: "Wie alt Sie wären, wenn Sie auf anderen Planeten unseres Sonnensystems geboren wären.",
      unit_planetary_years: "Planetare Jahre",
      orbit_prefix: "Nächster Umlauf:",
      earth_days_suffix: "Erden-Tage",
      title_profile: "Astrologisches & Lebens-Profil",
      desc_profile: "Faszinierende astrologische Fakten und Bestimmung Ihrer Generation.",
      prof_zodiac: "Westliches Sternzeichen",
      prof_chinese: "Chinesisches Sternzeichen",
      prof_dayborn: "Geburts-Wochentag",
      prof_generation: "Generation",
      tool_copy_summary: "Zusammenfassung kopieren",
      tool_copy_link: "Link kopieren",
      tool_share_whatsapp: "Über WhatsApp teilen",
      tool_share_twitter: "Auf X teilen",
      tool_print: "Drucken / PDF",
      title_faq: "Häufig gestellte Fragen (FAQ)",
      desc_faq: "Erfahren Sie mehr über präzise Altersmathematik, Schaltjahre und astronomische Zeitmessung.",
      faq_q1: "Wie berechnet TrueAge das genaue chronologische Alter?",
      faq_a1: "TrueAge verwendet kalendergenaue Algorithmen, die unterschiedliche Monatslängen und Schaltjahre (wie den 29. Februar) exakt berücksichtigen und den Zeitunterschied sekundengenau berechnen.",
      faq_q2: "Wie wirken sich Schaltjahre auf das Alter aus?",
      faq_a2: "Ein normales Jahr hat 365 Tage, ein Schaltjahr 366 Tage. TrueAge ermittelt exakt, ob Schaltjahre durchlaufen wurden, und passt die Monatsdifferenzen an.",
      faq_q3: "Was bedeuten der 10.000ste Tag und 1 Milliarde Sekunden?",
      faq_a3: "Ihr 10.000ster Lebenstag findet mit ca. 27 Jahren und 4,5 Monaten statt. Eine Milliarde gelebte Sekunden erreichen Sie mit ca. 31 Jahren und 8 Monaten.",
      faq_q4: "Wie wird das Alter auf anderen Planeten berechnet?",
      faq_a4: "Das planetare Alter berechnet sich aus der Umlaufzeit jedes Planeten um die Sonne im Verhältnis zur Erde. Der Mars benötigt beispielsweise 1,8808 Erdenjahre.",
      faq_q5: "Was ist ein Halb-Geburtstag?",
      faq_a5: "Ein Halb-Geburtstag findet genau 6 Kalendermonate nach Ihrem Geburtstag statt und bietet einen schönen Anlass für eine Halbjahresfeier.",
      faq_q6: "Wird mein Geburtsdatum auf Servern gespeichert?",
      faq_a6: "Nein. TrueAge arbeitet zu 100% im Browser. Keine persönlichen Angaben verlassen Ihr Gerät.",
      art_title: "Die Wissenschaft des chronologischen Alters & astronomische Zeitmessung",
      art_p1: "Das chronologische Alter misst die exakte Zeitspanne von der Geburt bis zur Gegenwart unter genauer Berücksichtigung des gregorianischen Kalendersystems.",
      art_h2_1: "Gregorianscher Kalender und Schaltjahr-Korrekturen",
      art_p2: "Die Erde benötigt etwa 365,2422 Tage für einen Sonnenumlauf. Um die Jahreszeiten synchron zu halten, wird alle vier Jahre der 29. Februar als Schalttag eingefügt.",
      art_h2_2: "Planetare Umlaufzeiten",
      art_p3: "Ein Jahr ist die Umlaufzeit eines Himmelskörpers um sein Zentralgestirn. Merkur benötigt nur 87,97 Erdentage, während Jupiter fast 12 Erdenjahre braucht.",
      footer_desc: "Hochpräziser, rein clientseitiger Altersrechner und Lebens-Meilenstein-Tracker. Kostenlos, quelloffen und privat.",
      footer_languages: "Globale Editionen"
    },

    fr: {
      meta_title: "TrueAge | Calculateur d'Âge Exact, Compteur 60FPS et Jalons de Vie",
      meta_desc: "Calculez votre âge exact à la seconde près avec un compteur fluide en temps réel à 60FPS. Découvrez votre prochain anniversaire, 10 000e jour, 1 milliard de secondes et votre âge sur Mars et Jupiter.",
      support_btn: "Soutenir le Créateur",
      tag_badge: "100% Côté Client & Zéro Serveur Privé",
      hero_title_prefix: "Calculez Votre",
      hero_title_gradient: "Âge Exact & Jalons de Vie",
      hero_subtitle: "Calculateur d'âge chronologique haute précision avec horloge en temps réel à 60FPS. Découvrez vos jours, heures et secondes vécus, vos prochains grands jalons et votre âge dans l'espace.",
      label_dob: "Date de Naissance",
      label_required: "Requis",
      label_time: "Heure de Naissance",
      label_optional: "Optionnel (pour la précision 60FPS)",
      btn_calculate: "Calculer l'Âge Exact",
      btn_example: "Essayer un Exemple",
      btn_reset: "Réinitialiser",
      privacy_note: "Les calculs sont exécutés localement dans votre navigateur. Aucune donnée ne quitte votre appareil.",
      live_ticking: "Chronomètre 60FPS en Direct",
      unit_years: "Ans",
      unit_months: "Mois",
      unit_days: "Jours",
      unit_hours: "Heures",
      unit_minutes: "Minutes",
      unit_seconds: "Secondes",
      bday_next_title: "Compte à Rebours du Prochain Anniversaire",
      bday_celebration_prefix: "La célébration aura lieu un",
      title_total_alive: "Temps Total Vécu en Détail",
      desc_total_alive: "Votre existence complète convertie en métriques cumulatives individuelles.",
      stat_days: "Total de Jours Vécus",
      stat_hours: "Total d'Heures Vécues",
      stat_minutes: "Total de Minutes Vécues",
      stat_seconds: "Total de Secondes Vécues",
      stat_breaths: "Respirations Estimées (~16/min)",
      stat_heartbeats: "Battements Estimés (~75 bpm)",
      title_milestones: "Tableau des Jalons de Vie",
      desc_milestones: "Grandes étapes et accomplissements insolites avec suivi de progression.",
      title_planets: "Calculateur d'Âge Planétaire",
      desc_planets: "Quel âge auriez-vous si vous étiez né sur d'autres planètes du système solaire.",
      unit_planetary_years: "Années Planétaires",
      orbit_prefix: "Prochaine orbite :",
      earth_days_suffix: "jours terrestres",
      title_profile: "Profil Astrologique & Personnel",
      desc_profile: "Faits astrologiques fascinants et identification de votre génération.",
      prof_zodiac: "Zodiaque Occidental",
      prof_chinese: "Zodiaque Chinois",
      prof_dayborn: "Jour de Semaine de Naissance",
      prof_generation: "Génération",
      tool_copy_summary: "Copier le Résumé",
      tool_copy_link: "Copier le Lien",
      tool_share_whatsapp: "Partager sur WhatsApp",
      tool_share_twitter: "Publier sur X",
      tool_print: "Imprimer / PDF",
      title_faq: "Foire Aux Questions (FAQ)",
      desc_faq: "Découvrez la précision mathématique de l'âge, les années bissextiles et le temps astronomique.",
      faq_q1: "Comment TrueAge calcule-t-il l'âge chronologique exact ?",
      faq_a1: "TrueAge s'appuie sur des algorithmes calendaires précis qui tiennent compte des variations de durée des mois et des années bissextiles (comme le 29 février), à la seconde près.",
      faq_q2: "Comment les années bissextiles affectent-elles le calcul de l'âge ?",
      faq_a2: "Une année civile compte 365 jours et une bissextile 366. Le moteur de TrueAge détecte si un 29 février a été traversé et adapte dynamiquement le décompte.",
      faq_q3: "Que représentent le 10 000e jour et 1 milliard de secondes ?",
      faq_a3: "Votre 10 000e jour survient vers 27 ans et 4 mois et demi. Un milliard de secondes vécues s'atteint vers 31 ans et 8 mois. TrueAge calcule la date exacte.",
      faq_q4: "Comment l'âge est-il calculé sur d'autres planètes ?",
      faq_a4: "L'âge planétaire correspond à la division de vos années terrestres par la période orbitale de chaque planète. Par exemple, Mars met 1,8808 an terrestre à faire le tour du Soleil.",
      faq_q5: "Qu'est-ce qu'un demi-anniversaire ?",
      faq_a5: "Un demi-anniversaire se produit exactement 6 mois après votre date de naissance, parfait pour une fête intermédiaire.",
      faq_q6: "Ma date de naissance est-elle enregistrée sur un serveur ?",
      faq_a6: "Non. TrueAge s'exécute à 100% dans votre navigateur. Aucune donnée personnelle n'est envoyée à un serveur.",
      art_title: "La Science de l'Âge Chronologique et la Mesure Astronomique",
      art_p1: "L'âge chronologique mesure la durée écoulée depuis la naissance jusqu'à l'instant présent en tenant compte des subtilités du calendrier grégorien.",
      art_h2_1: "Dérive Grégorienne et Ajustements Bissextiles",
      art_p2: "La Terre met environ 365,2422 jours pour accomplir une révolution complète. Pour combler cet écart, un 29 février est inséré tous les 4 ans.",
      art_h2_2: "Périodes Orbitales Planétaires",
      art_p3: "Une année est la durée que met un corps céleste pour boucler son orbite. Mercure n'a besoin que de 87,97 jours, tandis que Jupiter prend près de 12 ans terrestres.",
      footer_desc: "Calculateur d'âge chronologique haute précision et suivi des jalons de vie 100% côté client. Gratuit, libre et privé.",
      footer_languages: "Éditions Mondiales"
    },

    ja: {
      meta_title: "TrueAge | 正確な年齢計算機・60FPSリアルタイム表示＆ライフマイルストーン",
      meta_desc: "秒単位まで正確な年齢を60FPSの滑らかなリアルタイム表示で計算。次の誕生日、生後10,000日、10億秒、火星や木星での年齢を瞬時に算出。100%ブラウザ完結で完全プライベート。",
      support_btn: "開発者を応援する",
      tag_badge: "100%ブラウザ完結＆安心の完全プライベート",
      hero_title_prefix: "あなただけの",
      hero_title_gradient: "正確な年齢と人生のマイルストーン",
      hero_subtitle: "60FPSのリアルタイム時計を搭載した高精度な満年齢・経過時間計算機。総経過時間、生後日数、秒数、宇宙での年齢、次の節目を詳しく探究できます。",
      label_dob: "生年月日",
      label_required: "必須",
      label_time: "出生時刻",
      label_optional: "任意（60FPSの高精度計算用）",
      btn_calculate: "正確な年齢を計算",
      btn_example: "サンプルを試す",
      btn_reset: "リセット",
      privacy_note: "計算はすべてお使いの端末（ブラウザ）内で行われ、外部サーバーへの通信は一切ありません。",
      live_ticking: "60FPSリアルタイム時計",
      unit_years: "歳",
      unit_months: "ヶ月",
      unit_days: "日",
      unit_hours: "時間",
      unit_minutes: "分",
      unit_seconds: "秒",
      bday_next_title: "次の誕生日までのカウントダウン",
      bday_celebration_prefix: "次の誕生日は",
      title_total_alive: "生まれてからの総経過時間",
      desc_total_alive: "誕生の瞬間から現在までの人生を様々な累積単位で表示します。",
      stat_days: "生まれてからの総日数",
      stat_hours: "生まれてからの総時間",
      stat_minutes: "生まれてからの総分間",
      stat_seconds: "生まれてからの総秒数",
      stat_breaths: "推定総呼吸数（約16回/分）",
      stat_heartbeats: "推定総心拍数（約75回/分）",
      title_milestones: "人生のマイルストーン・ダッシュボード",
      desc_milestones: "生後1万日や10億秒など、ユニークで特別な記念日の達成度を追跡。",
      title_planets: "太陽系惑星での年齢計算機",
      desc_planets: "他の惑星の公転周期に基づいて算出した、あなたの宇宙年齢です。",
      unit_planetary_years: "惑星年",
      orbit_prefix: "次の公転完了まで：",
      earth_days_suffix: "地球日",
      title_profile: "天体＆ライフプロファイル",
      desc_profile: "西洋占星術の星座、干支、生まれた曜日、世代分類。",
      prof_zodiac: "西洋星座",
      prof_chinese: "干支（十二支）",
      prof_dayborn: "生まれた曜日",
      prof_generation: "世代分類",
      tool_copy_summary: "年齢サマリーをコピー",
      tool_copy_link: "共有リンクをコピー",
      tool_share_whatsapp: "WhatsAppで共有",
      tool_share_twitter: "Xでポスト",
      tool_print: "印刷 / PDF保存",
      title_faq: "よくある質問（FAQ）",
      desc_faq: "正確な満年齢の計算方法、閏年の扱い、天文学的な時間の仕組みについて解説します。",
      faq_q1: "TrueAgeはどのように正確な年齢を計算していますか？",
      faq_a1: "TrueAgeは月ごとの日数の違いやうるう年（2月29日）を厳密に考慮したカレンダー計算アルゴリズムを採用し、出生時刻から現在時刻までの差を秒単位で算出します。",
      faq_q2: "うるう年は年齢計算にどのように影響しますか？",
      faq_a2: "平年は365日、閏年は366日あります。TrueAgeは経過期間内に閏日が含まれているかを自動判定し、月ごとの日数を動的に調整します。",
      faq_q3: "生後10,000日や10億秒のマイルストーンとは何ですか？",
      faq_a3: "生後10,000日は約27歳4ヶ月半で到達します。10億秒は約31歳8ヶ月で迎えます。TrueAgeは正確な日付と進捗率を計算します。",
      faq_q4: "火星や木星など他の惑星での年齢はどのように計算されますか？",
      faq_a4: "各惑星が太陽を一周する公転周期（地球年換算）で割ることで算出されます。例えば火星の公転周期は約1.88地球年なので、地球で30歳の方は火星では約15.95歳となります。",
      faq_q5: "ハーフバースデー（半年記念日）とは何ですか？",
      faq_a5: "誕生日からちょうど6ヶ月が経過した節目であり、年の中間をお祝いする記念日です。",
      faq_q6: "入力した生年月日はサーバーに保存されますか？",
      faq_a6: "いいえ。TrueAgeは100%クライアントサイド（ブラウザ内）で動作します。入力データが外部に送信されることは一切ありません。",
      art_title: "暦の科学・うるう年の補正と天文学的な時間",
      art_p1: "満年齢とは誕生の瞬間から現在までの経過時間を表します。日常生活では1年ごとの記念日を用いますが、実際の時間は太陽の運行と暦の仕組みに基づき連続して刻まれています。",
      art_h2_1: "グレゴリオ暦とうるう年の微調整",
      art_p2: "地球が太陽を一周するのには約365.2422日かかります。このズレを補うため、グレゴリオ暦では4年に1度、2月29日をうるう日として挿入します。TrueAgeはこの境界を厳密に処理します。",
      art_h2_2: "太陽系惑星の公転周期と宇宙時間",
      art_p3: "物理的な1年は天体が中心星を1周する公転運動です。ケプラーの法則により、水星はわずか87.97日で太陽を回り、木星は約12地球年を要します。宇宙規模での時間の広がりを実感できます。",
      footer_desc: "秒単位まで正確な100%ブラウザ完結型年齢計算機＆ライフマイルストーントラッカー。無料、オープン、完全プライベート。",
      footer_languages: "世界各言語版"
    }
  };

  // Day names for each locale
  const LOCALE_DAYS = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    pt: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    ja: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  };

  // Current active locale
  let currentLocale = 'en';

  // =========================================================================
  // 2. Detection of Initial Locale
  // =========================================================================
  function detectLocale() {
    // 1. Check path e.g. /es/, /pt/, /de/, /fr/, /ja/
    const path = window.location.pathname.toLowerCase();
    const pathMatch = path.match(/\/(es|pt|de|fr|ja)(\/|$)/);
    if (pathMatch) {
      return pathMatch[1];
    }

    // 2. Check localStorage
    try {
      const stored = localStorage.getItem('trueage_lang');
      if (stored && TRANSLATIONS[stored]) {
        return stored;
      }
    } catch (e) {
      // LocalStorage might be restricted
    }

    // 3. Check browser navigator.language
    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (TRANSLATIONS[browserLang]) {
      return browserLang;
    }

    return 'en';
  }

  // =========================================================================
  // 3. Dynamic DOM Translation Updater
  // =========================================================================
  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    currentLocale = lang;

    // Update <html lang="...">
    document.documentElement.setAttribute('lang', lang);

    // Update document title & meta description
    if (dict.meta_title) {
      document.title = dict.meta_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) {
      metaDesc.setAttribute('content', dict.meta_desc);
    }

    // Update elements with [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Sync the language dropdown select element if present
    const langSelect = document.getElementById('langSelect');
    if (langSelect && langSelect.value !== lang) {
      langSelect.value = lang;
    }

    // Re-inject dynamic JSON-LD structured data with localized questions & metadata
    updateJsonLdSchemas(lang, dict);

    // Re-trigger calculation if active birth date exists so day-of-week and labels update
    if (window.TrueAgeEngine && window.TrueAgeEngine.getActiveBirthDate()) {
      window.TrueAgeEngine.recalculate();
    }
  }

  // =========================================================================
  // 4. Dynamic JSON-LD Injection & Update Engine
  // =========================================================================
  function updateJsonLdSchemas(lang, dict) {
    const canonicalUrl = lang === 'en' ? 'https://trueage.github.io/' : `https://trueage.github.io/${lang}/`;
    const ogImageUrl = 'https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786342039/Online_Tool_rc1ybr.png';

    // 1. BreadcrumbList Schema
    let breadcrumbScript = document.getElementById('schema-breadcrumb');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'schema-breadcrumb';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trueage.github.io/"
      }
    ];

    if (lang !== 'en') {
      const langNames = { es: 'Español', pt: 'Português', de: 'Deutsch', fr: 'Français', ja: '日本語' };
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": langNames[lang] || lang,
        "item": canonicalUrl
      });
    }

    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    }, null, 2);

    // 2. SoftwareApplication & WebApplication Schema
    let webAppScript = document.getElementById('schema-webapp');
    if (!webAppScript) {
      webAppScript = document.createElement('script');
      webAppScript.id = 'schema-webapp';
      webAppScript.type = 'application/ld+json';
      document.head.appendChild(webAppScript);
    }

    const webAppData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": `TrueAge - ${dict.meta_title || 'Exact Age Calculator'}`,
      "url": canonicalUrl,
      "inLanguage": lang,
      "description": dict.meta_desc,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.0.0",
      "image": ogImageUrl,
      "screenshot": ogImageUrl,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Real-time 60FPS exact age ticking counter",
        "High-precision leap-year Gregorian calendar math",
        "Cumulative lifetime stats: days, hours, minutes, seconds",
        "Quirky milestone countdowns: 10,000th day, 1 billion seconds",
        "Planetary age across 7 solar system planets",
        "100% private client-side browser execution"
      ],
      "author": {
        "@type": "Person",
        "name": "Kishara Dilshan",
        "url": "https://buymeacoffee.com/kisharadilz"
      }
    };
    webAppScript.textContent = JSON.stringify(webAppData, null, 2);

    // 2. FAQPage Schema
    let faqScript = document.getElementById('schema-faq');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'schema-faq';
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": dict.faq_q1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a1
          }
        },
        {
          "@type": "Question",
          "name": dict.faq_q2,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a2
          }
        },
        {
          "@type": "Question",
          "name": dict.faq_q3,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a3
          }
        },
        {
          "@type": "Question",
          "name": dict.faq_q4,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a4
          }
        },
        {
          "@type": "Question",
          "name": dict.faq_q5,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a5
          }
        },
        {
          "@type": "Question",
          "name": dict.faq_q6,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": dict.faq_a6
          }
        }
      ]
    };
    faqScript.textContent = JSON.stringify(faqData, null, 2);
  }

  // =========================================================================
  // 5. Language Switcher Event Binding
  // =========================================================================
  function initI18n() {
    const initialLang = detectLocale();
    applyTranslations(initialLang);

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        if (TRANSLATIONS[selectedLang]) {
          try {
            localStorage.setItem('trueage_lang', selectedLang);
          } catch (err) {
            console.warn('Could not store language preference:', err);
          }
          applyTranslations(selectedLang);
        }
      });
    }

    // Attach hook for calculation updates
    window.TrueAge_onCalculate = function (birthDate) {
      // Whenever recalculation occurs, refresh schemas with live data if desired
      updateJsonLdSchemas(currentLocale, TRANSLATIONS[currentLocale] || TRANSLATIONS.en);
    };
  }

  // Expose API
  window.TrueAgeI18n = {
    setLanguage: applyTranslations,
    getCurrentLanguage: () => currentLocale,
    getTranslations: () => TRANSLATIONS,
    getDaysForLocale: (lang) => LOCALE_DAYS[lang] || LOCALE_DAYS.en
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
