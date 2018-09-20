<template>
    <div v-if="hero">
        <h2>{{hero.name | capitalize}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <div>
            <label>name:
                <input v-model="heroName" placeholder="name">
            </label>
        </div>
        <button v-on:click="goBack()">go back</button>
        <button v-on:click="save()">save</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Hero } from '@/hero.model';
import { heroService } from '../services/hero.service' 

@Component({
    name: 'hero-detail',
    filters: {
        capitalize: (value: string) => {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },
})
export default class HeroDetail extends Vue {
   hero: Hero | undefined = undefined;
   heroName = '';

    created() {
        this.hero = heroService.getHero(+this.$route.params.id);
        this.heroName = this.hero ? this.hero.name : '';
    }

    save() {
        if(this.hero) {
            heroService.updateHero({id : this.hero.id, name: this.heroName})
        }
    }

    goBack() {
    window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
}
</script>

<style scoped>
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>


