<template>
    <div id="modal-feedback">
        <b-modal class="modal-feedback" id="modal-feedback" ref="modal-feedback"  hide-footer hide-header>
            <b-row @click="toggleModal(0)" class="close-btn" align-h="end">
                <b-col cols="auto">
                    <b-img-lazy class="laundry-close-btn-modal" :src="require('@/assets/close-btn.png')" alt="laundry-close-btn-modal"></b-img-lazy>
                </b-col>
            </b-row>
            <b-row align-h="center" class="my-5">
              <b-col cols="auto">
                <b-card-text class="text-1">Feedback</b-card-text>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="auto">
                <b-img-lazy class="laundry-img-modal" :src="require('@/assets/laundry-man-0.png')" alt="laundry-man-modal"></b-img-lazy>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-2">
              <b-col cols="auto">
                <b-card-text class="text-2">Nama Laundry Man</b-card-text>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-4">
              <b-col cols="auto">
                <b-card-text class="text-3">Let’s rate our Laundry Man Delivery Service</b-card-text>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-3">
              <b-col cols="12">
                <b-form-rating variant="warning" size="lg" no-border v-model="rating"></b-form-rating>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="12">
                <b-form-input v-model="tellUs" placeholder="Tell us more (Optional)" size="lg" id="tellUs"></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-5">
              <b-col cols="10">
                <b-button id="btn-next" class="w-100">SELANJUTNYA</b-button>
              </b-col>
            </b-row>
        </b-modal>
    </div>
</template>
<script>
export default {
name: "ModalFeedback",

props:{
},
  data: () => {
    return {
      rating: 0,
      tellUs: '',
    };
  },
  components:{
  },
  mounted(){
  },
  methods: {
      toggleModal(action) {
        (action == 1) ? this.$bvModal.show(`modal-feedback`) : this.$bvModal.hide(`modal-feedback`);
    }
  },
};
</script>
<style lang="scss">
#modal-feedback{
  padding-left: unset;
  #tellUs{
    border: 1.62717px solid #8692A6;
    border-radius: 10.9213px;
  }
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 17.3061px;
    line-height: 28px;
    letter-spacing: 0.432653px;
    color: #8692A6;
  }
  :-ms-input-placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 17.3061px;
      line-height: 28px;
      letter-spacing: 0.432653px;
      color: #8692A6;
  }
  ::-ms-input-placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 17.3061px;
      line-height: 28px;
      letter-spacing: 0.432653px;
      color: #8692A6;
  }
  .modal-content{
    border: 1.47733px solid #F1F1F1;
    box-sizing: border-box;
    box-shadow: 0px 8px 20px 2px rgba(185, 185, 185, 0.49);
    border-radius: 11.8186px;
  }
  .laundry-img-modal{
    max-width: 177px;
  }
  .close-btn{
    position: absolute;
    right: 0;
    margin-top: -35px;
    z-index: 1;
    margin-right: -33px !important;
    .laundry-close-btn-modal{
      max-height: 37px;
    }
  }
  .text-1{
    font-style: normal;
    font-weight: 600;
    font-size: 38.4105px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1.47733px;
    color: #2D3748;
  }
  .text-2{
    font-style: normal;
    font-weight: 600;
    font-size: 20.0417px;
    line-height: 30px;
    letter-spacing: 0.417535px;
    color: #8692A6;
  }
  .text-3{
    font-style: normal;
    font-weight: bold;
    font-size: 30.0625px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.250521px;
    color: #2D3748;
  }
  #btn-next{
    background: #3B97D3;
    border-radius: 8.86396px;
    font-style: normal;
    font-weight: 600;
    font-size: 23.5449px;
    line-height: 31px;
    color: #FAFAFA;
    padding-block: 15px;
  }
}
</style>
<style lang="scss" scoped>
</style>
