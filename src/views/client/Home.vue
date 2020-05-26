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
    <router-link to="/Signup"><div class="button">Sign Up</div></router-link>
    <router-link to="/Login"><div class="button">Login</div></router-link>
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

.button{
  width: 75%;
  height: 7vh;
  border: 2px solid #292929;
  border-radius: 35px;
  text-align: center;
  margin: 3vh 0 0 calc(6.5vh + 2px);
  padding: 9px 0 0 0;
}
a{
  text-decoration: none !important;
}
#text{
  width: 100%;
  text-align: center;
}


</style>