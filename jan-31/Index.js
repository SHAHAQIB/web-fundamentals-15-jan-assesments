var obj = {
    "first_name": "shah",
    "last_name": "aaqib",
    "email": "shahaaqib9008@gmail.com",
    "website": "djdkuqbqhqu",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Name 1",
	    "marks": 15
	},
	{
	    "name": "Name 2",
	    "marks": 17
	},
	{
	    "name": "Name 3",
	    "marks": 09
	},
	{
	    "name": "Name 4",
	    "marks": 31
	},
	{
	    "name": "Name 5",
	    "marks": 0
	},
        {
	    "name": "Name 6",
	    "marks": 27
	},
    ],
};

pass = prompt("Enter passing marks");
pass = parseInt(pass)

len = obj.students.length

var passed_stu = [];

for (i=0; i<len; i++){
    new1 = obj.students[i];
    
    if(new1["marks"] >= pass){
        passed_stu.push(new1["name"]);
    }

}

console.log(passed_stu);