import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UsersTable from "../components/UsersTable";
import UsersSkeleton from "../components/UsersSkeleton";
import { User } from "../types";

async function fetchUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function UsersPage() {
  const usersPromise = fetchUsers();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users List</h1>
        <Suspense fallback={<UsersSkeleton />}>
          <UsersTable usersPromise={usersPromise} />{" "}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
