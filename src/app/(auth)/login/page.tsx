"use client";
import { Button } from "@/components/common/Button";
import LogoIcon from "../../../../public/images/logo";
import { Checkbox, Divider, FormControlLabel, FormGroup } from "@mui/material";
import Input from "@/components/common/Input";
import useLogin from "./hooks/useLogin";

export default function Home() {
  const { username, setUsername, keepSign, setKeepSign, router, handleSubmit } =
    useLogin();

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
        <div className="text-center text-pretty p-2">Sign In</div>
        <form onSubmit={handleSubmit} className="px-6">
          <div className="mb-2">
            <Input
              name="username"
              type="username"
              label="Username"
              value={username}
              placeholder="Username"
              handleInput={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <FormGroup>
              <FormControlLabel
                value={keepSign}
                onClick={() => setKeepSign(!keepSign)}
                required
                control={<Checkbox />}
                label="Keep me signed in"
              />
            </FormGroup>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-black mb-4 text-white font-bold hover:bg-black p-2 cursor-pointer flex items-center gap-1"
          >
            Next
          </Button>
          <span className=" underline cursor-pointer text-blue-500">Help</span>
          <Divider className="my-2" />
          <div className=" text-center decoration-sky-500/[.33] mb-2">
            Don't have an account ?
            <span
              onClick={() => router.push("/register")}
              className="underline cursor-pointer text-blue-500"
            >
              {"  "} Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
