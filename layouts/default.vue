<template lang="pug">
  v-app
    v-navigation-drawer(v-model='drawer', app='')
      v-list.nav-main.menu--main.unstyle(dense='')
        v-list-item(v-for='(item, i) in menus.main' :key='i' :class='{ active: $route.path == item.to }' class="nav-item" link='' @click.stop='drawer = false')
          nuxt-link.flex.center.uc(:to="item.to")
            v-list-item-action
              v-icon {{item.icon}}
            v-list-item-content
              v-list-item-title {{item.title}}
        v-list-item.file-item
          a.flex.center.uc(href='./ErikOlsen_Resume.pdf' target='_blank')
            v-list-item-action  
              v-icon picture_as_pdf
            v-list-item-content
              v-list-item-title Resume
    v-app-bar(app='', color='white', dark='')
      button.hamburger.hamburger--arrowalt(type='button' @click.stop='drawer = !drawer' :class="{'is-active':drawer}")
        span.hamburger-box
          span.hamburger-inner.fill.dk-gray
      v-toolbar-title.color.blk EO
    //v-navigation-drawer(floating permanent)
      ul.nav-main.menu--main.unstyle
        li.nav-item(v-for='(item, i) in menus.main' :key='i' :class='{ active: $route.path == item.to }')
          nuxt-link.flex.inline.a-center.j-start.left.unstyle(:to='item.to' router='')
            i.material-icons {{ item.icon }}
            span.uc.menu-title(v-text='item.title')
        // <li class="flex-spacer" />
        li.file-item.flex.inline.a-center.j-end.left.unstyle
          a.flex.j-end.right-text(href='./ErikOlsen_Resume.pdf' target='_blank')
            i.material-icons picture_as_pdf
            span.uc.menu-title Resume
    v-content.scrolled.fill.wht(:class='scrolled' tag="div")
      v-container(fluid)
        nuxt
      transition(name='fade')
        button#back-to-top.unstyle.back-to-top.flex.center(@click="$vuetify.goTo('#app')" v-if="scrolled != 'top'")
          span.screen-reader Back to Top
          i.fa.fa-caret-up.fa-2x
    v-footer#sticky-footer
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
      drawer: false,
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
.nav-main {
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
.file-item a {
  flex: 0;
}
.nav-item,
.file-item {
  padding: 5px 10px;
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
