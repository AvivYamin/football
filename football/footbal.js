class Person{
    #id;
    constructor(firstName, sureName, salary, age, id){
        this.id = id;
        this.firstName = firstName;
        this.sureName = sureName;
        this.salary = salary;
        this.age = age;
    }
    get getFirstName(){
        return this.firstName;
    }
    get getSureName(){
        return this.sureName;
    }
    get getAge(){
        return this.age;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalary(newSalary){
        this.salary = newSalary;
    }
};

// let person = new Person("Aviv", "Yamin", 10000, 25, 1);
// person.setSalary = 20000;
// console.log(person.getAge);


class Player extends Person{
    #id;
    constructor(firstName, sureName, salary, age, id, strongLeg, position, celebrationSentence){
        super(firstName, sureName, salary, age, id);
        this.strongLeg = strongLeg;
        this.position = position;
        this.celebrationSentence = celebrationSentence;
    }
    goalCelebration(){
        console.log(this.celebrationSentence);
        this.salary = this.salary * 0.975;
        this.salary.toFixed(0);
    }
    set setNewCelebration(newCelebration){
        this.celebrationSentence = newCelebration;
    }
    get getStrongLeg(){
        return this.strongLeg;
    }
    get getPosition(){
        return this.position;
    }
}

// let player = new Player("Leo", "Messi", 100000000, 34, 30, "Left", "Forward", "Yay");
// player.goalCelebration();
// console.log(player.getPosition);
// console.log(player.getAge);

class GoalKeeper extends Person{
    #id;
    constructor(firstName, sureName, salary, age, id, isLeftHanded, lastGoalConceded = new Date(Date.now())){
        super(firstName, sureName, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceded = lastGoalConceded;
    }
    concededAGoal(){
        this.lastGoalConceded = new Date(Date.now());
        this.salary = this.salary * 0.975;
        this.salary.toFixed(0);
    }
}

// console.log(new Date(Date.now()));
// let gk = new GoalKeeper("Iker", "Cassias", 1000000, 41, 1, false,);
// gk.concededAGoal();
// console.log(gk)

