//console.log('hey boi')
window.onload=function()
{
    let canvas=document.getElementById('canvas')
    canvas.width=window.innerWidth;
    let c=canvas.getContext('2d');
    canvas.height=window.innerHeight;
    //c.fillRect(x,y,width,height);//rectangle
    c.fillRect(100,100,100,100);

    //c.fillRect(240,300,100,100);
    //c.fillRect(200,400,100,100);
    //line
    c.beginPath();//specifies the path
    c.moveTo(50,300);//moves the path in the specified coordinates
    c.lineTo(300,100);//draws the line on the specified path
    c.strokeStyle="#fa34a3";
    c.stroke();//gives the line a stroke..
    //create a different path for different lines //#endregion
    //Arc/circle
    c.beginPath()
    c.arc(300,300,30,Math.PI,0,false);
    c.strokeStyle="blue";
    c.stroke();
    //multiple circles using a forloop;
    //let colors=['black','blue','red','yellow'];
    // for(let i=0;i<4;i++)
    // {
    //     let x=Math.random()*window.innerWidth;
    //     let y=Math.random()*window.innerHeight;
    //     c.beginPath()
    //     c.arc(x,y,30,0,Math.PI*2,false);
    //     c.strokeStyle='blue'
    //     c.stroke();
    // }
    c.beginPath()
    c.arc(100,100,30,0,Math.PI*2,false);
    c.strokeStyle='blue';
    c.stroke();
    let mouse={
        x:undefined,
        y:undefined
    }
    window.addEventListener('mousemove',function(event){
        // console.log('hellojika');
         console.log(event);
         mouse.x=event.x;
         mouse.y=event.x;
     
     
     })
    //randomized moving circles
    function circles(x,y,dx,dy,radius){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
        this.draw=function(){
            c.beginPath()
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.strokeStyle='red';
            c.stroke();
            c.fill();
        }
        this.update=function(){
            if(this.x+this.radius>window.innerWidth || this.x-this.radius<0){
                this.dx=-this.dx;
            }
            this.x+=this.dx;
            if(this.y+this.radius>window.innerHeight || this.y-this.radius<0){
                this.dy=-this.dy;
            }
            this.x+=this.dx;
            this.y+=this.dy;
            //interactivity
            //subtracting because to check the range
            if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50 && this.radius<40)
            {
                this.radius+=1;
            }
            else if(this.radius > 20)
            {
                this.radius-=1;
            }

            this.draw();
        }
    }
    
    let circleArray=[];
    for(let i=0;i<100;i++)
    {
        let x=Math.random()*window.innerWidth+30;
        let y=Math.random()*window.innerHeight+30;
        var circle=new circles(x,y,Math.random(),Math.random(),30);
        circleArray.push(circle);
    }
    //animate functions;
    function animate(){
        c.clearRect(0,0,window.innerWidth,window.innerHeight)
        
        console.log('hello');
        //circle.draw();
        for(let i=0;i<circleArray.length;i++)
        {
            circleArray[i].update();
        }
        requestAnimationFrame(animate);
    }animate();
//interactivity to canvas piece
//event listener concept

}