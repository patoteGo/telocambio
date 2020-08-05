const closeModal = (modal) => {
    document.querySelector('body').classList.remove('modal-open')
    document.querySelector('body').style.paddingRight = '0px'
    document.querySelector(`#${modal}`).classList.remove('show')
    document.querySelector('.modal-backdrop').classList.remove('show')
}

export default closeModal

// const closeModal = (modal) => {
   
// }