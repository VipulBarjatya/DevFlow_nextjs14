import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();

  
  if (!user) return <div>Not signed in</div>;
  return <div>Hello {user?.firstName}</div>;
};

export default page;
