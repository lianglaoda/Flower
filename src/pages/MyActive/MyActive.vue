<template>
  <div>
    <ul>
        <router-link tag="li" to="/MyActive/MyCenter" active-class="active">MyCenter</router-link>
      <router-link tag="li" to="/MyActive/MyFilm" active-class="active">MyFilm</router-link>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MyActive'
  }

</script>

<style lang="stylus" scoped>
  .active{
    color:red
  }
</style>
