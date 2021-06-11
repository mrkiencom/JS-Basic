function check(str) {
  const p_count = str.replace(/[^p]/g, "").length;
  const t_count = str.replace(/[^t]/g, "").length;
  return p_count === t_count ? true : false;
}
check("sasdtasdaspcasdtaasdp");
