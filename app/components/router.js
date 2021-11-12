import API_WP from '../helpers/api-wp.js'
import ajax from '../helpers/ajax.js'
import formMain from './form-main.js'
import cardPost from './card-posts.js'
import addPost from './post.js'
import formSearch from './form-search.js'
import cardCategory from './card-category.js'


const d = document

export default async function router() {
    let { hash } = location
    console.log(hash)

    const $loader = d.querySelector(".loader")
    const $main = d.querySelector('main')
    if ($main.innerHTML !== "") $main.innerHTML = ""


    if (!hash || hash === '#/' || hash === "") {
        $main.appendChild(formMain.component())
        const domain = localStorage.getItem("Domain")
        if (!domain) return false
        $loader.classList.remove("hidden")
        if (d.querySelector(".success")) $main.removeChild(d.querySelector(".success"))
        if (d.querySelector(".error")) $main.removeChild(d.querySelector(".error"))

        await ajax({
            url: `https://${domain}${API_WP.API_WP}`,
            cbsuccess: (json) => {

                const $subtitle = d.createElement("h2")
                $subtitle.classList.add('subtitle')
                $subtitle.textContent = domain
                $main.appendChild($subtitle)

                const html = `<h3 class="success">Domain exist, you can go to: <a href="#/posts">Last posts</a></h3>`
                $loader.classList.add("hidden")
                $main.insertAdjacentHTML("beforeend", html)
            }
        })

    } else if (hash === '#/posts') {
        const domain = localStorage.getItem('Domain')
        $loader.classList.remove('hidden')
        await ajax({
            url: `https://${domain}${API_WP.POSTS}`,
            cbsuccess: (posts) => {
                //console.log(posts)
                const $grid = d.createElement('div')
                $grid.classList.add('grid-cards')
                let html = ''
                posts.forEach(post => {
                    html += cardPost.component(post)
                })
                $grid.innerHTML = html
                $main.insertAdjacentElement('beforeend', $grid)
                $loader.classList.add('hidden')
            }

        })
    } else if (hash === '#/search') {
        $main.appendChild(formSearch.component())

        const search = localStorage.getItem("Search")
        if (!search) return false
        $loader.classList.remove('hidden')
        d.querySelector('.form-search-input').value = search
        await ajax({
            url: `https://${localStorage.getItem('Domain')}${API_WP.SEARCH}${search}`,
            cbsuccess: (posts) => {
                //console.log(posts)
                if (posts.length === 0) {
                    const html = `<h3 class="error">ERROR in your research ${localStorage.getItem("Domain")}: ${err}`
                    const $main = document.querySelector("main")
                    $main.insertAdjacentHTML("beforeend", html)
                    $loader.classList.add("hidden")
                }
                if (d.querySelector('.grid-cards')) {
                    const $gridCards = d.querySelector(".grid-cards")
                    $gridCards.parentElement.removeChild($gridCards)
                }
                const $grid = d.createElement('div')
                $grid.classList.add('grid-cards')
                let html = ''
                posts.forEach(post => {
                    html += cardPost.component(post._embedded.self[0])
                })
                $grid.innerHTML = html
                $main.insertAdjacentElement('beforeend', $grid)
                $loader.classList.add('hidden')
            }
        })


    } else if(hash === '#/categories'){

        const domain = localStorage.getItem('Domain')
        $loader.classList.remove('hidden')
        await ajax({
            url: `https://${domain}${API_WP.CATEGORIES}`,
            cbsuccess: (categories) => {
                //console.log(categories)
                let html=""
                categories.forEach(category=>{
                    if(category.count > 0) html+=cardCategory.component(category)
                    else return
                })

                if (d.querySelector('.grid-cards')) {
                    const $gridCards = d.querySelector(".grid-cards")
                    $gridCards.parentElement.removeChild($gridCards)
                }
                const $grid = d.createElement('div')
                $grid.classList.add('grid-cards')
                $grid.innerHTML = html
                $main.insertAdjacentElement('beforeend', $grid)
                $loader.classList.add('hidden')

            }

        })

    }else if(hash.includes("#/category")){
        const domain = localStorage.getItem('Domain')
        $loader.classList.remove('hidden')
        await ajax({
            url: `https://${domain}${API_WP.POSTS}&categories=${localStorage.getItem("CategoryId")}`,
            cbsuccess:(posts)=>{
                //console.log(posts)
                const $grid = d.createElement('div')
                $grid.classList.add('grid-cards')
                let html = ''
                posts.forEach(post => {
                    html += cardPost.component(post)
                })
                $grid.innerHTML = html
                $main.insertAdjacentElement('beforeend', $grid)
                $loader.classList.add('hidden')
            }
          
        })
    }
    else {
        const domain = localStorage.getItem('Domain')
        $loader.classList.remove('hidden')
        await ajax({
            url: `https://${domain}${API_WP.POST}/${localStorage.getItem('PostId')}`,
            cbsuccess: (post) => {
                console.log(post)
                $main.innerHTML = addPost(post)
                $loader.classList.add('hidden')
            }
        })
    }
}

