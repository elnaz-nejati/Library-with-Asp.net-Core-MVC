var  PersonData1 = {
    firstName: "elnaz",
    lastName: "Nejati",
    age: 29,
    eyeColor: "Brown",
    fullName:   function() {   
        return  this.firstName  +  " "  +  this.lastName;
    }
};


var  PersonData2 = {
    _firstName: "",
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    },
    _lastName: "",
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
    },
    _age: 0,
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    },
    _eyeColor: "",
    get eyeColor() {
        return this._eyeColor;
    },
    set eyeColor(value) {
        this._eyeColor = value;
    },
    _hairColor: "",
    get hairColor() {
        return this._hairColor;
    },
    set hairColor(value) {
        this._hairColor = value;
    },
    fullName:   function() {   
        return  this._firstName +  " "  +  this._lastName;
    },



};

function PersonData(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    isMale = false;
    isfemale = false;

    this.changeHairColor = function(Color) {
        PersonData2._hairColor = Color;
    }
    this.changeeyeColor = function(Color) {
        PersonData._eyeColor = Color;
    };



    this.fullName = function() { return this.firstName + " " + this.lastName; };

}


var maryamnInfo = new PersonData("maryam", "hosseini", 33, "black");
var armanInfo = new PersonData("arman", "ashena", 33, "black");

var elnazInfo = new PersonData("elnaz", "nejati", 29, "brown");

// PersonData.prototype.job  =  "develpoer";
PersonData.job  =  "develpoer";
var a = 10;

function ed() {
    let a = 20;
}

console.log(PersonData.job );



PersonData.prototype.Gender = function(gender) {

    switch (gender) {
        case "Femal":
            this.isfemale = true;
            break;
        case "male":
            this.isMale = true;

            break;

        default:
            break;
    };

};
maryamnInfo.Gender("Femal");
armanInfo.Gender("male");
elnazInfo.Gender("Femal");


armanInfo.changeHairColor("black");

Object.defineProperty(PersonData, "seteyeColor", {
    get: function() { this.eyeColor = "blue"; }


});

Object.defineProperty(PersonData1, "seteyeColor1", {
    get: function() { this.eyeColor = "blue"; }


});

Object.defineProperty(PersonData1, "setage", {
    get: function(value) { this.age = value; }


});

Object.defineProperty(PersonData2, "seteyeColor", {
    get: function(value) { this.age = value; }


});
PersonData1.setage = 50;
PersonData2._age = 90;

function getImagePath(name) {
    debugger;
    switch (name) {
        case "elnaz":

            return "pictures/elnaz.jpg";
            break;
        case "maryam":
            return "pictures/maryam.jpg";
            break;
        case "arman":
            return "pictures/arman.png";
            break;

        default:
            return "pictures/elnaz.jpg";
            break;
    }
}


function combonclick() {
    var selectedValue = document.getElementById("selectonePerson").value;

    var path = getImagePath(selectedValue);
    document.getElementById("myImage").setAttribute("src", path);
    document.getElementById("myImage").innerHTML = "hgdha"

};

function btnclick0() {
    var selectedValue = document.getElementById("selectonePerson").value;
    var path = changeColor(0, selectedValue);
    document.getElementById("myImage").setAttribute("src", path);

};

function btnclick1() {
    var selectedValue = document.getElementById("selectonePerson").value;

    var path = changeColor(1, selectedValue);
    document.getElementById("myImage").setAttribute("src", path);

};

function changeColor(type, name) {

    switch (name) {
        case "elnaz":
            if (type == 0)
                return "pictures/elnazwithchnageHair.jpg";
            else if (type == 1)
                return "pictures/compilteelnaz.jpg";
            else
                return "pictures/elnaz.jpg";
            break;
        case "maryam":
            if (type == 0)
                return "pictures/maryamwihchngehiar.jpg";
            else if (type == 1)
                return "pictures/maryamwithchnageeye.jpg";
            else
                return "pictures/maryam.jpg";
            break;
        case "arman":
            if (type == 0)
                return "pictures/armanwithchnagehair.png";
            else if (type == 1)
                return "pictures/armacompilt.png";
            else
                return "pictures/arman.png";
            break;

        default:
            return "pictures/elnaz.jpg";
            break;
    };

}

function onclickAge() {
    var selectedValue = document.getElementById("selectonePerson").value;
    var txt = getAgebyName(selectedValue);
    document.getElementById("age").innerHTML = txt.age;
};


function getAgebyName(name) {
    switch (name) {
        case "elnaz":
            return elnazInfo;

            break;
        case "maryam":
            return maryamnInfo;


            break;
        case "arman":
            return armanInfo;

            break;


    };
};

function getpersonalData() {
    debugger;
    var selectedValue = document.getElementById("selectonePerson").value;
    var txt = getAgebyName(selectedValue);
    document.getElementById("namelbl").innerHTML = "Name:";

    document.getElementById("name").innerHTML = txt.fullName();
    document.getElementById("eyeolorlbl").innerHTML = "EyeColor:";

    document.getElementById("eyeolor").innerHTML = txt.eyeColor;
    document.getElementById("joblbl").innerHTML = "Job:";

    document.getElementById("job").innerHTML = txt.job;



};

window.addEventListener("load", changescreencolor);

function changescreencolor() {
    document.body.style.backgroundColor = "#d6749d";
};
document.body.style.backgroundColor = "#d6749d";
//window.addEventListener("load", getTest(10));

function getTest() {
    var f = arguments.firstName;
    return arguments[0];

};
alert(getTest());