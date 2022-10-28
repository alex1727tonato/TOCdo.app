<template>
  <div>
    <Sidebar />
    <header class="bg-amber-400 basis-1/6" style="height: 44.4px;">
      <Navbar />
    </header>

    <div id="content" class="bg-white min-h-screen basis-4/6" :style="{ marginLeft: margen }">
      <main class="p-3">
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
  computed: {
    margen () {
      let contenWidth = null
      if (typeof document !== 'undefined') {
        contenWidth = document.getElementById('content')?.getBoundingClientRect().width
      }
      return this.$store.state.sidebar.showSidebar && contenWidth as any > 600 ? '260px' : '0px'
    },
  }
})
</script>
