let arr = [1,2,34];
let weakset = new WeakSet();

weakset.add(arr);

// arr = null;
console.dir(weakset);

// weakset 只能添加对象
// weakset不会影响js的垃圾回收机制
// 不能遍历， 没有size属性，没有forEach
// 一般用来观察一个对象有没有被引用，看是否已经被垃圾回收机制回收；


// weakmap
// 他的键只能是对象；
// weakmap的键不会影响js的垃圾回收机制；
// 不能遍历，不可迭代，不能使用forEach方法