<template>
  <div id="layout2">
    <NavSuccessRegis :isHasHr="true" />
    <router-view/>
    <Footer2 />
  </div>
</template>
<script>
import Footer2 from '@/components/Footer2.vue';
import NavSuccessRegis from '@/components/NavSuccessRegis.vue';
export default {
  name: 'Layout2',
  data: () => {
    return {
    body:{
        email: "admin@gmail.com",
        password: "rahasia",
    },
    };
  },
  components:{
    Footer2,
    NavSuccessRegis,
  },
}
</script>
<style lang="scss">
html, body, #app, #layout2 {
  height: 100%;
}
</style>
<style lang="scss" scoped>
#layout2{
  background-image: url("../../assets/bg-1.png");
    background-repeat: no-repeat;
    // background-size: cover, contain;
    background-size: 100% 100%;
    display: grid;
    // align-content: space-between;
}
</style>
