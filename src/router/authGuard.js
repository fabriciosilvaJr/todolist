export default function authGuard(router) {
    router.beforeEach((to, from, next) => {
      const publicPages = ['/login', '/register'];
      const authRequired = !publicPages.includes(to.path);
      const loggedIn = localStorage.getItem('token');
  
      if (authRequired && !loggedIn) {
        return next('/login');
      }
  
      next();
    });
  }
  