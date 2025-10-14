import {
  BreakLine,
  CodeBlockFormatted,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
  InlineCode,
} from "./utils/Formatters";
import NextPageNavigation from "./NextPageNavigation";

export default function DataCollection() {
  return (
    <div className="md:mt-10 container mx-auto p-6 max-w-3xl">
      <Title>Data Collection & Manipulation</Title>

      <Section>
        <p>
          Urban traffic management and smart mobility solutions increasingly
          depend on open geospatial data to analyze and optimize road networks.
          A key component of the process is understanding the distribution and
          density of traffic signals as they directly affect vehicle flow,
          congestion patterns, and overall road safety. The presented Python
          program is a practical tool that leverages the OpenStreetMap (OSM)
          Overpass API to extract, process, and store the geolocations of
          traffic signals in a structured GeoJSON format. By automating this
          process, it enables researchers, developers, and urban planners to
          integrate real-world traffic signal data into applications such as
          intelligent transport systems (ITS), navigation aids, geospatial
          analysis, and simulation frameworks. Furthermore, the program
          demonstrates the seamless integration of API-driven data collection,
          modern Python libraries like <InlineCode>rich</InlineCode> for
          enhanced console output, and systematic data storage, making it an
          excellent demonstration of how open data and open-source tools can
          contribute to the advancement of smart city technologies.
        </p>

        <BreakLine />
        <SubTitle level={3}>1. Querying the Overpass API</SubTitle>
        <p>
          The code constructs an Overpass query to fetch all nodes tagged as
          traffic signals within a given city boundary.
        </p>
        <CodeBlockFormatted language="python" code={codes[0]} />
        <UnorderedList>
          <Li>
            <InlineCode>area["name:en"="CITY_NAME"]</InlineCode>: limits the
            search area to the city entered by the user.
          </Li>
          <Li>
            <InlineCode>node["highway"="traffic_signals"]</InlineCode>: fetches
            all traffic signal nodes.
          </Li>
          <Li>Output is set to JSON for easier parsing in Python.</Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>2. Making the API Request</SubTitle>
        <p>
          The query is sent via a POST request to the Overpass interpreter API.
        </p>
        <CodeBlockFormatted language="python" code={codes[1]} />
        <p>
          The program checks the HTTP status code. If the request fails, the
          user is notified in red text using{" "}
          <InlineCode>bold_color_print</InlineCode>.
        </p>

        <BreakLine />
        <SubTitle level={3}>3. Parsing the Data</SubTitle>
        <p>
          Once data is received, the program iterates over OSM elements and
          builds GeoJSON features.
        </p>
        <CodeBlockFormatted language="python" code={codes[2]} />
        <p>
          Each traffic signal is represented as a Point geometry with
          longitude/latitude coordinates and associated metadata (
          <InlineCode>tags</InlineCode>).
        </p>

        <BreakLine />
        <SubTitle level={3}>4. Saving as GeoJSON</SubTitle>
        <CodeBlockFormatted language="python" code={codes[3]} />
        <UnorderedList>
          <Li>
            A folder <InlineCode>data/traffic_geojson/</InlineCode> is created
            if it does not exist.
          </Li>
          <Li>
            Output files are named dynamically, e.g.,{" "}
            <InlineCode>chennai_traffic_signals.geojson</InlineCode>.
          </Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>
          5. User Interaction with <InlineCode>rich</InlineCode>
        </SubTitle>
        <p>
          To improve console experience, the program uses the{" "}
          <InlineCode>rich</InlineCode> library for styled outputs and
          interactive prompts.
        </p>
        <CodeBlockFormatted language="python" code={codes[4]} />

        <BreakLine />
        <SubTitle level={3}>6. Program Flow</SubTitle>
        <CodeBlockFormatted language="python" code={codes[5]} />
        <p>
          - User enters a city name. <br />
          - Empty input is rejected. <br />- Data is fetched and stored if
          available.
        </p>

        <BreakLine />
        <SubTitle level={3}>7. GeoJSON to CSV Conversion</SubTitle>
        <p>
          After acquiring GeoJSON data, it can be converted to a CSV for non-GIS
          workflows, machine learning pipelines, or statistical analysis.
        </p>
        <CodeBlockFormatted language="python" code={codes[6]} />

        <BreakLine />
        <SubTitle level={3}>8. Validation & User Safety</SubTitle>
        <CodeBlockFormatted language="python" code={codes[7]} />
        <p>
          Users confirm before conversion to prevent accidental overwrites or
          unintended processing.
        </p>

        <BreakLine />
        <SubTitle level={3}>Summary</SubTitle>
        <p>
          Together, the scripts form a modular workflow:{" "}
          <InlineCode>data acquisition</InlineCode>
          (fetching traffic signals) followed by{" "}
          <InlineCode>data manipulation</InlineCode>
          (GeoJSON to CSV). This enables exploratory data analysis,
          visualization, clustering, and predictive modeling for smart city
          applications.
        </p>
      </Section>
      <NextPageNavigation currentPath="/data-collection" />
    </div>
  );
}

const codes = [
  `query = f"""
[out:json][timeout:300];
area["name:en"="{city_name}"]->.searchArea;
node["highway"="traffic_signals"](area.searchArea);
out body;
>;
out skel qt;
"""`,

  `overpass_url = "http://overpass-api.de/api/interpreter"
response = requests.post(overpass_url, data=query)

if response.status_code != 200:
    bold_color_print(f"Error: HTTP {response.status_code}", "red")
    return`,

  `features = []
for element in data["elements"]:
    if element["type"] == "node":
        features.append({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [element["lon"], element["lat"]],
            },
            "properties": element.get("tags", {}),
        })`,

  `geojson = {
    "type": "FeatureCollection",
    "features": features
}

os.makedirs("data/traffic_geojson", exist_ok=True)
filepath = f"data/traffic_geojson/{city_name.lower()}_traffic_signals.geojson"
with open(filepath, "w") as f:
    json.dump(geojson, f, indent=2)`,

  `console.print(
    Panel(Text("▶ Fetch GeoJSON by City Name", style="bold blue"), expand=False)
)`,

  `def main():
    city_name = bold_input("Enter a city name", "cyan")
    if not city_name:
        bold_color_print("City name cannot be empty.", "red")
        return
    city_name = city_name.strip()
    fetch_traffic_signals(city_name)

if __name__ == "__main__":
    main()`,

  `def convert_geojson_to_csv(geojson_path, csv_dir):
    gdf = gpd.read_file(geojson_path)   # Load GeoJSON
    file_name = geojson_path.split("/")[-1].split(".")[0]

    # Extract coordinates
    gdf["lon"] = gdf.geometry.x
    gdf["lat"] = gdf.geometry.y

    # Save only latitude and longitude
    gdf[["lat", "lon"]].to_csv(csv_dir + f"/{file_name}.csv", index=False)`,

  `verification = bold_input(
    f"Your CSV will be saved as [italic]{geojson_path.split('/')[-1].split('.')[0]}.csv[/italic]. Proceed? (Y/N)",
    color="magenta"
).strip().upper()`,
];
