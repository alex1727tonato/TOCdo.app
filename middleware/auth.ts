import { Middleware } from '@nuxt/types'

const middleware: Middleware = async ({ store, redirect, route: { path } }) => {
  if (await store.dispatch('auth/validSesion') === true) {
    if (path.includes('/login')) {
      redirect('/')
    }
  } else if (!path.includes('/login')) {
    redirect('/login')
  }
}

export default middleware
