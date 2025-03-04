// UC 1 to check if the employee is present or not
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2; // This gives either true or false
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
} else {
    console.log("Employee is present");
}


// UC2 Ability to check daily employee wage based on the work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;

// switch(empCheck){
//     case IS_PART_TIME: empHrs = PART_TIME_HOURS;
//     case IS_FULL_TIME: empHrs = FULL_TIME_HOURS;
//     default : empHrs = 0;
// }

// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Employee Wage: " + empWage);


// UC3 to get working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME: empHrs = PART_TIME_HOURS;
        case IS_FULL_TIME: empHrs = FULL_TIME_HOURS;
        default: empHrs = 0;
    }
}

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);



// UC 4 Calculating wages for a month
const NUM_OF_WORKING_DAYS = 2;
empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hours: " + empHrs + " Employee Wagea: " + empWage);


// UC 5 -> Calculating wages till number of working days and total working hours is reached
const MAX_HRS_IN_MONTH = 100;
NUM_OF_WORKING_DAYS = 10;
let totalEmplHrs = 0;
let totalWorkingDays = 0;

while (totalEmplHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalEmplHrs++;
    let empCheck = Math.floor(Math.random() * 10) % 3;

    totalEmplHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmplHrs); 1


// UC6 Storing daily wages in an array


function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

MAX_HRS_IN_MONTH = 160;

NUM_OF_WORKING_DAYS = 20;

totalEmplHrs = 0;

totalWorkingDays = 0;

let empDailyWageArr = new Array();

while (totalEmplHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {

    totalWorkingDays++;

    let empCheck = Math.floor(Math.random() * 10) % 3; let empHrs = getWorkingHours(empCheck); totalEmplHrs += empHrs;

    empDailyWageArr.push(calcDailyWage(empHrs));

}

let empwage = calcDailyWage(totalEmplHrs);

console.log("UC6 Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmplHrs + "Emp Wage: " + empwage)


// UC 7A - Calculate total Wage using Array forEach traversal or reduce method

let totEmpwage = 8;

function sum(dailywage) {

    totalWages += dailywage;

}
empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmplHrs + "Employee wage: " + empWage)
function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}

console.log("UC7A Emp Wage with reduce: " + empDailywageArr.reduce(totalWages, 0));

// UC 7B Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 8;
function mapDayWithWage(dailywage) {
    dailyCntr++;
    return dailyCntr + "=" + dailywage;
}

let mapDayWithWageArr = empDailywageArr.map(mapDayWithWage);
console.log("UC7B Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C Show Days when Full time wage of 160 were earned 
function fulltimewage(dailywage) {
    return dailywage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimewage);
console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);


// UC 7D Find the first occurrence when Full Time Wage was earned using find function 
function findFulltimewage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimewage));

// UC 7E Check if Every Element of Full Time Wage is truely holding Full time wage 
function isAllFulltimewage(dailywage) {
    return dailywage.includes("160");
}

console.log("UC 6E Check All Element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimewage));

// UC 7F Check if there is any Part Time Wage 
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("UC 7F Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G Find the number of days the Employee Worked 
function totalDaysWorked(numOfDays, dailywage) {
    if (dailywage > 0) return numOfDays + 1; return numOfDays;
}

console.log("UC 76 Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));


// UC 8 -> Store day and daily wage along with total wage

MAX_HRS_IN_MONTH = 160;

NUM_OF_WORKING_DAYS = 20;

totalEmplHrs = 0;

totalWorkingDays = 0;
empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmplHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getworkingHours(empCheck);
    totalEmplHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));

}

console.log(empDailyWageMap);

function totalWages(totalWage, dailywage) { return totalWage + dailywage; }

console.log("UC7A Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));


// UC 9 ->  use daily wage map daily hour map to perform following operations

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHrs = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailywage => {
    dailywage > 0
}).reduce(findTotal, 0);

console.log("UC9 - Employee wage with arrow function :" + "Total Hours: " + totalHrs + "Total wages:" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyWageMap.forEach((value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days: " + fullWorkingDays);
console.log("Partworking days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);




