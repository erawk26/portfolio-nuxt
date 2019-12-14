<template>
  <v-container grid-list-lg class="cards">
    <v-layout class="row wrap">
      <v-flex
        v-for="project in filtered"
        :key="project.id"
        class="li"
        xs12
        sm6
        lg4
      >
        <v-hover>
          <template v-slot="{ hover }">
            <Project :project="project" :hover="hover"></Project>
          </template>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Project from '~/components/FlipCard.vue'

export default {
  components: { Project },
  data: () => ({ message: 'hello' }),
  computed: {
    skills() {
      return this.$store.state.skills
    },
    filtered() {
      const obj = this.$store.state.projects
      return this.keys
        .filter((key) => obj[key]['skills'])
        .filter((k) =>
          obj[k].skills
            .map((s) => this.machine_readable(s))
            .includes(this.$route.params.skill)
        )
        .map((k) => obj[k])
    },
    menus() {
      return this.$store.state.menus
    },
    keys() {
      return Object.keys(this.$store.state.projects)
    }
  },
  methods: {
    machine_readable: function(str) {
      return str
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    }
  }
}
</script>

<style scoped></style>
