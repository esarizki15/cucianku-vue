<template>
  <div id="nav-3" :class="py ? py : 'pt-3'">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
          <b-img-lazy class="img-socmed ms-3" :src="require('@/assets/logo-2.png')" alt="logo" id="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <b-row class="w-100" align-h="between" align-v="center">
          <b-col cols="12" lg="6" id="col-search">
            <b-row align-v="center" align-h="center">
              <b-col cols="auto">
                <b-icon icon="geo-alt-fill" id="icon"></b-icon>
              </b-col>
              <b-col cols="8">
                <v-select transition="list" size="lg" :options="[{label: 'Canada', code: 'ca'}]" id="select"></v-select>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="auto">
            <b-row class="ml-auto" id="col-right" align-h="between">
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
                <ProfileMenu v-if="isLogin" />
                <b-button v-else id="btn-login" to="/login">LOGIN</b-button>
              </b-col>
            </b-row>
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
  name: "Nav3",
  props: {
    py:null,
    isHasHr: null,
  },
  components:{
    ProfileMenu,
  },
  data: () => {
    return {
      isLogin: true,
    };
  },
};
</script>
<style lang="scss">
#nav-3 {
    #select{
      .vs__dropdown-toggle{
        background: #FBFBFB;
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 12px;
        padding-block: 10px;
        padding-inline: 10px;
      }
    }
  }
</style>
<style scoped lang="scss">
#nav-3 {
    #select{
      div{
        background: #FBFBFB;
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 12px;
      }
    }
    #logo{
        max-height: 78px;
    }
    .link-img{
        max-height: 47px;
    }
    hr{
      border: 1px solid #8692A6;
      box-sizing: border-box;
    }
    .navbar{
        // align-items: flex-end;
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
    #btn-login{
      background: #3B97D3;
      border-radius: 12px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 13px;
      letter-spacing: 1.28514px;
      text-transform: uppercase;
      color: #FAFAFA;
      padding-block: 15px;
      padding-inline: 45px;
    }
    @media (max-width: 991px) {
      padding-top: unset !important;
      #col-right{
        padding-top: 15px;
        width: 100%;
      }
      .col-menu{
        padding-block: 0.5rem;
        padding-left: 0px !important;
        // border-bottom: solid 1px;
      }
      #col-search{
        margin-top: 0.5rem;
      }
    }
}
</style>
