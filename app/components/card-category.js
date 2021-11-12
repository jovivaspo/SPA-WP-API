const d = document

export default {
    component: function cardCategory(props) {
        const { id, name, count, } = props

        const $cardCategory = `
        <article class='card-category'>
             <h3>${name}</h3>
            <p>
                <a href=#/category/${id} data-id=${id} data-count=${count}>See posts</a>
                <span>Posts:${count}</date>
            </p>

        </article>`
        return $cardCategory

    },

    activity: function linkPost(e){

        if(!e.target.matches('.card-category a'))return false
      
        localStorage.setItem('CategoryId',e.target.dataset.id)
        
        localStorage.setItem('CountPosts',e.target.dataset.count)
    }

}