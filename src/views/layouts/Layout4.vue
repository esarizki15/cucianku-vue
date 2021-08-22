<template>
  <div id="layout-4">
    <NavSuccessRegis :isHasHr="true" />
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
html, body, #app, #layout-4 {
  height: 100%;
}
</style>
<style lang="scss" scoped>
#layout-4{
  display: grid;
}
</style>
