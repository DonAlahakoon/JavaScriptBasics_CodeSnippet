//P r i n t i n g

          document.write("<h1>Hello World</h1>");
          document.write("<hr>");
// alert("This is an alert");
// console.log("Logging into the console");   print in the web console

//V a r i a b l e s
          var name= "Mike";
          var occupation = 'programmer';
          var age =20;
          var gpa =2.4;
          var isTall = true;

          name = "John";
          document.write("Your name:"+name);

//C A S T I N G  A N D  C O N V E R T I N G

          document.write(100 + Number("34")+"<br>");
          document.write(100 + parseInt("32")+"<br>");
          document.write(200 + parseFloat("20.88")+"<br>");

//S T R I N G S

var greeting  = "Hello";

          document.write(greeting.length + "<br>");
          document.write(greeting.charAt(0)+"<br>");
          document.write(greeting.indexOf("llo")+"<br>");
          document.write(greeting.indexOf("z")+"<br>");
          document.write(greeting.substring(2)+"<br>");
          document.write(greeting.substring(2,5)+"<br>");

//N u m b e r s

          document.write(2*5 +"<br>");
          document.write(2**4+"<br>");
          document.write(10%3 +"<br>");//gives the remainder
          document.write((1+3)*4+"<br>");
          document.write(10/3 + "<br><br>"); // same result for 10/3.0

          var num = 10;
          num +=100;      //+=,-=,/=,*=
          document.write(num+ "<br>");
          num++;
          document.write(num + "<br><br>");

          //Math class has useful math methods
          document.write(Math.pow(2,3)+"<br>");
          document.write(Math.sqrt(25)+"<br>");
          document.write(Math.round(2.5)+"<br>");


//U S E R  I N P U T

          var name = window.prompt("Enter your name:");
          alert("Your name is "+name);


//A R R A Y S

          //var luckyNumbers = []
          var luckyNumbers = [4,6,23,25,"twenty",false];

          luckyNumbers[0] = 90;
          document.write(luckyNumbers[0]+"<br>");
          document.write(luckyNumbers[1]+"<br>");
          document.write(luckyNumbers.length);

          //N-Dimentional Arrays
          var numberGrid = [[1,2],[5,6]];
          numberGrid[0][1] = 123;
          document.write(numberGrid[0][0]+"<br>");
          document.write(numberGrid[0][1]+"<br><br>");

// A r r a y  F u n c t i o n s

          var friends=new Array();
          friends.push("Oscar");
          friends.push("Angela");
          friends.push("Kevin");
          friends.push("Fiona");


          friends.pop();
          document.write(friends+"<br>");
          document.write(friends.indexOf("Angela")+"<br>");
          document.write(friends.indexOf("Z")+"<br>");
          document.write(friends.reverse()+"<br>");
          document.write(friends.sort()+"<br>");
