<template>
  <div>
    <header style="height: 44.4px;">
      <Navbar />
    </header>

    <div
      id="content"
      class="bg-white min-h-screen"
      :style="{ marginLeft: margenContenido }"
    >
      <Sidebar />
      <main class="p-3">
        <nuxt />
      </main>
    </div>

    <footer class="bg-slate-800 w-full h-full">
      <p class="text-center">
        TOC Do ©2022 Created by TOC Systems
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
  computed: {
    margenContenido () {
      let anchoContenido = null
      if (typeof document !== 'undefined') {
        anchoContenido = document.getElementById('content')
          ?.getBoundingClientRect().width
      }
      return this.$store.state.sidebar.showSidebar &&
      anchoContenido as any > 600
        ? '260px'
        : '0px'
    },
  }
})
</script>
