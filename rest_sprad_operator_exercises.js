// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...nums) => nums
    .filter(num => num % 2 === 0);

const findMin = (...args) => args.reduce((arg, val) => (val < arg ? val : arg));

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => {
    const doubles = args.map(arg => arg * 2);
    return [...arr, ...doubles]
}

const removeRandom = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    const newItems = [...items];
    newItems.splice(randomIdx, 1);
    return newItems;
}

const extend = (array1, array2) => ([...array1, ...array2]);

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}