const to_Safe_Integer = (str) =>
  str == Infinity ? Number.MAX_SAFE_INTEGER : Math.round(+str);
console.log(to_Safe_Integer("5.2"));
console.log(to_Safe_Integer("5.52"));
console.log(to_Safe_Integer(Infinity));
