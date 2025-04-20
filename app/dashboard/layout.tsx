import Link from "next/link";
// import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/SignOutButton";
import Logo from "@/components/common/logo";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="px-24 py-6">
      <nav className="w-full flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo />
        </Link>

        <SignOutButton />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
