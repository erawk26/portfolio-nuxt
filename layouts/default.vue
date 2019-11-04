<template>
  <div class="scrolled" :class="scrolled">
    <nav class="navigation-drawer fill white">
      <ul class="nav-main menu--main flex row center max-pg-width unstyle">
        <li
          v-for="(item, i) in menu.main"
          :key="i"
          :class="{ active: $route.path == item.to }"
          class="nav-item"
        >
          <nuxt-link
            :to="item.to"
            class="flex inline a-center j-start left unstyle"
            router
          >
            <i class="material-icons">{{ item.icon }}</i>
            <span class="uc menu-title" v-text="item.title" />
          </nuxt-link>
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
    </nav>
    <nuxt />
    <transition name="fade">
      <a
        v-if="scrolled != 'top'"
        id="back-to-top"
        class="back-to-top flex center"
        href="#"
      >
        <span class="screen-reader">Back to Top</span>
        <i class="fa fa-caret-up fa-2x" />
      </a>
    </transition>
    <footer id="sticky-footer">
      <div class="max-pg-width flex center wrap">
        <div class="cell copy">
          <sub>© 2015-{{ year }}. Made by Erik Olsen</sub>
        </div>
        <div class="cell">
          <ul class="nav-social menu--contact flex row center unstyle">
            <li
              v-for="(item, i) in menu.footer"
              :key="i"
              :class="{ active: $route.path == item.to }"
              class
            >
              <nuxt-link
                v-if="!item.external"
                :to="item.to"
                class="flex inline a-center j-start left unstyle"
                :title="item.title"
              >
                <i class="fa" :class="'fa-' + item.icon" />
                <span class="screen-reader" v-text="item.title" />
              </nuxt-link>
              <a
                v-else
                :href="item.to"
                class="flex inline a-center j-start left unstyle"
                :title="item.title"
                target="_blank"
              >
                <i class="fa" :class="'fa-' + item.icon" />
                <span class="screen-reader" v-text="item.title" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: 'top',
      menu: {
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
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.debounce(this.onScroll, 200))
  },
  methods: {
    onScroll: function() {
      const threshhold = 100
      if (window.pageYOffset < threshhold) {
        this.scrolled = 'top'
      } else if (
        window.innerHeight + window.pageYOffset + 1 >=
        document.body.offsetHeight
      ) {
        this.scrolled = 'bottom'
      } else {
        this.scrolled = 'middle'
      }
    },
    debounce: function(func, wait, immediate) {
      var timeout
      return function() {
        var context = this,
          args = arguments
        var later = function() {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
  }
}
</script>
<style lang="scss">
ul.nav-main {
  &.max-pg-width {
    margin: 0 auto;
  }
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
  @include mobile {
    .menu-title {
      display: none;
    }
    .material-icons {
      display: initial;
    }
  }
}
.scrolled:not(.top) .navigation-drawer {
  z-index: 100;
  top: -46px;
  left: 0;
  width: 100%;
  transform: translateY(45px);
  position: fixed;
  transition: all 1s ease;
}
// .scrolled:not(.bottom) footer {
//   z-index: 100;
//   bottom: -60px;
//   left: 0;
//   width: 100%;
//   transform: translateY(-60px);
//   position: fixed;
//   transition: all 1s ease 1s;
// }
</style>
