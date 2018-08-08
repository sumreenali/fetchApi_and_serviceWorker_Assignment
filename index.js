console.log('hello world');
// if('serviceWorker' in navigator){
// 	navigator.serviceWorker.register('/sw.js').then(function(registration){
// 	//registration successfull
// 	console.log('serviceWorker registration successfull with scope:',registration.scope);		

// 	}).catch(function(err){
// 		console.log('serviceWorker registration failed', err);
// 	});
// }
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }