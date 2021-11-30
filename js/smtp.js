const sendMail = document.getElementById('send');

const Pname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject')
const message = document.getElementById('message');



sendMail.addEventListener("onSubmit", (event) => {

    // console.log(
    //     Pname.value, email.value, subject.value, message.value
    // )

    alert("Message send successfully");

    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username : 'pavelbspiclass@gmail.com',
    //     To : 'pavelbspiclass@gmail.com',
    //     From : 'pavelbspiclass@gmail.com',
    //     Subject : subject.value,
    //     Body : message.value,
    //     }).then(
    //         message => alert(message)
    //     );

    // event.preventDefault();
})

// 32861218-1d0d-4ee4-a031-7da37b88c3d0