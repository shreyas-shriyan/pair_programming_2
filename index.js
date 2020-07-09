asyncFetchComic=async(latest)=>{
    let response =[]
    for (let i=0;i<10;i++){
        try{
            if(i==5){
                throw new Error("test")
            }
            response[i]=await fetch(`https://xkcd.now.sh/?comic=${latest-i}`)
            .then((res)=>res.json())
            console.log(response[i])
        }
        catch(err){console.log(err)}
    }
}

fetchComic=(latest)=>{
    let response =[]
    for (let i=0;i<10;i++){
        response[i]= fetch(`https://xkcd.now.sh/?comic=${latest-i}`)
        .then((res)=>res.json())
    }
    return Promise.all(response)
}

comics = () => {
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(res=>res.json())
    .then(res=>{
        // fetchComic(res.num)
        // .then(res=>console.log(res))
        asyncFetchComic(res.num)
    })
}



window.addEventListener('load',()=>{
    comics()
})