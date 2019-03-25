window.onload=function()
{
    let canvas=document.getElementById('canvas')
    let div=document.getElementById('hey')
    console.log(div)
    let img=document.getElementById('scream')
    canvas.width=1000;
    canvas.height=window.innerHeight;
   // function myFunction() {
    let person = prompt("  Now  enter your name", "Sample Name");
    //     if (person != null) {
    //         var node = document.createElement("div");                 // Create a <li> node
    //         var textnode = document.createTextNode(person);         // Create a text node
    //         node.appendChild(textnode);                              // Append the text to <li>
    //         div.appendChild(node);
    //     }
    //   }
    // let tasks=[];
    // function refreshlist(){
    //     $.get('/scores',(data)=>{
    //         tasks=data;
    //         $('#scoreboard').empty()
    //         for(let i in tasks)
    //         {
    //             let task=tasks[i];
    //             $('#scoreboard').append(
    //                 $('<li>')
    //                 .append(
    //                     $('<div>')
    //                     .append(
    //                         $('<span>')
    //                         .text(task.name+" "+task.score)
    //                     )
    //                 )
    //             )
    //         }
    //     })
    // }
    $.get('/scores',(data)=>{
        console.log("got the data")
    })
    let c=canvas.getContext('2d');
    c.height=window.innerHeight;
    c.width=1000;
    console.log(c.width+" "+c.height)
    let mouse={
        x:0,
        y:0
    };
    //======================================
    function getRelativeCoords(event) {
        return { x: event.offsetX, y: event.offsetY };
    }
    //======================================
    function randomInt(min,max) // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    //=========================================
    let fl=0;
    window.addEventListener('click',(event)=>{
        // mouse.x=event.clientX;
        // mouse.y=event.clientY;
        //console.log(event);
        fl=1;
        var mousePos=getRelativeCoords(event);
        console.log(mousePos)
        mouse.x=mousePos.x;
        mouse.y=mousePos.y;
        var sound = document.getElementById("audio");
        sound.play();
    })
    //===========================================
    //console.log(mouse);
    function circles(x,y,radius)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.draw=function(){
            c.beginPath()
            c.drawImage(img,this.x,this.y, 40, 60);
            //c.fill();
        }
    }
    let circle1=new circles(10,10,10);
    //circle1.draw();
    let obsarray=[];
    for(let i=0;i<=100;i++)
    {
        let r=Math.random()*10+50;
        let x=Math.random()*600+r;
        let y=Math.random()*600+r;
        
        var orbs=new circles(x,y,r);
        obsarray.push(orbs);
    }
    console.log(obsarray);
    // for( let i=0;i<=100;i++)
    // {
    //     obsarray[i].draw();
    // }
    let cnt=0;
    // setInterval(()=>{
    //     let a=randomInt(0,100);
    //     console.log(a);
    //     obsarray[a].draw();
    //     if(Math.abs(mouse.x-obsarray[a].x)<obsarray[a].radius && Math.abs(mouse.y-obsarray[a].y)<obsarray[a].radius)
    //     {
    //         cnt++;
    //         console.log("score is"+cnt);
    //     }
    // },1000)
        let t=1000
        let clear=setInterval(()=>{
            c.clearRect(0,0,1000,700);
            
            let a=randomInt(0,100);
            //console.log(a);
            obsarray[a].draw();
            //=====================================
            // for(let i=0;i<10;i+=1)
            // {
            //     obsarray[a].draw();
            //     obsarray[a].x-=1;
            // }This was a trial for moving targets.
            //=====================================
            // console.log(obsarray[a].x+" "+obsarray[a].y)
            // console.log(mouse.x+" "+mouse.y);
            // console.log(obsarray[a].radius);
            // console.log(obsarray[a].x-mouse.x+" "+"radius is " +obsarray[a].radius)
            if(fl==1){
                if((obsarray[a].x-mouse.x)<10)
                {
                    cnt++;
                    console.log("score is"+cnt);
                }
                fl=0;
            }
            c.font="30px Algerian"
            c.fillText("THE PUBG TRAINER",400,60)
            c.font="20px Algerian"
            c.fillText("TRAINEE : "+person,420,140)
            c.font="30px Algerian"
            c.fillText("KILLED : "+cnt,800,100)
            c.font="15px consolas"
            c.fillText("© 2019 ChinmaySama",460,100)
        },t)
        setTimeout(()=>{
            
            alert("TIME'S UP NOOB")
            clearInterval(clear);
            div.innerText="KILLS :"+" "+cnt+"\n"+"K/D RATIO : "+(cnt/20)+"\n"+"WINS : "+ cnt*0;
            div.style.color="black";
            div.style.fontFamily="Algerian";
            div.style.fontSize="170%"
            div.style.textShadow="2px 2px whitesmoke"
            cnt=0;
            // $.post("/scores",{cnt},()=>{
            //     console.log("sent the data");
            // });
            // $.post('/scores',{
            //     name:person,
            //     score:cnt
            // },(data)=>{
            //     console.log("posted")
            //     refreshlist();
            // })
        },20000)
        


    
    //obsarray[random(0,10000)].draw();
    //console.log(random(0,10000));
    //obsarray[randomInt(0,10000)].draw();
    
    
}