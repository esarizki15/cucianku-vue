<template>
  <div id="layout-5">
    <Nav2 :isHasHr="true" />
    <router-view/>
    <Footer1 />
  </div>
</template>
<script>
import Footer1 from '@/components/Footer1.vue';
import Nav2 from '@/components/Nav2.vue';
export default {
  name: 'Layout5',
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
    Nav2,
  },
}
</script>
<style lang="scss">
html, body, #app, #layout-5 {
  height: 100%;
}
</style>
<style lang="scss" scoped>
#layout-5{
  // display: grid;
}
</style>
