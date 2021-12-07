// getting the values of the sign up

let signBtn = document.getElementById('signUpBtn');
signBtn.addEventListener('click', () => {
    let signUpname = document.getElementById('signUpname').value;
    let signUpemail = document.getElementById('signUpemail').value;
    let signUpnumber = document.getElementById('signUpnumber').value;
    let signUptime = document.getElementById('signUptime').value;
    let signUpadd = document.getElementById('signUpadd').value;
    let obj = { name: signUpname, email: signUpemail, phone: signUpnumber, time: signUptime, address: signUpadd }
    console.log(obj);
    collect(obj)
})
function collect(obj) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    fetch('http://localhost:5500/drfauna/addngo', options);
}

// getting the values of the contact us 

let contSubmit = document.getElementById('contSubmitBtn');
contSubmit.addEventListener('click', () => {
    let contName = document.getElementById('contName').value;
    let contEmail = document.getElementById('contEmail').value;
    let contNumber = document.getElementById('contNumber').value;
    let contMessage = document.getElementById('contMessage').value;

    contactObj = { name: contName, email: contEmail, number: contNumber, message: contMessage }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactObj)
    }
    fetch('http://localhost:5500/drfauna/contactus', options);
    console.log(contactObj);
})