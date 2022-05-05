const formData = {
  components: [
    {
      type: "textfield",
      key: "firstName",
      label: "First Name",
      validate: {
        required: true
      }
    },
    {
      type: "textfield",
      key: "lastName",
      label: "Last Name"
    },
    {
      type: "email",
      key: "email",
      label: "Email"
    },
    {
      type: "button",
      key: "submit",
      label: "Submit"
    }
  ]
};

export default formData;