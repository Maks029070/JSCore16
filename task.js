function sendDataByGet(){
	var userData = {
		name: document.getElementById('userNameGet').value,
		surname: document.getElementById('userSurnameGet').value,
		age: document.getElementById('userAgeGet').value,
		residence: document.getElementById('userResidenceGet').value
	}

	var xhr = new XMLHttpRequest();
	if (document.getElementById("userAgeGet").value >= 1 && document.getElementById("userAgeGet").value <= 100) {
		xhr.open('GET', '/userGet?userName=' + userData.name + '&userSurname=' + userData.surname + '&userAge=' + userData.age + '&userResidence=' + userData.residence);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send();
		xhr.addEventListener("load", function () {
			for (var key in userData)
				console.log(userData[key] + " ValidatedByGET");
		});
	}
	else {
		document.getElementById("userAgeGet").value = "Error: wrong data";
	}
}

function sendDataByPost(){
	var userData = {
		name: document.getElementById('userNamePost').value,
		surname: document.getElementById('userSurnamePost').value,
		age: document.getElementById('userAgePost').value,
		residence: document.getElementById('userResidencePost').value
	}

	var xhr = new XMLHttpRequest();
	if (document.getElementById("userAgePost").value >= 1 && document.getElementById("userAgePost").value <= 100) {
		xhr.open('POST', '/userPost');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(userData));
		xhr.addEventListener("load", function () {
			for (var key in userData)
				console.log(userData[key] + " ValidatedByPOST");
		});
	}
	else {
		document.getElementById("userAgePost").value = "Error: wrong data";
	}
}