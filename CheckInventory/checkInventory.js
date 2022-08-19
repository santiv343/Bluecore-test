const inventory = {
    color: {
        blue: [123, 456, 789],
        red: [234, 567, 890]
    },
    size: {
        small: [123, 234],
        medium: [456, 789],
        large: [567, 890]
    }
}

const req1 = { color: 'red', size: 'small' }
const req2 = { color: 'red' }
const req3 = { color: 'green ' }

const chechInventory = (I, R) => {

    let matchingValues = []

    for (const key in R) {
        if (Object.hasOwnProperty.call(R, key)) {
            const element = R[key];
            // console.log({ element })
            if (I.hasOwnProperty(key)) {
                matchingValues.push(I[key][element])
            }
        }
    }

    const findDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

    if (!matchingValues[0]) return []

    if (matchingValues.length > 1) {
        return findDuplicates(matchingValues.flat())
    } else {
        return matchingValues.flat()
    }


}

console.log(chechInventory(inventory, req1))
console.log(chechInventory(inventory, req2))
console.log(chechInventory(inventory, req3))