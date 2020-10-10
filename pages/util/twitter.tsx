import Logo from "components/Logo";
import { useRouter } from "next/dist/client/router";
import React from "react";

const twitter: React.FC = () => {
  const router = useRouter();
  const title = router.query.title;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between p-4">
      <div />
      {title && (
        <h1 className="font-mono text-4xl font-bold text-center">{title}</h1>
      )}
      <Logo />
    </div>
  );
};

export default twitter;
