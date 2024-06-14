"use client";

import { Button } from "@/components/common/Button";
import Icons from "@/components/common/Icons";
import { Stack } from "@mui/material";

type DeleteProps = {
  user: any;
  closeModal: (e: string) => void;
  deleteUser: (e: string) => void;
  isLoading: boolean;
};

const DeleteUser = ({
  user,
  closeModal,
  deleteUser,
  isLoading,
}: DeleteProps) => {
  return (
    <>
      <div className="">
        Are you sure you want to delete
        <span className=" font-bold text-red-500 text-lg">
          {`  ${user.profile.firstName}  ${user.profile.lastName}`}
        </span>
      </div>
      <Stack
        direction="row"
        justifyContent="end"
        spacing={2}
        mt={4}
      >
        <Button
          onClick={() => closeModal("empty")}
          variant="outlined"
          color="primary"
          endIcon={<Icons.cancel />}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          onClick={() => deleteUser(user.id)}
          variant="contained"
          color="error"
          startIcon={<Icons.delete />}
          disabled={isLoading}
        >
          Delete
        </Button>
      </Stack>
    </>
  );
};

export default DeleteUser;
