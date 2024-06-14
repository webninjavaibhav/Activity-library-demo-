import { useState } from "react";

export type FormProps = {
  firstName: string;
  lastName: string;
  middleName: string;
  Sex: string;
  email: string;
  secondEmail: string;
  employee: string | number | boolean;
  address: string;
  zipcode: string;
  mobilePhone: string;
  mothername: string;
  fathername: string;
  city: string;
  country: string;
  state: string;
  login: string;
};

const useEditUser = (user: FormProps) => {
  const [formValues, setFormValues] = useState<FormProps>(user);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    formValues,
    handleChange,
  };
};

export default useEditUser;
