document.getElementById('submit-btn').addEventListener('click', function () {
   const userField = document.getElementById('user-email');
   const userEmail = userField.value;

//    get user password
    const userPass = document.getElementById('user-password');
    const userPassord = userPass.value;
    // console.log(userPassord);

    if(userEmail == 'sontan@baap.com' && userPassord == 'lali jantu') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }else {
        // console.log('you are not valid');
    }
})

