console.log('hey buddy')
window.onload=function(){
    console.log('hey buddy again')
    let canvas=document.getElementById('canvas')
    canvas.width=600;
    let c=canvas.getContext('2d');
    c.font="90 px Ariel";
    canvas.height=600;
    //c.fillRect(100,100,100,100);
    let l=20;
    let h=30;
    let dinox=50;
    let dinoy=420;
    var cnt=0;
    let fl=0;
   
   
    //c.fillText(cnt, 10, 50);
    // window.addEventListener('n',(event)=>{
    //     keys.y-=10;

    // })
    //==========================================================
   
        
       
    
    //============================================================
    
    function rect(a,b,dx,dy,x,y)
    {
        this.a=a;
        this.b=b;
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.drawrect=function(){
            c.beginPath();
            c.fillRect(this.x,this.y,this.a,this.b);
            c.strokeStyle="red";
            //c.stroke();
        }
        this.update=function(){
            this.x-=this.dx;
            // if(fl==1){
            // this.dy+=1;
            // this.y-=this.dy;
            // // if(this.y==300)
            // // {
            // //     this.dy=-this.dy;
            // // }
           // console.log(x);
            if(this.x==50)
            {
                console.log("hitting the score")
                alert('YOUR SCORE IS '+(cnt+1));
                cnt=0;
            }

            this.drawrect();
            
        }
        this.updatedino=function()
        {
            
            
            
                
                // let myVar=setInterval(dinomove,1);
                // console.log("Started setInterval")
                // function dinomove(){
                //     console.log("setInterval working")
                //     this.y-=this.dy;
                //     if(this.y==300)
                //     {
                //         this.dy=-this.dy;
                //         console.log("reached 300")
                //     }  
                //     if(this.dy==420)
                //     {
                //         console.log('stopped setInterval');
                //         clearInterval(myVar);
                //     }
                // };
                // let bye=setInterval(()=>{
                if(fl==1){
                    console.log('ye chalraha hi')
                    console.log(fl);
                    if(this.y<=420){
                        this.y-=this.dy;
                        if(this.y==300)
                        {
                            this.dy=-this.dy;
                        }
                    }
                    
                    // if(this.y==420)
                    // {
                    //     this.dy=0;
                        
                    //     // clearInterval(bye)
                    //     // console.log('Cleared')
                    // }
                
                    fl=0;
                }
                
                
                console.log(fl)

            
            this.drawrect()
        }
       
    }
    //============================================================

    let rect1=new rect(20,30,0,10,50,420);
    let rectangle=[];
    let x=600*Math.random();
    let z=2;
    for(let i=1;i<=2000;i++)
    {
        x+=300+Math.random()*600;
        let y=420;
        z+=0.05;
        var rects=new rect(30,30,z,0,x,y);
        rectangle.push(rects);
        
    }console.log(rectangle)
   // let cnt=0;
   //=========================================================
   window.addEventListener('keydown', function(event) {
        
    //top
    console.log("key is pressed")
    if(event.keyCode == 38) {
        fl=1;
        //cnt++;
        

    }
    //bottom
    // if(event.keyCode==40)
    // {
    //     object.y+=100;

    // }
    });
    //============================================================
    function animate(){
        c.clearRect(0,0,window.innerHeight,window.innerWidth);
        //console.log('animating');
        //dino
        //rect1.dy+=1;
        //rect1.drawrect();
        rect1.updatedino();
        
        
        //console.log('hey');
        //the base-line
        c.beginPath();
        c.moveTo(0,450);
        c.lineTo(600,450);
        c.strokeStyle="black";
        c.stroke();
        //obstacles
        cnt++;
        for(let i=0;i<200;i++)
        {
            rectangle[i].update();
            
           
        }
        
        console.log(cnt);
        
        c.fillText(cnt,500,100);
        c.fillText('metres',530,100);
        requestAnimationFrame(animate);
        
    }
    animate();
}
