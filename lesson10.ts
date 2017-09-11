var getBonus = function(bonus = 10) {
    console.log(bonus * 5);
}

var bonus1 = () => 5;

var bonus2 = function(bonus = 5 * bonus1()) {
    console.log(bonus);
}

console.log(getBonus());
console.log(getBonus(3));
console.log(bonus2());