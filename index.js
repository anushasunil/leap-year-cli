const readlineSync = require('readline-sync');
var userInputYear = readlineSync.question("Please enter a year to check if it is a leap year or not: ");


function isLeapYear(year)
{
	if (year % 400 === 0)
	{
        return true;
    }

    if(year % 100 === 0)
    {
        return false;
    }

    if(year % 4 === 0)
    {
        return true;
    }

    return false;
}

function printResult(result)
{
	if(result)
	{
		console.log("is a leap year");
	}
	else{
		console.log("is not a leap year");
	}
}

printResult(isLeapYear(userInputYear));