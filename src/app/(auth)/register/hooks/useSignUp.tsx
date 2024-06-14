import { useRouter } from "next/navigation";
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

const initialValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  Sex: "",
  email: "",
  secondEmail: "",
  employee: false,
  address: "",
  zipcode: "",
  mobilePhone: "",
  mothername: "",
  fathername: "",
  city: "",
  country: "",
  state: "",
  login: "",
};

const useSignUp = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormProps>(initialValues);

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    formValues.login = formValues.email;
    const f1 = {
      profile: {
        ...formValues,
      },
    };

    try {
      const response = await fetch("api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(f1),
      });
      const data = await response.json();
      if (data.status === 200) {
        alert(data.message);
        setFormValues(initialValues);
      } else {
        alert(data.message);
      }
    } catch (err: any) {
      alert(err | err.message);
    }
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
