"use client";
import { useEffect, useState } from "react";
import { FormProps } from "./useEditUser";
import toast from "react-hot-toast";

type NTS = null | boolean | string | number | undefined;

export type UserInfoProp = {
  id: string;
  status: string;
  created: string;
  activated: NTS;
  statusChanged: NTS;
  lastLogin: NTS;
  lastUpdated: string;
  passwordChanged: NTS;
  type: {
    id: string;
  };
  profile: FormProps;
  credentials: {
    provider: {
      type: string;
      name: string;
    };
  };
  _links: {
    self: {
      href: string;
    };
  };
};

const useUsers = () => {
  const [data, setData] = useState<UserInfoProp[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<string>("empty");
  const [userInfo, setUserInfo] = useState<UserInfoProp>();

  /* Get all the user list */
  const getAllUsers = async () => {
    try {
      const response = await fetch("api/get-users", {
        method: "GET",
      });
      const data = await response.json();
      setData(data.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // To delete the single user
  const deleteUser = async (id: string) => {
    setIsFetching(true);
    try {
      const response = await fetch(`api/delete-user/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.status === 200) {
        toast.success(data.message);
        await getAllUsers();
        setOpenModal("empty");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong !");
    } finally {
      setIsFetching(false);
    }
  };

  // handle modal state
  const handleModal = (e: string) => setOpenModal(e);

  // to update the user
  const updateUserInfo = async (user: FormProps, id: string) => {
    const formate = {
      profile: {
        ...user,
      },
    };

    let f1 = { data: formate, id: id };

    try {
      const response = await fetch(`api/update-user`, {
        method: "POST",
        body: JSON.stringify(f1),
      });
      const data = await response.json();
      if (data.status === 200) {
        toast.success(data.message);
        await getAllUsers();
        setOpenModal("empty");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("something went wrong!");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllUsers();
  }, []);

  return {
    data,
    loading,
    error,
    openModal,
    handleModal,
    userInfo,
    setUserInfo,
    deleteUser,
    updateUserInfo,
    isFetching,
  };
};

export default useUsers;
