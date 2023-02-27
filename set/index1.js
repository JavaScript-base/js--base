// set 的应用
// 1. 数组的操作，包括求数组的交集、并集、差集，数组的驱虫
const arr1 = [1,2,4];
const arr2 = [1,1,4,3];

// 并集
console.log([...new Set(arr1.concat(arr2))]);

// 交集
const s1 = new Set(arr1);
const s2 = new Set(arr2);
console.log([...s1].filter((item) => s2.has(item)));

// 差集
console.log([...s1].filter((item) => !s2.has(item)).concat([...s2].filter((item) => !s1.has(item))));
