<template>
    <div id="modal-laundry" class="modalLaundry" v-if="modalId">
        <b-modal class="modal-laundry" :id="`modal-laundry-${modalId}`" :ref="`modal-laundry-${modalId}`"  hide-footer hide-header>
            <b-row @click="toggleModal(modalId, 0)" class="close-btn" align-h="end">
                <b-col cols="auto">
                    <b-img-lazy class="laundry-close-btn-modal" :src="require('@/assets/close-btn.png')" alt="laundry-close-btn-modal"></b-img-lazy>
                </b-col>
            </b-row>
            <b-img-lazy class="laundry-img-modal" :src="require('@/assets/laundry-man-0.png')" alt="laundry-man-modal"></b-img-lazy>
            <b-row class="my-2">
                <b-col cols="auto">
                    <span class="laundry-rating-modal"><span class="mr-2">4.2</span>
                        <b-icon variant="warning" :icon="(data < 4) ? 'star-fill' : 'star'" class="mx-1" v-for="(data) in 5" :key="data"></b-icon>
                    </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="auto">
                    <span class="laundry-name-modal">Nama Laundry Man</span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="auto">
                    <span class="laundry-alamat-modal">
                        Jl. Pakubowono 19 Jakarta Selatan
                    </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="auto">
                    <span class="laundry-information-modal">
                        Information
                    </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="auto">
                    <span class="laundry-information-content-modal">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. In morbi amet ac volutpat sit at.
                        Aliquam fermentum tellus aliquet pharetra ut est semper. Nibh in aenean nam tristique sed
                    </span>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <b-button variant="primary" class="w-100 btn-choose">PILIH</b-button>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>
<script>
export default {
name: "ModalLaundry",

props:{
    modalId: String,
},
  data: () => {
    return {
    };
  },
  components:{
  },
  mounted(){
  },
  methods: {
      toggleModal(data, action) {
        console.log(data);
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        (action == 1) ? this.$bvModal.show(`modal-laundry-${data}`) : this.$bvModal.hide(`modal-laundry-${data}`);
    }
  },
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.laundry-img-modal{
    max-width: 100%;
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
.laundry-rating-modal{
    font-style: normal;
    font-weight: 500;
    font-size: 32.5182px;
    line-height: 54px;
    letter-spacing: 0.677463px;
    color: #2D3748;
}
.laundry-name-modal{
    font-style: normal;
    font-weight: 600;
    font-size: 32.5182px;
    line-height: 54px;
    letter-spacing: 0.677463px;
    color: #2D3748;
}
.laundry-alamat-modal{
    font-style: normal;
    font-weight: normal;
    font-size: 21.6788px;
    line-height: 54px;
    letter-spacing: 0.677463px;
    color: #2D3748;
}
.laundry-information-modal{
    font-style: normal;
    font-weight: 600;
    font-size: 18.6854px;
    line-height: 47px;
    letter-spacing: 0.583919px;
    color: #2D3748;
}
.laundry-information-content-modal{
    font-style: normal;
    font-weight: normal;
    font-size: 16.3021px;
    line-height: 27px;
    letter-spacing: 0.339626px;
    color: #2D3748;
}
.btn-choose{
    background: #3B97D3;
    box-shadow: 0px 8px 20px 2px rgba(185, 185, 185, 0.49);
    border-radius: 2px;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-block: 10px;
}
</style>
