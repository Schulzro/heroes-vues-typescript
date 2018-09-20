<template>
    <div>
        <h2>My Heroes</h2>
        <div>
        <label>Hero name:
            <input v-model="heroName" />
        </label>
        <!-- (click) passes input value to add() and then clears the input -->
        <button v-on:click="add(); heroName=''">
            add
        </button>
        </div>
        <ul class="heroes">
            <li v-for="hero in heroes" :key="hero.id">
                <router-link :to="{name: 'Detail', params: {id: hero.id}}">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </router-link>
                <button class="delete" v-on:click="deleteHero(hero.id)" alt="delete hero">X</button>    
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Hero } from '@/hero.model';
import { HEROES } from '../mock-heroes';
import HeroDetail from './HeroDetail.vue';
import { heroService } from '../services/hero.service';

@Component({
    name: 'heroes',
})
export default class Heroes extends Vue {
    heroes: Hero[] = [];
    heroName = '';
    hero: Hero = {
        id: 0,
        name: 'windstorm',
    };

    created() {
        this.heroes = heroService.getHeroes();
    }

    add() {
        heroService.addHero(this.heroName);
    }

    deleteHero(id: number) {
        heroService.deleteHero(id);
    }
}
</script>

<style>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 0em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -28px;
  background-color: gray !important;
  color: white;
}
</style>

