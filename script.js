const blubswitch=document.querySelector("#blubswitch");
const  blub = document.querySelector("#blub");
blubswitch.addEventListener("click",function(){
    console.log(blub.src);
    if(blub.src.match("off")){
        blub.src="ractangle.png";
        blubswitch.innerHTML="trun-off";
    }
    else{
        blub.src="circle.png";
        blubswitch.innerHTML="trun-on";
    }
});