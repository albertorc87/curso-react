
export const getImagen = async() => {

    try {

        const apiKey = 'Xx47LtfOvH8YHIjOSmC3DVShVhI7MLSx';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}


