<template>
  <div id="rincian-harga-page">
    <b-row>
      <b-col>
        <b-card>
          <b-card-title class="title-3 mb-5">Rincian Harga</b-card-title>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="subtitle-4">
                Service
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title class="subtitle-4">
                Rp. 50.000
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="subtitle-4">
                Delivery
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title class="subtitle-4">
                Rp. 10.000
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="subtitle-4">
                Lain-lain [Laundry Bag]
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title id="lain-fee">
                Free
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="diskon">
                Diskon Voucher
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title class="diskon">
                Rp. 0
              </b-card-sub-title>
            </b-col>
          </b-row>
          <hr />
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="total text-bold">
                TOTAL
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title class="total text-bold">
                Rp. 60.000
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4" v-if="poin">
            <b-col cols="auto">
              <b-card-sub-title class="get-point">
                GET POINT
              </b-card-sub-title>
            </b-col>
            <b-col cols="auto">
              <b-card-sub-title class="get-point">
                <b-icon variant="warning" icon="star-fill"></b-icon> {{poin}}
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title class="total">
                Estimated Delivery by <span class="text-bold">01 Feb 2021</span>
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="between" class="my-4">
            <b-col cols="auto">
              <b-card-sub-title id="estimasi-desc">
                Harga hanya estimasi, Berat di tentukan pada saat pengambilan
                barang oleh Laundryman
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mt-4 mb-2">
            <b-col>
              <b-row class="my-4">
                <b-col cols="10">
                  <b-button variant="primary" class="w-100" id="btn-bag"
                    >LAUNDRY BAG TOTAL</b-button
                  >
                </b-col>
                <b-col align-self="center" class="text-center">
                  <span id="bag-total">1</span>
                </b-col>
              </b-row>
              <b-row class="my-4">
                <b-col>
                  <b-button variant="primary" class="w-100" id="btn-book"
                    >{{btnBookLabel}}</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "RincianHarga",
  data: () => {
    return {
    };
  },
  props:{
    btnBookLabel:{
      type: String,
      default: 'PESAN SEKARANG'
    },
    bookAction:{
      type: Function,
    },
    poin:{
      type: String
    }
  },
  components: {},
  mounted() {},
  methods: {
  },
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
#rincian-harga-page {
  #btn-bag {
    background: #4da495;
    border-radius: 2px 0px 0px 2px;
    padding-block: 15px;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #ffffff;
  }
  #bag-total {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #354ea8;
  }
  #btn-book {
    background: #3b97d3;
    box-shadow: 0px 8px 20px 2px rgba(185, 185, 185, 0.49);
    border-radius: 2px;
    padding-block: 15px;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .card {
    box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
    border-radius: 12px;
    .title-3 {
      font-family: Metropolis;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #17183b;
    }
    .subtitle-4 {
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #17183b !important;
    }
    #lain-fee {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      letter-spacing: 0.02em;
      color: #3aa39f !important;
    }
    .diskon {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #3b97d3 !important;
    }
    .total {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: #17183b !important;
    }
    #estimasi-desc {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #8692a6 !important;
    }
    .text-bold {
      font-weight: bold;
    }
    .get-point{
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: #E759AA !important;
    }
  }
}
</style>
