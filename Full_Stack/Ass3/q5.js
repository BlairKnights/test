"use strict";
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices");
    }
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
var nums = [1, 2, 3, 4, 5];
console.log("\n Original Array:", nums);
swap(nums, 0, 3);
console.log(" Modified Array:", nums, "\n");
