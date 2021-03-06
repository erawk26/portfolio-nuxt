<template lang="pug">
  .project-container.max-pg-width(v-touch="{ left: () => swipe('Left'), right: () => swipe('Right'), up: () => swipe('Up'), down: () => swipe('Down')}")
    v-breadcrumbs.pl-0(:items='crumbs')
      template(v-slot:divider='')
        v-icon mdi-chevron-right
    div
      v-card
        v-img(:src="require('~/assets/img/'+project.img)" aspect-ratio="1.77" :title="project.title" :alt="project.title")
      .title-wrapper.d-flex.align-end.justify-space-between
        .cell.eo-flex.a-end
          h1.display-2 {{ project.title }}
          Link.ml-2(:text="project.links.main.text" :icon="project.links.main.icon||'mdi-link'" :href="project.links.main.href" :target="project.links.main.target" :title="project.links.main.title||'Visit Site'" hideText)
          template(v-if="project.links.other" v-for="otherLink in project.links.other" )
            Link.ml-2(:text="otherLink.text" :icon="otherLink.icon||'mdi-link'" :href="otherLink.href" :target="otherLink.target" :title="otherLink.title" hideText)
        small.counter.flex-shrink-0 {{keys.indexOf(project.id) + 1}} / {{keys.length}}
          nuxt-link(:to="looper(1)")
            v-icon chevron_right
      v-divider
      .eo-flex.wrap.j-center.a-start
        .cell.alpha.mt-2
          p.mt-0 {{ project.desc }}
        .cell.omega.eo-flex.wrap.skills.mt-2(v-if="project.skills")
          small.full-width Skills:
          v-chip.mr-1.mb-1(small :to="'/projects/tag/'+ machine_readable(skill)" ripple v-for="(skill, i) in project.skills" :key="'skill-'+i+1") {{skill}}
    .text-center
      v-pagination(@input="paginationChange" v-model='page' total-visible="5" :length='keys.length' circle)  
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
    project() {
      return this.$store.state.projects[this.$route.params.id]
    },
    menus() {
      return this.$store.state.menus
    },
    skills() {
      return this.$store.state.skills
    },
    keys() {
      return Object.keys(this.projects)
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
    machine_readable: function(str) {
      return str
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    },
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
.skills {
  a {
    display: block;
    font-size: 0.8em;
  }
  h6 {
    width: 100%;
  }
}
.project-container {
  .title-wrapper {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    h1.display-2 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
  }
  .v-card {
    width: 100%;
  }
  .v-btn i {
    margin-right: 0.25em;
  }
  // @include set-max-width;
  .cell {
    // padding: 5px;
  }
  .alpha {
    flex: 2;
    margin-right: 2rem;
    @media (max-width: 599px) {
      min-width: 100%;
      margin-right: 0;
    }
  }
  .omega {
    flex: 1;
  }
}
</style>
