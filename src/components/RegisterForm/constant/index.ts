export const inputFields: Record<string, string>[] = [
    {
        registerName: 'username',
        label: 'Username',
        type: 'text',
        name: 'username',
        errorMessage: 'This field is required',
        pattern: '                                                                                                                                                                                                                                                                                                 '
    },
    {
        registerName: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
        errorMessage: 'This field is required',
        pattern: '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    },
    {
        registerName: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        errorMessage: 'This field is required',
        pattern: ''
    },
]