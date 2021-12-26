const getLastWord = (s) => {
  if (1 <= s.length <= 104) {
    s = s.trim();
    var words = s.split(" ");
    return words[words.length - 1].length;
  }
  return;
};

console.log("Output is:", getLastWord("Hello World"));
console.log("Output is:", getLastWord(" fly me   to   the moon   "));
console.log("Output is:", getLastWord("luffy is still joyboy"));

