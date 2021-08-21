<style lang="scss">

</style> <style lang="scss" scoped> #informasi-order-page {
    min-height: 450px;
    #row-1 {
        min-height: 450px;
        #col-1 {
            min-height: 450px;
        }
    }
    .text-bold {
        font-weight: bold;
    }
    .text-normal {
        font-weight: normal !important;
    }
    .card {
        height: 100%;
        box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
        border-radius: 12px;
        .card{
          box-shadow: unset;
        }
        .img-track {
            // max-height: 56px;
            max-width: 100%;
        }
        .text-1 {
            font-family: Metropolis;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #17183b;
        }
        #belum-pilih-order {
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.275165px;
            color: #8692A6;
        }
        .text-2 {
            font-style: normal;
            font-weight: normal;
            font-size: 19.6364px;
            line-height: 25px;
            letter-spacing: 0.306818px;
            color: #2D3748;
        }
        .text-3 {
            font-style: normal;
            font-weight: bold;
            font-size: 19.6364px;
            line-height: 29px;
            letter-spacing: 0.184091px;
            color: #2D3748;
        }
        .text-4 {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #696F79
        }
        .text-5 {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #E44343
        }
        .text-6 {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.28px;
            color: #2D3748;
        }
        .text-7 {
            font-style: normal;
            font-weight: 500;
            font-size: 8px;
            line-height: 10px;
            text-align: center;
            letter-spacing: 0.28px;
            color: #2D3748;
        }
        #row-track-status {
            padding-inline: 15px;
            .col-img {
                padding-inline: unset;
            }
        }
        .tag-card {
            position: absolute;
            top: 0;
            margin-top: -10px;
            margin-left: 0px;
            z-index: 1;
        }
        .col-tag {
            padding-inline: 30px;
            background: #3B97D3;
            border-radius: 6px;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.282492px;
            color: #FAFAFA;
        }
        .text-8 {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.282492px;
            color: #2177AF;
        }
        .text-9 {
            font-style: normal;
            font-weight: 600;
            font-size: 14.6254px;
            line-height: 14px;
            letter-spacing: 1.82818px;
            color: #2D3748;
        }
        .text-10 {
            font-style: normal;
            font-weight: normal;
            font-size: 12.3947px;
            line-height: 19px;
            letter-spacing: 0.258223px;
            color: #2D3748;
        }
        .blue {
            color: #3D88B9 !important;
        }
        .text-11 {
            font-style: normal;
            font-weight: bold;
            font-size: 14.4605px;
            line-height: 21px;
            letter-spacing: 0.258223px;
            color: #2D3748;
        }
        .text-12 {
            font-style: normal;
            font-weight: 600;
            font-size: 12.7973px;
            line-height: 21px;
            letter-spacing: 0.258223px;
            color: #E759AA;
        }
        .col-act{
          background: #F1F1F1;
          border-radius: 12px;
          padding-block: 15px;
        }
        .img-act{
          max-height: 52px;
        }
        #row-act{
          padding-inline: 15px;
        }
        .text-13{
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.25px;
          color: #2D3748;
        }
    }
}

</style>

<template>

