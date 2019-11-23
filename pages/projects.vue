<template>
  <section class="projects add-top">
    <div class="wrapper flex col a-center">
      <nuxt-child />
    </div>
  </section>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  components: {}
}
</script>

<style lang="scss"></style>
