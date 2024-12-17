$(document).ready(function () {

    // attr() function
    $("#attr").on("click", function () {
        var title = $("h1").attr("title");
        console.log(title);
        $("h1").attr("title", "Hello");
    });

    // addClass() function
    $("#addClass").on("click", function () {
        $("h1").addClass("color-change");
    });

    // hasClass() function
    $("#hasClass").on("click", function () {
        if ($("h1").hasClass("font-family")) {
            $("h2").addClass("color-change");
        }
    });

    // html() function
    $("#html").on("click", function () {
        console.log($("h1").html());
    });

    // prop() function
    $("#prop").on("click", function () {
        console.log($("input[type='checkbox']").prop("checked"));
        $("input[type='checkbox']").prop("checked", !$("input[type='checkbox']").prop("checked"));
    });

    // removeAttr() function
    $("#removeAttribute").on("click", function () {
        $("h1").removeAttr("class");
    });

    // removeClass() function
    $("#removeClass").on("click", function () {
        $("h1").removeClass("font-family");
    });

    // toggleClass() function
    $("#toggleClass").on("click", function () {
        $("h1").toggleClass("font-family");
    });

    // val() function
    $("#val").on("click", function () {
        var name = $("input[type='text']").val();
        console.log(name);
        $("input[type='text']").val("Surya")
    });
})