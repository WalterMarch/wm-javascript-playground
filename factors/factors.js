const NUMBER = 100;

let factorSet = new Set([1, NUMBER]);

for (let i = 2; i < NUMBER; i++) {
    if (NUMBER % i === 0) {
        factorSet.add(i);
        factorSet.add(NUMBER/i);
    }
}

const factorArray = Array.from(factorSet);
factorArray.sort((a, b) => a - b);
console.log(factorArray);