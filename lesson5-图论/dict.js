// 字典 结构
// {a: xxx, b: xxx}
class Dictionary {
	constructor() {
		this.items = {}
	}
	set(key, val) {
		// this.items[key] = val

		// 使用 Reflect 试下; Reflect.set 返回 BOOlean
		return Reflect.set(this.items, key, val)

		// Object.defineProperty 设置一个属性
		// Object.defineProperties 设置多个属性
		// 属性描述符  || 存取描述符
		// Object.defineProperty(this.items, key, {
		// 	value: val,
		// 	writable: true, // 默认为 false
		// 	// -----
		// 	configurable: true, // 默认为 false
		// 	enumerable: true // 默认为 false
		// })
	}
	get(key) {
		// return this.items[key]

		return Reflect.get(this.items, key)

		// const descriptor = Object.getOwnPropertyDescriptor(this.items, key)
		// return descriptor.value || descriptor.get()
	}
	has(key) {
		// 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true
		// return key in this.items

		// 与 in 一样
		return Reflect.has(this.items, key)

		// return this.items.hasOwnProperty(key)
	}
	remove(key) {
		// delete undefined 返回 true, 所以要先判断有没有这个key
		if (this.has(key)) {
			return delete this.items[key]
		}else {
			return false
		}
	}
	keys() {
		// 只能获取到可遍历的
		// return Object.keys(this.items)

		// 只能获取到自身的(无所谓 enumerable ), 不能是 symbol; 返回数组
		// return Object.getOwnPropertyNames(this.items)


		return Reflect.ownKeys(this.items)
	}
	values() {
		return Object.values(this.items)

	}
	clear() {
		this.items = {}
	}
}

