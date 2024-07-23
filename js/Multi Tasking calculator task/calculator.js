
// functions for 6 buttons...//


function showDiv(divId) {
    const divs = document.querySelectorAll('.calculator-tab > div');
    divs.forEach(div => {
        if (div.id === divId) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    });

}





// functions for calculator...//


function addition(){
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
    document.getElementById("result").value = "Result: " + (parseInt(no1) + parseInt(no2));
  }

  function subtraction(){
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
    document.getElementById("result").value = "Result: " + (parseInt(no1) - parseInt(no2));
  }

  function multiply(){
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
    document.getElementById("result").value = "Result: " + (parseInt(no1) * parseInt(no2));
  }

  function division(){
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
    document.getElementById("result").value = "Result: " + (parseInt(no1) / parseInt(no2));
  }





//   functions for currency-convertor


  function convertcurrency(currency) {
    const rupeeInput = document.getElementById('ruppee').value;
    const rupees = parseFloat(rupeeInput);

    if (isNaN(rupees)) {
        alert('Please enter a valid number in Rupees.');
        return;
    }

    let conversionRate = 0;
    let convertedValue = 0;

    switch (currency) {
        case 'dollar':
            conversionRate = 0.012; // Example conversion rate
            convertedValue = rupees * conversionRate;
            document.getElementById('dollar').value = 'Dollar: ' + convertedValue.toFixed(2);
            break;
        case 'pound':
            conversionRate = 0.0095; // Example conversion rate
            convertedValue = rupees * conversionRate;
            document.getElementById('pound').value = 'Pound: ' + convertedValue.toFixed(2);
            break;
        case 'dinar':
            conversionRate = 0.0036; // Example conversion rate
            convertedValue = rupees * conversionRate;
            document.getElementById('dinar').value = 'Dinar: ' + convertedValue.toFixed(2);
            break;
        default:
            alert('Unknown currency');
    }
}


// tempertaure function


function convertCelsius() {
    const celsius = document.getElementById('celcius').value;
    if (celsius === '') {
        alert('Please enter a value for Celsius');
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = `Fahrenheit: ${fahrenheit}`;
}



// functions of weight convertor

function convertGrams() {
    const grams = parseFloat(document.getElementById('grams').value);
    
    if (isNaN(grams) || grams < 0) {
        alert('Please enter a valid weight in grams.');
        return;
    }

    const kg = grams / 1000;
    const pounds = grams * 0.00220462;
    const lbs = pounds; // lbs is just another name for pounds
    const ton = grams / 1e6;

    document.getElementById('kg').value = 'Kilogram: ' + kg.toFixed(2);
    document.getElementById('pounds').value = 'Pounds: ' + pounds.toFixed(2);
    document.getElementById('lbs').value = 'LBS: ' + lbs.toFixed(2);
    document.getElementById('ton').value = 'Ton: ' + ton.toFixed(6);
}



// functions of percentage calculator


function calculatePercentage() {
    // Get the total marks and obtained marks
    var totalMarks = document.getElementById('tmarks').value;
    var obtainedMarks = document.getElementById('omarks').value;

    // Check if the input fields are not empty and are numbers
    if (totalMarks && obtainedMarks && !isNaN(totalMarks) && !isNaN(obtainedMarks)) {
        // Parse the input values to floats
        totalMarks = parseFloat(totalMarks);
        obtainedMarks = parseFloat(obtainedMarks);

        // Calculate the percentage
        var percentage = (obtainedMarks / totalMarks) * 100;

        // Display the result in the readonly input field
        document.getElementById('percentage').value = 'Percentage : ' + percentage.toFixed(2) + '%';
    } else {
        // If inputs are invalid, display an error message
        document.getElementById('percentage').value = 'Percentage : Invalid input';
    }
}




// functions of Age calculator

function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        document.getElementById('age').value = `Age: ${age}`;
    } else {
        alert('Please select your date of birth.');
    }
}

document.getElementById('checkAgeBtn').addEventListener('click', calculateAge);
