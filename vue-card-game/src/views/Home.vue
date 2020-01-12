<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          v-for="obj in cardObjArr"
          :key="obj.pic_id"
          cols="12"
          sm="3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <picCard 
              v-bind:cardObj="obj"
              @selCardObj="selectCard"
            ></picCard>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <div class="ma-2">
      <v-btn rounded color="primary" dark 
        @click="shuffleCards">Shuffle</v-btn>
      <b>selected card = {{ selectedPicId }}</b>
    </div>
  </div>
</template>

<script>
import picCard from "@/components/picCard"

export default {
  name: 'home',
  components: {
    picCard
  },
  data () {
    return {
      pic_ids : [
        1015, 1040, 1080, 881,
        901, 434, 441, 478,
        249, 265, 299, 646
      ],
      /*
      pic_ids : [
        1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12
      ],
      */
      cardObjArr : [],
      selectedPicId : null
    }
  },
  methods : {
    shuffleCards() {
      this.cardObjArr.sort(function(){return 0.5 - Math.random()})
    },
    selectCard(cardObj) {
      console.log("[Home.vue] selectedCard()", cardObj)
      this.selectedPicId = cardObj.pic_id
    }
  },
  created() {
    var i = 0
    for (i = 0; i < this.pic_ids.length; i++) {
      var cardObj = {}
      cardObj["pic_id"] = this.pic_ids[i]
      cardObj["isCover"] = false

      this.cardObjArr.push(cardObj)
    }

    this.shuffleCards()
  }
}
</script>
