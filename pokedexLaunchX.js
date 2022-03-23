const nombrePokemon = document.getElementById("nombrePokemon");
const tipoPokemon = document.getElementById("tipoPokemon");
const idPokemon = document.getElementById("idPokemon");
const alturaPokemon = document.getElementById("alturaPokemon");
const pesoPokemon = document.getElementById("pesoPokemon");

const hpPokemon = document.getElementById("hpPokemon");
const atkPokemon = document.getElementById("atkPokemon");
const defPokemon = document.getElementById("defPokemon");
const satkPokemon = document.getElementById("satkPokemon");
const sdefPokemon = document.getElementById("sdefPokemon");
const spdPokemon = document.getElementById("spdPokemon");



const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != 200) {
            pokeImage("./images/pikachu-sad.png")
        } else {
            return res.json();
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        imprimirCaracteristicas(data);
        imprimirEstadisticas(data);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const imprimirCaracteristicas = (data) => {
        nombrePokemon.innerText = data.name.toUpperCase();
        tipoPokemon.innerText = "";

        for (let i = 0; i < data.types.length; i++) {
            const type = document.createElement("span");
            type.classList.add("tipoPokemon");
            tipoPokemon.appendChild(type);

            type.innerText = data.types[i].type.name;
        }
        idPokemon.innerText = data.id;
        alturaPokemon.innerText = data.height;
        pesoPokemon.innerText = data.weight;
    }
    // pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

/* const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput)
} */