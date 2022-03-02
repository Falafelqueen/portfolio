const websites = [
  {
    name: "ImpactArc",
    description: "Energetic, fully responsive and SEO optimized landing page for a young tech non-profit in Copenhagen",
    tag: "Homepage",
    img: "images/impactarc_main_img.png",
    link: "project.html",
  }
]

const webapps = [
  {
    name: "Local Food Experience",
    description: "Booking platform for locals and travelers to share and exchange authentic food experiences",
    tag: "Rails app",
    img: "images/local_food_experience_main_img.png",
    link: "project.html",
  },
  {
    name: "Planet Exchange",
    description: "Project description",
    tag: "Rails app",
    img: "images/impactarc_main_img.png",
    link: "project.html",
  },
  {
    name: "Codepoco",
    description: "Project description",
    tag: "Rails app",
    img: "images/codepoco_main_img.png",
    link: "project.html",
  }
]

function fillProjects(projects, type){
  const sectionContainer = document.querySelector(`.section-container-${type}`)
  projects.forEach(project =>{
    // array of projects
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("section-content");
    sectionContent.innerHTML =
   `<div class="section-part project-text">
      <h4><a href="${project.link}">${project.name} | ${project.tag} </h4></a>
      <p>${project.description}</p>
    </div>
    <div class="section-part project-img">
      <div class="img-overlay"></div>
      <img src="${project.img}" class="project-picture" alt="project picture">
    </div>`;
    sectionContainer.appendChild(sectionContent);
  })
  addActiveContentClass(sectionContainer);
}



fillProjects(websites, "websites")
fillProjects(webapps, "webapps")

function addActiveContentClass(sectionContainer){
  const sectionContents = document.querySelectorAll(".section-content")
  console.log(sectionContents);
  console.log(sectionContainer.firstElementChild);
  sectionContents.forEach(sectionContent =>{
    if (sectionContent == sectionContainer.firstElementChild){
      sectionContent.classList.add("active")
    }
  })
}

function moveActiveClassNext(type) {
  const sectionContainer = document.querySelector(`.section-container-${type}`)
  const activeSectionContent = sectionContainer.querySelector(".section-content.active")
  if (activeSectionContent.nextElementSibling){
    activeSectionContent.classList.remove("active")
    activeSectionContent.nextElementSibling.classList.add("active")
    console.log("moving the active class to the next");
  } else {
    activeSectionContent.classList.remove("active");
    sectionContainer.firstElementChild.classList.add("active");
    console.log("moving the active class to the first one");
  }
}


function moveActiveClassPrev(type) {
  const sectionContainer = document.querySelector(`.section-container-${type}`)
  const activeSectionContent = sectionContainer.querySelector(".section-content.active")
  if (activeSectionContent.previousElementSibling) {
    activeSectionContent.classList.remove("active")
    activeSectionContent.previousElementSibling.classList.add("active")
    console.log("moving the active class to the previous");
  } else {
    activeSectionContent.classList.remove("active");
    sectionContainer.lastElementChild.classList.add("active");
    console.log("moving the active class to the last one");
  }
}

let initalProjectsRun = setInterval(moveActiveClassNext, 5000, "webapps")


// get the previous button
// on click stop the moveActiveClass interval
// move active class to the previous element sibling
// if there is no previous move to the last one
const nextWebappBtn = document.querySelector(".next-webapp");
const prevWebappBtn = document.querySelector(".prev-webapp");

nextWebappBtn.addEventListener("click",()=>{
  moveActiveClassNext("webapps")
})

prevWebappBtn.addEventListener("click", ()=>{
  moveActiveClassPrev("webapps")
})


/* restart projects presentation */

const projectsHolderWebApps = document.querySelector(".project-holder-webapp");


// initiating the interval
let hoverInterval

projectsHolderWebApps.addEventListener("mouseleave", ()=>{
  hoverInterval = setInterval(moveActiveClassNext, 5000, "webapps")
})
projectsHolderWebApps.addEventListener("mouseenter", ()=>{
  clearInterval(initalProjectsRun)
  clearInterval(hoverInterval)
})
