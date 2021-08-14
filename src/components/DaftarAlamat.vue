<template>
    <div id="daftar-alamat">
        <b-row>
            <b-col>
                <b-card id="card-1">
                    <b-card-title id="title-1">
                        Daftar Alamat
                    </b-card-title>
                    <b-row id="row-list-alamat">
                        <b-col>
                            <b-card :class="selectedCard == data ? 'py-2 my-3 activeCard' : 'py-2 my-3'"
                                v-for="(data) in 4" :key="data" @click="changeSelectedCard(data)">
                                <b-row align-h="between">
                                    <b-col cols="auto">
                                        <span class="title-2">Rumah</span>
                                    </b-col>
                                    <b-col cols="auto">
                                        <span class="title-2 edit">Edit</span>
                                    </b-col>
                                </b-row>
                                <b-row class="my-4">
                                    <b-col>
                                        <b-row>
                                            <b-col cols="auto">
                                                <span class="title-3">Detail Alamat</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col cols="auto">
                                                <span class="content-detail">
                                                    Komp. Puri Kembangan, Cluster 20, Kec. Puri, Kel.Kembangan, Jakarta
                                                    Barat, Jakarta, 15684
                                                </span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="auto" class="pin">
                                        <b-icon icon="geo-alt-fill"></b-icon>
                                        <span class="content-detail ml-1">Sesuaikan titik pin point</span>
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
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="success" class="w-100" id="btn-add">TAMBAH ALAMAT</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: "DaftarAlamat",

        props: {},
        data: () => {
            return {
                selectedCard: 0,
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
    #daftar-alamat {
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

            .card {
                background: #FAFAFA;
                box-shadow: 0px 6.88975px 22.3917px 1.72244px rgba(185, 185, 185, 0.3);
                border-radius: 10.3346px;
                color: #2D3748;
            }

            .title-2 {
                font-style: normal;
                font-weight: bold;
                font-size: 12.0571px;
                line-height: 14px;
                letter-spacing: 0.215305px;
            }

            .title-3 {
                font-style: normal;
                font-weight: 600;
                font-size: 10.3346px;
                line-height: 21px;
                letter-spacing: 0.215305px;
            }

            .edit {
                text-decoration: underline;
                cursor: pointer;
            }

            .content-detail {
                font-style: normal;
                font-weight: normal;
                font-size: 10.3346px;
                line-height: 21px;
                letter-spacing: 0.215305px;
            }

            .pin {
                font-style: normal;
                font-weight: 500;
                font-size: 10.3346px;
                line-height: 14px;
                letter-spacing: 0.215305px;
                text-decoration-line: underline;
                color: #166355;
                cursor: pointer;
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
            .activeCard {
                background: #D05099 !important;
                color: #FFFFFF !important;

                .pin {
                    color: #8ADBFE !important;
                }
            }
        }
    }
</style>