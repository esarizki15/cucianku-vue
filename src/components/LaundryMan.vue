<template>
    <div id="laundry-man">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        Pilih Laundry Man
                    </b-card-title>
                    <b-row id="row-list-alamat" class="mt-5 pt-3">
                        <b-col sm="6" v-for="(data) in 6" :key="data" class="mb-4">
                            <b-card :class="(selectedCard==data) ? 'activeCard no-padding' :'no-padding'" @click="changeSelectedCard(data)">
                                <b-row class="my-2" align-h="between" align-v="center">
                                    <b-col cols="auto">
                                        <b-img-lazy class="img-laundry" :src="require('@/assets/laundry-man-0.png')" alt="laundry-man"></b-img-lazy>
                                        <b-row class="mt-2">
                                            <b-col cols="auto">
                                                <span class="laundry-name">Nama Laundry Man</span>
                                            </b-col>
                                        </b-row>
                                        <b-row class="">
                                            <b-col cols="auto">
                                                <span class="rating"><span class="mr-2">4.2</span>
                                                    <b-icon variant="warning" :icon="(data < 4) ? 'star-fill' : 'star'" class="mx-1" v-for="(data) in 5" :key="data"></b-icon>
                                                </span>
                                            </b-col>
                                        </b-row>
                                        <b-row class="mt-2" align-h="end">
                                            <b-col cols="auto">
                                                <span class="see-detail" @click="toggleModal(data, 1)">See Detail</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-card>
                            <ModalLaundry :modalId="data" />
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" class="w-100" id="btn-save">SIMPAN</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import ModalLaundry from '@/components/ModalLaundryMan.vue';
    export default {
        name: "LaundryMan",
        props: {},
        data: () => {
            return {
                selectedCard: 0,
            };
        },
        components: {
            ModalLaundry,
        },
        mounted() {},
        methods: {
            changeSelectedCard(index) {
                this.selectedCard = index;
            },
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
<style lang="scss" scoped>
    #laundry-man {
        .text-bold{
            font-weight: bold !important;
        }
        #card-1 {
            background: #FFFFFF;
            box-sizing: border-box;
            box-shadow: 0px 16px 20px -2px rgba(138, 138, 138, 0.3);
            border-radius: 8px;
            .no-padding{
                box-shadow: 0px 8px 26px 2px rgba(185, 185, 185, 0.3);
                border-radius: 12px;
                .card-body{
                    padding-block: 0px;
                    padding-inline: 10px;
                    .img-laundry{
                        max-width: 100%;
                        background: #FAFAFA;
                        border-radius: 10px;
                        // height:120px;
                        // max-height: 120px;
                        // transform: matrix(-1, 0, 0, 1, 0, 0);
                    }
                    .laundry-name{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 12px;
                        line-height: 18px;
                        letter-spacing: 0.25px;
                        color: #2D3748;
                    }
                    .rating{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 10px;
                        line-height: 20px;
                        letter-spacing: 0.25px;
                        color: #2D3748;
                    }
                    .see-detail{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 10px;
                        line-height: 16px;
                        letter-spacing: 0.5px;
                        color: #2D3748;
                        cursor: pointer;
                    }
                }
            }
            .activeCard{
                background: #354EA8;
                box-shadow: 0px 8px 26px 2px rgba(185, 185, 185, 0.3);
                .laundry-name, .rating, .see-detail{
                    color: #FFFFFF !important;
                }
            }

            #row-list-alamat {
                max-height: 500px;
                overflow: auto;
            }

            #title-1 {
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: #17183B !important;
            }
            #btn-save{
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
        }
    }
</style>