const settings = {
	async: true,
	crossDomain: true,
	url: 'https://covid-193.p.rapidapi.com/countries',
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4d97b1a169mshb60b7d5c9584dfbp13aef5jsned564f37affc',
		'x-rapidapi-host': 'covid-193.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

});


$(document).ready(function(){
    console.log("The document is ready to initialise");

});

