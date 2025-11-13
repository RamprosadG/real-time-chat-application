"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./ui/Input";
import Button from "./ui/Button";

const LoginForm: React.FC = () => {
  const [userNumber, setUserNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userNumber.trim()) {
      alert("Please enter a user number");
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      router.push(`/chat/${userNumber}`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-2xl font-bold">💬</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to ChatApp
          </h1>
          <p className="text-gray-600">Enter your number to join the chat</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="userNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                User Number
              </label>
              <Input
                type="text"
                placeholder="Enter any number"
                value={userNumber}
                onChange={setUserNumber}
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !userNumber.trim()}
              className="w-full py-3 text-lg cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                  Joining...
                </div>
              ) : (
                "Join Chat"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
