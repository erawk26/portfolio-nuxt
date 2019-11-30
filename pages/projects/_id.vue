<template lang="pug">
  .project-container(v-touch="{\
  left: () => swipe('Left'),\
  right: () => swipe('Right'),\
  up: () => swipe('Up'),\
  down: () => swipe('Down')\
  }")
    v-breadcrumbs(:items='crumbs')
      template(v-slot:divider='')
        v-icon mdi-chevron-right
    .d-flex.align-start.justify-center.flex-wrap
      .cell.alpha
        a.img.ar.sixteen-nine(target="_blank" :style="{'background':'url('+require('~/assets/img/'+project.img)+') center / cover no-repeat'}" :href="project.links.main.href" :title="project.title" :alt="project.title") 
        h1.display-2 {{ project.title }}
        p {{ project.desc }}
      .cell.omega
        ul.flex.wrap.unstyle.skills
          li(v-for="(skill, i) in project.skills" :key="'skill-'+i+1") 
            v-chip.ma-1.skill(color="charcoal" text-color="white" ripple) {{skill}}
        v-btn(outlined small :href="project.links.main.href" :target="project.links.main.target" :title="project.links.main.title")
          v-icon(small) {{project.links.main.icon||'mdi-link'}}
          | {{project.links.main.text||'Visit Site'}}
        template(v-if="project.links.other" v-for="otherLink in project.links.other" )
          v-btn(outlined small :href="otherLink.href" :target="otherLink.target" :title="otherLink.title")
            v-icon(small) {{otherLink.icon||'mdi-link'}}
            | {{otherLink.text||'Visit Site'}}
    .text-center
      v-pagination(@input="paginationChange" v-model='page' total-visible="5" :length='Object.keys(this.projects).length' circle)  
</template>
<script>
import Link from '~/components/Link.vue'
export default {
  components: { Link },
  data: () => ({ slideTransition: 'fade', swipeDirection: null, page: null }),
  computed: {
    projects() {
      return this.$store.state.projects
    },
    projectLength() {
      return Object.keys(this.projects).length
    },
    project() {
      return this.$store.state.projects[this.$route.params.id]
    },
    menus() {
      return this.$store.state.menus
    },
    crumbs() {
      return [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Projects',
          disabled: false,
          href: '/projects'
        },
        {
          text: this.project.title,
          disabled: true,
          href: '/projects/' + this.project.id
        }
      ]
    }
  },
  watch: {},
  mounted() {
    this.page = Object.keys(this.projects).indexOf(this.$route.params.id) + 1
  },
  methods: {
    paginationChange(num) {
      this.$router.push({
        path: '/projects/' + Object.keys(this.projects)[num - 1]
      })
    },
    looper(dir) {
      const arr = Object.keys(this.projects),
        len = arr.length
      return arr[(arr.indexOf(this.$route.params.id) + (dir % len) + len) % len]
    },
    swipe(dir) {
      this.swipeDirection = dir
      const x = dir == 'Left' || dir == 'Up' ? 1 : -1
      this.slideTransition = x > 0 ? 'slide-left' : 'slide-right'
      this.$router.push({
        path: '/projects/' + this.looper(x)
      })
    }
  }
}
</script>
<style lang="scss">
.skills li {
  @include marding;
  font-size: 0.8em;
}
.project-container {
  .v-btn i {
    margin-right: 0.25em;
  }
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
