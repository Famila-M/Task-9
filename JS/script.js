function myfun() {
    var obj = new Object();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var gender = document.getElementsByName("gender");
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            gender = gender[i].value;
    }

    var food = document.getElementsByName("food");
    var list = [];
    for (i = 0; i < food.length; i++) {
        if (food[i].type == 'checkbox' && food[i].checked == true)
            list += food[i].value + " ";
    }
    food = list;  
}
  