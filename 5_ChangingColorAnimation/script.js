var rectangle = document.querySelector(".rectangle");

rectangle.addEventListener("mousemove", function(details){ // (1)

    var rectangleLocation = rectangle.getBoundingClientRect(); //Return the size of an element and its position relative to the viewport: bottom :  450, height : 300, left : 262, right : 762, top : 150, width : 500, x : 262, y : 150
    insideRectangleValue = details.clientX - rectangleLocation.left; 
    var center = rectangleLocation.width/2
    if(insideRectangleValue < center) // (2)
    {
        // (3)
        var redIntensity = gsap.utils.mapRange(0, center, 255, 0, insideRectangleValue);  // mapRange(inMin, inMax, outMin, outMax, valueToMap)
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redIntensity}, 0, 0)`,
            ease: Power4,
        })
    }
    else
    {
        // (3)
        var blueIntensity = gsap.utils.mapRange(center, rectangleLocation.width, 0, 255, insideRectangleValue);  // mapRange(inMin, inMax, outMin, outMax, valueToMap)
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueIntensity})`,
            ease: Power4,
        })
    }
})

rectangle.addEventListener("mouseleave", function(){
    gsap.to(rectangle, {
        backgroundColor: "white",
    })
})