<template>
  <section class="section bg-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col col-lg-6">
              <card class="border-0" shadow body-classes="py-5">
                <h6 class="text-dark text-uppercase">Contact Us</h6>
                <p class="description mt-3">
                  HaVilla is a familiy owned and operated Italian restaurant
                  based out of Fort Lauderdale. We've been serving customers for
                  over 3 decades.
                </p>
                <form>
                  <base-input placeholder="Name"></base-input>
                  <base-input placeholder="Phone #"></base-input>
                  <base-input placeholder="Email"></base-input>

                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Inquiry ..."
                  ></textarea>
                  <br />
                  <div>
                    <base-button block type="danger">Submit</base-button>
                  </div>
                </form>
              </card>
            </div>
            <div class="col col-lg-6">
              <card class="border-0" shadow body-classes="py-5">
                <h6 class="text-dark text-uppercase">Info</h6>
                <p class="description mt-3">Phone number: +1-555-123-4567</p>
                <p class="description mt-3">
                  Address: 123 All Right DR. Brooklyn, NY 11234
                </p>
                <img src="/img/maps-placeholder.png" alt />
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
export default Vue.component("contactus-form", {});
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  max-width: -moz-available; /* WebKit-based browsers will ignore this. */
  max-width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-width: fill-available;
}
.row {
  display: flex;
  flex-flow: row wrap;
}
.col {
  display: flex;
  flex: 1 0 400px;
  flex-flow: column;
}
.card {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-grow: 1;
}
</style>
