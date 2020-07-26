<template>
  <footer :style="cssVars" class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6 footer-reposittion">
          <h5
            class="text-warning font-weight-light mb-2"
          >Thank you for supporting us during these tough times!</h5>
          <h6
            class="text-dark mb-0 font-weight-light"
          >Always receive 10% off when ordering on our website.</h6>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook-square"></i>
          </a>
          <!-- <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-dribbble"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Star on Github"
          >
            <i class="fa fa-github"></i>
          </a>-->
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-3">
          <div class="copyright">
            <a href="#" target="_blank" rel="noopener">
              <img src="/img/logo1.svg" />
            </a>
            <span class="text-dark">All Rights Reserved &copy; {{year}}</span>
            <br />
            <span class="text-dark">Powered by Gaba Digital</span>
          </div>
        </div>
        <div class="col-md-9">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <router-link to="/" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aboutus" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">About Us</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactus" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Contact Us</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Order Online</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Pattern from "/img/pattern-overlay.png";

export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    cssVars() {
      return {
        "--pattern": `url(${Pattern})`
      };
    }
  }
};
</script>
<style lang="stylus" scoped>
.footer-reposittion {
  position: relative;
  bottom: 75px;
}

.copyright {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin-bottom: 1em;
  }

  img {
    width: 100%;
  }
}
</style>
