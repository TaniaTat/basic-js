const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(trueOrFalse) {
    this.flag = trueOrFalse;
    if (this.flag === undefined) this.flag = true;
  }
  encrypt(message, key) {
    if (message === '' || key === '') throw "Error";
    let arrKey = Array.from(key);
    let result = [], noSpacesMsg = '', msgCharCode, encrLetter, keyCharCode;
    noSpacesMsg = message.replace(/ /g, "");
    if (noSpacesMsg.length > key.length) {
      for (let i = 0; i < (noSpacesMsg.length - key.length); i++) { arrKey.push(arrKey[i]); }
    }
    arrKey.forEach(encryptMessage);
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") result.splice(i, 0, " ");
    }
    return (this.flag) ? result.join("") : result.reverse().join("");

    function encryptMessage(value, i) {
      msgCharCode = noSpacesMsg.charCodeAt(i);
      keyCharCode = value.charCodeAt(0);
      let n = (keyCharCode > 96 && keyCharCode < 123) ? 97 : 65;
      if (msgCharCode > 96 && msgCharCode < 123) {
        encrLetter = (keyCharCode - n + msgCharCode - 97) % 26;
        encrLetter = String.fromCharCode(encrLetter + 97).toUpperCase();
      } else {
        if (msgCharCode > 64 && msgCharCode < 91) {
          encrLetter = (keyCharCode - n + msgCharCode - 65) % 26;
          encrLetter = String.fromCharCode(encrLetter + 65).toUpperCase();
        } else encrLetter = noSpacesMsg[i];
      };
      result.push(encrLetter);
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === '' || key === '') throw "Error";
    let arrKey = Array.from(key);
    let result = [], noSpacesMsg = '', msgCharCode, decrLetter, keyCharCode;
    noSpacesMsg = encryptedMessage.replace(/ /g, "");
    if (noSpacesMsg.length > key.length) {
      for (let i = 0; i < (noSpacesMsg.length - key.length); i++) { arrKey.push(arrKey[i]); }
    }
    arrKey.forEach(decriptMessage);
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === " ") result.splice(i, 0, " ");
    }
    return (this.flag) ? result.join("") : result.reverse().join("");

    function decriptMessage(value, i) {
      msgCharCode = noSpacesMsg.charCodeAt(i);
      keyCharCode = value.charCodeAt(0);
      let n = (keyCharCode > 96 && keyCharCode < 123) ? 97 : 65;
      if (msgCharCode > 64 && msgCharCode < 91) {
        decrLetter = (msgCharCode - 65 - (keyCharCode - n)) % 26;
        if (decrLetter >= 0) {
          decrLetter = String.fromCharCode(decrLetter + 65);
        } else {
          decrLetter = String.fromCharCode(91 - Math.abs(decrLetter));
        };
      } else decrLetter = noSpacesMsg[i];
      result.push(decrLetter);
    }
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = VigenereCipheringMachine;
