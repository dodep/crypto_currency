
<template>
  <v-app>
    <TheNavbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'
export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  },
  
};
</script>