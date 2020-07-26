<template>
  <div :style="cssVars">
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="background">
        <div class="flex-center">
          <!-- <h1 class="text-white">Order Page</h1> -->
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <h2>Under Construction...</h2>
          </div>
        </div>
      </div>
    </section>
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

export default {
  name: "order",
  components: {},
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
        "--bg-url2-sm": `url(${BG2SM})`
      };
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.background {
  height: 10vh;
  width: 100%;
  z-index: 1;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   var(--bg-url2-sm);
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .slogan {
    color: white;
    font-size: 1.5em;
    margin-bottom: 2.25em;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 500px;
  }
}
</style>
