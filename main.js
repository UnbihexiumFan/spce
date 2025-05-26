var data = `{
    "max-comic":4,
    "1":{
        "title": "Hydrogen",
        "mouseover": "Your chemistry textbooks are WRONG! Hydrogen doesn't want two electrons in its outer shell. It doesn't want zero electrons in its outer shell. It just wants a friend.",
        "width": 300
    },
    "2":{
        "title": "Helium",
        "mouseover": "He... he... he...",
        "width": 350
    },
    "3":{
        "title": "Lithium",
        "mouseover": "Fun fact: Any other element in place of lithium would either be lying or lyeing. I'll let you figure out what that means.",
        "width": 700
    },
    "4":{
        "title": "Congeners",
        "mouseover": "Manganese: Important for brain signaling / Technetium: DANGEROUSLY RADIOACTIVE",
        "width": 500
    }
}`

data = JSON.parse(data);

const params = new URLSearchParams(window.location.search);
var index = Number(params.get("id"));
if (index == 0) {
    index = data["max-comic"];
}
function Prev() {
    if (index > 1) {
    index -= 1;
    Update();
    }
}
function Next() {
    if (index < data["max-comic"]) {
    index += 1;
    }
    Update();
}
function Update() {
    document.getElementById("comic-image").src = "comics/"+index+".png";
    params.set("id", index)

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl); // update the URL without reloading
    document.getElementById("comic-title").innerHTML = "#"+index.toString()+"- "+data[index.toString()]["title"];
    document.getElementById("title").innerHTML = "SPCE "+index.toString()+": "+data[index.toString()]["title"];
    document.getElementById("comic-image").style = "max-width:"+data[index.toString()]["width"]+"px;";
    document.getElementById("comic-image").title = data[index.toString()]["mouseover"];
}

Update();