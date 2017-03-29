browser.runtime.onMessage.addListener(function (request, sender, sendResponse){
  switch(request.action){
    case 'hello':
//check if the form is Here
      console.log('Hello from plugin!');
      let f=document.querySelector('form');
      if(f){
        return Promise.resolve({isready: true});
      } else {
        return Promise.resolve({isready: false});
      }
    break;
    case 'fill':
      document.querySelector('#f0').value=request.f0;
      document.querySelector('#f1').value=request.f1;
      document.querySelector('#f2').value=request.f2;
      return Promise.resolve();
    break;
  }
});
