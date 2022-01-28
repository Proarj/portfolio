document.querySelectorAll("a[href^='#']").forEach(anchor =>{
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    })
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section =>{
        const topSection = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (topSection - sectionHeight/2.5)){
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(a=>{
        a.removeAttribute('id');
        if(a.classList.contains(current)){
            a.id = 'active';
        }
    })
})
