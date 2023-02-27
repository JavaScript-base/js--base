console.log(Number(324));
console.log(Number('234'));
console.log(Number('2312sd'));
console.log(Number('0'));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(NaN));
console.log(Number(null));
console.log(Number({a: 2}));
console.log(Number([1,2,3]));
console.log(Number([1]));

let dd = {a:2,f:4}
console.log(dd.valueOf().toString());