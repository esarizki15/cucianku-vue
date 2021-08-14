<template>
    <div id="success-regis-index">
        <b-container>
            <b-row align-v="center">
                    <b-img-lazy class="ms-3" :src="require('@/assets/maskot-1.png')" alt="maskot-1" id="maskot-1" />
                <b-col>
                    <b-row>
                        <b-col>
                            <span id="title">
                                Hore! Kamu Berhasil mendaftar
                            </span>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <span id="content">
                                Yuk! jangan lupa cucian hari ini
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
name: "SuccessRegisIndex",
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
#success-regis-index{
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
}
</style>