<template>
  <section class="section section-lg section-position">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="row row-grid">
            <img :src="IMG" alt />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row row-grid">
            <h3>
              The BEST
              Italian spot
              <span class="text-secondary">HaVilla</span>
            </h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci.</p>
            <div class="button-right">
              <router-link
                to="/aboutus"
                slot="title"
                href="#"
                class="btn btn-secondary"
                role="button"
              >About Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import IMG from "/img/background2-sm.jpg";
export default Vue.component("aboutus-short", {
  data: function () {
    return { IMG };
  },
});
</script>
<style lang="scss" scoped>
.section-position {
  position: relative;
  top: 5em;
  z-index: 1;
  padding-top: 0;
}
img {
  max-width: 100%;
  max-width: -moz-available; /* WebKit-based browsers will ignore this. */
  max-width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-width: fill-available;
  border-radius: 25px;
}
.row-grid {
  padding: 1.2em;
}
.button-right {
  display: flex;
  width: 100%;
}
</style>
