<style lang="scss" scoped>

#sesuaikan-lokasi {
    #title {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    #map {
        min-height: 720px;
    }
    #select {
        background: #FBFBFB;
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 12px;
    }
    #icon {
        height: 100%;
        width: 30px;
    }
    #col-icon {
        padding-right: unset;
        padding-left: 15px;
    }
    #textarea{
      background: #FFFFFF;
      border: 1px solid #2D3748;
      box-sizing: border-box;
      border-radius: 14px;
      font-size: 20px;
      line-height: 61px;
      letter-spacing: 0.767157px;
      color: #494949;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 61px;
      letter-spacing: 0.767157px;
      color: #494949;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 61px;
      letter-spacing: 0.767157px;
      color: #494949;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 61px;
      letter-spacing: 0.767157px;
      color: #494949;
    }
    #btn-save{
      background: #3B97D3;
      border-radius: 6.82353px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: #FAFAFA;
      padding-block: 15px;
      padding-inline: 100px;
    }
    .text-1{
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 20px;
      letter-spacing: 0.25px;
      text-decoration-line: underline;
      color: #696F79;
      cursor: pointer;
    }
    @media (max-width: 1199px) {
      $ratio: 0.8;
        #map {
            min-height: calc(#{$ratio} * 720px);
        }
        #title {
            font-size: calc(#{$ratio} * 25px);
            line-height: calc(#{$ratio} * 16px);
            letter-spacing: calc(#{$ratio} * 1px);
        }
        #icon {
            height: 100%;
            width: calc(#{$ratio} * 30px);
        }
        #textarea{
          font-size: calc(#{$ratio} * 20px);
          line-height: calc(#{$ratio} * 61px);
          letter-spacing: calc(#{$ratio} * 0.767157px);
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          font-size: calc(#{$ratio} * 20px);
          line-height: calc(#{$ratio} * 61px);
          letter-spacing: calc(#{$ratio} * 0.767157px);
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          font-size: calc(#{$ratio} * 20px);
          line-height: calc(#{$ratio} * 61px);
          letter-spacing: calc(#{$ratio} * 0.767157px);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
          font-size: calc(#{$ratio} * 20px);
          line-height: calc(#{$ratio} * 61px);
          letter-spacing: calc(#{$ratio} * 0.767157px);
        }
        #btn-save{
          font-size: calc(#{$ratio} * 24px);
          line-height: calc(#{$ratio} * 24px);
        }
        .text-1{
          font-size: calc(#{$ratio} * 24px);
          line-height: calc(#{$ratio} * 20px);
          letter-spacing: calc(#{$ratio} * 0.25px);
        }
    }
    @media (max-width: 991px) {
      $ratio: 0.7;
      #map {
          min-height: calc(#{$ratio} * 720px);
      }
      #title {
          font-size: calc(#{$ratio} * 25px);
          line-height: calc(#{$ratio} * 16px);
          letter-spacing: calc(#{$ratio} * 1px);
      }
      #icon {
          height: 100%;
          width: calc(#{$ratio} * 30px);
      }
      #textarea{
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }
      #btn-save{
        font-size: calc(#{$ratio} * 24px);
        line-height: calc(#{$ratio} * 24px);
      }
      .text-1{
        font-size: calc(#{$ratio} * 24px);
        line-height: calc(#{$ratio} * 20px);
        letter-spacing: calc(#{$ratio} * 0.25px);
      }
    }
    @media (max-width: 767px) {
      $ratio: 0.6;
      #map {
          min-height: calc(#{$ratio} * 720px);
      }
      #title {
          font-size: calc(#{$ratio} * 25px);
          line-height: calc(#{$ratio} * 16px);
          letter-spacing: calc(#{$ratio} * 1px);
      }
      #icon {
          height: 100%;
          width: calc(#{$ratio} * 30px);
      }
      #textarea{
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        font-size: calc(#{$ratio} * 20px);
        line-height: calc(#{$ratio} * 61px);
        letter-spacing: calc(#{$ratio} * 0.767157px);
      }
      #btn-save{
        font-size: calc(#{$ratio} * 24px);
        line-height: calc(#{$ratio} * 24px);
      }
      .text-1{
        font-size: calc(#{$ratio} * 24px);
        line-height: calc(#{$ratio} * 20px);
        letter-spacing: calc(#{$ratio} * 0.25px);
      }
    }
}

</style>
<style lang="scss">
#sesuaikan-lokasi{

}
</style>
<template>

<div id="sesuaikan-lokasi">
    <b-container fluid class="my-5">
        <b-row align-v="center" align-h="center" class="text-center">
            <b-col lg="10">
                <b-row>
                    <b-col>
                        <span id="title">
                                Sesuaikan Lokasi
                            </span>
                    </b-col>
                </b-row>
                <b-row class="mt-5 mb-4">
                    <b-col cols="auto" id="col-icon">
                        <b-icon icon="geo-alt-fill" id="icon"></b-icon>
                    </b-col>
                    <b-col>
                        <v-select transition="list" size="lg" :options="[{label: 'Canada', code: 'ca'}]" id="select"></v-select>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <GmapMap :center="marker" :zoom="17" map-type-id="terrain" id="map" @click="mark">
                            <GmapMarker :position="marker" :clickable="false" :draggable="false" @click="clickMark" />
                        </GmapMap>
                    </b-col>
                </b-row>
                <b-row class="mt-4">
                    <b-col>
                        <b-form-textarea id="textarea" v-model="alamat" placeholder="Tuliskan detail alamat lengkap kamu" rows="3" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>
                <b-row class="my-5">
                    <b-col>
                        <b-button id="btn-save">SIMPAN</b-button>
                    </b-col>
                </b-row>
                <b-row class="my-5">
                    <b-col>
                        <b-card-text class="text-1">Skip This Step</b-card-text>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</div>

</template>

<script>

import GmapMap from 'gmap-vue/dist/components/map';
import GmapMarker from 'gmap-vue/dist/components/marker';
export default {
    name: "SesuaikanLokasi",
    data: () => {
        return {
            marker: {
                lat: -6.121435,
                lng: 106.774124,
            },
            alamat: "",
        };
    },
    components: {
        GmapMap,
        GmapMarker,
    },
    mounted() {},
    methods: {
        mark(data) {
                this.marker.lat = data.latLng.lat();
                this.marker.lng = data.latLng.lng();
                console.log(data.latLng.lat());
            },
            clickMark(data) {
                console.log(data);
            },
            searchLocation(data) {
                console.log(data);
                // this.$http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=administrative_area_level_2&key=${apiKey}`).then((res) => {
                //   console.log(res);
                // });
            }
    },
};

</script>
