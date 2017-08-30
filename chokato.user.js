// ==UserScript==
// @name Chokato
// @author Vikram Kohli
// @description Grabs dailies from neopets.com upon visiting the site and returns to inventory.
// @version 0.1
// @match http://www.neopets.com/*
// @require http://code.jquery.com/jquery-3.2.1.js
// ==/UserScript==

function main()
{
	if (window.location.href==="http://www.neopets.com/" || window.location.href==="http://www.neopets.com/index.phtml")
	{
		setTimeout(GiantOmelette, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/prehistoric/omelette.phtml")
	{
		setTimeout(GiantJelly, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/jelly/jelly.phtml")
	{
		setTimeout(BankInterest, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/bank.phtml")
	{
		setTimeout(AnchorManagement, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/pirates/anchormanagement.phtml")
	{
		setTimeout(FruitMachine, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/desert/fruit/index.phtml")
	{
		setTimeout(ColtzanShrine, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/desert/shrine.phtml")
	{
		setTimeout(UnderwaterFishing, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/water/fishing.phtml")
	{
		setTimeout(TDMBGPOP, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/faerieland/tdmbgpop.phtml")
	{
		setTimeout(HealingSprings, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/faerieland/springs.phtml")
	{
		setTimeout(ShopOfOffers, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes")
	{
		setTimeout(MonthlyFreebies, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/freebies/index.phtml")
	{
		setTimeout(AppleBobbing, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/halloween/applebobbing.phtml?bobbing=1")
	{
		setTimeout(DesertedTomb, 3000);
	}
	else if (window.location.href==="http://www.neopets.com/worlds/geraptiku/process_tomb.phtml")
	{
		setTimeout(Inventory, 3000);
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

// TO FIX

function FruitMachine()
{
	window.location.href="/desert/fruit/index.phtml";
	document.querySelector('input[type=submit][value="Spin, spin, spin!"]').form.submit();
}

function AnchorManagement()
{
	post('/pirates/anchormanagement.phtml', {action: '4349a14eee27c508e6c290519b55a1e5'});
}

function BankInterest()
{
	post('/bank.phtml', {type: 'interest'});
}

// WORKING

function GiantOmelette()
{
	post('/prehistoric/omelette.phtml', {type: 'get_omelette'});
}

function GiantJelly()
{
	post('/jelly/jelly.phtml', {type: 'get_jelly'});
}

function ColtzanShrine()
{
	post('/desert/shrine.phtml', {type: 'approach'});
}

function UnderwaterFishing()
{
	post('/water/fishing.phtml', {go_fish: '1'});
}

function TDMBGPOP()
{
	post('/faerieland/tdmbgpop.phtml', {talkto: '1'});
}

function HealingSprings()
{
	post('/faerieland/springs.phtml', {type: 'heal'});
}

function ShopOfOffers()
{
	window.location.href="/shop_of_offers.phtml?slorg_payout=yes";
}

function MonthlyFreebies()
{
	window.location.href="/freebies/index.phtml";
}

function AppleBobbing()
{
	window.location.href="/halloween/applebobbing.phtml?bobbing=1";
}

function DesertedTomb()
{
	window.location.href='/worlds/geraptiku/process_tomb.phtml';
}

function Inventory()
{
	window.location.href='/inventory.phtml';
}

main();
