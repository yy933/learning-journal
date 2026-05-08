import "./style.css";
import { postsData } from "./data/postsData.js";
import { renderNavbar } from "./components/navbar";
import { renderFooter } from "./components/footer";
import { renderPosts, getOptimizedImage } from "./components/postRenderer";

const profileImage = document.querySelector(".profile-section img");
profileImage.src = getOptimizedImage(profileImage.src);

const postsGrid = document.querySelector(".posts-grid");

renderNavbar();
renderFooter();
renderPosts(postsData, postsGrid, 5);
