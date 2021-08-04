var dog = {
    name: "Rocky",
    legs: 4,
    tail: 1,
    qualities: ["loyalty","companionship"],
    bark : function() {
        console.log("woof");  
        console.log("woof");  
        console.log("woof");  },
    result : function() {
      return this.name+ " has " + this.legs + " legs.";
    }
    };
  
  dog.bark();
  console.log(dog.result());
