import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html", "url(./assets/bg1.svg)")
router.add("/universe", "/pages/universe.html", "url(./assets/bg2.svg)")
router.add("/exploration", "/pages/exploration.html", "url(./assets/bg3.svg)")
router.add(404, "/pages/404.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()






