import header from "./components/header.js"
import main from "./components/main.js"
import loader from "./components/loader.js"
import botonMenu from "./components/boton-menu.js"
import router from "./components/router.js"
import scroll from "./helpers/scroll.js"


const d=document

export default async function app(){
    const $root = d.querySelector(".root")
    $root.innerHTML=null

  
    
    $root.appendChild( header())
    $root.appendChild( main())
    $root.appendChild( loader())
    $root.appendChild( botonMenu.component())

    await router()
   


}