<template>
  <div class="login">
    <div class="container-login">
      <div
        class="flex flex-col lg:flex-row items-center w-full h-full sm:bg-none rounded-2xl"
        style="background-image: url(/Fondo6.png); background-size: 100% 100%;"
      >
        <div style="flex-basis: 44%;">
          <div class="w-3/5 m-auto p-5">
            <p class="font-sans text-3xl font-semibold text-black mb-12">
              Inicio de sesión
            </p>
            <a-form-model
              ref="formModel"
              layout="vertical"
              :model="form"
              autocomplete="off"
              @submit.prevent="onSubmit"
            >
              <a-form-model-item
                label="RUC"
                html-for="ruc"
                prop="ruc"
                :rules="{ required: true, message: 'El campo es requerido' }"
              >
                <a-input
                  id="ruc"
                  v-model="form.ruc"
                  placeholder="Ingrese el RUC de la empresa"
                />
              </a-form-model-item>
              <a-form-model-item
                label="Usuario"
                html-for="username"
                prop="username"
                :rules="{ required: true, message: 'El campo es requerido' }"
              >
                <a-input
                  id="username"
                  v-model="form.username"
                  placeholder="Ingrese el usuario"
                />
              </a-form-model-item>
              <a-form-model-item
                label="Contraseña"
                html-for="password"
                prop="password"
                :rules="{ required: true, message: 'El campo es requerido' }"
              >
                <a-input
                  id="password"
                  v-model="form.password"
                  placeholder="Ingrese la contraseña"
                />
              </a-form-model-item>
              <vs-button
                style="margin: 0px !important;"
                gradient
                color="#b094ec"
                block
                circle
                @click="active = !active"
              >
                <p class="text-base m-0">
                  Iniciar sesión
                </p>
              </vs-button>
            </a-form-model>
          </div>
        </div>
        <div style="flex-basis: 56%;">
          <div class="w-2/3 m-auto p-5">
            <img
              src="/icon.png"
              alt="logo"
              width="460"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mostrarError, notificacion } from '@/assets/useFull'

export default Vue.extend({
  name: 'VistaLogin',
  layout: 'empty',
  data: () => ({
    form: {
      ruc: '',
      username: '',
      password: '',
    }
  }),
  methods: {
    onSubmit () {
      (this.$refs.formModel as any).validate(async (valid: boolean) => {
        if (!valid) {
          return notificacion(this, 'warn', 'top-center', 'Complete los campos del formulario')
        }
        const loading = this.$vs.loading({
          type: 'points'
        })
        try {
          await this.$store.dispatch('auth/login', this.form)
          this.$router.push('/')
        } catch (error) {
          mostrarError(error)
        } finally {
          loading.close()
        }
      })
    },
  },
})
</script>
