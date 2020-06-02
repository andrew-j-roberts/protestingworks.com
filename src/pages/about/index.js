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
            <p>
              We will not be silenced. Never forget the protests that George
              Floyd's death and 400 years of oppression set off.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
