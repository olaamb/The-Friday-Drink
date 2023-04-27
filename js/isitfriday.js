var weekday;

var dateObj = new Date()
var weekday = dateObj.toLocaleString('en-US', { weekday: "long" })
console.log(weekday);
if (weekday === "Friday") {
    weekday = "It's Friday! Wohooo!!";
} else if (weekday === "Saturday") {
    weekday = "It's Saturday, even better than Friday!"
} else weekday = "Not Friday yet :(";

document.getElementById("isitfriday").innerHTML = weekday;
