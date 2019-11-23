<template lang="pug">
  nuxt-link.flip-card.flex.wrap.a-start.ar.seven-five.rel(:to="'/projects/'+project.id")
    article
      v-card.card-front.abs-center.flex.col.center(ripple :elevation="hover?5:10")
        v-img.img(:src="require('~/assets/img/'+project.img)" aspect-ratio="1.777")
        .content.flex-grow.left-text
          h3.headline.uc {{project.title}}
      v-card.card-back.abs-center(ripple :elevation="hover?5:10")
        .content.flex.col.a-center.j-start.fill.dk-green.center-text
          h4.headline.uc.color.wht.text-shadow {{project.title}}
          ul.flex.center.wrap.unstyle.cell.omega
            li.skill.fill.dk-gray(v-for="(skill, i) in project.skills")
              span.color.wht {{skill}}
</template>
<script>
import { gsap } from 'gsap'
import Link from '~/components/Link.vue'
export default {
  components: { Link },
  props: {
    // direction: { type: Number, default: 0 },
    hover: { type: Boolean, default: false },
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
    }
  }
}
</script>
<style lang="scss">
.img {
  width: 100%;
}
.headline {
  font-size: 2.2rem;
  margin: 0;
  line-height: 1.2;
}
.col {
  padding: 0;
}
.card-back .content {
  height: 100%;
}
.card-front .content {
  flex: 1 0 55px;
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
    .content {
      padding: 1.5rem 2rem;
      width: 100%;
    }
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
