 $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="howdy.wav";
        obj.volume=0.90;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".playSound").click(function() {
            obj.play();
        });
 
    });