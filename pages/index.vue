<template lang="pug">
  section.intro
    //- logo
    .wrapper.flex.col.center
      img.add-bottom.headshot(src='/img/headshot2.jpg', alt="Erik Olsen")
      p I'm Erik Olsen, a Web Developer currently based out of Sarasota, FL. I build fast responsive websites and applications.
      router-link.material-icons.next.add-top.unstyle(to="/projects") expand_more
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
section.intro {
  .wrapper {
    height: 100%;
    max-height: 700px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 25px;
    /* // @include flex($direction: column); */
    line-height: 2;
    p {
      font-family: $fontBody;
      max-width: 700px;
      margin: 0 auto;
    }
    @media (max-width: $bp-sm-max) {
      line-height: 1.5;
    }
    @media (max-width: $bp-xs-max) {
      /* // margin-top: 65px; */
      p {
        font-size: 18px;
        line-height: 1.3;
        max-width: 100%;
        padding: 0 5%;
      }
      img.headshot {
        width: 150px;
        height: 150px;
      }
    }
  }
  .headshot {
    border-radius: 50%;
    /* //@include single-box-shadow(.35em, .35em, .55em, 0, rgba(black, 0.4));
    //transform: rotate(10deg); */
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
    width: 250px;
    height: 250px;
    display: block;
    /* //border: 0.45em solid #fff;
    //border: 0.45em solid rgba(white, 0.75); */
    z-index: 9;
    @media (max-width: $bp-sm-max) {
      /* // margin-bottom: 25px; */
    }
  }
}

.fa.fa-chevron-down,
.next {
  text-align: center;
  cursor: pointer;
  color: rgba(#000, 0.75);

  font-size: 2em;
  @media (max-width: $bp-sm-max) {
    font-size: 1.5em;
  }
  font-weight: 400;
  &:hover {
    text-decoration: none;
  }
}
</style>
