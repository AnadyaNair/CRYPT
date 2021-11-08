function createNew(){
    var elements = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}";
    var length = 15;
    var password = "";

    for (var i=0; i<length; i++){
        var random = Math.floor(Math.random() * elements.length);
        password += elements.substring(random, random+1);
    }
    document.getElementById("displayer").value = password
}