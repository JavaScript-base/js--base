class MyMap {
    constructor(iterator = []) {
        if(typeof iterator[Symbol.iterator] !== 'function') {
            throw new TypeError("你提供的iterator不是一个可以迭代的对象")
        }
        this._data = [];
        for (const item of iterator) {
            if(typeof iterator[Symbol.iterator] !== 'function') {
                throw new TypeError("你提供的iterator不是一个可以迭代的对象")
            }

            const iterator = item[Symbol.iterator]();
            const key = iterator.next().value;
            const value = iterator.next().value;
            this.set(key, value);
        }
        Object.defineProperty(this, 'size', {
            get() {
                return this._data.length;
            }
        })
    }

    get(key) {
        const item = this._get(key);
        if (item) return item.value;
    }

    delete(key) {
        const item = this._get(key);
        if(item) {
            const index = this._data.findIndex(t => this.isEqual(t.value, item.value));
            this._data.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._data.length = 0;
    }

    _get(key) {
        for (const item of this._data) {
            if(this.isEqual(key, item.key)) {
                return item;
            }
        }
    }

    set(key, value) {
        if(!this.has(key)) {
            this._data.push({
                key, value
            })
        } else {
            const item = this._get(key);
            item.value = value;
        }
    }

    isEqual(data1, data2) {
        if(data1 === 0 && data2 === 0) {
            return true;
        } else {
            return Object.is(data1, data2)
        }
    }

    has(key) {
        for (const item of this._data) {
            if(this.isEqual(key, item.key)) {
                return true;
            }
        }
        return false;
    }

    *[Symbol.iterator]() {
        for (const item of this._data) {
            yield [item.key, item.value]
        }
    }

    forEach(callback) {
        for (const item of this._data) {
            callback(item.value, item.key, this);
        }
    }
}

let map = new MyMap();
map.set('123', 123);
map.set('123', 123);
map.set('1234', 123);
map.set('1234', 123);
// map.delete('1234');
// console.log(map);
// map.delete('123')
// console.log(map);
// console.log(map, map.delete('123'), map.get('123'));

map.forEach((a1, a2, m) => {
    console.log(a1, a2, m);
})

console.log(map.size);