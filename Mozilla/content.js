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
}

// Run the function to remove the entire div containing Twitch embeds
removeTwitchEmbeds()
