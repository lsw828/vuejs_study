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
    {{ pic_id }}
  </div>
</template>

<script>
export default {
  name: 'picCard',
  props: ['cardObj'],
  data() {
    return {
      pic_id: null,
      isCover: false,
      coverImgUrl: "https://pds.joins.com/news/component/htmlphoto_mmdata/201911/19/ce877ed2-0800-457f-b9a6-a86044718d40.jpg",
      srcUrl: null,
      lazySrcUrl: null,
    }
  },
  created() {
    console.log("[picCard.vue] created()", this.cardObj.pic_id, this.cardObj.isCover)

    this.pic_id = this.cardObj.pic_id
    this.isCover = this.cardObj.isCover

    this.srcUrl = "https://picsum.photos/200/120?image=" + this.pic_id
    this.lazySrcUrl = "https://picsum.photos/20/12?image=" + this.pic_id
  },
  methods: {
    clicked() {
      this.isCover = !this.isCover
      
      var cardObj = {}
      cardObj["pic_id"] = this.pic_id
      cardObj["isCover"] = this.isCover
      this.$emit("selCardObj", cardObj)

      if(this.isCover) {
        this.srcUrl = this.coverImgUrl
        this.lazySrcUrl = this.coverImgUrl
      } else {
        this.srcUrl = "https://picsum.photos/200/120?image=" + this.pic_id
        this.lazySrcUrl = "https://picsum.photos/20/12?image=" + this.pic_id
      }
    }
  },
}
</script>