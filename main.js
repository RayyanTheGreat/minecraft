var canvas = new fabric.Canvas('myCanvas');
block_img_width = 30 ; 
block_img_height = 30 ;
var player_x = 10 ;
var player_y  = 10;
player_object = "";



function player_update() {

fabric.Image.fromURL("player.png" , function(Img){

player_object = Img ; 
player_object.scaleToWidth(150) ; 
player_object.scaleToHeight(140) ; 
player_object.set({

top: player_y , left : player_x

});

canvas.add(player_object);

});

}

function new_img(get_img) {

    fabric.Image.fromURL(get_img , function(Img){
    
    block_img_object = Img ; 
    block_img_object.scaleToWidth (block_img_width) ; 
    block_img_object.scaleToHeight(block_img_height) ; 
    block_img_object.set({
    
    top: player_y , left : player_x
    
    });
    
    canvas.add(block_img_object);
    
    });
    
    }


window.addEventListener("keydown" , my_keydown) ;
function my_keydown(e) {

keypressed = e.keyCode;
console.log (keypressed);


if(e.shiftKey == true && keypressed == '80' ){

console.log("p and shift pressed together") ; 
block_img_width = block_img_width + 10 ;
block_img_height = block_img_height + 10 ;
document.getElementById ("current_width").innerHTML = block_img_width ;
document.getElementById ('current_height').innerHTML = block_img_height ; 


}

if(e.shiftKey == true && keypressed == '77' ){

    console.log("m and shift pressed together") ; 
    block_img_width = block_img_width - 10 ;
    block_img_height = block_img_height - 10 ;
    document.getElementById ("current_width").innerHTML = block_img_width ;
    document.getElementById ('current_height').innerHTML = block_img_height ; 
    
    
    }

    if (keypressed == '38') {

      up();
    console.log("up arrowkey is pressed");

    }

    if (keypressed == '40') {

        down();
        console.log("down arrowkey is pressed");
    
        }

        if (keypressed == '37') {

            left();
            console.log("left arrowkey is pressed");
        
            }

            
            if (keypressed == '39') {

                right();
                console.log("right arrowkey is pressed");
            
                }


            if (keypressed == '87') {
                
new_img('wall.jpg');
console.log ("w");
            }
if (keypressed == '71') {
                
new_img('ground.png');
console.log ("g");

            }


if (keypressed == '76') {
                
new_img('light_green.png');
console.log ("l");
}


if (keypressed == '68') {
                
new_img('dark_green.png');
console.log ("d");
                                
     }
                                
if (keypressed == '84') {
                
new_img('trunk.png');
console.log ("t");
                                        
             }
             if (keypressed == '82') {
                
                new_img('roof.jpg');
                console.log ("r");
                                                
                     }   
                     
                     if (keypressed == '89') {
                
                        new_img('yellow_wall.png');
                        console.log ("y");
                                                        
                             }

                             if (keypressed == '85') {
                
                                new_img('unique.png');
                                console.log ("u");
                                                                
                                     }

                                     if (keypressed == '7') {
                
                                        new_img('cloud.png');
                                        console.log ("c");
                                                                        
                                             }

                     
}


function up() {

if (player_y >= 0){

player_y = player_y - block_img_height ;
console.log ("block image height = " + block_img_height);
console.log ("when up arrow is pressed x =" + player_x + ", y =" + player_y);
canvas.remove(player_object);
player_update ();

}

}




function down() {

    if (player_y <= 500){
    
    player_y = player_y + block_img_height ;
    console.log ("block image height = " + block_img_height);
    console.log ("when down arrow is pressed x =" + player_x + ", y =" + player_y);
    canvas.remove(player_object);
    player_update ();
    
    }
    
    }


    function left() {

        if (player_x >= 0){
        
        player_x = player_x - block_img_width ;
        console.log ("block image width = " + block_img_width);
        console.log ("when left arrow is pressed x =" + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update ();
        
        }
        
        }



        function right() {

            if (player_x <= 500){
            
            player_x = player_x + block_img_width ;
            console.log ("block image width = " + block_img_width);
            console.log ("when right arrow is pressed x =" + player_x + ", y =" + player_y);
            canvas.remove(player_object);
            player_update ();
            
            }
            
            }
            
        
    
