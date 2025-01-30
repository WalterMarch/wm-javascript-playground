const MAX = 100;

for (let i = 1; i <= MAX; i++) {
    let output = "";
    output += i % 3 === 0 ? "Fizz" : "";
    output += i % 5 === 0 ? "Buzz" : "";

    // JavaScript's ternary operator can be used to decide what to output
    // but this OR operator, || is more interesting.

    console.log(output || i);
}
