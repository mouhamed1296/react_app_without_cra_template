import './app.css'
import { Form, FormElement, VRules } from 'sard-form'
import { useForm } from 'react-hook-form'

const App = () => {

  const { handleSubmit, register, formState: {errors} } = useForm({mode: "onBlur"})
  const { Required, Email, MinLength, String } = VRules()
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="app">
     <Form onSubmit={handleSubmit(onSubmit)} className="form">
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

        {
          ...register(
            "username",
            {
              required: Required('Ce champ est requis'),
              minLength: MinLength('Ce champ doit comporter au moins 2 caractères', 2)
            }
          )
        }

      />
      <FormElement
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
        {
          ...register(
            "email",
            {
              required: Required('Ce champ est requis'),
              pattern: Email("Invalide mail adress")
            }
          )
        }
      />
      <FormElement
        type="text"
        name="fullname"
        placeholder="Full Name"
        className="form-input"
        {
          ...register(
            "fullname",
            {
              required: Required('Ce champ est requis'),
              pattern: String("Ce champ n'accepte que des lettre alphabetiques et des espaces", true),
              minLength: MinLength('Ce champ doit comporter au moins 3 caractères', 3)
            }
          )
        }
      />
      <FormElement
        type="text"
        name="job"
        placeholder="Job Title"
        className="form-input"
        {
          ...register(
            "job",
            {
              required: Required('Ce champ est requis'),
              minLength: MinLength('Ce champ doit comporter au moins 5 caractères', 5)
            }
          )
        }
      />
      <FormElement type="button" className="btn">Submit</FormElement>
     </Form>
    </div>
  )
}

export default App