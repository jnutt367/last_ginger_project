gsap.to(".cls-1", { fill: "orange" })
gsap.to(".test", { x: 100, fill: "red", scale: 1.3 })
gsap.fromTo(".the",{ y:0, opacity:0} ,{ fontSize: 25, y: 200, opacity:1, color:"black", duration: 2,ease:"elastic"})
gsap.fromTo(".last",{ y:0, opacity:0} ,{ y: 200, x:40, fontSize:45, opacity:0.7, color:"aqua", fontFamily:"fantasy", duration: 2,ease:"elastic"})
gsap.fromTo(".ginger",{ y:0, opacity:0} ,{ y: 100, opacity:1, fontSize:45, duration:2, color:"red" , fontFamily:"fantasy",ease:"back.out"},3)
gsap.to(".ginger", { x: 100, fontSize: 100})
gsap.fromTo(".bg-1", { opacity:0.5}, {opacity:1, fill:"orange" }, 5)
gsap.fromTo(".bg-2", { opacity:0.5}, {opacity:1, fill:"orange" }, 5)
gsap.to(".the", { paddingTop: 30, duration: 5,fontFamily:"fantasy"}, 5)
gsap.to("body", { opacity:0.9})
gsap.fromTo(".author", { x: -400,y:200}, { color:"black", fontSIze: 40, x:0, duration:4,ease:"elastic", y: 200}, 5)

    