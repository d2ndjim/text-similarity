"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch(err) {
      // toast({
      //   title: "Error",
      //   message: "Please try again later",
      //   type: "error",
      // })
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
