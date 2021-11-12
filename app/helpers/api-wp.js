
const API_WP='/wp-json/wp/v2'
const PER_PAGE=9
const NUM_CATEGORIES=50;
const POSTS=`${API_WP}/posts?_embed&per_page=${PER_PAGE}`
const POST=`${API_WP}/posts`
const CATEGORIES=`${API_WP}/categories?_embed&per_page=${NUM_CATEGORIES}`
const SEARCH=`${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`
let page = 1

export default {
    API_WP,
    POSTS,
    POST,
    CATEGORIES, 
    SEARCH,
    page
}