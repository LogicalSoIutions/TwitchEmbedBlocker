// Function to clean html after blocking embeds
function cleanupHTML () {

  // Find all h2 tags on the page
  const h2s = document.querySelectorAll('h2')

  // Loop through all h2 tags
  for (const h2 of h2s) {
    // Check if the h2's text includes the Twitch stream text
    if (
      h2.textContent &&
      h2.textContent.includes('Watch') &&
      h2.textContent.includes('stream here')
    ) {
      // Find the closest parent div and remove it from the DOM
      const parentDiv = h2.closest('div')
      if (parentDiv) {
        parentDiv.remove()
      }
    }
  }

  const iframes = document.querySelectorAll('iframe');
  for (const iframe of iframes) {
    if (iframe.src && iframe.src.includes('https://player.twitch.tv/') && iframe.src.includes('parent=albiononline2d.com')) {
      const parentDiv = iframe.closest('div.col-12.text-center');
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  }
  
}

cleanupHTML()
