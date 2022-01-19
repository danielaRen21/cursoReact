const getImagen = async () => {

    try {
        const apiKey = 'Q8rudrJ94fJDfNi9z3uyp8xcX6QmAWyA';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        //muestra en el html
        document.body.append(img);

        console.log(url)
    } catch (error) {
        //manejo del error
    }

}
getImagen()