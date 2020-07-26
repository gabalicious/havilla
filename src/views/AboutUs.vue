<template>
  <div :style="cssVars">
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="background">
        <div class="flex-center">
          <h1 class="text-white">About Us</h1>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <aboutus-section></aboutus-section>
    <testimonials></testimonials>
  </div>
</template>

<script>
import BG1SM from "/img/background-sm.jpg";
import AboutUsSection from "/components/restuarant/AboutUsSection.vue";
import Testimonials from "/components/restuarant/Testimonials.vue";

export default {
  name: "aboutus",
  components: {
    child: {
      AboutUsSection,
      Testimonials
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-url1-sm": `url(${BG1SM})`
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
  height: 50vh;
  width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    var(--bg-url1-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  padding-top: 0;
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
