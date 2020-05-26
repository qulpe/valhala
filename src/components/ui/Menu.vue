<template>
    <div id="Settings">
          <ul>
      <router-link to="/About"><li>About</li></router-link>
      <router-link to="/Appointments"><li>Appointments</li></router-link>
      <router-link to="/Buddy"><li>Buddy</li></router-link>
      <router-link to="/Doctors"><li>Doctors</li></router-link>
      <router-link to="/Forums"><li>Forums</li></router-link>
      <router-link to="/Health-status"><li>Health-status</li></router-link>
      <router-link to="/Login"><li>Log-in</li></router-link>
      <router-link to="/Menu"><li>Menu</li></router-link>
      <router-link to="/Getting-started"><li>Presentation</li></router-link>
      <router-link to="/Profile"><li>Profile</li></router-link>
      <router-link :to="{ path: '/Settings'}"><li>Settings</li></router-link>
    </ul>

    </div>
</template>

<style lang="scss" scoped>


#Settings{
    background-color: blue;
}

</style>