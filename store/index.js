import projects from '~/assets/js/projects.js'
const projectMenu = Object.keys(projects.jobs).map((p) => ({
  external: false,
  icon: null,
  to: '/projects/' + p,
  title: projects.jobs[p]['title']
}))
export const state = () => ({
  projects: { ...projects.jobs },
  menus: {
    main: [
      {
        external: false,
        icon: 'home',
        title: 'Intro',
        to: '/'
      },
      {
        external: false,
        icon: 'work',
        title: 'Projects',
        to: '/projects',
        submenu: [...projectMenu]
      },
      {
        external: false,
        icon: 'mail_outline',
        title: 'Contact',
        to: '/contact'
      },
      {
        external: true,
        icon: 'mdi-file-pdf',
        title: 'Resume',
        href: './ErikOlsen_Resume.pdf'
      }
    ],
    footer: [
      {
        external: false,
        icon: 'mail_outline',
        to: '/contact',
        title: 'me@erikthedeveloper.com'
      },
      {
        external: true,
        icon: 'mdi-linkedin-box',
        href: 'https://www.linkedin.com/in/erikthedeveloper',
        title: 'LinkedIn'
      },
      {
        external: true,
        icon: 'mdi-github-circle',
        href: 'https://github.com/erawk26',
        title: 'GitHub'
      },
      {
        external: true,
        icon: 'mdi-codepen',
        href: 'https://codepen.io/erawk26',
        title: 'CodePen'
      },
      {
        external: true,
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/erikthedeveloper',
        title: 'Instagram'
      }
    ],
    projects: [...projectMenu]
  }
})

export const mutations = {}
