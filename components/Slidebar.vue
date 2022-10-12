<template>
  <div>
    <vs-sidebar
      v-model="active"
      absolute
      hover-expand
      reduce
      open
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
        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram" />
          </template>
          Control de Asistencia
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter" />
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
        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram" />
          </template>
          Equipos de Trabajo
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter" />
          </template>
          Empleados
        </vs-sidebar-item>
      </vs-sidebar-group>
    </vs-sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    active: 'home',
  })
})
</script>
