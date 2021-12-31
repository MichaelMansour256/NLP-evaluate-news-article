import { checkURL } from "./checkURL"
import { fetchData } from "./fetchData"
async function handleSubmit(event){
    event.preventDefault()
    const input = document.getElementById("article-url")

    
        if(checkURL(input.value)){
            fetchData({ url: input.value })
            
        }else{
            alert("enter valid url")
        }
    
}

export {handleSubmit}