import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="shadow-lg rounded-xl p-4 bg-white max-w-md w-full">
        <SignIn routing="path" path="/sign-in" />
      </div>
    </div>
  );
}
