function calculateParallelogramArea(){
    //base
    const parallelogramBaseInput=document.getElementById('parallelogram-base');
    const parallelogramBaseText=parallelogramBaseInput.value ;
    const base=parseFloat(parallelogramBaseText);
    //height
    const parallelogramHeightInput=document.getElementById('parallelogram-height');
    const parallelogramHeightText=parallelogramHeightInput.value ;
    const height=parseFloat(parallelogramBaseText);
    // area
    const area= base * height;
    console.log('the parallelogram area is :',area);
    //display
    const parallelogramArea=document.getElementById('parallelogram-area');
    parallelogramArea.innerText=area;

}