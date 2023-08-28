console.log('Content removal script has started.')
// Function to remove the entire div containing Twitch embeds
function removeTwitchEmbeds () {
  // Find all script tags on the page
  const scripts = document.querySelectorAll('script')

  // Loop through all script tags
  for (const script of scripts) {
    // Check if the script's 'src' attribute contains the Twitch embed URL
    if (
      script.src &&
      script.src.includes('https://player.twitch.tv/js/embed/v1.js')
    ) {
      console.log('Found a Twitch embed script.')
      const parentDiv = script.closest('.fixme.hidden-sm')

      // Remove the parent div from the DOM if it exists
      if (parentDiv) {
        console.log('Removing embeded script')
        parentDiv.remove()
      }
    }
  }

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
}

// Run the function to remove the entire div containing Twitch embeds
removeTwitchEmbeds()
