<template>
<div id="footer-socmed">
    <footer class="page-footer font-small my-4">
      <b-container fluid>
          <b-row class="d-flex">
              <b-col col md="6"  id="col-left">
                  <span id="footer-copyright">2021 Cucianku</span> <span class="mx-3"> | </span> <span id="bantuan"><a href="">Bantuan</a></span>
              </b-col>
              <b-col col md="6" id="col-right">
                  <b-img-lazy class="img-socmed ml-3" :src="data" :alt="index.toString()" v-for="(data, index) in img" :key="index"></b-img-lazy>
              </b-col>
          </b-row>
      </b-container>
  </footer>
</div>
</template>
<script>
export default {
  name: 'FooterSocmed',
  props: {
  },
  data: () => {
    return {
        img: [
            require('@/assets/facebook.png'),
            require('@/assets/youtube.png'),
            require('@/assets/linkedin.png'),
            require('@/assets/instagram.png'),
        ],
    };
  },
}
</script>
<style scoped lang="scss">
#footer-socmed{
    .page-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        #footer-copyright {
            font-style: normal;
            font-weight: normal;
            font-size: 18.4px;
            line-height: 23px;
            letter-spacing: 0.2875px;
            color: #8692A6;
        }
        #bantuan{
            font-style: normal;
            font-weight: 500;
            font-size: 18.4px;
            line-height: 23px;
            letter-spacing: 0.2875px;
            color: #3B97D3;
        }
        #col-left{
            text-align:left;
        }
        #col-right{
            text-align:right;
            .img-socmed{
                height:35px;
                width:35px;
            }
        }
    }
}
</style>