<template>
    <div id="data-diri">
        <b-container>
            <b-row align-v="center" align-h="center">
                <b-col cols="10">
                    <b-row align-h="center">
                        <b-col cols="auto">
                            <span id="title">
                                Isi Data Diri
                            </span>
                        </b-col>
                    </b-row>
                    <b-form class="mt-4" v-if="form">
                        <b-row>
                            <b-col>
                                <b-row class="">
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="true" placeholder="First Name" type="text" :value="form.firstName" id="input-firstName" @change="form.firstName = $event" rowClass="mb-5" />
                                    </b-col>
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="true" placeholder="Last Name" type="text" :value="form.lastName" id="input-lastName" @change="form.lastName = $event" rowClass="mb-5" />
                                    </b-col>
                                </b-row>
                                <b-row class="">
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="true" placeholder="Email" type="email" :value="form.email" id="input-email" @change="form.email = $event" rowClass="mb-5" />
                                    </b-col>
                                </b-row>
                                <b-row class="">
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="true" placeholder="Mobile Phone Number" type="text" :value="form.phoneNumber" id="input-phone" @change="form.phoneNumber = $event" rowClass="mb-5" />
                                    </b-col>
                                </b-row>
                                <b-row class="">
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="true" placeholder="Date of Birth" type="date" :value="form.dob" id="dob" @change="form.dob = $event" rowClass="mb-5" />
                                    </b-col>
                                    <b-col align-self="center" class="mb-4 px-4">
                                        <b-row align-h="between">
                                            <b-col v-for="(data, index) in gender" :key="index" cols="auto">
                                                <b-form-radio class="gender-radio" v-model="form.gender" name="some-radios" :value="data.value" >{{data.text}}</b-form-radio>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <b-row class="">
                                    <b-col class="px-4" md="6">
                                        <FormInput :isRequired="false" placeholder="Referral Code (Optional)" type="text" :value="form.referralCode" id="referralCode" @change="form.referralCode = $event" rowClass="mb-5" />
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row align-h="center" class="mt-4">
                            <b-col cols="auto">
                                <b-button id="btn-save" type="submit" variant="primary">SIMPAN</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import FormInput from '@/components/FormInputDataDiri.vue';
export default {
name: "DataDiri",
  data: () => {
    return {
        body:{
            email: "admin@gmail.com",
            password: "rahasia",
        },
        gender:[
            {
                "text": "Men",
                "value": 0,
            },
            {
                "text": "Women",
                "value": 1,
            },
            {
                "text": "Other",
                "value": 2,
            },
        ],
        form:{
            firstName:"",
            lastName:"",
            email:"",
            dob:"",
            phoneNumber:"",
            referralCode:"",
            gender:0,
        }
    };
  },
    components:{
        FormInput,
    },
  mounted(){
  },
  methods: {
  },
};
</script>
<style lang="scss">
#layout2{
    display:inherit !important;
    #data-diri{
        .gender-radio{
            label{
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                // line-height: 32px;
                letter-spacing: 0.197826px;
                color: #2D3748;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
#data-diri{
    margin-top: 4rem;
    #title{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
    #btn-save{
        background: #3B97D3;
        border-radius: 6.82353px;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #FAFAFA;
        padding-inline: 7rem;
        padding-block: 1rem;
    }
}
</style>