<template>
  <div>
    <header class="bg-amber-400 p-2">
      <h2><Navbar v-model="activar" /></h2>
    </header>

    <div class="bg-white my-5 w-full flex space-y-4 flex-row md:space-x-4 md:space-y-0">
      <Sidebar />
      <main id="content" class="md:w-full lg:w-full px-5 py-2">
        <nuxt />
      </main>
    </div>

    <footer class="bg-slate-800 p-3">
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
