const ArrayUtils = require('./index');

const arr = [1, 2, 2, 3, 4, 5, 5, 6, 7];

console.log('Sum:', ArrayUtils.sum(arr));
console.log('Clear Duplicates:', ArrayUtils.clearDuplicates(arr));
console.log('Average:', ArrayUtils.average(arr));
console.log('Max:', ArrayUtils.max(arr));
console.log('Min:', ArrayUtils.min(arr));
console.log('Sort Asc:', ArrayUtils.sortAsc(arr));
console.log('Sort Desc:', ArrayUtils.sortDesc(arr));
console.log('Filter Even:', ArrayUtils.filterEven(arr));
console.log('Filter Odd:', ArrayUtils.filterOdd(arr));
console.log('Unique Elements:', ArrayUtils.unique(arr));
