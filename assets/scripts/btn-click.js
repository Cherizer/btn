function button1() {
    //Changes background color
    document.body.style.backgroundColor = "#bd00d6";

    //Creates new variables
    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    //Resets the other buttons back to normal
    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        iElements[i].style.fontSize = '25px';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }

    //Changes the style for the selected button
    document.getElementById("icn-1").style.color = '#bd00d6';
    document.getElementById("icn-1").style.fontSize = '30px';
    document.getElementById("btn-1").style.width = "110px";
    document.getElementById("btn-1").style.height = "85px";
}


function button2() {
    document.body.style.backgroundColor = "#006bd6";

    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        iElements[i].style.fontSize = '25px';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }
    
    document.getElementById("icn-2").style.color = "#006bd6";
    document.getElementById("icn-2").style.fontSize = '30px';
    document.getElementById("btn-2").style.width = "110px";
    document.getElementById("btn-2").style.height = "85px";
}


function button3() {
    document.body.style.backgroundColor = "#d60000";

    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        iElements[i].style.fontSize = '25px';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }
    
    document.getElementById("icn-3").style.color = "#d60000";
    document.getElementById("icn-3").style.fontSize = '30px';
    document.getElementById("btn-3").style.width = "110px";
    document.getElementById("btn-3").style.height = "85px";
}


function button4() {
    document.body.style.backgroundColor = "#7dd600";

    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        iElements[i].style.fontSize = '25px';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }
    
    document.getElementById("icn-4").style.color = "#7dd600";
    document.getElementById("icn-4").style.fontSize = '30px';
    document.getElementById("btn-4").style.width = "110px";
    document.getElementById("btn-4").style.height = "85px";
}


function button5() {
    document.body.style.backgroundColor = "#fcba03";

    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        iElements[i].style.fontSize = '25px';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }
    
    document.getElementById("icn-5").style.color = "#fcba03";
    document.getElementById("icn-5").style.fontSize = '30px';
    document.getElementById("btn-5").style.width = "110px";
    document.getElementById("btn-5").style.height = "85px";
}
