function validate() {
    let errorlog = document.getElementById("error");
    let email = document.forms["form"]["email"].value;
    let password = document.forms["form"]["password"].value;
    let passwordWithoutSpaces = password.replaceAll(" ", "");

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || !passwordWithoutSpaces.length >= 1) {
        errorlog.innerHTML = "Invalid Credentials";
        return false;
    }
}