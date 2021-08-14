<template>
    <div id="component-data-diri">
        <b-modal id="modal-data-diri" :ref="refName" hide-footer hide-header size="xl">
            <b-row class="py-5">
                <b-col>
                    <b-row align-h="center">
                        <b-col cols="auto">
                            <span id="modal-title">Isi Data Diri</span>
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
                                <b-button id="btn-cancel" @click="$refs[refName].hide()" variant="outline-dark">BATAL</b-button>
                            </b-col>
                            <b-col cols="auto">
                                <b-button id="btn-save" type="submit" variant="primary">SIMPAN</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>
<script>
import FormInput from '@/components/FormInputDataDiri.vue';
export default {
name: "ModalDataDiri",

props:{
    refName:{
        type: String,
        default: "modal-data-diri"
    }
},
  data: () => {
    return {
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
#modal-data-diri{
    #modal-title{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 16px;
        letter-spacing: 1px;
        color: #2D3748;
    }
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
    .btn{
        padding-inline: 20px;
    }
    #btn-save{
        background: #32BC50;
        border-radius: 2px;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    #btn-cancel{
        background: #FFFFFF;
        border: 2px solid #505864;
        box-sizing: border-box;
        border-radius: 2px;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #2D3748;
    }
}
</style>
<style lang="scss" scoped>
</style>