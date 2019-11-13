<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <a href="./item.html">
        <img :src="'https://images.weserv.nl/?url='+item.images.small"/>
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions,mapState } from "vuex";
export default {
  created() {
      this.getMovieList('coming_soon')
  },
  methods: {
    // 调用actions第一种方式
    // getMovieList() {
    //   this.$store.dispatch("getMovieList,'coming_soon'");
    // },

    // 调用actions第二种方式，通过mapActions
    // 相当于 methods申明了一个函数getMovieList(params){ this.$store.dispatch('getMovieList', params)} 
    ...mapActions(['getMovieList'])
  },
  computed: {
    ...mapState(['list'])
  }
};
</script>

<style>
</style>