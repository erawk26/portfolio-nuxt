<template>
  <section class="projects px-5 add-top">
    <div class="wrapper d-flex flex-column justify-start">
      <transition name="fade" mode="out-in">
        <nuxt-child />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'slide-up'
    return +to.query.page < +from.query.page ? 'slide-down' : 'slide-up'
  },
  components: {}
}
</script>

<style lang="scss"></style>
