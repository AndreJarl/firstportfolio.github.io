const dark = document.getElementById("dark");
const body = document.querySelector("body");
const nav = document.getElementById("nave");
const tab = document.getElementById("pills-tab");
const front = document.getElementById('under');
const social = document.getElementById('dark');
const andre = document.getElementById('andre');
const logo = document.getElementsByClassName("andr");
const experience = document.getElementById('experience');
const back = document.getElementById('back');
const burger = document.getElementById('hu');
const ex = document.getElementById('huu');

function updateAge() {
	// Get the current date and the date of your birth
	const now = new Date();
	const birthday = new Date('2004-08-12'); // replace with your birth date
	
	// If your birthday has not yet passed this year, subtract 1 from the year
	if (now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())) {
	  birthday.setFullYear(birthday.getFullYear() - 1);
	}
	
	// Calculate your age in years
	let age = now.getFullYear() - birthday.getFullYear();
	
	// If your birthday has not yet passed this year, subtract 1 from your age
	if (now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())) {
	  age--;
	}
	
	// Update the text in the HTML element
	const element = document.getElementById('age');
	element.textContent = `${age} years old`;
  }
  
  // Call the updateAge() function to update the age immediately
  updateAge();
  
  // Set the interval to update the age every minute
  setInterval(updateAge, 60000); // 60000 milliseconds = 1 minute
  

dark.addEventListener("click", () => {
			nave.classList.toggle("active");
	   andre.classList.toggle("active");
	   body.classList.toggle("active");	  	
	   experience.classList.toggle("active");	 
	   back.classList.toggle("active");	  	   	   
	   if(dark.classList.toggle("active")) {
	   				dark.src= "images/sun.png";
	   				
	   }else {
	   				dark.src= "images/moon.svg";
	   }
	
});

burger.addEventListener("click", () => {
			items.classList.toggle("active");
				  
			 if(burger.classList.toggle("active")) {
	   				yes.style.opacity= "0";
	   				ex.style.opacity= "1";
	   				
	   				
	   }else {
	   				
	   				yes.style.opacity= "1";
	   				ex.style.opacity= "0";
	   }
			 
	  	 
});
	
function changeBg(){

var nav = document.getElementById("nave");


var scrollValue = window.scrollY;

if(scrollValue < 10) {
				nav.classList.remove("bgcolor")
			 
}
else {
				nav.classList.add("bgcolor")
				
}
}

 window.addEventListener( 'scroll', changeBg);
 
