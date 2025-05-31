import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import NavItem from "./NavItem"


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <Image 
            src="/images/logo.svg"
            alt="Dwicode AI Logo"
            width={46}
            height={44}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
            <NavItem/>
            <SignedOut>
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar