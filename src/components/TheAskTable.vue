<template>
<v-card class="mx-auto " elevation="24" height='100%'>
        <v-card-title class="justify-center">
            Ask
        </v-card-title>
        <v-card-text>
        
  <v-simple-table fixed-header  height="400px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Amount</th>
          <th class="text-left">Price</th>
          <th class="text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in ask" :key="index">
          <td>{{item[0][1]}}</td>
          <td>{{item[0][0]}}</td>
          <td>{{(item[0][0]*item[0][1]).toFixed(2)}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card-text>
  </v-card>
</v-simple-table>
</template>


<script>

export default {
  props: ["ask"],
}
</script>
<style>


</style>