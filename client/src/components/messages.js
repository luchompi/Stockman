import Swal from 'sweetalert2'

export const successMessage = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        allowEnterKey: false
    })
}

export const errorMessage = (data) => {
    const errorArray = data;
    let errorMessage = ''
    try {
        for (const field in errorArray) {
            if (errorArray.hasOwnProperty(field)) {
                errorMessage += `${field}: ${errorArray[field].join(', ')}\n`;
            }
        }
    } catch (error) {
        errorMessage = errorArray.detail
    }
    return Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}