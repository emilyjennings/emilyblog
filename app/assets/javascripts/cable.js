// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

$(".nav").hide();
$("#hamburger").click(function(){
  $(".nav").slideToggle("slow", function(){
    $("#hamburger").hide();
    $(".nav").show();
    $("#cross").show();
  });
});


$("#cross").click(function(event){
  event.preventDefault();
  //click event that takes information from the event and prevents refresh
  if ($("#cross").is(":visible")){
    $(".nav").slideToggle("slow", function(){
      $("#cross").hide();
      $("#hamburger").show();
    });
  }
});
