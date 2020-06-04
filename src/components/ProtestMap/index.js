import React from "react";
import { Link } from "gatsby";
import { useArchive } from "../useArchive";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { buildTwitterSearchUrl } from "../build-twitter-search-url";
import SvgTwitterIcon from "../SvgTwitterIcon";
import SvgLogo from "../SvgLogo";

const CENTER_OF_UNITED_STATES = [39.828, -98.579];

export function ProtestMap() {
  const { nodes } = useArchive();

  if (typeof window !== undefined) {
    return (
      <Map
        className="w-full"
        style={{ height: "600px" }}
        center={CENTER_OF_UNITED_STATES}
        zoom={4}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {nodes.map((archiveItem, index) => {
          return (
            <Marker
              position={[
                archiveItem.frontmatter.lat,
                archiveItem.frontmatter.long,
              ]}
            >
              <Popup>
                <h3>{`${new Date(
                  archiveItem.frontmatter.date
                ).toLocaleString()} @ ${archiveItem.frontmatter.location}`}</h3>
                <div className="flex">
                  <a
                    href={buildTwitterSearchUrl({
                      location: archiveItem.frontmatter.location,
                      date: archiveItem.frontmatter.date,
                    })}
                    className="mr-2"
                  >
                    <SvgTwitterIcon height={"32px"} />
                  </a>
                  <Link to={archiveItem.frontmatter.slug}>
                    <SvgLogo height={"32px"} />
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }

  return null;
}
