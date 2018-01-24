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

// Google map
function initMap() {
  var location = {lat: 48.196443, lng: 16.359416};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
    })
  }

// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e){
  let name = document.getElementById('nameContact').value;
  let email = document.getElementById('emailContact').value;
  let text = document.getElementById('textContact').value;


  // Check if any values are equal to nothing
  if(name ==='' || email ==='' || text ===''){
    alert('You need to fill in all the fields!', "error");
  } else {
    // confirm submit and empty input values
    alert(name + ", we received your message. We will respond shortly!", "success");
    document.getElementById('nameContact').value = "";
    document.getElementById('emailContact').value = "";
    document.getElementById('textContact').value = "";
    e.preventDefault();
  }  
})

// Show alert function 
function alert (message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // get parent element
  const container = document.querySelector('#contact-form');
  // get form
  const form = document.querySelector('#form');
  // insert alert
  container.insertBefore(div, form);
  // timeout after 5sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 5000);
  
}

// Applying for the course form
document.getElementById('formModal').addEventListener('submit', function (e){
  let modalName = document.getElementById('modalName').value;
  let modalSurname = document.getElementById('modalSurname').value;
  let modalEmail = document.getElementById('modalEmail').value;
  let modalPhone = document.getElementById('modalPhone').value;
  // let type = document.getElementById('type').value;

  // Check if any values are equal to nothing
  if(modalName ==='' || modalSurname ==='' || modalEmail ==='' || modalPhone ===''){
    alert2('To get access to best material you need to fill in all the fields!!!', 'error');
    console.log('works');
    console.log(document.getElementById('type').value);
    e.preventDefault();
  } else {
    // confirm submit and empty input values
    alert2(modalName + ", you just made best decision of you life! Expect email with more information shortly!", "success");
    document.getElementById('modalName').value = "";
    document.getElementById('modalSurname').value = "";
    document.getElementById('modalEmail').value = "";
    document.getElementById('modalPhone').value = "";
    document.getElementById('type').value = "disabled";
    e.preventDefault();
  }  
})

// Show alert function 
function alert2 (message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // get parent element
  const container = document.querySelector('#formModal');
  // get form
  const form = document.querySelector('#submitted');
  // insert alert
  container.insertBefore(div, form);
  // timeout after 5sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 7000);
  
}