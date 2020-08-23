<template>
  <div :style="cssVars">
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="background">
        <div class="flex-center">
          <img src="/img/logo4.svg" alt />
          <div class="d-flex d-flex-100 justify-content-center">
            <p class="slogan">A FAMILY FRIENDLY ITALIAN RESTAURANT</p>
          </div>
          <div class="d-flex">
            <router-link
              to="/order"
              slot="title"
              href="#"
              class="btn btn-danger btn-fix-pos"
              role="button"
            >Order Now!</router-link>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <aboutus-short></aboutus-short>
    <testimonials></testimonials>
  </div>
</template>

<script>
import BG1XL from "/img/background.jpg";
import BG1LG from "/img/background-lg.jpg";
import BG1MD from "/img/background-md.jpg";
import BG1SM from "/img/background-sm.jpg";

import BG2 from "/img/background2.jpg";
import BG2LG from "/img/background2-lg.jpg";
import BG2MD from "/img/background2-md.jpg";
import BG2SM from "/img/background2-sm.jpg";
import AboutUsShort from "/components/restuarant/AboutUsShort.vue";
import Testimonials from "/components/restuarant/Testimonials.vue";

export default {
  name: "home",
  components: {
    child: {
      AboutUsShort,
      Testimonials,
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-url1-xl": `url(${BG1XL})`,
        "--bg-url1-lg": `url(${BG1LG})`,
        "--bg-url1-md": `url(${BG1MD})`,
        "--bg-url1-sm": `url(${BG1SM})`,
        "--bg-url2-xl": `url(${BG2})`,
        "--bg-url2-lg": `url(${BG2LG})`,
        "--bg-url2-md": `url(${BG2MD})`,
        "--bg-url2-sm": `url(${BG2SM})`,
      };
    },
  },
  data: function () {
    return {};
  },
};
</script>
<style scoped lang="scss">
.d-flex-100 {
  width: 100%;
}
.background {
  height: 100vh;
  width: 100%;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    var(--bg-url2-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    flex-basis: 100%;
    max-height: 40vh;
    max-width: 66vw;
  }
  .slogan {
    color: white;
    font-size: min(max(1em, 1.5vw), 1.5em);
    margin-bottom: 2.25em;
    background: #36e2f57e;
    padding: 5px 1em;
    text-shadow: 2px 2px 2px #000;
    // position: relative;
    bottom: 40px;
    margin-bottom: 0px;
  }
  .btn-fix-pos {
    position: relative;
    // top: -20px;
  }
  .flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 330px;
    width: 500px;
    > * {
      margin-bottom: 1.5em;
    }
  }
}
.position-relative {
  z-index: 1;
}
</style>
