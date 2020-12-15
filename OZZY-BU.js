


$(".boxtest").mouseover(function(){ 		//WHEN YOU MOUSE OVER AN ELEMENT
	$(this).addClass('hoveredOn');			//ADD THE CLASS HOVERED ON
})


$(".boxtest").mouseout(function(){			//WHEN YOU NO LONGER MOUSE OVER AN ELEMENT

	var t = $(this)							//LOAD THE CURRENT ELEMENT INTO A VARIABLE
	setTimeout(function(){					//THIS IS A DELAY FUNCTION
		t.removeClass('hoveredOn');			//REMOVE CLASS
	},6000)									//THIS IS HOW LONG TO DELAY
})							