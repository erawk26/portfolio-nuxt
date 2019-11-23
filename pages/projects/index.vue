<template>
  <div class="max-pg-width cards">
    <ul class="unstyle flex wrap flex-grid">
      <li v-for="project in projects" :key="project.id" class="col-sm-6">
        <v-hover>
          <template v-slot="{ hover }">
            <Project :project="project" :hover="hover"></Project>
          </template>
        </v-hover>
      </li>
    </ul>
  </div>
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
  height: 100%;
  padding: 5%;
  .flex-grid {
    li {
      .ar .abs-center {
        width: 100%;
        height: 100%;
      }
      .card-front .content {
        border-top: 4px solid $dk-green;
      }
    }
  }
}
</style>
