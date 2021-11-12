import ajax from "../helpers/ajax.js"
import API_WP from "../helpers/api-wp.js"
import cardPost from "./card-posts.js"
const d = document


export default {
    component: function formSearch() {
        const $formSearch = d.createElement("form")
        $formSearch.classList.add('form-search')
        $formSearch.innerHTML = `
        <input class="form-search-input" type="text" placeholder="Search a post">
        <button class="form-search-btn">Search</button>
        `
        return $formSearch
    },
    activity: function submitSearch(e) {
       
        if (!e.target.matches('.form-search')) return false
            e.preventDefault()
            const $formSearch = d.querySelector('.form-search-input')
            if ($formSearch.value === ""){
                alert("Search something")
                return false
            }
            localStorage.setItem('Search', $formSearch.value.toLowerCase())
            location.reload()
        
    }

}

