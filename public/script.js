 async function windowActions() {
    console.log('load complete');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#search');
    const radio = document.querySelector('#searchBy')
    const suggestions = document.querySelector('.suggestions');
    const searchByName = document.querySelector('#name')
    const searchByFoodType = document.querySelector('#foodType')
    const searchByZipCode = document.querySelector('#zipCode')

    // const endpoint = await fetch('/api');
    // const data = await endpoint.json();
    // const filtered = data.filter((record) => place.name.toUpperCase() === search.nodeValue.toUpperCase());

    let places = [];
    let searchType = 'name'

    function findMatches(search, places) {
        return places.filter(place => {
            const regex = new RegExp(search, 'gi');

            if (searchType == 'name') {
                return place.name.match(regex)
            } else if (searchType == 'category') {
                return place.category.match(regex)      //Returns the places that match the specified searchType
            } else {
                return place.zip.match(regex)
            }

        });
    }

    // Determines what radio button the user has selected
    function searchBy() {
        if (searchByName.checked) {
            searchType = 'name'
        } else if (searchByFoodType.checked) {
            searchType = 'category'
        } else {
            searchType = 'zip'
        }
    }

    function displayMatches() {
        // const matchArray = findMatches(search, places);
        searchBy()
        console.log(searchType);
        // const html = matchArray.map(place);
    }

    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', displayMatches);
    radio.addEventListener('change', displayMatches)

//     form.addEventListener('submit', async (event) => ) {
//         event.preventDefault();
//         console.log('Submission made: ', search.value)
//         const filtered = data.filter((record) => record.city.toUpperCase() === search.nodeValue.toUpperCase());
//     }
}

window.onload = windowActions();