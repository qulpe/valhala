<template>
  <section class="home">
    <div id="logo"></div>
    <div id="text">
    <h1 id="header">Vala Health Chat</h1>
    <p>Welcome to the VALA Health Chat. Sign in
      and customize your experience with our leading
      Professional Practitioners and join Forums linking
      you to others across the globe!
    </p>
    </div>
    <router-link to="/Login"><div class="button">LOGIN</div></router-link>
  </section>
</template>

<script>

export default {
  el: "#app",
  data (){
    return
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  color: aqua;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 20vh;
  align-content: center;
  justify-content: center;
  
}
#logo{
  min-height: 40%;
  min-width: 60%;
  background: url('../../assets/logo.svg');
  background-repeat: inherit;
  margin: 0 12vh 0 12vh;
}
#header{
  margin: 3vh 0 0 0;
  font-size: 5vh;
}

.button {
  @include menu-button;
   margin: 3vh 0 0 4.5vh;
   padding: 7px 0 0 0;

}

a{
  text-decoration: none !important;
}
#text{
  width: 100%;
  text-align: center;
}


</style>