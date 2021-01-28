function callback() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}

setInterval(callback, 1000);
