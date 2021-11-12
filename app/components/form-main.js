

import ajax from "../helpers/ajax.js"
import API_WP from "../helpers/api-wp.js"

const d = document

export default {
    component: function form() {
        const $form = d.createElement("form")
        $form.classList.add("form-main")
        $form.innerHTML = `
        <input type="text" class="form-main-input" placeholder="Input a domain with WP">
        <button class="form-main-btn">Submit</button>
        `
        return $form
    },

    activity: function submitForm(e) {
        if (!e.target.matches('.form-main')) return false
        e.preventDefault()
        const $inputFormMain = d.querySelector(".form-main-input")

        if ($inputFormMain.value === ""){
            alert("Input some Domain")
            return false
        }

       localStorage.setItem('Domain',$inputFormMain.value.toLowerCase())
       
       localStorage.removeItem('Search')
       localStorage.removeItem('PostId')
       localStorage.removeItem('CategoryId')
       localStorage.removeItem('CountPosts')


       
       location.reload()


    }

}

       
            

