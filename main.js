// 변수지정


// var SHOWINGCLASS = "showing";
// var DOTTED = "dotted";
var firstSlide = document.querySelector(".page3_work2:first-child");
var lastSlide = document.querySelector(".page3_work2:last-child");
var nextbtn = document.querySelector("#page3_nextbtn");
var prevbtn = document.querySelector("#page3_prevbtn");
var firstDotbtn = document.querySelector(".dotbtn:first-child");
var lastDotbtn = document.querySelector(".dotbtn:last-child");
var slide = document.querySelectorAll(".page3_work2");
var dotted = document.querySelectorAll(".dotbtn");

var pagemodal0 = document.querySelector("#page3_0");
var openmodal0 = document.querySelector("#view0");
var closemodal0 = document.querySelector("#btn0");


var pagemodal = document.querySelector("#page3_1");
var openmodal = document.querySelector("#view1");
var closemodal = document.querySelector("#btn1");

var pagemodal2 = document.querySelector("#page3_2");
var openmodal2 = document.querySelector("#view2");
var closemodal2 = document.querySelector("#btn2");

var pagemodal3 = document.querySelector("#page3_3");
var openmodal3 = document.querySelector("#view3");
var closemodal3 = document.querySelector("#btn3");

var pagemodal5 = document.querySelector("#page3_5");
var openmodal5 = document.querySelector("#view5");
var closemodal5 = document.querySelector("#btn5");



// 함수실행



// 라인
function modalopen(){
	pagemodal.style.display="block";

}
openmodal.addEventListener("click",modalopen);


function modalclose(){
	pagemodal.style.display="none";
}
closemodal.addEventListener("click",modalclose);

//일룸
function modalopen0(){
	pagemodal0.style.display="block";

}
openmodal0.addEventListener("click",modalopen0);


function modalclose0(){
	pagemodal0.style.display="none";
}
closemodal0.addEventListener("click",modalclose0);

// 동원
function modalopen2(){
	pagemodal2.style.display="block";

}
openmodal2.addEventListener("click",modalopen2);


function modalclose2(){
	pagemodal2.style.display="none";
}
closemodal2.addEventListener("click",modalclose2);


// 카카오
function modalopen3(){
	pagemodal3.style.display="block";

}
openmodal3.addEventListener("click",modalopen3);


function modalclose3(){
	pagemodal3.style.display="none";
}
closemodal3.addEventListener("click",modalclose3);


// 대한통운
function modalopen5(){
	pagemodal5.style.display="block";

}
openmodal5.addEventListener("click",modalopen5);


function modalclose5(){
	pagemodal5.style.display="none";
}
closemodal5.addEventListener("click",modalclose5);


// function modalopen2(){
// 	modalfull.style.display="block";

// }
// openbtn[1].addEventListener("click",modalopen2);

// function modalopen3(){
// 	modalfull.style.display="block";

// }
// openbtn[2].addEventListener("click",modalopen3);

// function modalopen4(){
// 	modalfull.style.display="block";

// }
// openbtn[3].addEventListener("click",modalopen4);



function dot(e){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector(".dotted");

	if(currentdotted){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
	}
	dotted[e].classList.add("dotted");
	slide[e].classList.add("showing");
};



function nextSlides(){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector(".dotted");
	if(currentslide){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
		var nextslide = currentslide.nextElementSibling;
		var nextdotted = currentdotted.nextElementSibling;
		if(nextslide){
			nextslide.classList.add("showing");
			nextdotted.classList.add("dotted");
		}
		else{
			firstSlide.classList.add("showing");
			firstDotbtn.classList.add("dotted");
		}
	}
	else{
		firstSlide.classList.add("showing");
		firstDotbtn.classList.add("dotted");
	}
};

function prevSlides(){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector(".dotted");
	if(currentslide){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
		var prevside = currentslide.previousElementSibling;
		var prevdotted = currentdotted.previousElementSibling;
		if(prevside){
			prevside.classList.add("showing");
			prevdotted.classList.add("dotted");
		}
		else{
			lastSlide.classList.add("showing");
			lastDotbtn.classList.add("dotted");
		}
	}
	else{
		lastSlide .classList.add("showing");
		lastDotbtn.classList.add("dotted");
	}
};
nextSlides();
nextbtn.addEventListener("click",nextSlides);
prevbtn.addEventListener("click",prevSlides);