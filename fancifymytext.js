function alertButton() {
    alert("Hello, world!")
    document.getElementById('text').style.fontSize = "2em";
}

function boldChange() {
    document.getElementById('text').style.fontWeight = "900";
    document.getElementById('text').style.color = "blue";
    document.getElementById('text').style['text-decoration'] = "underline";
}

function normalChange() {
    document.getElementById('text').style.fontWeight = "400";
    document.getElementById('text').style.color = "black";
    document.getElementById('text').style['text-decoration'] = "none";
}

function capitalButton() {
    document.querySelector('textArea').style['text-transform'] = "uppercase";
    var suffix = '-moo';
    var txt = document.getElementById('text');
    var parts = txt.value.split('.');
    txt.value = parts.join(suffix);
}