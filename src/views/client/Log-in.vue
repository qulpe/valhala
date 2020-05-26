<template>
    <v-app>
        <div id="client"><p id="text">CLIENT</p></div>
        <section id="log-in">
            <form action="">    
                <input type="text" id="fname" name="fname" value="example@email.com">
                <input type="password" id="lname" name="pwd" value="Password">
                <router-link to="/Profile"><input type="submit" value="LOGIN" id="submit"></router-link>
                <input type="submit" value="LOGIN WITH FACEBOOK" class="submit">
                <input type="submit" value="LOGIN WITH GOOGLE" class="submit">
            </form> 
        </section>
    </v-app>
</template>

<style lang="scss" scoped>
#log-in{
    width: 100%;
    max-height: inherit;
    padding: 10vh 0 0 7vh;
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
label{
    color:cornflowerblue; 
}
#submit{
    color:#fff;
    background: cornflowerblue;
    width: 85%;
    height: 6vh;
    border: 2px solid rgb(218, 177, 67);
    border-radius: 25px;
    margin: 19vh 0 0 0;
}
.submit{
    opacity: 0.8;
    border: 2px solid cornflowerblue;
    border-radius: 25px;
    height: 6vh;
    width: 85%;
    text-align: center;
    color:cornflowerblue;
    margin: 12px 0 0 0;
    font-size: 10px;
}

</style>