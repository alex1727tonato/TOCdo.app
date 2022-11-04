export const state = () => ({
  showSidebar: false
})

export const mutations = {
  setShowSidebar (state) {
    state.showSidebar = !state.showSidebar
  }
}
