class News {
	constructor (title, author, date, imageUrl, link, content) {
		this.title = title;
		this.author = author;
		this.date = date;
		this.imageUrl = imageUrl;
		this.link = link;
		this.content = content;		
	}

	// Function to create card with content
	createCard(){
		let char50 = this.content.substring(0,80);
		var blogContent = document.getElementById('mainContent');
		var blogCard = document.createElement('div');
		blogCard.className = "col-lg-4 col-md-6 col-sm-6 col-xs-12 margin_bottom30";
		blogCard.innerHTML = `
			<a href="${this.link}">
				<img class="img-responsive center-block newsImage" style="width:100%!important;" src="${this.imageUrl}">
			</a>
			<div class="blog-content bg-white">
				<h3 style="color:#01516c;">${this.title}</h3>
				
				<p>${char50}...<a href="${this.link}"  class="heading_color"><strong> Continue Reading</strong></a></p>
				<p class="small text-muted">Article published: ${current_date}-${current_month}-${current_year}</p>
				<hr>
				<p>
				<span class="pull-right">By : <strong>${this.author}</strong></span> </p>
			</div>
        `;
    	blogContent.appendChild(blogCard);
    }

}
var today = new Date();

var current_date = today.getDate();

var current_month = today.getMonth()+1; //Month starts from 0

var current_year = today.getFullYear();



 var content = [ new News ("Latest Technology", "CodeFactory", today, "http://via.placeholder.com/350x150", "blogpost.html", "Lorem ipsum sit amet, consectetur adipiscing elit. Donec nec mauris sit amet mi posuere imperdiet. Sed congue velit placerat sapien gravida sagittis. Phasellus in convallis urna, sit amet sollicitudin augue."),
 				 new News ("New Technology", "nerdy guy", today, "http://via.placeholder.com/350x150", "blabla", "This content here could be really amazing. Just provide us with some text."),
 				 new News ("BlaBla title", "person3", today, "http://via.placeholder.com/350x150", "blabla", "New chance for all of us!"),
 				 new News ("Random stuff", "Cool guy", today, "http://via.placeholder.com/350x150", "blabla", "lorem ipsum text in here"),
 				 new News ("Latest Technology", "Alien", today, "http://via.placeholder.com/350x150", "blabla", "ZDAJ PA SEM TUKAJ SAMO DA VIDIM CE DELA TOLE"),
 				 new News ("Latest Technology", "Random Person", today, "http://via.placeholder.com/350x150", "blabla", "My name is random text, out of ideas"),
 				 new News ("Latest Technology", "Not so cool guy", today, "http://via.placeholder.com/350x150", "blabla", "Imagine ome amazing tet here.")
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
				 
];

if(document.getElementById('mainContent')){
	for (var i = 0; i < content.length; i++) {
	content[i].createCard();
	}
}




function initMap() {
	var location = {lat: 48.196443, lng: 16.359416};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: location});
}

var dateText = document.querySelector('.postDate');
if (dateText) {
	dateText.innerHTML = `${current_date}-${current_month}-${current_year}`;
}
 

var dateTextTitle = document.querySelector('#news1');
if (dateTextTitle) {
dateTextTitle.innerHTML = `${content[0].title}`;
}

var dateTextAuthor = document.querySelector('#newsAuthor');
if (dateTextAuthor) {
dateTextAuthor.innerHTML = `${content[0].author}`;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}