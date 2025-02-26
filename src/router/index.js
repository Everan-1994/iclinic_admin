import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { Modal } from 'iview'
import {getToken, canTurnTo, getLocalStorage} from '@/libs/util'

Vue.use(Router)
const router = new Router({
    routes,
    mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
const HOME = 'home'

const turnTo = (to, access, next) => {
    if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
    else next({replace: true, name: 'error_401'}) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    const token = getToken()
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页

      if (!token && to.name !== HOME){
        console.log(to.name)
        Modal.confirm({
          title: '提示',
          content: '身份已过期，请重新登录',
          onOk: () => {
            next({
              name: LOGIN_PAGE_NAME // 跳转到登录页
            })
          },
          onCancel: () => {

          }
        });
      }else {
        next({
          name: LOGIN_PAGE_NAME // 跳转到登录页
        })
      }


    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        // 未登陆且要跳转的页面是登录页
        next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: 'home' // 跳转到home页
        })
    } else {
        if (store.state.user.hasGetInfo) {
            turnTo(to, store.state.user.access, next)
        } else {
            const access = getLocalStorage('access').split(',');
            if (access) {
                turnTo(to, access, next)
            } else {
                next({
                    name: 'login'
                })
            }
            // store.dispatch('getUserInfo').then(user => {
            //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
            //   turnTo(to, user.access, next)
            // }).catch(() => {
            //   next({
            //     name: 'login'
            //   })
            // })
        }
    }
})

router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router
