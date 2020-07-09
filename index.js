window.addEventListener('load',()=>{
    comics()
})

comics = () => {
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(res=>res.json())
    .then(res=>console.log(res))
}