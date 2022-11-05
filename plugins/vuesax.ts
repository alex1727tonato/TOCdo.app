import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {
  colors: {
    primary: '#b094ec',
    secundary: '#002A32'
  }
})

declare module 'vue/types/vue' {
    interface Vue {
      $vs: any; // vuesax custom plugin
    }
}
