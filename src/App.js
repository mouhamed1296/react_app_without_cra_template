import './app.css'
import { _Object } from './Object'
import { Form, FormElement, VRules} from 'sard-form'
import { ShowErrorMessage } from './ShowErrorMessage'
import { useForm } from 'react-hook-form'

const App = () => {

  const { handleSubmit, register, formState: {errors} } = useForm({mode: "onBlur"})
  const { Required, Email, MinLength, String } = VRules()
  console.log(errors);
  const userInfo = {
    name:"John",
    age:30,
    car:null,
    job: "Developer",
    address: "Dakar",
    interest: {
      music: ["rnb", "rap"],
      sports: ["football", "basketball"]
    }
  }
  
  const users = [
    {
      name:"John",
      age:30,
      car:null,
      job: "Developer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"]
      }
    },
    {
      name:"Jane",
      age:20,
      car:null,
      job: "attorney",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"]
      }
    },
    {
      name:"Moussa",
      age:26,
      car:null,
      job: "plice officer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap", "trap"],
        sports: ["basketball", "handball"]
      }
    }
  ]
  const usersO = {
    1: {
      name:"John",
      age:30,
      car:null,
      job: "Developer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"]
      }
    },
    2: {
      name:"Jane",
      age:20,
      car:null,
      job: "attorney",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"]
      }
    },
    3: {
      name:"Moussa",
      age:26,
      car:null,
      job: "plice officer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap", "trap"],
        sports: ["basketball", "handball"]
      }
    }
  }

  console.log(Object.entries(usersO))
  console.log(_Object.getFirstEntry(userInfo));
  console.table(_Object.getLastEntry(userInfo));
  console.log(_Object.getEntry(userInfo, 4));
  console.log(_Object.getEntries(userInfo, 1, 3));
  console.log(_Object.isEmpty(userInfo));
  console.log(_Object.toMap(userInfo));
  console.log(_Object.filter(userInfo, (info) => `${info}`.includes('D')))
  console.time("array");
  (() => { console.log(_Object.filter(users, (user) => user.interest.sports.includes("football")))})()
  console.timeEnd("array");
  console.time("objet");
  (() => { console.log(_Object.filter(usersO, (user) => user.interest.sports.includes("football")))})()
  console.timeEnd("objet");
  console.log(_Object.map(userInfo, (info) => info+1))

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
        label="Username"
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
        onError={[
          errors.username,
          <ShowErrorMessage
            message={errors.username && errors.username.message}
            className="error"
          />
        ]}

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
        onError={[
          errors.email,
          <ShowErrorMessage message={errors.email && errors.email.message} className="error" />
        ]}
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
        onError={[
          errors.fullname,
          <ShowErrorMessage message={errors.fullname && errors.fullname.message} className="error" />
        ]}
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
              pattern: String("Ce champ n'accepte que des lettre alphabetiques et des espaces", true),
              minLength: MinLength('Ce champ doit comporter au moins 5 caractères', 5)
            }
          )
        }
        onError={[
          errors.job,
          <ShowErrorMessage message={errors.job && errors.job.message} className="error" />
        ]}
      />
      <FormElement type="button" className="btn">Submit</FormElement>
     </Form>
    </div>
  )
}

export default App