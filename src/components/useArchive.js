import { graphql, useStaticQuery } from "gatsby";

export function useArchive() {
  const {
    allMdx: { nodes },
  } = useStaticQuery(
    graphql`
      query ArchiveQuery {
        allMdx {
          nodes {
            frontmatter {
              slug
              date
              state
              city
              location
              lat
              long
              attendance
            }
          }
        }
      }
    `
  );
  return { nodes };
}
