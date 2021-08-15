<template>
    <div id="hari-pengembalian">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        Pilih Hari
                    </b-card-title>
                    <b-row id="row-list-alamat" class="mt-5 pt-3">
                        <b-col>
                            <b-card :class="(selectedCard == index) ? 'activeCard mb-4' : 'mb-4'" v-for="(data, index) in hari" :key="index" @click="changeSelectedCard(index)">
                                <b-row class="my-2" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">{{data}}</span>
                                    </b-col>
                                </b-row>
                                <b-row class="my-2" align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-3">Selasa, 25 Juni 2021</span>
                                    </b-col>
                                </b-row>
                            </b-card>
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
    export default {
        name: "HariPengembalian",

        props: {},
        data: () => {
            return {
                selectedCard: 0,
                catatan: "",
                hari:[
                    "Hari Ini",
                    "Besok",
                    "Lusa"
                ],
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
    #hari-pengembalian {
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
                background: #FFFFFF;
                border: 0.97564px solid #C9D9E8;
                box-sizing: border-box;
                border-radius: 11.7077px;
                cursor: pointer;
                .title-2{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16.5752px;
                    line-height: 20px;
                    letter-spacing: 0.253384px;
                    color: #2177AF;
                }
                .title-3{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14.7335px;
                    line-height: 14px;
                    color: #8692A6;
                }
            }
            .activeCard{
                background: #3B97D3;
                box-shadow: 0px 16.1384px 20.173px -2.0173px rgba(138, 138, 138, 0.2);
                .title-2{
                    color: #FFFFFF;
                }
                .title-3{
                    color: #FFFFFF;
                }
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