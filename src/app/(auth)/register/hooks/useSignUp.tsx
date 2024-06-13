import { useRouter } from "next/navigation";
import { useState } from "react";

type FormProps = {
  firstName: string;
  lastName: string;
  middleName: string;
  Sex: string;
  Email: string;
  secondEmail: string;
  employee: string | number | boolean; // boolean
  address: string;
  zipcode: string;
  Martialstatus: string;
  mothername: string;
  fathername: string;
  city: string;
  country: string;
  state: string;
};

const useSignUp = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormProps>({
    firstName: "",
    lastName: "",
    middleName: "",
    Sex: "",
    Email: "",
    secondEmail: "",
    employee: "", // boolean
    address: "",
    zipcode: "",
    Martialstatus: "",
    mothername: "",
    fathername: "",
    city: "",
    country: "",
    state: "",
  });

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
  };

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
    handleSubmit,
    router,
  };
};

export default useSignUp;
