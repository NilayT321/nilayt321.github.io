fetch("/includes/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });
