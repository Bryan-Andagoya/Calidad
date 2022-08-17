// Requirement 1
// Write a method greet(name) that interpolates name in a simple greeting. For example, when name is "Bob", the method should return a string "Hello, Bob.".
// Requirement 2
// Handle empty by introducing a stand-in. For example, when name is empty, then the method should return the string "Hello, my friend."
// Requirement 3
// Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"
// Requirement 4
// Handle two names of input. When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."
// Requirement 5
// Handle an arbitrary number of names as input. When name represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."
// Requirement 6
// Allow mixing of normal and shouted names by separating the response into two greetings. For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"
// Requirement 7
// If any entries in name are a string containing a comma, split it as its own input. For example, when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".
// Requirement 8
// Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, when name is ["Bob", "\"Charlie, Dianne\""], then the method should return the string "Hello, Bob and Charlie, Dianne.".

const greet = (name) => {
  if (name instanceof Array) {
    return greetingMessageWithMultipleNames(name);
  }

  return isUpperCase(name)
    ? `HELLO ${name}!`
    : `Hello, ${name || "my friend"}.`;
};

const greetingMessageWithMultipleNames = (names) => {
  const splittedNames = scapeSpecialCharsFromNames(names);

  const shoutedNames = [];

  names = splittedNames.filter((n) => {
    if (isUpperCase(n)) {
      shoutedNames.push(n);
      return false;
    } else {
      return true;
    }
  });

  let message = "";

  switch (names.length) {
    case 1:
      message += `Hello, ${names[0]}.`;
      break;
    case 2:
      message += `Hello, ${names[0]} and ${names[1]}.`;
      break;
    default:
      message = greetingMessage(names, "Hello, ", ", and", ".");
      break;
  }

  if (shoutedNames.length !== 0) {
    message += ` AND HELLO ${shoutedNames[0]}`;

    if (shoutedNames.length !== 1) {
      message += concatUppercaseNames(shoutedNames);
    }

    message += `!`;
  }

  return message;
};

const scapeSpecialCharsFromNames = (names) => {
  const splittedNames = [];

  names.forEach((n) => {
    let separator = n.startsWith('"') ? undefined : ", ";

    const auxNames = n.split(separator);

    auxNames.forEach((auxName) =>
      splittedNames.push(auxName.replaceAll('"', ""))
    );
  });

  return splittedNames;
};

const isUpperCase = (string) => /^[A-Z]+$/.test(string);

const concatUppercaseNames = (names) => {
  let message = "";

  let lastIndex = names.length - 1;

  for (let i = 1; i < lastIndex; i++) {
    message += `, ${names[i]}`;
  }

  message += ` AND ${names[lastIndex]}`;

  return message;
};

const greetingMessage = (names, beginPart, lastSeparator, endPart) => {
  let message = beginPart;
  let lastIndex = names.length - 1;

  message += names.slice(0, -1).join(", ");

  message += `${lastSeparator} ${names[lastIndex] + endPart}`;

  return message;
};

module.exports = { greet, isUpperCase, greetingMessage };
