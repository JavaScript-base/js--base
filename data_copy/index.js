// 浅拷贝和深拷贝
// 浅拷贝是指如果对一个复杂数据做拷贝操作，js只会简单复制引用类型的地址，不会重新开辟内存空间；这样的数据的隔离性不好；容易误操作；
// 深拷贝是指完全隔离数据，遇到引用类型的数据不会再简单复制地址，而是会重新开辟内从空间分配；

// 常见的浅拷贝的方法
let obj1 = {a:1,b:2,c: {a: 9}, f: undefined, g: null};
// let obj2 = obj1;
// let obj2 = Object.assign({}, obj1);
let obj2 = {...obj1};
obj1.c.a = 333;
console.log(obj1);
console.log(obj2);

// 深拷贝  
// - JSON.parse(JSON.stringify) 方法  不能转化数组和undefined
const obj3 = JSON.parse(JSON.stringify(obj1));
console.log(obj3);

// - $.extend(true, 克隆对象, 被克隆对象);
// 函数递归diaoyong

let obj5 = {a: 1, b:2, c: 3, f: function f(){ return 456}, d: {d: 345} }
const obj6 = deepClone(obj5);
obj6.d.d = 111;
console.log(obj5, obj6);
function deepClone(data) {
    const type = typeof(data);
    var result;
    if(type === 'object') {
        if(Array.isArray(data)) {
            const arr = []
            for (const item of data) {
                arr.push(deepClone(data[item]))
            }
        } else if(data.constructor === Date || data.constructor === RegExp) {
            result = data;
        } else {
            result = {}
            for (const i in data) {
                result[i] = deepClone(data[i])
            }
        }
    } else if(type === 'function') {
        result = (new Function('return '+ data.toString()))()
    } else {
        result = data;
    }
    return result;
}