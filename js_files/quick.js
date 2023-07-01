
async function partitionLomuto(arr, l, r){
    // console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    arr[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        // console.log('In partitionLomuto for j');
        // color current element
        arr[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(arr[j].style.height) < parseInt(arr[r].style.height)){
            // console.log('In partitionLomuto for j if');
            i++;
            swap(arr[i], arr[j]);
            // color 
            arr[i].style.background = 'orange';
            if(i != j) arr[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            arr[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(arr[i], arr[r]); // pivot height one
    // console.log(`i = ${i}`, typeof(i));
    // color
    arr[r].style.background = 'pink';
    arr[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < arr.length; k++){
        if(arr[k].style.background != 'green')
            arr[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(arr, l, r){
    // console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(arr, l, r);
        await quickSort(arr, l, pivot_index - 1);
        await quickSort(arr, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <arr.length && r <arr.length){
            arr[r].style.background = 'green';
            arr[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let arr = document.querySelectorAll('.bar');
    let l = 0;
    let r = arr.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(arr, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});