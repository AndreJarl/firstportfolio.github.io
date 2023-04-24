const dark = document.getElementById("dark");
const body = document.querySelector("body");
const nav = document.getElementById("nave");
const andre = document.getElementById('andre');
const burger = document.getElementById('hu');
const items = document.getElementById('items');
const ex = document.getElementById('huu');
const yes = document.getElementById('yes');
const item = document.getElementById('item');
const itim = document.getElementById('itim');
const itam = document.getElementById('itam');
const project = document.getElementById('projects');
const projtitle = document.getElementById('projtitle');
const social = document.getElementById('socs');
var  theme = dark;



dark.addEventListener("click", () => {
			nave.classList.toggle("active");
	   andre.classList.toggle("active");
	   body.classList.toggle("active");
	   social.classList.toggle("active");
	   //item.classList.toggle("active");
	 //  itim.classList.toggle("active");
	//   itam.classList.toggle("active");



	  
	   if(dark.classList.toggle("active")) {
	   				dark.src= "images/sun.png";
	   			 projtitle.style.color= "white";
	   		 project.style.background= "black";
	   		  theme = "DARK";
	   		    console.log(theme);
	   	  	
	   }else {
	   				dark.src= "images/moon.svg";
	   					 projtitle.style.color= "black";
	   		  project.style.background= "#EDF2F3";
	   		   
	   		    theme = "LIGHT";
	   		  console.log(theme);
	   		
	   		  		
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
 
