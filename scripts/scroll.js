// init controller

let images = [
    "#zoetrope .images img:nth-of-type(1)",
    "#zoetrope .images img:nth-of-type(2)",
    "#zoetrope .images img:nth-of-type(3)",
    "#zoetrope .images img:nth-of-type(4)",
    "#zoetrope .images img:nth-of-type(5)",
    "#zoetrope .images img:nth-of-type(6)",
    "#zoetrope .images img:nth-of-type(7)",
    "#zoetrope .images img:nth-of-type(8)",
    "#zoetrope .images img:nth-of-type(9)",
    "#zoetrope .images img:nth-of-type(10)",
    "#zoetrope .images img:nth-of-type(11)",
    "#zoetrope .images img:nth-of-type(12)"
];

let data = [
    [[0,400], [300,400], [300,0], [0,0], [300,400], [23,235], [0,400], [300,400], [300,0], [0,0], [300,400], [23,235]],
    [[300,0], [0,0], [300,400], [23,235], [0,400], [300,400], [300,0], [0,0], [300,400], [23,235], [0,400], [300,400]]
];


jump = 1;
imageIndex = 0 

$(function () {
    let controller = new ScrollMagic.Controller();

    let tween = new TimelineMax ()
        .fromTo(images, 1, {x: "-100%"}, {x: "0%"})
        .fromTo(images, 1, {x: "0%"}, {x: "100%", delay: 1.5});

    new ScrollMagic.Scene({
        offset: 0,
        duration: "100%"
    })
        .setPin("#zoetrope")
        .setTween(tween)
        .addTo(controller)
        .on("leave", function() { 
                window.scrollTo(0,0);
                imageIndex = (imageIndex + 1) % 12;
                $("#zoetrope .images img").attr('src', `./media/runner-${String(imageIndex).padStart(2, '0')}-02.png`);
        });
    
    
    let jointTween = new TimelineMax ()

    let tweens = []
    for(let i = 0; i < 2; i ++){
        tweens.push(TweenMax.to((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][imageIndex][0], y: data[i][imageIndex][1]}));
    }
    jointTween.add(tweens);
                
    jointTween.autoRemoveChildren = true;    
    jointTween.eventCallback("onComplete", function() {           
        tweens = []
        for(let i = 0; i < 2; i ++){
            tweens.push(TweenMax.to((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][imageIndex][0], y: data[i][imageIndex][1]}));
        }
        jointTween.add(tweens);
    });
  

    new ScrollMagic.Scene({
        offset: 0,
        duration: "100%"
    })
        .setTween(jointTween)
        .addTo(controller);
        
});
