/**
 * pages/index.js
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { searchAndSort } from "../../components/search-and-sort";
import { Layout } from "../../components/Layout";
import { Map } from "../../components/ProtestMap";

export default function DonatePage() {
  return (
    <Layout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Donate</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-0">
            <a href="https://secure.actblue.com/donate/naacp-1">NAACP</a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
