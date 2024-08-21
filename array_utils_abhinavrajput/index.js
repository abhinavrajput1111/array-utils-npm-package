// 1. Sum of Array Elements
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// 2. Clear Duplicates
function clearDuplicates(arr) {
    return [...new Set(arr)];
}

// 3. Average of Array Elements
function average(arr) {
    return sum(arr) / arr.length;
}

// 4. Find Maximum
function max(arr) {
    return Math.max(...arr);
}

// 5. Find Minimum
function min(arr) {
    return Math.min(...arr);
}

// 6. Sort Array Ascending
function sortAsc(arr) {
    return [...arr].sort((a, b) => a - b);
}

// 7. Sort Array Descending
function sortDesc(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 8. Filter Even Numbers
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 9. Filter Odd Numbers
function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 10. Find Unique Elements
function unique(arr) {
    return arr.filter((val, index, self) => self.indexOf(val) === index);
}

// Exporting the functions as a module
module.exports = {
    sum,
    clearDuplicates,
    average,
    max,
    min,
    sortAsc,
    sortDesc,
    filterEven,
    filterOdd,
    unique
};
