Webcam.set({
width:400,
height:400,
image_format:'png',
png_quality:100
});
camera = document.getElementById("webcam");
Webcam.attach(camera);
function takeImage(){
Webcam.snap(function (data_uri){
document.getElementById("image").innerHTML = "<img id='pic' src='"+data_uri+"'>";

})
}
console.log("Ml5 Version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GpbZWOwqh/model.json",modelLoaded);
function modelLoaded(){
console.log("Model is loaded.")
}
function identifyImage(){
img = document.getElementById("pic")
classifier.classify(img,gotResults);
}
function gotResults(){
if(error){
console.error();
}
else{
console.log(results);
document.getElementById("objectname").innerHTML = results[0].label;
document.getElementById("objectaccuracy").innerHTML = results[0].confidence.toFixed(3);
}
}