<template>
  <div class="mb-5">
    <div class="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-4">
      <div>
        <p class="text-3xl mb-2 font-medium">
          {{ title }}
        </p>
        <p class="text-xl mb-2 font-normal">
          {{ subtitle }}
        </p>
      </div>
      <div v-if="!hideColumn">
        <slot name="column">
          <div class="flex gap-2">
            <a-input
              v-model="value"
              :placeholder="searchPlaceholder"
            >
              <a-icon slot="suffix" type="search" />
            </a-input>
            <a-button v-if="!hideDefaultInsert" type="primary">
              <nuxt-link to="insert" append>
                Insertar
              </nuxt-link>
            </a-button>
            <slot v-if="hasCustomOptions" name="custom-options" />
            <div v-if="showRefresh">
              <a-button
                :loading="isLoading"
                title="Refrescar datos"
                icon="reload"
              />
            </div>
            <slot />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from 'ts-debounce'

export default Vue.extend({
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    isLoading: { type: Boolean, default: false },
    hideColumn: { type: Boolean, default: false },
    hasCustomOptions: { type: Boolean, default: false },
    showRefresh: { type: Boolean, default: false },
    hideDefaultInsert: { type: Boolean, default: false },
    searchPlaceholder: { type: String, default: 'Buscar' },
  },
  data: () => ({
    value: '',
  }),
  mounted () {
    if (this.$route.query.q) {
      this.value = this.$route.query.q as any
    }
  },
  methods: {
    onSearch: debounce(function (this: any) {
      const query = { ...this.$route.query }
      if (this.value) {
        query.q = this.value
      } else {
        delete query.q
      }
      this.$router.push({ query })
    }, 500),
    refrescar: debounce(function (this: any) {
      this.$emit('refresh')
    }, 250),
  },

})
</script>
