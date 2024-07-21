<template>
  <SectionFull class="bannerBox min-h-screen flex flex-col items-center justify-center  bg-center bg-cover bg-[url('@/assets/banner.jpg')]">
    <div class="max-w-[512px] w-11/12 rounded-xl bg-white/95 text-[#1d1d1d] my-3 mx-6 px-4 md:px-8 py-8 ">
            <h1 class='text-3xl text-center'>Warranty Status</h1>
            <div class='mt-4'>
              <label class=" font-bold mr-2" >Order ID:</label>
              <span>{{orderId}}</span>
            </div>
            <div class='mt-4'>
              <label class=" font-bold mr-2" >Valid Date:</label>
              <span>{{day}} Days</span>
            </div>
            
            <div class="mt-4">
              <label class="font-bold">Warranty Progress:</label>
              <div class="flex items-center mt-2">
                <div class=" flex-auto bg-gray-300 h-4 rounded-full overflow-hidden ">
                  <div class="bg-[#347799] text-white rounded-full h-full" :style="{width:per}">
                  </div>
                </div>
                <span class="flex-none ml-4">{{per}}</span>
              </div>
             
            </div>
        </div>
  </SectionFull>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import SectionFull from '@/components/SectionFull/index.vue';
import { checkStatus } from "@/api";
import {useNotifStore} from '@/stores/notifications'
const notifStore = useNotifStore()
const route = useRoute()
const router = useRouter()
if(!route.query.orderId){
  router.push({
    path:'/warranty/checkstatus'
  })
}
const orderId = ref(route.query.orderId)
const idError = ref(false)
const isCommit = ref(false)
const day = ref(0)
const per = ref(0)
const onCheckStatus = async () => {
    try {
      if(isCommit.value)return
      isCommit.value = true
      const res = await checkStatus({orderId:orderId.value})
      isCommit.value = false
      if(res.code==200){
        per.value = res.data.present *100+'%';
        day.value = res.data.remindDays
      }else{
        notifStore.setConfig({show:true,text:res.msg})
      }

    } catch (error) {
      isCommit.value = false
      notifStore.setConfig({show:true,text:"查询失败,请稍后再试"})
      
    }
}
onMounted(() => {
  onCheckStatus()
})
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