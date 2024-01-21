const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


const form = document.querySelector('form');
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

function sendEmail() {
const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "danielechi40@gmail.com",
		Password : "CF8F72D09086412E5A23BE6815F1D6A0FF3B",
		To : 'danielechi40@gmail.com',
		From : "danielechi40@gmail.com",
		Subject : "This is the subject",
		Body : bodyMessage
	}).then(
	  message => {
		if(message == "OK") {
			Swal.fire({
				title: "Success!",
				text: "Message Sent Successfully!",
				icon: "success"
			  });
		}
	  }
	);
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	//checkInputs();

	sendEmail();
});
