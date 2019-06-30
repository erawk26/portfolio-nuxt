<template>
  <div>
    <div class="navigation-drawer">
      <ul class="nav-menu flex-row left">
        <li
          v-for="(item, i) in items"
          :key="i"
          :class="{ active: $route.path == item.to }"
          class="nav-item"
        >
          <router-link class="flex-row left" :to="item.to" router>
            <i class="material-icons">{{ item.icon }}</i>
            <span class="uc menu-title" v-text="item.title" />
          </router-link>
        </li>
        <li class="flex-spacer" />
        <li class="file-item uc">
          <a
            href="./ErikOlsen_Resume.pdf"
            target="_blank"
            class="flex-row left"
          >
            <i class="material-icons">picture_as_pdf</i>
            <span class="uc menu-title">Resume</span>
          </a>
        </li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'home',
          title: 'EO',
          to: '/'
        },
        {
          icon: 'work',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mail_outline',
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav-item,
.file-item {
  padding: 5px 10px;
  .menu-title {
    display: initial;
  }
  .material-icons {
    display: none;
  }
  @media (max-width: 767px) {
    .menu-title {
      display: none;
    }
    .material-icons {
      display: initial;
    }
  }
}
</style>
