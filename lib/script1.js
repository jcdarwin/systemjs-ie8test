;
(function(){
	// Simulate a slow-loading script
	sleep(1000);

	var msg = 'Script 1 reporting in';

	var li = document.createElement("li");
	li.innerText = msg;

	var el = document.querySelector('.content');
	el.appendChild(li);

	console.log(msg);
})();
