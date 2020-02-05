// init controller
gsap.registerPlugin();

let data = [
    [[22,197],[26,163],[42,151],[61,156],[82,171],[127,191],[147,203],[138,212],[111,219],[62,216],[34,210],[22,196]], //Right Ankle
    [[142,200],[136,206],[116,212],[78,217],[43,214],[26,198],[15,179],[33,152],[59,145],[61,152],[90,172],[130,194]], //Left Ankle
    [[76,177],[81,176],[94,173],[116,167],[131,151],[147,142],[143,148],[130,159],[121,166],[91,171],[72,172],[71,169]], //Right Knee
    [[151,148],[135,153],[123,161],[101,170],[76,175],[70,165],[72,171],[81,176],[100,175],[110,168],[136,150],[149,144]], //Left Knee
    [[100,124],[96,124],[93,112],[89,115],[88,117],[99,114],[97,117],[97,116],[94,119],[85,120],[90,125],[102,119]], //Hip
    [[122,48],[117,42],[116,39],[110,41],[108,40],[117,38],[116,41],[117,42],[118,41],[105,41],[108,41],[117,43]], //Head
    [[142,200],[105,60],[101,59],[95,63],[93,61],[99,56],[97,56],[101,59],[101,60],[90,65],[100,72],[110,61]], //Right Shoulder
    [[114,69],[101,63],[100,63],[101,63],[102,67],[114,62],[111,64],[107,65],[105,63],[87,66],[88,63],[95,62]], //Left Shoulder
    [[103,63],[104,98],[89,96],[68,91],[57,76],[64,56],[64,55],[66,67],[72,82],[76,99],[100,100],[120,96]], //Right Elbow
    [[124,104],[74,70],[79,82],[91,96],[98,100],[120,97],[119,97],[102,95],[92,93],[63,92],[59,77],[65,65]], //Left Elbow
    [[148,77],[137,89],[122,116],[82,130],[69,117],[64,96],[64,93],[77,103],[99,114],[109,112],[131,89][139,73]], //Right Hand
    [[95,95],[92,99],[100,110],[118,122],[134,100],[142,66],[134,66],[128,89],[119,113],[78,114],[105,84],[94,94]]  //Left Hand
];



// let index = 0 
// let loops = 0

// // Page Load
// $(function () {

//     // Setup ScrollMagic controller
//     let controller = new ScrollMagic.Controller();

//     // Tween for the moving image
//     let tween = new TimelineMax ()
//         .fromTo("#zoetrope .images img", 1, {x: "0%"}, {x: "100%"});
    
//     // Queue the loop
//     tween.autoRemoveChildren = true;
//     tween.eventCallback("onComplete", function() {

//         window.scrollTo(0,0);
//         loops += 1;
//         index = (loops) % 12;
//         $("#zoetrope .images img").attr('src', `./media/runner-${String(index).padStart(2, '0')}-02.png`);
//         tween.add([
//                 TweenMax.fromTo("#zoetrope .images img", 1, {x: "-100%"}, {x: "0%"}),
//                 TweenMax.fromTo("#zoetrope .images img", 2, {x: "0%"}, {x: "100%", delay: 4})
//             ]);
//     });
    
//     new ScrollMagic.Scene({
//         offset: 0,
//         duration: "200%",
//         triggerHook: "onLeave"
//     })
//         .setPin("#zoetrope")
//         .setTween(tween)
//         .addTo(controller)




//     let jointTween = new TimelineMax ()

//     let tweens = []
//     for(let i = 0; i < 12; i ++){
//         tweens.push(TweenMax.to((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][index][0], y: data[i][index][1]}));

//     }
//     jointTween.add(tweens);
                
//     jointTween.autoRemoveChildren = true;    
//     jointTween.eventCallback("onComplete", function() {        
//         tweens = []
//         for(let i = 0; i < 12; i ++){
//             tweens.push(TweenMax.to((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][index][0], y: data[i][index][1]}));
//         }
//         jointTween.add(tweens);
//     });
  

//     new ScrollMagic.Scene({
//         offset: 0,
//         duration: "200%",
//         triggerHook: "onLeave"
//     })
//         .setTween(jointTween)
//         .addTo(controller)


//     let textTween = new TimelineMax() 
//         .to("header p", 1, {y: "-10px"});
    
