console.log("test");

// function die beim     anklicken      Hintergrund ändert  backgroundColor
// for loop
// length

// class example   farbe ändern

// Bonus nochmal button    anklicken,      dann wieder farbe zurück  
// classList ?? toggle ?? 

const btn = document.querySelector("#button");
console.log(typeof btn); // object
console.log(btn);

// const example = document.getElementsByClassName("example"); // geht - holt jedes object nacheinander
const example = document.querySelectorAll(".example"); // geht - holt jedes object nacheinander
console.log(typeof example); // object
console.log(example);
console.log(example[0]);
console.log(example[1]);
console.log(example[3]); // text --> span
console.log(typeof example[3]); // object
//btn.addEventListener("click", myFunction); 
console.log(btn);

const array = ["test", "test2"];
console.log(typeof array); // object
console.log(array[0]);
console.log(typeof array[0]); // string



// Funktion Farbwechsel
function myFunction() {

    // funktioniert Function
    console.log("in function");

    // was kommt von example an 
    console.log(example);
    console.log(typeof example); // object
    console.log(Array.isArray(example)); // false    --> nein  ist  kein  Array


    // Schleife Szenario 1 geht
     for (i of example) {
            console.log(example[i]);
            console.log(i);
            console.log(typeof example[i]);
            console.log(typeof i);
            console.log(Array.isArray(example)); // false    --> nein  ist  kein Array

            i.classList.toggle(".js_backgroundColor___black")    // wechselt farbe auch wieder zurück bei jedem nächsten drücken
    
    
            console.log(`farbe ? " + ${i} : + ${i.classList.toggle("js_backgroundColor___black")}`)
        }


        // Schleife Szenario 2 geht
/*     for (let i = 0; i < example.length; i++) {
        console.log(example[i]);
        console.log(i);
        console.log(example[i]);
        console.log(i);
        if (example[i].classList) {  // prüft ob es ein example[i].style gibt bzw. ob es existiert, dann true      // mit == true und === true geht es nicht, da dort immer false raus kommt
            console.log("in if");
            console.log(Array.isArray(example)); // false    --> nein  ist  kein Array
            example[i].classList.toggle("js_backgroundColor___black");

        } */

        btn.style.backgroundColor = "gray";

    }

