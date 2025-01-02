const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  //alert(calculatedValue)
  if (calculatedValue == "Infinity") {
    res.value = "Error ";
    setTimeout(() => {
      res.value = "";
    }, 1300);
    return;
  }
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function squared(value) {
  //const calculatedValue = Math.pow(parseInt(value, 10), 2);
  const calculatedValue = eval(value+"*"+value || null);  
  res.value = calculatedValue;
}

function squar(value) {
  const calculatedValue = Math.sqrt(parseInt(value, 10));
  res.value = calculatedValue;
}

function swet(value) {
  const meter = parseInt(eval(value || null), 10);
  //alert(meter);
  //console.log(meter);
  const rate1 = 1.26;
  const rate2 = 2.89;
  const rate3 = 4.39;
  const indications1 = 100;
  const indications2 = 800;
  let check = 0;
  if ( meter > 0 && meter <= indications1 ) {
    check = meter  *  rate1;
  }else if (meter > indications1 && meter <= indications2) {
    check = (indications1 * rate1) + ((meter - indications1) * rate2);
  }else if (meter > indications2 ) {
    check = (indications1 * rate1) + ((indications2 - indications1) * rate2) + ((meter - indications2) * rate3);
  } else { check = ""; }
  res.value = check;
}

function sw(value) {
  let calculatedValue = value.slice(0, -1);
  res.value = calculatedValue;
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
