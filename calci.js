
var a;
var b;
var sign="";

function calci(x) {
	if(sign=="")
    a=calc2.output2.value;
	
	switch(x)
	{
	case '+':
		calc2.output2.value='';
		sign = x;
		break;	
	
	case '-':
		calc2.output2.value='';
		sign = x;
		break;	
	
	case '*':
		calc2.output2.value='';
		sign = x;
		break;	
	
	case '/':
		calc2.output2.value='';
		sign = x;
		break;	
	
	case '=':
		calc2.output2.value=eval(a+sign+calc2.output2.value);
		break;
		
	case 'C':
		a="";
		sign="";
		calc2.output2.value="";
		break;	
	}
	
}
function S_equal() {
	switch(sign)
	{
	case "+":
	calc2.output2.value=a+calc2.output2.value;
	break;	
	}
    
}
