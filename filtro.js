var carnivoros_check = document.getElementById("carnivoros-check");
var onivoros_check = document.getElementById("onivoros-check");
var herbivoros_check = document.getElementById("herbivoros-check");
var terrestres_check = document.getElementById("terrestre-check")
var aquaticos_check = document.getElementById("aquatico-check")
var all = document.getElementById("all-check");
var carnivoros = document.getElementsByClassName("carnivoro");
var onivoros = document.getElementsByClassName("onivoro");
var herbivoros = document.getElementsByClassName("herbivoro");
var aquaticos = document.getElementsByClassName("aquatico");
var terrestres = document.getElementsByClassName("terrestre");

//Ativa todos os checkbox quando o checkbox all for ativado
all.addEventListener('change', function(){
    if(all.checked==true){  
        carnivoros_check.checked=true;
        onivoros_check.checked=true;
        herbivoros_check.checked=true;
        aquaticos_check.checked=true;
        terrestres_check.checked=true;
        all.disabled=true;
        updateVisibilityCarnivoros(true);  //remove o hidden dos animal cards carnivoros
        updateVisibilityOnivoros(true);    //remove o hidden dos animal cards onivoros
        updateVisibilityHerbivoros(true);  //remove o hidden dos animal cards herbivoros
        updateVisibilityLand(true);  //remove o hidden dos animal cards terrestres
        updateVisibilityAquatic(true);    //remove o hidden dos animal cards aquaticos
    }
    if(all.checked==false){  
        all.disabled=false;
    }
});

carnivoros_check.addEventListener('change', function() {
    if(carnivoros_check.checked){
        updateVisibilityCarnivoros(true);
    } else{
        updateVisibilityCarnivoros(false);
        all.disabled=false;
    }
    updateCheckedAll();
});

onivoros_check.addEventListener('change', function() {
    if(onivoros_check.checked){
        updateVisibilityOnivoros(true);
    } else{
        updateVisibilityOnivoros(false);
        all.disabled=false;
    }
    updateCheckedAll();
});

herbivoros_check.addEventListener('change', function() {
    if(herbivoros_check.checked){
        updateVisibilityHerbivoros(true);
    }else{
        updateVisibilityHerbivoros(false);
        all.disabled=false;
    }
    updateCheckedAll();
});

aquaticos_check.addEventListener('change', function(){
    if(aquaticos_check.checked){
        updateVisibilityAquatic(true);
    } else{
        updateVisibilityAquatic(false);
        all.disabled=false;
    } 
});

terrestres_check.addEventListener('change', function(){
    if(terrestres_check.checked){
        updateVisibilityLand(true);
    } else{
        updateVisibilityLand(false);
        all.disabled=false;
    }
});

//Alterna a visibilidade dos cards herbivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityHerbivoros = (visibility) =>{
    if(visibility){
        for (var i = 0; i < herbivoros.length; i++) {
            if((herbivoros[i].classList.contains("aquatico") && aquaticos_check.checked==false) || (herbivoros[i].classList.contains("terrestre") && terrestres_check.checked==false)){} else{
                herbivoros[i].classList.remove("hidden");
            }
        }
    } else{
        for (var i = 0; i < herbivoros.length; i++) {
            herbivoros[i].classList.add("hidden");
        } 
    }
}

//Altera a visibilidade dos cards carnivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityCarnivoros = (visibility) =>{
    if(visibility){    
        for (var i = 0; i < carnivoros.length; i++) {

            if((carnivoros[i].classList.contains("aquatico") && aquaticos_check.checked==false) || (carnivoros[i].classList.contains("terrestre") && terrestres_check.checked==false)){} else{
                carnivoros[i].classList.remove("hidden");
            }
        }
    } else{
        for (var i = 0; i < carnivoros.length; i++) {
            carnivoros[i].classList.add("hidden");
        } 
    }
}

//Altera a visibilidade dos cards onivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityOnivoros = (visibility) =>{
    if(visibility){
        for (var i = 0; i < onivoros.length; i++) {
            if((onivoros[i].classList.contains("aquatico") && aquaticos_check.checked==false) || (onivoros[i].classList.contains("terrestre") && terrestres_check.checked==false)){} else{
                onivoros[i].classList.remove("hidden");
            }
        }
    } else{
        for (var i = 0; i < onivoros.length; i++) {
            onivoros[i].classList.add("hidden");
        } 
    }
}

const updateVisibilityAquatic = (visibility)=>{
    if(visibility){
        for (var i = 0; i < aquaticos.length; i++) {
            if((aquaticos[i].classList.contains("carnivoro") && carnivoros_check.checked==false) || (aquaticos[i].classList.contains("onivoro") && onivoros_check.checked==false) || (aquaticos[i].classList.contains("herbivoro") && herbivoros_check.checked==false)){} else{
                aquaticos[i].classList.remove("hidden");
            }

        }
    } else{
        for (var i = 0; i < aquaticos.length; i++) {
            aquaticos[i].classList.add("hidden");
        } 
    }
}
const updateVisibilityLand= (visibility)=>{
    if(visibility){
        for (var i = 0; i < terrestres.length; i++) {
            if((terrestres[i].classList.contains("carnivoro") && carnivoros_check.checked==false) || (terrestres[i].classList.contains("onivoro") && onivoros_check.checked==false) || (terrestres[i].classList.contains("herbivoro") && herbivoros_check.checked==false)){} else{
                terrestres[i].classList.remove("hidden");
            }
        }
    } else{
        for (var i = 0; i < terrestres.length; i++) {
            terrestres[i].classList.add("hidden");
        } 
    }
}

//Altera o checkbox all
const updateCheckedAll = (toggle=true) => {
    if(carnivoros_check.checked && onivoros_check.checked && herbivoros_check.checked){
        all.checked=true;
    } else{
        all.checked=false;
    }
}