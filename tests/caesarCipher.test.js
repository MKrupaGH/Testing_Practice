const caesarCipher = require("../codes/caesarCipher");

test("'Word' would look like cuxj ", () => {
  expect(caesarCipher("Word", 6)).toBe("cuxj");
});

test("'Lets fight' would look like cuxj ", () => {
  expect(caesarCipher("Lets fight", 4)).toBe("pixw jmklx");
});

test("'Check num 12 and. special $#$' would look like mromu xew 12 kxn czomskv $#$", () => {
  expect(caesarCipher("Check num 12 and. special $#$", 10)).toBe(
    "mromu xew 12 kxn. czomskv $#$"
  );
});

