"use client";
import { useToast } from "./ToastProvider";

export default function Toast() {
  const { toast } = useToast();

  if (!toast.show) return null;

  return (
    <div
      className={`absolute top-0 right-0 m-4 p-4 roudned shadow-lg text-white bg-green-500 transition duration-500`}
    >
      <h2>{toast.title}</h2>
      <p>{toast.message}</p>
    </div>
  );
}
