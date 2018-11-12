console.log(`Starting notes file`);

module.exports = {
  sum: (a = 0, b = 0) => ((typeof(a) == "number" && typeof(b) == "number") ? (a + b) : `integer required for the first and the second argument`)
};
