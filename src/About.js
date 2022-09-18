import React from 'react'
import './About.css'
import aboutImg from "./img/prof7.jpg";
function About() 
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });

function About() {
  return (
    <div className='about component_space'>
        <h1>its working</h1>
    </div>
  )
}

export default About