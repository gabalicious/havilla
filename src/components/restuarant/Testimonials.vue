<template>
  <section class="section section-position">
    <div class="container">
      <h1>Testimonials</h1>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>This place is beautifully, clean and modern. I love the how it reminds me of Italy...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-3 col-md-2">
                <img src="/img/theme/team-2-800x800.jpg" alt />
              </div>
              <div class="col-5 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>Great Italian food. The love is REAL. The staff is nice. I order from HaVilla almost everyday...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-3 col-md-2">
                <img src="/img/theme/team-4-800x800.jpg" alt />
              </div>
              <div class="col-5 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>Food here is amazing. The grilled chicken wraps, Caesar Salad, and grandma slices...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-3 col-md-2">
                <img src="/img/theme/team-3-800x800.jpg" alt />
              </div>
              <div class="col-5 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
export default Vue.component("testimonials", {
  data: function () {
    return { rating: 4.5 };
  },
});
</script>
<style lang="scss" scoped>
.card {
  background: #e52f3d;
  border: 1px solid white;
  color: white;
  width: 100%;
  margin: 1em;
}
.review {
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 0 1em;
  padding: 2rem 1.5rem;
  .col-lg-2,
  .col-3,
  .col-4,
  .col-lg-4 {
    padding: 0;
  }
}
.review-body {
  padding: 10px 15.5px;
}
h1 {
  text-align: center;
}
img {
  max-width: 100%;
  max-width: -moz-available; /* WebKit-based browsers will ignore this. */
  max-width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-width: fill-available;
  border-radius: 50%;
}
.lead {
  font-weight: 400;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
