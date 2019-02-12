<template>
    <v-container fluid grid-list-md>
      <v-layout>
        <v-flex xs12>
        <input v-model="searchWord" v-on:keyup.enter="bookSearch" type="text" placeholder="Search for book..." class="search-input">
            <v-btn v-on:click="bookSearch"
              :loading="loading"
              :disabled="loading"
              color="secondary">Search
            </v-btn>
        </v-flex>  
      </v-layout>
        <v-layout v-if="getResult.length > 0" row wrap class="all-search-result">  
        <v-flex v-for="book in getResult" :key="book.id" xs6 md4 lg2>
          <my-book
            :author="book.volumeInfo.authors" 
            :title="book.volumeInfo.title"
            :image="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'images/placeholder.jpg' "
            :id="book.id"
            :index="book.index"
            :shelf="book.selectedShelf">
            </my-book>
        </v-flex>
        </v-layout> 
        <v-layout v-else> 
        <v-flex x12>
          {{ getMessage }}
        </v-flex>
      </v-layout>  
    </v-container>
</template>
<script>
import Book from "./Book.vue";

export default {
  components: {
    "my-book": Book
  },
  data() {
    return {
      loading: false,
      searchWord: ""
    };
  },
  methods: {
    bookSearch() {  
      this.$store.commit('setSearchWord', this.searchWord);
      this.$store.dispatch('getBooksFromApi');
    }
  },
  computed: {
    getResult: function() {
      return this.$store.getters.getSearchResults;
    },
    getMessage: function() {
      return this.$store.getters.getMessage;
    }
  }
}
</script>
<style scoped>
ol {
  list-style: none;
}

.all-search-result {
  justify-content: center;
}

.search-input {
  border: 2px solid gray;
  border-radius: 8px;
  padding: 10px;
  outline-style:none;
  box-shadow:none;
  border-color:transparent;
}
</style>
