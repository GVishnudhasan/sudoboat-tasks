function arithmeticOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return `Addition: ${num1 + num2}`;
            // return `Addition:num1 + num2`;
        case '-':
            return `Subtraction: ${num1 - num2}`;
        case '/':
            return `Division: ${num1 / num2}`;
        case '*':
            return `Multiplication: ${num1 * num2}`;
        case '%':
            return `Modulus: ${num1 % num2}`;
        case '^':
            return `Exponentiation: ${num1 ** num2}`;
        default:
            return 'Invalid operator';
    }
}

console.log(arithmeticOperation(10, 20, '+'));
console.log(arithmeticOperation(10, 20, '-'));
console.log(arithmeticOperation(10, 20, '/'));
console.log(arithmeticOperation(10, 20, '*'));
console.log(arithmeticOperation(10, 20, '%'));
console.log(arithmeticOperation(10, 6, '^'));