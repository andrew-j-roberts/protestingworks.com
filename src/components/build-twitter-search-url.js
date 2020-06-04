// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export function buildTwitterSearchUrl({ date, location }) {
  let oneDayAfterDate = new Date(date).addDays(1);
  // this is all just stupid JS date logic to give me a Twitter formatted date
  // YYYY-MM-DD
  // I use two days after the protest date to get the relevant tweets,
  // and since locations have been having repeat protests.
  return `https://twitter.com/search?lang=en&q=${encodeURIComponent(
    location
  )}(George%20OR%20Floyd%20OR%20Protests)since%3A${new Date(
    date
  ).getFullYear()}-${"0" + `${new Date(date).getMonth() + 1}`.slice(-2)}-${"0" +
    `${new Date(date).getDay() + 1}`.slice(-2)}until%3A${new Date(
    date
  ).getFullYear()}-${"0" +
    `${new Date(oneDayAfterDate).getMonth() + 1}`.slice(-2)}-${"0" +
    `${new Date(oneDayAfterDate).getDay() + 1}`.slice(-2)}&src=typed_query`;
}
