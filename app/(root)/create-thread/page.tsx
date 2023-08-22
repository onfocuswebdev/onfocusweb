import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <div className='mx-auto flex w-1/2 flex-col justify-start my-10'>
        <h1 className="font-extrabold text-4xl">Request a new Project</h1>
      </div>

      <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;