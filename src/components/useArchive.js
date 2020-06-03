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
              attendance
              date
              lat
              long
              title
            }
          }
        }
      }
    `
  );
  return { nodes };
}
