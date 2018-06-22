<template>
  <div id="app">
  <div>
    <h1>Booklist</h1>
    <p>Enter your books in the list</p>
    <div class="row" v-for="book of books" :key="book.title">
        <div class="col-md-2"><img class="bookcover" :src="book.image"> </div>
        <div class="col-md-10"><h3>{{book.title}}</h3></div>
    </div>
    <input type="text" v-model="book.title"/>
    <button @click="submitBook()">Add</button>
    <div>
      <ul>
        <li v-for="book of submitBook" v-bind:key="book['.key']">{{book.title}}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { dbref } from './firebase';
export default {
  name: 'app',
  data () {
      dbref: null
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
            this.dbref.push ({title: this.title});
            this.title = '';
        }

    }
}
</script>

<style>
    @import './assets/custom.css';
</style>
