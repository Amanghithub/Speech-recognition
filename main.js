x=0;
y=0;
draw_circle="";
draw_rect="";
draw_square="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="The System Is Listning Please Speak"
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been recognised as "+content;
    
    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="Started Drawing Circle";
        draw_circle="set";
    }
    
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="Started Drawing Rectangle";
        draw_rect="set";
    }

    if(content=="square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="Started Drawing Square";
        draw_square="set";
    }
}

function setup(){
    canvas=createCanvas(1200,800)
}

function draw(){
    if(draw_circle=="set"){
        r=Math.floor(Math.random()*100);
        circle(x,y,r);
        document.getElementById("status").innerHTML="Circle Is Drawn";
        draw_circle="";
    }

    if(draw_rect=="set"){
        w=Math.floor(Math.random(40,80)*250);
        h=Math.floor(Math.random(10,50)*200);
        rect(x,y,w,h);
        document.getElementById("status").innerHTML="Rectangle Is Drawn";
        draw_rect="";
    }

    if(draw_square=="set"){
        
        h=Math.floor(Math.random(10,50)*200);
        rect(x,y,h,h);
        document.getElementById("status").innerHTML="Square Is Drawn";
        draw_square="";
    }
}