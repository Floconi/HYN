console.log("yeah");


function start(){
    var btn_lancer = document.getElementById("play")
    btn_lancer.style.display ="none"
    play();
    step_1();
  
}

function play(){
    const audio = document.getElementById("my-audio");
    console.log(audio)
    audio.play();
}
    
  

function step_1() {



    var step_1 = document.getElementById("step_1")
    step_1.style.display = "flex"
    step_1.style.opacity = 1 ;
    step_1.style.top = 0;
    
    


    var step_1__title = document.getElementById("step_1__title")
    step_1__title.style.top = "all 2s";
    step_1__title.style.opacity = 1
    step_1__title.style.top = 0
    


    var step_1__content = document.getElementById("step_1__content")
    step_1__content.style.transition = "all 2s"
    step_1__content.style.opacity = 1
    step_1__content.style.left = 0;
    step_1__content.style.right = 0

    var step_1__annee = document.getElementById("step_1__annee")
    step_1__annee.style.transition = "all 2s"
    step_1__annee.style.opacity = 1
    step_1__annee.style.bottom = 0

    var step_1_cadeau = document.getElementById("cadeau_1")
    step_1_cadeau.style.transition = "all 3s"
    step_1_cadeau.style.opacity = 1
    step_1_cadeau.style.transform = "scale(1)"
    
    
    
    setTimeout(()=>{
        step_1__title.style.top = "-200px";  
        step_1__content.style.transition = "all 2s"
        step_1__content.style.left = "auto";
        step_1__content.style.right = "-1500px";
        step_1__title.style.top = "all 2s";
        step_1__annee.style.bottom = "-200px";
        step_1_cadeau.style.transform = "scale(0.2)"
      
        setTimeout(()=>{
            step_1.style.opacity = 0 ;
            step_1.style.transition = "all 2s"
            setTimeout(()=>{
                step_1.style.display = "none"
                step_2()
            },"2000");
        },"1000");

    },"5000");
    
   

}
function step_2() {



    var step_2 = document.getElementById("step_2")
    step_2.style.opacity = 0
    step_2.style.display = "flex";
        step_2.style.transition = "all 2s";
        step_2.style.opacity = 1 ;
        step_2.style.top = 0;
    
        setTimeout(()=>{
        
        
        


            var step_2__title = document.getElementById("step_2__title")
            step_2__title.style.top = "all 2s";
            step_2__title.style.opacity = 1
            step_2__title.style.top = 0
            


            var step_2__content = document.getElementById("step_2__content")
            step_2__content.style.transition = "all 2s"
            step_2__content.style.opacity = 1
            step_2__content.style.left = 0

            var step_2__annee = document.getElementById("step_2__annee")
            step_2__annee.style.transition = "all 2s"
            step_2__annee.style.opacity = 1
            step_2__annee.style.bottom = 0

            var step_2_cadeau = document.getElementById("cadeau_2")
            step_2_cadeau.style.transition = "all 8s"
            step_2_cadeau.style.opacity = 1
            step_2_cadeau.style.transform = "scale(1)"
            

            

            setTimeout(()=>{ // faire disparaitre les info en animation
                step_2__title.style.top = "-200px";
                step_2__content.style.transition = "all 2s"
                step_2__content.style.left = "auto";
                step_2__content.style.right = "-1500px";
                step_2__title.style.top = "all 2s";
                step_2__annee.style.bottom = "-200px"
                step_2__content.style.transition = "all 2s"
                step_2_cadeau.style.transform = "scale(0.2)"
                setTimeout(()=>{
                    step_2.style.opacity = 0 ;
                    step_2.style.transition = "all 2s"
                    setTimeout(()=>{
                        step_2.style.display = "none"
                        step_3()
                    },"2000");
                },"1000");

            },"5000");
        },"1000")
   
   
   

}

function step_3() {



        var step_3 = document.getElementById("step_3")
        
        step_3.style.display = "flex";
        step_3.style.transition = "all 2s";
        step_3.style.opacity = 1 ;
        step_3.style.top = 0;
        
        
        setTimeout(()=>{
    
            var step_3__title = document.getElementById("step_3__title")
            step_3__title.style.top = "all 2s";
            step_3__title.style.opacity = 1
            step_3__title.style.top = 0
            
        
        
            var step_3__content = document.getElementById("step_3__content")
            step_3__content.style.transition = "all 2s"
            step_3__content.style.opacity = 1
            step_3__content.style.left = 0

            var step_3__annee = document.getElementById("step_3__annee")
            step_3__annee.style.transition = "all 2s"
            step_3__annee.style.opacity = 1
            step_3__annee.style.bottom = 0
            
            var step_3_cadeau = document.getElementById("cadeau_3")
            step_3_cadeau.style.transition = "all 8s"
            step_3_cadeau.style.opacity = 1
            step_3_cadeau.style.transform = "scale(1)"

            setTimeout(()=>{ // faire disparaitre les info en animation
                step_3__title.style.top = "-200px";
                step_3__content.style.transition = "all 2s"
                step_3__content.style.left = "auto";
                step_3__content.style.right = "-1500px";
                step_3__title.style.top = "all 2s";
                step_3__title.style.top = "all 2s";
                step_3__annee.style.bottom = "-200px"
                step_3__content.style.transition = "all 2s"
                step_3_cadeau.style.transform = "scale(0.2)"
                setTimeout(()=>{
                    step_3.style.opacity = 0 ;
                    step_3.style.transition = "all 2s"
                    setTimeout(()=>{
                        step_3.style.display = "none"
                        step_4()
                    },"2000");
                },"1000");
        
            },"5000");
        },"1000");
        

}
        
