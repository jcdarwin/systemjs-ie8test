# What is this?

This is an example of using <a href="https://github.com/systemjs/systemjs">system.js</a> with chained (synchronous) module dependencies, in order to test system.js IE8.

Start a local webserver and visit `index.html`: if all goes well, clicking on the `run` link should report as follows:

	* Script 1 reporting in
	* Script 2 reporting in (depends on Script 1)
	* App reporting in (depends on Script 1 and Script 2)
