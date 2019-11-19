export const state = () => ({
  menus: {
    main: [
      {
        icon: 'home',
        title: 'EO',
        to: '/'
      },
      {
        icon: 'work',
        title: 'Projects',
        to: '/projects'
      },
      {
        icon: 'mail_outline',
        title: 'Contact',
        to: '/contact'
      }
    ],
    footer: [
      {
        external: false,
        icon: 'envelope-o',
        to: '/contact',
        title: 'me@erikthedeveloper.com'
      },
      {
        external: false,
        icon: 'phone',
        to: '/contact',
        title: '+1-802-851-5512'
      },
      {
        external: true,
        icon: 'linkedin',
        to: 'https://www.linkedin.com/in/erikthedeveloper',
        title: 'LinkedIn'
      },
      {
        external: true,
        icon: 'github',
        to: 'https://github.com/erawk26',
        title: 'GitHub'
      },
      {
        external: true,
        icon: 'codepen',
        to: 'https://codepen.io/erawk26',
        title: 'CodePen'
      }
    ]
  }
})

export const mutations = {}
