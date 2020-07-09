asyncFetchComic=async(latest)=>{
    let response =[]
    for (let i=0;i<10;i++){
        try{
            
            response[i]=await fetch(`https://xkcd.now.sh/?comic=${latest-i}`)
            .then((res)=>res.json())
            let result = response[i]
            let date = `${result['day']}/${result['month']}/${result['year']}`
            add_cards(result['img'],result['alt'],result['title'],date)
        }
        catch(err){console.log(err)}
    }
}

/*fetchComic=(latest)=>{
    let response =[]
    for (let i=0;i<10;i++){
        response[i]= fetch(`https://xkcd.now.sh/?comic=${latest-i}`)
        .then((res)=>res.json())
    }
    return Promise.all(response)
}*/

add_cards=(img_link,img_alt,got_title,got_date)=>{
    
    let main_box = document.getElementById('main_box')

    let column = document.createElement('div')
    column.setAttribute('class','col-sm-12 col-md-6 col-xl-4')

    let card = document.createElement('div')
    card.setAttribute('class','card m-3')
    card.style.width = '18rem'

    let image = document.createElement('img')
    image.setAttribute('src',img_link)
    image.setAttribute('alt',img_alt)

    let card_body = document.createElement('div')
    card_body.setAttribute('class','card-body') 

    let date = document.createElement('p')
    date.textContent = got_date

    let title = document.createElement('h5')
    title.textContent = got_title

    card_body.append(date)
    card_body.append(title)

    card.append(image)
    card.append(card_body)

    column.append(card)
    main_box.append(column)
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