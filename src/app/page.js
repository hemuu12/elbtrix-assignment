import Image from "next/image";
import React, { Suspense } from "react";

// Lazy load the components
const HeroComponent = React.lazy(() => import("./Components/HeroComponent"));
const FeaturesComponent = React.lazy(() => import("./Components/FeaturesComponent"));
const IngredientComponent = React.lazy(() => import("./Components/IngredientComponent"));
const StatComponent = React.lazy(() => import("./Components/StatComponent"));
const BlogComponent = React.lazy(() => import("./Components/BlogComponent"));
const Footer = React.lazy(() => import("./Components/Footer"));
const BottomBanner = React.lazy(() => import("./Components/BottomBanner"));

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen">
      <header className="py-6 px-16">
        <Image width={250} height={250} src="https://ik.imagekit.io/balaharisankar/elbrit/elbrit-logo.png" alt="Elbrit" loading="lazy" />
      </header>
      <main>
        {/* Wrap components with Suspense to handle fallback during lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <HeroComponent />
          <FeaturesComponent />
          <IngredientComponent />
          <BlogComponent />
          <BottomBanner />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
