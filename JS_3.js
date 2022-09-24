//E X C E P T I O N   H A N D L I N G

    // var x= y + 9; // this is the error using y without declaring (in html page source conole tab can see the error message)


      try{
        // throw "someting went wrong";
        var x = y + 9;
      }
      catch(err){
        document.write(err);
      }
      finally{
        document.write("<br>Finally block is here<br><br>");
      }


//C L A S S E S    A N D   O B J E C T S
        class Book{
          constructor(title,author){
            this.title = title;
            this.author  = author;
          }
          //getters and setters
          get title(){ //In here only use the attribute name as the title otherwise gettter and setter should invoke manually)
            document.write("<p>getting title</P>")
            return this._title;
          }
          set title(title){
            document.write("<p>setting title</p>")
            this._title=title;
          }
          //when inside of the class don't need function syntax
          readBook(){
            document.write("Reading"+this.title+"by"+this.author);
          }
        }

        var book1 = new Book("Harry Potter","JK Roling"); //Getters and setters will execute automatically
        //here it is not needed to use book1.getTitle() as we can see in the output it always execute the code automatically
        //for this to happen getter and setter should only have the name of the parameter
        //otherwise getter and setter should invoke separately.
        document.write(book1.title+ "<br>");
        book1.readBook();

        document.write("<br><br>");


//I N H E R I T A N C E

            class Chef{
              constructor(name,age){
                this.name = name;
                this.age = age;
              }
              makeChicken(){
                document.write("Chef makes chicken<br>");
              }
              makeSpecialDish(){
                document.write("Chef makes bbq.<br>");
              }
            }
            class ItalianChef extends Chef{
              constructor(name,age,ctryOfOrigin){
                super(name,age);
                this.ctryOfOrigin = ctryOfOrigin;
              }
              makePasta(){
                document.write("Chef makes pasta.<br>");
              }
              makeSpecialDish(){//Pverridden
                document.write("Chef makes chicken parm.<br>");
              }
            }

            var myChef = new Chef("Gordan Ramsay",54);
            myChef.makeChicken();
            myChef.makeSpecialDish();

            var myItalianChef = new ItalianChef("Massimo Bottura",65,"Italy");
            myItalianChef.makePasta();
            myItalianChef.makeSpecialDish();


            var textbox = document.getElementById("textbox");
            var bttn   = document.getElementById("btn");

document.write("<br><br>");

//W E B   S T O R A G E(localStorage)
            bttn.addEventListener("click",function(){
              localStorage.name  = textbox.value;
            });
document.write("<h1>"+localStorage.name+"</h1>");
//T I M I N g
            function sayHi(){
              alert("You are done!")
            }
