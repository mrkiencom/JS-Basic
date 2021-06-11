function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, "").length;
}
vowel_Count("ASdasdsad");
