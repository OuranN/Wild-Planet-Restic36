var carnivoros_check = document.getElementById("carnivoros-check");
var onivoros_check = document.getElementById("onivoros-check");
var herbivoros_check = document.getElementById("herbivoros-check");
var all = document.getElementById("all-check");
var carnivoros = document.getElementsByClassName("carnivoro");
var onivoros = document.getElementsByClassName("onivoro");
var herbivoros = document.getElementsByClassName("herbivoro");

//Ativa todos os checkbox quando o checkbox all for ativado
all.addEventListener('change', function(){
    if(all.checked==true){  
        carnivoros_check.checked=true;
        onivoros_check.checked=true;
        herbivoros_check.checked=true;

        updateVisibilityCarnivoros(false);  //remove o hidden dos animal cards carnivoros
        updateVisibilityOnivoros(false);    //remove o hidden dos animal cards onivoros
        updateVisibilityHerbivoros(false);  //remove o hidden dos animal cards herbivoros
    }
});

carnivoros_check.addEventListener('change', function() {
    updateVisibilityCarnivoros();
    updateCheckedAll();
});

onivoros_check.addEventListener('change', function() {
    updateVisibilityOnivoros();
    updateCheckedAll();
});

herbivoros_check.addEventListener('change', function() {
    updateVisibilityHerbivoros();
    updateCheckedAll();
});

//Alterna a visibilidade dos cards herbivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityHerbivoros = (toggle=true) =>{
    if(toggle){
        for (var i = 0; i < herbivoros.length; i++) {
            herbivoros[i].classList.toggle("hidden");
        }
    } else{
        for (var i = 0; i < herbivoros.length; i++) {
            herbivoros[i].classList.remove("hidden");
        } 
    }
}

//Altera a visibilidade dos cards carnivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityCarnivoros = (toggle=true) =>{
    if(toggle){
        for (var i = 0; i < carnivoros.length; i++) {
            carnivoros[i].classList.toggle("hidden");
        }
    } else{
        for (var i = 0; i < carnivoros.length; i++) {
            carnivoros[i].classList.remove("hidden");
        } 
    }
}

//Altera a visibilidade dos cards onivoros, toggle= true: alterna entre visivel e invisivel, toggle=false: deixa os cards visiveis
const updateVisibilityOnivoros = (toggle=true) =>{
    if(toggle){
        for (var i = 0; i < onivoros.length; i++) {
            onivoros[i].classList.toggle("hidden");
        }
    } else{
        for (var i = 0; i < onivoros.length; i++) {
            onivoros[i].classList.remove("hidden");
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