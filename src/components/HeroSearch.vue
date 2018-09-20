<template>
    <div id="search-component">
    <h4>Hero Search</h4>
    
    <input id="search-box" v-model.trim="searchTerm" v-on:keyup="search()" />
    
    <ul class="search-result">
        <li v-for="hero in heroes" :key="hero.id" >
            <router-link :to="{name: 'Detail', params: {id: hero.id}}">
                {{hero.name}}
            </router-link>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { heroService } from '@/services/hero.service';
import { Hero } from '@/hero.model';
@Component({
    name: 'hero-search'
})
export default class HeroSearch extends Vue {
    searchTerm = '';
    heroes: Hero[] = [];

    search() {
        if(this.searchTerm.length) {
            this.heroes = heroService.getHeroes().filter(hero => hero.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    }
}
</script>

<style>
/* HeroSearch private styles */
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width:195px;
  height: 16px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607D8B;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>

