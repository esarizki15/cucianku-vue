<template>
    <div id="promo-page">
        <b-container fluid class="mb-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col md="10">
                    <b-row align-v="center" no-gutters class="card-promo">
                        <b-col cols="7" md="9" class="px-5 text-center">
                            <b-card-title>Cuci Hari Ini Gratis Ongkir 5rb </b-card-title>
                        </b-col>
                        <b-col cols="5" md="3" class="col-img text-left">
                            <b-img-lazy class="promo-img" :src="require('@/assets/promo-1.png')" alt="promo-1" />
                        </b-col>
                    </b-row>
                    <b-row class="my-5 text-right">
                        <b-col>
                            <b-icon icon="clock"></b-icon> <span>Periode Promo</span> <span id="date">1 - 30 Juli 2021</span>
                        </b-col>
                    </b-row>
                    <b-row class="text-left">
                        <b-col>
                            <b-row class="my-5">
                                <b-col>
                                    <span id="title">Judul Promo</span>
                                </b-col>
                            </b-row>
                            <b-row class="my-5">
                                <b-col>
                                    <b-row>
                                        <b-col>
                                            <span class="sub-title">Deskripsi</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-3">
                                        <b-col>
                                            <span class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inmorbi amet ac volutpat sit at.Aliquam fermentum tellus aliquet pharetra ut est semper. Nibh in aenean nam tristique sed integer in ut. In in phasellus neque potenti cursus praesent consectetur adipiscing elit. Inmorbi amet ac volutpat sit at.Aliquam</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="mb-5">
                                <b-col>
                                    <b-row>
                                        <b-col>
                                            <span class="sub-title">Syarat dan Ketentuan</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3">
                                        <b-col>
                                            <span class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inmorbi amet ac volutpat sit at.Aliquam fermentum tellus aliquet pharetra ut est semper. Nibh in aenean nam tristique sed integer in ut. In in phasellus neque potenti cursus praesent consectetur adipiscing elit. Inmorbi amet ac volutpat sit at.Aliquam</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row class="mb-5">
                        <b-col>
                            <b-button variant="primary" id="btn-use">GUNAKAN</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
name: "DetailPromoPage",
  data: () => {
    return {
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
<style lang="scss">
#success-regis{
    // background-image: unset !important;
}
</style>
<style lang="scss" scoped>
#promo-page{
    #title{
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #2D3748;
    }
    .sub-title{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #494949;
    }
    .content{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    #date{
        font-weight: 600;
    }
    #btn-use{
        background: #3B97D3;
        box-shadow: 0px 16px 20px -2px rgba(138, 138, 138, 0.2);
        border-radius: 6.82353px;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #FAFAFA;
        padding-inline: 40px;
        padding-block: 10px;
    }
    .card-promo{
        background: linear-gradient(180deg, #FFB4B4 0%, #965AE2 100%);
        border-radius: 5.83812px;
        height: 483px;
        .card-title{
            font-style: normal;
            font-weight: 700;
            font-size: 65px;
            line-height: 21px;
            color: #FFFFFF !important;
            line-height: 1.1;
        }
        .col-img{
            background-color: white;
            height:100%;
            border-radius: 5.83812px;
            .promo-img{
                margin-top: -10px;
                margin-left: -20px;
                max-height: 493px;
                position: absolute; 
                bottom:0;
                border-radius: 5.83812px;
            }
        }
    }
    @media (max-width: 1199px) {
        .card-title{
            font-size: 18px !important;
        }
        .card-promo{
            height: 210px;
            .promo-img{
                max-height: 220px !important;
                margin-left: -40px !important;
            }
        }
    }
}
</style>