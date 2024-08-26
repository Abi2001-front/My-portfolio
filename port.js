

 const navbar=document.querySelector('.sidebar');
 function menu(){
    navbar.style.left="0";
}
 function closebar(){
    navbar.style.left="-60%";
 }
 document.querySelectorAll('.sidebar .bar a').forEach(link => {
    link.addEventListener('click', closebar);
});





function send() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('Message').value;

    // Check 
    if (!name || !email || !subject || !message) {
        alert('All fields are required.');
        return;
    }

   
    alert('Message sent successfully!');


    document.getElementById('email-input').reset();
}
