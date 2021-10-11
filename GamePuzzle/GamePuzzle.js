let images1= ["img/funny-cat1_part1x1.jpg", "img/monkey_part1x1.jpg", "img/panda_swap_part1x1.jpg"]
let images2= ["img/funny-cat1_part2x1.jpg", "img/monkey_part2x1.jpg", "img/panda_swap_part2x1.jpg"]
let images3= ["img/funny-cat1_part3x1.jpg", "img/monkey_part3x1.jpg", "img/panda_swap_part3x1.jpg"]
let images4= ["img/funny-cat1_part4x1.jpg", "img/monkey_part4x1.jpg", "img/panda_swap_part4x1.jpg"]
let images5= ["img/funny-cat1_part5x1.jpg", "img/monkey_part5x1.jpg", "img/panda_swap_part5x1.jpg"]

function init(){
    let random=Math.floor(Math.random()*3)
    document.getElementById("image1").src= images1[random]
    let random1=Math.floor(Math.random()*3)
    document.getElementById("image2").src= images2[random1]
    let random2=Math.floor(Math.random()*3)
    document.getElementById("image3").src= images3[random2]
    let random3=Math.floor(Math.random()*3)
    document.getElementById("image4").src= images4[random3]
    let random4=Math.floor(Math.random()*3)
    document.getElementById("image5").src= images5[random4]


}
window.onload= init;

function changeSrc(pos){
    let id_image= "";
    let images= [];
    if (pos== 1){
        id_image= "image1"
        images= images1
    }else if (pos== 2){
        id_image= "image2"
        images= images2
    }else if (pos== 3){
        id_image= "image3"
        images= images3
    }else if (pos== 4){
        id_image= "image4"
        images= images4
    }else if (pos== 5){
        id_image= "image5"
        images= images5
    }
    let imgCurrentPos;
    let current_image = document.getElementById(id_image).getAttribute("src")
    for (let i=0; i< images.length; i++){
        if (images[i] === current_image ){
            imgCurrentPos= i
        }
    }
    if (imgCurrentPos===2){
        imgCurrentPos=0
        document.getElementById(id_image).src= images[imgCurrentPos]
    }else {
        ++imgCurrentPos
        document.getElementById(id_image).src= images[imgCurrentPos]
    }
    test_result()

    function test_result(){
        let img1_result= document.getElementById("image1").getAttribute("src")
        let img2_result= document.getElementById("image2").getAttribute("src")
        let img3_result= document.getElementById("image3").getAttribute("src")
        let img4_result= document.getElementById("image4").getAttribute("src")
        let img5_result= document.getElementById("image5").getAttribute("src")


        let current_pos
        for (let i=0; i< images1.length ; i++){
                if (img1_result == images1[i]){
                    current_pos= i

                }

        }
        let current_pos2
        for (let i=0; i<images2.length; i++){
            if (img2_result == images2[i]){
                current_pos2= i
            }
        }
        let current_pos3
        for (let i=0; i<images3.length; i++){
            if (img3_result == images3[i]){
                current_pos3= i
            }
        }
        let current_pos4
        for (let i=0; i<images4.length; i++){
            if (img4_result == images4[i]){
                current_pos4= i
            }
        }
        let current_pos5
        for (let i=0; i<images5.length; i++){
            if (img5_result == images5[i]){
                current_pos5= i
            }
        }
        if (current_pos === current_pos2 && current_pos === current_pos3 && current_pos === current_pos4 && current_pos === current_pos5){
            document.getElementById("result").innerHTML= "All Matched"
            document.getElementById("body").style= "background-color: red"
        }else{
            document.getElementById("result").innerHTML= ""
            document.getElementById("body").style= "background-color: white"
        }

    }





}


