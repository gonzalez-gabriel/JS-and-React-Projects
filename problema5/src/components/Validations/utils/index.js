export const validationA = (password) => {
  return password.length >= 16;
};

export const validationB = (password) => {
  let upperCase = false;
  let lowerCase = false;
  const passArray = password.split('');
  passArray.forEach((letter, i) => {
    for (let j = 65; j <= 90; j++) {
      if (passArray[i].charCodeAt(0) === j) {
        upperCase = true;
        break;
      }
    }
    for (let j = 97; j <= 122; j++) {
      if (passArray[i].charCodeAt(0) === j) {
        lowerCase = true;
        break;
      }
    }
  });
  return lowerCase && upperCase;
};

export const validationC = (password) => {
  let consecutiveLetters = true;
  const passArray = password.split('');
  for (let i = 0; i < passArray.length - 1; i++) {
    for (let j = 65; j <= 90; j++) {
      if (
        password[i].charCodeAt(0) === j ||
        password[i].toUpperCase().charCodeAt(0) === j
      ) {
        consecutiveLetters =
          consecutiveLetters &&
          passArray[i].toLowerCase() !== passArray[i + 1].toLowerCase();
      }
    }
  }
  return consecutiveLetters;
};

export const validationD = (password) => {
  let numbersCount = 0;
  password.split('').forEach((letter) => {
    if (!Number.isNaN(parseInt(letter))) {
      numbersCount++;
    }
  });
  return numbersCount >= 4;
};

export const validationE = (password) => {
  let consecutiveNumbers = false;
  password.split('').forEach((letter, i, arr) => {
    if (
      !Number.isNaN(parseInt(arr[1])) &&
      !Number.isNaN(parseInt(arr[i + 1])) &&
      arr[i] === arr[i + 1]
    ) {
      consecutiveNumbers = true;
    }
  });
  return !consecutiveNumbers;
};

export const validationF = (password) => {
  let specialChars = [
    '!',
    '@',
    '#',
    '$',
    '^',
    '&',
    '*',
    '-',
    '_',
    '+',
    '%',
    '=',
    '?',
  ];
  let consecutiveSpecialChars = false;
  let repeatedSpecialChars = false;

  let usedSpecialChars = [];
  password.split('').forEach((letter, i, arr) => {
    if (specialChars.includes(letter) || usedSpecialChars.includes(letter)) {
      if (usedSpecialChars.includes(letter)) {
        repeatedSpecialChars = true;
      }
      if (specialChars.includes(arr[i + 1])) {
        consecutiveSpecialChars = true;
      } else {
        specialChars.splice(specialChars.indexOf(letter), 1);
        usedSpecialChars.push(letter);
      }
    }
  });
  return (
    !consecutiveSpecialChars &&
    usedSpecialChars.length >= 2 &&
    !repeatedSpecialChars
  );
};

export const validationG = (password) => {
  return !password.split('').includes('0');
};

export const validationH = (password) => {
  return !password.split('').includes(' ');
};

export const validationAll = (password) => {
  return (
    validationA(password) &&
    validationB(password) &&
    validationC(password) &&
    validationD(password) &&
    validationE(password) &&
    validationF(password) &&
    validationG(password)
  );
};
