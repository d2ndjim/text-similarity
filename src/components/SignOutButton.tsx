"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (err) {
      toast({
        title: "Error",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignOutButton;
