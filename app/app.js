;
(function(){
	var msg = 'App reporting in (depends on Script 1 and Script 2)';

	var li = document.createElement("li");
	li.innerText = msg;

	var el = document.querySelector('.content');
	el.appendChild(li);

	console.log(msg);
})();
