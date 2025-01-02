// fetch requd elements from html file 
let inputScreen = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");  // gives list of <button> elements
 
// taking empty string for storing result after computation (which we display to  <input type="text"> of html on browser)
let resultStr = "";

buttons.forEach( button => {

    button.addEventListener("click" , (e) => {
        if(e.target.innerHTML == '='){   // event.target : property returns the element where the event(click) occured ( it is read only)
            resultStr = eval(resultStr); // eval(string arg) : string method in js that evaluates the passed string and returns evaluated value
            inputScreen.value = resultStr; // value: The value property sets or returns the value of an attribute.
        }

        else if(e.target.innerHTML == 'AC'){    // == : value based comparison (not strict)
            resultStr = "";  // clear everything in string
            inputScreen.value = resultStr;  // show on browser (by setting value of inputScreen fetched element above)
        } 

        else if(e.target.innerHTML == "DEL"){
            resultStr = resultStr.substring( 0, resultStr.length-1); // returns subString of 'resultStr' from index 0 to length-1 (excluded length-1 index i.e., last added element is removed)
            inputScreen.value = resultStr;  // to show on browser
        }

        else{ //add in resultStr string (then shown in inputSCreen)
        resultStr += e.target.innerHTML;    // what we click(event happen) concatenate it in resultStr (evaluated if '=' clicked above)
        inputScreen.value = resultStr;  // set to inputScreen (show on browser)
        }

    });

});   // forEach() closed