<div id="informasi-order-page">
    <b-row id="row-1">
        <b-col id="col-1">
            <b-card id="card-1">
                <b-row>
                    <b-col>
                        <b-card-title class="text-1 mb-5">Informasi Order</b-card-title>
                    </b-col>
                </b-row>
                <b-row v-if="selectedCard == null" class="h-75" align-v="center" align-h="center">
                    <b-col cols="auto" class="mx-5 text-center">
                        <b-card-text id="belum-pilih-order">
                            Kamu belum memilih Detail Orderan
                        </b-card-text>
                    </b-col>
                </b-row>
                <b-row v-else>
                    <b-col>
                        <b-row align-h="between" class="my-4">
                            <b-col cols="auto">
                                <b-card-text class="text-2">
                                    ID Order:
                                </b-card-text>
                            </b-col>
                            <b-col cols="auto">
                                <b-card-text class="text-3">
                                    #2021080701AZYZ
                                </b-card-text>
                            </b-col>
                        </b-row>
                        <b-row align-h="between" class="my-4">
                            <b-col cols="auto">
                                <b-card-text class="text-4">
                                    STATUS PEMBAYARAN :
                                </b-card-text>
                            </b-col>
                            <b-col cols="auto">
                                <b-card-text class="text-5">
                                    BELUM DIBAYAR
                                </b-card-text>
                            </b-col>
                        </b-row>
                        <b-row align-h="center" class="my-4">
                            <b-col cols="auto">
                                <b-card-text class="text-6">
                                    Tracking
                                </b-card-text>
                            </b-col>
                        </b-row>
                        <b-row align-h="between" id="row-track-status">
                            <b-col class="col-img" cols="2" v-for="(data) in 5" :key="data">
                                <b-row>
                                    <b-col cols="auto">
                                        <b-img-lazy class="img-track" :src="require(`@/assets/tracking-${data < 2 ? 0 : 1 }.png`)" :alt="`img-track${data}`" />
                                    </b-col>
                                </b-row>
                                <b-row class="my-2">
                                    <b-col>
                                        <b-card-text class="text-7">
                                            {{trackingStatus[data-1]}}
                                        </b-card-text>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="mt-5">
                            <b-col>
                                <b-card>
                                    <b-row class="tag-card">
                                        <b-col cols="auto col-tag">
                                            <span>Kiloan</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3" align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-8">Setrika Kiloan</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-8 text-bold">24 JAM</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3" align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-8">Jumlah Kilogram</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-8 text-bold">3 Kg</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3" align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-8">Jumlah Pakaian</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-8 text-bold">15 pcs</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-3" align-h="between">
                                        <b-col cols="12">
                                            <span class="text-8">Notes:</span>
                                        </b-col>
                                        <b-col cols="12">
                                            <span class="text-8 text-normal">Kaos Sablon tolong dibalik saat disetrika</span>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row class="mt-4">
                            <b-col>
                                <b-card>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <b-card-text class="text-9">TOTAL PEMBAYARAN</b-card-text>
                                        </b-col>
                                    </b-row>
                                    <b-row class="my-2">
                                        <b-col>
                                            <b-card-text class="text-10">Rincian Harga</b-card-text>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-10">Service</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 text-bold">Rp. 25.000</span>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-10">Delivery</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 text-bold">Rp. 10.000</span>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-10">Lain-lain [Laundry Bag]</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 text-bold">Rp. 15.000</span>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-10 blue">Diskon Voucher</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 blue text-bold">Rp. 0</span>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-11 text-bold">Total</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-11 text-bold">Rp. 50.000</span>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-12 blue">Get Point:</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="rating">
                                                <b-icon variant="warning" icon="star-fill" class="mr-2"></b-icon>
                                            </span>
                                            <span class="text-12 text-bold blue">50 Point</span>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row class="mt-4">
                            <b-col>
                                <b-card>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-11">Estimasi:</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 text-bold">None</span>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row class="mt-4">
                            <b-col>
                                <b-card>
                                    <b-row align-h="between">
                                        <b-col cols="auto">
                                            <span class="text-11">Pembayaran:</span>
                                        </b-col>
                                        <b-col cols="auto">
                                            <span class="text-10 text-bold">Cash On Delivery</span>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row class="mt-4" align-h="between" id="row-act">
                            <b-col v-for="(data, index) in action" :key="index" cols="auto">
                                <b-row @click="toggleModal(index)">
                                  <b-col>
                                    <b-row>
                                      <b-col cols="auto" class="col-act">
                                        <b-img-lazy class="img-act" :src="data.img" :alt="data.img" />
                                      </b-col>
                                    </b-row>
                                    <b-row class="mt-2">
                                      <b-col cols="auto">
                                        <b-card-text class="text-13">{{data.text}}</b-card-text>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
    <ModalFeedback />
</div>

</template>

<script>

import ModalFeedback from '@/components/ModalFeedback.vue';
export default {
    name: "InformasiOrder",
    data: () => {
        return {
            trackingStatus: [
                'Pesanan Dikonfirmasi',
                'Pengambilan',
                'Dalam Proses',
                'Pesanan Diantar',
                'Selesai',
            ],
            action: [
              {
                text: "Telepon",
                img: require(`@/assets/act-0.png`),
              },
              {
                text: "Whatsapp",
                img: require(`@/assets/act-1.png`),
              },
              // {
              //   text: "Show QR",
              //   img: require(`@/assets/act-2.png`),
              // },
              {
                text: "Feedback",
                img: require(`@/assets/act-3.png`),
              },
            ],
        };
    },
    props: {
        selectedCard: {
            type: Number,
        },
    },
    components: {
      ModalFeedback,
    },
    mounted() {},
    methods: {
      toggleModal(index) {
        console.log(index);
        console.log(this.$bvMmodal)
          if(index == 2) this.$bvModal.show('modal-feedback');
      },
    },
};

</script>
