var grade = prompt ("what's your grade?");
//grade = grade.toUpperCase();

// grade
if (grade == "A") {
	console.log("Awesome job!");
} else if (grade == "B") {
	console.log("Good job!");
} else if (grade == "C") {
	console.log("Try harder");
} else {
	console.error("error: unknown grade");
}


//switch

switch(grade) {
	case "A":
		console.log("Awesome job!");
		break;
	case "B":
		console.log("Good job!");
		break;
	case "C":
		console.log("Try harder");
		break;
	default: 
		console.error("error: unknown grade");
}

switch(grade) {
	case "A":
	case "B":
	case "C":
	case "D":
		console.log("Pass");
		break;
	case "F":
		console.log("Fail");
		break;
	default: 
		console.error("error: unknown grade");

}