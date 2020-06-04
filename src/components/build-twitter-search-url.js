/**
 * src/components/build-twitter-search-url.js
 * Helper function to build the URL for the links that will help people quickly search Twitter for protests
 * @author Andrew Roberts
 */

export function buildTwitterSearchUrl({ date, city, location }) {
  const baseUrl = `https://twitter.com/search?lang=en&q=`;
  let oneDayAfterDate = new Date(date).addDays(1);
  // append all the necessary query components to base url
  return `${baseUrl}
  ${formQueryComponent_AllOfTheseWords({
    location,
  })}%20
  ${formQueryComponent_AnyOfTheseWords({
    city,
    location,
  })}%20${formQueryComponent_SinceDate({
    date,
  })}%20${formQueryComponent_UntilDate({
    date: oneDayAfterDate,
  })}`;
}

function formQueryComponent_AllOfTheseWords({ location }) {
  // locations should match exactly or the filter will be too coarse, looking for other suggestions
  return `${encodeURIComponent(location)}`;
}

function formQueryComponent_AnyOfTheseWords({ city, location }) {
  // "George" and "Floyd" are fixed, then append the city
  return `(George%20OR%20Floyd%20OR%20Protests%20OR%20${encodeURIComponent(
    city
  )})`;
}

function formQueryComponent_SinceDate({ date }) {
  return `since%3A${new Date(date).getFullYear()}-${"0" +
    `${new Date(date).getMonth() + 1}`.slice(-2)}-${"0" +
    `${new Date(date).getDay() + 1}`.slice(-2)}`;
}

function formQueryComponent_UntilDate({ date }) {
  return `until%3A${new Date(date).getFullYear()}-${"0" +
    `${new Date(date).getMonth() + 1}`.slice(-2)}-${"0" +
    `${new Date(date).getDay() + 1}`.slice(-2)}`;
}

// Date helper for all these...
// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
