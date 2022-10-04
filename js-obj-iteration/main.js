

let objects=[
    {
        name:"diamond",
        age:"23",
        sports:"cricket"
    },
    {
        name:"selvi",
        age:"20",
        sports:"vollyball"
    }
];
objects.forEach(durai =>{
    for (key in durai){
        console.log(durai[key]);
    }
})