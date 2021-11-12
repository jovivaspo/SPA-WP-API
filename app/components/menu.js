const d = document

export default  function menu(){
   const $nav = document.createElement("nav")
    $nav.classList.add("menu")
    $nav.classList.add("menu-inactive")

    $nav.innerHTML = `<ul>
    <li><a href="#/"><i class="fas fa-home"></i> Home</a></li>
    <li><a href="#/posts"><i class="fas fa-bookmark"></i> Posts</a></li>
    <li><a href="#/search"><i class="fas fa-search"></i> Search</a></li>
    <li><a href="#/categories"><i class="fas fa-book-open"></i> Categories</a></li>
   
    </ul>
    `

    return $nav
}