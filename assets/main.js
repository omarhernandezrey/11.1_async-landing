const channelId = 'UCTZFAzSm3V3Mt3v1Xqv9Oxg'; // Reemplaza con tu ID de canal
const API = `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=9`;
const content = document.getElementById('content'); // Obtén el elemento con el ID 'content'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null; // En caso de error, devuelve null
  }
}

(async () => {
  try {
    const videos = await fetchData(API);

    // Genera el HTML para mostrar los videos
    let view = `
      ${videos.items.map(video => `
        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </a>
      `).slice(0, 4).join('')}
    `;

    // Inserta el HTML generado en el elemento 'content'
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();

