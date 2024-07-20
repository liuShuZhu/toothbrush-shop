import { ref, computed ,reactive} from 'vue'
import { defineStore } from 'pinia'

export const useNotifStore = defineStore('notifications', () => {
  const config = reactive({
    show:false,
    text:'',
    timer:null,
    second:3000,
  })
  const setConfig = ({show,text,second}) => {

    config.show = show||false;
    config.text = text||'';
    if(second!==undefined){
        config.second=second
    }
    clearTimeout(config.timer);
    if(show){
        config.timer = setTimeout(() => {
            config.show = false;
            config.text = '';
        },config.second)
    }
  }

  return { config,setConfig, }
})
