const arr = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = arr[0];
for (const value of arr) {
    if (value > max) {
        max = value;
    }
}
console.log(`Max of value is ${max}`);