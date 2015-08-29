/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Phillip Creglow");

 var awesomeThoughts = "I am Phillip and I am AWESOME!";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 $("#main").append(funThoughts);

 var email = "phillipcreglow@msn.com";

 var newEmail = email.replace("msn", "gmail");
 console.log(email);
 console.log(newEmail);

 var formattedName = HTMLheaderName.replace("%data%", "Phillip Creglow");

 var role = "Junior Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
