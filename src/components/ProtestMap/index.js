import React from "react";
import { useArchive } from "../useArchive";
import { buildTwitterSearchUrl } from "../build-twitter-search-url";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./leaflet.css";
// fixed marker missing bug, found here:  https://github.com/PaulLeCam/react-leaflet/issues/453
import L from "leaflet";
import SvgTwitterIcon from "../SvgTwitterIcon";
import SvgLogo from "../SvgLogo";
import { Link } from "gatsby";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
// </BugFix>

const CENTER_OF_UNITED_STATES = [39.828, -98.579];

export function ProtestMap() {
  const { nodes } = useArchive();
  return (
    <Map center={CENTER_OF_UNITED_STATES} zoom={4}>
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
