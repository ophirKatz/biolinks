import React from "react";

export default function Auth() {
  return (
    <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground gap-4">
      <input
        className="w-full flex justify-center items-center font-bold h-16 text-lg bg-white/30 rounded-lg text-white px-2"
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      <div className="w-full flex items-center font-bold h-16 text-lg rounded-lg text-white">
        <span className="h-full flex-1 flex justify-center items-center bg-white/10 rounded-s-lg">
          Biolinks\
        </span>
        <input
          className="h-full flex-1 bg-white/30 rounded-e-lg flex items-center justify-center px-2"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
      </div>
    </form>
  );
}
