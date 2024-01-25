"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ToastProps {
  message: string;
  title: string;
  show: boolean;
}

interface ToastContextProps {
  toast: ToastProps;
  showToast: (message: string, title: string, show: boolean) => void;
}

const ToastContext = createContext<ToastContextProps>({
  toast: { message: "", title: "", show: false },
  showToast: () => {},
});

export function useToast() {
  const context = useContext(ToastContext);
  return context;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastProps>({
    message: "",
    title: "",
    show: false,
  });

  function showToast(message: string, title: string, show: boolean) {
    setToast({ title, message, show: true });
    setTimeout(() => setToast({ message: "", title: "", show: false }), 3000);
  }

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}
