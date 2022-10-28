<template>
  <vs-sidebar
    :open.sync="activar"
  >
    <template #logo>
      <img src="/icon-tocdo.png" alt="" width="400">
    </template>
    <vs-sidebar-item id="home">
      <template #icon>
        <a-icon type="home" />
      </template>
      Home
    </vs-sidebar-item>
    <vs-sidebar-item id="activities">
      <template #icon>
        <a-icon type="unordered-list" />
      </template>
      Mis Actividades
    </vs-sidebar-item>
    <vs-sidebar-item id="projects">
      <template #icon>
        <a-icon type="project" />
      </template>
      Proyectos
    </vs-sidebar-item>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <a-icon type="team" />
          </template>
          Mi Equipo
        </vs-sidebar-item>
      </template>
      <vs-sidebar-item id="assistControl">
        <template #icon>
          <a-icon type="control" />
        </template>
        Control de Asistencia
      </vs-sidebar-item>
      <vs-sidebar-item id="followAssignments">
        <template #icon>
          <a-icon type="monitor" />
        </template>
        Seguimiento de Actividades
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <a-icon type="setting" />
          </template>
          Configuración
        </vs-sidebar-item>
      </template>
      <vs-sidebar-item id="workTeams">
        <template #icon>
          <a-icon type="usergroup-add" />
        </template>
        Equipos de Trabajo
      </vs-sidebar-item>
      <vs-sidebar-item id="employes">
        <template #icon>
          <a-icon type="solution" />
        </template>
        Empleados
      </vs-sidebar-item>
    </vs-sidebar-group>
  </vs-sidebar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
