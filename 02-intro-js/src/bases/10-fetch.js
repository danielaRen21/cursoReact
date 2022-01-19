const apiKey = 'Q8rudrJ94fJDfNi9z3uyp8xcX6QmAWyA';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//promesa en cadena
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        //muestra en el html
        document.body.append(img);
        console.log(url)
    })
    .catch(console.warn);
