
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  sendEmail()
  e.target.reset()
})

function sendEmail() {
  if (document.getElementById("contact-email").value != "" && document.getElementById("contact-message").value != "") {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "impactarc.cph@gmail.com",
      Password: "rxqqqgmrdhoxgmfq",
      To: "lucia.harcegova@gmail.com",
      From: document.getElementById("contact-email").value,
      Subject: "This is the subject",
      Body: `Name: ${document.getElementById("contact-name").value} <br>
      Message: ${document.getElementById("contact-message").value}`
    }).then(
      alert("Thank you! Your message has been sent")
      /* message => alert(message) */
    );
  }
  else {
    alert("You haven`t filled the required contact fields")
  }
}
