const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  if (date === undefined) { return "Unable to determine the time of year!" };
  if (date instanceof Date) {
    if (isNaN(date.getTime())) { throw "Error"; };
  } else { throw "Error"; };
  let userMonth = date.getMonth();

  let winter = ["winter", 11, 0, 1],
    spring = ["spring", 2, 3, 4],
    summer = ["summer", 5, 6, 7],
    autumn = ["autumn", 8, 9, 10],
    yearSeasons = [winter, spring, summer, autumn],
    userSeason = "";
  yearSeasons.forEach(getSeason);

  function getSeason(season) {
    if (season.includes(userMonth)) { userSeason = season[0]; };
  };
  return userSeason;
};