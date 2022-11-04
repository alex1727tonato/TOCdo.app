import { NuxtCookies } from 'cookie-universal-nuxt'

declare module 'vue/types/vue' {
    interface Vue {
        $cookies: NuxtCookies;
    }
}
