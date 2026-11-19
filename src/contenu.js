export const praticienne = {
  nom: 'Anastasia Kothé',
  activite: 'Hypnothérapeute',
  ville: 'Montauban',
  photo: null,
  adresse: '491, chemin des Gascous',
  commune: '82000 Montauban',
  telephone: '06 98 92 66 91',
  rendezVous: 'tel:+33698926691',
};

export const contenu = {
  accueil: {
    titre: ['L’hypnose,', 'à votre rythme.'],
    introduction: 'Quand le quotidien s’accélère, il peut être difficile de prendre du recul. Je vous accueille dans un cadre calme pour parler de ce qui vous amène.',
    approche: 'Nous partons de vos besoins et de ce que vous souhaitez changer. Vous participez à chaque étape et gardez la main sur les décisions qui vous concernent.',
  },
  accompagnements: {
    introduction: 'Vous pouvez venir avec un objectif précis, une difficulté qui revient souvent ou une période de changement à traverser.',
    prestations: [
      { titre: 'Stress et anxiété', description: 'Parler des situations qui vous mettent sous pression et explorer d’autres façons de les aborder.' },
      { titre: 'Difficultés de sommeil', description: 'Faire le point sur vos habitudes du soir et ce qui rend la transition vers le repos difficile.' },
      { titre: 'Arrêt du tabac', description: 'Préparer votre démarche en repérant les moments, les gestes et les habitudes associés à la cigarette.' },
      { titre: 'Poids et habitudes alimentaires', description: 'Explorer la place de l’alimentation dans votre quotidien et les habitudes que vous aimeriez faire évoluer.' },
      { titre: 'Peurs et phobies', description: 'Évoquer une peur précise, les situations qui la déclenchent et la place qu’elle prend dans votre vie.' },
      { titre: 'Confiance en soi et examens', description: 'Se préparer à une échéance qui compte pour vous, comme un examen, et travailler sur la manière dont vous l’appréhendez.' },
    ],
    stress: [
      'Une charge de travail qui augmente, un départ à la retraite, de nouveaux horaires ou des tensions à la maison peuvent bousculer vos repères. Parfois, la difficulté est de savoir par où commencer quand plusieurs choses s’accumulent.',
      'En séance, nous pouvons partir d’une situation précise, repérer ce qui vous pèse et définir ce que vous aimeriez aborder différemment.',
    ],
  },
  aPropos: {
    introduction: 'Je m’intéresse à l’hypnose depuis l’âge de 15 ans. Cette curiosité est devenue une vocation au fil de mes études et de ma formation.',
    parcours: [
      'J’ai obtenu un diplôme en psychologie à la faculté de Samara, puis j’ai poursuivi mon parcours avec une formation diplômante en hypnose ericksonienne.',
      'Dans mon cabinet, j’accorde une place importante à l’écoute sans jugement. J’adapte les techniques d’hypnose à votre personnalité et à ce que vous souhaitez aborder.',
    ],
  },
};

export const navigation = [
  { id: 'accueil', href: '/', label: 'Accueil' },
  { id: 'accompagnements', href: '/accompagnements/', label: 'Accompagnements' },
  { id: 'a-propos', href: '/a-propos/', label: 'À propos' },
];
