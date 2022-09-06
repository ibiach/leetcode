const getConcatenation = nums => {
	return [...nums, ...nums]
}

const buildArray = nums => {
	const res = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[nums[i]] === undefined) res.push(nums[i])
		if (nums[nums[i]] !== undefined) res.push(nums[nums[i]])
	}
	return res
}

const buildArray2 = nums => nums.map(index => nums[index])

const decompressRLElist = nums =>
	nums.reduce((acc, cur, i, arr) => (i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc), [])

const isValid = s => {
	const map = {
		')': '(',
		']': '[',
		'}': '{',
	}
	const stack = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])
		else if (stack[stack.length - 1] === map[s[i]]) stack.pop()
		else return false
	}
	return stack.length ? false : true
}

const isLinkedPalindrome = head => {
	let left = head.slice(0, Math.round(head.length / 2))
	let right = head.slice(head.length / 2).reverse()
	for (let i = 0; i < left.length; i++) {
		if (left[i] !== right[i]) {
			return false
		}
	}
	return true
}

const fizzBuzz = n => {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) console.log('fizzBuzz')
		else if (i % 3 === 0) console.log('fizz')
		else if (i % 5 === 0) console.log('buzz')
		else console.log(i)
	}
}

const fizzBuzzSwitch = n => {
	for (let i = 1; i <= n; i++) {
		switch (true) {
			case i % 3 === 0 && i % 5 === 0:
				console.log('fizzBuzz')
				break
			case i % 3 === 0:
				console.log('fizz')
				break
			case i % 5 === 0:
				console.log('buzz')
				break
			default:
				console.log(i)
				break
		}
	}
}

const longesValidParentheses = s => {
	if (s.length === 0) return 0
	const stack = [-1]
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') stack.push(i)
		else stack.pop()
		if (stack.length === 0) stack.push(i)
		max = Math.max(max, i - stack[stack.length - 1])
	}
	return max
}

const sortedSquares = nums => {
	const stack = []
	for (let i = 0; i < nums.length; i++) {
		stack.push(Math.abs(nums[i] * nums[i]))
	}
	return stack.sort((a, b) => a - b)
}

const sortedSquares2 = nums => nums.map(item => item ** 2).sort((a, b) => a - b)

const findNumbers = nums => {
	let counts = 0
	for (let i = 0; i < nums.length; i++) {
		if ((nums[i] > 9 && nums[i] < 100) || (nums[i] > 999 && nums[i] < 10000) || nums[i] == 100000) counts += 1
	}
	return counts
}

const findMaxConsecutiveOnes = nums => {
	let max = 0
	let current = 0
	for (let num of nums) {
		max = Math.max(max, (current += num))
		if (!num) current = 0
	}
	return max
}

const duplicateZeros = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 0, 0)
			arr.pop()
			i += 1
		}
	}
	return arr
}

const toDayOfYear = arr => {
	for (let i = 1; i < arr[1]; i++) arr[0] += new Date(arr[2], i, 0).getDate()
	return arr[0]
}

const toDayOfYear2 = arr => {
	let [d, m, y] = arr
	let l = y % 4 ? false : y % 100 ? true : y % 400 ? false : true
	let ms = [31, l ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	return ms.filter((a, i) => i < m - 1).reduce((sum, a) => sum + a, 0) + d
}

function isUnique(string) {
	// const obj = {}
	// const arrOfChar = string.split('')
	// for (const char of arrOfChar) {
	// 	if (obj[char] === undefined) {
	// 		obj[char] = 1
	// 	} else if (obj[char]) return false
	// }
	// return true
	// for (let i = 0; i < string.length; i++) {
	// 	const char = string[i]
	// 	if (string.lastIndexOf(char) !== i) return false
	// }
	// return true
	// const set = new Set()
	// for (let i = 0; i < string.length; i++) {
	// 	const char = string[i]
	// 	if (set.has(char)) return false
	// 	set.add(char)
	// }
	// return true
	// return new Set(string).size === string.length
}

function flatten(array) {
	const res = []
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			const flat = flatten(array[i])
			for (let j = 0; j < flat.length; j++) {
				res.push(flat[j])
			}
		} else res.push(array[i])
	}
	return res
}

function removeDupes(str) {
	// let uniqChars = ''
	// for (const char of new Set(str)) {
	// 	uniqChars += char
	// }
	// return uniqChars

	// const chars = {}
	// const res = []
	// for (let i = 0; i < str.length; i++) {
	// 	if (!chars[str[i]]) {
	// 		chars[str[i]] = true
	// 		res.push(str[i])
	// 	}
	// }
	// console.log(chars)
	// return res.join('')

	return Array.from(new Set(str)).join('')
}

function highestFrequency(array) {
	const map = {}
	let maxFreq = 1
	let maxFreqStr = array[0]
	for (let i = 0; i < array.length; i++) {
		const current = array[i]
		if (!map[current]) map[current] = 1
		else map[current] += 1

		if (map[current] > maxFreq) {
			maxFreq = map[current]
			maxFreqStr = current
		}
	}
	return maxFreqStr
}

