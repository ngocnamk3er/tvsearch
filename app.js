const x=document.querySelector('#searchForm')
x.addEventListener('submit',async(e)=>{
    var element = document.getElementsByTagName("img"), index;

    for (index = element.length - 1; index >= 0; index--) {
    element[index].remove()
    }   
    e.preventDefault();
    const searchTerm=x.elements.query.value
    const config = {params:{q: searchTerm}}
    const res=await axios.get(` https://api.tvmaze.com/search/shows`,config)
    makeImg(res.data)
})
const makeImg=(shows)=>{
    for(let x of shows){
        if(x.show.image){
            const img = document.createElement('IMG')
            img.src=x.show.image.medium;
            document.querySelector('.container').appendChild(img)
        }
    }
}
