import { useRouter } from "next/navigation";
import { useState } from "react";

type FormProps = {
  subject: string;
  role: string;
  username: string;
  lastName: string;
  email: string;
};

const useSignUp = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<FormProps>({
    subject: "science",
    role: "principle",
    username: "",
    lastName: "",
    email: "",
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
