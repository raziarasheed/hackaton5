var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// get refrences to the form and display area
(_a = document.getElementById('Resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    event.preventDefault(); // prevent page reload
    // Get refrences to form elements using their id's and ensure type safety
    var profilePictureInput = document.getElementById('profilePicture').value;
    var name = document.getElementById('Name').value;
    var lastname = document.getElementById('Last name').value;
    var cnic = document.getElementById('CNIC').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('Phone No').value;
    var education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // ** //
    var usernameElement = document.getElementById("username");
    // check if all form elements are present
    if (profilePictureInput && name && lastname && cnic && email && phone && education && Experience && Skills //**
        && usernameElement) {
        //         alert("please fill all field");
        var fullName = "".concat(name).concat(lastname, ";");
        //  const usernameElement:string='username';
        var Email = email;
        var Phone = phone;
        var Cnic = cnic;
        var Education = education;
        var experience = Experience;
        var skills = Skills;
        //** 
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //  const profilePicturefile: File| undefined = "profilePictureInput.files?.[0] || undefined";
        //  const profilePictureURL: string = profilePicturefile? URL.createObjectURL(profilePicturefile) :'';
    }
    // generate the resume content dynamically
    var resumeoutput = "\n    <h2><b> Editable Resume</b></h2>\n    ".concat(profilePictureInput ? "<img src=\"".concat(profilePictureInput, "\" alt=\"profilePicture\" class=\"profilePicture\">") : '', "\n    <h3> Personal Information</h3>\n    <p><b>Name:</b>").concat(name, "<p/>\n    <p><b>lastname:</b>").concat(lastname, "<p/>\n    <p><b>cnic:</b>").concat(cnic, "<p/>\n     <p><b>email:</b>").concat(email, "<p/>\n      <p><b>phone:</b>").concat(phone, "<p/>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    \n    ");
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
    var downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeoutput);
    downloadLink.download = 'uniquePath';
    downloadLink.textContent = 'download Your 2024 Resume';
    // Display the generated resume
    var resumeOutputElement = document.getElementById('resumeoutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeoutput;
        resumeOutputElement.appendChild(downloadLink);
        resumeOutputElement.classList.remove("hidden");
        //  create a contsainerfor buttons
        var buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonContainer";
        resumeOutputElement.appendChild(buttonContainer);
        //  add download as pdf button
        var downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as Pdf";
        downloadButton.addEventListener("click", function () {
            window.print(); //open the print dialogue,allowing the user to save as pdf
        });
        buttonContainer.appendChild(downloadButton);
        // add shareable link button
        var shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "copy shareable link";
        shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var shareableLink, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        shareableLink = "http://yourdomain.com/resumes/$\n     {username.replace(/s+/g, '_')}_cv.html";
                        //  use clipboard api  to copy the shareable link
                        return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                    case 1:
                        //  use clipboard api  to copy the shareable link
                        _a.sent();
                        alert("shareable link copied to clipboard!");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("failed to copy link:", err_1);
                        alert("failed to copy link to clipboard. please try again");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        buttonContainer.appendChild(shareLinkButton);
    }
    else {
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
