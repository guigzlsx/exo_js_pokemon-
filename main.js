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
}

let poke1 = new Pokemon("Pikachu", 5, 4, 1, 0.1);
let poke2 = new Pokemon("Ronflex", 3, 5, 4, 0.7);

while (poke1.hp > 0 && poke2.hp > 0) {
  console.log("salut");
  if (poke1.isLucky()) {
    poke1.attakPokemon(poke2);
  } else {
    console.log("passe ton tour frerot");
    break;
  }
}

// poke2.result();
