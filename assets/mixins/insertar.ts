import Vue from 'vue'
import { mostrarError } from '../useFull'
import { Params, OpcionesApi } from './principal'

export default Vue.extend({
  data () {
    return {
      /**
       * El endpoint a donde se hará la petición.
       */
      endpoint: '',
      /**
       * Indica si la información se está cargando
       */
      estaCargando: false,
      /**
       * Las query strings que serán proporcionadas al api.
       */
      params: { } as Params,
      data: {} as any,
      opciones: {} as { [key: string]: Array<OpcionesApi> },
    }
  },
  computed: {
    rutaPrincipal (): string {
      return this.$route.path.replace(/\/(insert|edit).*/g, '')
    },
    objectId (): string {
      return this.data._id || undefined
    },
    accion (): 'Insertar' | 'Editar' {
      return !this.objectId ? 'Insertar' : 'Editar'
    }
  },
  async mounted () {
    try {
      this.estaCargando = true
      const id = this.$route.params.id
      this.opciones = await this.$axios.$get(`${this.endpoint}/get-options`)
      if (id) {
        const opt = { params: this.params }
        const data = await this.$axios.$get(`${this.endpoint}/${id}`, opt)
        this.formatearData(data)
        this.data = data
      }
    } catch (err) {
      mostrarError(err)
    } finally {
      this.estaCargando = false
    }
  },
  methods: {
    /**
     * Da formato a los datos obtenidos para editar.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatearData (data: any) { },
    async onSubmit () {
      if (this.estaCargando === true) { return }
      this.estaCargando = true
      try {
        let result
        if (this.objectId) {
          result = await this.$axios.$put(`${this.endpoint}/${this.objectId}`, this.data)
        } else {
          result = await this.$axios.$post(this.endpoint, this.data)
        }
        this.estaCargando = false
        return result
      } catch (err) {
        mostrarError(err)
        this.estaCargando = false
      }
    },
  },
})
