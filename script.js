function makeid(l) {
  // write your code here
	let arr =[];
	for(let i =0;i<l;i++)
		{
			let a = Math.floor(Math.random()*26)+65;
			arr.push(String.fromCharCode(a));
			
		}
	return arr.join('');
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); 
