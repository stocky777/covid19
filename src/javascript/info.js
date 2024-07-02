$(document).ready(function() {
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

    $.ajax(settings).done(function(response) {
        console.log(response);
        if (response && response.response && response.response.length > 0) {
            let htmlContent = '<ul>';
			results = response.response;
            results.forEach(function(country) {
                htmlContent += `<li><a href='#'>${country}</a></li>`;
            });
            htmlContent += '</ul>';
            $("#paesi").html(htmlContent);
        } else {
            $("#paesi").text('No countries found.');
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching data:', textStatus, errorThrown);
        $("#paesi").text('Failed to load data.');
    });
});