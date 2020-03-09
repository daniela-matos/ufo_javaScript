let shapes = [ "changing",
"chevron",
"cigar",
"circle",
"cross",
"cylinder",
"disk",
"fireball",
"flash",
"formation",
"light",
"other",
"oval",
"rectangle",
"sphere",
"teardrop",
"triangle",
"unknown"]

var select = document.getElementById("select-shape")
              
for(let i = 0; i < shapes.length; i++)
{
    let option = document.createElement("option")
    txt = document.createTextNode(shapes[i].toLowerCase());
    option.appendChild(txt);
    option.setAttribute("value",shapes[i]);
    select.insertBefore(option,select.lastChild);
}