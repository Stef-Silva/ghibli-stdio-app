// Create a request variable and assingn a new XMLHTTPRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint.
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function (){
    // Begin accesing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            /* Log each movie's title and description
            console.log(movie.title);
            console.log(movie.description);*/
            
            //Create a div with a card class
            const card = document.createElement('div');
            card.className = "card";
            
            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a p and set the text context to the film's description
            const p = document.createElement('p');
            movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`; // End with an ellipses

            //Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);

        });
    } else {
        console.log('Error');
    }
}

// Send request
request.send();

const app = document.getElementById('root');
//console.log(app);

const logo = document.createElement('img');
//console.log(logo);
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
//console.log(container);

app.appendChild(logo);
app.appendChild(container);