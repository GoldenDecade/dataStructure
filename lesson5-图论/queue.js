class Queue {
	constructor() {
		this.queue = []
	}
	enqueue(...args) {
		return [].push.apply(this.queue, args)
	}
	dequeue() {
		return this.queue.shift()
	}
	front() {
		return this.queue[0]
	}
	isEmpty() {
		return this.queue.length === 0
	}
	size() {
		return this.queue.length
	}
	toString() {
		// return this.queue.toString()
		let res = ''
		let i = 0
		while(i < this.queue.length) {
			res += this.queue[i]
			i++
		}
		return res
	}
}
