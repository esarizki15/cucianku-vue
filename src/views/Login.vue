<template>
  <div id="login-page">
    <b-container>
      <b-row>
        <b-col>
          <b-card class="py-5 px-3 text-center">
            <b-card-title id="title">Halo! Selamat Datang</b-card-title>
            <b-card-sub-title id="sub-title" class="mt-2"
              >Masukkan Nomor Ponsel atau Email</b-card-sub-title
            >
            <b-form>
              <b-form-group
                id="input-group-1"
                class="my-5"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.identity"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" class="w-100" variant="primary" id="btn-next">SELANJUTNYA</b-button>
              <b-card-text id="atau" class="my-4">
                Atau
              </b-card-text>
              <b-button-group class="w-100" size="sm" id="btn-google">
                <b-button @click="googleSign" class="w-100" variant="outline-primary d-flex align-items-center">
                <span aria-hidden="true" class="pull-left">
                  <b-img-lazy class="img-socmed" :src="require('@/assets/google-1.png')" alt="google-1" id="google-1" />
                </span>
                <span id="google-text">
                  Sign With Google
                </span>
                </b-button>
              </b-button-group>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer1 />
  </div>
</template>
<script>
// import axios from 'axios';
import Footer1 from "@/components/Footer1.vue";
export default {
  name: "Login",
  data: () => {
    return {
      form: {
        identity:"",
      },
      body: {
        email: "admin@gmail.com",
        password: "rahasia",
      },
    };
  },
  components: {
    Footer1,
  },
  mounted() {
    this.login();
    this.user();
  },
  methods: {
    googleSign(){
      console.log('ini');
    },
    login() {
      console.log(this.body);
      this.$store.dispatch("auth/login", this.body).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    user() {
      console.log(this.$http);
      this.$http.get(this.$baseUrl + "user").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss">
#login-page {
  #title {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #2d3748;
  }
  #sub-title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #2d3748;
  }
  input {
    border: 0;
    outline: 0;
    border-bottom: 2px solid #03a8f45e;
    font-style: normal;
    font-weight: 600;
    font-size: 24.6667px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 2px;
    color: #2D3748;

  }
  .form-control:focus {
    box-shadow:unset;
  }
  .btn{
    border-radius: 6px;
    height:51px;
  }
  #btn-next{
    background: #3B97D3;
    font-style: normal;
    font-weight: 600;
    font-size: 15.9375px;
    line-height: 21px;
    color: #FAFAFA;
  }
  #atau{
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #3B97D3;
  }
  #google-1{
    max-height: 34px;
  }
  #btn-google{
    color: #3B97D3;
  }
  #btn-google:hover{
    color: white;
  }
  #google-text{
    width: 100%;
    padding-right: 1rem;
    position: absolute;
    font-size: 15.9375px;
    line-height: 21px;
  }
}
</style>
<style lang="scss" scoped></style>
