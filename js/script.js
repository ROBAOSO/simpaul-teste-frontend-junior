// Js code goes here

(function () {
    'use strict';

    const addNewFlightBtn = document.getElementById('addBtn');

    addNewFlightBtn.addEventListener('click', (event) => {

        const error = document.getElementById('error');
        const name = document.getElementById('name').value;
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const rating = document.getElementById('rating').value;
        const price = document.getElementById('price').value;

    });

    function buildFligh(nameValue, originValue, destinationValue, ratingValue, priceValue, originAndDestination) {
        let fligh = document.createElement('ul');
        fligh.setAttribute('class', 'card');

        let name = document.createElement('li');
        name.innerHTML = 'Flight Name: ' + nameValue;
        name.setAttribute('class', 'padT5');
        fligh.appendChild(name);

        let destination = document.createElement('li');
        if (originAndDestination) {
            destination.innerHTML = originAndDestination;
        } else {
            destination.innerHTML = originValue + ' to ' + destinationValue;
        }
        destination.setAttribute('class', 'padT5');
        fligh.appendChild(destination);

        let rating = document.createElement('li');
        rating.innerHTML = 'Rating: ' + ratingValue + '*';
        rating.setAttribute('class', 'padT5');
        fligh.appendChild(rating);

        let price = document.createElement('li');
        price.innerHTML = 'Price: Rs.' + priceValue;
        price.setAttribute('class', 'padT5');
        fligh.appendChild(price);

        return fligh;
    }

}());
