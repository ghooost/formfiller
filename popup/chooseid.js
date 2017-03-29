const serverURL='http://ghost.aesthetic.ru/plugin/gate.php';
let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then(tabs => {
   let tabID=tabs[0].id;
   browser.tabs.sendMessage(tabID, {action: 'hello'}).then(response=>{
     $('.page.sel').removeAttr('sel');
     if(response && response.isready){
//let's show the quest window
        $('.page#p1').attr('sel',1);
        $('#dosubmit').click(function(){
            let id=$('#f1').val();
            if(!id){
              $('#f1').focus();
            } else {
              $.ajax({
                url:serverURL,
                cache:false,
                dataType:'json',
                data:{
                    action:'data',
                    id:id
                }
              }).done(function(data){
                  console.log(data);
                  data.action='fill';
                  browser.tabs.sendMessage(tabID, data).catch(err=>{
                    console.error(err);
                  });

              }).fail(function(){
                  console.error("There is no connection!");
              });
            }
        });
     } else {
//something isn't ok in the document
      $('.page#p2').attr('sel',1);
     }
   }).catch(err=>{
//no connection to the content script
      console.error(`Error ${err}`);
      $('.page#p3').attr('sel',1);
   });
})
