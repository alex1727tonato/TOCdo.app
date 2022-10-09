import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

declare module 'vue/types/vue' {
    interface Vue {
      $vs: any; // vuesax custom plugin
    }
}
