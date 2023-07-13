const fields = {
    name: {
        label: 'Name',
        type: "text",
        name: "name",
        placeholder: "Enter your name",
        required: true,
    },
    birthday: {
        label: 'Birthday',
        type: "date",
        name: "birthday",
        placeholder: "25/08/1995",
        required: true,
    },
    email: {
        label: 'Email',
        type: "email",
        name: "email",
        placeholder: "Enter email",
        required: true,
    },
    phone: {
        label: 'Phone',
        type: "tel",
        name: "phone",
        placeholder: "38 (097) 256 34 77",
        required: true,
    },
    skype: {
        label: 'Skype',
        type: "tel",
        name: "skype",
        placeholder: "Add a skype number",
        required: true,
    },
}

export default fields;