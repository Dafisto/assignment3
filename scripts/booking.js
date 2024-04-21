/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costLabel = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");
var mondayButton = document.getElementById("monday")
var tuesdayButton = document.getElementById("tuesday")
var wednesdayButton = document.getElementById("wednesday")
var thursdsayButton = document.getElementById("thursday")
var fridayButton = document.getElementById("friday")
var dayCounter = 0
var dailyRate = 40
let fullDay = document.getElementById("full")
let halfDay = document.getElementById("half")


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function mondayClicked() {
    if (mondayButton.classList.contains("clicked")) {
        mondayButton.classList.remove("clicked")
        dayCounter -= 1
    }
    else {
        mondayButton.classList.add("clicked")
        dayCounter += 1
    }
    calculatedCost()
}

mondayButton.addEventListener("click", mondayClicked)

function tuesdayClicked() {
    if (tuesdayButton.classList.contains("clicked")) {
        tuesdayButton.classList.remove("clicked")
        dayCounter -= 1
    }
    else {
        tuesdayButton.classList.add("clicked")
        dayCounter += 1
    }
    calculatedCost()
}

tuesdayButton.addEventListener("click", tuesdayClicked)

function wednesdayClicked() {
    if (wednesdayButton.classList.contains("clicked")) {
        wednesdayButton.classList.remove("clicked")
        dayCounter -= 1
    }
    else {
        wednesdayButton.classList.add("clicked")
        dayCounter += 1
    }
    calculatedCost()
}

wednesdayButton.addEventListener("click", wednesdayClicked)

function thursdayClicked() {
    if (thursdsayButton.classList.contains("clicked")) {
        thursdsayButton.classList.remove("clicked")
        dayCounter -= 1
    }
    else {
        thursdsayButton.classList.add("clicked")
        dayCounter += 1
    }
    calculatedCost()
}

thursdsayButton.addEventListener("click", thursdayClicked)

function fridayClicked() {
    if (fridayButton.classList.contains("clicked")) {
        fridayButton.classList.remove("clicked")
        dayCounter -= 1
    }
    else {
        fridayButton.classList.add("clicked")
        dayCounter += 1
    }
    calculatedCost()
}

fridayButton.addEventListener("click", fridayClicked)




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll() {
    if (mondayButton.classList.contains("clicked")) {
        mondayButton.classList.remove("clicked")
    }
    if (tuesdayButton.classList.contains("clicked")) {
        tuesdayButton.classList.remove("clicked")
    }
    if (wednesdayButton.classList.contains("clicked")) {
        wednesdayButton.classList.remove("clicked")
    }
    if (thursdsayButton.classList.contains("clicked")) {
        thursdsayButton.classList.remove("clicked")
    }
    if (fridayButton.classList.contains("clicked")) {
        fridayButton.classList.remove("clicked")
    }
    dayCounter = 0
    calculatedCost();
}

clearButton.addEventListener("click", clearAll);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayClick() {     
    if (fullDay.classList.contains("clicked") == true) {
        fullDay.classList.remove("clicked");
        halfDay.classList.add("clicked");        
        dailyRate = 25        
        }
    calculatedCost();
}

halfDay.addEventListener("click", halfDayClick);


// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayClick() {    
    if (halfDay.classList.contains("clicked") == true) {
        fullDay.classList.add("clicked");
        halfDay.classList.remove("clicked");         
        dailyRate = 40;   
        }    
    calculatedCost();
}

fullDay.addEventListener("click", fullDayClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculatedCost() {
    let costLabel = document.getElementById("calculated-cost");
    totalCost = dayCounter * dailyRate;             
    costLabel.innerHTML = totalCost;
}