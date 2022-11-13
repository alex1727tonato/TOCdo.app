<template>
  <vs-sidebar :open.sync="activar">
    <template #logo>
      <img src="/icon-tocdo.png" alt="" width="400">
    </template>
    <ul>
      <li v-for="item of modules" :key="item.key">
        <vs-sidebar-item v-if="!item.submodules" :id="item.key">
          <template #icon>
            <a-icon :type="item.icon" />
          </template>
          <nuxt-link :to="`/${item.key}`">
            {{ item.label }}
          </nuxt-link>
        </vs-sidebar-item>
        <vs-sidebar-group v-else>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <a-icon :type="item.icon" />
              </template>
              {{ item.label }}
            </vs-sidebar-item>
          </template>
          <ul>
            <li v-for="subItem of item.submodules" :key="subItem.key">
              <vs-sidebar-item :id="subItem.key">
                <template #icon>
                  <a-icon :type="subItem.icon" />
                </template>
                <nuxt-link :to="`/${item.key}/${subItem.key}`">
                  {{ subItem.label }}
                </nuxt-link>
              </vs-sidebar-item>
            </li>
          </ul>
        </vs-sidebar-group>
      </li>
    </ul>
  </vs-sidebar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    modules: [
      {
        key: 'teams',
        label: 'Mis Equipos',
        icon: 'team',
        submodules: [
          {
            key: 'followAssignments',
            label: 'Seguimiento de Actividades',
            icon: 'monitor',
          },
          {
            key: 'assistControl',
            label: 'Control de Asistencia',
            icon: 'control',
          },
        ]
      },
      {
        key: 'projects',
        label: 'Proyectos',
        icon: 'project',
      },
    ],
  }),
  computed: {
    activar: {
      set () {
        this.$store.commit('sidebar/setShowSidebar')
      },
      get () {
        return this.$store.state.sidebar.showSidebar
      },
    },
  }
})
</script>
