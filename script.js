//your JS code here. If required.
function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000)
	});
}

function oddNumbers(arr) {
	return arr.filter((num) => num % 2 === 0);
}

function ManipulatedNumber(arr) {
	return arr.map((num) => num * 2);
}


function updateResult(text) {
	document.getElementById('output').innerHTML = text;
}


async function processData() {

	try{
		const data = await getData();
		
			await new Promise((resolve) => { 
			setTimeout(resolve);
		},1000);
		updateResult(oddNumbers(data).join(", "));
	
			await new Promise((resolve) => { 
			setTimeout(resolve);
		},2000);
		updateResult(ManipulatedNumber(data).join(", "));
		}catch(error) {
		console.log(error);
		}
}

processData();