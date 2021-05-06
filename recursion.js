console.log("recursion");

//1.identify the base case
//2.identify the recurrsieve case
//3.get closer and closer to the return

let counter = 0;
function inception() {
  console.log(counter);
  //   debugger;

  if (counter > 3) {
    return "done";
  }
  counter++;
  return inception();
}

inception();

function findFactorialRecursieve(number) {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    answer = number * findFactorialRecursieve(number - 1);
    console.log(answer);
  }
}

console.log(findFactorialRecursieve(5));

function findFcatorialIteratieve(number) {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    ans = 0;
    for (itr = 0; itr <= number; itr++) {
      ans = itr * number;
    }
    return ans;
  }
}

console.log(findFcatorialIteratieve(6));

function factorialIteratieve(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(factorialIteratieve(5));

function recurrsieveFactorial(number) {
  if (number == 2) {
    return 2;
  }
  return number * recurrsieveFactorial(number - 1);
}

console.log(recurrsieveFactorial(5));

function fibbonachiRecuursieve(n) {
  if (n < 2) {
    return n;
  }
  return fibbonachiRecuursieve(n - 1) + fibbonachiRecuursieve(n - 2);
}

console.log(fibbonachiRecuursieve(8));

function fibbonachiIteratieve(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
  return arr[n];
}

console.log(fibbonachiIteratieve(12));
