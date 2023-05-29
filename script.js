<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <main>
       <!-- ***********************  ABOUT / PROFILE  *********************** -->
    <header>
      <h1>Dori Kumbu</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>   
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <section id="about" class="container">
        <h2>About</h2>
        <div class="line dark"></div>
        <p>
          A computer engineering student, pursuing a career in game development
          in Montreal, Canada! My expertise is in Python, Java and C#, but I am
          always learning new languages and technologies. I am currently working
          on a game using the Unity engine and C#, check out my
          <a href="#portfolio">portfolio</a> for more details!
        </p>
    </section>
    
    <!-- ********************  PROJECTS / PORTFOLIO  ********************* -->
    <section id="portfolio" class="container" >
    
        <h2>Portfolio</h2>
        <div class="line"></div>
        <section class="project">
          <div>
            <h3>Book Management Management</h3>
            <p>
              An application that manages a collection of books. The application
              is implemented in Java, and uses circular linked lists to store the
              books. The application is menu driven, and the user can choose to
              add a book, remove a book, search for a book, display all books,
              display the number of books, save the books to a csv file, or quit
              the application.
            </p>
            <a href="https://github.com/d0rarara/Book-Management-System" target="_blank">
              <div>View project</div>
            </a>
          </div>
          <div>
            <img src="https://source.unsplash.com/lUaaKCUANVI" alt="a stack of books">
          </div>
        </section>

        <section class="project">
          <div>
            <h3>GUI Calculator</h3>
            <p>
              This is a simple calculator desktop app made with Java and Swing.
              Features include: addition, subtraction, multiplication, division, equals, and clear.
            </p>
            <a href="https://github.com/d0rarara/GUI-Calculator" target="_blank"><div>View project</div></a>
          </div>
          <div>
            <img src="https://github.com/d0rarara/GUI-Calculator/raw/main/screenshot.png" alt="simple calculator">
          </div>
        </section>

        <section class="project">
          <div>
            <h3>Nigh Terror Chronicles</h3>
            <p>
              Night Terror Chronicles is a game about a group of kids who go on a camping trip to the forest. They are attacked by a slasher, and they must survive the night.
              The game is being developed in Unity, and the code is written in C#. The game is currently in development, and is expected to be released in 2024.
              Night Terror Chronicles is being developed by Dori Kumbu and Tim Hunter.
            </p>
            <a href="https://github.com/d0rarara/night-terror-chronicles" target="_blank"><div>View project</div></a>
          </div>
          <div>
            <img src="images/16_bit_forest_03.png" alt="horror game forest">
          </div>
        </section>

        <section class="project">
          <div>
            <h3>Mars Invaders</h3>
            <p>
              A game inspired by Space Invaders, but with a twist. The player controls a spaceship, and must shoot down the aliens before they reach the bottom of the screen.
              The game was developed using Python and Pygame. 
            </p>
            <a href="https://github.com/d0rarara/MarsInvaders" target="_blank"><div>View project</div></a>
          </div>
          <div>
            <img src="images/MarsInvader.png" alt="aliens on mars">
          </div>
          </section>
      
    </section>

    <!-- *****************  CONTACT INFO / SOCIAL MEDIA  ***************** -->
    <section id="contact">
      <div class="container">
        <h2>Contact</h2>
        <form id="contact-form">
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Email" required name="email"/>
          <textarea placeholder="Message" required name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>

    <footer>
      <p>&copy; 2023 Dorcas Kumbu Buthidi</p>
    </footer>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('IcNGc0XU0fu6QABlE')
        })();
    </script>
    <script src="script.js"></script>
  </main>
  </body>
</html>
