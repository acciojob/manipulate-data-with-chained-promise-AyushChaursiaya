// //your JS code here. If required.
// function getData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve([1, 2, 3, 4]);
// 		}, 3000)
// 	});
// }

// function oddNumbers(arr) {
// 	return arr.filter((num) => num % 2 === 0);
// }

// function ManipulatedNumber(arr) {
// 	return arr.map((num) => num * 2);
// }


// function updateResult(text) {
// 	document.getElementById('output').innerHTML = text;
// }


// async function processData() {

// 	try{
// 		const data = await getData();
		
// 			await new Promise((resolve) => { 
// 			setTimeout(resolve);
// 		},1000);
// 		updateResult(oddNumbers(data).join(", "));
	
// 			await new Promise((resolve) => { 
// 			setTimeout(resolve);
// 		},2000);
// 		updateResult(ManipulatedNumber(data).join(", "));
// 		}catch(error) {
// 		console.log(error);
// 		}
// }

// processData();

// Function to return a promise that resolves with an array after 3 seconds
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to multiply even numbers by 2 in an array
function multiplyEvenNumbers(arr) {
    return arr.map(num => num * 2);
}

// Function to update the text of an HTML element with the ID of "output"
function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

// Function to handle the asynchronous logic
async function processData() {
    try {
        const data = await getData();
        
        // Display even numbers after 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        updateOutput(filterOddNumbers(data).join(','));
        
        // Multiply even numbers by 2 after 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        updateOutput(multiplyEvenNumbers(data).join(','));
    } catch (error) {
        console.log(error);
    }
}

// Call the function to start the process
processData();
