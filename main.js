Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach("#camera")
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri +'"/>';
    })
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier(' teachablemachine.withgoogle.com/models/cqynFS-RM/model.json',modelloaded)
function modelloaded(){
    console.log("model has been loaded")
}
function check(){
    img = document.getElementById("selfie_image")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
if(error)
{
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("result_object_name").innerHTML=results[0].label
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)

}
}