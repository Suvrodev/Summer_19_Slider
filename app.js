let ImageArray=[];

const displayImageCard=document.getElementById('image_card');
const SelectedImage=document.getElementById('selectedimg');

document.getElementById('crsl').style.display='none'
document.getElementById('sldr').style.display='none'

const Image_Number=document.getElementById('imagenumber');
const Index_Number=document.getElementById('indexnumber');

const Image_Number2=document.getElementById('imagenumber_');
const Index_Number2=document.getElementById('indexnumber_');



Image_Number.style.display='none';
Index_Number.style.display='none';

Image_Number2.style.display='none';
Index_Number2.style.display='none';

const LoadImage=()=>{
     //const a='../product.json';
     fetch("./product.json")
    .then(res=>res.json())
    .then(data=>DisplayImage(data))
}

const DisplayImage=data=>{
   // console.log(data)
    data.forEach(data=>{
       // const sImage=document.createElement('img')
        // sImage.classList.add('imageclass')
        // console.log(data.image)
        // sImage.src=data.image
        // sImage.onclick
        // displayImageCard.appendChild(sImage)
        displayImageCard.innerHTML+=
        `
          <img onclick="ImageClick('${data.id}','${data.image}')" class="imageclass" src="${data.image}" alt="">
        `
    })
}

const Retrieve_Students=()=>{
   // console.log('This is Retrieve Function')
    const PreviousBookmarked=JSON.parse(localStorage.getItem('Summer19'));
    SelectedImage.innerHTML =''
    PreviousBookmarked.forEach(student=>{
        console.log('Image of Student: ')
        const x_pic=student.Image;
        const x_Picture=x_pic+''
        console.log(x_Picture)
        ImageArray.push(x_Picture)

        SelectedImage.innerHTML +=`
        <img class="imgsm" src="${student.Image}" >
      `
    })
}

const ImageClick=(id,Image)=>{
    ///Set to Local storage
    console.log("ID: "+id)
    console.log('Image: '+Image)
    const Student={id,Image}
    const Students=[];

    const PreviousBookmarked=JSON.parse(localStorage.getItem('Summer19'));
    if(PreviousBookmarked){

        const isThisStudent=PreviousBookmarked.find(std=>std.id===id)
        if(isThisStudent){
            alert('This Student Already exists')
        }else{
            Students.push(...PreviousBookmarked,Student)
            localStorage.setItem('Summer19',JSON.stringify(Students))
        }
      
    }else{
        Students.push(Student)
        localStorage.setItem('Summer19',JSON.stringify(Students))
    }
    Retrieve_Students()
}


LoadImage();
Retrieve_Students();
console.log(ImageArray)

// For Select Image End









///Show First Way Start
const FirstWayButton=document.getElementById('fw');


FirstWayButton.addEventListener('click',()=>{
    console.log('First Way Button')
    console.log(ImageArray)

    if(ImageArray.length>0){
        document.getElementById('crsl').style.display='block'
        let ImageIndex=0;
        setInterval(() => {
            if(ImageIndex==ImageArray.length){
                ImageIndex=0;
            }
            const ImageUrl=ImageArray[ImageIndex];
            ImageID.src = ImageUrl;
        // ImageID.setAttribute('src',ImageUrl)
    
            Image_Number.innerHTML=`Image url: ${ImageUrl}`
            Index_Number.innerHTML=`Index Number: ${ImageIndex} `
            ImageIndex++;
    
        
        }, 1000);
    }else{
        document.getElementById('crsl').style.display='none'
        alert('No Selected')
    }

   
})
///Show First Way End



//Show Second Way start
const SecondWayButton=document.getElementById('sw');
const PreviousButton=document.getElementById('previousbtn');
const NextButton=document.getElementById('nextbtn');
const ImageContainer=document.getElementById('image_id');

SecondWayButton.addEventListener('click',()=>{
    console.log('Second Way')
    console.log('Length of Array: ',ImageArray.length)

    // Image_Number.style.display='none'
    // Index_Number.style.display='none'

    if(ImageArray.length>0){
        ImageContainer.src=ImageArray[0]; 
        document.getElementById('sldr').style.display='block'
    }else{
        alert('No Image Selected')
       
    }
    
})

let next=0;
NextButton.addEventListener('click',()=>{
    next++;
    console.log('Next: ',next)
    if(next===(ImageArray.length)){
        console.log('Next: ',next)
        next=0
        ImageContainer.src=ImageArray[next];
    }else{
        ImageContainer.src=ImageArray[next];
    }
})

PreviousButton.addEventListener('click',()=>{
    next--;
    console.log('Next: ',next)
    if(next<0){
        console.log('Next: ',next)
        next=ImageArray.length-1;
        ImageContainer.src=ImageArray[next];
    }else{
        ImageContainer.src=ImageArray[next];
    }
})
//Show Second Way end





const Images=[
    'MyAssets/MyImage/Me-1.jpg',
    'MyAssets/MyImage/Me-2.jpg',
    'MyAssets/MyImage/Me-3.jpg',
    'MyAssets/MyImage/Me-4.jpg',
    'MyAssets/MyImage/Suvrodev.jpg',
]
const ImageID=document.getElementById('imageid');




// let ImageIndex=0;
// setInterval(() => {
//     if(ImageIndex==Images.length){
//         ImageIndex=0;
//     }
//     const ImageUrl=Images[ImageIndex];
//     ImageID.src = ImageUrl;
//    // ImageID.setAttribute('src',ImageUrl)

//     Image_Number.innerHTML=`Image url: ${ImageUrl}`
//     Index_Number.innerHTML=`Index Number: ${ImageIndex} `
//     ImageIndex++;

   
// }, 1000);


////check
// const CheckImage=document.getElementById('imtget')
// const GetImage=document.getElementById('imtset');
// let storeImagePath;
// CheckImage.addEventListener('click',()=>{
//     console.log('This is an image')
//     storeImagePath=CheckImage.src;
//     console.log(storeImagePath)
//     GetImage.src=storeImagePath;
// })

// GetImage.addEventListener('click',()=>{
//     console.log('This is 2nd Image')
//     GetImage.src=storeImagePath;
// })