class Pokemon {
  constructor(name, attak, defense, hp, luck) {
    this.name = name;

    this.attak = attak;

    this.defense = defense;

    this.hp = hp;

    this.luck = luck;
  }
  // result() {
  //   console.log(
  //     this.name + " n'a plus que " + poke2.attakPokemon + " point de vie"
  //   );
  // }

  isLucky() {
    return Math.random() < this.luck;
  }

  attakPokemon(adversaire) {
    let resthp = adversaire.hp - this.attak;
    console.log(this.name + " n'a plus que " + resthp + " point de vie");
  }
  isdead(adversaire) {
    let mort = (poke1.hp = 0);
    console.log(this.name + " est mort");
  }
}

let poke1 = new Pokemon("Pikachu", 5, 4, 20, 0.8);
let poke2 = new Pokemon("Ronflex", 3, 5, 12, 0.7);

while (poke1.hp > 0 && poke2.hp > 0) {
  console.log("Attaque enfoire");
  if (poke1.isLucky()) {
    poke1.attakPokemon(poke2);
  } else {
    poke1.isdead(poke2);
    break;
  }
  if (poke2.isLucky()) {
    poke2.attakPokemon(poke1);
  } else {
    poke1.isdead(poke1);
    break;
  }
}

// poke2.result();
