import { Hero } from '@/hero.model';
import { HEROES } from '@/mock-heroes';

class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }

    getHero(id: number): Hero | undefined {
        return HEROES.find((hero) => hero.id === id);
    }

    addHero(name: string) {
        name = name.trim();
        if (name) {
            const id = HEROES[HEROES.length - 1].id + 1;
            HEROES.push({ name, id });
        }
    }

    deleteHero(id: number) {
        if (!id) return;
        HEROES.splice(HEROES.findIndex((hero) => hero.id === id), 1);
    }

    updateHero(hero: Hero) {
        if (!hero) return;
        const newHero = this.getHero(hero.id);
        if (newHero) newHero.name = hero.name;
    }

 }

export const heroService = new HeroService();
