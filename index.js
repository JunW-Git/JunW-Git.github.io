function dropbtn() {
    document.getElementById("dropbtn").classList.toggle("show");
    console.log("Button is being clicked!!!");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
