let embedStatus = true;

function cleanupHTML () {

  // eft-ammo.com + fextralife
  const h2s = document.querySelectorAll('h2')

  for (const h2 of h2s) {
    if (
      h2.textContent &&
      h2.textContent.includes('Watch') &&
      h2.textContent.includes('stream here')
    ) {
      const parentDiv = h2.closest('div')
      if (parentDiv) {
        parentDiv.remove()
        embedStatus = false;
      }
    }
  }

  // albiononline2d.com 
  const iframes = document.querySelectorAll('iframe');
  for (const iframe of iframes) {
    if (iframe.src && iframe.src.includes('https://player.twitch.tv/')) {
      const parentDiv = iframe.closest('div.col-12.text-center');
      if (parentDiv) {
        parentDiv.remove();
        embedStatus = false;
      }
    }
  }

  // nwdb.info
  const twitchEmbed = document.getElementById('twitch-embed-floating');
  if (twitchEmbed) {
    console.log("detected floating embed")
    twitchEmbed.remove();
    embedStatus = false;
  }

}

// cleanup html in observer because of nwdb.info loading style

function observeDOM() {

  const target = document.body;
  const observer = new MutationObserver((mutations, observerInstance) => {

    if (!embedStatus) {
      console.log("Embed(s) removed, disconnecting the observer");
      observerInstance.disconnect(); 
      return; // Exit the function early since there's nothing left to do
    }

    cleanupHTML();


  });

  const config = { childList: true, subtree: true };

  observer.observe(target, config);
}

observeDOM();