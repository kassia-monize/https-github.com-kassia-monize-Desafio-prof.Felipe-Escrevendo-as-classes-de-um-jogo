class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack = "";

        switch (this.type) {
            case "wizard":
                attack = "using your magic";
                break;

            case "warrior":
                attack = "using your sword";
                break;

            case "monk":
                attack = "using your martial arts";
                break;

            case "ninja":
                attack = "using your shuriken";
                break;

            default:
                attack = "unknown attack";
        }

        console.log(`The ${this.type} the name ${this.name} with ${this.age} attacked ${attack}`);
     }        
}

const ninja = new Hero("Kukarutô", "24 years old", "ninja");
const monk = new Hero("Anne", "16 years old", "monk");

ninja.attack();
monk.attack(); 