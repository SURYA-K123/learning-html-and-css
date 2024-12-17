$(document).ready(function(){
    $("#after").on("click",function(){
        $("#wrapper").after(function(){
            return "<p>After executed successfully</p>"
        });
    });


    $("#append").on("click",function(){
        $("#element1").append(function(){
            return "<p>Append executed successfully</p>"
        });
    });


    $("#appendTo").on("click",function(){
        $("#element1").appendTo("#wrapper");
    });


    $("#before").on("click", function(){
        $("#element1").before(function(){
            return "<div id='element0'>"+"Element 0"+"</div>";
        });
    });


    $("#clone").on("click", function(){
        $("#element1").clone().appendTo("#wrapper");
    });


    $("#detach").on("click", function(){
        $("#element1").detach();
    });


    $("#empty").on("click", function(){
        $("#element1").empty();
    });


    $("#html").on("click", function(){
        var statement  = $("#element1").html();
        console.log(statement);
    });


    $("#insertAfter").on("click", function(){
        $("<p>Hi</p>").insertAfter("div");
    });


    $("#insertBefore").on("click", function(){
        $("<p>Hi</p>").insertBefore("div");
    });


    $("#prepend").on("click",function(){
        $("#wrapper").prepend("<p>element1</p>");
    });


    $("#prependTo").on("click",function(){
        $("#element1").prependTo("#wrapper");
    });


    $("#remove").on("click", function(){
        $("#element1").remove();
    });


    $("#replaceAll").on("click", function(){
        $("<h1>Hello</h1>").replaceAll("div");
    });


    $("#replaceWith").on("click", function(){
        $("div").replaceWith("<h1>Hello</h1>");
    });


    $("#text").on("click",function(){
        $("#output-text").text("Text property executed successfully")
    });


    $("#unwrap").on("click",function(){
        $("#sample").unwrap(); // only immediate parent
    });


    $("#wrap").on("click",function(){
        $("#sample").wrap("<div></div>"); 
    });


    $("#wrapAll").on("click",function(){
        $("div").wrapAll("<div></div>"); 
    });
});