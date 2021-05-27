// 1. Print out every number 1-100.
for (let i = 1; i <= 100; i++) console.log(i);

// 2. Print out every number from 50-100.
for (let i = 50; i <= 100; i++) console.log(i);

// 3. Find the sum of the first 100 numbers.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 4. Find the sum of the numbers from 1000 to 2000.

// 5. Print out every perfect square number less than or equal to 100.
for (let i = 1; i*i <= 100; i++) {
  console.log(i*i);
}


// 6. If you got one grain of rice on day 1, two grains of rice on day 2, and four grains of rice on day 3, and it kept doubling like that, print out a daily report of how much rice you'd receive on each day for 30 days.


// 7. Print out every number that ends in a 7 from 7-1007.
for (let i = 7; i <= 1007; i=i+10) {
  console.log(i);
}


// 8. Print out every even number from 1-100.
// Use %2

// 9. Print out every multiple of three from 1-100.
// Use %3

// 10. Print out multiples of two, another list of multiples of three, and then a third list of items which appear in both lists.


// CHALLENGE: Print out numbers which are multiples of 3 OR multiples of 2, but not multiples of both.
for (let i=0; i<1000; i++){
  if (i%6 != 0 (i%2 || i%3)) console.log(i)
}


// SUPER CHALLENGE: Print out the first 40 numbers in the Fibonacci sequence.
let prev1 = 0;
console.log(prev1)
let prev2 = 1;
console.log(prev2)
for (let i = 0; i<38; i++){
  let next = prev1+prev2
  console.log(next)
  prev1 = prev2
  prev2 = next
}