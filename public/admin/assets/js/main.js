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
          console.log(data)
        })
    })
}
// End - articleCreateCategoryForm
