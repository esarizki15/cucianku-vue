<template>
    <div id="for-input-data-diri">
        <b-row :class="rowClass">
            <b-col>
                <b-form-input
                    :id="id"
                    :value="value"
                    :type="type"
                    :placeholder="placeholder"
                    :required="isRequired"
                    v-on:keyup="changeData($event)"
                ></b-form-input>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
name: "FormInputDataDiri",

props:{
    isRequired: Boolean,
    placeholder:String,
    type: String,
    id:String,
    value:[String, Number],
    rowClass:{
        type: [String, Number],
        default: "my-5",
    }
},
  data: () => {
    return {
        currentValue: "",
    };
  },
  components:{
  },
  mounted(){
  },
  methods: {
      changeData(e){
          console.log(e.target.value)
          this.$emit('change', e.target.value);
      }
  },
};
</script>
<style lang="scss" scoped>
#for-input-data-diri{
    input {
        border: 0;
        outline: 0;
        border-bottom: 2.63768px solid #6C737F;
        font-style: normal;
        font-weight: normal;
        font-size: 18.4638px;
        line-height: 32px;
        letter-spacing: 0.197826px;
        color: #2D3748;
        background: transparent;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #C9D9E8;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
       color: #C9D9E8;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #C9D9E8;
    }
    .form-control:focus {
        box-shadow:unset;
    }
}
</style>