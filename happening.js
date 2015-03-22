function getWebview() {
	if (!this.view) {
		this.view = document.getElementById("HappeningWebview");
	}
	return this.view;
}

onload = function() {
	var webview = getWebview();
	
	webview.addEventListener('permissionrequest', function(e) {
	  if (e.permission === 'media' || e.permission === 'geolocation' || e.permission === 'download') {
		e.request.allow();
	  }
	});
	
	window.addEventListener('keydown', handleKeyDown);
	window.addEventListener('focus', function() { webview.focus(); });

	webview.addEventListener('newwindow', function(e) {
		e.stopImmediatePropagation();
		window.open(e.targetUrl);
	});
}

function handleKeyDown(event) {
  if (event.ctrlKey && !event.altKey) {
	switch (event.keyCode) {
	  case 81: // Ctrl+q
		window.close();
		break;

	  case 82: // Ctrl+r
	  case 115: // F5
		getWebview().reload();
		break;
	}
  }
}