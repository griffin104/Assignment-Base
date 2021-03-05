 async function windowActions() {
    const search = document.querySelector('#search');
    const radio = document.querySelector('#searchBy')
    const searchByName = document.querySelector('#name')
    const searchByFoodType = document.querySelector('#foodType')
    const searchByZipCode = document.querySelector('#zipCode')
    const filteredList = document.querySelector('#filteredList')

    // const endpoint = await fetch('/api');
    // const data = await endpoint.json();
    // const filtered = data.filter((record) => place.name.toUpperCase() === search.nodeValue.toUpperCase());

    let filteredPlaces = [];
    let searchType = 'name'

    fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json').then(blob => blob.json())
        .then(data => places.push(...data))
    console.log(places)


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

    function removeChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

    function displayMatches() {
        // const matchArray = findMatches(search, places);
        searchBy()
        fetch("/api")
            .then(res => res.json())
            .then(json => {
                filteredPlaces = findMatches(search.value, json)

        removeChildren(filteredList)
        filteredPlaces.forEach(place => {
            filteredList.insertAdjacentHTML('beforeend', `<li class='card mt-4'>
            <div class="card-content">
                <div class="content">
                    <p class="title is-3">${place.name}</p>
                    <p class="subtitle is-5">${place.category}</p>
                    <address>${place.address_line_1}<br/>${place.address_line_2}<br/>
                        ${place.city}, ${place.state}. ${place.zip}</address>
                </div>
            </div>
            </li>`)
    })
    })
    }

    search.addEventListener('change', findMatches);
    search.addEventListener('keyup', displayMatches);
    radio.addEventListener('change', displayMatches)

//     form.addEventListener('submit', async (event) => ) {
//         event.preventDefault();
//         console.log('Submission made: ', search.value)
//         const filtered = data.filter((record) => record.city.toUpperCase() === search.nodeValue.toUpperCase());
//     }
}

window.onload = windowActions();