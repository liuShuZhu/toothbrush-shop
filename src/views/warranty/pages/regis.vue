<template>
    <div class="formBox flex-auto">
        <div class=" bg-[#dbf3ef] min-h-10 flex flex-wrap py-2 items-center justify-center tracking-wider">Questions? Click to email us:
            <a href="mailto:Support@homeast.vip" class="text-[#01799c] font-medium">
                <EnvelopeIcon class="h-4 w-4 inline-block mx-1 " />
                <span>Support@homeast.vip</span>
            </a>
        </div>
        <div class="max-w-[500px] text-[#1d1d1d] px-4  py-8 md:py-12 mx-auto md:pt-[88px] ">
            <div class=" font-semibold text-center text-2xl md:text-[32px]  tracking-widest leading-tight pb-6 md:pb-16 ">
                Warranty <br class="md:hidden" >Registration
            </div>
           
            <div class="inputItem">
                <label for="name" class="inputItemTitle ">Name</label>
                <input type="text" v-model="regForm.name"  id="name" class="codeInput focus:ring-black  focus:border-black" placeholder="* Enter your name"  aria-invalid="true" aria-describedby="name-error" />
                <p v-if="hasError&&!regForm.name" class="absolute tracking-wider mt-2 text-sm text-red-600" id="name-error">Name is required</p>
            </div>
            <div class="inputItem">
                <label for="email" class="inputItemTitle ">Email</label>
                <input type="email" v-model="regForm.email" name="email" id="email" class="codeInput focus:ring-black  focus:border-black" placeholder="* Enter your Email address"  aria-invalid="true" aria-describedby="email-error" />
                <p v-if="hasError&&!regForm.email"  class="absolute tracking-wider mt-2 text-sm text-red-600" id="email-error">Email is required</p>
            </div>
            <div class="inputItem">
                <label for="code" class="inputItemTitle ">Amazon Order ID</label>
                <input type="text" v-model="regForm.orderId" id="code" class="codeInput focus:ring-black  focus:border-black" placeholder="* 123-1234567-1234567"  aria-invalid="true" aria-describedby="code-error" />
                <p v-if="hasError&&!regForm.orderId" class="absolute tracking-wider mt-2 text-sm text-red-600 max-w-[480px]" id="code-error">Amazon Order ID is required</p>
            </div>
            <div @click="handleRegisForm" class="warranty-common-btn bg-[#01799c] rounded-full before:bg-[#048eb6]">
              <span class=" relative z-10">SUBMIT</span>
            </div>
            <div class=" text-black/30 text-xs mt-5 tracking-widest">
                <span class=" font-bold"> Notes:</span>Valid for all HOMEAST products purchased on Amazon.
            </div>
        </div>
    </div>
</template>
<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { commitRegisForm } from "@/api";
import { ref , reactive} from "vue";
import {useRouter} from "vue-router"
import {useNotifStore} from '@/stores/notifications'
import  utils from '@/assets/js/utils.js'
const notifStore = useNotifStore()

const router = useRouter()
const isCommit = ref(false)
const hasError = ref(false);
const regForm = reactive({
    name:'',
    email:"",
    orderId:''
})

const handleRegisForm = async () => {
    if(!(regForm.name&&regForm.email&&regForm.orderId)){
        hasError.value = true;
        return
    }
    if(!utils.isEmail(regForm.email)){
        notifStore.setConfig({show:true,text:"请输入正确格式的邮箱"})
        return
    }
    try {
        if(isCommit.value)return
        isCommit.value = true
        let res =  await commitRegisForm({
            ...regForm
         });
         isCommit.value = false;
         if(res.code==200){
            sessionStorage.regForm = JSON.stringify({...regForm})
            router.push('/warranty/question')
         }else{
            notifStore.setConfig({show:true,text:res.msg})
         }
         
         sessionStorage.section = ''
         sessionStorage.nowStep=''
         sessionStorage.answer=''
        
    } catch (error) {
        isCommit.value = false;
        notifStore.setConfig({show:true,text:'请求失败,请稍后重试。'})
    }
        
       
}

</script>
<style lang="less" scoped>
.bannerBox{
}
.inputItem{
    @apply pb-10;
    .inputItemTitle{
        @apply text-base block font-medium text-[#1d1d1d] mb-2 tracking-wide;
    }
}
.codeInput{
    @apply px-3 py-3 md:px-6 md:py-3 md:text-xl placeholder:text-gray-300   block w-full sm:text-sm border border-black/20 rounded-full;
}
.warranty-common-btn{
    @apply text-white mt-5 md:mt-8 w-full mx-auto h-12 relative overflow-hidden cursor-pointer flex justify-center items-center;
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