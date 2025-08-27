// Create an instance of Notyf
var notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top'
  },
  dismissible: true
})

const notifyData = sessionStorage.getItem('notify')
if (notifyData) {
  const { type, message } = JSON.parse(notifyData)

  if (type == 'error') {
    notyf.error(message)
  } else if (type == 'success') {
    notyf.success(message)
  }
  sessionStorage.removeItem('notify')
}

const saveNotifyToSessionStorage = (type, message) => {
  sessionStorage.setItem(
    'notify',
    JSON.stringify({
      type: type,
      message: message
    })
  )
}

// articleCreateCategoryForm
const articleCreateCategoryForm = document.querySelector('#articleCreateCategoryForm')
if (articleCreateCategoryForm) {
  const validator = new JustValidate('#articleCreateCategoryForm')

  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Category Name is required'
      }
    ])
    .onSuccess((event) => {
      const name = event.target.name.value
      const parent = event.target.parent.value
      const description = event.target.description.value

      const formData = new FormData()
      formData.append('name', name)
      formData.append('parent', parent)
      formData.append('description', description)

      // Submit the form data using fetch or any other method
      fetch(`/${pathAdmin}/article/category/create`, {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code == 'error') {
            notyf.error(data.message)
          }

          if (data.code == 'success') {
            // notyf.success(data.message)
            saveNotifyToSessionStorage(data.code, data.message)
            location.reload()
          }
        })
    })
}
// End - articleCreateCategoryForm
