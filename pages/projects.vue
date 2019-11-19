<template>
  <section class="projects">
    <div class="wrapper flex col center">
      <nuxt-child />
    </div>
  </section>
</template>

<script>
// import Project from '~/components/Project.vue'
import projects from '~/assets/js/projects.js'

export default {
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  components: {},
  data: () => ({ jobs: projects.jobs })
}
</script>

<style lang="scss">
.project-link {
  a {
    text-decoration: none;
    border-bottom: none;
    font-family: $fontHead;
    font-size: 2.4rem;
    line-height: 1;
    @include textLink($link-color-normal, $link-color-active);
    position: relative;
    &::after {
      opacity: 0;
      transform: translateY(20px);
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      height: 0;
      width: 0;
      overflow: hidden;
      border-bottom: 1px inset $link;
      transition: opacity $base-duration $base-duration,
        transform $base-duration $base-duration,
        border-bottom $base-duration $base-duration;
    }
  }
  &:hover,
  &.active {
    a {
      color: $link-color-active;
      &::after {
        border-bottom-color: $link-color-active;
        overflow: visible;
        width: 100%;
        height: 2px;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
