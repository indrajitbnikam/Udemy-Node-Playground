const person = {
    name: 'Indra',
    age: 24,
    greet() {
        console.log('Hi ' + this.name);
    }
}

const array = {...person, favoriteAnime: 'One Piece'};
console.log(array);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));
console.log(toArray(1, 2, 3, 4, 5));