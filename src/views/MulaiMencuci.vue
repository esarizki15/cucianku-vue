<template>
    <div id="mulai-mencuci">
        <b-container class="my-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col xl="auto">
                  <b-img-lazy class="ms-3" :src="require('@/assets/maskot-1.png')" alt="maskot-1" id="maskot-1" />
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <span id="title">
                                Ayo mulai mencuci
                            </span>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <span id="content">
                                Data kamu berhasil terdaftar
                            </span>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="btn-next">SELANJUTNYA</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
// import axios from 'axios';
export default {
name: "MulaiMencuci",
  data: () => {
    return {
    body:{
        email: "admin@gmail.com",
        password: "rahasia",
    },
    };
  },
  components:{
  },
  mounted(){
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
#mulai-mencuci{
    #title{
        font-style: normal;
        font-weight: 600;
        font-size: 57.0566px;
        line-height: 73px;
        letter-spacing: 0.320943px;
        color: #2F79A9;
        word-wrap: break-word;
    }
    #content{
        font-style: normal;
        font-weight: 500;
        font-size: 32.0943px;
        line-height: 43px;
        color: #2F79A9;
    }
    .btn-next{
        background: #3B97D3;
        border-radius: 6.82353px;
        padding-left:15%;
        padding-right:15%;
        font-weight: 600;
    }
    #maskot-1{
        max-height: 452px;
    }
    @media (max-width: 1191px) {
      $ratio: 0.9;
      #maskot-1{
        max-height: calc(452px * #{$ratio});
      }
      #title{
        font-size: calc(#{$ratio} * 57.0566px);
        line-height: calc(#{$ratio} * 73px);
        letter-spacing: calc(#{$ratio} * 0.320943px);
      }
      #content{
          font-size: calc(#{$ratio} * 32.0943px);
          line-height: calc(#{$ratio} * 43px);
      }
    }
    @media (max-width: 991px) {
      $ratio: 0.6;
      #maskot-1{
        max-height: calc(452px * #{$ratio});
      }
      #title{
        font-size: calc(#{$ratio} * 57.0566px);
        line-height: calc(#{$ratio} * 73px);
        letter-spacing: calc(#{$ratio} * 0.320943px);
      }
      #content{
          font-size: calc(#{$ratio} * 32.0943px);
          line-height: calc(#{$ratio} * 43px);
      }
    }
    @media (max-width: 767px) {
      $ratio: 0.4;
      #maskot-1{
        max-height: calc(452px * #{$ratio});
      }
      #title{
        font-size: calc(#{$ratio} * 57.0566px);
        line-height: calc(#{$ratio} * 73px);
        letter-spacing: calc(#{$ratio} * 0.320943px);
      }
      #content{
          font-size: calc(#{$ratio} * 32.0943px);
          line-height: calc(#{$ratio} * 43px);
      }
    }
}
</style>
