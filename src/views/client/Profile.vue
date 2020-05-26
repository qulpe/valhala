<template>
     <v-container>
        <section id="profile">
        <div id="cover"></div>
        <div id="p-profile">
            <h1>Profile</h1>
        </div>
        <div id="p-content"></div>
        </section>
        <Settings />
        <v-btn>
            Settings 
        </v-btn>
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
*{
    margin: 0;
}
#profile{
    width: 100%;
    height: 900px;
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