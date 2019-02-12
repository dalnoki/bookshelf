import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// Subscribe to store updates
const mySubscribe = function(store) {
    store.subscribe((mutation, state) => {
        // Store the state object as a JSON string
   //  localStorage.setItem('store', JSON.stringify(state));
})
};

export const store = new Vuex.Store({
    state: {
      searchResult: [],
      searchWord: "",
      myBooks: [],
      alertMessage: ""
    },
    getters : {
        getSearchResults: state => state.searchResult,
        getMyBooks: state => state.myBooks,
        getMessage: state => state.alertMessage
    },
    mutations: {
        alterShelf(state, payload) {
            for (let item of state.searchResult) {
                if (item.id === payload.id) {
                    item.selectedShelf = payload.selectedShelf;
                    store.commit("addToMyBooks", item)
                }
            }
                    
            for (let book of state.myBooks) {
                if (book.id === payload.id) {
                    book.selectedShelf = payload.selectedShelf;
                    if (payload.selectedShelf === "noton") {
                        let index = state.myBooks.indexOf(item)
                        if (index > -1) {
                            state.myBooks.splice(index, 1);
                        } 
                    }
                }
            }
                console.log(store.state.myBooks)
                console.log(store.state.searchResult)
            
        },
        setShelf(state, payload) {
            for (let item of state.searchResult) {
                if (item.id === payload.id) {
                    item.selectedShelf = payload.selectedShelf;
                    store.commit("addToMyBooks", item)
                }
            }
            for (let book of state.myBooks) {
                if (book.id === payload.id) {
                    book.selectedShelf = payload.selectedShelf;
                    if (payload.selectedShelf === "noton") {
                        let index = state.myBooks.indexOf(item)
                        if (index > -1) {
                            state.myBooks.splice(index, 1);
                        } 
                    }
                }
            }
        },
        setSearchWord(state, payload){ 
            state.searchWord = payload;
        },
        initialiseStore(state) {
			// Check if ID exists
			if(localStorage.getItem('store')) {
//				this.replaceState(
//					Object.assign(state, JSON.parse(localStorage.getItem('store')))
//				);
			}
        },
        mutateSearchResult(state, payload) {
            state.searchResult.splice(0, state.searchResult.length, ...payload);
        },
        addToMyBooks(state, payload) {
            if (state.myBooks.indexOf(payload) === -1) {
                state.myBooks.push(payload);
            }

            for (let item of state.myBooks) {
                if (item.selectedShelf === "noton") {
                    let index = state.myBooks.indexOf(item)
                    if (index > -1) {
                        state.myBooks.splice(index, 1);
                    }

                }
        }
    }

    },
    actions: {
        alterShelf(context, payload) {
            store.commit("setShelf", payload)
        },

        getBooksFromApi(context) {
       
            axios
            .get(
            `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchWord}&maxResults=40&startIndex=100`
            )
            .then(response => {
                if (response.data.items) { 
                    console.log(response)
                    context.commit('mutateSearchResult', response.data.items)
                    for (let item of this.state.searchResult) {
                        item.selectedShelf = "noton";
                        item.index = this.state.searchResult.indexOf(item);
                    }
                } else {
                    store.state.alertMessage = "Sorry, couldn't find anything :("
                    store.state.searchResult = []
                }
                });
        }
    },
   plugins: [mySubscribe]
});

