var  object = {name: "Jonathan"}

//first grab the the template from the index.html page
var source = document.getElementById('sales-output-template').innerHTML;

//compile the source and turn it into a function
var template = Handlebars.compile(source);

//pass the object to the function, store it in the "html" variable
//the function will return computer html to us
var computedHtml = template(object);

var container = document.getElementById('sales-output');
container.innerHTML = computedHtml;
