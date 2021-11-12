import title from "./title.js"
import menu from "./menu.js"

const d = document
export default  function header(){
    const $header = d.createElement("header")
    $header.classList.add("header")
    $header.appendChild( title())
    $header.appendChild( menu())
    return $header
}