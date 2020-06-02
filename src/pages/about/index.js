/**
 * pages/about.js
 */

import React from "react";
import { Layout } from "../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">About</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-0">
            <p className="font-semibold">
              "Darkness cannot drive out darkness; only light can do that. Hate
              cannot drive out hate; only love can do that." - Martin Luther
              King Jr.
            </p>
            <p className="mt-6">
              The purpose of this site is to remember the George Floyd and anti
              police brutality protests.
            </p>
            <p className="mt-6">We will not be silenced. We are done dying.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
