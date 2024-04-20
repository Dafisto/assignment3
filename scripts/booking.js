/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costLabel = document.getElementById("calculated-cost");
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");
var clearButton = document.getElementById("clear-button");
var dayOfWeek = document.getElementById("monday","tuesday","wednesday","thursday","friday");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function daySelection(){
    if (dayOfWeek.classList.contains("clicked")) {
        dayOfWeek.classList.remove("clicked");
    }
    else {
        dayOfWeek.classList.add("clicked");
    }
    calculatedCost();
}

dayOfWeek.addEventListener("click", daySelection);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll() {
    if (dayOfWeek.classList.contains("clicked"));
     {
        dayOfWeek.classList.remove("clicked");
    }
    calculatedCost();
}

clearButton.addEventListener("click", clearAll);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayClick() {
    var day = document.getElementById("half");
    if (day.classList.contains("clicked") != true) {
        fullDay.classList.remove("clicked");
        // day = "half";
        day.classList.add("clicked");       
    calculatedCost();
}
}
halfDay.addEventListener("click", halfDayClick);


// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayClick() {
    var day = document.getElementById("full");
    if (day.classList.contains("clicked") != true) {
        halfDay.classList.remove("clicked");
        // day = "full";
        day.classList.add("clicked"); 
    calculatedCost();
}
}
fullDay.addEventListener("click", fullDayClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function dayCounterCheck() {    
    for (numOfDays in dayOfWeek) {
        if (dayOfWeek.classList.contains("clicked")) {
            numOfDays += 1;
        }
    }
}

function calculatedCost() {
    let costLabel = document.getElementById("calculated-cost");
    var totalCost = 0;
    if (halfDay.classList.contains("checked")) {
        totalCost = dayCounterCheck() * 25;       
    }
    else {
        totalCost = dayCounterCheck() * 40;        
    }
    costLabel.innerHTML = totalCost;
}