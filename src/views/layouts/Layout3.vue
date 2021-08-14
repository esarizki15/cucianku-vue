<template>
  <div id="layout3" class="justify-content-center">
    <b-container>
        <b-row align-h="center" class="mt-4">
            <b-col cols="auto">
                <b-img-lazy class="img-socmed" :src="require('@/assets/logo-2.png')" alt="logo" id="logo" />
            </b-col>
        </b-row>
    </b-container>
    <router-view/>
    <Footer1 />
  </div>
</template>
<script>
import Footer1 from '@/components/Footer1.vue';
export default {
  name: 'Layout3',
  data: () => {
    return {
    body:{
        email: "admin@gmail.com",
        password: "rahasia",
    },
    };
  },
  components:{
    Footer1,
  },
}
</script>
<style lang="scss">
html, body, #app, #layout3 {
  height: 100%;
}
#layout3{
  .card{
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px 2px rgba(171, 138, 158, 0.12);
    border-radius: 8px !important;
  }
}
</style>
<style lang="scss" scoped>
#layout3{
  background-image: url("../../assets/bg-1.png");
    background-repeat: no-repeat;
    // background-size: cover, contain;
    background-size: 100% 100%;
    display: grid;
    // align-content: space-between;
    #logo{
        max-height: 120px;
    }
}
</style>