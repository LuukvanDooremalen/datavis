document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON file
    fetch('data/data.json')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Accessing the data inside the JSON
            const schoolData = data;

            // Loop through each school and extract 'Afvalsoort' and 'Scheid. %'
            schoolData.forEach(school => {
                if (school["Afvalsoort"] !== "Eindtotaal") {  // Exclude summary row
                    console.log(`School: ${school["Afvalsoort"]}, Separation %: ${school["Scheid. %"]}`);
                }
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});