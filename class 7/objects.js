var flight = {
	origin: "SFO", 
	destination: "DEN",
	wifi: false,
	distance: 800,
	status: "delayed" 
};

var bmw = {
	on: false,
	start: function() {
		this.on = true;
	}
}

var car = {
	make: "Subaru",
	model: "Forrester",
	year: 2013,
	color: "green",
	insurance: {
		provider: "Geico",
		policy: 34583535
	},
	miles: 45700,
	kspeed: 0,
	on: false,
	addMile: function() {
		car.miles++;
		debugger
	},
	start: function() {
		car.on = true;
	},
}

var numbers = [1,2,3,5,8,13];








// Reporting software analyzes the snow removal performance of each snow plow driver in the city.

// A simulation predicts the behavior of the MBTA if ridership increases by 20%.

// A user is required to watch video training sessions as part of a recertification process and answer questions about them.

// A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

// A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

// A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

// A user searches for her reservation on a hotel website, and changes the arrival date and room type.


// var reservation = {
// 	arrival: "October 13th",
// 	roomtype: "single",
// 	price: 300,
// 	paidWithPoints: false,

// 	changeReservation: function() {
// 		this.arrival: "December 31st",
// 		this.roomtype: "VIP!"
// 	},
// }

// var cookingWebsite = {
// 	dateNightRecipe = "sushi",
// 	friendsNightRecipe = "pasta and pizza",
// 	coworkerNightRecipe = "chicken and rice",
// 	sportsNightRecipe = "wings and beer",

// 	changeRecipe: function() {
// 		this.dateNightRecipe = "filet mignon";
// 	}

// },

// ANDREW'S CODE/

// var hotelWebsite = {
//   reservations: [
//     {
//       number: 123123,
//       arrivalDate: "10/18/16",
//       roomType: "Basic"
//     },
//     {
//       number: 312313,
//       arrivalDate: "10/30/16",
//       roomType: "Master Suite"
//     }
//   ],
//   search: function(inputReservationNumber) {
//     for (i = 0; i < reservations.length; i++) {
//       if (reservations[i].number == inputReservationNumber) {
//         return reservations[i];
//       };
//     }
//   },
//   changeArrivalDate: function(newDate) {
//     this.reservations[0].arrivalDate = newDate;
//   },
//   changeRoomType: function(newRoomType) {
//     this.reservations[0].roomType = newRoomType;
//   }
// }


 // A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

// var zipcar1 = {
//     status: "not available",
//     pickup: function(){
//         if (this.status == "not available") {
//             return "Car not available. Call customer service & complain";
//         }
//         if (this.status == "available") {
//             this.status = "in use";
//             return "Off you go!";
//         }
//     },
//     return: function(){
//         if (this.status == "in use") {
//             this.status = "available";
//             return "Hope you had a nice ride!";
//         }
//         else return "You are not driving";
//     }
// };

// var zipcar2 = {
//     status: "available",
//     pickup: function(){
//         if (this.status == "not available") {
//             return "Car not available. Call customer service & complain.";
//         }
//         if (this.status == "available") {
//             status = "in use";
//             return "Off you go!";
//         }
//     },
//     return: function(){
//         if (this.status == "in use") {
//             this.status = "available";
//             return "Hope you had a nice ride!";
//         }
//         else return "You are not driving";
//     }

// };

// var zipcars = [zipcar1, zipcar2];

// var reservation = {
//     zipcar: zipcars[0],
//     transfer: function(){
//         this.zipcar = zipcars[1];
//         return "You're all set sir, thank you for being a loyal customer";
//     }
// };

// var person = {
//     firstname: "Bob",
//     lasname: "Boberson",
//     plan: "Get to band practice",
//     reservation: reservation,
//     pickup: function(){
//         return this.reservation.zipcar.pickup();
//     },
//     complain: function() {
//         return this.reservation.transfer();
//     },
//     return: function() {
//         return this.reservation.zipcar.return();
//     }
// }




///constructor

var Zipcar = function(blah) {
    this.status = blah;
}

//prototype
Zipcar.prototype = {
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain";
        }
        if (this.status == "available") {
            this.status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }	
};

var zipcar1 = new Zipcar();
var zipcar2 = new Zipcar();



