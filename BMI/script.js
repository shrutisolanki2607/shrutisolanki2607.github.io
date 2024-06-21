const form = document.querySelector('form');

let calbmi = (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.results');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = 'Please enter valid height';
    }else if(weight==='' || weight<0 || isNaN(weight)){
            result.innerHTML = 'Please enter valid weight';
    }else{
        const ans = (weight /((height*height)/1000)).toFixed(2);
        result.innerHTML = `<span>${ans}</span>`;
        // if(ans>=18 && ans<=25){
        //     result.innerHTML = '<span>You are in Normal Range</span>';
        // }
        // else if(ans<18){
        //     result.innerHTML = '<span>You are in Under Weight</span>';
        // }
        // else{
        //     result.innerHTML = '<span>You are in Over Weight</span>';
        // }
    }

}

form.addEventListener('submit' , calbmi);
// form.addEventListener('submit' , function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('.results');

//     if(height==='' || height<0 || isNaN(height)){
//         result.innerHTML = 'Please enter valid height';
//     }else if(weight==='' || weight<0 || isNaN(weight)){
//             result.innerHTML = 'Please enter valid weight';
//     }else{
//         const ans = (weight /((height*height)/1000)).toFixed(2);
//          result.innerHTML = `<span>${ans}</span>`;
//         // if(ans>=18 && ans<=25){
        //     result.innerHTML = '<span> You are in Normal Range</span>';
        // }
        // else if(ans<18){
           
        //     result.innerHTML = '<span>You are in Under Weight</span>';
        // }
        // else{
        //     result.innerHTML ='<span>You are in Over Weight</span>';
        // }
//     }

// });