<template>
    <div id="promo-page">
        <b-container fluid class="mb-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col cols="10">
                    <b-row>
                        <b-col>
                            <span id="title">
                                Special Cucianku Hari Ini
                            </span>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="my-4 px-5" md="4" v-for="(data, index) in 12" :key="index">
                            <b-row align-v="center" no-gutters class="card-promo text-left">
                                <b-col cols="8" class="px-4">
                                    <b-card-title>Cuci Hari Ini Gratis Ongkir 5rb </b-card-title>
                                    <b-card-sub-title @click="toDetailPage(data)">See Detail ></b-card-sub-title>
                                </b-col>
                                <b-col cols="4" class="col-img">
                                    <b-img-lazy class="promo-img" :src="require('@/assets/promo-1.png')" alt="promo-1" />
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
name: "PromoPage",
  data: () => {
    return {
    };
  },
  components:{
  },
  mounted(){
  },
  methods: {
      toDetailPage(data){
        return this.$router.push({ name: 'DetailPromo', query: { id: data } });
      }
  },
};
</script>
<style lang="scss" scoped>
#promo-page{
    #title{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    .card-promo{
        background: linear-gradient(180deg, #FFB4B4 0%, #965AE2 100%);
        border-radius: 5.83812px 0px 0px 5.83812px;
        height: 180px;
        .card-title, .card-subtitle{
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 21px;
            color: #FFFFFF !important;
            line-height: 1.1;
        }
        .card-subtitle{
            font-size: 18px;
            cursor: pointer;
        }
        .col-img{
            background-color: white;
            // margin-top: -50px;
            height:100%;
            .promo-img{
                margin-top: -10px;
                margin-left: -20px;
                max-height: 190px;
                position: absolute; 
                bottom:0;
            }
        }
    }
}
</style>