<template>
    <div id="checkout-page">
        <b-container fluid class="mb-5">
            <b-row align-v="center" align-h="center" class="text-center">
                <b-col md="10">
                    <b-row class="my-5">
                        <b-col>
                            <span id="title">Konfirmasi Order</span>
                        </b-col>
                    </b-row>
                    <b-row class="my-5 text-left" id="content">
                        <b-col xl="8">
                            <b-row id="left-row">
                                <b-col>
                                    <b-row :class="index != 0 ? 'my-3' : 'mb-3'" v-for="(data, index) in menu" :key="index">
                                        <b-col>
                                            <b-card :class="(selectedCard==index) ? 'activeCard py-4' : 'py-4'" @click="changeSelectedCard(index)">
                                                <b-row align-v="center">
                                                    <b-col>
                                                        <b-card-title class="title-1">
                                                            {{data}}
                                                        </b-card-title>
                                                    </b-col>
                                                </b-row>
                                            </b-card>
                                        </b-col>
                                    </b-row>

                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col xl="4">
                            <ModalDataDiri refName="modal-data-diri" />
                            <transition name="list" mode="out-in">
                                <RincianHarga btnBookLabel="CHECK OUT" v-if="selectedCard == null || selectedCard == 0" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <DaftarAlamat v-if="selectedCard == 1" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <DetailOrder v-if="selectedCard == 2" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <HariPengambilan v-if="selectedCard == 3" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <WaktuPengambilan v-if="selectedCard == 4" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <LaundryMan v-if="selectedCard == 5" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <MetodePembayaran v-if="selectedCard == 6" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <Voucher v-if="selectedCard == 7" />
                            </transition>
                            <transition name="list" mode="out-in">
                                <CSR v-if="selectedCard == 8" />
                            </transition>
                            
                            <b-row align-h="center" class="text-center pt-4">
                                <b-col cols="auto">
                                    <span class="sk-1">by ordering this service,</span><br> 
                                    <span class="sk-1">I have agree with Cucianku.com</span><br>
                                    <span class="sk-2">Term and Conditions</span>
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
import RincianHarga from '@/components/RincianHarga.vue';
import ModalDataDiri from '@/components/ModalDataDiri.vue';
import DaftarAlamat from '@/components/DaftarAlamat.vue';
import DetailOrder from '@/components/DetailOrder.vue';
import HariPengambilan from '@/components/HariPengambilan.vue';
import WaktuPengambilan from '@/components/WaktuPengambilan.vue';
import LaundryMan from '@/components/LaundryMan.vue';
import MetodePembayaran from '@/components/MetodePembayaran.vue';
import Voucher from '@/components/Voucher.vue';
import CSR from '@/components/CSR.vue';
export default {
name: "CheckoutPage",
  data: () => {
    return {
        qty:0,
        catatan:"",
        selectedCard: null,
        menu: [
            "Lengkapi Data Diri",
            "Alamat Pick up",
            "Detail Order",
            "Pilih Hari Pengambilan",
            "Pilih Waktu Pengambilan",
            "Pilih Laundry Man",
            "Pilih Metode Pembayaran",
            "Voucher Code",
            "CSR"
        ],
    };
  },
  components:{
      RincianHarga,
      ModalDataDiri,
      DaftarAlamat,
      DetailOrder,
      HariPengambilan,
      WaktuPengambilan,
      LaundryMan,
      MetodePembayaran,
      Voucher,
      CSR,
  },
  async mounted(){
    await this.getLocation();
  },
  methods: {
      changeSelectedCard(index){
          this.selectedCard=index;
          if(index == 0){
              return this.toggleModal();
          }
      },
      toggleModal() {
          this.$bvModal.show('modal-data-diri');
      },
  },
};
</script>
<style lang="scss">

#success-regis{
    // background-image: unset !important;
}
</style>
<style lang="scss" scoped>
#checkout-page{
    .activeCard{
        background: #354EA8;
        color: #FFFFFF !important;
        :not(.stepper-ctm){
            color: white !important;
        }
    }
    #title{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    .card-title{
        margin-bottom: unset;
    }
    .card{
        box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
        border-radius: 12px;
        cursor: pointer;
        .title-1{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #354EA8;
        }
    }
    .text-bold{
        font-weight: bold;
    }
    #left-row{
        max-height: 590px;
        overflow: auto;
    }
    .sk-1{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #8692A6;
    }
    .sk-2{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #8692A6;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>