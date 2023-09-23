const API = 'https://youtube-v31.p.rapidapi.com/captions?part=%40omarhernandezrey7315%2Ffeatured&videoId=M7FIvfx5J10';


const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-CACHEBYPASS': 'youtube-v31.p.raoidapi.com',
		'X-RapidAPI-Key': '730e7b25damsh800786d28ec1b12p1781f4jsne9b94d6d776c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
	const data = await response.json();
    return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
      <div class="group relative">
      <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnail.hight.url}" alt="${video.snippet.description}" class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title}
      </h3>
      </div>
      </div>
    `).slice(0,4).join('')}
 
    `;
  } catch {
    
  } 
})();


/* try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */