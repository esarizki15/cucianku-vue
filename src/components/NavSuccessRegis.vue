<template>
  <div id="nav-success-regis" :class="py ? py : 'pt-3'">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
          <b-img-lazy class="img-socmed ms-3" :src="require('@/assets/logo-1.png')" alt="logo" id="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-3">
          <b-nav-text>Download Aplikasi di:</b-nav-text>
        </b-navbar-nav>
        <b-navbar-brand href="#">
          <b-img-lazy class="link-img mx-3" :src="require('@/assets/ps-1.png')" alt="ps" id="ps" />
        </b-navbar-brand>
        <b-navbar-brand href="#">
          <b-img-lazy class="link-img ms-3" :src="require('@/assets/as-1.png')" alt="as" id="as" />
        </b-navbar-brand>
      </b-collapse>
    </b-navbar>
    <hr v-if="isHasHr" />
  </div>
</template>
<script>
export default {
  name: "NavSuccessRegis",
  props: {
    py:null,
    isHasHr: null,
  },
  data: () => {
    return {
      img: [
        require("@/assets/facebook.png"),
        require("@/assets/youtube.png"),
        require("@/assets/linkedin.png"),
        require("@/assets/instagram.png"),
      ],
    };
  },
};
</script>
<style scoped lang="scss">
#nav-success-regis {
    #logo{
        max-height: 47px;
    }
    .link-img{
        max-height: 40px;
    }
    hr{
      border: 1px solid #8692A6;
      box-sizing: border-box;
    }
}
</style>
