<template>
    <div id="voucher-page">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        Pilih Voucher Anda
                    </b-card-title>
                    <b-row align-h="center" class="mt-3">
                        <b-col cols="auto">
                            <span>Masukkan <span class="text-bold">Kode Voucher / Referral</span> Code disini: </span>
                        </b-col>
                    </b-row>
                    <b-row align-h="center" class="my-3">
                        <b-col>
                            <b-form-input
                            id="voucher-input"
                            v-model="form.voucher"
                            type="text"
                            class="w-100"
                            ></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row id="row-list-alamat" class="mt-5 pt-3">
                        <b-col>
                            <b-card v-for="(data) in 6" :key="data" class="mb-4">
                                <b-row align-v="stretch" align-h="between">
                                    <b-col cols="auto">
                                        <b-row align-h="between">
                                            <b-col cols="auto">
                                                <span class="title-2">Lorem ipsum dolor sit amet</span>
                                            </b-col>
                                        </b-row>
                                        <b-row align-h="between">
                                            <b-col cols="auto">
                                                <span class="title-3">Lorem ipsum dolor sit amet</span>
                                            </b-col>
                                        </b-row>
                                        <b-row align-h="between">
                                            <b-col cols="auto">
                                                <span class="see-detail">See Detail</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                    <b-col cols="auto" class="text-center">
                                        <b-row>
                                            <b-col>
                                                <span class="voucher-value">10%</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="voucher-detail">UNTUK SEMUA LAYANAN</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" class="w-100" id="btn-use">GUNAKAN</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: "Voucher",

        props: {},
        data: () => {
            return {
                selectedCard: 0,
                form:{
                    voucher: "",
                },
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
</style>
<style lang="scss" scoped>
    #voucher-page {
        #voucher-input{
            border: 1px solid #C9D9E8;
            box-sizing: border-box;
            border-radius: 5px;
        }
        .text-bold{
            font-weight: bold !important;
        }
        #card-1 {
            background: #FFFFFF;
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
                box-shadow: 0px 7.34565px 23.8734px 1.83641px rgba(185, 185, 185, 0.3);
                border-radius: 11.0185px;
                .title-2{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 11.0185px;
                    line-height: 18px;
                    letter-spacing: 0.229551px;
                    color: #2D3748;
                }
                .title-3{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 7.34565px;
                    line-height: 18px;
                    letter-spacing: 0.229551px;
                    color: #2D3748;
                }
                .see-detail{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 9.18206px;
                    line-height: 15px;
                    letter-spacing: 0.459103px;
                    color: #2D3748;
                    cursor: pointer;
                }
                .voucher-value{
                    color: rgba(255, 180, 180, 1);
                    font-style: normal;
                    font-weight: 500;
                    font-size: 30px;
                    // line-height: 15px;
                    letter-spacing: 0.229551px;
                }
                .voucher-detail{
                    font-size: 7.35px;
                    color: rgba(150, 90, 226, 1);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 15px;
                    letter-spacing: 0.229551px;
                }
            }
            .activeCard{
                background: #3B97D3;
                box-shadow: 0px 16.1384px 20.173px -2.0173px rgba(138, 138, 138, 0.2);
            }
            #btn-use{
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