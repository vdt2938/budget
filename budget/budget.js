
let bill = {
	rent: 1176,
	water: 100,
	gas: 75,
	eletric: 178,
	pest: 10,
	auto_insurance: {
		name: 'Progress',
		monthly: 205,
		due_date: "16th",
	},
	phonebyvt: {
		name: 'Progress',
		monthly: 102,
		due_date: "18th",
	},
	phonebyka: {
		name: 'Progress',
		monthly: 98,
		due_date: "5th",
	},
	home_insurance: {
		name: 'Progress',
		monthly: 18,
		due_date: "16th",
	},
	internet: {
		name: 'Xfinity',
		monthly: 82,
		due_date: "21th",
	}
}

let earning = {

	vt_earning: {
		hourly_rate: 17.60,
		differential_shift_rate: .60,
		tax_rate: .9,
		weekly: function(){
			(40 * 17.2) + (40 * .60) * .8666
		} 
	},
	ka_earning: {
		hourly_rate: 17.60,
		differential_shift_rate: .60,
	}
}

let vt_debt = {
	citi: {
		name: 'Citi',
		amount: 3759.69,
		monthly: 150,
		due_date: "17th",
	},
	capitalone: {
		name: 'CapitalOne',
		amount: 4430,
		monthly: 154,
		due_date: "20th",
	},
	firestone: {
		name: 'Firestone',
		amount: 2384.17,
		monthly: 75,
		due_date: "20th",
	}
}

let ka_debt = {
	Walmart: {
		name: 'Walmart',
		amount: 2310.83,
		monthly: 85,
		due_date: "18th",
	},
	bank_of_america: {
		name: 'Bank of America',
		amount: 1938.79,
		monthly: 62,
		due_date: "7th",
	},
	capitalone: {
		name: 'CapitalOne',
		amount: 3394.06,
		monthly: 127,
		due_date: "9th",
	},
	chase: {
		name: 'Chase',
		amount: 854.72,
		monthly: 40,
		due_date: "21th",
	}
}

let surplus = "";



let subscription = {
	neflix: {
		name: "netflix",
		amount: 20,
		due_date: '16th',
	},
	kindle: {
		name: "kindle",
		amount: 10,
		due_date: '6th',
	},
	adobe_illustrator: {
		name: "Adobe Illustrator",
		amount: 21,
		due_date: '15th',
	},
	peacock: {
		name: "Peacock",
		amount: 2,
		due_date: '9th',
	},
	ready_refresh: {
		name: "Ready Refresh",
		amount: 0,
		due_date: '14th',
	},
	disney_plus: {
		name: "Disney Plus",
		amount: 15,
		due_date: '26th',
	}
}

let extra_spending = {
	weekly_saving: 25,
	car_gas: 45,
	grocery: 250,
};

let want = {
	car: {
		rwd_with_manaul: {
			brand: "BMW",
			model: ["M4", "M5"],
			price: 80000,
		},
		fwd_with_manaul: {
			brand: "Honda",
			model: "Type R",
			price: 45000,
		},
	},
	motorcycle: {
		brand: "any",
		model: "any",
		price: 45000,
	},
	house: {
		state: {
			bedroom: 4,
			bathroom: 2,
			price: 400000,
		}

	},
	applicane: {
		dryer,
		washer,
		range,
		freezer,
		microwave,
		refrigerator,
	},
	furniture: {
		bedroom_set: {
			type,
			price,
			size,
		},
		bedroom_set1: {
			type,
			price,
			size,
		},
		bedroom_set2: {
			type,
			price,
			size,
		},
		bedroom_set3: {
			type,
			price,
			size,
		},
		living_set: {
			type,
			price,
		},
		dining_set: {
			type,
			price,
		},
		patio_set: {
			type,
			price,
		},
	}
};
//calender
year
month
day 
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

//time
milisecond 

month 
year 
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var time = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(time);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);


function getvalue(){
    const test = document.getElementById('test');
    const value = test.value
    console.log(typeof value);
    if(value == 0){
        console.log('nope!');
    }else{
        console.log(value);
    }
    weekly = value * 40;
    monthly = weekly * 4;
    yearly = monthly * 12;
    tax = weekly * .13
    weeklytax = weekly - (weekly * .13)
    monthlytax = weeklytax * 4;
    yearlytax = monthlytax *12;
    console.log(`
    weekly is ${weekly} 
    and also monthly is ${monthly}
    and how much tax will take is ${tax} 
    after tax, weekly is ${weeklytax} 
    and monthly is ${monthlytax}.
    yearly is ${yearly} and after tax is ${yearlytax}
    `)

}


const season = {
    fall, 
    winter, 
    spring, 
    summer
};
season === 'spring' && temperature < 70 ? console.log('It\'s spring! The trees are budding!'): 
season === 'winter' && temperature < 65 ? console.log('It\'s winter! Everything is covered in snow.'):
season === 'fall' ? console.log('It\'s fall! Leaves are falling!'): 
season === 'summer' && temperature > 70 ? console.log('It\'s sunny and warm because it\'s summer!'): 
console.log('Invalid season.');




