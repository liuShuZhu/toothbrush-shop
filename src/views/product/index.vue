<template>
    <SectionFull class="bannerBox min-h-screen  text-white flex flex-col items-center justify-center  bg-[#b1c1c8]">
      <div class="flex flex-col-reverse justify-center items-center h-full md:flex-row md:px-6 max-w-9xl w-full mx-auto 4xl:max-w-9xl lg:max-w-8xl">
        <div class="md:w-[45%] flex flex-col justify-center items-center">
          <div class="text-[#3069aa] text-center px-2 md:px-0 md:text-left text-[26px] md:text-2xl 4xl:text-4xl font-black">HOMEAST Visual Power Dental Flosser</div>
          <div class="py-8 md:pb-0">
            <div class="flex flex-col md:flex-row">
                <img class="w-full rounded-sm max-w-[280px] 4xl:max-w-[480px] flex-auto" v-show="(hoverShop||activeShop.color)=='white'" src="@/assets/shop_w.jpg" alt="">
                <img class="w-full rounded-sm max-w-[280px] 4xl:max-w-[480px] flex-auto" v-show="(hoverShop||activeShop.color)=='black'" src="@/assets/shop_b.jpg" alt="">
                <div class="flex flex-row flex-none md:flex-col gap-5 mt-8 justify-center md:justify-start md:pl-8 ">
                  <div @mouseenter="hoverShop=item.color" @mouseleave="hoverShop=''" v-for="item in shopList" @click="activeShop=item" :key="item.asin" class="cursor-pointer border-2 4xl:border-[4px] border-transparent w-6 h-6 4xl:h-8 4xl:w-8 rounded-full flex items-center justify-center " 
                  
                  :class="{
                    '!border-[#01799c]':item.asin==activeShop.asin
                  }">
                    <div class="w-5 h-5 4xl:h-6 4xl:w-6  rounded-full" :style="{backgroundColor:item.color}"></div>
                  </div>
                </div>
            </div>
            
            <a :href="'https://www.amazon.com/dp/'+activeShop.asin" target="_blank"  class="warranty-common-btn mx-auto md:mx-0 mt-6 md:mt-10 px-4 4xl:px-6 bg-[#ffd814]   md:w-auto  rounded-full before:bg-[#f0cc44]">
              <span class="text-lg md:text-xl 4xl:text-3xl font-semibold text-[#0f1111] relative z-10">Buy on Amazon</span>
            </a>
          </div>
        
          
        </div>
        <div class="px-4 w-full md:flex-1  my-5 md:mx-0 md:my-0 ">
          <iframe class="w-full h-[210px] md:h-[430px] 4xl:h-[640px] bg-black rounded-md"   src="https://www.youtobe.com/embed/qSAqpgbyF-U?si=BAjC1bCcP7XJo3Yb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <!-- <video class="w-full h-[240px] md:h-[480px] bg-black rounded-md" controls src="https://www.w3school.com.cn/example/html5/mov_bbb.mp4"></video> -->
        </div>

      </div>
     
    </SectionFull>

    <div v-if="false" class=" md:flex pt-10 md:pt-20 flex-row-reverse justify-center gap-48">
      <div class="  text-[#1d1d1d] text-2xl md:text-5xl flex  justify-center items-center">
        BEST SELLERS
      </div>
      <div class="mt-8 md:mt-0 flex flex-4 justify-center flex-col items-center">
        <div class=" max-w-full w-[400px] h-[420px] bg-cover bg-[url('@/assets/shop.webp')] hover:bg-[url('@/assets/shop_hover.webp')]"></div>
        <div class="text-lg mt-4 font-thin">F5020E Water Dental Flosser</div>
        <div class="text-lg font-bold">
          $89.09
        </div>
        <a href="https://www.amazon.com/" target="_blank" class="warranty-common-btn w-[200px] mt-2 md:mt-4 text-[#3069aa] border-2 border-[#3069aa] hover:text-white hover:border-[#048eb6] rounded before:bg-[#048eb6]">
          <span class=" relative z-10">SHOP NOW</span>
        </a>
      </div>
     
    </div>

    <div v-if="false" class=" max-w-7xl mx-auto px-6 lg:flex gap-24 py-20">
      <div class=" flex-auto flex flex-col items-center justify-center">
        <div class="text-3xl text-center  md:text-4xl lg:text-left lg:text-5xl font-medium leading-tight tracking-widest">
          At-Home Oral Care Solutions
        </div>
        <div class="mt-4 text-lg text-center  md:text-base md:mt-6 lg:text-left tracking-widest">Protect your oral health at home instead of dental visits</div>
      </div>
      <div class=" flex-1 flex justify-center mt-6 lg:mt-0">
        <!-- <iframe width="640" height="380" src="https://www.youtube-nocookie.com/embed/UL5e6qk3sLE?si=YkyMi9EBvhLxs7iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
      </div>
    </div>
  </template>
  <script setup>
  import { useRouter } from 'vue-router';
  import SectionFull from '@/components/SectionFull/index.vue';
  import { ref } from 'vue';
  const shopList =[
  {
    color:"white",
    asin:'B0D2W643YQ',
  },
  {
    color:"black",
    asin:'B0D2W5QJGY',
  }
  ]
  const activeShop = ref({
    color:"white",
    asin:'B0D2W643YQ',
  })
  const hoverShop = ref('')
  const router = useRouter()


  </script>

  <style lang="less" scoped>
    .bannerBox{
    background-image: url(@/assets/homebg.jpg);
    background-position: center;
    background-size: cover;
    }
    .warranty-common-btn{
    @apply    h-10 md:h-12 4xl:h-16 relative overflow-hidden cursor-pointer flex md:inline-flex justify-center items-center;
    &:before{
      @apply absolute w-0 h-full left-0 transition-all rounded;
      content: '';
    }
    &:hover:before{
      width:100%;
    }
  }
  </style>