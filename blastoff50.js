

//set timer
        var seconds_left  = 51;
    //set interval
        var myTimer= setInterval(function() { 
            for(i=0; i<11;i++)
            //making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval

            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval

            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval

            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval

            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML = ("Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + seconds_left)
            --i;//making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + --seconds_left);
            //making deducting interval
            document.getElementById('btn').innerHTML =( "Launch in" + -seconds_left);

            
            //if statement to clear interval
            if (seconds_left < 1){
                clearInterval(myTimer);
            //if statement to endTime
                if(seconds_left<= 0 ||seconds_left <1){
                    endTime();
                }
            }// miliseconds
        } ,1000);//endTime function for 'Blastoff!!'
        function endTime(){
            document.getElementById('btn').innerHTML = 'Blast off!!'
        }
        function draw() {// function to draw
            r = map(mouseX,0,225,0,600);//background
            background(r,0,b);
            Fill(250,118,222);
            ellipse(mouseX,200,64,64);
        }