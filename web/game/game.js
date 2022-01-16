var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

document.addEventListener('keydown', function(event) {
    if(event.key == '1') {
//        alert('One was pressed');
//        jump();
        if (typeof selectednode !== 'undefined') {
            selectednode.style = "border: none;" 
        }
        node1.style = "border: 10px solid black;"
        selectednode = node1  

    }
    else if(event.key == '2') {
//       alert('Two was pressed');
//        jump();
        if (typeof selectednode !== 'undefined') {
            selectednode.style = "border: none;" 
        }
        node2.style = "border: 10px solid black;"
        selectednode = node2   
    }
    else if(event.key == '3') {
        if (typeof selectednode !== 'undefined') {
            selectednode.style = "border: none;" 
        }  
        node3.style = "border: 10px solid black;"
        selectednode = node3
    }
    else if(event.key == '4') {
        if (typeof selectednode !== 'undefined') {
            selectednode.style = "border: none;" 
        }
        node4.style = "border: 10px solid black;"
        selectednode = node4
    }
});




// function jump(){
//     if(character.classList == "animate"){return}
//     character.classList.add("animate");
//     setTimeout(function(){
//         character.classList.remove("animate");
//     },300);
// }
// var checkDead = setInterval(function() {
//     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
//         block.style.animation = "none";
//         alert("Game Over. score: "+Math.floor(counter/100));
//         counter=0;
//         block.style.animation = "block 1s infinite linear";
//     }else{
//         counter++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
//         block.style.animation[1] = "500ms";
//     }
// }, 10);