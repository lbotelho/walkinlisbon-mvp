// js/i18n.js
// ============================================
// Sistema simples de tradução para o site Walk in Lisbon
// ============================================

const translations = {
  pt: {
    // --- Navegação e hero ---
    'nav.tour': 'Primeiro Tour',
    'nav.how': 'Como funciona',
    'nav.subscribe': 'Subscrever',
    'cta.subscribe': 'Receber novidades',
    'hero.title': 'Descobre Lisboa a pé, sem complicações.',
    'hero.lead': 'Roteiros curtos, com paragens obrigatórias e curiosidades históricas para te guiarem pelas zonas mais bonitas da cidade. Começamos com um clássico: <strong>Lisboa em 1 Dia a Pé</strong>.',
    'btn.viewTour': 'Download Free PDF Guide',
    'btn.howItWorks': 'Como funciona',
    'hero.imagePlaceholder': 'Imagem de Lisboa (placeholder)',

    // --- Primeiro Tour ---
    'tour.title': 'Primeiro Tour: Lisboa em 1 Dia a Pé',
    'tour.lead': 'Um roteiro circular pensado para um primeiro contacto com Lisboa. Começa na <em>Praça do Comércio</em> e passa pela <em>Baixa</em>, <em>Chiado</em>, <em>Avenida da Liberdade</em>, <em>Príncipe Real</em>, <em>Miradouro de São Pedro de Alcântara</em>, desce ao <em>Rossio</em> e segue para <em>Alfama</em> (Sé, Miradouro das Portas do Sol) — com notas rápidas e curiosidades em cada paragem.',
    'badge.newBeta': 'Novo • Beta',
    'tour.details.title': 'Detalhes',
    'tour.details.duration.label': 'Duração:',
    'tour.details.duration.value': '5–6 horas (com paragens)',
    'tour.details.distance.label': 'Distância:',
    'tour.details.distance.value': '~10–12 km',
    'tour.details.difficulty.label': 'Dificuldade:',
    'tour.details.difficulty.value': 'Moderada (algumas subidas)',
    'tour.details.start.label': 'Início:',
    'tour.details.start.value': 'Arco da Rua Augusta (Praça do Comércio)',
    'tour.details.map': 'Ver no mapa',
    'tour.details.download': 'Descarregar guia (PDF)',
    'tour.itinerary.title': 'Itinerário resumido',
    'tour.itinerary.i1': 'Praça do Comércio → Rua Augusta',
    'tour.itinerary.i2': 'Elevador de Santa Justa (vista)',
    'tour.itinerary.i3': 'Chiado → Largo do Carmo',
    'tour.itinerary.i4': 'Avenida da Liberdade (descoberta rápida)',
    'tour.itinerary.i5': 'Príncipe Real → Jardim',
    'tour.itinerary.i6': 'Miradouro de São Pedro de Alcântara',
    'tour.itinerary.i7': 'Rossio → Praça da Figueira',
    'tour.itinerary.i8': 'Alfama → Sé de Lisboa',
    'tour.itinerary.i9': 'Miradouro das Portas do Sol → Santa Luzia',
    'tour.includes.title': 'O que inclui',
    'tour.includes.i1': 'Mapa do percurso com paragens',
    'tour.includes.i2': 'Curiosidades históricas (curtas e simples)',
    'tour.includes.i3': 'Dicas práticas (transportes, horários, snacks)',
    'tour.includes.i4': 'Versão offline (PDF) para usar no telemóvel',
    'tour.notice': '<strong>Nota:</strong> este é um MVP. Vamos melhorar com fotos, mapa interativo e áudio-guias. Dá-nos feedback no formulário abaixo 🙌',

    // --- POI 1 ---
    'poi1.title': 'Ponto de Interesse #1 — Praça do Comércio (Terreiro do Paço)',
    'poi1.lead': 'O coração de Lisboa junto ao Tejo. Antiga entrada nobre da cidade e palco da reconstrução após o terramoto de 1755, hoje é uma das praças mais bonitas da Europa, com o Arco da Rua Augusta e a estátua equestre de D. José I ao centro.',
    'poi1.why.title': 'Porque é especial',
    'poi1.why.i1': 'Foi aqui que se ergueu o Paço da Ribeira, a residência real, até 1755.',
    'poi1.why.i2': 'A praça atual faz parte da Baixa Pombalina, símbolo da reconstrução de Lisboa.',
    'poi1.why.i3': 'O Arco da Rua Augusta marca a entrada na Baixa e oferece um miradouro sobre a cidade.',
    'poi1.facts.title': 'Curiosidades',
    'poi1.facts.i1': 'A estátua de D. José I (1775), de Machado de Castro, foi o <em>primeiro</em> grande monumento equestre em bronze feito em Portugal.',
    'poi1.facts.i2': 'O arco comemorativo foi concluído no séc. XIX e está aberto ao público (miradouro) desde 2013.',
    'poi1.facts.i3': 'O nome popular <em>Terreiro do Paço</em> lembra o antigo palácio real destruído em 1755.',
    'poi1.tips.title': 'Dicas rápidas',
    'poi1.tips.i1': 'Melhor luz para fotos: manhã cedo ou fim da tarde.',
    'poi1.tips.i2': 'Miradouro do Arco: entrada pela Rua Augusta (bilhete no local).',
    'poi1.tips.i3': 'Se tiver vento no Tejo, leva um casaco leve — a brisa aqui sente-se.',
    'poi1.imagePlaceholder': 'Foto da Praça do Comércio (placeholder)',
    'poi1.map.title': 'Mapa e percurso',
    'poi1.map.lead': 'Ponto de partida do tour. Encontra-se junto ao Arco da Rua Augusta e aos Cais das Colunas.',
    'poi1.map.open': 'Abrir no mapa',
    'poi1.map.download': 'Descarregar folha do POI (PDF)',
    'poi1.history.title': 'História em 5 linhas',
    'poi1.history.text': 'Antes de 1755, aqui ficava o Paço da Ribeira, o palácio real. O terramoto e o maremoto destruíram a zona e nasceram a Baixa Pombalina e esta praça monumental, virada ao Tejo. Ao centro ergue-se a estátua equestre de D. José I; do lado norte, o Arco da Rua Augusta celebra a reconstrução e liga a praça à Baixa.',

    // --- Como funciona / Formulários / Footer ---
    'how.title': 'Como funciona',
    'how.step1.title': '1) Escolhe o tour',
    'how.step1.text': 'Roteiros simples, feitos para caber num dia — ou num fim-de-semana.',
    'how.step2.title': '2) Descarrega o guia',
    'how.step2.text': 'PDF leve com mapa, paragens e curiosidades. Funciona offline.',
    'how.step3.title': '3) Explora e diverte-te',
    'how.step3.text': 'Segue o percurso, faz pausas onde quiseres e descobre Lisboa ao teu ritmo.',
    'subscribe.title': 'Queres ser o primeiro a receber novos tours?',
    'subscribe.lead': 'Enviaremos novidades poucas vezes e só quando houver algo útil (novo tour, guia áudio, descontos).',
    'subscribe.input': 'O teu e-mail',
    'subscribe.button': 'Subscrever',
    'subscribe.legal': 'Sem spam. Podes cancelar quando quiseres.',
    'feedback.title': 'Feedback rápido',
    'feedback.lead': 'Que parte de Lisboa queres ver a seguir? Tens sugestões para melhorar o guia?',
    'feedback.input.area': 'Sugestão de zona/bairro',
    'feedback.input.text': 'Escreve aqui as tuas ideias',
    'feedback.button': 'Enviar',
    'footer.made': 'Feito com ❤️ em Lisboa',
    'footer.terms': 'Termos',
    'footer.privacy': 'Privacidade',
    'footer.contact': 'Contacto'
  },

  // ==============================
  // ENGLISH
  // ==============================
  en: {
    'nav.tour': 'First Tour',
    'nav.how': 'How it works',
    'nav.subscribe': 'Subscribe',
    'cta.subscribe': 'Get updates',
    'hero.title': 'Discover Lisbon on foot, without hassle.',
    'hero.lead': 'Short routes with must-see stops and historical curiosities guiding you through the city’s most beautiful areas. We start with a classic: <strong>Lisbon in 1 Day on Foot</strong>.',
    'btn.viewTour': 'View first tour',
    'btn.howItWorks': 'How it works',
    'hero.imagePlaceholder': 'Lisbon image (placeholder)',
    'tour.title': 'First Tour: Lisbon in 1 Day on Foot',
    'tour.lead': 'A circular route designed for a first contact with Lisbon. It starts at the <em>Praça do Comércio</em> and passes through the <em>Baixa</em>, <em>Chiado</em>, <em>Avenida da Liberdade</em>, <em>Príncipe Real</em>, <em>São Pedro de Alcântara Viewpoint</em>, goes down to <em>Rossio</em> and continues to <em>Alfama</em> (Cathedral, Portas do Sol Viewpoint) — with quick notes and curiosities at each stop.',
    'badge.newBeta': 'New • Beta',
    'tour.details.title': 'Details',
    'tour.details.duration.label': 'Duration:',
    'tour.details.duration.value': '5–6 hours (with stops)',
    'tour.details.distance.label': 'Distance:',
    'tour.details.distance.value': '~10–12 km',
    'tour.details.difficulty.label': 'Difficulty:',
    'tour.details.difficulty.value': 'Moderate (some hills)',
    'tour.details.start.label': 'Start:',
    'tour.details.start.value': 'Rua Augusta Arch (Praça do Comércio)',
    'tour.details.map': 'View on map',
    'tour.details.download': 'Download guide (PDF)',
    'tour.itinerary.title': 'Short itinerary',
    'tour.itinerary.i1': 'Praça do Comércio → Rua Augusta',
    'tour.itinerary.i2': 'Santa Justa Lift (view)',
    'tour.itinerary.i3': 'Chiado → Largo do Carmo',
    'tour.itinerary.i4': 'Avenida da Liberdade (quick look)',
    'tour.itinerary.i5': 'Príncipe Real → Garden',
    'tour.itinerary.i6': 'São Pedro de Alcântara Viewpoint',
    'tour.itinerary.i7': 'Rossio → Praça da Figueira',
    'tour.itinerary.i8': 'Alfama → Lisbon Cathedral',
    'tour.itinerary.i9': 'Portas do Sol Viewpoint → Santa Luzia',
    'tour.includes.title': 'What’s included',
    'tour.includes.i1': 'Route map with stops',
    'tour.includes.i2': 'Short historical curiosities',
    'tour.includes.i3': 'Practical tips (transport, timings, snacks)',
    'tour.includes.i4': 'Offline version (PDF) for your phone',
    'tour.notice': '<strong>Note:</strong> this is an MVP. We’ll improve it with photos, interactive map and audio guides. Share your feedback below 🙌',
    'poi1.title': 'Point of Interest #1 — Praça do Comércio (Terreiro do Paço)',
    'poi1.lead': 'Lisbon’s heart by the Tagus River. Once the noble gateway to the city and the stage for the post-1755 earthquake reconstruction, today it’s one of Europe’s most beautiful squares, with the Rua Augusta Arch and the equestrian statue of King José I.',
    'poi1.why.title': 'Why it’s special',
    'poi1.why.i1': 'This was the site of the Royal Ribeira Palace until 1755.',
    'poi1.why.i2': 'The current square belongs to the Pombaline Downtown, symbol of Lisbon’s reconstruction.',
    'poi1.why.i3': 'The Rua Augusta Arch marks the entrance to the Baixa and offers a viewpoint over the city.',
    'poi1.facts.title': 'Curiosities',
    'poi1.facts.i1': 'The statue of King José I (1775), by Machado de Castro, was the first major bronze equestrian monument made in Portugal.',
    'poi1.facts.i2': 'The triumphal arch was completed in the 19th century and its viewpoint has been open to the public since 2013.',
    'poi1.facts.i3': 'The popular name “Terreiro do Paço” recalls the former royal palace destroyed in 1755.',
    'poi1.tips.title': 'Quick tips',
    'poi1.tips.i1': 'Best light for photos: early morning or late afternoon.',
    'poi1.tips.i2': 'Arch viewpoint: entrance on Rua Augusta (ticket onsite).',
    'poi1.tips.i3': 'If it’s windy by the river, bring a light jacket — the breeze is real here.',
    'poi1.map.open': 'Open in map',
    'poi1.map.download': 'Download POI sheet (PDF)',
    'how.title': 'How it works',
    'subscribe.title': 'Want to be the first to get new tours?',
    'subscribe.input': 'Your email',
    'subscribe.button': 'Subscribe',
    'subscribe.legal': 'No spam. Unsubscribe any time.',
    'feedback.title': 'Quick feedback',
    'feedback.button': 'Send',
    'footer.made': 'Made with ❤️ in Lisbon',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contact'
  },
  
  
};

// ============================================
// Função de tradução
// ============================================

function translatePage(lang) {
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (['input', 'textarea'].includes(el.tagName.toLowerCase())) {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  localStorage.setItem('lang', lang);
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;
  document.documentElement.lang = lang;
}

const saved = localStorage.getItem('lang') || 'pt';
translatePage(saved);

const select = document.getElementById('lang-select');
if (select) {
  select.addEventListener('change', (e) => translatePage(e.target.value));
}
