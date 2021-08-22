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
            <b-dropdown size="lg" right  variant="link" id="profil-dropdown" toggle-class="text-decoration-none" no-caret>
              <template #button-content>
                <b-row align-v="center" align-h="center">
                  <b-col cols="auto" id="col-profile">
                    <b-navbar-brand href="#">
                      <b-img-lazy class="link-img" :src="require('@/assets/nav-tool-2.png')" alt="nav-tool-2.png" />
                    </b-navbar-brand>
                  </b-col>
                  <b-col cols="auto" id="profile-info">
                    <b-row>
                      <b-col>
                        <b-card-text id="name">Jason Carlos</b-card-text>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" no-gutters class="mt-1">
                      <b-col cols="auto">
                        <b-img-lazy class="link-img" :src="require('@/assets/silver.png')" alt="badge" id="badge" />
                      </b-col>
                      <b-col class="ml-1" cols="auto">
                        <b-card-text id="badge-status">Silver</b-card-text>
                      </b-col>
                      <b-col align-self="center" class="text-right">
                        <b-icon id="chevron" icon="chevron-right"></b-icon>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </template>
              <b-row class="mx-2 my-2">
                <b-col>
                  <b-card id="card-profile">
                    <b-row align-v="center">
                      <b-col>
                        <b-card-text id="total-laundry">Total Laundry Bag</b-card-text>
                      </b-col>
                      <b-col cols="auto" class="col-qty">
                        <b-card-text id="qty-laundry">0</b-card-text>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
                <b-col cols="auto" align-self="center">
                  <b-img-lazy id="btn-add" :src="require('@/assets/plus-circle-1.png')" alt="plus-circle-1.png" />
                </b-col>
              </b-row>
              <b-dropdown-item href="#" class="list-menu" v-for="(data, index) in menu" :key="index">
                <b-row>
                  <b-col cols="auto">
                    <b-img-lazy class="profile-img" :src="data.img" :alt="data.img" />
                  </b-col>
                  <b-col cols="auto">
                    <b-card-text>{{data.text}}</b-card-text>
                  </b-col>
                </b-row>
              </b-dropdown-item>
              <b-dropdown-item href="#" class="mt-5 mb-3" id="logout">
                <b-row align-v="center" align-h="center">
                  <b-col cols="auto">
                    <b-card-text>LOG OUT</b-card-text>
                  </b-col>
                  <b-col cols="auto">
                    <b-img-lazy class="profile-img" :src="require('@/assets/logout.png')" alt="logout.png" />
                  </b-col>
                </b-row>
              </b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
      </b-collapse>
    </b-navbar>
    <hr v-if="isHasHr" />
  </div>
</template>
<script>
export default {
  name: "Nav2",
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
      menu:[
        {
          text: "Daftar Alamat",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
        {
          text: "Voucher Ku!",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
        {
          text: "Referral",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
        {
          text: "Bantuan",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
        {
          text: "Syarat & Ketentuan",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
        {
          text: "Kebijakan Privasi",
          img: require('@/assets/profile-icon-1.svg'),
          activeImg: require('@/assets/profile-icon-1.svg'),
        },
      ],
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
<style lang="scss">
#nav-2{
  #profil-dropdown{
    .dropdown-menu.show{
      width: 360px;
    }
    #profil-dropdown__BV_toggle_{
      padding: unset !important;
    }
    #card-profile{
      background: #3B97D3;
      box-shadow: 0px 5.50923px 17.905px 1.37731px rgba(185, 185, 185, 0.3);
      border-radius: 8.26385px;
      #total-laundry{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.172164px;
        color: #FFFFFF;
      }
      .col-qty{
        background: #FFFFFF;
        border-radius: 8.26385px;
        padding-block: 15px;
        margin-right: 15px;
        #qty-laundry{
          font-style: normal;
          font-weight: 500;
          font-size: 33.3333px;
          line-height: 21px;
          letter-spacing: 0.333333px;
          color: #8692A6;
        }
      }
    }
    .list-menu{
      margin-block: 20px;
      margin-inline: 10px;
      a{
        border: 0.912929px solid #F1F1F1;
        box-sizing: border-box;
        border-radius: 8px;
        padding-block: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.136939px;
        color: #6C737F;
      }
    }
    #logout{
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.146133px;
      color: #696F79;
      cursor: pointer;
      img{
        max-height: 14px;
      }
    }
  }
}
</style>
