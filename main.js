console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1div = document.getElementById('node1');
node1div.innerHTML = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2div = document.getElementsByClassName("node2")[0];
node2div.textContent = "I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Tags = document.getElementsByClassName("h3");
for (let h3 of h3Tags) {
    h3.textContent = "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const pElement = document.createElement("p");
pElement.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parentElement = document.querySelector("#parent");
parentElement.appendChild(pElement);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const aElement = document.createElement("a");
aElement.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
aElement.href = "https://myspace.com";
aElement.target = "_blank";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentElement.insertBefore(aElement, pElement);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
