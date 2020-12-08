
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Url intercepted: " + info.url);
    if(info.url.indexOf("allow_audio_only") == -1)
    {
      var newUrl = info.url.replace("playlist.m3u8?","audio_0_eng/audio_0_eng.m3u8?");
      console.log("new url:  "+newUrl);
      return {redirectUrl: newUrl};
    }
    return {};
  },

  {
    urls: [
      "*://banned.video/*"
    ],
  },
  // extraInfoSpec
  ["blocking"]);
