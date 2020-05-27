<template>
     <v-container class="pa-0">
        <section id="profile">
        <div id="cover"></div>
        <div id="p-profile">
            <h1>Profile</h1>
        </div>
        <div id="p-content"></div>
        
        <Settings />
        <butto class="button">
            Settings 
        </butto>
      
    <img src="../../assets/animations/image00001.png" alt="" id="id">
        </section>
    </v-container>
</template>

<script>
import Settings from '@/components/ui/Settings.vue';

    export default {
        components: {
            Settings
        }
    }
</script>

<style lang="scss" scoped>

#profile{
    width: 100%;
    height: 900px;
    background-color: blue;
}
#id{
    width: 100%;
    height: 30vh;
}
#cover{
    height: 30%;
    width: 100%;
    background: url('../../assets/back-about.png');
    overflow: hidden;
}
#p-profile{
    clip-path: circle(50% at 50% 50%);
    background-color: yellow;
}
</style>