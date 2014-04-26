$(document).on("pagebeforeshow",function(){

      $.ajax({
        url:'http://server-ip/ciedapp/controller.php?action=api&item=news&from=cied&num=10',
        type: "GET"
      }).done(function(data){
        $.each(data.announces,function(i,item){
          $('div[data-role="content"] div[data-role="collapsible-set"]').append('<div data-role="collapsible" data-collapsed="true"><h3>'+item.title+'<p>'+item.postdate+'</p></h3><p>'+item.post+'</p></div>');
          $("a").attr("rel","external");
    });
                $('div[data-role="collapsible"]').collapsible();
                $( 'div[data-role="content"] div[data-role="collapsible-set"]').collapsibleset( "refresh" );
   });

});
  

 

$(document).on("pagecreate",function(){

  $("#nea_sxolhs").on("click",function(){
    $('div[data-role="panel"]').panel( "close" );
    $('#left-panel').one( "panelclose",function( event, ui ) {
          $('div[data-role="collapsible-set"]').empty();
          $('div[data-role="content"] img').remove();
          $.mobile.loading( "show" );
     $.ajax({
        url:'http://server-ip/ciedapp/controller.php?action=api&item=news&from=cied&num=10',
        type: "GET"
      }).done(function(data){
        $.each(data.announces,function(i,item){
          $('div[data-role="content"] div[data-role="collapsible-set"]').append('<div data-role="collapsible" data-collapsed="true"><h3>'+item.title+'<p>'+item.postdate+'</p></h3><p>'+item.post+'</p></div>');
           $("a").attr("rel","external");
          });
                $('div[data-role="collapsible"]').collapsible();
                $( 'div[data-role="content"] div[data-role="collapsible-set"]').collapsibleset( "refresh" );
                $.mobile.loading( "hide" );  
        });
    });
  });
});
$(document).on("pagecreate",function(){
    //nea sullogou foithtwn
 $("#nea_sul_foit").on("click",function(){
    $('div[data-role="panel"]').panel( "close" );
    $('#left-panel').one( "panelclose",function( event, ui ) {
          $('div[data-role="collapsible-set"]').empty();
          $('div[data-role="content"] img').remove();
          $.mobile.loading( "show" );
     $.ajax({
        url:'http://server-ip/ciedapp/controller.php?action=api&item=news&from=studcied&num=3',
        type: "GET"
      }).done(function(data){
        $.each(data.announces,function(i,item){
          $('div[data-role="content"] div[data-role="collapsible-set"]').append('<div data-role="collapsible" data-collapsed="true"><h3>'+item.title+'<p>'+item.postdate+'</p></h3><p>'+item.post+'</p></div>');
          $("a").attr("rel","external");
          });
                $('div[data-role="collapsible"]').collapsible();
                $( 'div[data-role="content"] div[data-role="collapsible-set"]').collapsibleset( "refresh" );
                $.mobile.loading( "hide" );  
        });
    });
  });
});
    // fwtografia lesxhs
$(document).on("pagecreate",function(){
$("#programma_lesxhs").on("click",function(){
  $('div[data-role="panel"]').panel( "close" );
  $('#left-panel').one( "panelclose",function( event, ui ) {
      $('div[data-role="content"] img').remove();
      $('div[data-role="collapsible-set"]').empty();
      $.mobile.loading( "show" );
        $.ajax({
          url: 'http://server-ip/ciedapp/controller.php?action=api&item=foodmenu',
          type: 'GET',
          dataType: 'json',
          cache: false,
          contentType: false,
          processData: false
        }).done(function (data){
             $('div[data-role="content"]').append('<a href="#myPopup" data-rel="popup" data-position-to="window"><img src="http://'+data.image+'" alt="ΝΑΥΠΑΚΤΟΣ-ΑΝΤΙΡΙΟ" style="width:100%;height:500px;"></a>');
        });                    
      $.mobile.loading( "hide" );
     
    });
  });
 });   
    // dromologia astikou
$(document).on("pagecreate",function(){
  $("#dromologia").on("click",function(){
  $('div[data-role="panel"]').panel( "close" );
  $('#left-panel').one( "panelclose",function( event, ui ) {
      $('div[data-role="content"] img').remove();
      $('div[data-role="collapsible-set"]').empty();
      $.mobile.loading( "show" );


       $.ajax({
          url: 'http://server-ip/ciedapp/controller.php?action=api&item=buschedule',
          type: 'GET',
          dataType: 'json',
          cache: false,
          contentType: false,
          processData: false
        }).done(function (data){
            $('div[data-role="content"]').append('<a href="#myPopup" data-rel="popup" data-position-to="window"><img src="http://'+data.image+'" alt="ΝΑΥΠΑΚΤΟΣ-ΑΝΤΙΡΙΟ" style="width:100%;height:100%;"></a>');
        });                    

      $.mobile.loading( "hide" );

    });
      
  });

//telos mobile init

});

$(function () {
    $('body').on('swiperight', function () {
        $('#left-panel').panel('open', '');
    });

    $('body').on('swipeleft', function () {
        $('#left-panel').panel('close');
    });
});