//     textTween.autoRemoveChildren = true; 
//     textTween.eventCallback("onComplete", function() {           
//         textTween.add(TweenMax.fromTo("header p", 1, {y: `${(loops) * -10}px`}, {y: `${(loops+1) * -10}px`}));
//         if( (loops+1) * -10 > $("#about").css("height")){
//             loops = 0
//         }
//     });
    
//     new ScrollMagic.Scene({
//         offset: 0,
//         duration: "100%",
//         triggerHook: "onLeave"
//     })
//         .setTween(textTween)
//         .addTo(controller);
       
//     $(window).mousemove(function(event){
//         $("#cursor").css("transform", `translate(${event.clientX - 64}px,${event.clientY - 128}px)`)
//     });
// });

// $(function () {
//     let loops = 0;
//     let controller = new ScrollMagic.Controller();

//     // Image Tween
//     let tweens = [
//         TweenMax.fromTo("#zoetrope .images img", 1, {x: "-100%"}, {x: "0%"}),
//         TweenMax.fromTo("#zoetrope .images img", 1, {x: "0%"}, {x: "100%", delay: 2}),
        
//     ];

//     let jointTweens = []
//     for(let i = 0; i < 12; i ++){
//         jointTweens.push(TweenMax.to(`.joint:nth-of-type(${1})`, 1, {x: data[0][i][0] * 2, y: data[0][i][1] * 2, delay: i}));
//     }
//     let imageTween = new TimelineMax().add([...tweens, ...jointTweens]);

//     imageTween.repeat(12);
//     imageTween.repeatDelay(2);
//     imageTween.eventCallback("onRepeat", function() {
//         loops ++;
//         $("#zoetrope .images img").attr('src', `./media/runner-${String(loops % 12).padStart(2, '0')}-02.png`);
//     });
//     imageTween.eventCallback("onComplete", function() {
//         loops ++;
//         window.scrollTo(0, 0);
//     });
        

//     new ScrollMagic.Scene({
//         offset: 0,
//         duration: "1200%",
//         triggerHook: "onLeave"
//     })
//         .setPin("#zoetrope")
//         .setTween(imageTween)
//         .addTo(controller);

//     $(window).mousemove(function(event){
//         $("#cursor").css("transform", `translate(${event.clientX - 64}px,${event.clientY - 128}px)`)
//     });
// });



$(function () {
    let loops = 0;
    let controller = new ScrollMagic.Controller();

    // Image Tween
    let tweens = [
        TweenMax.fromTo("#zoetrope .images img", 1, {x: "-100%"}, {x: "0%"}),
        TweenMax.fromTo("#zoetrope .images img", 1, {x: "0%"}, {x: "100%", delay: 2})
    ];
    let imageTween = new TimelineMax().add(tweens);

    let jtweens = []
    for(let i = 0; i < 12; i ++){
        jtweens.push(TweenMax.fromTo((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][0][0] * 3, y: data[i][0][1]  * 3}, {x: data[i][1][0] * 3, y: data[i][1][1] * 3 }));

    }
    let jointTween = new TimelineMax ().add(jtweens);
    jointTween.autoRemoveChildren = true;    
    imageTween.autoRemoveChildren = true;
    imageTween.repeat(12);
   
    imageTween.eventCallback("onComplete", function() {
        loops ++;

        $("#zoetrope .images img").attr('src', `./media/runner-${String(loops % 12).padStart(2, '0')}-02.png`);
        imageTween.add(tweens);
        jtweens = []
        for(let i = 0; i < 12; i ++){
            jtweens.push(TweenMax.to((`.joint:nth-of-type(${i+1})`), 1, {x: data[i][loops % 12][0] * 3, y: data[i][loops % 12][1] * 3}));
        }
        jointTween.add(jtweens);

        $(".about").offset({top: ((loops/2 % 50) - 20) * -20, left: $(".about").offset.left});

        window.scrollTo(0, 0);
    });
        

    new ScrollMagic.Scene({
        offset: 0,
        duration: "100%",
        triggerHook: "onLeave"
    })
        .setPin("#zoetrope")
        .setTween(imageTween)
        .addTo(controller);

    new ScrollMagic.Scene({
        offset: 0,
        duration: "5%",
        triggerHook: "onLeave"
    })
        .setTween(jointTween)
        .addTo(controller)

    $(window).mousemove(function(event){
        $("#cursor").css("transform", `translate(${event.clientX - 64}px,${event.clientY - 128}px)`)
    });
});




