"use strict";
class Personaje {
    constructor(id, name, level, _hp) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
    }
    upLevel() {
        this.level = this.level + 1;
        return this.level;
    }
    static agregatePersonaje() {
        Personaje.equipo++;
    }
    changeHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 0;
const personaje = new Personaje(1, 'Fecho', 1, 100);
Personaje.agregatePersonaje();
personaje.changeHp(-10);
personaje.hp = 20;
const personaje2 = new Personaje(2, 'Kevin', 1, 120);
Personaje.agregatePersonaje();
if (personaje instanceof Personaje) {
    console.log(personaje, personaje2, Personaje.getEquipo());
}
//# sourceMappingURL=index.js.map