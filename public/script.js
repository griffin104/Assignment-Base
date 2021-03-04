async function windowActions() {
    console.log('load complete');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#search');
    const suggestions = document.querySelector('.suggestions');

    const searchBy = document.querySelector('#searchType')

    // const endpoint = await fetch('/api');
    // const data = await endpoint.json();
    // const filtered = data.filter((record) => place.name.toUpperCase() === search.nodeValue.toUpperCase());

    let places = [];

    function findMatches(search, places) {
        return places.filter(place => {
            const regex = new RegExp(search, 'gi');
            return place.name.match(regex)
        });
    }

    function displayMatches() {
        // const matchArray = findMatches(search, places);
        console.log(search.value);
        // const html = matchArray.map(place);
    }

    search.addEventListener('change', displayMatches);
    search.addEventListener('keyup', displayMatches);

//     form.addEventListener('submit', async (event) => ) {
//         event.preventDefault();
//         console.log('Submission made: ', search.value)
//         const filtered = data.filter((record) => record.city.toUpperCase() === search.nodeValue.toUpperCase());
//     }
}

window.onload = windowActions();