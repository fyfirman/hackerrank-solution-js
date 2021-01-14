// https://www.hackerrank.com/challenges/two-strings/

function twoStrings(s1, s2) {
    const condition = {};
    let result = 'NO'
    s1.split('').forEach((alphabet) => {
        if (condition[alphabet] === undefined) {
            Object.assign(condition, { [alphabet]: 1 })
        } else {
            condition[alphabet]++
        }
    })
    s2.split('').forEach((alphabet) => {
        if (condition[alphabet] !== undefined) {
            result = 'YES'
        }
    });

    return result
}