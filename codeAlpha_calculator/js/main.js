const display = document.getElementById("display");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteLast(){
  display.value = display.value.slice(0, -1);
}

function calculate(){ 
    display.value = eval(display.value);
}

document.addEventListener("keydown", (e) => {

  if(
    (e.key >= "0" && e.key <= "9") ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "."
  ){

    appendValue(e.key);

  }

  else if(e.key === "Enter"){

    e.preventDefault();
    calculate();

  }

  else if(e.key === "Backspace"){

    e.preventDefault();
    deleteLast();

  }

  else if(e.key === "Escape"){

    clearDisplay();

  }

});