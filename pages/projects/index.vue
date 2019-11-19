<template>
  <ul class="unstyle flex wrap max-pg-width cards">
    <li v-for="project in projects" :key="project.id">
      <Project :project="project"></Project>
    </li>
  </ul>
</template>

<script>
import Project from '~/components/FlipCard.vue'

export default {
  components: { Project },
  data: () => ({}),
  computed: {
    projects() {
      return this.$store.state.projects
    },
    keys() {
      return Object.keys(this.projects)
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.cards {
  width: 100%;
  $gutter: 25px;
  @include width-grid($gutter, 1);
  @media (min-width: $bp-xs) {
    @include width-grid($gutter, 2);
  }
  @media (min-width: $bp-sm) {
    @include width-grid($gutter, 3);
  }
  @media (min-width: $bp-md) {
    @include width-grid($gutter, 4);
  }
  li {
    overflow: visible;
    // margin: 1.5rem;
    .ar .abs-center {
      width: 100%;
      height: 100%;
    }
    .card-front,
    .card-back {
      .headline {
        margin: 0 auto;
        padding: 1rem;
      }
    }
  }
}
</style>
