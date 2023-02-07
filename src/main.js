function message() {
    const Name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('comments').value;
    const regex = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    let message =
        "Name: " + Name + "\n" +
        "Email: " + email + "\n" +
        "Comment: " + msg + "\n";


    var params = {
        from_name: email,
        message: message
    }

    onSubmit();

    emailjs.send("service_godwbmq", "template_w5622o6", params)
        .then(function (res) {
            alert("success! " + res.status);
        })

    setTimeout(() => {
        // window.location.reload(true);
        // window.scrollTo(0,0);
    }, 5000);
}

function onSubmit(){
    let form = document.getElementsByName("form")[0];
    form.reset();
    return false;
}

