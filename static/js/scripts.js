$(document). ready(function (){
    $("design") .click(function () {
        $(".design-showing").toggle();
        $(".design-hidden") .toggle();
    }
);


$(".development").click(function() {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
})

$(".product").click(function() {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
});

$("sbmt").click(function(event)
{
    event.preventDefault();
    
    let email=$("#contact-email").val();

    if($("#user-name").val()==""){
        alert("add name")
    }
    else if ($("#contact-email").val()==""){
        alert("add email")
    }
    else if ($("#message").val()==""){
        alert("add message")
    }

    else{
        alert("Hello " + email + "," +"your message has been received. Thank you for reaching out."); }
    });  
   
})