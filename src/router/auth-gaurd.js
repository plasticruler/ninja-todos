import {store} from '../store'

export default (to,from,next)=>{
    if (store.getters.user){
        console.log(store.getters.user)
        next()
    }else{
        console.log('go to signin')
        next('/signin')
    }
}