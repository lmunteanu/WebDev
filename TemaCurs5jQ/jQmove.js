$(document).ready(function () {
    $('#moveit').click(function clickMoveit() {    
        $(this).css({ "left": "+=50px" });
    });
    //$(this).hide();
    $('body').keydown(function (event) {
        console.log("the key", event.keyCode);
        switch (event.keyCode) {
            case 38:        //sageata sus
                //moveup('"top": "-=5px"');         //
                moveup('sus');
                break;
            case 39:        //sageata dreapta
                $('#moveit').css({ "left": "+=5px" });
                break;
            case 40:        //sageata jos     
                $('#moveit').stop();
                $('#moveit').animate({ "top": "+=5px" },0);
                break;
            case 37:        //sageata stanga
                $('#moveit').stop();
                $('#moveit').animate({ "left": "-=5px" }, 50);
                break;
            case 32:        //tasta space
                $('#moveit').toggle();
                break;
            default:
                console.log("the key", event.keyCode);
        }
    });
});
function moveup(direction) {
    console.log(direction);
    for (var i = 0; i < 3; i++) {
        $('#moveit').stop();
        $('#moveit').animate({ "top": "-=5px" }, 200);   
    }
    
}

//function moveup(direction) {
//      console.log(direction);
//      console.log($('#moveit').position());
//    for (var i = 0; i < 3; i++) {
//        $('#moveit').animate({ direction }, 200);
//    }
//    $('#moveit').stop();
//}