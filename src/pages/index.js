/**
 * pages/index.js
 */

import React from "react";
import { Layout } from "../components/Layout";
import { ProtestMap } from "../components/ProtestMap";

export default function IndexPage() {
  return (
    <Layout>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Map view of protest archive
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <ProtestMap />
          </div>
        </div>
      </main>
    </Layout>
  );
}
