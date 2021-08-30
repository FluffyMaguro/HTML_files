// Loads Karax webpage and fills the page
function init() {
    document.body.innerHTML = "<div></div>";
    document.body.display.background = "black";

    let request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/FluffyMaguro/HTML_files/main/karax/karax.html', true);
    request.send(null);
    request.onreadystatechange = function () {

        if (request.readyState === 4 && request.status === 200) {
            document.body.innerHTML = request.response;
            console.log('HTML loaded..');
        } else
            console.log('Failed to load HTML')
    }
}
init()