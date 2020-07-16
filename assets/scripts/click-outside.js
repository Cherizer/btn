document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("container");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == flyoutElement) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    var iElements = document.getElementsByTagName('i');
    var aElements = document.getElementsByTagName('a');

    for (let i = 0; i < iElements.length; i++) {
        iElements[i].style.color = '#aaaaaa';
        aElements[i].style.width = '100px';
        aElements[i].style.height = '80px';
    }

    document.body.style.backgroundColor = "#eee";
});