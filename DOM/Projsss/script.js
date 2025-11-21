const people = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Full-Stack Developer",
    description: "Aarav is a passionate developer who loves building scalable web applications and exploring modern JavaScript frameworks.",
    tags: ["JavaScript", "React", "Node.js", "Web Development"]
  },
  {
    fullName: "Sophia Mehta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description: "Sophia specializes in crafting intuitive user experiences with a strong focus on clean design and smooth interactions.",
    tags: ["UI/UX", "Figma", "Design Systems", "Prototyping"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Data Scientist",
    description: "Rohan works with machine learning models, data pipelines, and analytical tools to derive insights from complex datasets.",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"]
  },
  {
    fullName: "Emily Carter",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Emily helps businesses grow online with high-conversion campaigns and strategic brand positioning.",
    tags: ["Marketing", "SEO", "Branding", "Content"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    profession: "Mobile App Developer",
    description: "Kabir builds fast, responsive, and reliable Android apps with modern tools and clean architecture principles.",
    tags: ["Android", "Kotlin", "Mobile Development", "UI Design"]
  }
];

let sum = ''

people.forEach(function (elem){
    sum += `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession} </h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main')

main.innerHTML = sum