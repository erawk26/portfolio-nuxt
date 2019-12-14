<template lang="pug">
  v-app.transparent()
    v-navigation-drawer.nav-main.menu--main.unstyle(v-show="!$vuetify.breakpoint.xsOnly" left fixed expand-on-hover :mini-variant.sync="isMini" :mini-variant-width="50" permanent floating)
      my-menu(type="dropdown" :menu="menus.main" :parentState="isMini")
        template(v-slot:extra)           
          v-list-item
            v-list-item-action()
              v-switch.px-1.mr-3(v-model="$vuetify.theme.dark")
            v-list-item-content()
              v-list-item-title {{$vuetify.theme.dark?'dark':'light'}}
    v-content.scrolled(:class='scrolled' tag="div")
      nuxt
      transition(name='fade')
        button#back-to-top.unstyle.back-to-top.eo-flex.center(@click="$vuetify.goTo('#app')" v-if="scrolled != 'top'")
          span.screen-reader Back to Top
          v-icon(large) expand_less
    v-footer(padless)
      v-card.max-pg-width.d-flex.align-center.justify-start.flex-wrap.px-2(tile elevation="0")
        .cell.copy
          sub &copy; 2015-{{ year }}. Made by Erik Olsen
        .cell
          my-menu.nav-footer.menu--footer.d-flex.justify-start(:menu="menus.footer" :hide-text='true' type="flat")
    v-bottom-navigation(fixed bottom v-show="$vuetify.breakpoint.xsOnly")
      my-menu.nav-main.menu--main.d-flex.justify-center.full-width(:menu="menus.main" :hide-text='true' type="mobile")
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
  components: { 'my-menu': Menu },
  data() {
    return {
      isMini: true,
      // submenuOpen:false,
      scrolled: 'top'
    }
  },
  computed: {
    menus() {
      return this.$store.state.menus
    },
    year() {
      return new Date().getFullYear()
    }
  },
  watch: {
    isMini: function() {}
  },
  mounted() {
    window.addEventListener('scroll', this.debounce(this.onScroll, 200))
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    childRoute(href) {
      return this.$route.path.split('/').includes(href.replace('/', ''))
    },
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
@import '~/assets/scss/_atomic.scss';
@import '~/assets/scss/_animations.scss';
@import '~/assets/scss/_global.scss';
.v-application aside {
  z-index: 220;
  &.v-navigation-drawer {
    &.v-navigation-drawer--fixed {
      z-index: 20;
    }
    &.theme--light,
    &.theme--dark {
      background: transparent;
    }
    transition: all 200ms ease;
    .v-list-item {
      // padding: 0 20px;
    }
    .v-list > a.nav-item {
      padding-left: 0;
      padding-right: 0;
      .v-list-group {
        max-width: 100%;
      }
    }
    .v-list-item__icon,
    .v-list-item__action {
      i {
        font-size: 3rem;
      }
    }
    .v-navigation-drawer__border {
      border-right: 0 solid transparent;
      transition: border-color 200ms ease;
    }
    &.v-navigation-drawer--is-mouseover {
      > .v-navigation-drawer__border {
        border-color: $black;
        border-width: 1px;
      }
      &.theme--dark {
        background: rgba($black, 0.8);
      }
      &.theme--light {
        background: rgba($white, 0.8);
      }
    }
  }
}
footer.v-footer {
  &.theme--dark {
    background-color: #424242;
  }
  &.theme--light {
    background-color: $white;
  }
}
.v-bottom-navigation {
  .nav-main.menu--main {
    padding: 0;
    max-width: 100%;
    i {
      font-size: 2.5rem;
    }
    .nav-item {
      flex: 1;
      padding: 0;
      max-width: 75px;
      &.v-list-item--active {
        i,
        span {
          color: $dk-green;
        }
      }
    }
    button.v-btn {
      padding: 0;
      height: 100%;
    }
  }
}
footer > .v-card {
  width: 100%;
}
.nav-footer {
  .v-list-item__action {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  a.nav-item.v-list-item--link {
    padding: 0 6px;
  }
}
.nav-main {
  &.max-pg-width {
    margin: 0 auto;
  }
}
.menu--main {
  .file-item a {
    // flex: 0;
  }
  .nav-item,
  .file-item {
    a {
      // font-size: 1.6rem;
    }
    // padding: 5px 10px;
    // .menu-title {
    //   display: initial;
    // }
    // .material-icons {
    //   display: none;
    // }
    // @include mobile {
    //   .menu-title {
    //     display: none;
    //   }
    //   .material-icons {
    //     display: initial;
    //   }
    // }
  }
}
.scrolled:not(.top) .navigation-drawer {
  z-index: 100;
  top: -60px;
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
