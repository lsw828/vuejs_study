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
        @click="startGame">Game Start</v-btn>
      try = {{ tryCount }}
    </div>
  </div>
</template>

<script>
import picCard from "@/components/picCard"
import { mapState, mapActions } from 'vuex'
import { eventBus } from "@/main"

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

    startGame() {
      eventBus.$emit("allCardsBack")

      this.shuffleCards()
    },
  },
  created() {
    this.initCards()
  }
}
</script>