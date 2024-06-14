"use client";
import { IconButton, Stack } from "@mui/material";
import Input from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import RadioGroups from "@/components/common/RadioGroups";
import { subjectOptions } from "@/app/(auth)/register/constants/constants";
import CircularLoader from "@/components/common/Loader/CircularLoader";
import useEditUser, { FormProps } from "../hooks/useEditUser";
import Icons from "@/components/common/Icons";

type EditPorps = {
  user: any;
  updateUser: (e: FormProps, id: string) => void;
  closeModal: (e: string) => void;
  isLoading: boolean;
};

function EditUser({ user, updateUser, closeModal, isLoading }: EditPorps) {
  const { formValues, handleChange } = useEditUser(user.profile);

  return (
    <div className="w-full p-3">
      <div className="flex justify-between">
        <div className="text-pretty pb-3 font-bold text-lg">Edit user</div>
        <IconButton
          onClick={() => closeModal("empty")}
          aria-label="cross"
          color="primary"
          className="bg-blue-100 h-[25px] w-[25px] m-[-10px]"
        >
          <Icons.crossIcon fontSize="small" />
        </IconButton>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(formValues, user.id);
        }}
      >
        <div className=" grid grid-cols-2 gap-4 mb-4">
          <div>
            <Input
              type="name"
              name="firstName"
              label="First name"
              value={formValues.firstName}
              placeholder="First name"
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Last name"
              name="lastName"
              placeholder="Last name"
              value={formValues.lastName}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Middle name"
              name="middleName"
              placeholder="Middle name"
              value={formValues.middleName}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Phone number"
              name="mobilePhone"
              placeholder="Phone number"
              value={formValues.mobilePhone}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Father name"
              name="fathername"
              placeholder="Father name"
              value={formValues.fathername}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Mother name"
              name="mothername"
              placeholder="Mother name"
              value={formValues.mothername}
              handleInput={handleChange}
            />
          </div>

          <div>
            <Input
              type="email"
              label="Primary email"
              name="email"
              placeholder="Primary email"
              value={formValues.email}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              label="Secondary mail"
              name="secondEmail"
              placeholder="Secondry email"
              value={formValues.secondEmail}
              handleInput={handleChange}
            />
          </div>

          <div>
            <Input
              type="zipcode"
              label="Zip code"
              name="zipcode"
              placeholder="Zip code"
              value={formValues.zipcode}
              handleInput={handleChange}
            />
          </div>
          <div>
            <RadioGroups
              name="employee"
              label="Currently employed ?"
              value={formValues.employee}
              options={subjectOptions}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="address"
              label="Address"
              name="address"
              placeholder="Address"
              value={formValues.address}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Country"
              name="country"
              placeholder="Country"
              value={formValues.country}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="State"
              name="state"
              placeholder="State"
              value={formValues.state}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="City"
              name="city"
              placeholder="City"
              value={formValues.city}
              handleInput={handleChange}
            />
          </div>
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
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="bg-black px-4 mb-4 text-white font-bold hover:bg-black p-2 cursor-pointer flex items-center gap-1"
            disabled={isLoading}
          >
            Update
            {isLoading && <CircularLoader />}
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default EditUser;
