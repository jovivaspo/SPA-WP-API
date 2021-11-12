const d = document

export default function loader(){
    const $loader = d.createElement("img")
    $loader.classList.add("loader")
    $loader.classList.add("hidden")
    $loader.src="app/assets/oval.svg"
    return $loader
}