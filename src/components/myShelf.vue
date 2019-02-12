<template>
  <v-container grid-list-md v-if="$store.state.myBooks.length > 0">{{ currentlyReading }}
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Books I want to read</h1>
        </v-flex>  
        <v-flex xs12 md4 lg2 class="want-to" v-for="book in wantToRead" :key="book.id" >
            <my-book
            :author="book.volumeInfo.authors" 
            :title="book.volumeInfo.title"
            :image="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'images/placeholder.jpg' "
            :id="book.id"
            :index="book.index"
            :shelf="book.selectedShelf"></my-book>
            {{ currentShelf }}
        </v-flex>
        <v-flex xs12>
           <h1>Books I read</h1>
        </v-flex>  
        <v-flex xs12 md4 lg2 class="read" v-for="book in alreadyRead" :key="book.id">
           <my-book
            :author="book.volumeInfo.authors" 
            :title="book.volumeInfo.title"
            :image="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'images/placeholder.jpg' "
            :id="book.id"
            :index="book.index"
            :shelf="book.selectedShelf"></my-book>
            {{ currentShelf }}
        </v-flex>
         <v-flex xs12>
           <h1>Books I'm currently reading</h1>
        </v-flex>  
        <v-flex xs12 md4 lg2 class="currently"  v-for="book in currentlyReading" :key="book.id">
              <my-book
            :author="book.volumeInfo.authors" 
            :title="book.volumeInfo.title"
            :image="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'images/placeholder.jpg' "
            :id="book.id"
            :index="book.index"
            :shelf="book.selectedShelf"></my-book>
            {{ currentShelf }}
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import Book from "./Book.vue";
export default {
  data() {
      return {
      currentShelf: "",
     }
  },
  components: {
    "my-book": Book
  },
  watch: {
    '$store.state': {
      handler() { console.log('myBooks changed') },
      deep: true
    }
  },
  computed: {
    currentlyReading: {
      get () {
      return (this.$store.state.myBooks || []).filter(function(book) {
        if (book.selectedShelf === "currently") {
          console.log(book.currentShelf)
          return book
        }
      })
    }
    },
    wantToRead: 
  {
    get () {
      return (this.$store.state.myBooks || []).filter(function(book) {
        if (book.selectedShelf === "wantto") {
          console.log(book.currentShelf)
          return book
        }
      })
    }
    },
     alreadyRead: function() {
      return (this.$store.state.myBooks || []).filter(function(book) {
        if (book.selectedShelf === "read") {
          console.log(book.currentShelf)
          return book
        }
      })
    } 
  }
};
</script>
