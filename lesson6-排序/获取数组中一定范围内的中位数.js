function median(arr, left, right) {
	// 头 尾 中 三个数进行比较, 按照大小进行排序
	// 将 中位数 和 倒数第二个位置的数 进行交换, 因为最后一个数 肯定是大于中位数的,这样减少对比
	// 返回 中位数
	const middle = Math.floor((left  + right) / 2)
	if(arr[left] > arr[right]) {
		[arr[left], arr[right]] = [arr[right], arr[left]]
	}
	if (arr[left] > arr[middle]) {
		[arr[left], arr[middle]] = [arr[middle], arr[left]]
	}
	if (arr[middle] > arr[right]) {
		[arr[middle], arr[right]] = [arr[right], arr[middle]]
	}


	// 中位数 和 倒数第二个位置的数 进行交换
	[arr[middle], arr[right - 1]] = [arr[right - 1], arr[middle]]
	return arr[right - 1]
}

// let array = [2, 5, 7, 9, 1, 10, 16, 18, 23]
let array = [6, 4, 11]
console.log(median(array, 0, array.length - 1));
console.log(array);
