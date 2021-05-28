function setup(){
    Canvas = createCanvas(500,350);
    Canvas.position(517,280);
    Video = createCapture(VIDEO);
    Video.center();
    Video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/YzToh8Dev/model.json',modelLoaded)
}
function draw(){
    image(Video,0,0,500,350);
    classifier.classify(Video,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
function modelLoaded(){
    console.log("model loaded")
}
