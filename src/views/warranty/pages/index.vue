<template>
    <div class="bannerBox min-h-screen px-4  flex flex-col items-center justify-center"
    :class="counterStore.hasScrollBar?'pt-28 -mt-28':'pt-16 -mt-16'"
    >
      <div class=" max-w-[1152px] mx-3 md:mx-auto py-4">
        <div class=" text-white text-center lg:text-left text-[36px] md:text-[60px] font-bold ">Warranty Center</div>
        <div class=" text-white text-center lg:text-left md:text-2xl">Customers are the focus of all that we do</div>
        <div class=" grid md:grid-cols-2 gap-8 md:gap-5 text-center mt-12 md:mt-16">
          <div class="bannerItemBox md:col-span-1 ">
            <div class="  text-[#1d1d1d] tracking-wide flex md:flex-col ">
              <div class="w-8 md:h-10 md:w-10 flex items-center mr-3  md:mx-auto">
                <PencilSquareIcon class="bannerItemIcon text-[#01799c]" />
              </div>
              <div class="text-left md:text-center">
                <div class=" md:mt-6 font-bold">Warranty Registration</div>
                <div class=" text-xs md:text-sm mt-3 ">
                  Activate your extended warranty in a few simple steps to protect your appliances for peace of mind.
                </div>
              </div>
            </div>
            <div @click="toLink('/warranty/registration')" class="warranty-common-btn bg-[#01799c] rounded-full before:bg-[#048eb6]">
              <span class=" relative z-10">Register Now</span>
            </div>
           
          </div>
          <div class="bannerItemBox md:col-span-1">
            <div class=" text-[#1d1d1d] tracking-wide  flex md:flex-col ">
              <div class="w-12 flex items-center mr-3  md:m-auto">
                <DocumentMagnifyingGlassIcon class="bannerItemIcon text-black " />
              </div>

              <div class="text-left md:text-center">
                <div class="md:mt-6 font-bold">Warranty Status Check</div>
                <div class=" text-xs md:text-sm mt-3 ">
                  Quickly check the warranty status of your product by simply entering your Amazon Order number.
                </div>
              </div>
            </div>
            <div @click="toLink('/warranty/checkstatus')" class="warranty-common-btn bg-black rounded-full before:bg-[#444]">
              <span class=" relative z-10">CHECK NOW</span>
            </div>
          </div>
          <!-- <div class="bannerItemBox md:col-span-3">
           <div class=" text-[#1d1d1d] tracking-wide  flex md:flex-col ">
            <div class="w-12 flex items-center mr-3  md:m-auto">
            <DocumentTextIcon class="bannerItemIcon text-[#f36819]" />

            </div>
            <div class="text-left md:text-center">
              <div class="md:mt-6 font-bold">Warranty Information</div>
            <div class=" text-xs md:text-sm mt-2 ">
              Covers the new products and explains warranty periods, coverage, and remedies.
            </div>
            </div>
           </div>
           <div @click="toLink('/information')" class="warranty-common-btn bg-[#f36819] rounded-full before:bg-[#ff8d4e]">
              <span class=" relative z-10">LEARN MORE</span>
            </div>
          </div> -->
        </div>
      </div>
   
    
    </div>
  
  </template>
  <script setup>
  import { ref ,} from "vue";
  import { useRouter } from 'vue-router';
  import { DocumentMagnifyingGlassIcon,DocumentTextIcon,PencilSquareIcon } from "@heroicons/vue/24/outline";
  import {useCounterStore} from '@/stores/counter'
const counterStore = useCounterStore()
  const router = useRouter()
  const toLink = (path) => {
    router.push({
      path
    })
  }
  </script>
  <style lang="less" scoped>
  .bannerBox{
    background-image: url(@/assets/banner.jpg);
    background-position: center;
    background-size: cover;
    .bannerItemBox{
      @apply bg-white/95 rounded-lg px-4 py-5 md:px-6 md:py-10 lg:px-10 lg:py-16  flex flex-col  justify-between ;
      .bannerItemIcon{
        @apply h-8 w-8 md:h-12 md:w-12 ;
      }
    }
  }

  .warranty-common-btn{
    @apply text-white  mt-6 md:mt-10 w-full mx-auto h-10 md:h-12 relative overflow-hidden cursor-pointer flex justify-center items-center;
    &:before{
      @apply absolute w-0 h-full left-0 transition-all rounded-full;
      content: '';
    }
    &:hover:before{
      width:100%;
    }
  }
</style>