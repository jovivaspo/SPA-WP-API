const d =  document

export default  function title(){
    const $title = d.createElement("h1")
    $title.textContent = "SPA WP-API"
    return $title
}