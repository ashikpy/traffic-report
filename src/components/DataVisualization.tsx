import {
  Bold,
  BreakLine,
  CodeBlockFormatted,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
} from "./utils/Formatters";
import NextPageNavigation from "./NextPageNavigation";

export default function DataVisualization() {
  return (
    <div className="md:mt-10 container mx-auto p-6 max-w-3xl">
      <Title>Data Visualization</Title>

      <Section>
        <p>
          Visualization transforms tabular CSV data into{" "}
          <Bold>interactive geographic maps</Bold>. These stages provide both{" "}
          <Bold>micro-level inspection</Bold> of individual signals and
          <Bold>macro-level density analysis</Bold>, allowing comprehensive
          exploration of urban traffic infrastructure.
        </p>

        <BreakLine />
        <SubTitle level={3}>
          Scatter Plot Visualization (CSV to Interactive Map)
        </SubTitle>
        <p>
          The scatter plot component focuses on plotting individual traffic
          signals on an interactive city map using Plotly.
        </p>

        <SubTitle level={4}>1. Region Selection</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`input_file, region_name = csv_region_selector()`}
        />
        <p>
          Enables the user to select which CSV dataset (city/region) to
          visualize.
        </p>

        <SubTitle level={4}>2. Data Loading</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`df = pd.read_csv(input_file)`}
        />
        <p>
          Reads latitude and longitude columns and preserves traffic light IDs
          (if available) for hover tooltips.
        </p>

        <SubTitle level={4}>3. Map Positioning</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`zoom, center = zoom_center(lons=df["lon"].tolist(), lats=df["lat"].tolist())`}
        />
        <p>Automatically adjusts zoom level and map center to fit the data.</p>

        <SubTitle level={4}>4. Creating the Scatter Map</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`
fig = px.scatter_map(
    df,
    lat="lat",
    lon="lon",
    hover_name="id" if "id" in df.columns else None,
    center=center,
    zoom=zoom,
    map_style="open-street-map",
    title=f"Traffic Lights in {region_name}"
)
`}
        />

        <SubTitle level={4}>5. Styling and Display</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`fig.update_traces(marker=dict(size=5, color="blue", opacity=0.5))\nfig.show()`}
        />
        <p>
          Semi-transparent markers reduce clutter. Users can pan, zoom, and
          explore interactively.
        </p>

        <BreakLine />
        <SubTitle level={3}>Heatmap Visualization (Density Analysis)</SubTitle>
        <p>
          Scatter plots can become crowded in dense areas. Heatmaps capture
          signal concentration and density clusters.
        </p>

        <SubTitle level={4}>1. Region and User Parameters</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`
radius = IntPrompt.ask("Enter the radius for the heatmap", default=10)
opacity = float(Prompt.ask("Enter the opacity for the heatmap (0.0 - 1.0)", default="1.0"))
`}
        />
        <p>Radius controls spread; opacity allows customization.</p>

        <SubTitle level={4}>2. Data Preparation</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`
df = pd.read_csv(input_file)
if 'intensity' not in df.columns:
    df['intensity'] = 1
`}
        />
        <p>
          Ensures each traffic light contributes to density and leaves room for
          future weighting.
        </p>

        <SubTitle level={4}>3. Automatic Zoom and Center</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`zoom, center = zoom_center(df['lon'].tolist(), df['lat'].tolist())`}
        />

        <SubTitle level={4}>4. Creating the Heatmap</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`
fig = px.density_map(
    df,
    lat='lat',
    lon='lon',
    z='intensity',
    radius=radius,
    center=center,
    zoom=zoom,
    map_style='open-street-map',
    color_continuous_scale='rainbow',
    title=f'Density Map of Traffic Signals in {region_name}'
)
`}
        />

        <SubTitle level={4}>5. Final Display</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`fig.update_traces(opacity=opacity)\nfig.show()`}
        />
        <p>Generates an interactive density map for urban signal analysis.</p>

        <BreakLine />
        <SubTitle level={3}>Role of Visualization in the Framework</SubTitle>
        <UnorderedList>
          <Li>Acquisition → Traffic signals fetched from OSM → GeoJSON.</Li>
          <Li>Manipulation → GeoJSON converted to tabular CSV.</Li>
          <Li>
            Visualization (Scatter) → Precise spatial distribution of signals.
          </Li>
          <Li>
            Visualization (Heatmap) → Aggregated density analysis for hotspots.
          </Li>
        </UnorderedList>

        <p>
          Together, scatter plots and heatmaps provide a{" "}
          <Bold>dual strategy</Bold>: micro-level clarity to inspect individual
          signals and macro-level insights to identify dense clusters and sparse
          zones, strengthening urban planning, traffic flow optimization, and
          smart mobility solutions.
        </p>
      </Section>
      <NextPageNavigation currentPath="/data-visualization" />
    </div>
  );
}
