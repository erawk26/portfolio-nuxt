<template>
  <div class="max-pg-width cards">
    <ul class="unstyle d-flex flex-wrap">
      <li
        v-for="project in projects"
        :key="project.id"
        class="col-sm-6 col-lg-4"
      >
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
  li {
    .ar .abs-center {
      width: 100%;
      height: 100%;
    }
  }
  .flip-card {
    .headline {
      font-size: 2.2rem;
      margin: 0;
      line-height: 1.2;
    }
    .content {
      padding: 1.5rem 2rem;
      width: 100%;
    }
    .col {
      padding: 0;
    }

    .card-front .content {
      border-top: 4px solid $dk-green;
    }
  }
}
</style>
