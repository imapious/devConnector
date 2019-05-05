import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5 p-1 text-center">
      Copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
}
