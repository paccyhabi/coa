function hasContiguousSubarrayWithSum(arr, targetSum) {
    if (!arr.length) return false;
    let currentSum = 0; 
    let leftPointer = 0; 
    for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {
        currentSum += arr[rightPointer];
        while (currentSum > targetSum) {
            currentSum -= arr[leftPointer];
            leftPointer++;
        }
        if (currentSum === targetSum) {
            return true;
        }
    }
    return false;
}

// Example usage:
const array = [4, 2, 7, 1, 9, 5];
const targetSum = 17;
console.log(hasContiguousSubarrayWithSum(array, targetSum)); // Output: true
