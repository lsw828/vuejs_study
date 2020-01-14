<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          v-for="obj in cardObjArr"
          :key="obj.id"
          cols="12"
          sm="3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <picCard 
              :cardObj="obj"
            ></picCard>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <div class="ma-2">
      <v-btn rounded color="primary" dark 
        @click="shuffle">Shuffle</v-btn>
      try = {{ tryCount }}
      <v-btn rounded color="primary" dark 
        @click="myTest">test</v-btn>
    </div>
  </div>
</template>

<script>
import picCard from "@/components/picCard"
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    picCard
  },
  computed: {
    ...mapState(['cardObjArr', 'tryCount']),
  },
  methods : {
    ...mapActions(['initCards', 'shuffleCards']),

    shuffle() {
      this.shuffleCards()
    },
    myTest() {
      var i = 0
      for(i = 0; i<this.cardObjArr.lengthj; i++) {
        this.cardObjArr[i].isCover = true 
      }
    }
  },
  created() {
    this.initCards()

    this.shuffleCards()
  }
}
</script>