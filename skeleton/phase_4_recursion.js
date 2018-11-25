

function range(start, end){
  var arr = [];
  
  if (start > end) {
    return arr;
  }
  arr.push(start);
 return arr.concat(range(start+1, end));
};

// console.log(range(2, 8));

function sumRec(arr) {
  let sum = 0;
  if (arr.length < 1) {
    return sum;
  }

  sum += arr[0];
  return sum += sumRec(arr.slice(1, arr.length));
}
// console.log(sumRec([1, 2, 3, 4, 5]));
// console.log(sumRec([1, 2, 3, 4, 5, 6, 7, 8]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp -1);
}


function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } 
  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2
  } else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2)
  }
}

// console.log(exponent(3, 2));
// console.log(exponent(2, 3));
// console.log(exponent2(2, 4));
// console.log(exponent2(5, 3));

function fibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  let result = [0, 1];
  
  if (n === 2) {
    return result;
  }

  let arr = fibonacci(n - 1);

  let el = arr.slice(-2, -1)[0] + arr.slice(-1)[0];
  arr.push(el);
  return arr;
}
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(3));
// console.log(fibonacci(4));

function deepDup(arr) {
    if (!(arr instanceof Array)) {
      return arr;
    } 

  return arr.map( (el) => {
    return deepDup(el);
  })
}

// console.log(deepDup([1, 2, 3, [5, 6, 7], 8, [9, [10, 11, 12], 14]]));

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let idx = Math.floor(arr.length / 2);
  let mid = arr[idx]

  if (mid === target) {
    return idx;
  }

  if (target < mid) {
    return bsearch(arr.slice(0, idx), target)
  } else {
    let bsh = bsearch(arr.slice(idx+1, -1), target)
     
     return bsh === -1 ? -1 : bsh + 1 + idx;
  }
}

// console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log([1, 2, 3, 4, 5, 6, 7, 8].indexOf(3));

function mersort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let idx = Math.floor(arr.length / 2)
  let left = mersort(arr.slice(0, idx))
  let right = mersort(arr.slice(idx))

  return merge (left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      let num = left.shift();
      result.push(num)
    } else {
      let num1 = right.shift();
      result.push(num1)
    }
  }

  return result.concat(left, right);
}

// console.log(mersort([30, 2, 10, 0, 2, 5, 3, 7, 9, 6]));

function subset(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  let last = arr[0];
  let subs = subset(arr.slice(1))

  return subs.concat(subs.map( x => [last].concat(x))); 
}

console.log(subset([1, 2, 3]));
