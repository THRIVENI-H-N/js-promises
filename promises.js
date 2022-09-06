// Write one example explaining how you can write a callback function ?
function names(z) { //function 1
    console.log(z);
}

function thriveni(x, y, sum) { // another  that is function2
    let result = x + y;
    sum(result);
}
thriveni(23, 54, names);// calling the function 1 in function2




// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let production = () =>{
    console.log("Numbers")
    setTimeout(()=>{
    console.log("1")//prints after 1 sec
    setTimeout(()=>{
    console.log("2")//prints after 2 secs
    setTimeout(()=>{
    console.log("3")//prints after 3 secs
    setTimeout(()=>{
    console.log("4")//prints after 4 secs
    setTimeout(()=>{
    console.log("5")//prints after 5 secs
    setTimeout(()=>{
    console.log("6")//prints after 6 secs
    setTimeout(()=>{
    console.log("7")//prints after 7 secs
    },7000)//sets timeout interval as 7 secs
    },6000)//sets timeout interval as 6 secs
    },5000)//sets timeout interval as 5 secs
    },4000)//sets timeout interval as 4 secs
    },3000)//sets timeout interval as 3 secs
    },2000)//sets timeout interval as 2 secs
    },1000)//sets timeout interval as 1 sec
    };
    
    production()
    


// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let printNumber = ( time, num ) => {
    return new Promise( ( resolve, reject )=>{
    if( num ){
    setTimeout(()=>{
    resolve( num() )
    }, time)
    }
    else{
    reject( console.log("No number") )
    }
    })
    }
    printNumber( 0, ()=>console.log("Numbers"))//prints Numbers at 0th
    // sec
    .then(()=>{
    return printNumber(1000,()=>console.log('1'))//prints 1
    
    // after 1 secs
    })
    .then(()=>{
    return printNumber(2000,()=>console.log('2'))//prints 2
    
    // after 2 secs and so for others
    })
    .then(()=>{
    return printNumber(3000,()=>console.log('3'))
    })
    .then(()=>{
    return printNumber(4000,()=>console.log('4'))
    })
    .then(()=>{
    return printNumber(5000,()=>console.log('5'))
    })
    
    .then(()=>{
    return printNumber(6000,()=>console.log('6'))
    })
    .then(()=>{
    return printNumber(7000,()=>console.log('7'))
    })
    





// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

setTimeout(()=>{
    let id= [1,2,3,4,5,6,7,8];
    resolve(id);
    reject("error in fecthing the detalis")
}, 2000);
});
getId                      // consumer part
  .then((data)=>{
    console.log("the data is resolved" ,data);
    
  })
  .catch ((error)=>{
    console.log(error);
    
  })
  .finally(()=>{
    console.log("end of promise");
    
  });



// Create examples to explain callback function

// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished

function names(z) { //function 1
    console.log(z);
}

function thriveni(x, y, sum) { // another  that is function2
    let result = x + y;
    sum(result);
}
thriveni(23, 54, names);// calling the function 1 in function2


// Create examples to explain callback hell function

// // // //Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// // // returning results like other functions, takes time to produce the result. So, If we stuck in some 
// // // particular call which prevents us from making further calls ends us into callback Hell.
// // // //The structure of callback hell looks like pyramid/arrow shape.
// // // //This makes our code look haphazard and makes it hard to understand.
// // // // //We should always try to avoid using multiple Callbacks to end up falling into callback hell.
// // // // //We use Promises to prevent using Callbacks and thereby avoiding Callback Hell.

const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();



// Create examples to explain promises function

const getIds=new Promise((resolve, reject)=>{  //resolve,rejected are the executor functions  //producer part
	setTimeout(()=>{
		let id= [1,2,3,4,5,6,7,8];
		resolve(id);
		reject("error in fecthing the detalis")
	}, 2000);
});
 getIds                      // consumer part
      .then((data)=>{
		console.log("the data is resolved" ,data);
		
	  })
	  .catch ((error)=>{
		console.log(error);
		
	  })
	  .finally(()=>{
		console.log("end of promise");
		
	  });


// Create examples to explain async await function

async function tryingPromise(){
	console.log("i am inside the function using async/await");
	const response=await fetch("https://api.github.com/users");
	console.log("befoe the response is fetched");
	const users= await response.json();
	console.log("users resolved");

	return users;
}

console.log("before calling the function");
let data= tryingPromise();
console.log("after calling the function");
console.log("data received",data);
data.then((res)=>{
	console.log(res);

})
console.log("end of code");


// Create examples to explain promise.all function

const functionOne = () => {
    return "I am function One";
}

const functionTwo = () => {
    // return new Promise((res,rej)=>{
        setTimeout(() => {
            return("I am function Two");
        }, 3000);
    // })
}

const functionThree = () => {
    return "I am function Three";
}

const callAllFunctions = () => {
    let responseOne = functionOne();
    console.log(responseOne);

    
    let responseTwo = functionTwo();
    console.log(responseTwo);

    let responseThree = functionThree();
    console.log(responseThree);
}

callAllFunctions();