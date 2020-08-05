const closeModal = (modal) => {
    document.querySelector('body').classList.remove('modal-open')
    document.querySelector('body').style.paddingRight = '0px'
    document.querySelector(`#${modal}`).classList.remove('show')
    // document.querySelector('.modal-backdrop').classList.remove('show')
    //new
    document.querySelector(`#${modal}`).style.display = 'none';
    document.querySelector('.modal-backdrop').remove()
}

export default closeModal

// const closeModal = (modal) => {
   
// }