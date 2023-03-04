// 手写set

class Myset {
    constructor(iterator = []) {
        // 验证是否是可迭代对象
        console.log(iterator[Symbol.iterator]);
        if(typeof iterator[Symbol.iterator] !== 'function') {
            throw new TypeError("你提供的参数不是一个可迭代对象")
        }
        this._data =[];
        for (const item of iterator) {
            this.add(item);
        }
    }

    add(data) {
        if(!this.has(data)) {
            this._data.push(data);
        }
    }

    delete(item) {
        if(this.has(item)) {
            const index = this._data.findIndex((i) => i === item);
            this._data.splice(index, 1);
            return true;
        }
        return false;
    }

    has(data) {
        for (const item of this._data) {
            if(this.isEqual(data, item)) {
                return true;
            }
        }
        return false;
    }

    clear() {
        this._data = [];
    }

    isEqual(data1, data2) {
        if(data1 === 0 && data2 === 0) {
            return true;
        } else {
            return Object.is(data1, data2)
        }
    }
}

const ddd = new Myset([222, '121', 1,2,3,4,5,4,5]);
console.log(ddd);

console.log(ddd, ddd.delete('123'));
console.log(ddd, ddd.delete('121'));