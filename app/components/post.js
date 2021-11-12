const d = document

export default function addPost(props){
    const{title,content,excerpt,link,date,featured_media_src_url} = props

    let dateOk = new Date (date)
    dateOk = dateOk.toLocaleDateString()


    return `<div class="post">
     
    <h1>${title.rendered}</h1>
    <img src=${featured_media_src_url?featured_media_src_url : "" }>
    <div class="meta">
    <p><date>${dateOk}</date><a href=${link}>Link</a>
    <p class="excerpt">${excerpt.rendered}</p>
    </div>
    <articule class="content">${content.rendered}</articule>

    </div>
    
   
    `
}