<template>
  <div>
    <Header
      title="Título"
      subtitle="Subtítulo"
      :show-refresh="true"
    />
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Header },
})
</script>
