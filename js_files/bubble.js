async function bubble() {
    // console.log('In bubbe()');
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length-1; i++){
        // console.log('In ith loop');
        for(let j = 0; j < arr.length-i-1; j++){
            // console.log('In jth loop');
            arr[j].style.background = 'blue';
            arr[j+1].style.background = 'blue';
            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)){
                // console.log('In if condition');
                await waitforme(delay);    // pauses till execution is done
                swap(arr[j], arr[j+1]);
            }
            arr[j].style.background = 'cyan';
            arr[j+1].style.background = 'cyan';
        }
        arr[arr.length-1-i].style.background = 'green';
    }
    arr[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
