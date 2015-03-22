chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("happening.html", {
	id: "HapppeningID"
  });
});