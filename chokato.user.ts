// ==UserScript==
// @name Chokato
// @author vikarus
// @description Grabs dailies from neopets.com upon visiting the site and returns to inventory.
// @version 0.2
// @match https://neopets.com/*
// @require http://code.jquery.com/jquery-3.2.1.js
// ==/UserScript==


const pageFormPairs = {
	"https://neopets.com/home/": null,
	"https://neopets.com/island/tombola.phtml": "Play Tombola!",
	"https://neopets.com/pirates/anchormanagement.phtml": document.getElementById("form-fire-cannon"),
	"https://neopets.com/bank.phtml": document.getElementById("frmCollectInterest"),
	"https://neopets.com/desert/fruit/index.phtml": "Spin, spin, spin!",
	"https://neopets.com/desert/shrine.phtml": "Approach the Shrine",
	"https://neopets.com/prehistoric/omelette.phtml": "Grab some Omelette",
	"https://neopets.com/jelly/jelly.phtml": "Grab some Jelly",
	"https://neopets.com/faerieland/tdmbgpop.phtml": "Talk to the Plushie",
	"https://neopets.com/faerieland/springs.phtml": "Heal my Pets",
	"https://neopets.com/halloween/applebobbing.phtml?bobbing=1": null,
	"https://neopets.com/shop_of_offers.phtml?slorg_payout=yes": null,
	"https://neopets.com/freebies/index.phtml": null,
	"https://neopets.com/worlds/geraptiku/process_tomb.phtml": null,
	"https://neopets.com/inventory.phtml": null
}

// '/water/fishing.phtml', {go_fish: '1'

function getSubmitFormByValue(formValue: string | String) : any
{
	return document.querySelector(`input[type=submit][value="${formValue}"]`);
}

function checkSnowagerTime(): boolean
{
	return currNSTInBounds(6, 7) || currNSTInBounds(14, 15) || currNSTInBounds(22, 23);
}

function checkDeadlyDiceTime(): boolean
{
	return currNSTInBounds(0, 1);
}

function currNSTInBounds(startingHour: number, endingHour: number): boolean
{
	let currNST = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));	
	return(
		currNST > new Date(currNST.getFullYear(), currNST.getMonth(), currNST.getDay(), startingHour, 5) &&
		currNST < new Date(currNST.getFullYear(), currNST.getMonth(), currNST.getDay(), endingHour)
		);
}

function main()
{
	debugger;
	var pages = Object.keys(pageFormPairs);
	var currPageIndex = pages.indexOf(window.location.href);
	console.log("Current page is " + window.location.href + " which is at index " + currPageIndex);

	var formToSubmit = pageFormPairs[window.location.href];
	console.log(formToSubmit);
	
	try
	{
		if(typeof formToSubmit === 'string' || formToSubmit instanceof String)
		{
			formToSubmit = getSubmitFormByValue(formToSubmit);
		}
		if(formToSubmit != null)
		{
			formToSubmit.submit();
		}
	}
	catch
	{
		console.log("Form unavailable. Moving on...");
	}

	console.log(pages.length);
	if(currPageIndex <= pages.length)
	{
		console.log("Going to page " + pages[currPageIndex+1])
		setTimeout(() => {
			window.location.href = pages[currPageIndex+1];
		}, 5000);
	}
}

setTimeout(main, 1000);