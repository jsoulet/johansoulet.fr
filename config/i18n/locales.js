module.exports = {
  fr: {
    path: '/',
    name: 'Français',
    default: true,
    dateFormat: 'DD/MM/YYYY',
    metadata: {
      imageBaseUrl: 'https://johansoulet.fr',
      titleTemplate: '%s | Johan Soulet',
      defaultTitle: 'Johan Soulet | Développeur JavaScript freelance à Nantes',
      description: `Développeur freelance senior à Nantes, spécialisé dans le développement d'applications métier complexes avec JavaScript, React et NodeJS`,
    },
  },
  en: {
    path: '/en',
    name: 'English',
    default: false,
    dateFormat: 'DD/MM/YYYY',
    metadata: {
      imageBaseUrl: 'https://johansoulet.fr',
      titleTemplate: '%s | Johan Soulet',
      defaultTitle: 'Johan Soulet | Freelance JavaScript developer in Nantes',
      description:
        'Senior freelance developer from in Nantes, France, specialized in complex business app development with JavaScript, React and NodeJS',
    },
  },
}
