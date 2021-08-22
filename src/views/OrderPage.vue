<template>
    <div id="order-page">
        <b-container fluid class="pb-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col md="10">
                    <b-row class="my-5">
                        <b-col>
                            <span id="title">Layanan Kiloan</span>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5 text-left">
                        <b-col xl="8">
                            <b-row id="left-row">
                                <b-col>
                                    <b-row :class="data != 1 ? 'my-3' : 'mb-3'" v-for="(data) in 6" :key="data">
                                        <b-col>
                                            <b-card :class="(selectedCard==data) ? 'activeCard py-3' : 'py-3'" @click="selectedCard=data">
                                                <b-row align-v="center" v-b-toggle="`collapse-${data}`">
                                                    <b-col>
                                                        <b-card-title class="title-1">
                                                            Setrika Kiloan
                                                        </b-card-title>
                                                        <b-card-sub-title class="subtitle-1">
                                                            <span class="text-bold">Rp 25.000/Kg </span> (min 2Kg)
                                                        </b-card-sub-title>
                                                    </b-col>
                                                    <b-col cols="auto" class="text-center blur-bg">
                                                        <b-card-title class="title-1">
                                                            24
                                                        </b-card-title>
                                                        <b-card-sub-title class="subtitle-1">
                                                            JAM
                                                        </b-card-sub-title>

                                                    </b-col>
                                                </b-row>
                                                <b-collapse :id="`collapse-${data}`" class="collapse-card">
                                                    <hr id="hr-1" />
                                                    <b-row align-v="center" align-h="between">
                                                        <b-col md="6" class="my-2">
                                                            <b-row align-v="center">
                                                                <b-col cols="5">
                                                                    <b-card-title class="title-2">
                                                                        Kilogram
                                                                    </b-card-title>
                                                                    <b-card-sub-title class="subtitle-2">
                                                                        Tentukan Banyaknya per Kilo <br />
                                                                        (est. 6 pcs setara 1 Kg)
                                                                    </b-card-sub-title>
                                                                </b-col>
                                                                <b-col cols="7" class="text-right">
                                                                    <span class="mx-2" @click="changeKilo(0)">
                                                                        <b-img-lazy class="btn-min-plus" :src="require('@/assets/minus-circle.png')" alt="minus-circle" />
                                                                    </span>
                                                                    <b-form-input min="0" class="stepper-ctm" v-model="kilo" type="number"></b-form-input>
                                                                    <span class="mx-2" @click="changeKilo(1)">
                                                                        <b-img-lazy class="btn-min-plus" :src="require('@/assets/plus-circle.png')" alt="plus-circle" />
                                                                    </span>
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                        <b-col md="6" class="my-2">
                                                            <b-row align-v="center">
                                                                <b-col cols="5">
                                                                    <b-card-title class="title-2">
                                                                        Quantity
                                                                    </b-card-title>
                                                                    <b-card-sub-title class="subtitle-2">
                                                                        Tentukan Banyaknya per barang
                                                                    </b-card-sub-title>
                                                                </b-col>
                                                                <b-col cols="7" class="text-right">
                                                                    <span class="mx-2" @click="changeQty(0)">
                                                                        <b-img-lazy class="btn-min-plus" :src="require('@/assets/minus-circle.png')" alt="minus-circle" />
                                                                    </span>
                                                                    <b-form-input min="0" class="stepper-ctm" v-model="qty" type="number"></b-form-input>
                                                                    <span class="mx-2" @click="changeQty(1)">
                                                                        <b-img-lazy class="btn-min-plus" :src="require('@/assets/plus-circle.png')" alt="plus-circle" />
                                                                    </span>
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row align-v="center" align-h="between" class="mt-3">
                                                        <b-col md="6" class="my-2">
                                                            <b-form-textarea
                                                                id="catatan-textarea"
                                                                v-model="catatan"
                                                                placeholder="Tulis Catatan Disini (Optional)"
                                                                rows="3"
                                                                max-rows="6"
                                                            ></b-form-textarea>
                                                        </b-col>
                                                        <b-col md="6" class="mt-3">
                                                            <b-row align-h="between">
                                                                <b-col cols="auto">
                                                                    <b-button v-b-toggle="`collapse-${data}`" id="btn-cancel" class="btn-1" variant="outline-dark">Cancel</b-button>
                                                                </b-col>
                                                                <b-col cols="auto">
                                                                    <b-button id="btn-save" class="btn-1" variant="primary">Simpan</b-button>
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>
                                                </b-collapse>
                                            </b-card>
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
name: "OrderPage",
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
#order-page{
    .activeCard{
        background: #354EA8;
        color: #FFFFFF !important;
        :not(.stepper-ctm){
            color: white !important;
        }
    }
    .btn-1{
        border: 2px solid #8692A6;
        box-sizing: border-box;
        border-radius: 15.36px;
        font-style: normal;
        font-weight: 500;
        font-size: 20.48px;
        line-height: 26px;
        align-items: center;
        letter-spacing: 0.32px;
        padding-block: 10px;
        padding-inline: 20px;
    }
    #btn-cancel{
        color: #2D3748;
    }
    #btn-cancel:hover{
        background-color: white;
    }
    #btn-save{
        background: #354EA8;
        color: white;
    }
    .stepper-ctm{
        max-width: 25%;
        display: inline;
        background: #F1F1F1 !important;
        color:black !important;
        padding-top:25px;
        padding-bottom:25px;
        border-radius: 13.5484px;
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    #catatan-textarea{
        background: #FFFFFF;
        border: 1px solid #C9D9E8;
        box-sizing: border-box;
        border-radius: 11.6073px;
    }
    #title{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    .card{
        box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
        border-radius: 12px;
        #hr-1{
            border: 1px solid #8692A6;
            box-sizing: border-box;
        }
        .title-1{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #354EA8;
        }
        .title-2{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.251211px;
            color: #2177AF;
        }
        .subtitle-1{
            font-family: Poppins;
            font-style: normal;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #354EA8 !important;
        }
        .subtitle-2{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 8px;
            line-height: 13px;
            color: #8692A6;
        }
        .btn-min-plus{
            max-height: 38px;
            cursor: pointer;
        }
        .text-bold{
            font-weight: bold;
        }
        .blur-bg{
            background: #F1F1F1;
            border-radius: 13.5484px;
            padding-block: 10px;
            padding-inline: 15px;
            .title-1{
                margin-bottom: 5px;
                color: #354EA8 !important;
                text-align:center;
            }
            .subtitle-1{
                color: #354EA8 !important;
                line-height: unset;
            }
            margin-right:10px;
        }
    }
    #left-row{
        // max-height: 600px;
        max-height: 720px;
        overflow: auto;
    }
}
</style>
