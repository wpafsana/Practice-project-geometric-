function calculatePentagonArea(){
     //corn1
     const pentagonPInput =document.getElementById('pentagon-p');
     const pentagonPText=pentagonPInput.value;
     const p=parseFloat(pentagonPText);
   
  //corn2
  const pentagonBInput=document.getElementById('pentagon-b');
  const pentagonBText =pentagonBInput.value;
  const b=parseFloat(pentagonBText);
   //calculate
   const area = 0.5 * p * b ;
   console.log('area of the pentagon is:', area);
   // display area
   const pentagonArea=document.getElementById('pentagon-area');
   pentagonArea.innerText=area;
}