import Link from "next/link";

export default function F1() {
  return (
    <div>
      F1 Page <Link href={"/F1/F2"}>F2</Link>
    </div>
  );
}
