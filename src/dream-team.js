const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    var teamName = ""; var isLetter;
    members.forEach(makeTeamName);
    var arr = Array.from(teamName);
    arr = arr.sort();
    return arr.join("");
  } else { return false; };

  function makeTeamName(name) {
    if (typeof name !== 'string' || !name) { return; } else {
      isLetter = true;
      name = name.trim().toUpperCase();
      for (let i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) < 65 && name.charCodeAt(i) !== 32) || (name.charCodeAt(i) > 90 && name.charCodeAt(i) !== 95)) { isLetter = false; };
      };
      if (isLetter) { teamName = `${teamName}${name.charAt(0)}` };
    };
  };
};

