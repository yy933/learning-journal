import "./style.css";
import { postsData } from "./data/postsData.js";
import { renderNavbar } from "./components/navbar";
import { renderFooter } from "./components/footer";
import { renderPosts } from "./components/postRenderer";

const postsGrid = document.querySelector(".posts-grid")



renderNavbar()
renderFooter()
renderPosts(postsData, postsGrid, 5)