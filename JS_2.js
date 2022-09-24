
//O b j e c t s

          var student = { //this is simiar to a dictionary
            name : "JIm",
            major: "Business",
            age:19,
            gpa: 2.5
          }
          student.name = "Andy";
          document.write(student.name+"<br>");
          document.write(student.major+"<br>");
          document.write(student.gpa+"<br>");


// F u n c t i o n s

          var sum = addNumbers(4,10);
          document.write(sum);

          function addNumbers(num1,num2){
            return num1+num2;
          }
//E V E N T   H A N D L E R
          //Inline events listener (in the html id and onclick functions implemented)
          function  handleClick(element){
            alert("Clicked"+element.id);
          }
          // this is an alternate way to add event without having onclik function in html
          var header = document.getElementById("myheader");
          header.style = "color:blue; background-color:green;"

          document.write(header.getAttribute("giraffe"));
          header.innerHTML = "Elephant Academy"; //use to change the html text


          header.addEventListener("click",function(){ //inhere for the listener "onclick" becomes "click"
            alert("You clicked "+header.id);
          });


//If statements

          var isStudent = false;
          var isSmart = false;

          if(isStudent && isSmart){
            document.write("You are a smart student");
          }else if(isStudent && !isSmart){
            document.write("You are a student but not smart");
          }
          else{
            document.write("You are not a student and not smart");
          }
          document.write("<br><br>");

          if(1>4){
            document.write("number comparison was true");
          }
          document.write("<br>");

          if("dog" != "dog"){
            document.write("string comparison was true");
          }

//switch statement

          var myGrade = "A";
          switch(myGrade){
            case "A":
                  document.write("You pass");
                  break;
            case "F":
                  document.write("You fail");
                  break;
            default:
                  document.write("Invalid grade");
          }
          document.write("<br>");

//while loops

          var index = 1;
          while(index <= 5){
            document.write(index);
            index++;
          }
          document.write("<br><br>")
          //For loop

          for(var i=0;i<5;i++)
                document.write(i);

                document.write("<br>");

          //Extended for loop
          var luckyNumbers = [3,5,7,4,7,5];
          luckyNumbers.forEach(function(luckyN){
            document.write(luckyN + "<br>");
          });
