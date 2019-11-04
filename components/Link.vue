<template lang="pug">
    a(:href="href" :target="target" :title="title")
        i.link-icon.fa(v-if="icon" :class="icon" aria-hidden="true")
        | {{text}}
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
