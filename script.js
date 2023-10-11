const menu = document.querySelector('.menu');
const closee = document.querySelector('.cancel');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  closee.style.display = 'block';
});
closee.addEventListener('click', () => {
  navLinks.style.display = 'none';
  closee.style.display = 'none';
});

document.addEventListener('click', (e) => {
  const target1 = e.target.closest('#work');
  const target2 = e.target.closest('#about');
  const target3 = e.target.closest('#contact');
  if (target1 || target2 || target3) {
    navLinks.style.display = 'none';
  }
});

const works = document.querySelector('.works');

const overlay = document.querySelector('.overlay');

const projects = [
  {
    image_mobile: './images/marcelo-leal-6pcGTJDuf6M-unsplash.jpg',
    image_desktop: './images/marcelo-leal-6pcGTJDuf6M-unsplash.jpg',
    name: ' Doctor&apos;s Appointment',
    description:
      ' A convenient online platform for scheduling appointments with doctors.',
    details:
      'Built by following a website design on Behance, this website streamlines the patient-doctor appointment process. Built using React & Ruby on Rails.',
    techs: ['react', 'ruby on rails', 'remote collaboration'],
    subtitles: ['MICROVERSE', 'Full-Stack', 2023],
    live: 'https://doctor-appointment-3o4a.onrender.com/auth',
    source: 'https://github.com/abel-tefera/doctor-appointment-front-end.git',
  },
  {
    image_mobile: './images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg',
    image_desktop: './images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg',
    name: 'ToDo List',
    description: 'A simple to-do list app with CRUD operations',
    techs: ['html', 'css', 'javascript', 'webpack'],
    subtitles: ['MICROVERSE', 'Frontend', 2023],
    details:
      " Todo list project is a simple project that will enable users to manage their to-do's. Users can add, edit and delete. Built with JavaScript, HTML, CSS, Webpack",

    live: 'https://ragangithub.github.io/To-Do-list/',
    source: 'https://github.com/ragangithub/To-Do-list',
  },
  {
    image_mobile: './images/kelly-sikkema-3-Tc_5LROrM-unsplash.jpg',
    image_desktop: './images/kelly-sikkema-3-Tc_5LROrM-unsplash.jpg',
    name: 'Budget',
    description:
      ' Experience the sophistication of our Ruby on Rails-powered expense tracking application.',
    details:
      'This website was built based on a design from Behance, allowing users to track their expenses',
    techs: ['Ruby', 'Ruby on Rails', 'CSS'],
    subtitles: ['MICROVERSE', 'Full-Stack', 2023],
    live: 'https://budget-kv71.onrender.com',
    source: 'https://github.com/ragangithub/Budget_app',
  },
  {
    image_mobile: './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
    image_desktop: './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
    name: 'Space Travellers Hub',
    description:
      'A rocket and mission booking app built using React & Redux toolkit.',
    details:
      '  Space Travellers Hub app lets users book rockets and join missions to Mars. Built using React & Redux.',
    techs: ['React', 'Redux', 'Redux-toolkit'],
    subtitles: ['MICROVERSE', 'Frontend', 2023],
    live: 'https://ragangithub.github.io/To-Do-list/',
    source: 'https://github.com/ragangithub/space-travelers-hub',
  },
];

projects.forEach((project, index) => {
  const divv = document.createElement('div');

  divv.className = 'tonic';
  divv.id = index;
  if (index === 1 || index === 3) {
    divv.classList.add('reverse');
  }
  divv.innerHTML = `
  <div class="mobile">
    <img src=${project.image_mobile} alt="" />
  </div>
   <div class="desktop"><img src=${project.image_desktop} alt="" /></div>
  <div class="right">
    <h2>${project.name}</h2>
    <div class="back">
      <div>${project.subtitles[0]}</div>
      <div class="circle"></div>
      <div>${project.subtitles[1]}</div>
      <div class="circle"></div>
      <div>${project.subtitles[2]}</div>
    </div>
    <p>
    ${project.description}
    </p>
    <ul class='techs'>
   ${project.techs.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <div id='see-project'><a href="">See Project</a></div>
  </div>
`;

  works.appendChild(divv);
});

const boddy = document.querySelector('body');

