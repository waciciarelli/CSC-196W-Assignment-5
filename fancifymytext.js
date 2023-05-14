function helloWorld() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("textbox-1").style.fontSize = "24pt";
}

function fancy(){
    document.getElementById("textbox-1").style.fontWeight = "bold";
    document.getElementById("textbox-1").style.color = "blue";
    document.getElementById("textbox-1").style.textDecoration = "underline";
}

function boring(){
    document.getElementById("textbox-1").style.fontWeight = "normal";
    document.getElementById("textbox-1").style.color = "black";
    document.getElementById("textbox-1").style.textDecoration = "none";
}

function moo(){
    const text = document.getElementById("textbox-1").value;
    const upperText = text.toUpperCase();
    const sentences = upperText.split(".");
    for (var i = 0; i < sentences.length - 1; i++){
        let sentence = sentences[i];
        sentence += "-Moo";
        sentences[i] = sentence;
    }
    const joinedSentences= sentences.join("");
    const words = joinedSentences.split(" ");
    const underscore = words.join("_")
    document.getElementById("textbox-1").value = underscore;
}