export default {
  jobs: [
    {
      // -----------JOB-tybee-----------
      links: { main: { href: 'https://visittybee.com' } },
      id: 'tybee',
      img: 'tybee.png',
      // logo: "tybee-logo.png",
      title: 'Visit Tybee Island',
      skills: [
        'Drupal 7',
        'CMS Structuring',
        'Custom PHP',
        'Custom Drupal Modules',
        'Google DFP Ads'
      ],
      desc:
        "This was one of my first builds at Miles Partnership. It's a really clean, interactive, Destination Marketing site built in Drupal 7. We used a lot of custom modules and features and relied heavily on component based CMS building. This project was a ton of fun to help familiarize myself with destination style marketing!"
    },
    {
      // -----------JOB-otis-----------
      links: { main: { href: 'https://www.otisspunkmeyer.com' } },
      id: 'otis',
      img: 'otis.jpg',
      logo: 'otis-logo.png',
      title: 'Otis Spunkmeyer',
      skills: [
        'Drupal 8',
        'CMS Structuring',
        'Custom PHP',
        'TWIG Templating',
        'CSS Positioning',
        'Flex Layout'
      ],
      desc:
        'While working at Hark, I replatformed the entire site from their old custom CMS into Drupal 8 in May 2017. They needed an easier way to manage their SEO and content and Drupal fit the bill. In November of 2017, I built off the same backend but rethemed the site. This was a massive undertaking. The PSD mockup was 37 pages for mobile/desktop.'
    },
    {
      // -----------JOB-labrea-----------
      links: { main: { href: 'https://www.labreabakery.com/kroger' } },
      id: 'labrea',
      img: 'labrea.jpg',
      logo: 'labrea-logo.png',
      title: 'La Brea Bakery',
      skills: [
        'Drupal 8',
        'CMS Structuring',
        'Custom PHP',
        'TWIG Templating',
        'CSS Positioning',
        'Flex Layout'
      ],
      desc:
        'I coded image galleries to the Bread sections. Re-Templated the Recipes pages. I also developed 5 different landing pages for various product promotions.'
    },
    {
      // -----------JOB-zevia-----------
      links: { main: { href: 'https://www.zevia.com/sugar-reduction' } },
      id: 'zevia',
      img: 'zevia.jpg',
      logo: 'zevia-logo.png',
      title: 'Zevia',
      skills: [
        'Drupal 8',
        'Youtube API',
        'Mobile Video',
        'Flex Layout',
        'PSD > E-Mail Templating'
      ],
      desc:
        'I developed multiple landing pages to promote things like Ferdinand the movie, Health, etc. The Sugar Reduction landing page featured the youtube API and needed to maintain a borderless aspect ratio, as well as working across all mobile and desktop devices. I redid their current blog pages (teaser & full template). I also created bi-monthly Mailchimp templates for them in HTML from their PSDs.'
    },
    {
      // -----------JOB-hark-----------
      links: { main: { href: 'https://www.hark.bz' } },
      id: 'hark',
      img: 'hark.png',
      logo: 'hark-logo.png',
      title: 'Hark Digital',
      skills: [
        'Wordpress',
        'CSS Animations',
        'Flex Layout',
        'CMS Structuring',
        'Custom PHP'
      ],
      desc:
        'I helped replatform the current version of their site on Wordpress using wordpressify a node compiler for WP. I leveraged Masonry/Infinite scroll together to manage larger lists of content. I coded this site with limited modules and lots of custom queries/templating. The contact page has a nice label slide up effect when entering input.'
    },
    {
      // -----------JOB-nsb-----------
      links: {
        main: { href: 'https://www.nsbvt.com/mortgages/first-time-homebuying' }
      },
      id: 'nsb',
      img: 'nsb.jpg',
      logo: 'nsb-logo.png',
      title: 'Northfield Savings Bank',
      desc:
        'I coded the Pathway Mortgage landing page. A fully responsive page to create a call to action for first time home buyers. Features a nicely styled jquery accordion list.'
    },
    {
      // -----------JOB-cbv-----------
      img: 'cbv.png',
      id: 'cbv',
      logo: 'cbv-logo.png',
      title: 'Community Barn Ventures',
      skills: [
        'Drupal 8',
        'CSS Grid',
        'CMS Structuring',
        'Slick Slider',
        'CSS Positioning',
        'Flex Layout'
      ],
      links: {
        main: {
          target: '_blank',
          href: 'https://www.communitybarnventures.com/client-spotlight'
        },
        other: [
          {
            target: '_blank',
            href: 'https://codepen.io/erawk26/pen/LQoXEw',
            title: 'Browse this Codepen example',
            text: 'Codepen Example',
            icon: 'fa-codepen'
          }
        ]
      },
      desc:
        'I coded the Client Landing Page, Individual Pages, sliders, client blocks, and Testimonials. The LP has a client grid that leverages CSS Grid and jQuery. I wrote some JS to arrange the bigger clients into predefined spaces then fills the smaller clients in around them, without any unwanted spaces. Its also completely responsive and will rearrange the grid based on screen size.'
    },
    {
      // -----------JOB-mbf-----------
      links: { main: { href: 'https://www.mbfbioscience.com' } },
      id: 'mbf',
      img: 'mbf.jpg',
      logo: 'mbf-logo.png',
      title: 'MBF Bioscience',
      skills: [
        'Drupal 7',
        'Responsive Styling',
        'CMS Structuring',
        'Drupal Paragraphs',
        'Custom PHP',
        'CSS Positioning',
        'Flex Layout'
      ],
      desc:
        'We Added a mobile menu to their site. This proved to be quite intensive due to the way their current menu plugin was working. We also reconfigured their content templates to give the author custom control of each sections background color, borders, etc.'
    },
    {
      // -----------JOB-4sight-----------
      links: { main: { href: 'https://www.go4sight.com/blog' } },
      id: 'foursight',
      img: '4sight.jpg',
      logo: '4sight-logo.png',
      title: '4 Sight',
      desc:
        'They had a Drupal 7 site with a lot of resources (articles, blog posts, case studies, etc) that needed to be filtered better. We added and improved upon their existing filters as well as reformatting their blog templates.'
    },
    // "baristas":{
    //   // -----------JOB-baristas-----------
    //   //   href: "https://baristasbeans.com",
    //   img: "port1.jpg",
    //   logo: "baristas-logo.png",
    //   title: "Barista's Beans",
    //   desc:
    //     "My eCommerce mobile-first site built off of Drupal 7. It featured recurring coffee subscriptions. It was very secure and easy to maintain. Everything got backed up and updated through SSH/Drush."
    // },
    {
      // -----------JOB-portfolio-----------
      img: 'portfolio.png',
      id: 'portfolio',
      logo: '',
      title: 'This Portfolio',
      skills: [
        'ES6+ VanillaJS',
        'VueJS',
        'Serverless Lambda Form',
        'Greensock Animations',
        'PUG Templating',
        'Webpack Bundler',
        'CSS Grid',
        'Flex Layout',
        'no jQuery'
      ],
      links: {
        main: {
          target: '_blank',
          href: 'https://github.com/erawk26/portfolio',
          title: 'Browse this GitHub repo',
          text: 'GitHub Repo',
          icon: 'fa-github'
        }
      },
      desc:
        'I built my portfolio with ES6 VanillaJS and Vue. It leverages Webpack to compile all my code, images, and single file components into a nice optimized bundle that is cross browser compatible and easy to deploy. I really enjoy working in Vue and I think single file components could be the future of web development.'
    }
  ]
}
