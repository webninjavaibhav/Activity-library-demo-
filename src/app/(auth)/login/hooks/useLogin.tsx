import { useRouter } from "next/navigation";
import { useState } from "react";

const useLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [keepSign, setKeepSign] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return {
    username,
    setUsername,
    keepSign,
    setKeepSign,
    router,
    handleSubmit,
  };
};

export default useLogin;
