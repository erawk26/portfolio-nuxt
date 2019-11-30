<template lang="pug">
  a(:href="href" :target="target" :title="title")
    v-icon.link-icon(aria-hidden="true") {{icon}}
    | {{ text }}
</template>
<script>
export default {
  components: {},
  props: {
    target: {
      type: String,
      default: '_blank'
    },
    icon: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Visit Site'
    }
  }
}
</script>
<style>
.link-icon {
  padding-right: 0.3em;
}
</style>
