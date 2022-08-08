

//timer starting
        var seconds_left = 11;//make interval function
        var myTimer= setInterval(function() {//link 'btn' to --seconds_left
            document.getElementById('btn').innerHTML = --seconds_left;
        //if condition for less then 1
            if (seconds_left < 1){
                clearInterval(myTimer);// clear interval
            //if condition for 0 seconds endTime
                if(seconds_left<= 0 ||seconds_left <1){
                    endTime();
                }
            }//miliseconds
        }, 1000);//endtimefunction
        function endTime(){//what displays, blastoff!! @ endTime
            document.getElementById('btn').innerHTML = 'Blast off!!'
        }