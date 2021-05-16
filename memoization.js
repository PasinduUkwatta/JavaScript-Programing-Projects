function addTo80(n) {
  return n + 80;
}

console.log(addTo80(10));

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("in the cache");
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

// const memoized = memoizedAddTo80();
// console.log("1", memoized(5));
// console.log("2", memoized(7));
// console.log("3", memoized(8));
// console.log("4", memoized(5));
// console.log("5", memoized(5));

//------------------------------------------
//Fibonacci Series

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(20));

function memoizedFibonacci() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      console.log(cache);
      console.log("in the cache");
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 2) + fib(n - 1);
        console.log(cache[n]);
        return cache[n];
      }
    }
  };
}

const fastFib = memoizedFibonacci();

fastFib(80);

//---------------------------------------

function fib2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }

  return answer.pop();
}

console.log(fib2(10));
