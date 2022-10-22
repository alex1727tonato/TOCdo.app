<template>
  <div>
    <header class="bg-amber-400 basis-1/6" style="height: 64px;">
      <Navbar v-model="activar" />
    </header>

    <div class="bg-white m-0 basis-4/6">
      <Sidebar />
      <main id="content" class="p-0 m-0" style="margin-left: 0px; margin-top: 0px;">
        <nuxt />
      </main>
    </div>

    <footer class="bg-slate-800 w-full h-full basis-1/6">
      <p class="text-center">
        TOC Do ©2020 Created by TOC Systems
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: { Navbar, Sidebar },
  data: () => ({
    activar: false,
  }),
  mounted () {
    this.mostrar()
  },
  methods: {
    mostrar () {
      // const clientWidth = this.$refs.sideBar?.$el.__vue__._props.open
      const sideBarWidth = document.getElementById('sideBar')?.getBoundingClientRect().width
      const contenWidth = document.getElementById('content')?.getBoundingClientRect().width
      const aside = document.getElementById('aside')?.getBoundingClientRect().width
      console.log('Ancho sidebar', sideBarWidth)
      console.log('Ancho content', contenWidth)
      console.log('Ancho aside', aside)
    }
  }
})
</script>
<style>
</style>
