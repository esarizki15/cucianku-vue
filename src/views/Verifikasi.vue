<template>
  <div id="verifikasi-page" class="my-4">
    <b-container>
      <b-row align-h="center">
        <b-col lg="5">
          <b-card class="py-5 px-3 text-center">
            <b-card-title id="title">Kode Verifikasi</b-card-title>
            <b-card-sub-title id="sub-title" class="mt-2"
              >Masukkan Kode Verifikasi</b-card-sub-title
            >
            <b-form inline class="justify-content-center">
              <b-form-input
                :id="`input-${index}`"
                type="text"
                required
                v-for="(data, index) in 4"
                :key="index"
                maxlength="1"
                class="col-2 mx-2 my-5"
                v-on:keyup="nextInput($event, index)"
              ></b-form-input>

              <b-button class="w-100" type="submit" variant="primary" id="btn-next">SELANJUTNYA</b-button>
              <b-card-text class="my-4">
                <span id="resend">Kirim Ulang</span> <span id="resend-text">Kode Verifikasi</span>
              </b-card-text>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <Footer1 /> -->
  </div>
</template>
<script>
// import axios from 'axios';
// import Footer1 from "@/components/Footer1.vue";
export default {
  name: "Verifikasi",
  data: () => {
    return {
      code: [],
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
    // Footer1,
  },
  mounted() {
    this.login();
    this.user();
  },
  methods: {
    nextInput(e, i){
      let char = String.fromCharCode(e.keyCode); // Get the character
      let isString = /^[A-Za-z0-9]+$/.test(char);
      if(!isString) {
        return e.preventDefault();
      }
      e.target.nextElementSibling.focus(); // Match with regex
      this.code[i] = e.target.value;
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
#verifikasi-page {
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
    border-bottom: 3px solid #494949;
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
  #resend{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #3B97D3;
    text-decoration: underline;
    cursor: pointer;
  }
  #resend-text{
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: #3B97D3;
  }
}
</style>
<style lang="scss" scoped></style>
