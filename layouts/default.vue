<template>
  <div>
    <Navbar />
    <Slidebar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Slidebar from '@/components/Slidebar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: { Navbar, Slidebar }

})
</script>
