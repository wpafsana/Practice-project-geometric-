function calculateRectangleArea(){
    //width
    const rectangleWidthInput=document.getElementById('rectangle-width');
    const rectangleWidthText=rectangleWidthInput.value;
    const width=parseFloat(rectangleWidthText);
//length
const rectangleLenghtInput=document.getElementById('rectangle-length');
const rectangleLengthText=rectangleLenghtInput.value ;
const length=parseFloat(rectangleLengthText);
//area
const area= width*length;
console.log('the rectangle area is:',area);
// display
const rectangleArea=document.getElementById('rectangle-area');
rectangleArea.innerText=area;

}