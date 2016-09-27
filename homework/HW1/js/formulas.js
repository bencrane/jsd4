
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//calculates celsius to fahrenheit
//returns fahrenheit
function calcCelciusToFarenheit(c)
{
	return Math.round(c * (9/5) * 32);
}

//calculates Fahrenheit to Celsius
//returns Celsius
function calcFahrenheitToCelcius(f)
{
	return Math.round((f-32)*(5/9));
}

//calculates radius to Circumference
//returns Circumference 
function calcCircumference(r)
{
	return 2*Math.PI * r;
}

//calculates pythagoreantheorem
//returns longest side of the triangle
function calcLongestSide(a,b)
{
	return Math.sqrt((a*a) + (b*b));
}
