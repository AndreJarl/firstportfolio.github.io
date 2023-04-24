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
 
