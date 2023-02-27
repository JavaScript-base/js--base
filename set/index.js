const s1 = new Set();
console.log(s1);

// 传入迭代器 iteritor 
const s2 = new Set('12345622');
console.log(s2);

// 使用object.is 判断两个数据是否相同，单独针对-0和0 认为是相等的；
s1.add(2);
s1.add(2);
s1.add(1);
s1.add(-0);
s1.add(-1);
s1.add(-1);
console.log(s1);

// has
console.log(s1.has(-0));
console.log(s1.has(0));

// delete
s1.delete(-0);
console.log(s1);

// clear
s1.clear();
console.log(s1);

// size
console.log(s1.size);

// error
// const s3 = new Set({a:1, b:2});
// console.log(s3);
// const s4 = new Set(1);
// console.log(s4);

const s5 = new Set([1,2,3,45]);
console.log(s5);
const array5 = [...s5];
console.log(array5);

// 数组驱虫
const arr = [1,2,3,1,2,3,4];
const s6 = [...new Set(arr)];
console.log(s6);

const arr6 = ['123', 1, '12', 1, '123'];
console.log([...new Set(arr6)]);

const arr7 = ['123', [1], '12', 1, '123'];
console.log([...new Set(arr7)]);

const arr8 = [{a: '123'}, [1], '12', 1, {a: '123'}];
console.log([...new Set(arr8)]);

// 遍历
// for of
for (const s of new Set([1,2, 4,2,0])) {
    console.log(s);
}

// foreach
s6.forEach((item ,i , data) => {
    console.log(item, i, data);
})