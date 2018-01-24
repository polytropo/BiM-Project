document.getElementById('contact-form').addEventListener('submit', function (e){
	const name = document.getElementById('nameContact').value;
	const email = document.getElementById('emailContact').value;
	const text = document.getElementById('textContact').value;


// Check if any values are equal to nothing
	if(name ==='' || email ==='' || text ===''){
		alert('firlds are empty!');
	} else {
		name = '';
		email = '';
		text = '';
		console.log(name);
		
		alert('added');
		console.log(name);
		e.preventDefault();
	}
	e.preventDefault();
	
})