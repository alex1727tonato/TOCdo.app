  <template>
  <vs-navbar>
    <template #left>
      <vs-button flat icon @click="activarSidebar">
        <a-icon type="menu" />
      </vs-button>
    </template>
    <template #right>
      <a-dropdown>
        <a-menu slot="overlay">
          <a-menu-item key="1">
            <a-icon type="info-circle" /> Información
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="logout" /> Cerrar Sesión
          </a-menu-item>
        </a-menu>
        <a-button shape="circle">
          <a-icon type="user" />
        </a-button>
      </a-dropdown>
    </template>
  </vs-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    activarSidebar () {
      this.$store.commit('sidebar/setShowSidebar')
    }
  }
})
</script>
