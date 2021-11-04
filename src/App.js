import './app.css'
import { Form, FormElement } from 'sard-form'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className="app">
     <Form onSubmit={handleSubmit} className="form">
       <FormElement
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        className="form-input"
        label={{
          content: "Username"
        }}
        wrap={{
          in: "div",
          className: "form-group"
        }}
      />
      <FormElement
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
      />
      <FormElement
        type="text"
        name="fullname"
        placeholder="Full Name"
        className="form-input"
      />
      <FormElement
        type="text"
        name="job"
        placeholder="Job Title"
        className="form-input"
      />
      <FormElement type="button" className="btn">Submit</FormElement>
     </Form>
    </div>
  )
}

export default App