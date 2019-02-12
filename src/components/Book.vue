<template>
    <v-card flat class="pa-3 card"> 
      <v-layout row wrap>
        <v-flex xs12>
          <v-card-title class="title">{{ title }}</v-card-title>
        </v-flex>
        <v-flex xs12 caption>
          <v-card-text class="author">{{ extractAuthors() }}</v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-img contain :src="image" class="book-image"></v-img>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
          <v-card-actions class="justify-center">  
            <select @change="alterState" v-model="selectedShelf" class="text-xs-center">
              <option value="noton">Not on shelf</option>
              <option value="wantto">Want to read</option>
              <option value="currently">Currently reading</option>
              <option value="read">Read</option>
            </select>
          </v-card-actions> 
          </div>
        </v-flex>  
      </v-layout> 
    </v-card>
</template>
<script>
export default {
  props: {
    title: String,
    author: [String, Array],
    image: {
      type: String,
      default: ""
    },
    id: String,
    index: Number,
    shelf: String
  },
  data() {
    return {
      selectedShelf: this.$props.shelf,
      bookAuthor: this.$props.author,
      bookIndex: ""
    };
  },
  methods: {
    alterState() {
      this.$store.dispatch('alterShelf', {
        id: this.id,
        selectedShelf: this.selectedShelf
      })
    },
    extractAuthors() {
      let authors = [].concat(this.bookAuthor || 'N/A').join(', ')
      if (this.bookAuthor === undefined) {
        this.bookAuthor = "N/A";
      } else if (this.bookAuthor.length > 0 && this.bookAuthor.length >= 2 && this.bookAuthor !== "N/A") {
        return this.bookAuthor.join(", ");
      } else if (this.bookAuthor.length === 1) {
        return this.bookAuthor[0];
      }
    },

  }
};
</script>
<style scoped>
.author {
  height: 80px;
  font-size: 13px;
}

.book-image {
  height: 272px;
}
.card {
  height: 100%;
}
.title {
  display: block;
  height: 157px;
  text-overflow: ellipsis;
  /*white-space: nowrap;*/
  overflow: hidden;
}
</style>
