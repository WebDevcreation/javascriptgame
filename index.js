function generate()
{
	var num = (1+Math.random())*100000;
	k = (4+Math.random());
	num = Math.round(num*k);
	console.log(num);
	localStorage.setItem("RandVal",num);
	document.getElementById("num").innerHTML = localStorage.getItem("RandVal");
	document.getElementById("ref").innerHTML = "Refreshing the page in 5 seconds...";
	setTimeout(function(){
		if($('#one').css("display","block"))
		{
			$('#one').css("display","none");
			$('#two').css("display","block");
		}
	}, 5000);
}
function check()
{
	var chk = document.forms["form"]["valchk"].value;
	var resEl = document.getElementById("res");
	resEl.style.display = "block";
	if(chk=="")
		resEl.innerHTML = " Enter a number";
		//alert("Enter a number");
	else if(chk.length!=6)
		resEl.innerHTML = " Enter a six digit number";
		//alert("Enter a six digit number");
	else
	{
		var temp = localStorage.getItem("RandVal");
		var count=0;
		for(i=0;i<6;i++)
		{
			if(temp[i]==chk[i])
				count++;
		}
		if (count==6)
			resEl.innerHTML = " Correct Guess";
		else if(count==0 || count==1)
			resEl.innerHTML = count+" correct guess";
		else
			resEl.innerHTML = count+" correct guesses";
	}
	var $form = $('form');
	$form.submit(function(){
		$.post($(this).attr('action'), $(this).serialize(), function(response){
       	// Nothing to be printed on success. Left blank intentionally.
		},'json');
		return false;
	});
}
function makeChange()
{
	window.location.reload(true);
	document.getElementById("res").style.display = "none";
}
