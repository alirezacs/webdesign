let albums = ["First Album", "Second Album", "Third Album", "Fourth Album"];

let list = document.getElementById('list');
let modal = document.getElementById('modal');
let box = document.getElementById('box');

const getAlbums = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
    return response.data;
}

const getPhotos = async id => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    return response.data;
}

const showPhotos = async (id) => {
    const photos = await getPhotos(id);
    
    modal.style.display = 'flex';

    box.innerHTML = "";
    photos.slice(0, 5).map(photo => {
        box.innerHTML += `
            <img src="${photo.url}" alt="">
        `
    })
    
}

window.onload = async () => {
    const albums = await getAlbums();

    list.innerHTML = ''
    albums.map((album) => {
        list.innerHTML += `
            <div class="album">
                <div class="album-info">
                    <h2>${album.title}</h2>
                </div>

                <button href="album-details.html?id=1"
                class="details-btn" onclick="showPhotos(${album.id})">Details</button>
            </div>
        `
    })
}

modal.addEventListener('click', e => {
    modal.style.display = 'none';
})