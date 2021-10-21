

const favoriteColor = ['teal', 'purple', 'black', 'sage', 'pink'];
favoriteColor.push('green');
console.log(favoriteColor);
favoriteColor.splice(2, 1);
console.log(favoriteColor);
const colorList = favoriteColor.join (',');
console.log(colorList);