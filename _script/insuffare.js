function insuffare (CurBalStr) {

	var CurBal = Number(CurBalStr)
	
	var SingleFare = [ 2.75 , 1.35 ]
	var BonusThres = 5.5
	var BonusPerc = 1.11
	var BuyUnit = 0.05

	var UseBonus = true

	var Silent = false
	
	var pageTar = document.getElementById("PageTarget") // id where to write the results

	// function to calculate bonus
	function Bonus(x,thres,perc) {
		return x*(1+((x>thres)*(perc-1)))
	}

	// function to get the value before bonus
	function BonusInv(x,thres,perc) {
		return x/(1+((x>thres)*(perc-1)))
	}

	// make initial value more than bonus threshold
	if (UseBonus == true) {
		var NewBal = BonusThres * BonusPerc + CurBal
	} else {
		var NewBal = CurBal
	}

	// add balance to integer single fare
	var AddBal = [ 
		SingleFare[0] - NewBal % SingleFare[0] ,
		SingleFare[1] - NewBal % SingleFare[1]
	]

	NewBal += AddBal[0]
	// TODO: reduced fare

	// see how much needs to be added
	var BalDif = NewBal - CurBal
	// apply inverse bonus function to calculate the amount before bonus
	var BuyBal = Math.ceil(Math.round(BonusInv(BalDif,BonusThres,BonusPerc)*100)/100/BuyUnit)*BuyUnit


	// report back
	NewBal = CurBal + Math.round(Bonus(BuyBal,BonusThres,BonusPerc)*100)/100
	var NrRides = Math.round(NewBal/SingleFare[0])
	RsdBal = NewBal - (NrRides * SingleFare[0])

	pageTar.innerHTML = "On Card: $" + CurBal.toFixed(2) + "<br>" +
		"Buy: <b>$" + BuyBal.toFixed(2) + "</b> (" +
		"incl. bonus: $" + Bonus(BuyBal,BonusThres,BonusPerc).toFixed(2) + ")<br>" +
		"New balance: $" + NewBal.toFixed(2) + " (" + NrRides + " rides) <br>"
		"Residual balance: $" + RsdBal.toFixed(2) + "<br>"

	return BuyBal

	//type 'c)<tab> isoD<tab>' to add following line
	//(c) Copyright 2017 Tom van Grootel</a>. All Rights Reserved. 2017-02-22
}