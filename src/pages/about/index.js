/**
 * pages/about.js
 */

import React from "react";
import SEO from "../../components/SEO";
import { Layout } from "../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
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
              The purpose of this site is to preserve and index the protests
              against police brutality that were sparked by George Floyd's
              death.
            </p>
            <p className="mt-6">
              To prevent any conflicts of interest with on-going protest
              activity, protests will not be posted to this site until at least
              one full day after they occur.
            </p>
            <p className="mt-6">
              We will not be silenced, and we will not forget.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
