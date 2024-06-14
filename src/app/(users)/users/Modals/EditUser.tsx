"use client";
import { Stack } from "@mui/material";
import Input from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import RadioGroups from "@/components/common/RadioGroups";
import { subjectOptions } from "@/app/(auth)/register/constants/constants";
import useEditUser, { FormProps } from "../hooks/useEditUser";

type EditPorps = {
  user: any;
  updateUser: (e: FormProps, id: string) => void;
  closeModal: (e: string) => void;
};

function EditUser({ user, updateUser, closeModal }: EditPorps) {
  const { formValues, handleChange } = useEditUser(user.profile);

  return (
    <div className="w-full">
      <div className="text-pretty pb-3 ps-6 font-bold text-lg">Edit user</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(formValues, user.id);
        }}
        className="px-6"
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Input
              type="name"
              name="firstName"
              label="First Name"
              value={formValues?.firstName}
              placeholder="First name"
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Last Name"
              name="lastName"
              placeholder="Last name"
              value={formValues?.lastName}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Middle Name"
              name="middleName"
              placeholder="Middle name"
              value={formValues?.middleName}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              label="Primary Email"
              name="email"
              placeholder="Primary email"
              value={formValues?.email}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              label="Secondary Email"
              name="secondEmail"
              placeholder="Secondry email"
              value={formValues?.secondEmail}
              handleInput={handleChange}
            />
          </div>
          <div>
            <RadioGroups
              name="employee"
              label="Currently employed ?"
              value={formValues?.employee}
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
              value={formValues?.address}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="zipcode"
              label="Zip code"
              name="zipcode"
              placeholder="Zip code"
              value={formValues?.zipcode}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Phone Number"
              name="mobilePhone"
              placeholder="Phone number"
              value={formValues?.mobilePhone}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Mother name"
              name="mothername"
              placeholder="Mother name"
              value={formValues?.mothername}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Father name"
              name="fathername"
              placeholder="Father name"
              value={formValues?.fathername}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="City"
              name="city"
              placeholder="City"
              value={formValues?.city}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="Country"
              name="country"
              placeholder="Country"
              value={formValues?.country}
              handleInput={handleChange}
            />
          </div>
          <div>
            <Input
              type="name"
              label="State"
              name="state"
              placeholder="State"
              value={formValues?.state}
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
            color="primary"
            fullWidth
            className="bg-black mb-4 text-white font-bold hover:bg-black p-2 cursor-pointer flex items-center gap-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-black mb-4 text-white font-bold hover:bg-black p-2 cursor-pointer flex items-center gap-1"
          >
            Update
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default EditUser;
