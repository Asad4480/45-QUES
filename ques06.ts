/*
QUESTION NO 06:
Stripping Names: Store a person’s name, and include some whitespace characters 
at the beginning and end of the name. Make sure you use each character 
combination, "\t" and "\n", at least once. Print the name once, so the
whitespace around the name is displayed. Then print the name after striping 
the white spaces.
*/

// ANSWER NO 06:

 let firstletter = "R"
 let secondletter = "A"
 let thirdletter  = "Z"
 let fourthletter = "A"
 let fullname = (`${firstletter}\n\t${secondletter}\n\t\t${thirdletter}\n\t\t\t${fourthletter}`)
 console.log(fullname)

 export{}