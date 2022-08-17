const person = {
    firstName: 'Kaushal',
    lastName: 'Chauhan',
contactNo: "9974579988",
    isAvailable:true,
    showPersonDetails() {
        const accepting = this.isAvailable ? "Yes he is." : "Nope, he is not.";
        document.write("The "+ this.firstName +" "+ this.lastName +" ("+this.position+") - "+ this.contactNo +" is available:"+ accepting+" age of a founder is:"+ this.age);
    }
};
try{

const founder = Object.create(person);
founder.position = "Founder & Executive Chairman";
founder.showPersonDetails();

const coFounder=Object.create(founder);
coFounder.showPersonDetails();

const coFounder2=Object.create(coFounder);
founder.age = 23;
coFounder.showPersonDetails();
}
catch (err) {
    document.write(err);
  }

const roles = {
	founder: 'Kaushal',
	coFounder: 'Darshan',
	managingDirector: 'Harsh',
};


const keys = Object.keys(roles);
document.write("<br/>"+keys);


const values = Object.values(roles);
document.write("<br/>"+values);


Object.keys(roles).forEach(key => {
    let value = roles[key];
    document.write("<br/>"+key+":"+value);
});


const technicalRoles = {
	js: 'Kaushal',
	php: 'Darshan',
	mobileApps: 'Harsh',
};


const nestedRoles = Object.entries(technicalRoles);
document.write("<br/>"+nestedRoles);


nestedRoles.forEach(nestedRole => {
    let key = nestedRole[0];
    let value = nestedRole[1];

    document.write("<br/>"+key+":"+value);
});