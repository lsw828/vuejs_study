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

      this.actionClick(this.cardObj)

      var frontCardCnt = this.getFrontCardCount()
      console.log("frontCardCnt = ", frontCardCnt)

      if (frontCardCnt === 0) {
        this.cardObj.isCover = !this.cardObj.isCover
        this.flipCard()
      } else if (frontCardCnt === 1) {
        this.cardObj.isCover = !this.cardObj.isCover
        this.flipCard()
        
        if( this.isMatched() ) {
          if( this.isGameFinish() ) {
            const sleep = (milliseconds) => {
              return new Promise(resolve => setTimeout(resolve, milliseconds))
            }
            sleep(500).then(() => {
              alert("Congratulation!", this.tryCount)
            })
          }
        }
      } else if (frontCardCnt === 2) {
        eventBus.$emit("allCardsBack")

        this.cardObj.isCover = !this.cardObj.isCover
        this.flipCard()
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
    },
    getFrontCardCount() {
      var count = 0
      for(var i = 0; i < this.cardObjArr.length; i++) {
        var card = this.cardObjArr[i]
        if( !card.isDone && !card.isCover ) {
          count++
        }
      }
      return count
    },
    isGameFinish() {
      for(var i = 0; i < this.cardObjArr.length; i++) {
        var card = this.cardObjArr[i]
        if( card.isDone === false ) {
          break
        }
      }
      return ( i === this.cardObjArr.length )
    },
    isMatched() {
      var i = 0, j = 0
      var idx = [ -1, -1 ]
      for(i = 0; i < this.cardObjArr.length; i++) {
        var card = this.cardObjArr[i]
        if( !card.isDone && !card.isCover ) {
          idx[j++] = i
          if( j == 2 ) {
            break
          }
        }
      }

      if( (idx[0] === -1) || (idx[1] === -1) ) {
        return false
      }

      if( this.cardObjArr[idx[0]].pic_id === this.cardObjArr[idx[1]].pic_id ) {
        console.log("two cards are matched!", idx[0])
        this.cardObjArr[idx[0]].isDone = true
        this.cardObjArr[idx[1]].isDone = true

        return true
      }

      return false
    }
  },
}
</script>