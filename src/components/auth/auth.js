import axios from 'axios';
import validator from 'validator';
import './auth.css';
import signUp from './template/signUp.hbs';
import logOut from './template/logOut.hbs';
import { modalBackDrop } from '../modal/modalBackDrop'


const signUpHeader = document.querySelector('#signUpHeader');
const signUpDrop = document.querySelector('#signUpDrop');
const signInHeader = document.querySelector('#signInHeader');
const signInDrop = document.querySelector('#signInDrop');



const authWrapRef = document.querySelector('.auth__wrap');
const logOutWrapRef = document.querySelector('.logOut__wrap');



const url = 'https://callboard-backend.herokuapp.com';

let user = {
    email: '',
    password: '',
};

let signUpUser = {
    email: '',
    id: '',
    registrationDate: '',
};

let logInUser ={
    email: '',
    id: '',
    favorites: [],
    calls: [],
    registrationDate: '',
};

//    const gatherInfo = () => {
//         if (validator.isEmail(authForm.email.value)) {
//             const user = {
//                 email: authForm.email.value,
//                 password: authForm.password.value,
//             }
//             return user
//         } 
//         //else { console.log('not appropriate email'); }

//     };
    

const getRefs = () => {
    const refsLogging = {};
    refsLogging.authForm = document.forms.authForm;
    return refsLogging
};


// ================================SIGN UP=============================
const onHeaderSignUp = (e) => {
    modalBackDrop(signUp());
    getRefs();

    if (e.target.dataset.btn === 'signup') {
        authForm.logIn.classList.remove('active');
        authForm.signUp.classList.add('active');
    } else if (e.target.dataset.btn === 'signin') {
        authForm.signUp.classList.remove('active');
        authForm.logIn.classList.add('active'); 
    }

    const onSignUpBtn = (e) => {
        e.preventDefault();
            user = {
            email: authForm.email.value,
            password: authForm.password.value,
        };
        console.log(authForm.signIn);
 
         axios.post(`${url}/auth/register`, { ...user })
            .then(result => console.log(result));
    //     // console.log(result);
    //     // signUpUser = { ...result.data };;
      
    //     // return signUpUser
    
    };
 
   

    authForm.addEventListener('submit', onSignUpBtn );
    // authForm.addEventListener('input', gatherInfo);
    // refsLogging.clsBtn.addEventListener('click'. clsModal)
    //закрытие на крестик и после внесения данных
   
};



signUpHeader.addEventListener('click', onHeaderSignUp);
signUpDrop.addEventListener('click', onHeaderSignUp);
signInHeader.addEventListener('click', onHeaderSignUp);
signInDrop.addEventListener('click', onHeaderSignUp);

// ==================END=============================================


// =====================LOG IN=======================================

// const onHeaderLogIn = () => {
//     modalBackDrop(signUp());

//     const refsLogging = {
//         authForm: document.forms.authForm,
//         clsBtn: authForm.elements.close,
//         authFormBtnSignUp: authForm.querySelector('.authForm__btn_signUp'),
//         authFormBtnLogIn: authForm.querySelector('.authForm__btn_logIn'),
//         authFormInput: authForm.querySelectorAll('.authForm__input'),
//     };
    
    
//     refsLogging.authFormBtnSignUp.classList.remove('active')
//     refsLogging.authFormBtnLogIn.classList.add('active')

//     gatherInfo();
//     const onLogInBtn = async (e) => {
//         e.preventDefault();
//         const result = await axios.post(`${url}/auth/login`, { ...user });
//         logInUser = { ...result.data.user }
//         localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
      
//     };

//     refsLogging.authForm.addEventListener('input', gatherInfo);
//     refsLogging.authForm.addEventListener('submit', onLogInBtn );

// }


// signInHeader.addEventListener('click', onHeaderLogIn);
// signInDrop.addEventListener('click', onHeaderLogIn);

// =============END============================================

// =====MAIN REFS=============================================

// const signUpHeader = document.querySelector('#signUpHeader');
// const signInHeader = document.querySelector('#signInHeader')
// const signInDrop = document.querySelector('#signInDrop')
// const signUpDrop = document.querySelector('#signUpDrop')
// const authWrapRef = document.querySelector('.auth__wrap');
// const logOutWrapRef = document.querySelector('.logOut__wrap');

// const refsLogging = {
//     authForm: document.forms.authForm,
//     clsBtn: authForm.elements.close,
//     authFormBtnSignUp: authForm.querySelector('.authForm__btn_signUp'),
//     authFormBtnLogIn: authForm.querySelector('.authForm__btn_logIn'),
//     authFormInput:authForm.querySelectorAll('.authForm__input'),
// };


// const url = 'https://callboard-backend.herokuapp.com';

// const user = {
//     email: '',
//     password: '',
// };

// let accesTocken = "";

// let logInUser ={
//   email: '',
//   id: '',
//   favorites: [],
//   calls: [],
//   registrationDate: '',
// };

// let signUpUser = {
//     email: '',
//     id: '',
//     registrationDate: '',
// };


// const gatherInfo = (e) => {
//     if (validator.isEmail(authForm.elements.email.value)) {
//        user[e.target.name] = e.target.value;
//     }
//     return user;
// };

