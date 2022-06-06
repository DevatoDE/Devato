import { useEffect, useState } from "react"
import InputField from "./InputField.js"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from '@emailjs/browser';
import { Button } from "@nextui-org/react";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_r6oa3hb', 'template_fmzcd2a', values, 'ceKzBbxCLWExIN79W')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="lg:mt-0 lg:mr-45 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-20 text-4xl font-semibold">Senden Sie uns eine Anfrage</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Ihr (Unternehmens-) Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        {/* <SelectField handleChange={handleChange} name="role" label="Betreff" /> */}
        <TextareaField value={values.message} handleChange={handleChange} label="Ihre Nachricht" name="message" />
        <Button type="submit"
        rounded
        ghost
        color="gradient"
          className="mt-10 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Senden <ChevronRightIcon className="w-6 ml-2 float-right" />
        </Button>
      </form>
    </div>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 rounded mb-5 text-center">
    <p>Wir haben Ihre Anfrage erhalten!</p>
  </div>
)

export default Contact