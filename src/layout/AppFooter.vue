<template>
  <footer :style="cssVars" class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6 footer-reposition">
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
        <div class="col-md-3 col-sm-12">
          <div class="copyright">
            <a href="#" target="_blank" rel="noopener">
              <img src="/img/logo1.svg" />
            </a>
            <div class="text-white">
              <span>All Rights Reserved &copy; {{year}}</span>
            </div>
            <br />
            <div class="text-white">
              <span>Powered by Gaba Digital</span>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <ul class="nav nav-footer d-flex justify-content-center justify-content-md-end">
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
      year: new Date().getFullYear(),
    };
  },
  computed: {
    cssVars() {
      return {
        "--pattern": `url(${Pattern})`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  padding: 2.5em 0;
  background: linear-gradient(rgb(233, 82, 95), rgb(128, 10, 41));
  a {
    color: white;
  }
  i {
    color: white;
  }
  .btn-twitter {
    color: #fff;
    background-color: #1da1f2;
    border-color: #1da1f2;
  }
  .btn-facebook {
    color: #fff;
    background-color: #3b5999;
    border-color: #3b5999;
  }
  .btn-icon-only {
    width: 2.375rem;
    height: 2.375rem;
    padding: 0;
  }
  .btn-facebook,
  .btn-twitter {
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
      0 1px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  a.btn-icon-only {
    line-height: 2.5;
  }
  .text-dark-fordark-bg {
    text-shadow: 2px 2px #000000;
    color: rgb(255, 238, 142) !important;
  }
}
.footer-reposition {
  position: relative;
  bottom: 75px;
  font-size: min(max(12px, 1vw), 16px);
  h5 {
    font-size: min(max(14px, 1vw), 20px);
  }
  h6 {
    font-size: min(max(13px, 1vw), 18px);
  }
}

.copyright {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a,
  div {
    margin-bottom: 0.33em;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: min(max(12px, 1vw), 16px);
  }

  img {
    margin-bottom: 0.33em;
    width: 100%;
    max-width: 30vw;
  }
}
</style>
