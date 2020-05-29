<template>
  <v-app>
    <router-view> </router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@mixin menu-button{
  width: 100px;
  height: 30px;
  background-color: #29ab2940;
  border-radius: 20px;
  box-shadow: cadetblue;
}
</style>
