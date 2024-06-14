"use client";

import { Button } from "@/components/common/Button";
import Icons from "@/components/common/Icons";
import CircularLoader from "@/components/common/Loader/CircularLoader";
import { IconButton, Stack } from "@mui/material";

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
    <div className="text-center p-2">
      <div className="flex float-end">
        <IconButton
          onClick={() => closeModal("empty")}
          aria-label="cross"
          color="primary"
          className="bg-blue-100 h-[25px] w-[25px] m-[-10px]"
        >
          <Icons.crossIcon fontSize="small" />
        </IconButton>
      </div>
      <IconButton
        aria-label="fingerprint"
        color="error"
        className="bg-red-100"
      >
        <Icons.warning />
      </IconButton>
      <div className="text-xl font-bold my-2">Delete User</div>
      <div className="">
        You are going to delete the <br />
        <span className=" font-bold text-red-500 text-lg">
          {`"${user.profile.firstName}  ${user.profile.lastName}"`}
        </span>
        user . Are you sure ?
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
          No, Keep It.
        </Button>
        <Button
          onClick={() => deleteUser(user.id)}
          variant="contained"
          color="error"
          endIcon={isLoading ? <CircularLoader /> : <Icons.delete />}
          disabled={isLoading}
        >
          Yes, Delete!
        </Button>
      </Stack>
    </div>
  );
};

export default DeleteUser;
