
 // +++++ Activity 1: Variable Declaration +++++
    // task 1st _____
        var myVar = 981740
        console.log(myVar);
    
    // task 2nd _____
        let myFirstName = "Devender";
        let myLastName = "Rajput";
        console.log(myFirstName +" "+ myLastName);
 
 
 // +++++ Activity 2: Constant Declaration +++++
    // task 3rd _____
        const myConst = 1
        const mySecConst = true;
        console.log(myConst==mySecConst, 0 == mySecConst);


 // +++++ Activity 3: Data Types +++++

    // Number
    let age = 25;
    let temperature = 36.6;

    // String
    let name = "Alice";
    let greeting = 'Hello, world!';

    // Boolean
    let isLoggedIn = true;
    let hasAccess = false;
    console.log( typeof isLoggedIn + " " + typeof hasAccess);


    // Object
    let car = {
        brand: "Tesla",
        model: "Model S",
        year: 2021
    };
    console.log( typeof car);
    

    // Array (which is a type of Object)
    let fruits = ["Apple", "Banana", "Cherry"];
    console.log( typeof fruits);


    // Null
    let selectedElement = null;
    console.log( typeof selectedElement);

    // BigInt
    let bigNumber = 9007199254740991n;
    console.log(typeof bigNumber);


    // Symbol
    let uniqueId = Symbol('id');
    console.log(typeof uniqueId);


    // Undefined
    let user;
    console.log(typeof user); // undefined


 // +++++ Activity 4: Reassigning Variables +++++

    // test 1st ______
    let myVariable = "Initial Value";
    console.log("Initial Value: " + myVariable);

    // test 2nd ______
    myVariable = "New Value";
    console.log("New Value: " + myVariable);


 // +++++ Activity 4: Reassigning Variables +++++

    // cosnt test 1st ________
    const myConstVariable =  "my constant value";
    console.log("MY FIRST VALUE  " +  myConstVariable)

    // const test 2nd _______
    myConstVariable = 3
    console.log("my new value in number 'with error' " + myConstVariable );
    

/// challenge completed 