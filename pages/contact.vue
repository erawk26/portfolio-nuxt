<template>
  <section class="contact">
    <div class="wrapper flex col center">
      <logo />
      <h1 class="title">
        Contact
      </h1>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  transition(to, from) {
    if (!from) return 'slide-down'
    return +to.query.page < +from.query.page ? 'slide-up' : 'slide-down'
  },
  components: {
    Logo
  }
}
</script>
<style lang="scss">
//////////////// Contact ////////////////
section.contact {
  .form-container {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
}
/* Obnoxious styling for icon fonts */
.nav-social .fa {
  @include default-transition;
  color: $dk-gray;
  &.fa-envelope-o {
    //color: rgb(201, 44, 25);
    &:hover {
      //color: white;
      color: rgb(201, 44, 25);
      border-color: rgb(201, 44, 25);
    }
  }

  &.fa-phone {
    //color: green;
    &:hover {
      color: green;
      border-color: green;
    }
  }

  &.fa-twitter {
    //color: #4099FF;
    &:hover {
      //color: white;
      color: #4099ff;
      border-color: #4099ff;
    }
  }

  &.fa-linkedin {
    //color: #0077b5;
    &:hover {
      //color: white;
      color: #0077b5;
      border-color: #0077b5;
    }
  }

  &.fa-drupal {
    //color: #0678bf;
    &:hover {
      //color: white;
      color: #0678bf;
      border-color: #0678bf;
    }
  }

  &.fa-github {
    //color: #333;
    &:hover {
      //color: white;
      color: #333;
      border-color: #333;
    }
  }

  &.fa-codepen {
    //color: black;
    &:hover {
      //color: white;
      color: black;
      border-color: black;
    }
  }

  &.fa-stack-overflow {
    //color: #07c;
    &:hover {
      //color: white;
      color: #07c;
      border-color: #07c;
    }
  }

  &.fa-dribbble {
    //color: #ea4c89;
    &:hover {
      //color: white;
      color: #ea4c89;
      border-color: #ea4c89;
    }
  }

  &.fa-fire {
    //color: #4b2a10;
    &:hover {
      //color: white;
      color: #4b2a10;
      border-color: #4b2a10;
    }
  }
}
</style>
