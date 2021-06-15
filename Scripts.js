let superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]


//  OPDRACHT 1................................................................................
//  OPDRACHT 1................................................................................


// let superheroNames = superheroes.map(function (person) {
//     return person.name
// })

//  OF VIA =>........................................
//  OF VIA =>........................................

// let superheroNames = superheroes.map(element => element.name);

// console.log(superheroNames)


//  OPDRACHT 2................................................................................
//  OPDRACHT 2................................................................................


// let superheroLights = superheroes.filter(function (element1) {
//     return element1.weight <= 190;
// })
// console.log(superheroLights)


//  OF VIA =>........................................
//  OF VIA =>........................................

// superheroLights = superheroes.filter(element1 => element1.weight <= 190);

// console.log(superheroLights)


//  OPDRACHT 3................................................................................
//  OPDRACHT 3................................................................................


// superhero200 = superheroes.filter(element1 => element1.weight == 200);

// console.log(superhero200)

// let superhero200Names = superhero200.map(function (element2) {
//     return element2.name
// })

// console.log(superhero200Names)


//  OPDRACHT 4................................................................................
//  OPDRACHT 4................................................................................


// let superheroesFirst = superheroes.map(function (person4) {
//     return person4.first_appearance
// })

// console.log(superheroesFirst)


//  OF VIA =>........................................
//  OF VIA =>........................................

// let superheroesFirst = superheroes.map(person4 => person4.first_appearance)

// console.log(superheroesFirst)


//  OPDRACHT 5.1................................................................................
//  OPDRACHT 5.1................................................................................


// superheroesDC = superheroes.filter(element => element.publisher == 'DC Comics' ).map(element1 => element1.name) 

// console.log(superheroesDC)


//  OPDRACHT 5.2................................................................................
//  OPDRACHT 5.2................................................................................


// superheroesMarvel = superheroes.filter(element1 => element1.publisher == "Marvel Comics").map(element2 => element2.name)

// console.log(superheroesMarvel)


//  TESTEN VAN ANDERE OPTIES........................................
//  TESTEN VAN ANDERE OPTIES........................................

// let alterego = superheroes.filter(element2 => element2.alter_ego).filter(element3 => element3.weight < 200).filter(element4 => element4.publisher == "Marvel Comics").map(element3 => element3.name)

// console.log(alterego)

// let superheroSpiderPeter = superheroes.filter(element => element.publisher == "Marvel Comics").filter(element => element.weight <= 200).map(element => element.name)
// console.log(superheroSpiderPeter)


//  OPDRACHT 6................................................................................
//  OPDRACHT 6................................................................................


// let superheroesTotalWeight = superheroes.filter(element => element.weight)

// console.log(superheroesTotalWeight)

// let superheroesTotalWeight = superheroes.reduce((element, item) =>
// { return item + element }
// )

// console.log()


// let heroesDC = superheroes.filter(element => element.publisher == "DC Comics")

// console.log(heroesDC)

// const heroesDCTotalWeight = heroesDC.map(element => { return  parseInt(element.weight, 10)})
//     .reduce((currentTotal, heroWeight) => currentTotal + heroWeight);

// console.log(heroesDCTotalWeight)


// const heroesDCTotalWeight = heroesDC.map(element => { return parseInt(element.weight, 10) })
//     .reduce((currentTotal, superheroWeight) => superheroWeight + currentTotal);

// console.log(heroesDCTotalWeight)


//  OPDRACHT 7................................................................................
//  OPDRACHT 7................................................................................


// let heroesMarvel = superheroes.filter(element => element.publisher == "Marvel Comics")

// console.log(heroesMarvel)

// let heroesMarvelTotalWeight = heroesMarvel.map(hero => { return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0; })
//     .reduce((currentHeroWeight, nextHero) => currentHeroWeight + nextHero);

// console.log(heroesMarvelTotalWeight)


//  OPDRACHT 8................................................................................
//  OPDRACHT 8................................................................................


let heaviestHero = superheroes.map(hero => { return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0; })
    .reduce(function (previousLargestNumber, currentLargestNumber) {

        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0)

console.log(heaviestHero)

let heaviestHeroName = heaviestHero.map(element => element.name);

console.log(heaviestHeroName)
