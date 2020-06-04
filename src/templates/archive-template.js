import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";
import SvgLeftArrow from "../components/SvgLeftArrow";

export default function ArchiveTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <Link to={"/archive"} className="mr-4">
            <SvgLeftArrow height="2rem" />
          </Link>
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
                  a: (props) => (
                    <a {...props} className="text-brand-2 hover:underline" />
                  ),
                  p: (props) => <p {...props} className="mt-4" />,
                  h1: (props) => <h1 {...props} className="text-2xl" />,
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

export const pageQuery = graphql`
  query ArchiveItemQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        state
        city
        location
        attendance
      }
    }
  }
`;
