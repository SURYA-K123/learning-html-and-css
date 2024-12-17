$(document).ready(function(){
    $("#hide").on("click", function(){
        $("div").hide(300); // or without time show function also has callback
    });


    $("#show").on("click", function(){
        $("div").show(300); // or without time
    });


    $("#toggle").on("click", function(){
        $("div").toggle(300); // or without time
    });


    $("#fadeIn").on("click", function(){
        $("div").fadeIn(); // visibility also accepts time parameter
    });


    $("#fadeOut").on("click", function(){
        $("div").fadeOut(); // visibility also accepts time parameter
    });


    $("#fadeTo").on("click", function(){
        $("div").fadeTo(300, 0.5); // visibility also accepts time parameter
    });


    $("#fadeToggle").on("click", function(){
        $("div").fadeToggle(); // visibility also accepts time parameter
    });


    $("#slideUp").on("click", function(){
        $("div").slideUp('slow');
    });


    $("#slideDown").on("click", function(){
        $("div").slideDown(function(){
            console.log("Slided down");
        });
    });


    $("#slideToggle").on("click", function(){
        $("div").slideToggle(function(){
            if($(this).is(":visible")){
                console.log("Moved down");
            }
            else{
                console.log("Moved up");
            }
        });
    });


    $("#animate").on("click", function(){
        $("div").animate({"height" : "+=200px", "width" : "+=200px"}, 1500);
    });


    $("#clearQueue-queue").on("click", function(){
        $("div").animate({"height" : "+=300px"}, 2000);
        $("div").animate({"width" : "+=300px"}, 2000);
        $("div").animate({"height" : "-=300px"}, 2000);
        $("div").animate({"width" : "-=300px"}, 2000);
    });

    $("#stop-here").on("click", function(){
        $("div").clearQueue();
    });

    $("#delay").on("click", function(){
        $("div").delay(4000).animate({"height" : "+=200px", "width" : "+=200px"});
    });
});