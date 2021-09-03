const isUnique = (s) => {
  return s.length === new Set(s).size;
};

// Tests
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");

// Time: O(N)

// Other solutions: https://github.com/careercup/CtCI-6th-Edition-JavaScript/blob/master/chapter01/1.1%20-%20Is%20Unique/isUnique.js
