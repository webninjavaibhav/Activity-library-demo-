"use client";
import { Divider } from "@mui/material";
import useSignUp from "./hooks/useSignUp";
import Input from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import LogoIcon from "../../../../public/images/logo";
import RadioGroups from "@/components/common/RadioGroups";
import { subjectOptions } from "./constants/constants";

export default function Home() {
  const { formValues, handleChange, handleSubmit, router } = useSignUp();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-3xl w-full py-2 bg-white rounded-lg shadow-lg">
        <div className="flex p-2 items-center justify-center">
          <LogoIcon className="h-[40px]" />
          <h1 className="text-xl text-[#001239] font-bold font-mono tracking-widest">
            EMPOWERED
          </h1>
        </div>
        <Divider className="my-2" />
        <div className="text-center text-pretty p-3">Sign up</div>
        <form
          onSubmit={handleSubmit}
          className="px-6"
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-black mb-4 text-white font-bold hover:bg-black p-2 cursor-pointer flex items-center gap-1"
          >
            Sign Up
          </Button>
          <Divider className="my-2" />
          <div className=" text-center decoration-sky-500/[.33] mb-2">
            Already have an account ?{" "}
            <span
              onClick={() => router.push("login")}
              className=" underline cursor-pointer text-blue-500"
            >
              {" "}
              Sign in{" "}
            </span>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
