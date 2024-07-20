<template>
  <SectionFull class="bannerBox min-h-screen flex flex-col items-center justify-center  bg-center bg-cover bg-[url('@/assets/checkbanner_m.webp')] md:bg-[url('@/assets/checkbanner_pc.webp')]">
    <div class="max-w-[512px] rounded-xl bg-white/95 text-[#1d1d1d] my-3 mx-6 px-4 py-12 md:p-12 md:pt-[88px] lg:translate-x-[56%]">
            <div class=" font-semibold text-center md:text-left text-3xl md:text-[40px] tracking-widest leading-tight">
                Check Your <br>
                Warranty Status
            </div>
            <div class="mt-5 text-sm md:text-base md:mt-10 tracking-widest font-bold">
                Amazon Order ID 
            </div>
            <div class="mt-5 pb-12 relative">
                <input @blur="onBlur" @input="onInput" type="text" name="email" id="email" class="codeInput focus:ring-black  focus:border-black" placeholder="Eg:123-1234567-1234567" v-model="orderId" aria-invalid="true" aria-describedby="email-error" />
                <p v-if="idError" class="absolute tracking-wider mt-2 text-sm text-red-600" id="email-error">Amazon Order ID / Shopify Order Number / Redemption Code is required</p>
            </div>
            <div @click ='onCheckStatus' class="warranty-common-btn bg-[#01799c] rounded-full before:bg-[#048eb6]">
              <span class=" relative z-10">SUBMIT</span>
            </div>
        </div>
  </SectionFull>
</template>
<script setup>
import {ref} from 'vue'
import SectionFull from '@/components/SectionFull/index.vue';
import { checkStatus } from "@/api";
import {useNotifStore} from '@/stores/notifications'
const notifStore = useNotifStore()

const orderId = ref('')
const idError = ref(false)
const isCommit = ref(false)
const onBlur = () => {
  if(!orderId.value){
    idError.value = true
  }
}
const onInput = () => {
  if(orderId.value){
    idError.value = false
  }
}
const onCheckStatus = async () => {
    try {
      if(isCommit.value)return
      isCommit.value = true
      const res = await checkStatus({orderId:orderId.value})
      isCommit.value = false
      if(res.code==200){

      }else{
        notifStore.setConfig({show:true,text:res.msg})
      }

    } catch (error) {
      isCommit.value = false
      notifStore.setConfig({show:true,text:"查询失败,请稍后再试"})
      
    }
}
</script>
<style lang="less" scoped>
.bannerBox{
}
.codeInput{
    @apply px-3 py-3 md:px-6 md:py-6 md:text-xl placeholder:text-gray-300   block w-full sm:text-sm border border-black/20 rounded-full;
}
.warranty-common-btn{
    @apply text-white mt-5 md:mt-8 w-full mx-auto h-10 md:h-12 relative overflow-hidden cursor-pointer flex justify-center items-center;
    &:before{
      @apply absolute w-0 h-full left-0 transition-all rounded-full;
      content: '';
    }
    &:active::before,
    &:hover:before{
      width:100%;
    }
  }
</style>