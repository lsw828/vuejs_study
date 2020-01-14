<template>
  <div>
    <v-row align="center" justify="center">
      <v-img 
        :src="srcUrl"
        :lazy-src="lazySrcUrl"
        class="grey lighten-2"
        max-width="200"
        max-height="120"
        @click="clicked()"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-row>
    {{ cardObj.pic_id }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { eventBus } from "@/main"

export default {
  name: 'picCard',
  props: ['cardObj'],
  computed: {
    ...mapState(['cardObjArr', 'tryCount']),
  },
  data() {
    return {
      coverImgUrl: "https://pds.joins.com/news/component/htmlphoto_mmdata/201911/19/ce877ed2-0800-457f-b9a6-a86044718d40.jpg",
      srcUrl: null,
      lazySrcUrl: null,
    }
  },
  created() {
    this.flipCard()

    // [RECEIVER] temporary test code
    eventBus.$on('allCardsBack', () => {
      if(!this.cardObj.isDone) {
        this.cardObj.isCover = true
        this.flipCard()
      }
    })
  },
  methods: {
    ...mapActions(['actionClick']),

    clicked() {
      if(this.cardObj.isDone) {
        return
      }
      
      this.cardObj.isCover = !this.cardObj.isCover

      this.flipCard()

      this.actionClick(this.cardObj)

      var open_card_index = 0
      var open_card = [{id:-1, pic_id:-1}, {id:-1, pic_id:-1}]
      // front card 개수가 0, 1, 2
      // isDone === false && isCover === true
      var i = 0
      for(i = 0; i < this.cardObjArr.length; i++) {
        var card = this.cardObjArr[i]
        if( (card.isDone === false) && (card.isCover === false) ) {
          open_card[open_card_index]['id'] = card['id']
          open_card[open_card_index]['pic_id'] = card['pic_id']
          open_card_index++

          if( open_card_index === 2 ) {
            break
          }
        }
      }

      console.log(open_card_index)
      console.log(open_card)

      // 2 카드가 앞면이면... 
      if( (open_card[0]['pic_id'] !== -1) && (open_card[1]['pic_id'] !== -1) ) {
        // 2 카드가 맞으면
        if( open_card[0]['pic_id'] === open_card[1]['pic_id'] ) {
          for(i = 0; i < 2; i++) {
            var id = open_card[i]['id']
            //this.cardObjArr[id]['isDone'] = true
            var j = 0
            for(j = 0; j < this.cardObjArr.length; j++) {
              var card = this.cardObjArr[j]
              if( card.id === id ) {
                card.isDone = true
              }
            }
          }
        } else {
          const sleep = (milliseconds) => {
           return new Promise(resolve => setTimeout(resolve, milliseconds))
          }

          sleep(1500).then(() => {
            // [SENDER] temporary test code
            console.log("eventBus.$emit('allCardsBack')")
            eventBus.$emit("allCardsBack")
          })
        }
      }

      // all cards => isDone === true  => alert "Congratulation!"
      for(i = 0; i < this.cardObjArr.length; i++) {
        var card = this.cardObjArr[i]
        if( card.isDone === false ) {
          break
        }
      }

      if( i === this.cardObjArr.length ) {
        alert("Congratulation!", this.tryCount)
      }
    },
    flipCard() {
      if(this.cardObj.isCover) {
        this.backCard()
      } else {
        this.frontCard()
      }
    },
    frontCard() {
      this.srcUrl = "https://picsum.photos/200/120?image=" + this.cardObj.pic_id
      this.lazySrcUrl = "https://picsum.photos/20/12?image=" + this.cardObj.pic_id
    },
    backCard() {
      this.srcUrl = this.coverImgUrl
      this.lazySrcUrl = this.coverImgUrl
    }
  },
}
</script>