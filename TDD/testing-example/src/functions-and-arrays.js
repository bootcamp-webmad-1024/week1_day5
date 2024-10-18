function sumNumbers(numbers) {

    if (!numbers.length) {
        return null
    }

    let sum = 0

    numbers.forEach(eachNumber => sum += eachNumber)

    return sum
}