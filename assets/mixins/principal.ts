import Vue from 'vue'
import { mostrarError } from '../useFull'

/**
 * Querys que acepta el mongoose smart query.
 */
export interface Params {
    q?: string;
    fields?: string;
    sort?: string;
    limit?: string;
    page?: string;
    [key: string]: string | undefined;
}

interface RespuestaApi {
    total: number;
    data: any[];
}

export interface OpcionesApi {
    id: string;
    description: string;
    [key: string]: string;
}

export default Vue.extend({
  data: () => ({
    endpoint: '',
    params: { } as Params,
    data: [] as any,
    totalDocumentos: 0,
    opciones: { } as Record<string, OpcionesApi[]>,
    estaCargando: false,
  }),
  computed: {
    /**
     * Tamaño de pagina
     */
    tamanoPagina () {
      return (this.$route.query as Params).limit
        ? parseInt((this.$route.query as Params).limit as string)
        : 20
    },
    /**
     * Paginacion
     */
    paginaActual () {
      return (this.$route.query as Params).page
        ? parseInt((this.$route.query as Params).page as string)
        : 1
    },
    /**
     * Propiedades de la tabla
     */
    tableProps (): Record<string, any> {
      return {
        dataSource: this.data,
        loading: this.estaCargando,
        bordered: true,
        pagination: {
          current: this.paginaActual,
          defaultPageSize: this.tamanoPagina,
          total: this.totalDocumentos,
        },
        rowKey: (x: any) => x._id,
      }
    },
  },
  watch: {
    '$route.query' () {
      this.init()
    },
  },
  async created () {
    try {
      this.estaCargando = true
      this.opciones = await this.$axios.$get(`${this.endpoint}/get-options`)
      await this.init()
    } catch (error) {
      mostrarError(error)
    } finally {
      this.estaCargando = false
    }
  },
  methods: {
    async init () {
      const opciones = {
        params: {
          ...this.params as Params,
          ...this.$route.query as Params,
        },
      }
      try {
        this.estaCargando = true
        const respuesta: RespuestaApi = await this.$axios.$get(this.endpoint, opciones)
        this.totalDocumentos = respuesta.total
        this.data = respuesta.data
      } catch (error) {
        mostrarError(error)
      } finally {
        this.estaCargando = false
      }
    },
    onTableChange (
      pagination: {
          current: number;
          defaultPageSize: number;
          pageSize: number;
          total: number;
        },
      filters: Record<string, Array<string>>,
      sorter: {
          order: string;
          field: string;
        },
    ) {
      const query = { ...this.$route.query } as Params
      /**
     * Paginacion
     */
      if (pagination.current !== this.paginaActual) {
        query.page = pagination.current.toString()
        if (query.page === '1') { query.page = undefined }
      }
      /**
     * Filtros
     */
      for (const property in filters) {
        query[property] = filters[property].length !== 0
          ? '{$in}' + filters[property].join(',')
          : undefined
      }
      /**
     * Clasificador
     */
      query.sort = sorter.order === 'ascend'
        ? sorter.field
        : sorter.order === 'descend'
          ? `-${sorter.field}`
          : undefined
      this.$router.push({ query })
    },
    async eliminar (id: string, callback: ((() => void)| undefined) = undefined) {
      try {
        await this.$axios.delete(`${this.endpoint}/${id}`)
        await this.init()
      } catch (error) {
        mostrarError(error)
      } finally {
        if (callback) { callback() }
      }
    },
    getOpt (name: string, value: string) {
      const enumerada = this.opciones[name].find((x: any) => x.id === value)
      return enumerada ? enumerada.description : ''
    },
  },
})
