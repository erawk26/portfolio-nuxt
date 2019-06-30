<template>
  <div>
    <div class="navigation-drawer">
      <ul class="nav-menu flex-row left">
        <li
          v-for="(item, i) in items"
          :key="i"
          :class="{ active: $route.path == item.to }"
          class="nav-item"
        >
          <router-link class="flex-row left" :to="item.to" router>
            <i class="material-icons">{{ item.icon }}</i>
            <span class="uc menu-title" v-text="item.title" />
          </router-link>
        </li>
        <li class="flex-spacer" />
        <li class="file-item uc">
          <a
            href="./ErikOlsen_Resume.pdf"
            target="_blank"
            class="flex-row left"
          >
            <i class="material-icons">picture_as_pdf</i>
            <span class="uc menu-title">Resume</span>
          </a>
        </li>
      </ul>
    </div>
    <nuxt />
    <a id="back-to-top" class="back-to-top" href="#intro">Back to Top</a>
    <footer id="sticky-footer">
      <div class="mw-wrapper">
        <div class="col copy">
          <small>© 2015-{{ year }}. Made by Erik Olsen</small>
        </div>
        <div class="col">
          <div class="contact">
            <a
              href="#contactForm"
              title="me@erikthedeveloper.com"
              target="_blank"
            >
              <i class="fa fa-envelope-o">
                <span class="screen-reader">E-Mail</span>
              </i>
            </a>
            <a href="#contactForm" title="+1-802-851-5512" target="_blank">
              <i class="fa fa-phone">
                <span class="screen-reader">Phone</span>
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/erikthedeveloper"
              title="LinkedIn"
              target="_blank"
            >
              <i class="fa fa-linkedin">
                <span class="screen-reader">LinkedIn</span>
              </i>
            </a>
            <a href="https://github.com/erawk26" title="GitHub" target="_blank">
              <i class="fa fa-github">
                <span class="screen-reader">Github</span>
              </i>
            </a>
            <a
              href="https://codepen.io/erawk26"
              title="CodePen"
              target="_blank"
            >
              <i class="fa fa-codepen">
                <span class="screen-reader">Codepen</span>
              </i>
            </a>
          </div>
        </div>
        <div class="col" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
      ]
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss">
.nav-item,
.file-item {
  padding: 5px 10px;
  .menu-title {
    display: initial;
  }
  .material-icons {
    display: none;
  }
  @media (max-width: 479px) {
    .menu-title {
      display: none;
    }
    .material-icons {
      display: initial;
    }
  }
}
</style>
