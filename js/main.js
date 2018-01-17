

$(document).ready(function() {

    const slinks = $(".thumbnail");
    const linkit = $(".nav-link");
    const palaset = $(".luokka");
    var curPalanen;
    var num=1;
    var activeWin;


    $("#Video").hide();
    $("#Valokuvaus").hide();
    $("#Printti").hide();
    $("#Audio").hide();

    linkit.click(
        function () {
            linkit.css({
                color:"rgba(0, 0, 0, 0.5)",
                backgroundColor:"rgba(0, 0, 0, 0.0)",
                borderRadius:"0px"
            });

            $(this).css({
                backgroundColor:"#114b5f",
                color:"#ebf2fa",
                borderRadius:"5px"

            });
            activeWin= $(this).attr('id');
            console.warn(activeWin);
    });

    linkit.hover(
        function(){
            if($(this).attr('id')!==activeWin){
            $(this).css({
                backgroundColor:"#1EA5B8",
                color:"#ebf2fa",
                borderRadius:"5px",
                cursor:"pointer"


            });}
        },
        function(){
            if($(this).attr('id')!==activeWin){
            $(this).css({
                color:"rgba(0, 0, 0, 0.5)",
                backgroundColor:"rgba(0, 0, 0, 0.0)",
                borderRadius:"0px",
                cursor:"default"
            });
        }}
    );


    $("#Etu").click(function () {
        if(num !== 1) {
            palaset.slideUp(500);
            $("#Etusivu").slideDown(500);
            num=1;
        }
    });

    $("#Vid").click(function () {
        if(num !== 2) {
            palaset.slideUp(500);
            $("#Video").slideDown(500);
            num=2;
        }
    });

    $("#Val").click(function () {
        if(num !== 3) {
            palaset.slideUp(500);
            $("#Valokuvaus").slideDown(500);
            num=3;
        }
    });

    $("#Pri").click(function () {
        if(num !== 4) {
            palaset.slideUp(500);
            $("#Printti").slideDown(500);
            num=4;
        }
    });

    $("#Aud").click(function () {
        if(num !== 5) {
            palaset.slideUp(500);
            $("#Audio").slideDown(500);
            num=5;
        }
    });




    $(function(){
        $('.modal').modal({
            show: false
        }).on('hidden.bs.modal', function(){
            $(this).find('video')[0].pause();

                $(this).find('video')[1].pause();

        });
    });

    slinks.hover(
        function(){
            $(this).css({
                filter:"brightness(75%)",
               /* borderStyle: "solid",
                borderWidth: "medium",
                borderColor: "white"
                */


            });
        },
        function(){
            $(this).css({
                filter:"brightness(100%)",
                borderStyle: "none"
            });
        }
    );



});