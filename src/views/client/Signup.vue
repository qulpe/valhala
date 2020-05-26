<template>
    <v-app>
    <section id="signup">
        <h2>Not a member yet?</h2>
        <h3>Create an account below!</h3><br><br>

        <form action="">    
            <input type="text" id="fname" name="fname" value="FIRST NAME">
            <input type="text" id="fname" name="fname" value="LAST NAME">
            <input type="text" id="fname" name="fname" value="example@email.com">
            <input type="password" id="fname" name="pwd" value="Password">
            <input type="password" id="fname" name="pwd" value="Password">
            <router-link to="/Profile"><input type="submit" value="LOGIN" id="submit"></router-link>
            <input type="submit" value="LOGIN WITH FACEBOOK" class="submit">
            <input type="submit" value="LOGIN WITH GOOGLE" class="submit">
        </form>
    </section>
    </v-app>
</template>

<style lang="scss" scoped>
#signup{
    height: 100%;
    width: 100%;
    text-align:center;
    padding: 10vh 0 0 0;
}
#fname{
    opacity: 0.8;
    border: 2px solid cornflowerblue;
    border-radius: 25px;
    height: 6vh;
    width: 85%;
    text-align: center;
    color:cornflowerblue;
    margin: 10px 0 0 0;
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
    margin: 12vh 0 0 0;
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