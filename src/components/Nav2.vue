<template>
  <div id="nav-2" :class="py ? py : 'pt-3'">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
          <b-img-lazy class="img-socmed ms-3" :src="require('@/assets/logo-1.png')" alt="logo" id="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <b-row align-h="between" class="ml-auto" id="col-right">
          <b-col cols="auto" class="col-menu">
            <b-navbar-brand href="#">
              <b-img-lazy class="link-img" :src="require('@/assets/nav-tool-0.png')" alt="nav-tool-0.png" />
            </b-navbar-brand>
          </b-col>
          <b-col cols="auto" class="col-menu">
            <b-navbar-brand href="#">
              <b-img-lazy class="link-img" :src="require('@/assets/nav-tool-1.png')" alt="nav-tool-1.png" />
            </b-navbar-brand>
          </b-col>
          <b-col lg="auto" class="col-menu text-right">
            <ProfileMenu />
          </b-col>
        </b-row>
      </b-collapse>
    </b-navbar>
    <hr v-if="isHasHr" />
  </div>
</template>
<script>
import ProfileMenu from '@/components/ProfileMenu.vue';
export default {
  name: "Nav2",
  props: {
    py:null,
    isHasHr: null,
  },
  components:{
    ProfileMenu,
  },
  data: () => {
    return {
    };
  },
};
</script>
<style scoped lang="scss">
#nav-2 {
    #logo{
        max-height: 47px;
    }
    .link-img{
        max-height: 47px;
    }
    hr{
      border: 1px solid #8692A6;
      box-sizing: border-box;
    }
    .navbar{
        align-items: flex-end;
    }
    #ps{
      margin-left: unset !important;
    }
    #name{
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.25px;
      color: #2D3748;
    }
    .navbar-brand{
      margin-right: unset !important;
      padding-top: unset !important;
      padding-bottom: unset !important;
    }
    #badge{
      max-height: 17px;
    }
    #badge-status{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.25px;
      color: #6C737F;
    }
    #col-profile{
      padding-right: unset !important;
    }
    #profile-info{
      padding-left: 10px !important;
      cursor: pointer;
    }
    #chevron{
      max-height: 12px;
      margin-bottom: 2.5px;
    }
    @media (max-width: 991px) {
      padding-top: unset !important;
      #col-right{
        padding-top: 15px;
      }
      .col-menu{
        padding-block: 0.5rem;
        padding-left: 0px !important;
        // border-bottom: solid 1px;
      }
    }
}
</style>
