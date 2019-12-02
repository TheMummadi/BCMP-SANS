var tasklist = [
    {
        taskname: "mapjs",
        status: "completed"
    },
    {
        taskname: "filterjs",
        status: "completed"
    },
    {
        taskname: "js",
        status:  "not completed"
    },
    {
        taskname: "bootstrap",
        status:  "not completed"
    },
    {
        taskname: "number system",
        status: "completed"
    },
    {
        taskname: "mohito",
        status: "completed"
    },
]
const newARR = tasklist.filter(obj =>{
    return obj.status === "not completed";
})

console.log(newARR)