<template lang="pug">
  .project-container.flex.wrap
    a.img.ar.sixteen-nine(target="_blank" :style="{'background':'url('+require('~/assets/img/'+project.img)+') center / cover no-repeat'}" :href="project.links.main.href" :title="project.title" :alt="project.title") 
    .cell.alpha
      h2 {{ project.title }}
      p {{ project.desc }}
      Link(:href="project.links.main.href" :target="project.links.main.target" :title="project.links.main.title" :text="project.links.main.text" :icon="project.links.main.icon?project.links.main.icon:'fa-globe'")
      template(v-if="project.links.other" v-for="otherLink in project.links.other" )
        Link(:href="otherLink.href" :target="otherLink.target" :title="otherLink.title" :text="otherLink.text" :icon="otherLink.icon?otherLink.icon:'fa-globe'")
    .cell.omega
      .flex.inline
        nuxt-link(:to="looper(-1)")
          i.fa.fa-2x.fa-chevron-left
        nuxt-link(:to="'/projects'")
          i.fa.fa-2x.fa-list
        nuxt-link(:to="looper(1)")
          i.fa.fa-2x.fa-chevron-right
      ul.flex.wrap.unstyle
        v-chip.ma-2.skill(v-for="(skill, i) in project.skills" :color="'#37474F'" :key="'skill-'+i+1" ripple)
          span.color.wht {{skill}}
</template>
<script>
import Link from '~/components/Link.vue'
export default {
  components: { Link },
  data: () => ({ slideTransition: 'fade' }),
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.$store.state.projects[this.$route.params.id]
    },
    menus() {
      return this.$store.state.menus
    }
  },
  methods: {
    looper(dir) {
      const arr = Object.keys(this.projects),
        len = arr.length
      return arr[(arr.indexOf(this.$route.params.id) + (dir % len) + len) % len]
    },
    next() {
      this.slideTransition = 'slide-right'
      // this.counterTransition = 'slide-up'
      // this.$route.params.id = this.looper(1)
      console.log(this.looper(1))
      // this.$router.push({ name: 'projects', params: { id: this.looper(1) } })
    },
    prev() {
      this.slideTransition = 'slide-left'
      // this.counterTransition = 'slide-down'
      console.log(this.looper(-1))
      // this.$router.push({ name: 'projects', params: { id: this.looper(-1) } })
    },
    onSwipe(ev) {
      let th = ev.deltaX > 30 || ev.deltaX < -30
      if (th) {
        if (Math.sign(ev.deltaX) > 0) {
          this.prev()
        } else {
          this.next()
        }
      }
    }
  }
  //   validate({ params }) {
  //     console.log(params)
  //        return params.id == this.props.project.id // if the params are valid
  //   }
}
</script>
<style lang="scss">
.skill {
  font-size: 0.8em;
  @include marding(0 5px 5px 0, 8px);
}
.project-container {
  @include set-max-width;
  .cell {
    padding: 5px;
  }
  .alpha {
    flex: 2;
  }
  .omega {
    flex: 1;
  }
}
</style>