document.addEventListener('click', (e) => {
  const target = e.target.closest('#see-project');

  if (target) {
    e.preventDefault();

    const idd = target.parentNode.parentNode.id;

    const popup = document.createElement('div');
    popup.className = 'pop';
    popup.classList.add('tonic');
    popup.innerHTML = `

<div class="right mobile">
  <div class="close" >
   <h2>${projects[idd].name}</h2>
   <i id="close_pop" class="fa-solid fa-x"></i>
  
   
  </div>
  <div class="back">
    <div>${projects[idd].subtitles[0]}</div>
    <div class="circle"></div>
    <div>${projects[idd].subtitles[1]}</div>
    <div class="circle"></div>
    <div>${projects[idd].subtitles[2]}</div>
  </div>
  <div class="mobile"><img src=${projects[idd].image_mobile} alt="" /></div>
  <p>
  ${projects[idd].details}
  </p>
  <ul class='techs'>
  ${projects[idd].techs.map((tech) => `<li>${tech}</li>`).join('')}
  </ul>
  <div class="see">
   <a target="_blank" class='host' href=${projects[idd].live}>
    <span>see live</span>
    <img src="./images/live.svg"/>
   </a>
   <a target="_blank" class='git'href=${projects[idd].source}>
    <span>see source</span>
    <i class="fa fa-github" aria-hidden="true"></i>
   </a>

  </div>
  
</div>



<div class="right desktop">
  <div class="close" >
   <h2>${projects[idd].name}</h2>
   <i id="close_pop" class="fa-solid fa-x"></i>
   
  </div>
  <div class="back">
  <div>${projects[idd].subtitles[0]}</div>
  <div class="circle"></div>
  <div>${projects[idd].subtitles[1]}</div>
  <div class="circle"></div>
  <div>${projects[idd].subtitles[2]}</div>
</div>
  <div class="desktop-image"><img src=${
  projects[idd].image_desktop
} alt="" /></div>


  <div class=details>
   
  <div class='left'>
  <p>
  ${projects[idd].details}
  </p>
  </div>
  <div class='right'>
  <ul class='techs'>
${projects[idd].techs.map((tech) => `<li>${tech}</li>`).join('')}
  </ul>
  <div class="see">
  <a class='host' href=${projects[idd].live} target="_blank" >
    <span>see live</span>
    <img src="./images/live.svg"/>
   </a>
   <a class='git' href=${projects[idd].source} target="_blank" >
    <span>see source</span>
    <i class="fa fa-github" aria-hidden="true"></i>
   </a>
    </div>
   </div>
  </div>
</div>
`;

    boddy.style.position = 'relative';
    popup.classList.add('show');
    popup.classList.add('tonic');
    popup.classList.add('pop');
    popup.classList.remove('hide');
    overlay.classList.remove('hidden');
    boddy.append(popup);
  }
});

// about
const arrowRightOnes = document.querySelectorAll('.arrow1');
const arrowDownOnes = document.querySelectorAll('.arrow2');
const technologies = document.querySelectorAll('.technologies');
technologies.forEach((tech, index) => {
  if (index === 0) {
    tech.style.display = 'flex';
    arrowDownOnes[index].classList.remove('hidden');
    arrowRightOnes[index].classList.add('hidden');
  } else {
    tech.style.display = 'none';
  }
});

arrowRightOnes.forEach((arrowRightOne, index) => {
  arrowRightOne.addEventListener('click', () => {
    arrowDownOnes[index].classList.remove('hidden');
    arrowRightOnes[index].classList.add('hidden');
    technologies[index].style.display = 'flex';

    arrowRightOnes.forEach((arrow, i) => {
      if (i !== index) {
        technologies[i].style.display = 'none';
        arrowDownOnes[i].classList.add('hidden');
        arrowRightOnes[i].classList.remove('hidden');
      }
    });
  });
});

arrowDownOnes.forEach((arrowDownOne, index) => {
  arrowDownOne.addEventListener('click', () => {
    technologies[index].style.display = 'none';
    arrowRightOnes[index].classList.remove('hidden');
    arrowDownOnes[index].classList.add('hidden');
  });
});

document.addEventListener('click', (e) => {
  const popup = document.querySelector('.pop');
  const target = e.target.closest('#close_pop');

  if (target) {
    popup.remove();
    overlay.classList.add('hidden');
  }
});

// validate contact form

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const { value } = form.elements.user_email;
  const error = document.querySelector('.error');
  if (error.hasChildNodes()) {
    while (error.firstChild) {
      error.removeChild(error.firstChild);
    }
  }

  if (value === value.toLowerCase()) {
    error.classList.remove('show');
  } else if (value !== value.toLowerCase()) {
    e.preventDefault();
    error.classList.add('show');
    const span = document.createElement('span');
    span.textContent = 'Email should be in lowercase';
    error.appendChild(span);
  }
});

// localstorage

const x = {
  name: '',
  email: '',
  text: '',
};
let y = '';
function store() {
  y = JSON.stringify(x);
  localStorage.setItem('form', y);
}
form.elements.user_name.addEventListener('change', () => {
  x.name = form.elements.user_name.value;
  store();
});

form.elements.user_email.addEventListener('change', () => {
  x.email = form.elements.user_email.value;
  store();
});
form.elements.user_message.addEventListener('change', () => {
  x.text = form.elements.user_message.value;
  store();
});

if (localStorage.getItem('form')) {
  const get = JSON.parse(localStorage.getItem('form'));
  form.elements.user_name.value = get.name;
  form.elements.user_email.value = get.email;
  form.elements.user_message.value = get.text;
}
