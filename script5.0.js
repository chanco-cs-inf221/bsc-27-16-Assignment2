var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var name = form.name.value;
    var description = form.description.value;
    var completion = form.completion.value;

    let arr = [name, description, completion];

    localStorage.setItem("1", arr);

    var display = document.getElementById("display");
    var links = document.createElement("A");
    links.setAttribute("href", "dispalypage.html");
    var project = document.createTextNode(name);
    links.appendChild(project);
    display.appendChild(links);
    form.reset();


});
<script src="script5.0.js"></script>