const closeModal = (modal) => {
    document.querySelector('body').classList.remove('modal-open')
    document.querySelector('body').style.paddingRight = '0px'
    document.querySelector(`#${modal}`).remove()
    document.querySelector('.modal-backdrop').remove()
}

export default closeModal

// const closeModal = (modal) => {
   
// }