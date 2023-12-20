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


export const confirmMessage = (title, message, confirmButtonText, cancelButtonText, callback) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    }).then((result) => {
        return result.isConfirmed ? callback() : false
    })
}

export const infoMessage = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'info',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
}

export const questionMessageForPreventLogout = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        confirmButtonText: "Sí",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timer: 8000,
        timerProgressBar: true,
    }).then((result) => {
        return result.isConfirmed
    })
}