// const onSignUpBtn = async () => {
//     try {
//         const result = await axios.post(`${url}/auth/register`, { ...user });
//         signUpUser = { ...result.data };
//     } catch (error) {
//         throw error;
//     } finally {
//         console.log('signUpUser', signUpUser);
//     };
// };

// const submitHandler = e => {
//     e.preventDefault();
//     refs.authForm.addEventListener('input', gatherInfo);
//     refs.authFormBtnSignUp.addEventListener('click', onSignUpBtn);
//     refs.authFormBtnLogIn.addEventListener('click', onLogInBtn);
// };


// const onHeaderSignIn = () => {
//     modalBackDrop(signUp());
//     refsLogging;



 
// };


// const onHeaderSignUp = () => {
//     modalBackDrop(signUp());
//     refsLogging;
    
//     gatherInfo;
//     onSignUpBtn;

//     const submitHandler = e => {
//     e.preventDefault();
//     refs.authForm.addEventListener('input', gatherInfo);
//     refs.authFormBtnSignUp.addEventListener('click', onSignUpBtn);
//     refs.authFormBtnLogIn.addEventListener('click', onLogInBtn);
// };
//     refs.authForm.addEventListener('submit', submitHandler);
//     refs.authForm.addEventListener('input', gatherInfo);
    
    
// };

// signInHeader.addEventListener('click', onHeaderSignIn);
// signInDrop.addEventListener('click', onHeaderSignIn);
// signUpHeader.addEventListener('click', onHeaderSignUp);
// signUpDrop.addEventListener('click', onHeaderSignUp)

// // =========SIGN UP========================================

// // const onHeaderSignUp = () => {
// //   modalBackDrop(signUp())
// // };

// // const attempt = authWrapRef.innerHTML = signUp();


// // const refsLogging = {
// //     authForm: document.forms.authForm,
// //     clsBtn: authForm.elements.close,
// //     authFormBtnSignUp: authForm.querySelector('.authForm__btn_signUp'),
// //     authFormBtnLogIn: authForm.querySelector('.authForm__btn_logIn'),
// //     authFormInput:authForm.querySelectorAll('.authForm__input'),
// // };


// // const url = 'https://callboard-backend.herokuapp.com';

// // const user = {
// //     email: '',
// //     password: '',
// // };

// // let accesTocken = "";

// // let logInUser ={
// //   email: '',
// //   id: '',
// //   favorites: [],
// //   calls: [],
// //   registrationDate: '',
// // };

// // let signUpUser = {
// //     email: '',
// //     id: '',
// //     registrationDate: '',
// // };


// // const gatherInfo = (e) => {
// //     if (validator.isEmail(authForm.elements.email.value)) {
// //        user[e.target.name] = e.target.value;
// //     }
// //     return user;
// // };

// // const onSignUpBtn = async () => {
// //     try {
// //         const result = await axios.post(`${url}/auth/register`, { ...user });
// //         signUpUser = { ...result.data };
// //     } catch (error) {
// //         throw error;
// //     } finally {
// //         console.log('signUpUser', signUpUser);
// //     };
// // };

// // const onHeaderSignUp = () => {
// //   console.log(modalBackDrop);
// // };
// // onHeaderSignUp();

// const onLogInBtn = async () => {
//     const result = await axios.post(`${url}/auth/login`, { ...user });
//     logInUser = {...result.data.user}
//     localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
//     accesTocken = localStorage.getItem('accessToken');
// }

// // const submitHandler = e => {
// //     e.preventDefault();
// //     refs.authForm.addEventListener('input', gatherInfo);
// //     refs.authFormBtnSignUp.addEventListener('click', onSignUpBtn);
// //     refs.authFormBtnLogIn.addEventListener('click', onLogInBtn);
// // };

// const clsModal = () => {
//     console.log('close');
// };

// // refs.authForm.addEventListener('submit', submitHandler);
// // refs.authForm.addEventListener('input', gatherInfo);
// refs.clsBtn.addEventListener('click', clsModal )

// // ==================SIGN OUT========================

// // const logOutWrapRef = document.querySelector('.logOut__wrap');

// logOutWrapRef.innerHTML = logOut();

// const refsOut = {
//     authFormBtnLogOut: logOutWrapRef.querySelector('.authForm__btn_logOut'),
//     authFormBtnExit: logOutWrapRef.querySelector('.authForm__btn_exit'),
//     authFormBtnCls: logOutWrapRef.querySelector('.authForm__btn_cls'),
// };


// const onLogoutBtn = () => {
//     if (localStorage.getItem('accessToken')) {
//         console.log(localStorage);
//         localStorage.removeItem('accessToken');
//     };
//     clsModal();
// };

// const clsModalOut = () => {
//     console.log('close');
// };

// refsOut.authFormBtnLogOut.addEventListener('click', onLogoutBtn);
// refsOut.authFormBtnExit.addEventListener('click', clsModalOut);
// refsOut.authFormBtnCls.addEventListener('click', clsModalOut);

// // const onHeaderSignUp = (e) => {
// //     // console.log(modalBackDrop());
// //     console.log(e.target);
// // };

// // const onHeaderSignIn = (e) => {
// //     // console.log(modalBackDrop());
// //     console.log(e.target);
// // };


// // headerSignIn.addEventListener('click', onHeaderSignIn);
// // headerSignUp.addEventListener('click', onHeaderSignUp)