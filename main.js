function preload(){
}

function setup(){
    canvas = createCanvas(800, 533)
    canvas.center()

    imag = createCapture(VIDEO)
    imag.hide()

    poser = ml5.poseNet(imag, loading)
    poser.on("pose", PosDaNos)
}

function draw(){
    image(imag, 0, 0, 800, 533)
    filter()
}

function loading(){
    console.log("I hate loading screens")
}

function PosDaNos(results){
    if(results.length > 0){
        console.log(results)
    }
}

function takeSnap(){
    save("piktar")
}