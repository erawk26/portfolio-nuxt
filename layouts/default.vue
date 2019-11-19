<template lang="pug">
.scrolled(:class='scrolled')
    nav.navigation-drawer.fill.white
      ul.nav-main.menu--main.flex.row.center.max-pg-width.unstyle
        li.nav-item(v-for='(item, i) in menus.main' :key='i' :class='{ active: $route.path == item.to }')
          nuxt-link.flex.inline.a-center.j-start.left.unstyle(:to='item.to' router='')
            i.material-icons {{ item.icon }}
            span.uc.menu-title(v-text='item.title')
        // <li class="flex-spacer" />
        li.file-item.flex.inline.a-center.j-end.left.unstyle
          a.flex.center.left(href='./ErikOlsen_Resume.pdf' target='_blank')
            i.material-icons picture_as_pdf
            span.uc.menu-title Resume
    nuxt
    transition(name='fade')
      a#back-to-top.back-to-top.flex.center(v-if="scrolled != 'top'" href='#')
        span.screen-reader Back to Top
        i.fa.fa-caret-up.fa-2x
    footer#sticky-footer
      .max-pg-width.flex.center.wrap
        .cell.copy
          sub &copy; 2015-{{ year }}. Made by Erik Olsen
        .cell
          ul.nav-social.menu--contact.flex.row.center.unstyle
            li(v-for='(item, i) in menus.footer' :key='i' :class='{ active: $route.path == item.to }')
              nuxt-link.flex.inline.a-center.j-start.left.unstyle(v-if='!item.external' :to='item.to' :title='item.title')
                i.fa(:class="'fa-' + item.icon")
                  span.screen-reader(v-text='item.title')
              a.flex.inline.a-center.j-start.left.unstyle(v-else='' :href='item.to' :title='item.title' target='_blank')
                i.fa(:class="'fa-' + item.icon")
                  span.screen-reader(v-text='item.title')
</template>
<script>
export default {
  data() {
    return {
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
