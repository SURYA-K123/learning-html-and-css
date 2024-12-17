$(document).ready(function () {
    // parent() function
    $("#parent").on("click", function () {
        $(".child-l1").parent().css({ "border": "2px solid red" });
    });

    // parents() function
    $("#parents").on("click", function () {
        $(".child-l1").parents().css({ "border": "2px solid red" });
    });

    // parentsUntil() function
    $("#parentsUntil").on("click", function () {
        $(".child-l1").parentsUntil(".main-parent").css({ "border": "2px solid red" });
    });

    // children() function
    $("#children").on("click", function () {
        $(".parent-l1").children().css({ "border": "2px solid red" });
    });

    // find() function
    $("#find").on("click", function () {
        $(".main-parent").find(".child-l1").css({ "border": "2px solid red" });
    });

    // siblings() function
    $("#siblings").on("click", function () {
        $(".parent-l2").siblings().css({ "border": "2px solid red" });
    });

    // next() function
    $("#next").on("click", function () {
        $(".parent-l2").next().css({ "border": "2px solid red" });
    });

    // nextAll() function
    $("#nextAll").on("click", function () {
        $(".parent-l2").nextAll().css({ "border": "2px solid red" });
    });

    // nextUntil() function
    $("#nextUntil").on("click", function () {
        $(".sibling1").nextUntil(".sibling4").css({ "border": "2px solid red" });
    });

    // prev() function
    $("#prev").on("click", function () {
        $(".sibling2").prev().css({ "border": "2px solid red" });
    });

    // prevAll() function
    $("#prevAll").on("click", function () {
        $(".sibling2").prevAll().css({ "border": "2px solid red" });
    });

    // prevUntil() function
    $("#prevUntil").on("click", function () {
        $(".sibling4").prevUntil(".sibling1").css({ "border": "2px solid red" });
    });

    // closest() function
    $("#closest").on("click", function () {
        $(".child-l2").closest("div").css({ "border": "2px solid red" });
    });

    $("#offsetParent").on("click", function(){
        console.log($(".child-l2").offsetParent().css({"border" : "1px solid red"}));
    });


    // Filtering methods
    // eq() function
    $("#eq").on("click", function () {
        $("div").eq(8).css({ "border": "2px solid red" });
    });

    // filter() function
    $("#filter").on("click", function () {
        $("div").filter(".sibling1").css({ "border": "2px solid red" });
    });

    // not() function
    $("#not").on("click", function () {
        $("div").not(".sibling1").css({ "border": "2px solid red" });
    });

    // first() function
    $("#first").on("click", function () {
        $("div").first().css({ "border": "2px solid red" });
    });

    // last() function
    $("#last").on("click", function () {
        $("div").last().css({ "border": "2px solid red" });
    });

    // has() function
    $("#has").on("click", function(){
        $("p").has("span", "i").css({"color" : "green"});
    });

    // is() function
    $(".is").on("click", function () {
        if ($(this).is("button")) {
            console.log("This is button");
        }
        else {
            console.log("This is not a button");
        }
    });

    // map() function
    var arr = [2,3,4,5,6];
    $("#map").on("click", function(){
        var newArr = jQuery.map(arr, function(val, index){
            return {
                num : val,
                indexVal : index,
                square : val*val
            }
        });
        console.log(newArr);
    });


    // miscellaneous
    $("#add").on("click", function(){
        $(this).add("p").css({"color" : "red"});
    });


    $("#andSelf").on("click", function(){
        $("p").find(".helloSpan").addBack().css({"color" : "red"}); // andSelf() deprecated equivalent method addBack()
    });
    
    
    $("#contents").on("click", function(){
        console.log($(this).contents()[1]);
    });


    $("#end").on("click", function(){
        
    });
});