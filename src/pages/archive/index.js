/**
 * pages/archive.js
 */

import React from "react";
import { Link } from "gatsby";
import { useArchive } from "../../components/useArchive";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Layout } from "../../components/Layout";
import { buildTwitterSearchUrl } from "../../components/build-twitter-search-url";
import SvgTwitterIcon from "../../components/SvgTwitterIcon";
import SvgLogo from "../../components/SvgLogo";

export default function ArchivePage() {
  const { nodes } = useArchive();

  return (
    <Layout>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Archive
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="flex flex-col">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <div className="flex items-center justify-between bg-gray-50">
                    <div
                      style={{ maxWidth: "30ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      Date
                    </div>
                    <div
                      style={{ maxWidth: "20ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      State
                    </div>
                    <div
                      style={{ maxWidth: "20ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      City
                    </div>
                    <div
                      style={{ maxWidth: "20ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      Location
                    </div>
                    <div
                      style={{ maxWidth: "20ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      Attendance
                    </div>
                    <div
                      style={{ maxWidth: "20ch" }}
                      className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                    >
                      Info
                    </div>
                  </div>
                  <div style={{ height: "600px" }}>
                    <AutoSizer>
                      {({ height, width }) => (
                        <List
                          classNameName="List"
                          height={height}
                          itemCount={nodes.length}
                          itemData={nodes}
                          itemSize={50}
                          width={width}
                        >
                          {TableRow}
                        </List>
                      )}
                    </AutoSizer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

function TableRow({ index, data, style }) {
  // get item using index
  let currentItem = data[index];
  return (
    <div
      style={style}
      className={
        index % 2 === 0
          ? "flex items-center justify-between bg-gray-50"
          : "flex items-center justify-between bg-white"
      }
    >
      <div
        style={{ maxWidth: "30ch" }}
        className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        {`${new Date(currentItem.frontmatter.date).toLocaleString()}`}
      </div>
      <div
        style={{ maxWidth: "20ch" }}
        className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        {currentItem.frontmatter.state}
      </div>
      <div
        style={{ maxWidth: "20ch" }}
        className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        {currentItem.frontmatter.city}
      </div>
      <div
        style={{ maxWidth: "20ch" }}
        className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        {currentItem.frontmatter.location}
      </div>
      <div
        style={{ maxWidth: "20ch" }}
        className="w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        {currentItem.frontmatter.attendance}
      </div>
      <div
        style={{ maxWidth: "20ch" }}
        className="flex w-full px-6 py-3 overflow-hidden text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"
      >
        <a
          href={buildTwitterSearchUrl({
            location: currentItem.frontmatter.location,
            city: currentItem.frontmatter.city,
            date: currentItem.frontmatter.date,
          })}
          className="mr-2"
        >
          <SvgTwitterIcon height={"32px"} />
        </a>
        <Link to={currentItem.frontmatter.slug}>
          <SvgLogo height={"32px"} />
        </Link>
      </div>
    </div>
  );
}
