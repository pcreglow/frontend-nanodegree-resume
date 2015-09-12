/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Phillip Creglow");

/*
var awesomeThoughts = "I am Phillip and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);
*/

/*var email = "phillipcreglow@msn.com";

var newEmail = email.replace("msn", "gmail");
console.log(email);
console.log(newEmail);
*/

var formattedName = HTMLheaderName.replace("%data%", "Phillip Creglow");

var role = "Junior Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Phillip",
  "role": "Junior Web Developer/Strategic Political Consultant",
  "contacts": {
    "email": "phillipcreglow@msn.com",
    "phone": "703-801-8509",
    "twitter": "@wahoopcc",
    "github": "pcreglow",
    "location": "Orlando, FL"
  },
  "photo": "images/fry.jpg"
};

//$("#main").append(bio.role);

var work = {
  "jobs": [{
    "position": "Junior Web Developer/Strategic Political Consultant",
    "employer": "TargetSmart Communications",
    "years": "September 2015 - Present",
    "city": "Orlando, FL"
  }, {
    "position": "Regional Political Director",
    "employer": "American Medical Association",
    "years": "April 2011 - January 2014",
    "city": "Washington, DC"
  }, {
    "position": "Campaign Services/Political Representative",
    "employer": "National Association of REALTORS",
    "years": "April 2007 - April 2011",
    "city": "Washington, DC"
  }, {
    "position": "Government Affairs Director",
    "employer": "Kentucky Associaiton of REALTORS",
    "years": "January 2006 - April 2007",
    "city": "Lexington, KY"
  }, {
    "position": "Public Policy Communications/Field Director",
    "employer": "Michigan Association of REALTORS",
    "years": "February 2004 - January 2006",
    "city": "Lansing, MI"
  }]
};

//$("#main").append(work["position"]);

var education = {
  "schools": [{
    "name": "Western Michigan University",
    "city": "Kalamazoo, MI",
    "degree": "BA",
    "major": "Public Administration",
    "graduation": "December 2003"
  }, {
    "name": "The Iron Yard",
    "city": "Orlando, FL",
    "degree": "Certificate of Completion",
    "major": "Front End Engineering",
    "graduation": "August 2015"
  }]
};

//$("#main").append(education.school);
