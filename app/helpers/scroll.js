import ajax from "./ajax.js";
import API_WP from "./api-wp.js"
import cardPost from "../components/card-posts.js";



const d = document
const w = window


export default async function scrollInfinite() {

    let { hash } = location
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    let domain = localStorage.getItem('Domain')
    let url
    //console.log(scrollTop,clientHeight,scrollHeight)

    let count
    let maxPage

    if (hash.includes('#/category')) {
        count = localStorage.getItem("CountPosts")
        maxPage = Math.ceil(count / 9)
        /*console.log('Post Totales de la categoría:', count)
        console.log('pagina máxima',maxPage)
        console.log('pagina actual', API_WP.page)*/

    }

    if (scrollTop + clientHeight >= scrollHeight - 2) {
        if (hash.includes('#/category') && (API_WP.page < maxPage)) {
            API_WP.page++
            url = `https://${domain}${API_WP.POSTS}&categories=${localStorage.getItem("CategoryId")}&page=${API_WP.page}`
        } else if (hash === '#/posts') {
            API_WP.page++
            url = `https://${domain}${API_WP.POSTS}&page=${API_WP.page}`
        } else return false
        d.querySelector('.loader').classList.remove('hidden')
        let html = ""
        await ajax({
            url,
            cbsuccess: (posts) => {
                //console.log(posts)

                posts.forEach(post => {
                    html += cardPost.component(post)
                })

                const $grid = d.querySelector('.grid-cards')
                d.querySelector('.loader').classList.add('hidden')
                $grid.insertAdjacentHTML('beforeend', html)
            }
        })


    }

}





