$(document).ready(function(){
        $("#fillGap").submit(function(event){
            event.preventDefault();
            const placeInput = $("input#place").val();
            const yearInput = $("input#year").val();
            const numberInput = $("input#number").val();
            const adjectiveInput = $("input#adjective").val();
            const verbInput = $("input#verb").val();
            const verBsInput = $("input#verBs").val();

            $(".place").text(placeInput);
            $(".1984").text(yearInput);
            $(".66").text(numberInput);
            $(".scary").text(adjectiveInput);
            $(".golfing").text(verbInput);
            $(".stammering").text(verBsInput);

            $("#story").show();
        });
    });