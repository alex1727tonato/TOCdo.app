import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ store, redirect, route: { path } }) => {
  console.log('VALIDANDO SESION')
  if (store.getters['auth/validSesion'] === true) {
    if (path.includes('/login')) {
      redirect('/')
    }
  } else if (!path.includes('/login')) {
    redirect('/login')
  }
}

export default middleware
