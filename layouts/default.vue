<template lang="pug">
  v-app
    v-navigation-drawer.nav-main.menu--main.unstyle(left fixed expand-on-hover :mini-variant.sync="isMini" :mini-variant-width="50" permanent floating)
      my-menu(type="dropdown" dir="flex-column" :menu="menus.main" :parentState="isMini")
    v-content.scrolled.fill.wht(:class='scrolled' tag="div")
      v-container(fluid)
        nuxt
      transition(name='fade')
        button#back-to-top.unstyle.back-to-top.flex.center(@click="$vuetify.goTo('#app')" v-if="scrolled != 'top'")
          span.screen-reader Back to Top
          v-icon(large) expand_less
    v-footer.white(padless)
      v-card.max-pg-width.d-flex.align-center.justify-start.flex-wrap.px-2(tile elevation="0")
        .cell.copy
          sub &copy; 2015-{{ year }}. Made by Erik Olsen
        .cell
          my-menu.nav-footer.menu--footer.justify-start(:menu="menus.footer" :hide-text='true')
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
aside {
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
  li {
    a {
      text-decoration: none;
      border-bottom: none;
      font-family: $fontHead;
      // font-size: 2.4rem;
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
      // flex: 1;
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
