import { SignUp } from "@clerk/nextjs";


export default function signUp() {
  return (
    <SignUp afterSignUpUrl="/completeProfile"/>
  )
}
