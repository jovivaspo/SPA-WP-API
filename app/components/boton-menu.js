const d = document;

export default {
    component: function botonMenu() {

        const $btnMenu = d.createElement("div")
        $btnMenu.classList.add("btn-menu")
        $btnMenu.innerHTML = `<i class="fas fa-bars"></i>`

        return $btnMenu

    },
    activity: function btnMovil(e) {
        if (e.target.matches('.btn-menu') || e.target.matches('.btn-menu i') || e.target.matches('.menu ul li a')){
            const $menu = d.querySelector(".menu")
            $menu.classList.contains("menu-inactive") ? $menu.classList.remove("menu-inactive") : $menu.classList.add("menu-inactive")
        }else return false

        
    }
}