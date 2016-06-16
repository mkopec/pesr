var x = document.getElementsByClassName("srednia");

document.getElementById("calyRokHeader").style.display = "";
document.getElementById("ocenySemestrIHeader").colSpan = 3;
document.getElementById("ocenySemestrIIHeader").colSpan = 3;

for (var i = 0; i < x.length; i++) {
    x[i].style.display = "";
    x[i].style.width = "10%";
}
