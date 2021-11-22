     // write a function that takes the input string and reverses it
        // example
        // argument: Hello
        // return: olleH
        function reverseThisString(string){
            var val ="";
            for(var i=string.length-1;i>=0;i--){
                val+=string[i];
            }
            alert(val)

        }
        // write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
        // example:
        // argument: Hello World
        // return: hELLO wORLD
        function swapCase(string) {
            var val ="";
            for(var i=0;i<string.length;i++){
                if(string[i]==string[i].toUpperCase()){
                    val+= string[i].toLowerCase();
                }else{
                    val+= string[i].toUpperCase();
                }
            }
            alert(val)
        }

        //convert array of numbers from farenheit to celcius
        // example:
        // argument: [23, 32, 41, 50, 59]
        // return: [-5, 0, 5, 10, 15]
        // hint: use Array.map
        function toCelcius(array){
            //array = [23, 32, 41, 50, 59]
            var arr = [];
            for(var i=0;i<array.length;i++){
                arr[i] = (array[i] - 32) / 1.8;
            }
            alert(arr);
        }

        //write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
        // example:
        // argument: [20, 30, 50, 80, 90, 100]
        // return: [false, false, false, true, true, true]
        // hint: use Array.map
        function passOrFail(array){
           // array = [20, 30, 50, 80, 90, 100]
            var arr = [];
            for(var i=0;i<array.length;i++){
                arr[i] = array[i]>=75?true:false;
            }
            alert(arr);
        }

        //write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
        // example:
        // return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
        // hint: use Array.forEach, Array.map or a for loop
        function germanNumbers(){
            const cardinalNumbers = [2,3,4,5,6];
            const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
            var arr = [];
            for(var i=0;i<cardinalNumbers.length;i++){
                arr[i] = cardinalNumbers[i]+" is "+ germanNumbers[i];
            }
            alert(arr);

        }

        // write code that returns an array of ONLY prime numbers that are in the array numbers
        // example: 
        // return [2, 3, 5, 7, 11, 13]
        // hint use: Array.filter
        function returnPrimeNumbers(){
            const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            var arr = [];
            var k =0;
            for(var i=0;i<numbers.length;i++){
                var num =numbers[i]
                var isPrime =true;
                for(var j = 2; j < num; j++){
                    if(num % j === 0){
                        isPrime =false;
                        break;
                    }
                }
                if(isPrime && num > 1){
                    arr[k]=num;
                    k++;
                }
            }
            alert(arr);
        }

        function loop(){
            
            for(var i=1;i<=100;i++){
                if(i % 3===0 && i%5===0)
                    console.log("CSC225 RULES I LOVE JAVASCRIPT")
                else if(i% 3===0)
                    console.log("CSC225 RULES")
                else if(i%5===0)
                    console.log("I LOVE JAVASCRIPT")
                else
                    console.log(i)
            }
        }