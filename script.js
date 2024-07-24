var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x+20 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x-250 + "px"
    blur.style.top = dets.y-250 + "px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale=3
        crsr.style.border="0.5px solid #fff"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.bachgroundColor="#95c11e"
    })
})


gsap.to('#nav', {
    backgroundColor: '#000',
    height: '110px',
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        start: "top -11%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: 'top -25%',
        end: "top -70%",
        scrub: 2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})

gsap.from("#quote1",{
    y:-70 ,
    x:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
        
    }   

    
})
gsap.from("#quote2",{
    y:70 ,
    x:70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
        
    }       
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})