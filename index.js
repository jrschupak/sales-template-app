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
    },
    {
      what:"Not mobile friendly",
      why:"It’s 2016 and everything is done on the phone. Not having a mobile friendly site will make you come off as less than your competitors and will make your potential customers, even your current ones go to a different company.",
      how:"Having a mobile friendly website will put you in the top of your industry, make it easy and simple for your potential customers to use your site and make the decision to choose your business or product."
    },
    {
      what:"Difficult to read",
      why:"If your websites content is difficult to read, there is now way your potential customers will go through your content, know what you guys are all about, and will most definitely move on to the next business.",
      how:"Having a site with clearly readable and understandable content is vital to getting new customers."
    },
    {
      what:"Bad user experience design",
      why:"Having a site with clearly readable and understandable content is vital to getting new customers.",
      how:"With a quality design your potential and current users will have a the experience needed to choose your business or product."
    },
    {
      what:"Loads slowly",
      why:"With a quality design your potential and current users will have a the experience needed to choose your business or product. ",
      how:"Having a fast working site will make potential customers not just have a better experience on your site but also feel that you are business that gets things done quickly and will bring in more customers."
    },
    {
      what:"No form on contact page",
      why:"People do not have the time, and it can get annouying, to copy an e-mail address, then go to their e-mail site, and then paste the e-mail address. Without a e-mail form on your website people will often just leave your site.",
      how:"Having an e-mail form on your website where potential customers and clients can e-mail you directly with simplicity and ease bring in a lot more customers or clients."
    },
    {
      what:"Not SEO friendly",
      why:"Having a site that is not SEO friendly will dramatically decrease the amount of potential customers or clients that even come across your page holding you back from potentially increasing sales.",
      how:"Having your site be SEO friendly will bring in a lot more traffic to your site, increase your online presences dramatically increasing sales."
    }
  ]
}


//push all checkboxes into an array
var checkboxArr = document.querySelector('form');

var boxesChecked = {currentIssues: [{what: "HELLOOOO WORLD"},]};

// document.querySelector('query')

//function to check if a checkbox is checked off
//if it is checked then push that value into an array
//(or if it is checked take the value, grab that index from the object array above and push it into the new array)
//after going through all the checkboxes, take the new array with all the values, and in a for loop use the index of the new array to grab the indexes from the object array above and push them into a newer array and then return the new array to be pushed into the handlesbars
function isChecked(){
 for(var i = 0; i < checkboxArr.length; i++){
   if(checkboxArr[i].checked === true){
     boxesChecked.currentIssues.push(issues.theIssue[i])
   }
   var source = document.getElementById('sales-output-template').innerHTML;

   //compile the source and turn it into a function
   var template = Handlebars.compile(source);

   //pass the object to the function, store it in the "html" variable
   //the function will return computer html to us
   var computedHtml = template(boxesChecked);

   var container = document.getElementById('sales-output');
   container.innerHTML = computedHtml;
 }
 return boxesChecked;

};

var submitButton = document.querySelector('button');

submitButton.addEventListener("click", function(){
  isChecked()
});




//first grab the the template from the index.html page
var source = document.getElementById('sales-output-template').innerHTML;

//compile the source and turn it into a function
var template = Handlebars.compile(source);

//pass the object to the function, store it in the "html" variable
//the function will return computer html to us
var computedHtml = template(boxesChecked);

var container = document.getElementById('sales-output');
container.innerHTML = computedHtml;
