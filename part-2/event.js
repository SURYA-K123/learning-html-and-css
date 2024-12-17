$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".output").append(" scrolled more than 100 pixels");
        }
    });

    $(window).resize(function () {
        $(".output").text("window size : " + $(this).width());
    });


    $("#off").on("click", function () {
        $(window).off("scroll");
    });


    $("p").one("click", function () {
        $(this).animate({ fontSize: "+=6px" });  // animate() - function to apply animation for any numeric css property
    });


    const objectNew = {
        test: function () {
            console.log("Proxy executed");
        }
    };

    $("#proxy").on("click", function () {
        $.proxy(objectNew, "test")();
    });


    $("p").click(function(){
        console.log("Click event triggered on p");
    });

    $("#trigger").click(function(){
        $("p").trigger("click");
    });

    $("#event").click(function(event){
        console.log(event.currentTarget);
    });

    $("a").click(function(event){
        event.preventDefault();
        console.log(event);
        console.log(event.type);
    });

    $(".div").click(function(event){
        alert("Hello");
        event.stopPropagation();
    });

    $("#fb").on("click", function(){
        alert("First button clicked");
    });

    $("#unbind").on("click", function(){
        $("#fb").unbind("click");
    });

    $("input").on("blur", function(){
        // alert("Lost focus");
    });
    $("input").on("change", function(){
        console.log("Input value changed");
    });
    $("input").on("focus", function(){
        console.log("focus occurs");
    });
    $("input").on("select", function(){
        console.log("Text selected");
    });
    $("form").on("submit", function(){
        console.log("Form submitted");
    });

    $("#p").on("focusin", function(){
        console.log("focusin triggered")
    })
    
});

