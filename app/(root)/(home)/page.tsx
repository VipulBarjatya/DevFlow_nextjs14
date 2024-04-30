import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = async () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
