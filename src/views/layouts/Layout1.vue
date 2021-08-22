<template>
  <div id="success-regis">
    <NavSuccessRegis />
    <router-view/>
    <Footer1 />
  </div>
</template>
<script>
import Footer1 from '@/components/Footer1.vue';
import NavSuccessRegis from '@/components/NavSuccessRegis.vue';
export default {
  name: 'Layout1',
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
    NavSuccessRegis,
  },
}
</script>
<style lang="scss">
html, body, #app, #success-regis {
  height: 100%;
}
</style>
<style lang="scss" scoped>
#success-regis{
  background: url("../../assets/bg-1.png") no-repeat center center fixed;
  background-size: cover;
  display: grid;
}
</style>
