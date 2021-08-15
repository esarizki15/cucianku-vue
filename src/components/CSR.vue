<template>
    <div id="csr-page">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        CSR
                    </b-card-title>
                    <b-row id="row-list-alamat" class="mt-5 pt-3">
                        <b-col>
                            <b-card class="mb-4">
                                <b-row class="my-3" align-v="center" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">Jumlah Item</span>
                                    </b-col>
                                    <b-col cols="auto" class="text-right">
                                        <span class="mx-2" @click="changeItem(0)">
                                            <b-img-lazy class="btn-min-plus" :src="require('@/assets/minus-circle-1.png')" alt="minus-circle-1" />
                                        </span>
                                        <b-form-input min="0" class="stepper-ctm" v-model="item" type="number"></b-form-input>
                                        <span class="ml-2" @click="changeItem(1)">
                                            <b-img-lazy class="btn-min-plus" :src="require('@/assets/plus-circle-1.png')" alt="plus-circle-1" />
                                        </span>  
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" align-h="between">
                        <b-col cols="auto">
                            <span class="title-3">Tuliskan List Barang mu </span>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" align-h="between">
                        <b-col align-self="center" class="text-right">
                            <b-form-textarea
                                id="textarea"
                                v-model="catatan"
                                placeholder="Notes:"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" align-h="center">
                        <b-col cols="auto">
                            <span class="sk-row">I agree to Cucianku <span class="sk">Terms</span> and <span class="sk">Privacy Policy</span></span>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" class="w-100" id="btn-save">SIMPAN</b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="success" class="w-100" id="btn-skip">LEWATI</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: "CSR",

        props: {},
        data: () => {
            return {
                isAddBag: false,
                selectedCard: 0,
                catatan: "",
                item: 0,
            };
        },
        components: {},
        mounted() {},
        methods: {
            changeSelectedCard(index) {
                this.selectedCard = index;
            },
            changeItem(status){
                if(status == 0){
                    if(this.item == 0) return false;
                    return this.item = this.item -= 1
                } 
                return this.item+=1;
            },
        },
    };
</script>
<style lang="scss">
.largerCheckbox{
    height:100%;
    input[type="checkbox"] {
        // transform : scale(10) !important;
        // -ms-transform: scale(10); /* IE */
        // -moz-transform: scale(10); /* FF */
        // -webkit-transform: scale(10); /* Safari and Chrome */
        // -o-transform: scale(10); 
    }

}
</style>
<style lang="scss" scoped>
    #csr-page {
        .text-bold{
            font-weight: bold !important;
        }
        #card-1 {
            background: #FFFFFF;
            // opacity: 0.2;
            box-sizing: border-box;
            box-shadow: 0px 16px 20px -2px rgba(138, 138, 138, 0.3);
            border-radius: 8px;

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
            .sk-row{
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 20px;
                letter-spacing: 0.25px;
                color: #8692A6;
            }
            .sk{
                font-weight: bold;
                text-decoration: underline;
                cursor: pointer;
            }
            .card{
                background: #FAFAFA;
                box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
                border-radius: 12px;
                .title-2{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12.7071px;
                    line-height: 18px;
                    letter-spacing: 0.226913px;
                    color: #2D3748;
                }

                .btn-min-plus{
                    max-height: 23px;
                    cursor: pointer;
                }
                .stepper-ctm{
                    max-width: 20%;
                    max-height: 31px;
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
            }
            .title-3{
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.282492px;
                color: #2D3748;
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
            #btn-skip{
                background: #32BC50;
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