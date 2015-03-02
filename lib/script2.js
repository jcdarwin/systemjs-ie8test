;
(function(){
	// Simulate a slow-loading script
	sleep(1000);

	var msg = 'Script 2 reporting in (depends on Script 1)';

	var li = document.createElement("li");
	li.innerText = msg;

	var el = document.querySelector('.content');
	el.appendChild(li);

	console.log(msg);
})();