function step_4() {



            var step_4 = document.getElementById("step_4")
            
            step_4.style.display = "flex";
            step_4.style.transition = "all 2s";
            step_4.style.opacity = 1 ;
            step_4.style.top = 0;
            
            
            setTimeout(()=>{
        
            var step_4__title = document.getElementById("step_4__title")
            step_4__title.style.top = "all 2s";
            step_4__title.style.opacity = 1
            step_4__title.style.top = 0
            
        
        
            var step_4__content = document.getElementById("step_4__content")
            step_4__content.style.transition = "all 2s"
            step_4__content.style.opacity = 1
            step_4__content.style.left = 0

            var step_4__annee = document.getElementById("step_4__annee")
            step_4__annee.style.transition = "all 2s"
            step_4__annee.style.opacity = 1
            step_4__annee.style.bottom = 0

            var step_4_cadeau = document.getElementById("cadeau_4")
            step_4_cadeau.style.transition = "all 8s"
            step_4_cadeau.style.opacity = 1
            step_4_cadeau.style.transform = "scale(1)"
            
            
            setTimeout(()=>{ // faire disparaitre les info en animation
                step_4__title.style.top = "-200px";
                step_4__content.style.transition = "all 2s"
                step_4__content.style.left = "auto";
                step_4__content.style.right = "-1500px";
                step_4__title.style.top = "all 2s";
                step_4__annee.style.bottom = "-200px"
                step_4_cadeau.style.transform = "scale(0.2)"
                setTimeout(()=>{
                    step_4.style.opacity = 0 ;
                    step_4.style.transition = "all 2s"
                    setTimeout(()=>{
                        step_4.style.display = "none"
                        step_5()
                    },"2000");
                },"1000");
        
            },"5000");
        },"1000");
    
        }
            function step_5() {



                var step_5 = document.getElementById("step_5")
                
                step_5.style.display = "flex";
                step_5.style.transition = "all 2s";
                step_5.style.opacity = 1 ;
                step_5.style.top = 0;
                
                
            
                setTimeout(()=>{
                var step_5__title = document.getElementById("step_5__title")
                step_5__title.style.top = "all 2s";
                step_5__title.style.opacity = 1
                step_5__title.style.top = 0
                
            
            
                var step_5__content = document.getElementById("step_5__content")
                step_5__content.style.transition = "all 2s"
                step_5__content.style.opacity = 1
                step_5__content.style.left = 0
                step_5__content.style.right = 0

                var step_5__annee = document.getElementById("step_5__annee")
                step_5__annee.style.transition = "all 2s"
                step_5__annee.style.opacity = 1
                step_5__annee.style.bottom = 0

                var step_5_cadeau = document.getElementById("cadeau_5")
                step_5_cadeau.style.transition = "all 8s"
                step_5_cadeau.style.opacity = 1
                step_5_cadeau.style.transform = "scale(1)"
                
                
                setTimeout(()=>{ // faire disparaitre les info en animation
                    step_5__title.style.top = "-200px";
                    step_5__content.style.transition = "all 2s"
                    step_5__content.style.left = "auto";
                    step_5__content.style.right = "-1500px";
                    step_5__content.style.right = "-1000px";
                    step_5__title.style.top = "all 2s";
                    step_5__annee.style.bottom = "-200px"
                    step_5__content.style.transition = "all 2s"
                    step_5_cadeau.style.transform = "scale(0.5)"
                    setTimeout(()=>{
                        step_5.style.opacity = 0 ;
                        step_5.style.transition = "all 2s"
                        setTimeout(()=>{
                            step_5.style.display = "none"
                            step_6()
                        },"2000");
                    },"1000");
            
                },"5000");
            },"1000");
            
    
    /*var step_2 = document.getElementById("step_2")
    step_2.style.display = "block"
    step_2.style.opacity = 1 ;
    step_2.style.top = 0;
    step_2.style.display = "fixed"


    var step_2__title = document.getElementById("step_2__title")
    step_2__title.style.opacity = 1
    step_2__title.style.top = 0


    var step_2__content = document.getElementById("step_2__content")
    step_2__content.style.opacity = 1
    step_2__content.style.top = 0
    
    setTimeout(()=>{
        step_2.style.opacity = 0 ;
    },"5000");*/

}

function step_6(){
    var step_6 = document.getElementById("step_6")
                
                step_6.style.display = "flex";
                step_6.style.transition = "all 2s";
                step_6.style.opacity = 1 ;
                step_6.style.top = 0;
                

}

