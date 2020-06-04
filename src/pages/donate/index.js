/**
 * pages/index.js
 */

import React from "react";
import SEO from "../../components/SEO";
import { Layout } from "../../components/Layout";

export default function DonatePage() {
  return (
    <Layout>
      <SEO title="Donate" />
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Donate</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-0">
            <a
              href="https://secure.actblue.com/donate/naacp-1"
              className="text-purple-700"
            >
              NAACP
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
