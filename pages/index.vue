<template lang="pug">
  section.intro
    .wrapper.flex.col.center
      v-avatar.add-bottom.headshot(size='200px')
        img.img-circle.elevation-7.mb-1(src='/img/headshot2.jpg' title="Erik Olsen")
      p I'm Erik Olsen, a Web Developer currently based out of Sarasota, FL. I build fast responsive websites and applications.
      router-link.material-icons.next.add-top.unstyle(to="/projects") expand_more
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'slide-down'
    // console.log(to, from)
    return 'slide-down'
    // return +to.query.page < +from.query.page ? 'slide-up' : 'slide-down'
  },
  components: {},
  data: () => ({})
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
    // box-shadow: -3px 3px 7px 0 rgba(black, 0.4);
    transform: scaleX(-1) rotate(8deg);
    // filter: drop-shadow(1px 1px 4px rgba($black, 0.6));
    // width: 250px;
    // height: 250px;
    // display: block;
    //border: 0.45em solid #fff;
    //border: 0.45em solid rgba(white, 0.75);
    // z-index: 9;
    @media (max-width: $bp-sm-max) {
      // margin-bottom: 25px;
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
