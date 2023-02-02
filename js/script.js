// typing animation =========================

let typed = new Typed(".typing", {
  strings:[ "", "Web Developer", "Web designer", "JS Web developer"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true
});

// li active color change ====================

const activeColor = document.querySelectorAll(".aside .nav li a");

function colorChange() {
  for (let i = 0; i < activeColor.length; i++) {
    console.log(activeColor[i]);

    if (activeColor[i].className == 'active') {
      activeColor[i].classList.remove('active');
    }
    this.className = 'active';
  }
}

let home = document.getElementById('homeid');
let about = document.getElementById('aboutid');
let services = document.getElementById('servicesid');
let portfolio = document.getElementById('portfolioid');
let contact = document.getElementById('contactid');

home.addEventListener("click", colorChange);
about.addEventListener("click", colorChange);
services.addEventListener("click", colorChange);
portfolio.addEventListener("click", colorChange);
contact.addEventListener("click", colorChange);

// dowload CV==========================

let downloadCV = document.querySelector('.download-cv');

downloadCV.addEventListener('click', downloadFunc);

function downloadFunc(){
	var anchor = document.createElement('a');
	anchor.setAttribute('href','./SV_Volodymyr_Forushchenko_JS_Developer.docx');
	anchor.setAttribute('download','');
	document.body.appendChild(anchor);
	anchor.click();
	anchor.parentNode.removeChild(anchor); 
}

// Send Request - Local Storage=======================================

let sendRequest = document.querySelector('#send-message');
let inptName = document.querySelector('.input-name');
let inptMail = document.querySelector('.input-mail');
let inptSubj = document.querySelector('.input-subject');
let inptMessage = document.querySelector('.input-message');

sendRequest.addEventListener('click', () => {
  saveContact();
})

function saveContact() {
  let userName = inptName.value;
  let userMail = inptMail.value;
  let userSubject = inptSubj.value;
  let userMessage = inptMessage.value;

  localStorage.setItem('name', userName);
  localStorage.setItem('e-mail', userMail);
  localStorage.setItem('subject', userSubject);
  localStorage.setItem('message', userMessage);
}

// Form validation =======================================

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
	e.preventDefault();

	let error = formValidate(form);

	if (error === 0) {
		form.classList.add('_sending');

		setTimeout( () => {
				form.classList.remove('_sending');
				alert("Your form has been submitted successfully");
			}, 4800);
			form.reset();
	} else {
		alert("Please fill in the required fields");
	}
}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}


  // MAP =========================================================

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 51.0501, lng: -114.085 },
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]
    });
    const image = "./img/Pin.png";
    const marker = new google.maps.Marker({
      position: { lat: 51.0501, lng: -114.085 },
      map: map,
      icon: image,
      opacity: 0.6,
    })
  }
  
  window.initMap = initMap;
