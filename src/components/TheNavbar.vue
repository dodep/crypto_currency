<template>
<div>
  <v-app-bar app dense color="primary" class="white--text">
   <v-spacer></v-spacer>
    <v-btn class="ml-2" color="white" outlined to="/">
                DOM
            </v-btn>
            <v-btn class="ml-2" color="white" outlined to="/pairs">
                Pairs
            </v-btn>
  </v-app-bar>

  
</div>
</template>
<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>