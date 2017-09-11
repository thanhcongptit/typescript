"use strict";
var getBonus = function (bonus) {
    if (bonus === void 0) { bonus = 10; }
    console.log(bonus * 5);
};
var bonus1 = function () { return 5; };
var bonus2 = function (bonus) {
    if (bonus === void 0) { bonus = 5 * bonus1(); }
    console.log(bonus);
};
console.log(getBonus());
console.log(getBonus(3));
console.log(bonus2());
//# sourceMappingURL=lesson10.js.map