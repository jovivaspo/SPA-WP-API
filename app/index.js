import app from "./app.js"
import botonMenu from "./components/boton-menu.js"
import cardCategory from "./components/card-category.js"
import cardPosts from "./components/card-posts.js"
import formMain from "./components/form-main.js"
import formSearch from "./components/form-search.js"
import API_WP from "./helpers/api-wp.js"
import scrollInfinite from "./helpers/scroll.js"



const d = document
const w = window


d.addEventListener("DOMContentLoaded", e=>{
   app()

})

w.addEventListener("hashchange",  e=>{
  app()
  API_WP.page = 1
  
})

d.addEventListener("click", (e)=>{
  botonMenu.activity(e)
  cardPosts.activity(e)
  cardCategory.activity(e)
})

d.addEventListener("submit",  (e) => {
  formMain.activity(e)
  formSearch.activity(e)
})

w.addEventListener('scroll',async e=>{
  if(location.hash ==='#/posts' || location.hash.includes('#/category'))  await scrollInfinite()
  else return false
})



