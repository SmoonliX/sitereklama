const openDialogBtn = document.querySelector('.openDialogBtn');
const closeDialogBtn = document.querySelector('.closeDialogBtn');
const dialog1 = document.querySelector('#myDialog');

const openDialogBtn2 = document.querySelector('.openDialogBtn2');
const closeDialogBtn2 = document.querySelector('.closeDialogBtn2');
const dialog2 = document.querySelector('#myDialog2');

const openDialogBtn3 = document.querySelector('.openDialogBtn3');
const closeDialogBtn3 = document.querySelector('.closeDialogBtn3');
const dialog3 = document.querySelector('#myDialog3');


openDialogBtn.addEventListener('click', () => {
    dialog1.showModal();
});


closeDialogBtn.addEventListener('click', () => {
    dialog1.close();
});


openDialogBtn2.addEventListener('click', () => {
    dialog2.showModal();
});


closeDialogBtn2.addEventListener('click', () => {
    dialog2.close();
});


openDialogBtn3.addEventListener('click', () => {
    dialog3.showModal();
});


closeDialogBtn3.addEventListener('click', () => {
    dialog3.close();
});
