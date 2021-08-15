<template>
    <div id="detail-order">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        Detail Order
                    </b-card-title>
                    <b-row id="row-list-alamat" class="mt-5 pt-3">
                        <b-col>
                            <b-card class="mb-4">
                                <b-row class="tag-card">
                                    <b-col cols="auto col-tag">
                                        <span>Kiloan</span>
                                    </b-col>
                                </b-row>
                                <b-row class="my-3" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">Setrika Kiloan</span>
                                    </b-col>
                                    <b-col cols="auto">
                                        <span class="title-2 blue">24 JAM</span>
                                    </b-col>
                                </b-row>
                                <b-row class="my-3" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">Jumlah Kilogram</span>
                                    </b-col>
                                    <b-col cols="auto">
                                        <span class="title-2 blue">3 Kg</span>
                                    </b-col>
                                </b-row>
                                <b-row class="my-3" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">Jumlah Pakaian</span>
                                    </b-col>
                                    <b-col cols="auto">
                                        <span class="title-2 blue">15 pcs</span>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" align-h="between">
                        <b-col cols="auto" id="col-add-bag">
                            <span class="title-2">Tambahan Laundry Bag </span><br><span class="text-bold">Rp 15.000</span>
                        </b-col>
                        <b-col cols="auto" align-self="center" class="text-right">
                            <b-form-checkbox
                                id="isAddBag"
                                v-model="isAddBag"
                                name="isAddBag"
                                class="largerCheckbox"
                                :value="true"
                                :unchecked-value="false"
                                >
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" align-h="between">
                        <b-col align-self="center" class="text-right">
                            <b-form-textarea
                                id="textarea"
                                v-model="catatan"
                                placeholder="Notes: (Max 160 Words)"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" class="w-100" id="btn-save">SIMPAN</b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="success" class="w-100" id="btn-add">TAMBAH ORDERAN</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: "DetailOrder",

        props: {},
        data: () => {
            return {
                isAddBag: false,
                selectedCard: 0,
                catatan: "",
            };
        },
        components: {},
        mounted() {},
        methods: {
            changeSelectedCard(index) {
                this.selectedCard = index;
            }
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
    #detail-order {
        #col-add-bag{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.282492px;
            color: #2D3748;
        }
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
            .card{
                background: #FAFAFA;
                box-shadow: 0px 1px 9px rgba(123, 123, 123, 0.25);
                border-radius: 12px;
                .title-2{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 20px;
                    letter-spacing: 0.282492px;
                    color: #2D3748;
                }
                .blue{
                    color: #354EA8;
                    font-weight: bold;
                }
            }
            .tag-card{
                position: absolute;
                top: 0;
                margin-top: -10px;
                margin-left: 0px;
                z-index: 1;
            }
            .col-tag{
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
            #btn-add{
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