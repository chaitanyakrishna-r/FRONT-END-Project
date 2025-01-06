import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialogeBox, setOpenDialogeBox] = useState(false);

  // useEffect(() => {
  //   console.log("From header", user);
  // });

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),

    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialogeBox(false);
        window.location.reload();
      });
  };
  return (
    <div className="flex justify-between p-3 px-5 items-center">
      <a href="/">
        <img src="/logo.svg" alt="company-logo" />
      </a>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/my-trip">
              <Button variant="outline" className="rounded-full">
                My Trip
              </Button>
            </a>
            {location.pathname !== "/create-trip" && (
              <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                <FaPlus></FaPlus> Create Trip
              </Button>
            </a>
            )}
           
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Log Out
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => {
              setOpenDialogeBox(true);
            }}
          >
            Sign in{" "}
          </Button>
        )}
        <Dialog open={openDialogeBox}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg" />
                <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
                <p>Sign in to the App with Google authentication securely</p>
                <Button
                  onClick={login}
                  className="w-full mt-5 flex gap-5 items-center"
                >
                  <FaGoogle className="h-7 w-7" />
                  Sign in With Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
