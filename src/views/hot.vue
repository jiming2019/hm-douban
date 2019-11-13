<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="'/detail/'+item.id">
        <img :src="'https://images.weserv.nl/?url='+item.images.small">
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p><span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span></p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  created () {
    this.getMovieList('in_theaters')
  },
  methods: {
    ...mapActions(['getMovieList'])
  },
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style scoped lang='less'></style>