import {
  Bold,
  BreakLine,
  CodeBlockFormatted,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
  InlineCode,
} from "./utils/Formatters";

export default function DataAnalytics() {
  return (
    <div className="md:mt-10 container mx-auto p-6 max-w-3xl">
      <Title>Data Analytics & Clustering</Title>

      <Section>
        <p>
          Urban traffic management increasingly benefits from{" "}
          <Bold>data-driven insights</Bold>
          into signal placement and congestion patterns. Beyond mapping traffic
          lights, understanding
          <Bold> spatial clusters</Bold> can identify dense intersections,
          potential bottlenecks, or zones requiring optimization. This Python
          program exemplifies a <Bold>spatial data analysis pipeline</Bold>,
          leveraging <InlineCode>DBSCAN clustering</InlineCode> on CSV traffic
          signal datasets, combining statistical summaries with interactive
          bounding-box visualizations.
        </p>

        <BreakLine />
        <SubTitle level={3}>1. Selecting a Dataset</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`input_file, region_name = csv_region_selector()\nbold_color_print(f"Selected Region: {region_name}", "yellow")`}
        />
        <UnorderedList>
          <Li>Select city, neighborhood, or specific region.</Li>
          <Li>Focuses analysis on the chosen spatial context.</Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>2. Running DBSCAN Clustering</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`df = run_dbscan(input_file, eps=0.05, min_samples=5)`}
        />
        <p>
          - <InlineCode>eps</InlineCode>: max distance between points in a
          cluster.
          <br />- <InlineCode>min_samples</InlineCode>: minimum points to form a
          cluster.
          <br />- New <InlineCode>cluster</InlineCode> column added (-1
          indicates noise).
          <br />
          Reveals high-density areas versus isolated points.
        </p>

        <BreakLine />
        <SubTitle level={3}>3. Generating Statistical Summaries</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`largest_cluster = cluster_counts.idxmax()\ntop_three_clusters = cluster_counts.nlargest(3).index.tolist()\nnum_noise = (labels == -1).sum()`}
        />
        <UnorderedList>
          <Li>Largest/smallest clusters show signal concentration extremes.</Li>
          <Li>Top three clusters identify critical zones.</Li>
          <Li>Noise points highlight outliers or isolated signals.</Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>4. Bounding Box Calculation</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`min_lon, max_lon = cluster_data['lon'].min(), cluster_data['lon'].max()\nmin_lat, max_lat = cluster_data['lat'].min(), cluster_data['lat'].max()\nbbox_str = f"(min_lon={min_lon:.5f}, min_lat={min_lat:.5f}, max_lon={max_lon:.5f}, max_lat={max_lat:.5f})"`}
        />
        <p>
          Bounding boxes allow geospatial comparison and facilitate further
          analysis.
        </p>

        <BreakLine />
        <SubTitle level={3}>5. Visualizing Clusters on Maps</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`fig.add_trace(go.Scattermap(\n    lon=[min_lon, max_lon, max_lon, min_lon, min_lon],\n    lat=[min_lat, min_lat, max_lat, max_lat, min_lat],\n    mode='lines',\n    line=dict(color=color, width=2),\n    name=f'Cluster {label}'\n))`}
        />
        <p>
          Interactive map: zoom, pan, hover for cluster insights. <br />
          Color-coded clusters highlight spatial separations. <br />
          Largest bounding box can be easily identified for focused study.
        </p>

        <BreakLine />
        <SubTitle level={3}>6. Interactive Cluster Exploration</SubTitle>
        <CodeBlockFormatted
          language="python"
          code={`cluster_num = int(bold_input("Enter the cluster number to visualize (Q to quit)"))\nbbox_visualizer(bbox_str, cluster_str, input_file, region_name)`}
        />
        <p>
          Users can select individual clusters to inspect bounding boxes in
          detail.
        </p>

        <BreakLine />
        <SubTitle level={3}>7. Significance in Data Analysis</SubTitle>
        <UnorderedList>
          <Li>Unsupervised clustering detects natural spatial groupings.</Li>
          <Li>
            Quantitative summarization: largest/smallest clusters, noise points.
          </Li>
          <Li>Spatial bounding calculations define geospatial extents.</Li>
          <Li>Visualization bridges statistics with interactive maps.</Li>
          <Li>
            Interactive exploration enables iterative inspection and informed
            decision-making.
          </Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>Summary</SubTitle>
        <p>
          1. <Bold>Acquisition</Bold> → Fetch signals from OSM into GeoJSON.
          <br />
          2. <Bold>Manipulation</Bold> → Convert GeoJSON to CSV for analysis.
          <br />
          3. <Bold>Visualization</Bold> → Scatter plots and density maps reveal
          distributions.
          <br />
          4. <Bold>Data Analysis</Bold> → DBSCAN clustering identifies spatial
          patterns, computes metrics, and visualizes bounding boxes.
          <br />
        </p>
        <p>
          This stage demonstrates advanced data analysis, integrating clustering
          algorithms, statistical summaries, and interactive geospatial
          visualizations to inform urban traffic management, smart mobility
          planning, and city-wide infrastructure optimization.
        </p>
      </Section>
    </div>
  );
}
