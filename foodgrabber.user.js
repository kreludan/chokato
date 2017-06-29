// ==UserScript==
// @name foodGrabber
// @author Vikram Kohli
// @description Grabs your daily free jelly and omelette on Neopets!
// @version 1.0
// @match http://www.neopets.com/*
// @require http://code.jquery.com/jquery-3.2.1.js
// ==/UserScript==

function main()
{
	if (window.location.href==="http://www.neopets.com/" || window.location.href==="http://www.neopets.com/index.phtml")
	{
		GiantOmelette();
	}
	else if (window.location.href==="http://www.neopets.com/prehistoric/omelette.phtml")
	{
		GiantJelly();
	}
	else if (window.location.href==="http://www.neopets.com/jelly/jelly.phtml")
	{
		window.location.href="http://www.neopets.com/inventory.phtml";
	}
}

function post(action, params)  // Based on https://stackoverflow.com/a/133997
{
	var form=document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", action);
	for(var key in params)
	{
		var field=document.createElement("input");
		field.setAttribute("type", "hidden");
		field.setAttribute("name", key);
		field.setAttribute("value", params[key]);
		form.appendChild(field);
	}
	document.body.appendChild(form);
	form.submit();
}

function GiantOmelette()
{
	post('http://www.neopets.com/prehistoric/omelette.phtml', {type: 'get_omelette'});
}

function GiantJelly()
{
	post('http://www.neopets.com/jelly/jelly.phtml', {type: 'get_jelly'});
}

main();
