// List of YouTube video IDs, corresponding titles, and captions
var videos = [
  { index: 1, id: 'jfKfPfyJRdk', title: 'Livestream 1'},
  { index: 2, id: 'IkmLXvBfVv0', title: 'Livestream 2'}
];

// Function to fetch thumbnails and create thumbnail elements
function fetchThumbnails() {
  var container = document.querySelector('.thumbnails');

  videos.forEach(function(video) {
    console.log(video)
    var thumbnailUrl = 'https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg';
    var thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('thumbnail-container'); // Add a class for styling
    thumbnailElement.innerHTML = `
      <img src="${thumbnailUrl}" alt="Thumbnail">
      <div class="thumbnail-caption">${video.title}</div>
    `;
    thumbnailElement.addEventListener('click', function() {
      window.location.href = `${video.index}.html`; // Redirect to 1.html or 2.html based on the thumbnail clicked
    });
    container.appendChild(thumbnailElement);
  });
}

// Fetch thumbnails when the page loads
window.addEventListener('load', fetchThumbnails);
