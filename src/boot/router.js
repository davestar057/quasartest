export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    store.dispatch('auth/me').then(() => {
      next();
    });
  })
}
