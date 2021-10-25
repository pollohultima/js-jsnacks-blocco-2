/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bikes = [
    {
        brand: 'Olympia',
        weight: 7,
    },

    {
        brand: 'Bianchi',
        weight: 8,
    },

    {
        brand: 'Specialized',
        weight: 6,
    },

    {
        brand: 'Btwin',
        weight: 10,
    }
]

console.log(bikes);

//bici di riferimento
let light = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    //confronta le bici
    if (bike.weight < light.weight) {
        light = bike
    }

}
document.querySelector('.lightest').innerHTML = `La bici più leggera è: ${light.brand} e pesa ${light.weight}`
console.log(light);