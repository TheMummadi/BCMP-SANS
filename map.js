const people = [
    {
        f_name :"santhosh",
        l_name : "mummadi",
        age :  26
    },
    {
        f_name :"sam",
        l_name : "Go",
        age :  22
    },
    {
        f_name :"Jivan",
        l_name : "ram",
        age :  24
    },
    {
        f_name :"deepak",
        l_name : "mehta",
        age :  27
    },
    {
        f_name :"Reddy",
        l_name : "mohan",
        age :  30
    }
]


people.map((e)=>{
    if(e.age > 25){
    people['l_name'] = "THS"
    console.log(e.l_name)
    //return(`${e.l_name }`)
    }
})