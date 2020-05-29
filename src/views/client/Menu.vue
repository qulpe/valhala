<template>
    <section id="Settings">
        <ul>
        <router-link to="/Profile"><li>Profile</li></router-link>
        <router-link to="/Appointments"><li>Appointments</li></router-link>
        <router-link to="/Chat"><li>Chat</li></router-link>
        <router-link to="/Forums"><li>Forums</li></router-link>
        <router-link to="/About"><li>About</li></router-link>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
#Settings{
    width: 100%;
    height: 100%;
    padding: 19vh 0 0 4.3vh;
}
li{
    @include menu-button;
    margin: 3vh 0 0 0;
    padding: 1vh 0 0 0;  
}
a{
    text-decoration: none !important;
}
ul {
    list-style-type: none;
}
</style>