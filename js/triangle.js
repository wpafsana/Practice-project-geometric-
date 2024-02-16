//step-1) get base value of the triangle
//step-2)added an id in the input field
//step-3)use the getElementById to access the input field
//step-4) get value from the input field(value is string now)
//step-5) convert the value to a number use perseFloat


 function calculateTriangleArea(){
    //base
   const triangleBaseInput=document.getElementById('triangle-base');
   const triangleBaseText=triangleBaseInput.value;
   const base=parseFloat(triangleBaseText);
 
//height
const  triangleHeightInput=document.getElementById('triangle-height');
const triangleHeightText=triangleHeightInput.value;
const height=parseFloat(triangleHeightText);
 //calculate
 const area = 0.5 * base * height ;
 console.log('area of the triangle is:',area);
 // display area
 const triangleAreaSpan=document.getElementById('triangle-area');
 triangleAreaSpan.innerText=area;

}
