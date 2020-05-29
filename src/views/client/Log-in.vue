<template>
    <v-app>
        <div id="client"><p id="text">CLIENT</p></div>
        <section id="log-in">
            <form action="">    
                <input type="text" id="fname" name="lname" value="example@email.com">
                <input type="password" id="lname" name="pwd" value="Password">
                <router-link to="/Profile"><input type="submit" value="LOGIN" id="submit"></router-link>
            </form> 
        </section>
    </v-app>
</template>

<style lang="scss" scoped>
#log-in{
    height: 100%;
    width: 100%;
    padding: 10vh 0 0 5vh;
}
#client{
    height: 25vh;
    width: 100%;
    background: cornflowerblue;
    color: #fff;
    text-align: center;
    font-size: 5vh;
}
#text{  
    margin: 18vh 0 0 0;
}
#fname{
    opacity: 0.8;
    border: 2px solid cornflowerblue;
    border-radius: 25px;
    height: 6vh;
    width: 85%;
    text-align: center;
    color:cornflowerblue;
}   
#lname{
    opacity: 0.8;
    border: 2px solid cornflowerblue;
    border-radius: 25px;
    height: 6vh;
    width: 85%;
    text-align: center;
    color:cornflowerblue;
    margin: 12px 0 0 0;
}
#submit{
@include menu-button;
    margin: 12vh 0 0 0;
}



</style>