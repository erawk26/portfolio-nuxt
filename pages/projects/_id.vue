<template lang="pug">
  .project-container.flex.wrap.a-start
    a.img.ar.sixteen-nine(target="_blank" :style="{'background':'url('+require('~/assets/img/'+project.img)+') center / cover no-repeat'}" :href="project.links.main.href" :title="project.title" :alt="project.title") 
    .cell.alpha
      h2 {{ project.title }}
      p {{ project.desc }}
      Link(:href="project.links.main.href" :target="project.links.main.target" :title="project.links.main.title" :text="project.links.main.text" :icon="project.links.main.icon?project.links.main.icon:'fa-globe'")
      template(v-if="project.links.other" v-for="otherLink in project.links.other" )
        Link(:href="otherLink.href" :target="otherLink.target" :title="otherLink.title" :text="otherLink.text" :icon="otherLink.icon?otherLink.icon:'fa-globe'")
    ul.flex.wrap.unstyle.cell.omega
      li.skill.fill.dk-gray(v-for="(skill, i) in project.skills")
        span.color.white {{skill}}
</template>
<script>
import Link from '~/components/Link.vue'
export default {
  components: { Link },
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
  computed: {
    menus() {
      return this.$store.state.menus
    }
  }
  //   validate({ params }) {
  //     console.log(params)
  //        return params.id == this.props.project.id // if the params are valid
  //   }
}
</script>
<style lang="scss">
.ar {
  width: 100%;
  height: 0;
  display: block;
  padding: 0;
  &.sixteen-nine {
    padding-bottom: 56.25%;
  }
}
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
