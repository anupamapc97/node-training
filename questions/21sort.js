Library=[
    {author:"bill gates",title:"The Road Ahead",libraryID:1254},
{author:"Steve Jobs",title:"Walter Issacson",libraryID:4264},
{author:"Suzanne Collins",title:"Mockingjay:The Final Book of the Hunger Games",libraryID:3245},
]
// libraray.forEach((x)=>{
//     console.log(x.author,":",x.title)
// })
         var x=Library.filter(element=>element.title)
        // console.log(x)
        x.map(x=>{
            console.log(x)
        })