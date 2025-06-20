const numbers = [1, 3, 5, 7, 9];

function print(element) {
  console.log(element);
}

// numbers.forEach(print);

for (let i in numbers) {
    console.log(i);
}