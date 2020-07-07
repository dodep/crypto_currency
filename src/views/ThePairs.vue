<template>
<v-container fill-height>
    <v-row justify="center" align="center">
        <v-col cols="12">
        <div class="text-center">
            <div>
            {{this.currentPair}}
            </div>
            <v-menu >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Pairs
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="getPair(item)"
                >
                <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>

        </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
      computed: {
          ...mapGetters({
              currentPair:"getPair"
          })
      },
      methods: {
          ...mapActions({
            fetchDomInfo:'fetchDomInfo'
        }),
        ...mapMutations({
            emptyAsk:"setDomAskEmpty",
            emptyBid:"setDomBidEmpty",
            setCurrentPair:"setPair"
        }),
          getPair(pair){
              this.setCurrentPair(pair)
              this.fetchDomInfo(pair.toLowerCase())
              this.emptyAsk()
              this.emptyBid()
              this.$router.push('/')
          },
      },
    data: () => ({
      items: ['BTCUSDT','BNBBTC','ETHBTC']
    }),
  }
</script>
