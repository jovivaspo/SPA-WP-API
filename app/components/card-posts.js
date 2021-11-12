

const d = document

export default {
    component: function cardPost(props){
        const{title,excerpt,date,id,slug,featured_media_src_url} = props
    
        let dateOk = new Date(date)
        dateOk = dateOk.toLocaleDateString()
        const card = `
        <article class="card-post" >
            <h3>${title.rendered}</h3>
            <img src=${featured_media_src_url? featured_media_src_url : ""}>
            <div>
                <a href=#/post/${slug} data-id=${id}>Read post</a>
                <date>${dateOk}</date>
            </div>
            <p>${excerpt.rendered}</p>
    
        </article>
        
        `
    
        return card
    },

    activity: function linkPost(e){

        if(!e.target.matches('.card-post a'))return false
      
        localStorage.setItem('PostId',e.target.dataset.id)
    
    }

}


  

