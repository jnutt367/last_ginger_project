gsap.to(".cls-1", { fill: "orange" })
gsap.to(".test", { x: 100, fill: "red", scale: 1.3 })
gsap.fromTo(".the",{ y:0, opacity:0} ,{ y: 200, opacity:1, color:"black", duration: 2,ease:"elastic"})
gsap.fromTo(".last",{ y:0, opacity:0} ,{ y: 200, x:200, fontSize:40,opacity:0.7, color:"black", fontFamily:"cursive", duration: 2,ease:"elastic"})
gsap.fromTo(".ginger",{ y:400, opacity:0} ,{ y: 200, opacity:1, fontSize:45, duration:2, color:"red" , fontFamily:"fantasy",ease:"back.out"},3)
gsap.fromTo(".bg-1", { opacity:0.5}, {opacity:1, fill:"orange" }, 5)
gsap.fromTo(".bg-2", { opacity:0.5}, {opacity:1, fill:"orange" }, 5)
    