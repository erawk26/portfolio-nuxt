<template lang="pug">
  section.intro.d-flex.flex-column.align-center.justify-center
    v-avatar.headshot(size='200px')
        img.img-circle.elevation-4.mb-1(src='~/assets/img/headshot2.jpg' title="Erik Olsen")
    v-card.px-5.mx-5.center-text.avatar-padding(color="blue-grey lighten-5" elevation="6" :max-width="400")
      h4.charcoal--text Erik Olsen
      h6.charcoal--text Web Developer / Programmer
      p.charcoal--text Hey there, Lets build things together! My passion is creating fast responsive websites and applications. I'm currently based out of Sarasota, FL and Aiken, SC. 
      nuxt-link.material-icons.mx-1.charcoal--text(large to="/projects") expand_more
      my-menu.nav-social.menu--social.d-flex.justify-space-between.text-center(:menu="cardMenu" :hide-text='true')
</template>

<script>
import MyMenu from '~/components/Menu.vue'
export default {
  transition: 'slide-down',
  // return +to.query.page < +from.query.page ? 'slide-up' : 'slide-down'
  components: { MyMenu },
  data: () => ({}),
  computed: {
    cardMenu() {
      return this.$store.state.menus.footer //.slice(1)
    }
  }
}
</script>

<style lang="scss">
section.intro {
  min-height: 75vh;
  .avatar-padding {
    padding-top: 50px;
  }
  .v-btn i {
    margin-right: 0.25em;
  }
  .nav-social a {
    flex: 0;
    i {
      color: $charcoal;
    }
  }
  .headshot {
    transform: translateY(60px) scaleX(-1) rotate(8deg);
    z-index: 1;
  }
}
</style>
