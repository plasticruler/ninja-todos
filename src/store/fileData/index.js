export default {
    state: {
        fileData:[]
    },    
    getters:{
        fileData(state){
            return state.fileData.filter(x=>{
                return x.type=="1";
            });
        }
    },
    mutations: {
        SET_FILE_DATA(state,fileData){
            state.fileData = fileData
        }
    },
    actions:{
        SET_FILE_DATA({commit},data){
            commit('SET_FILE_DATA', data)
        }
    }
  }