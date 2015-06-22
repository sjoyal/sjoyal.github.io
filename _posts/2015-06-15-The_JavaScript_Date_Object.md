In a recent project, I was tasked with adding various dates to a page that correlated with information obtained from a weather API. However easy that sounds (it was and it wasn't), I encountered a problem with the date provided by the API. That date came in the following form:

`1434239543`

That's an epoch time string...aka the number of seconds since January 1, 1970. Thanks Unix nerds. Being a newb, I had never seen this date format and had no idea how to convert it to a human readable format. A little bit of googling led me to the JavaScript Date object, and I was able to create a Date object for the string (Date accepts various values to create the object; I used `string*1000` to satisfy the requirement that the epoch time be created in milliseconds). Once created, I could pass the Date object as a parameter through a function I created (see below) to convert it to the desired string format. The coolest part of the function is the ability to assign specific variables for the date based on the `get` methods from Date.prototype. An exhaustive list of the various `get` methods that can be used with the Date object can be found in the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

```JavaScript

var foo = new Date(1000*(epochDateString));

function dateConvert(dateobj) {
  var year = dateobj.getFullYear();
  var month = dateobj.getMonth();
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var date = dateobj.getDate();
  var day = dateobj.getDay();
  var dayName = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  var convertedDate = (dayName[day] + ' ' + months[month] + ' ' + date + ', ' + year).toString();

  return convertedDate;
};

dataConvert(foo); // example return would be 'Mon Jun 15, 2015'

```

While this method worked, I've since learned that there are numerous conversion methods already available in Date.prototype. Burn. However, I learned some valuable lessons regarding the Date object itself. Should you ever need the date in a format not already available, any variation of the function included above should work. Or.....you can always just use moment.js. No big deal :sob:
