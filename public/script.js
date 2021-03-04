async function windowActions() {
    console.log('load complete');
    const form = document.querySelector('.userform');
    const search = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')

    const endpoint = await fetch('/api');
    const data = await endpoint.json();
    const filtered = data.filter((record) => place.name.toUpperCase() === search.nodeValue.toUpperCase());

    let places = [];

    function findMatches(search, plcaes) {
        return places.filter(place => {
            const regex = new RegExp(search, 'gi');
            return place.name.match(regex)
        });
    }

    function displayMatches() {
        const matchArray = findMatches(search, places);
        console.log(matchArray);
        const html = matchArray.map(place)
    }

    search.addEventListenter('change', displayMatches);
    search.addEventListenter('keyup', displayMatches);

//     form.addEventListener('submit', async (event) => ) {
//         event.preventDefault();
//         console.log('Submission made: ', search.value)
//         const filtered = data.filter((record) => record.city.toUpperCase() === search.nodeValue.toUpperCase());
//     }
}


