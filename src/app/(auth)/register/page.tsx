"use client";
import { Divider } from "@mui/material";
import useSignUp from "./hooks/useSignUp";
import Input from "@/components/common/Input";
import LogoIcon from "../../../../public/images/logo";
import { Button } from "@/components/common/Button";
import RadioGroups from "@/components/common/RadioGroups";
import { roleOptions, subjectOptions } from "./constants/constants";

export default function Home() {
  const { formValues, handleChange, handleSubmit, router } = useSignUp();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full py-2 bg-white rounded-lg shadow-lg">
        <div className="flex p-2 items-center justify-center">
          <LogoIcon className="h-[40px]" />
          <h1 className="text-xl text-[#001239] font-bold font-mono tracking-widest">
            EMPOWERED
          </h1>
        </div>
        <Divider className="my-2" />
        <div className="text-center text-pretty p-3">Sign up</div>
        <form onSubmit={handleSubmit} className="px-6">
          <div className="mb-4">
            <Input
              type="name"
              name="username"
              label="First Name"
              value={formValues.username}
              placeholder="First name"
              handleInput={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              type="name"
              label="Last Name"
              name="lastName"
              placeholder="Last name"
              value={formValues.lastName}
              handleInput={handleChange}
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              handleInput={handleChange}
            />
          </div>
          <div className="mb-4">
            <RadioGroups
              name="subject"
              label="Subject taught"
              value={formValues.subject}
              options={subjectOptions}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <RadioGroups
              name="role"
              label="What is your current role in education?"
              value={formValues.role}
              options={roleOptions}
              handleChange={handleChange}
            />
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
