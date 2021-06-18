const get_Meridiem_Suffix_Of_Integer = (n) => {
  return n == 0
    ? `12am`
    : n > 12 && n < 24
    ? `${n - 12}pm`
    : n >= 24
    ? `${n % 24}am`
    : n + "am";
};
console.log(get_Meridiem_Suffix_Of_Integer(0));
console.log(get_Meridiem_Suffix_Of_Integer(11));
console.log(get_Meridiem_Suffix_Of_Integer(13));
console.log(get_Meridiem_Suffix_Of_Integer(25));
