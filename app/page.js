import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">MindCare</h1>
          <p className="py-6 text-lg leading-loose">
            Revolutionize your mental well-being with our innovative app,
            offering personalized tools and support for managing stress,
            anxiety, and more. Access therapy resources, track progress, and
            find community in your journey to better mental health
          </p>
          <Link href="/dashboard" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
