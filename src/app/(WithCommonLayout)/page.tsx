/* eslint-disable react/no-unescaped-entities */

import FeaturedClass from "./_component/FeaturedClass";
import KnowUs from "./_component/KnowUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <KnowUs />
      <FeaturedClass />
    </div>
  );
}
