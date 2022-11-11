const checkValid = function (text) {
  const textValid = new RegExp(/([a-z])/i);

  return textValid.test(text);
};

const checkVokal = function (text) {
  const vocal = ["a", "i", "u", "e", "o"];

  return vocal.includes(text) ? "vokal" : "konsonan";
};

const wordContainer = ["mempertanggungjawabkan", "merdeka", "100", ""];
wordContainer.map(function (text) {
  const test = text
    .toLowerCase()
    .split("")
    .map(function (text) {
      const check = checkValid(text);
      return check ? checkVokal(text) : "invalid";
    });
  console.log(test.toString());
});
