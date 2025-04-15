// Scroll top btn
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);


// titre header effet
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  const typedItems = selectTyped.getAttribute('data-typed-items');
  if (typedItems) {
    const typedStrings = typedItems.split(',').map(item => item.trim());
    let index = 0; // Index actuel de la chaîne
    let charIndex = 0; // Index du caractère actuel
    let isDeleting = false; // Mode suppression
    let currentString = ''; // Texte en cours

    const typeEffect = () => {
      if (!isDeleting) {
        currentString += typedStrings[index].charAt(charIndex);
        charIndex++;
      } else {
        currentString = currentString.slice(0, -1);
        charIndex--;
      }

      selectTyped.textContent = currentString;

      if (!isDeleting && charIndex === typedStrings[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause avant suppression
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % typedStrings.length; // Passer à la chaîne suivante
        setTimeout(typeEffect, 500); // Pause avant d'ajouter la prochaine chaîne
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Vitesse de suppression ou d'ajout
      }
    };

    typeEffect(); // Démarrer l'effet de frappe
  }
}

// animation du body lorsque le souris scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const handleScroll = () => {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        element.classList.add('animated');
      } else if (!element.classList.contains('once')) {
        element.classList.remove('animated');
      }
    });
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll);
}

window.addEventListener('load', initScrollAnimations);



// scroll vers une section lorsqu'on clique sur le navmenu
 /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
 window.addEventListener('load', function(e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});

/**
 * Navmenu Scrollspy
 */
let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
      
      document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.section.activeClass');
      
        // Utiliser une boucle for pour supprimer la classe activeClass
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('activeClass');
        }
      
        // Ajouter la classe activeClass à une section spécifique
        const section = document.querySelector('.section'); // Remplacez par votre section cible
        section.classList.add('activeClass');
      });
    } else {
      navmenulink.classList.remove('active');
      section.classList.remove('activeClass');
    }
  })
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

//-------------------menu toggle-----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navMenu = document.querySelector(".navmenu");
  const menuLinks = document.querySelectorAll(".navmenu a");
  const retour = document.querySelector(".navmenu p")


// Afficher ou masquer le menu lorsque l'utilisateur clique sur "Menu"
  toggleMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    if (navMenu.classList.contains("visible")) {
      navMenu.classList.remove("visible");
      navMenu.classList.add("hidden"); // Ajoute la classe "hidden" pour l'animation de disparition
    } else {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("visible"); // Ajoute la classe "visible" pour l'animation d'apparition
    }
  });

// Masquer le menu lorsque l'utilisateur clique sur un lien
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("visible");
      navMenu.classList.add("hidden"); // Cache le menu après avoir sélectionné une option
    });
  });

// Masquer le menu lorsque l'utilisateur clique en dehors de celui-ci
  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
      navMenu.classList.remove("visible");
      navMenu.classList.add("hidden"); // Cache le menu si l'utilisateur clique en dehors
    }
  });

  if(retour){
    retour.addEventListener("click", function(){
      navMenu.classList.remove("visible");
      navMenu.classList.add("hidden"); // Cache le menu si l'utilisateur clique en dehors
    })
  };
});

//Masque me contenu lorsque l'utilisateur clique sur retour

