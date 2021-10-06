function generate(){ 
    gentheme();  
    gensetting(); 
    genprotagonist();
    genantagonist();
    genproblem();
}
function gentheme(){
    var th = Math.floor((Math.random() * 10) + 1);
   if(th == 1){
      theme = "romance"
   }
   if(th == 2){
      theme = "comedy"
   }
   
   if(th == 3){
      theme = "documentary"
   }
   
   if(th == 4){
      theme = "supernatural"
   }
   
   if(th == 5){
      theme = "drama"
   }
   
   if(th == 6){
      theme = "fairy tale"
   }
   
   if(th == 7){
      theme = "action"
   }
   
   if(th == 8){
      theme = "mystery"
   }
   
   if(th == 9){
      theme = "crime"
   }
   
   if(th == 10){
      theme = "sci-fi"
   }
   document.getElementById("theme").innerHTML =  theme;
}
function genprotagonist(){
var pt = Math.floor((Math.random() * 11) + 1);
   if(pt == 1){
      protype = "chef"
   }
   if(pt == 2){
      protype = "teacher"
   }
   
   if(pt == 3){
      protype = "astronaut"
   }
   
   if(pt == 4){
      protype = "rapper"
   }
   
   if(pt == 5){
      protype = "construction worker"
   }
   
   if(pt == 6){
      protype = "cashier"
   }
   
   if(pt == 7){
      protype = "old man"
   }
   
   if(pt == 8){
      protype = "little kid"
   }
   
   if(pt == 9){
      protype = "football player"
   }
   
   if(pt == 10){
      protype = "teenager"
   }
	
   if(pt == 11){
      protype = "poet"
   }
   //personality
   var per = Math.floor((Math.random() * 12) + 1);
   if(per == 1){
      pertype = "evil"
   }
   if(per == 2){
      pertype = "hungry"
   }
   
   if(per == 3){
      pertype = "narcissistic"
   }
   
   if(per == 4){
      pertype = "depressed"
   }
   
   if(per == 5){
      pertype = "attention craving"
   }
   
   if(per == 6){
      pertype = "love hungry"
   }
   
   if(per == 7){
      pertype = "physco"
   }
   
   if(per == 8){
      pertype = "short tempered"
   }
   
   if(per == 9){
      pertype = "sarcastic"
   }
   
   if(per == 10){
      pertype = "bratty"
   }
	
   if(per == 11){
      pertype = "bipolar"
   }
	
   if(per == 12){
      pertype = "nervous"
   }
   
   
    document.getElementById("antagonist").innerHTML = "A " + pertype + " "+ protype ;
}
function genantagonist(){
    var at = Math.floor((Math.random() * 11) + 1);
       if(at == 1){
          atype = "chef"
       }
       if(at == 2){
          atype = "teacher"
       }
       
       if(at == 3){
          atype = "astronaut"
       }
       
       if(at == 4){
          atype = "rapper"
       }
       
       if(at == 5){
          atype = "construction worker"
       }
       
       if(at == 6){
          atype = "cashier"
       }
       
       if(at == 7){
          atype = "old man"
       }
       
       if(at == 8){
          atype = "little kid"
       }
       
       if(at == 9){
          atype = "football player"
       }
       
       if(at == 10){
          atype = "teenager"
       }
	if(pt == 11){
      protype = "poet"
   }
       //personality
       var aper = Math.floor((Math.random() * 10) + 1);
       if(aper == 1){
          pertype = "evil"
       }
       if(aper == 2){
          apertype = "hungry"
       }
       
       if(aper == 3){
          apertype = "narcissistic"
       }
       
       if(aper == 4){
          apertype = "depressed"
       }
       
       if(aper == 5){
          apertype = "attention craving"
       }
       
       if(aper == 6){
          apertype = "love hungry"
       }
       
       if(aper == 7){
          apertype = "physco"
       }
       
       if(aper == 8){
          apertype = "short tempered"
       }
       
       if(aper == 9){
          apertype = "sarcastic"
       }
       
       if(aper == 10){
          apertype = "bratty"
       }
       
       
        document.getElementById("protagonist").innerHTML = "A " + apertype + " "+ atype ;
    }
function genproblem(){
    
    
    var pr = Math.floor((Math.random() * 15) + 1);
    if(pr == 1){
       problem = "a mysterious suicide"
    }
    if(pr == 2){
       problem = "a heist"
    }
    
    if(pr == 3){
       problem = "an unexplained homocide"
    }
    
    if(pr == 4){
       problem = "a crush in a workplace"
    }
    
    if(pr == 5){
       problem = "family is being haunted"
    }
    
    if(pr == 6){
       problem = "a police chase is unfolding"
    }
    
    if(pr == 7){
       problem = "group of friends must fine buried treasure"
    }
    
    if(pr == 8){
       problem = "a villain is threatning to cause havoc"
    }
    
    if(pr == 9){
       problem = "mysterious aliens have emerged from the ground"
    }
    
    if(pr == 10){
       problem = "mars is populated, but the oxegen is running low"
    }
    if(pr == 11){
        problem = "A ninja is trying to teach his student everything before he dies"
     }
     if(pr == 12){
        problem = "a secret hacking group is tageting a group of friends"
     }
     if(pr == 13){
        problem = "an invisible monster is terrorizing a town"
     }
     if(pr == 14){
        problem = "a submarine sinks at the bottom of the ocean with everyone on board"
     }
     if(pr == 15){
        problem = "a burglary causes the residents of the home to defend themselves"
     }
    document.getElementById("problem").innerHTML =  problem;
}
function gensetting(){
    var se = Math.floor((Math.random() * 16) + 1);
    if(se == 1){
       setting = "the moon"
    }
    if(se == 2){
       setting = "antartica"
    }
    
    if(se == 3){
       setting = "a desert"
    }
    
    if(se == 4){
       setting = "the city"
    }
    
    if(se == 5){
       setting = "a suburban home"
    }
    
    if(se == 6){
       setting = "a rural farm"
    }
    
    if(se == 7){
       setting = "a country house"
    }
    
    if(se == 8){
       setting = "a space station"
    }
    
    if(se == 9){
       setting = "a haunted house"
    }
    
    if(se == 10){
       setting = "a medieval castle"
    }
    if(se == 11){
        setting = "a battlefield"
     }
     if(se == 12){
        setting = "an office"
     }
     if(se == 13){
        setting = "a sports game"
     }
     if(se == 14){
        setting = "an alien planet"
     }
     if(se == 15){
        setting = "a food factory"
     }
	     if(se == 16){
        setting = "under the ocean"
     }
    document.getElementById("setting").innerHTML =  setting;
}
