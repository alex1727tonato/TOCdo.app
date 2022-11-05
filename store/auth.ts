// import moment from 'moment'
import { ActionTree, MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  token: '',
  fechaInicio: null as Date | null,
  fechaFin: null as Date | null,
})

export type Auth = ReturnType<typeof state>

export const getters: GetterTree<Auth, {}> = {
  validSesion: state => {
    const token = state.token
    if (!token) {
      return false
    } else {
      // const today = moment()
      // if (!state.fechaInicio || !state.fechaFin) { return false }
      // return today.diff(state.fechaInicio, 'hours') >= 0 &&
      //       today.diff(state.fechaFin, 'hours') <= 0
      return true
    }
  },
}

export const mutations: MutationTree<Auth> = {
  setToken (state, token: string) {
    state.token = token
  }
}

export const actions: ActionTree<Auth, Auth> = {
  async login ({ commit }, data) {
    const dataUser = await this.$axios.$post('/api/auth/user', data)
    this.$cookies.set('katggadr', dataUser.token)
    this.$axios.setToken(dataUser.token)
    commit('setToken', dataUser.token)
    return dataUser
  },
  cerrarSesion ({ commit }) {
    commit('setToken', '')
    this.$cookies.remove('katggadr', {
      path: '/',
      domain: '',
    })
  },
  validSesion () {
    // const token = state.token
    const token = this.$cookies.get('katggadr')
    if (!token) {
      return false
    } else {
      // const today = moment()
      // if (!state.fechaInicio || !state.fechaFin) { return false }
      // return today.diff(state.fechaInicio, 'hours') >= 0 &&
      //       today.diff(state.fechaFin, 'hours') <= 0
      return true
    }
  },
}
