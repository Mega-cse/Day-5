//1.Create a resume data in json format 

let  resumeData = {
    "name": "Megavardhini",
    "email": "megavardhini1958@gmail.com",
    "phone": "7200810835",
    "address": "Nammaiya Maistry street,Chennai-81,Tamilnadu",
    "summary": "Passionate graduate with computer science engineering and seeking career oppourtunities",
    "education": 
        {
            "degree": "Bachelor of Engineering in Computer Science",
            "university": "Anna University",
            "college": "Jeppiaar Engineering College",
            "location": "Chennai,Tamilnadu",
            "cgpa":"8.36",
            "year": "2018 - 2022"
        },
    "skills": 
            {
                "Programming Languages": "Java",
                "Databases":"SQL"
                
            },
    "Internships": 
        {
            "Domain":"Java developing",
            "Company":"Shiash infotech Solution PVT LTD",
            "Year":"oct 2022-dec 2022"
        }
        
}
console.log(resumeData);
//2.For the above JSON iterate over all for loops(for,foreach,forin forof)

let resumeDatas= [{
    "name" : "Megavardhini", 
    "email": "megavardhini1958@gmail.com",
    "phone": "7200810835",
    "address": "Nammaiya Maistry street,Chennai-81,Tamilnadu",
    "summary": "Passionate graduate with computer science engineering and seeking career oppourtunities",
    "education": 
        {
            "degree": "Bachelor of Engineering in Computer Science",
            "university": "Anna University",
            "college": "Jeppiaar Engineering College",
            "location": "Chennai,Tamilnadu",
            "cgpa":"8.36",
            "year": "2018 - 2022"
        },
    "skills": 
            {
                "Programming Languages": "Java",
                "Databases":"SQL"
                
            },
    "internships": 
        {
            "Domain":"Java developing",
            "Company":"Shiash infotech Solution PVT LTD",
            "Year":"oct 2022-dec 2022"
        }
}];
//for loop
for(var i = 0; i < resumeDatas.length; i++) {
    var obj = resumeDatas[i];
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.address);
    console.log(obj.summary);
    console.log(obj.internships);

}//for Each
resumeDatas.forEach(function(obj) { console.log(obj.education);});
//for In
for (var key in resumeDatas) {
if (resumeDatas.hasOwnProperty(key)) {
  console.log(resumeDatas[key].skills);
}
}
//for Of
let text = " ";
for (let x of resumeDatas[key].name) {
 text += x; 
}
 console.log(text);