function isStringRotated(source, test) {
	// if (source.length !== test.length) return false
	// for (let i = 0; i < source.length; i++) {
	// 	const rotate = source.slice(i, source.length) + source.slice(0, i)
	// 	if (rotate === test) return true
	// }
	// return false

	return (source + source).includes(test) && source.length === test.length
}

function arraySubset(source, subset) {
	// const uniqSource = Array.from(new Set(source))
	// return (
	// 	uniqSource.map(item => subset.includes(item)) &&
	// 	uniqSource.length === subset.length
	// )

	// const uniqSource = new Set(source)
	// for (const item of subset) {
	// 	if (uniqSource.size < subset.length) return false
	// 	if (!uniqSource.has(item)) return false
	// }
	// return true

	if (source.length < subset.length) return false

	for (let i = 0; i < subset.length; i++) {
		const index = source.indexOf(subset[i])
		if (index === -1) return false
		delete source[index]
	}
	return true
}

function allAnagrams(array) {
	const sorted = array.map(str => str.split('').sort().join(''))
	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] !== sorted[0]) return false
	}
	return true
}

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

class RotateMatrix {
	rotate90 = matrix => {
		const newMatrix = matrix.map(() => [])

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[0].length; j++) {
				newMatrix[j][matrix.length - 1 - i] = matrix[i][j]
			}
		}

		return newMatrix
	}

	rotate180 = matrix => {
		const rotate90 = this.rotate90(this.rotate90(matrix))
		return rotate90
	}

	rotate270 = matrix => {
		const rotate90 = this.rotate180(this.rotate90(matrix))
		return rotate90
	}

	print(arr) {
		arr.forEach(i => console.log(i))
	}
}

const rotate = new RotateMatrix(matrix)

function search(array, target) {
	let i = 0

	for (const item of array) {
		if (item === target) return i
		i += 1
	}
	return -1
}

function binary(array, target) {
	let start = 0
	let end = array.length - 1

	if (target < array[start] || target > array[end]) return -1

	while (true) {
		if (target === array[start]) {
			return start
		}

		if (target === array[end]) {
			return end
		}

		if (end - start <= 1) {
			return -1
		}

		const middle = Math.floor((start + end) / 2)

		if (target > array[middle]) {
			start = middle + 1
		} else if (target < array[middle]) {
			end = middle - 1
		} else {
			return middle
		}
	}
}

function isBalanced(string) {
	const map = {
		')': '(',
		'}': '{',
		']': '[',
	}

	const queue = []
	const start = '([{'
	const end = ')]}'
	for (let i = 0; i < string.length; i++) {
		const char = string[i]

		if (start.includes(char)) queue.push(char)
		else if (end.includes(char)) {
			const last = queue.pop()
			if (last !== map[char]) {
				return false
			}
		}
	}
	return !queue.length
	// const stack = []
	// for (let i = 0; i < string.length; i++) {
	// 	if (string[i] === '(' || string[i] === '[' || string[i] === '{')
	// 		stack.push(string[i])
	// 	else if (stack[stack.length - 1] === map[string[i]]) stack.pop()
	// }
	// return !stack.length
}

class Queue {
	#storage = {}
	#last = 0
	#first = 0

	enqueue(item) {
		this.#storage[this.#last] = item
		this.#last++
	}

	dequeue() {
		if (this.#last === 0) return
		const value = this.#storage[this.#first]
		delete this.#storage[this.#first]
		this.#first++
		return value
	}

	get size() {
		return this.#last - this.#first
	}
}

function fibonacci(n) {
	const sequence = [1, 1]
	if (n < 2) return sequence.slice(0, n)

	while (sequence.length < n) {
		const last = sequence[sequence.length - 1]
		const prev = sequence[sequence.length - 2]
		sequence.push(last + prev)
	}
	return sequence
}

function deepEqual(a, b) {
	return JSON.stringify(a) === JSON.stringify(b)

	// if (Number.isNaN(a) && Number.isNaN(b)) {
	// 	return true
	// }

	// if (typeof a !== 'object' || a === null || b === null) {
	// 	return a === b
	// }

	// if (Object.keys(a).length !== Object.keys(b).length) {
	// 	return false
	// }

	// for (const key of Object.keys(a)) {
	// 	if (!deepEqual(a[key], b[key])) {
	// 		return false
	// 	}
	// }
	// return true
}

function add(a, b) {
	// if (typeof a === 'undefined') return add
	// const sum = b => (typeof b === 'undefined' ? sum : a + b)
	// return sum

	if (typeof a === 'undefined') return add
	if (typeof b === 'undefined') {
		return function sum(c) {
			if (typeof c === 'undefined') return sum
			return a + c
		}
	}

	return a + b
}

function groupBy(array, fn) {
	const res = {}

	for (let i = 0; i < array.length; i++) {
		const current = array[i]
		const key = typeof fn === 'function' ? fn(current) : current[fn]

		if (!res[key]) res[key] = []
		res[key].push(current)
	}

	return res
}

const groupBy1 = (array, fn) =>
	array.reduce((res, current) => {
		const key = typeof fn === 'function' ? fn(current) : current[fn]
		if (!res[key]) res[key] = []
		res[key].push(current)
		return res
	}, {})

const isPalindrome = x => {
	const toString = typeof x !== 'string' ? String(x) : x

	if (toString.length <= 1) return true

	for (let i = 0; i < toString.length; i++) {
		let start = i
		let end = toString.length - 1 - i

		if (toString[start] !== toString[end]) return false
	}

	return true
}

const twoLowestNBiggest = nums => {
	let min = 0
	let max = 0

	const iterableArray = nums.slice(0, nums.indexOf(0))
	const sortedArray = iterableArray.sort((a, b) => a - b)
	min = sortedArray[0] + sortedArray[1]
	max = sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length - 2]

