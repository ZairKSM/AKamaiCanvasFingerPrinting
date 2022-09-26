function CanvasFingerPrinting(){
    console.log("Generating fingerprint...");

    //creating the canvas
    canvas = document.getElementById("canvas1-display")
    width= 280
    height= 60
    
    //if (canvas.width = width, canvas.height = height, canvas.style.display = "none", "function"== typeof canvas.getContext) {
    if (canvas.width = width, canvas.height = height, "function"== typeof canvas.getContext) {    
        //2d canvas
        var ElementCanvas = canvas.getContext("2d")

       

        //creating the canvas
        TextOnImage = "<@nv45. F1n63r,Pr1n71n6!"

        ElementCanvas.fillStyle = "rgb(102, 204, 0)" 
        ElementCanvas.fillRect(100, 5, 80, 50)
        ElementCanvas.fillStyle = "#f60"
        ElementCanvas.font = "16pt Arial"
        ElementCanvas.fillText(TextOnImage, 10, 40)
        ElementCanvas.strokeStyle = "rgb(120, 186, 176)",
        ElementCanvas.arc(80, 10, 20, 0, window.Math.PI, false)
        ElementCanvas.stroke();
        
        
        //converting the canvas to an image who is base 64 encoded
        var ImageUrlBase64 = canvas.toDataURL();
        console.log(ImageUrlBase64)
        document.getElementById("canvas1-b64").innerText = "Canvas To URL Base 64 : " +ImageUrlBase64.substring(0,100) ;
        
        //generating ID used by akamai to identify the browser and GPU
        FirstId = 0
        for (var i = 0; i < ImageUrlBase64.length; i++) {
                              
            FirstId = ((FirstId<< 5)-FirstId)+ ImageUrlBase64.charCodeAt(i), FirstId &= FirstId;
            
        }
        FirstId = FirstId.toString();

        document.getElementById("canvas1-id").innerText = "Final ID Generated : " +FirstId ;
        
        return FirstId
    }
}


