// get refrences to the form and display area
document.getElementById('Resume-form')?.addEventListener('submit', function (event: Event) {
        event.preventDefault();  // prevent page reload

    // Get refrences to form elements using their id's and ensure type safety
    
    const profilePictureInput =(document.getElementById('profilePicture') as HTMLInputElement).value;
    const name = (document.getElementById('Name') as HTMLInputElement).value ;
    const lastname = (document.getElementById('Last name') as HTMLInputElement).value;
    const cnic = (document.getElementById('CNIC') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone No') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const Experience= (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value; 

// ** //
const usernameElement = document.getElementById("username") as HTMLInputElement;






// check if all form elements are present
    if (profilePictureInput && name && lastname && cnic && email && phone && education && Experience && Skills  //**
     && usernameElement ) {
        //         alert("please fill all field");
        const fullName:string =`${name}${lastname};`
        
        //  const usernameElement:string='username';
         const Email:string=email;
         const Phone: string=phone;
         const Cnic: string=cnic;
         const Education:string = education;
         const experience:string= Experience;
         const skills:string= Skills;
         
         //** 

        const username = usernameElement.value;
     const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

        //  const profilePicturefile: File| undefined = "profilePictureInput.files?.[0] || undefined";
        //  const profilePictureURL: string = profilePicturefile? URL.createObjectURL(profilePicturefile) :'';
 

    }




    // generate the resume content dynamically
    const resumeoutput: string = `
    <h2><b> Editable Resume</b></h2>
    ${profilePictureInput ? `<img src="${profilePictureInput}" alt="profilePicture" class="profilePicture">`:''}
    <h3> Personal Information</h3>
    <p><b>Name:</b>${name}<p/>
    <p><b>lastname:</b>${lastname}<p/>
    <p><b>cnic:</b>${cnic}<p/>
     <p><b>email:</b>${email}<p/>
      <p><b>phone:</b>${phone}<p/>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>
    
    <h3>Skills</h3>
    <p>${Skills}</p>
    
    `;
// //    prefill the form based 0n the user name in the url
// document.getElementById('Resume-form')?.addEventListener('DomContentLoaded',()=>{
// const urlParams= new URLSearchParams(window.location.search);
// const username = urlParams.get('username');
// if(username){
// // Autofill form if data is found in local storage

// const savedResumeData = localStorage.getItem(username);
// if(savedResumeData){
// const resumeData = JSON.parse(savedResumeData);
// (document.getElementById('username') as HTMLInputElement).value= username ;
// (document.getElementById('profilePicture') as HTMLInputElement).value= profilePictureInput;
// (document.getElementById('Name') as HTMLInputElement).value= resumeData.name ;
// (document.getElementById('Last name') as HTMLInputElement).value= resumeData.lastname;
// (document.getElementById('CNIC') as HTMLInputElement).value= resumeData.cnic;
// (document.getElementById('Email') as HTMLInputElement).value=resumeData.email;
// (document.getElementById('Phone No') as HTMLInputElement).value=resumeData.phone;
// (document.getElementById('Education') as HTMLTextAreaElement).value=resumeData.Education;
// (document.getElementById('Experience') as HTMLTextAreaElement).value=resumeData.Experience;
// (document.getElementById('Skills') as HTMLTextAreaElement).value=resumeData.Skills;


// }
// }
// });
    // **
    const downloadLink = document.createElement('a')
     downloadLink.href = 'data:text/html;charset=utf-8,'+ encodeURIComponent(resumeoutput)
     downloadLink.download = 'uniquePath';
     downloadLink.textContent = 'download Your 2024 Resume';
    
    // Display the generated resume
    const resumeOutputElement= document.getElementById('resumeoutput');
    
    if (resumeOutputElement) {

        resumeOutputElement.innerHTML = resumeoutput;
        resumeOutputElement.appendChild(downloadLink);
        resumeOutputElement.classList.remove("hidden");
    //  create a contsainerfor buttons
    const buttonContainer = document.createElement("div");
     buttonContainer.id ="buttonContainer";
     resumeOutputElement.appendChild(buttonContainer);
    //  add download as pdf button
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as Pdf";
    downloadButton.addEventListener("click" ,() =>{
        window.print();//open the print dialogue,allowing the user to save as pdf
     });
    buttonContainer.appendChild(downloadButton);
    // add shareable link button

    const shareLinkButton = document.createElement("button");
     shareLinkButton.textContent = "copy shareable link";
     shareLinkButton.addEventListener("click", async ()=> {
      try{
    //    create a unique shareable link stimulate in this case
     const shareableLink =`http://yourdomain.com/resumes/$
     {username.replace(/\s+/g, '_')}_cv.html`;
     //  use clipboard api  to copy the shareable link
    await navigator.clipboard.writeText(shareableLink);
    alert("shareable link copied to clipboard!");
    } catch (err) {
        console.error("failed to copy link:" ,err);
        alert ("failed to copy link to clipboard. please try again");
    }      
    
     });
     buttonContainer.appendChild(shareLinkButton);
    }else{
        console.error('The resume output element is missing.');
    }
}); 
    
    //   console.error('one or more input elements are missing.');
    //     }); 
    
        // });    
           
           
           
//             console.error('The resume output element is missing'); 


//       const username = usernameElement.value;
//      const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
//     //  use clipboard api  to copy the shareable link
//     await navigator.clipboard.writeText(shareableLink);
//     alert("shareable link copied to clipboard!");
//     } catch (err) {
//   console.error("failed to copy link:" ,err);
//   alert ("failed to copy link to clipboard. please try again");


//     };
//     buttonContainer.appendChild(shareLinkButton);
//     }else{
//     console.error('The resume output element is missing');

//     }else{

//         console.error('The resume output element is missing'); 
//     }
//  });
    // // Optionally, append the download link to the page (if you want to show the link to the user)
    // if (resumeOutputElement) {
    //     resumeOutputElement.innerHTML = resumeoutput;
    //     resumeOutputElement.appendChild(downloadLink);
    //     resumeOutputElement.classList.remove("hidden");
    // }

        // This else block is unnecessary here because it should be part of the form validation
// if (!name || !lastname || !cnic || !email || !phone || !education || !Experience || !Skills) {
    //  console.error('One or more input elements are missing');
//  }


    

//  }); 


    

// // get refrences to the form and display area
// let resumeForm = document.querySelector('#Resume-form') as HTMLElement
// let resumeOutput = document.querySelector('#resumeoutput') as HTMLInputElement
// let editBtn = document.querySelector('#edit-btn') as HTMLElement

// const form =document.getElementById('Resume-form')?.addEventListener('submit' ,function(event: Event){
// event.preventDefault()

// resumeOutput.style.display = "block"

// //  get refrences to form elements using their ids 
//     const name = (document.getElementById('Name') as HTMLInputElement)
//     const lastname = (document.getElementById('Last name') as HTMLInputElement)
//     const cnic = (document.getElementById('CNIC') as HTMLInputElement)
//     const email = (document.getElementById('Email') as HTMLInputElement)
//     const phone = (document.getElementById('phone No') as HTMLInputElement)
//     const education = (document.getElementById('education') as HTMLTextAreaElement)
//     const experience= (document.getElementById('experience') as HTMLTextAreaElement)   
//     const Skills = (document.getElementById('Skills') as HTMLTextAreaElement)


//     // check if all form elements are present
//      if (!name || !lastname || !cnic || !email ||!phone || !education ||!experience || !Skills ) {

//         alert("please fill all field");
//         return;
//      }
//         (document.getElementById('resumeName') as HTMLInputElement).innerText =`Name: ${name.value}`;
//         (document.getElementById('resumeLast name') as HTMLInputElement).innerText =`Last name: ${ lastname.value}`;
//         (document.getElementById('resumephone No') as HTMLInputElement).innerText=`phone No:${phone.value}`;
//         (document.getElementById('Email') as HTMLInputElement).innerText =`email:${email.value}`;
//         (document.getElementById('resumeeducation') as HTMLTextAreaElement).innerText =`education:${education.value}`;
//         (document.getElementById('resumeexperience') as HTMLTextAreaElement).innerText =`experience:${experience.value}`;
//         (document.getElementById('resumeSkills') as HTMLTextAreaElement).innerText=`Skills:${Skills.value}`;
//         (document.getElementById('CNIC') as HTMLInputElement).innerText =`CNIC:${cnic.value}`;

//     })
//     //   edit Resume button functionality
//     editBtn?.addEventListener("click" ,() => {
     
//         resumeForm.style.display = "block"; // show the form again
//         resumeOutput.style.display ="none"; // hide the resume output
//         editBtn.style.display = "none"; // hide the edit button

//         // Repopulate the form with current resume data

//         const name = document.getElementById('resumeName')?.innerText.split(': ')[1];
//         const lastname = document.getElementById('resumeLast name')?.innerText.split(': ')[1];
//         const cnic = document.getElementById('CNIC')?.innerText.split(': ')[1];
//         const email = document.getElementById('Email')?.innerText.split(': ')[1];
//         const phone = document.getElementById('resumephone No')?.innerText.split('; ')[1];
//         const education =  document.getElementById('resumeeducation')?.innerText;
//         const experience = document.getElementById('resumeexperience')?.innerText;
//         const Skills =document.getElementById('resumeSkills')?.innerText;

//         // set the form inputs to these values

//         (document.getElementById('Name') as HTMLInputElement).value = name?? '';
//         (document.getElementById('Last name') as HTMLInputElement).value = lastname??'';
//         (document.getElementById('phone No') as HTMLInputElement).value = phone ??'';
//         (document.getElementById('CNIC') as HTMLInputElement).value = cnic??'';
//         (document.getElementById('Email') as HTMLInputElement).value= email??'';
//         (document.getElementById('education') as HTMLTextAreaElement).value= education??'';
//         (document.getElementById('experience') as HTMLTextAreaElement).value = experience??'';
//         (document.getElementById('Skills') as HTMLTextAreaElement).value= Skills??''; 











        
        
        
// });
