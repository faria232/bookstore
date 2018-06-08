<template>
  <div id="app">
  <div>
    <h1>Booklist</h1>
    <p>Enter your books in the list</p>
    <div class="row" v-for="book in books" :key="book.title">
        <div class="col-md-2"><img class="bookcover" :src="book.image"> </div>
        <div class="col-md-10"><h3>{{book.title}}</h3></div>
    </div>
    <input type="text" v-model="books"/>
    <button @click="submitBook()">Add</button>
  </div>
  </div>
</template>

<script>
import { bookRef } from './firebase';
export default {
  name: 'app',
  data () {
    return {
    books: [

        {
            title: 'Sapiens A Breif History Of Humnakind',
            image: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Sapiens_A_Brief_History_of_Humankind.jpg',
            genre: 'Non-fiction, science'
        },

        {
            title: 'The Double Helix',
            image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS1cSDXrS1F84avQguLNervso14uKUYRWjagRdhvvIef-g7PSE3',
            genre: 'Non-fiction, science'
        }
    ]
    }

  },
    methods:{
        submitBook(){
            bookRef.push ({title: this.title, image: this.image, genre: this.genre})

        }

    }
}
</script>

<style>
    @import './assets/custom.css';
</style>
