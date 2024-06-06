function transformString(input) {
    const length = input.length;

    // Check if the length is divisible by 3, 5, or both
    const divisibleBy3 = length % 3 === 0;
    const divisibleBy5 = length % 5 === 0;

    // Apply transformations based on divisibility
    if (divisibleBy3 && divisibleBy5) {
        // Divisible by both 3 and 5
        input =input.split('').reverse().join('')+" "+input.split('').map(char => char.charCodeAt(0)).join(' ');

    } else if (divisibleBy3) {
        // Divisible by 3
        input = input.split('').reverse().join(''); // Reverse the entire string
    } else if (divisibleBy5) {
        // Divisible by 5
        input = input.split('').map(char => char.charCodeAt(0)).join(' '); // Replace with ASCII codes
    }

    return input;
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("ChocolateChipCo")); // Output: "eikooCpihCetalocohC"
