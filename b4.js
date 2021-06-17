function convert_string_to_obj(str, d = ",") {
  const titles = str.slice(0, str.indexOf("\n")).split(d);
  return str
    .slice(str.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(d);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
}
console.log(convert_string_to_obj("col1,col2\na,b\nc,d"));
