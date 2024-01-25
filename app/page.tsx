"use client";
import { useToast } from "@/components/ToastProvider";
import Image from "next/image";

export default function Home() {
  const { showToast } = useToast();
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <button onClick={() => showToast("message", "title", true)} className="">
        button
      </button>
    </div>
  );
}
