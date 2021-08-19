<template>
    <div id="detail-order-page">
        <b-container fluid class="mb-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col md="10">
                    <b-row class="my-5 text-left">
                        <b-col xl="8">
                            <b-row id="left-row">
                                <b-col>
                                    <b-row :class="data != 1 ? 'my-3' : 'mb-3'" v-for="(data) in 3" :key="data">
                                        <b-col>
                                            <b-card :class="(selectedCard==data) ? 'activeCard ' : ''" @click="selectedCard=data">
                                                <b-row align-v="center">
                                                    <b-col cols="auto">
                                                        <div class="blur-bg left-bg"></div>
                                                    </b-col>
                                                    <b-col class="my-2">
                                                        <b-row>
                                                            <b-col>
                                                                <b-row>
                                                                    <b-col>
                                                                        <b-card-text class="title-1">
                                                                            ID Order:
                                                                        </b-card-text>
                                                                    </b-col>
                                                                </b-row>
                                                                <b-row align-v="center">
                                                                    <b-col>
                                                                        <b-card-text class="title-2">
                                                                            <span class="text-bold">#2021080701AZYZ</span>
                                                                        </b-card-text>
                                                                    </b-col>
                                                                    <b-col cols="auto" class="text-center icon">
                                                                        <b-icon icon="clock"></b-icon>
                                                                    </b-col>
                                                                </b-row>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row class="mt-2">
                                                            <b-col>
                                                                <b-card-text class="title-3">
                                                                    Date: 8 July 2021
                                                                </b-card-text>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                </b-row>
                                            </b-card>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3">
                                        <b-col class="col-sk">
                                            by ordering this service, I have agree with Cucianku.com <span class="sk-1">Term and Conditions</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col xl="4">
                            <RincianHarga />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import RincianHarga from '@/components/RincianHarga.vue';
export default {
name: "DetailOrder",
  data: () => {
    return {
        kilo:0,
        qty:0,
        catatan:"",
        selectedCard: 1,
    };
  },
  components:{
      RincianHarga,
  },
  mounted(){
  },
  methods: {
      changeKilo(status){
          if(status == 0){
              if(this.kilo == 0) return false;
              return this.kilo = this.kilo -= 1
          } 
          return this.kilo+=1;
      },
      changeQty(status){
          if(status == 0){
              if(this.qty == 0) return false;
              return this.qty = this.qty -= 1
          } 
          return this.qty+=1;
      }
  },
};
</script>
<style lang="scss">
#success-regis{
    // background-image: unset !important;
}
</style>
<style lang="scss" scoped>
#detail-order-page{
    .activeCard{
        background: #354EA8;
        color: #FFFFFF !important;
        :not(.stepper-ctm){
            color: white !important;
        }
    }
    .card{
        box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
        border-radius: 12px;
        color: #2D3748;
        .title-1{
            font-style: normal;
            font-weight: normal;
            font-size: 26.5578px;
            line-height: 33px;
            letter-spacing: 0.414966px;
            margin-bottom : unset;
        }
        .title-2{
            font-style: normal;
            font-weight: bold;
            font-size: 26.5578px;
            line-height: 40px;
            letter-spacing: 0.24898px;
        }
        .title-3{
            font-style: normal;
            font-weight: 500;
            font-size: 16.5986px;
            line-height: 33px;
            letter-spacing: 0.414966px;
        }
        .icon{
            font-size: 38px;
        }
        .text-bold{
            font-weight: bold;
        }
        #left-row{
            max-height: 600px;
            overflow: auto;
        }
        .blur-bg{
            background: #C9D9E8;
            border-radius: 13.5484px;
            padding-block: 10px;
            padding-inline: 15px;
            margin-right:10px;
            color: #2D3748;
        }
        .left-bg{
            border-radius: 15.9259px;
            height:129px;
            width:129px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    }
    .col-sk{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #8692A6;
    }
    .sk-1{
        font-weight: 600;
        cursor: pointer;
        color: #354EA8;
        text-decoration: underline;
    }
    @media (max-width: 1199px) {
        .left-bg{
            height:100% !important;
            width:100% !important;
        }
    }
}
</style>