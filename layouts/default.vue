<template>
  <div>
    <div class="navigation-drawer">
      <ul class="nav-menu menu--main flex row center unstyle left">
        <li
          v-for="(item, i) in items"
          :key="i"
          :class="{ active: $route.path == item.to }"
          class="nav-item"
        >
          <router-link
            :to="item.to"
            class="flex inline a-center j-start left unstyle"
            router
          >
            <i class="material-icons">{{ item.icon }}</i>
            <span class="uc menu-title" v-text="item.title" />
          </router-link>
        </li>
        <!-- <li class="flex-spacer" /> -->
        <li class="file-item flex inline a-center j-end left unstyle">
          <a
            href="./ErikOlsen_Resume.pdf"
            target="_blank"
            class="flex center left"
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
        <div class="cell copy">
          <small>© 2015-{{ year }}. Made by Erik Olsen</small>
        </div>
        <div class="cell">
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
        <div class="cell" />
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
ul.nav-menu {
  li {
    a {
      text-decoration: none;
      border-bottom: none;
      font-family: $fontHead;
      font-size: 2.4rem;
      line-height: 1;
      @include textLink($link-color-normal, $link-color-active);
      position: relative;
      &::after {
        opacity: 0;
        transform: translateY(20px);
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        height: 0;
        width: 0;
        overflow: hidden;
        border-bottom: 1px inset $link;
        transition: opacity $base-duration $base-duration,
          transform $base-duration $base-duration,
          border-bottom $base-duration $base-duration;
      }
    }
    &:first-child,
    &:last-child {
      flex: 1;
    }
    &:hover,
    &.active {
      a {
        color: $link-color-active;
        &::after {
          border-bottom-color: $link-color-active;
          overflow: visible;
          width: 100%;
          height: 2px;
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
}
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
