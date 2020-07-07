<template>
  <v-container fill-height>
        <v-row>
          <v-col cols='12' class='text-center display-1 pa-0'>
              {{this.getCurrentPair}}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm='6'>
            <TheBidTable :bid="this.bidArray"/>
          </v-col>
          <v-col cols="12" sm='6'>
            <TheAskTable :ask="this.askArray"/>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TheBidTable from '../components/TheBidTable.vue'
import TheAskTable from '../components/TheAskTable.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  components: {
    TheBidTable,
    TheAskTable,
  },
  methods: {
    ...mapActions({
            fetchDomInfo:'fetchDomInfo'
        }),
  },
  mounted() {
    this.fetchDomInfo()
  },
  computed: {
    ...mapGetters({
            askArray: "getDomAsk",
            bidArray: "getDomBid",
            getCurrentPair:"getPair"
        })
  },
}
</script>