import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";

export default function ArchiveTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Archive
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-0">
            <article>
              <MDXProvider
                components={{
                  p: (props) => <p {...props} className="mt-4" />,
                }}
              >
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
