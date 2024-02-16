 function calculateRhombusArea(){
        //corn1
       const rhombusCornOneInput=document.getElementById('rhombus-corn-one');
       const cornOneText=rhombusCornOneInput.value;
       const cornOne=parseFloat(cornOneText);
     
    //corn2
    const  rhombusCornTwoInput=document.getElementById('rhombus-corn-two');
    const cornTwoText=rhombusCornTwoInput.value;
    const cornTwo=parseFloat(cornTwoText);
     //calculate
     const area = 0.5 * cornOne * cornTwo ;
     console.log('area of the rhombus is:', area);
     // display area
     const rhombusArea=document.getElementById('rhombus-area');
     rhombusArea.innerText=area;
    
    
}