import Link from "next/link";



export default function HomePage() {
  return (
    <div>
      <h1>City App</h1>
      <Link href="/cities">Go to cities</Link>
    </div>
  );
}
