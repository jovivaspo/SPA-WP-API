export default async function ajax(props){
    const {url,cbsuccess} = props
    fetch(url)
    .then(res=>res.ok? res.json() : Promise.reject(res))
    .then(json=>cbsuccess(json))
    .catch(err =>{
        const html = `<h3 class="error">ERROR in domain ${localStorage.getItem("Domain")}: ${err}`
        const $main = document.querySelector("main")
        $main.insertAdjacentHTML("beforeend", html)
        const $loader = document.querySelector(".loader")
        $loader.classList.add("hidden")
    })

}