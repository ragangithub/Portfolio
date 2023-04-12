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
    image_mobile: './images/Snapshoot-Portfolio.png',
    image_desktop: './images/nature.png',
    name: 'Tonic',
    description:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    live: 'https://ragangithub.github.io/',
    source: 'https://github.com/ragangithub/Microverse-Portfolio',
  },
  {
    image_mobile: './images/Availablity.png',
    image_desktop: './images/proffesional.png',
    name: ' Multi-Post Stories',
    description:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    live: 'https://ragangithub.github.io/',
    source: 'https://github.com/ragangithub/Microverse-Portfolio',
  },
  {
    image_mobile: './images/flex.png',
    image_desktop: './images/Snapshoot-Portfolio.png',
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    live: 'https://ragangithub.github.io/',
    source: 'https://github.com/ragangithub/Microverse-Portfolio',
  },
  {
    image_mobile: './images/proffesional.png',
    image_desktop: './images/Availablity.png',
    name: ' Multi-Post Stories',
    description:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',

    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    live: 'https://ragangithub.github.io/',
    source: 'https://github.com/ragangithub/Microverse-Portfolio',
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
      <div>CANOPY</div>
      <div class="circle"></div>
      <div>Back End Dev</div>
      <div class="circle"></div>
      <div>2015</div>
    </div>
    <p>
    ${project.description}
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
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
    <div>CANOPY</div>
    <div class="circle"></div>
    <div>Back End Dev</div>
    <div class="circle"></div>
    <div>2015</div>
  </div>
  <div class="mobile"><img src=${projects[idd].image_mobile} alt="" /></div>
  <p>
  ${projects[idd].details}
  </p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
  <div class="see">
   <a class='host' href=${projects[idd].live}>
    <span>see live</span>
    <img src="./images/live.svg"/>
   </a>
   <a class='git'href=${projects[idd].source}>
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
    <div>CANOPY</div>
    <div class="circle"></div>
    <div>Back End Dev</div>
    <div class="circle"></div>
    <div>2015</div>
  </div>
  <div class="desktop-image"><img src=${projects[idd].image_desktop} alt="" /></div>


  <div class=details>
   
  <div class='left'>
  <p>
  ${projects[idd].details}
  </p>
  </div>
  <div class='right'>
  <ul >
  
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
   
  </ul>

  <ul class='ruby' >
  <li>Ruby</li>
  <li>Bootstrap</li>
 </ul>
  <div class="see">
  <a class='host' href=${projects[idd].live}>
    <span>see live</span>
    <img src="./images/live.svg"/>
   </a>
   <a class='git' href=${projects[idd].source}>
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