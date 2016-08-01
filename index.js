var issues = {
  theIssue: [
    {
      what: "Out of date",
      why: "Having a website that is out of date gives your potential customers a negative first impression of your business, while hurting your overall brand.",
      how: "We can update your design giving it a new and attractive look which will give your customers the impression they need to give you the business."
    },
    {
      what: "Not responsive",
      why: "The majority of people do their searches on the move meaning they use their phone, maybe tablet, to do a search. When a website is not responsive it does not fit a mobile screen in a way that is easy, simple and enjoyable for the potential customer to use. This can easily make them frustrated and move on to your competitors",
      how: "We can make your website responsive so it looks good on any device so your potential customer will have a simple and easy to use site that will make their decision of choosing you easy."
    }
  ]
}






//first grab the the template from the index.html page
var source = document.getElementById('sales-output-template').innerHTML;

//compile the source and turn it into a function
var template = Handlebars.compile(source);

//pass the object to the function, store it in the "html" variable
//the function will return computer html to us
var computedHtml = template(issues);

var container = document.getElementById('sales-output');
container.innerHTML = computedHtml;
