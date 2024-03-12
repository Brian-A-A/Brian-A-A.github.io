// Main-Sec Animation Code Starts Here

document.addEventListener("DOMContentLoaded", function (event) {
  var projIconContainer = document.querySelector(".proj-icon-container");
  projIconContainer.style.animation = "none";
  projIconContainer.offsetHeight;
  projIconContainer.style.animation = null;
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var jsProjMsg = document.querySelector(".js-proj-msg");
    jsProjMsg.style.display = "block";
  }, 3000);
});

// Main-Sec Animation Code Ends Here

// Quote Generator Code Starts Here
var qTxt = document.getElementById("q-txt");
var qName = document.getElementById("q-name");
var qBg = document.getElementById("q-generator");
var genBtn = document.getElementById("q-btn-active");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
    bgColor: "#ffb3ba",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    person: "Bill Gates",
    bgColor: "#ffdfba",
  },
  {
    quote: "Don't be afraid to change the model.",
    person: "Larry Page",
    bgColor: "#ffffba",
  },
  {
    quote:
      "You don't have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.",
    person: "Michael Dell",
    bgColor: "#ffdfba",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney",
    bgColor: "#baffc9",
  },
  {
    quote:
      "The secret to successful hiring is this: look for the people who want to change the world.",
    person: "Marc Benioff",
    bgColor: "#ffdfba",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    person: "Steve Jobs",
    bgColor: "#bae1ff",
  },
  {
    quote:
      "The only constant in the technology industry is change. Embrace it, adapt to it, and innovate with it.",
    person: "Satya Nadella",
    bgColor: "#b8dbd3",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
    bgColor: "#68c4af",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    person: "Bill Gates",
    bgColor: "#f7e7b4",
  },
];

function pickRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  qTxt.style.animation = "fadeIn 0.7s ease";
  qTxt.textContent = randomQuote.quote;
  qName.textContent = "- " + randomQuote.person;
  qName.style.animation = "fadeIn 0.7s ease";
  qBg.style.backgroundColor = randomQuote.bgColor;
  setTimeout(function () {
    qTxt.style.animation = "none";
    qName.style.animation = "none";
  }, 1000);
}

genBtn.addEventListener("click", pickRandomQuote);

// Quote Generator Code Ends Here

// To-Do List Code Starts Here
const add_TD = document.querySelector("#add_button");
var close = document.getElementsByClassName("close");
var i;

function todoList() {
  var item = document.querySelector("#to-do_input").value;
  var item_value = document.createTextNode(item);
  var new_li = document.createElement("li");
  new_li.appendChild(item_value);

  if (item === "") {
    return;
  } else {
    document.querySelector("#myUL").appendChild(new_li);
  }
  document.querySelector("#to-do_input").value = "";

  var btnRemove = document.createElement("button");
  btnRemove.innerText = "X";
  btnRemove.className = "close";
  new_li.appendChild(btnRemove);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

add_TD.addEventListener("click", todoList);
// To-Do List Code Ends Here

// Calculator Code Starts Here
class Calculator {
  constructor(previousOperandInput, currentOperandInput) {
    this.previousOperandInput = previousOperandInput;
    this.currentOperandInput = currentOperandInput;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandInput.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandInput.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandInput.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[number-button]");
const operationButtons = document.querySelectorAll("[operation-button]");
const previousOperandInput = document.querySelector("[previous-operand]");
const currentOperandInput = document.querySelector("[current-operand]");
const equalButton = document.querySelector("[equal-button]");
const allClearButton = document.querySelector("[all-clear-button]");
const delButton = document.querySelector("[delete-button]");

const calculator = new Calculator(previousOperandInput, currentOperandInput);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

delButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
// Calculator Code Ends Here
