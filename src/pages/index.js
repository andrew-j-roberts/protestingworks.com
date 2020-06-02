/**
 * pages/index.js
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { searchAndSort } from "../components/search-and-sort";
import { Layout } from "../components/Layout";
import { Map } from "../components/Map";

export default function IndexPage() {
  return (
    <Layout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Map view of archive
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-0">
            <Map />
          </div>
        </div>
      </main>
    </Layout>
  );
}

function useQueryParamState(searchParamName) {
  const [value, setValue] = React.useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    const searchParams = new URL(window.location).searchParams;
    if (searchParams.has(searchParamName)) {
      return searchParams.get(searchParamName);
    } else {
      return "";
    }
  });

  React.useEffect(() => {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set(searchParamName, value);
    if (value) {
      window.history.replaceState(window.history.state, "", newUrl);
    } else {
      newUrl.searchParams.delete(searchParamName);
      window.history.replaceState(window.history.state, "", newUrl);
    }
  }, [searchParamName, value]);

  return [value, setValue];
}