	return `min: ${min} max: ${max}`
}

function maxArea(height) {
	let result = 0
	let start = 0
	let end = height.length - 1

	while (start < end) {
		result = Math.max(result, Math.min(height[start], height[end]) * (end - start))
		height[start] <= height[end] ? start++ : end--
	}
	return result
}

const intersections = (nums1, nums2) => {
	const result = []

	const map = nums1.reduce((acc, item) => {
		acc[item] = acc[item] ? acc[item] + 1 : 1
		return acc
	}, {})

	for (let i = 0; i < nums2.length; i++) {
		const current = nums2[i]
		const count = map[current]
		if (count && count > 0) result.push(current)
	}
	return result
}

const singleNumber = arr => {
	const map = {}

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i]

		if (!map[current]) map[current] = true
		else if (map[current]) map[current] = false
	}

	const entries = Object.entries(map)

	for (let [key] of entries) {
		if (map[key] === true) return key
	}

	return
}

const input = [
	[11, 12],
	[2, 3],
	[5, 7],
	[1, 4],
	[8, 10],
	[6, 8],
]

const merge = intervals => {
	if (intervals.length < 2) return intervals

	intervals.sort((a, b) => a[0] - b[0])

	const result = [intervals[0]]

	for (let interval of intervals) {
		let recent = result[result.length - 1]

		if (recent[1] >= interval[0]) recent[1] = Math.max(recent[1], interval[1])
		else result.push(interval)
	}
	return result
}

const generateParenthesis = n => {
	const res = []

	const go = (l, r, s) => {
		if (s.length === 2 * n) {
			res.push(s)
			return
		}

		if (l < n) go(l + 1, r, s + '(')
		if (r < l) go(l, r + 1, s + ')')

		console.log(l)
		console.log(r)
		console.log(s)
	}

	go(0, 0, '')

	return res
}

const getNormalizePhone = phone => {
	const map = {
		'(': true,
		')': true,
		'+': true,
		'-': true,
		' ': true,
	}
	const result = []

	const arrPhone = phone.split('')
	for (let i = 0; i < arrPhone.length; i++) {
		if (!map[arrPhone[i]]) result.push(arrPhone[i])
	}
	return result.join('')
}

const sum = a => {
	let currentSum = a

	const nextSum = b => {
		currentSum += b
		return nextSum
	}

	nextSum.valueOf = () => currentSum

	return nextSum
}

const add1 = (n, b = n + 1) => {
	if (n < 2) return b - 1
	console.log(b - n)
	return add1(n - 1, b)
}

const sort = arr => {
	const length = arr.length

	if (length <= 1) return arr

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	return arr
}

const binarySearch = (num, arr) => {
	let start = 0
	let end = arr.length - 1

	while (start <= end) {
		let middle = Math.floor((start + end) / 2)
		console.log(middle)

		if (arr[middle] === num) return middle
		if (arr[middle] <= num) start = middle + 1
		else end = middle - 1
	}
	return -1
}

const findNumberInSortArray = binarySearch(5, sort([1, 4, 2, 5, 10, 6, 8]))

const twoSum = (arr, targetSum) => {
	const result = []
	const result2 = []
	for (let i = 0; i < arr.length; i++) {
		if (arr.includes(targetSum - arr[i])) {
			result.push(arr[i])
		}
	}
	for (let j = 0; j < result.length; j++) {
		if (result[j] + result[j + 1] === targetSum) {
			result2.push(result[j], result[j + 1])
		}
	}
	return result2
}

const students = [
	{ name: 'Erik', age: 19, groupId: 1 },
	{ name: 'Mark', age: 17, groupId: 2 },
	{ name: 'Aaron', age: 16, groupId: 2 },
	{ name: 'John', age: 22, groupId: 1 },
]

// const groupOnlyMatureStudentsByGroup = arr => {
// 	const result = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].age <= 17) {
// 			result.push(arr[i])
// 		}
// 	}
// 	return result
// }
const groupOnlyMatureStudentsByGroup = students =>
	students.reduce(
		(acc, student) =>
			student.age < 18
				? acc
				: acc[student.groupId]
				? acc[student.groupId].push(student) && acc
				: (acc[student.groupId] = [student]) && acc,
		{}
	)

const lengthOfLongestSubstring = s => {
	const map = {}
	let left = 0

	return s.split('').reduce((max, char, i) => {
		left = map[char] >= left ? map[char] + 1 : left

		map[char] = i

		return Math.max(max, i - left + 1)
	}, 0)
}
