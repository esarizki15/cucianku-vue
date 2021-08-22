<template>
<div id="footer-sk">
    <footer class="page-footer font-small my-4">
      <b-container fluid>
          <b-row align-h="center">
              <b-col cols="auto" class="text-center my-2">
                  <span id="sk">Dengan mendaftar, saya menyetujui</span> <span class="blue">Syarat dan Ketentuan</span> serta <span class="blue">Kebijakan Privasi</span>
              </b-col>
          </b-row>
          <b-row align-h="center" class="mt-4 mb-5">
              <b-col cols="auto">
                  <span id="footer-copyright">2021 Cucianku</span> <span class="mx-3"> | </span> <span id="bantuan"><a href="">Bantuan</a></span>
              </b-col>
          </b-row>
      </b-container>
  </footer>
</div>
</template>
<script>
export default {
  name: 'Footer2',
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
#footer-sk{
    .page-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        .blue{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.25px;
            color: #3B97D3;
            cursor: pointer;
        }
        #sk{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.25px;
        }
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
    }

    @media (max-width: 767px) {
      .page-footer {
          position: relative;
          left: 0;
          bottom: 0;
          width: 100%;
          padding-bottom: 15px;
        }
    }
}
</style>
