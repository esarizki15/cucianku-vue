<template>
    <div id="modal-laundry" v-if="modalId">
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
#modal-laundry{
}
</style>
<style lang="scss" scoped>
</style>