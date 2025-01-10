/****************************/
/* //1// */
var myJSON={
    "name":"rahaf",
    "age":"21",
    "email":"rahafaqrabawi2003@gmail.com",
}

var myJavaScriptObject = JSON.stringify(myJSON);
console.log(myJavaScriptObject)

// var parsedPerson = JSON.parse(myJSON);
// console.log(parsedPerson)

/****************************/
/* //2// */
var myJSON={
    "name":"rahaf",
    "age":"21",
    "email":"rahafaqrabawi2003@gmail.com",
    "major": "E-Marketing",
}

function JavaScriptObject(JSONobject){
 return Object.keys(JSONobject).length
}

var length= JavaScriptObject(myJSON);
console.log(length)

/****************************/
/* //3// */
var myJSONArray=[
        {
         "author":"yusuf sibai",
         "bookTitle":"land of hypocrisy",
         "publicationDate":"1962",
        },
        {
         "author":"mustafa lutfi al-manfaluti",
         "bookTitle":"magdalene",
         "publicationDate":"1912",
        },
        {  
         "author":"ahmad ",
         "bookTitle":"crazy laila",
         "publicationDate":"1931",
        },    
    ]
    console.log(myJSONArray)

/****************************/
/* //4// */
// var student=[
//     {
//       "name":"hamza",
//       "grade":"89",
//     },
//     {
//        "name":"leen",
//        "grade":"60",
//     },
//     {
//         "name":"noor",
//         "grade":"50",
//     },
//     {
//         "name":"ahmad",
//         "grade":"66",
//     }
// ]

//  var total = student.reduce(function(sum, obj){
//  return sum +parseInt(obj.grade)
//  },0)

// console.log(total)

/****************************/
/* //5// */
var stusents=[
    {
      "name":"hamza",
      "grade":"89",
    },
    {
       "name":"leen",
       "grade":"60",
    },
    {
        "name":"noor",
        "grade":"50",
    },
    {
        "name":"ahmad",
        "grade":"66",
    }
]

function myproperty(jsonobject){
    return jsonobject
    .sort(function(a, b){
        return a.grade-b.grade;
    })
    .map(function(stusents){
        return stusents.grade;
    });
}
var sortedstusents = myproperty(stusents)
console.log(sortedstusents)


/****************************/
/* //6// */
var city=[
    {
     "name":"Cairo",
     "population":"10331624",
     "country":"Egypt",
    },
    {
     "name":"hummus",
     "population":"2087000",
     "country":"syria",
    },
    {
     "name":"paris",
     "population":"12271794",
     "country":"france",
    },
    {
     "name":"aqaba",
     "population":"95048",
     "country":"jordan",
    },
]
function mycity(JSONobject){
    return JSONobject
    .sort(function(a, b){
        return b.population-a.population;
    })
    .map(function(city){
        return city.name;
    });
}
var sortedcity = mycity(city)
console.log(sortedcity)

/****************************/
/* //7// */

  
/****************************/
/* //8// */
var apiUrl = `https://api.github.com/users/
Rahaf-Arabawi/repos`;
var fetchData = fetch(apiUrl)
fetchData.then(response => {
    if (!response.ok) {
      throw ('Failed to fetch data');
    }
   return response.json();
  })
  .then(data => {
   var repoName = data.map(repo => repo.name);
    console.log(repoName);
  });
  