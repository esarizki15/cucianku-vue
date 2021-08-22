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
  background: url("../../assets/bg-2.png") no-repeat center center fixed;
  background-size: cover;
  display: grid !important;
}
</style>
