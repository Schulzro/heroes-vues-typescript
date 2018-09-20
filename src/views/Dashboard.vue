<template>
    <div>
            <h3>Top Heroes</h3>
            <div class="grid grid-pad">
                <router-link id='link' v-for="hero in heroes" :key="hero.id" class="col-1-4" :to="{name: 'Detail', params: {id: hero.id}}">
                    <div class="module hero">
                        <h4>{{hero.name}}</h4> 
                    </div>
                </router-link>
            </div>
        <hero-search></hero-search>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Hero } from '@/hero.model';
import HeroSearch from '../components/HeroSearch';
import { heroService } from '../services/hero.service';
@Component({
    name: 'dashboard',
    components: {
        HeroSearch,
    },
})
export default class Dashboard extends Vue {
    heroes: Hero[] = [];

    created() {
        this.heroes = heroService.getHeroes().slice(1, 5);
    }
}
</script>

<style>
/* DashboardComponent's private CSS styles */
[class*='col-'] {
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
#link {
  text-decoration: none;
}
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h3 {
  text-align: center; margin-bottom: 0;
}
h4 {
  position: relative;
}
.grid {
  margin: 0;
}
.col-1-4 {
  width: 25%;
}
.module {
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #607D8B;
  border-radius: 2px;
}
.module:hover {
  background-color: #EEE;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px; }
}
@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
  .module {
    min-width: 60px;
  }
}
</style>


