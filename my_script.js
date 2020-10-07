/*REFERENCE:
https://att-b.udemycdn.com/2017-09-06_12-26-05-eed9c74d5e93d019e4e08520a8f32476/original.zip?secure=TDA7vRsOUarZeFm4DNr6kQ%3D%3D%2C1602086924&filename=37+Sourcefiles.zip
*/

/* The variable elements collects all the items with name cssProperty in the document of the index html. 
Since there exist multiple items with the same name, elements will be an array of items */

let elements = document.getElementsByName('cssProperty');

/* This creates the name 'div' for the item with id 'modify' in the attached index html*/

let div = document.getElementById('modify');

/* The code block below creates a for loop that collects the values for the background, width and height selected by the user.
Afterwards it replaces the default style of the the id 'modify' in the attached index html
*/

function set() {
    "use strict";
        
    for( let index = 0; index < elements.length; index++ ) 
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        console.log(cssProperty,cssValue);
        
        div.style[ cssProperty ] = cssValue;
    }
}

/* This block, collects the id of the dropdowns and adds functionality to the set button. Thus executes the 
selected values  by the user in the three dropdowns upon clicking the button set*/

document.getElementById('set').addEventListener('click',set);