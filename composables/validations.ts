const useValidations = () => {
    const isErrorMessageEmpty = errorMessages =>
        Object.values(errorMessages).every(
            message => message === null || message === ''
        )

    const validateRequired = (inputValue: string, label: string = '') => {
        return inputValue === null ||
            inputValue === undefined ||
            inputValue === ''
            ? `${label || 'Input'} is required`
            : ''
    }

    const validateImageLength = (images: Object, length: number = 1) => {
        return images?.length < length ? `Upload at least ${length} image` : ''
    }

    const validateEmail = (inputValue: string) => {
        if (!inputValue) return validateRequired(inputValue, 'Email')
        const re = /\S+@\S+\.\S+/
        return !re.test(inputValue) ? 'Email is invalid' : ''
    }

    const validatePhoneNumber = (inputValue: string) => {
        if (!inputValue) return validateRequired(inputValue, 'Contact Number')
        const re = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/
        return !re.test(inputValue) ? 'Phone number is invalid' : ''
    }

    const validatePassword = (inputValue: string) => {
        if (!inputValue) return validateRequired(inputValue, 'Password')
        return inputValue.length < 6 ? 'Minimum characters is 6' : ''
    }

    const validateConfirmPassword = (
        password: string,
        confirmPassword: string
    ) => {
        if (!confirmPassword)
            return validateRequired(confirmPassword, 'Confirm password')
        return password !== confirmPassword
            ? 'Password is not matching the confirmed password'
            : ''
    }

    const validateTwitterHandle = (inputValue: string) => {
        if (!inputValue) return ''
        const regex = /^@?(\w){1,15}$/
        return !regex.test(inputValue) ? 'Twitter handle is invalid' : ''
    }

    const validateFacebookUrl = (inputValue: string) => {
        if (!inputValue) return ''
        const regex =
            /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
        return !regex.test(inputValue) ? 'Facebook URL is invalid' : ''
    }

    const validateInstagramUsername = (inputValue: string) => {
        if (!inputValue) return ''
        const regex =
            /(?:^|[^\w])(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/
        return !regex.test(inputValue) ? 'Intagram username is invalid' : ''
    }

    return {
        validateEmail,
        validatePassword,
        validateConfirmPassword,
        validateInstagramUsername,
        validateFacebookUrl,
        validateTwitterHandle,
        validateRequired,
        isErrorMessageEmpty,
        validateImageLength,
        validatePhoneNumber
    }
}

export default useValidations
