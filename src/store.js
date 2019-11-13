// vuex相关功能
import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)
const store = new Vuex.Store({
    // 申明数据
    state: {
        title: '',
        list: [],
        // 电影详情
        item: null
    },
    // 获取数据
    actions: {
        // 获取后台电影列表数据
        // actions 中的函数有默认传参 context
        getMovieList(context,type) {
            // 使用jsonp获取豆瓣接口提供的数据
            jsonp('http://api.douban.com/v2/movie/'+type+'?apikey=0df993c66c0c636e29ecbb5344252a4a',(error,data)=>{
                if(error) {return alert('请求失败')}

                // 请求成功  把获取到的数据提交给mutations进行state数据的修改
                context.commit('setMovieList',{
                    title:data.title,
                    list:data.subjects
                })
            })
        },

        // 获取电影详情的数据
        // context里面包含commit,直接解构出来也可以
        getMovieDetail({commit},id) {
            jsonp('http://api.douban.com/v2/movie/subject/'+id+'?apikey=0df993c66c0c636e29ecbb5344252a4a',(error,data)=>{
                if(error){return alert('请求失败')}
                commit('setMovieDetail',{
                    tilte:data.title,
                    item:data
                })

            })
        }
    },
    // 修改数据
    mutations: {
        // 改列表页面的数据 (listData={title:'标题',list:'电影列表'})
        setMovieList(state,payload) {
            state.title = payload.title
            state.list = payload.list
        },

        // 改电影详情页面数据 (itemData={title:'标题',item:'电影详情'})
        setMovieDetail(state,payload) {
            state.title = payload.title
            state.item = payload.item
        }
    },


})

export default store