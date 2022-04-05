import React from 'react';

function Nav() {

  return (
    <header>
      <div class="justify-content-center">
        <h2>
            <main>
                Samantha Chavez 
            </main>
        </h2>
        <nav>
        <ul class ="nav justify-content-end" >
          <li class= "nav-item" >
            <a class="nav-link" href="#about">
              About me
            </a>
          </li>
          <li class= "nav-item" className= 'mx-2'>
            <a class="nav-link" href="#Contact">
              Contact
            </a>
          </li>
          <li class= "nav-item" className= 'mx-2'>
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
        </ul>  
        </nav>
        </div>  
    </header>
  );
}

export default Nav;
