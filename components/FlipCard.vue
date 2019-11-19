<template lang="pug">
  nuxt-link.flip-card.flex.wrap.a-start.ar.seven-five.rel(:to="'/projects/'+project.id")
    article(@mouseenter="flipOver()" @mouseleave="flipLeave()")
      .card-front.box-shadow.abs-center.flex.col.center(:style="{'background':'url('+require('~/assets/img/'+project.img)+') center / cover no-repeat'}")
        .fill.dk-green.center-text
          h3.headline.uc.color.white.text-shadow {{project.title}}
      .card-back.box-shadow.abs-center.flex.col.center.fill.dk-green.center-text
        h3.headline.uc.color.white.text-shadow {{project.title}}
        ul.flex.center.wrap.unstyle.cell.omega
          li.skill.fill.dk-gray(v-for="(skill, i) in project.skills")
            span.color.white {{skill}}
</template>
<script>
import { gsap } from 'gsap'
import Link from '~/components/Link.vue'
export default {
  components: { Link },
  props: {
    // direction: { type: Number, default: 0 },
    project: {
      type: Object,
      default: () => ({
        id: null,
        img: null,
        logo: null,
        title: null,
        skills: [],
        links: {
          main: {},
          other: []
        },
        desc: null
      })
    }
  },
  data: () => ({
    hover: false
  }),
  computed: {},
  watch: {
    hover(newVal) {
      if (newVal) {
        this.animation(1)
      } else {
        this.animation(-1)
      }
    }
  },
  mounted() {
    gsap.set(this.$el.querySelector('.card-front'), { rotationY: 0 })
    gsap.set(this.$el.querySelector('.card-back'), { rotationY: -180 })
  },
  methods: {
    animation: function(dir) {
      const frontRotation = dir > 0 ? 180 : 0
      const backRotation = dir > 0 ? 0 : -180
      gsap.to(this.$el.querySelector('.card-front'), {
        rotationY: frontRotation,
        duration: 1
      })
      gsap.to(this.$el.querySelector('.card-back'), {
        rotationY: backRotation,
        duration: 1
      })
    },
    flipOver: function() {
      this.hover = true
    },
    flipLeave: function() {
      this.hover = false
    }
  }
}
</script>
<style lang="scss">
.ar {
  width: 100%;
  height: 0;
  display: block;
  padding: 0;
  &.sixteen-nine {
    padding-bottom: (16 / 9) * 100%;
  }
  &.five-seven {
    padding-bottom: (5 / 7) * 100%;
  }
  &.seven-five {
    padding-bottom: (7 / 5) * 100%;
  }
  &.square {
    padding-bottom: 100%;
  }
}
/// FLIP ANIMATION STYLING GOES UNDER HERE ///
.flip-card article {
  overflow: visible;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  .card-front,
  .card-back {
    padding: 1rem;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    &:before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
}
</style>
