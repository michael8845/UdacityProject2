/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click

// Set sections as active
// declare variable 
var navbarList = document.querySelector('#navbar__list');
// create variable 
// setattribute id to the variable so we can call them
var h1 = document.createElement('li');
h1.textContent = "Move to Section 1";
h1.setAttribute('id','p');
h1.setAttribute('class','democlass');
var h2 = document.createElement('li');
h2.textContent = "Move to Section 2";
h2.setAttribute('id','p');
h2.setAttribute('class','democlass');
var h3 = document.createElement('li');
h3.textContent = "Move to Section 3";
h3.setAttribute('class','democlass');
h3.setAttribute('id','p');
var h4 = document.createElement('li');
h4.textContent = "Move to Section 4";
h4.setAttribute('class','democlass');
h4.setAttribute('id','p');
var btns = document.querySelector('p');
// for loop for active state 
for( var i = 0;i<btns.length;i++ ) {
    btns[i].addEventListener('mouseover',function mouseover(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active','');
        this.className+='active';
    });
}



// append to the parent 
navbarList.appendChild(h1);
navbarList.appendChild(h2);
navbarList.appendChild(h3);
navbarList.appendChild(h4);


// create button variable
var button = document.createElement('button');
button.textContent = "click Here";
navbarList.appendChild(button);

var i = 5;
// create loop to intialize another navigation
button.addEventListener('click',
        function myfunction() {
            while (i < 50) {
                var x = document.createElement('li');
                var t = document.createTextNode('Section' + i);
                x.appendChild(t);
                navbarList.appendChild(x);
                i++;
                break;
            }
        }
    )
    // define navbar menu
var navbarMenu = document.querySelector('.navbar__menu');

// create another button
var button1 = document.createElement('button');
// append to the parent 
navbarList.appendChild(button1);

button1.textContent = "click and see ";
// make eventListener to add another style by classList
button1.addEventListener('click', function changeColore() {
    navbarList.classList.add("navbar__list.li", "anotherClass", "thirdClass");

})

/* make eventListener to scroll to each section  */
h1.addEventListener('click', function scrollto() {
   
   
    {

    
    window.scrollTo({
        top: document.querySelector('#section1').offsetTop,
        behavior: "smooth", 
    });
}

    
})




h2.addEventListener('click', function scrollto() {
    window.scrollTo({
        
        top: document.querySelector('#section2').offsetTop,
        behavior: "smooth"

    });
    

})
h3.addEventListener('click', function scrollto() {
    
    window.scrollTo({
        top: document.querySelector('#section3').offsetTop,
        behavior: "smooth"

    });

})
h4.addEventListener('click', function scrollto() {
    window.scrollTo({
        top: document.querySelector('#section4').offsetTop,
        behavior: "smooth"
        

    });

})
var topic1 = document.querySelector('#section1');
var topic2 = document.querySelector('#section2');
var topic3 = document.querySelector('#section3');
var topic4 = document.querySelector('#section4');


/* create button1 to return back  */
var button2 = document.createElement('button');
button2.textContent = "Get back";
button2.style.color = "red";
button2.style.fontStyle = 'Italic';
topic1.appendChild(button2);
button2.addEventListener('click', function getback() {
    window.scrollTo({
        top: document.querySelector('#navbar__list').offsetTop,
        behavior: "smooth"

    });
})

/*  create button2 to return back */
var button3 = document.createElement('button');
button3.textContent = "Get back";
button3.style.color = "red";
button3.style.fontStyle = 'Italic';
topic2.appendChild(button3);
button3.addEventListener('click', function getback() {
    window.scrollTo({
        top: document.querySelector('#navbar__list').offsetTop,
        behavior: "smooth"

    });
})

/*  create button2 to return back */
var button4 = document.createElement('button');
button4.textContent = "Get back";
button4.style.color = "red";
button4.style.fontStyle = 'Italic';
topic3.appendChild(button4);
button4.addEventListener('click', function getback() {
    window.scrollTo({
        top: document.querySelector('#navbar__list').offsetTop,
        behavior: "smooth"

    });
})
/*  create button2 to return back */
var button5 = document.createElement('button');
button5.textContent = "Get back";
button5.style.color = "red";
button5.style.fontStyle = 'Italic';
topic4.appendChild(button5);
button5.addEventListener('click', function getback() {
    window.scrollTo({
        top: document.querySelector('#navbar__list').offsetTop,
        behavior: "smooth"

    });
})

// create function to Make sections collapsible.

function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function enable() {
    var x = document.getElementById("myDiv2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function disable() {
    var x = document.getElementById("myDiv3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function visible() {
    var x = document.getElementById("myDiv4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var findMe = document.querySelector('#myDiv');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe)) {
        console.log('In viewport!');
        findMe.style.border="4px solid black";
        
	} else {
    console.log('Nope...');
    findMe.style=null;
  }
}, false);
var findMe2 = document.querySelector('#myDiv2');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe2)) {
        console.log('In viewport!');
        findMe2.style.border="4px solid red";
        
	} else {
    console.log('Nope...');
    findMe2.style=null;
  }
}, false);
var findMe3 = document.querySelector('#myDiv3');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe3)) {
        console.log('In viewport!');
        findMe3.style.border="4px solid black";
        
	} else {
    console.log('Nope...');
    findMe3.style=null;
  }
}, false);

var findMe4 = document.querySelector('#myDiv4');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe4)) {
        console.log('In viewport!');
        findMe4.style.border="4px solid green";
        
	} else {
    console.log('Nope...');
    findMe4.style=null;
  }
}, false);



