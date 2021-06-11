function paste(str1, str2) {
  let len = Math.min(str1.length, str2.length);
  let s1 = (s2 = "");
  for (let i = 0; i < len; i++) {
    s1 += str1[i];
    s2 += str2[i];
  }
  return s1 + s2;
}
paste("1233", "12133332");
