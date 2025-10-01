import {
  Bold,
  BreakLine,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
  InlineCode,
  CodeBlockFormatted,
} from "./utils/Formatters";

export default function AnalysisReport() {
  return (
    <div className="mt-10 container mx-auto p-6 max-w-3xl">
      <Title>Analysis Report</Title>

      <Section>
        <UnorderedList>
          <Li>
            For this research we have chosen India as the focus of our analysis
            as it provides valuable insights into challenges in road safety in a
            geographically and demographically diverse country.
          </Li>
          <Li>
            We have incorporated all the code we have discussed earlier into a
            simple and streamlined Python CLI Program as shown below :{" "}
          </Li>
        </UnorderedList>
        <CodeBlockFormatted language="bash" code={codes[0]} />
        <BreakLine />
        <SubTitle level={3}>Working Flow</SubTitle>
        <div className="flex gap-4 ">
          <img src="working-flow.png" alt="" className="w-1/2 rounded-md" />
          <UnorderedList>
            <Li>City Name & Query Input</Li>
            <p>
              User provides a City Name and a Query specifying the required
              data.
            </p>
            <Li>API Fetch & OSM Data Retrieval</Li>
            <p>
              System performs an API Fetch to retrieve geospatial data from
              OpenStreetMap (OSM).
            </p>
            <Li>Data Response & Abstraction</Li>
            <p>GeoJSON Data Response is received.</p>
            <p>
              Data is converted through Abstraction to CSV for simplified
              analysis.
            </p>
            <Li>Visualization of Traffic Light Coordinates</Li>
            <p>
              Processed data is visualized to highlight traffic light positions.
            </p>
          </UnorderedList>
        </div>
        <p>Multiple Visualization Outputs</p>
        <UnorderedList>
          <Li>Scatter Plot – shows individual traffic light points.</Li>
          <Li>Bounding Box Visualization – highlights coverage area.</Li>
          <Li>Heat Map – illustrates density and concentration.</Li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={2}>Visualization</SubTitle>
        <SubTitle level={3}>1. Scatter Plot</SubTitle>
        <p>
          Visualization helps to understand the distributions and here we used
          it to analyze the geographical density of traffic signals in India.
        </p>
        <img src="/India.png" className="rounded-lg" />
        <UnorderedList>
          <Li>In India, Traffic Lights signals are only dense in cities</Li>
          <Li>
            This uneven distribution leaves all other areas poorly regulated and
            more prone to accidents
          </Li>
        </UnorderedList>
        <p>
          Let us Have a close look at the states which have a bigger traffic
          density
        </p>
        <div className="grid grid-cols-2 gap-5">
          <img src="/Telugana.png" alt="" className="h-full aspect-video" />
          <img src="/Maharastra.png" alt="" className="h-full aspect-video" />
          <img src="/Karnataka.png" alt="" className="h-full aspect-video" />
          <img src="/Tamilnadu.png" alt="" className="h-full aspect-video" />
        </div>
        <UnorderedList>
          <li>
            As we can see in these states, there are only certain regions (city
            areas) with high traffic density.
          </li>
          <li>
            Fig 1.1 - Only Hyderabad is dense with Traffic Lights in whole
            Telangana
          </li>
          <li>
            Fig 1.2 - Only Chennai is dense with Traffic Lights in whole Tamil
            Nadu
          </li>
          <li>
            Fig 1.3 - Only Bangalore is dense with Traffic Lights in whole
            Karnataka
          </li>
          <li>
            Fig 1.4 - Only Mumbai is dense with Traffic Lights in whole
            Maharashtra
          </li>
          <li>
            ALl the collect data has been saved in the form of CSV as shown
          </li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={3}>2. Heat Map</SubTitle>We use clustering to identify
        geographically diverse regions of traffic lights and analyze variations
        in their density across regions.
        <img src="/india-heatmap.png" alt="" />
        <p>
          From the heat map analysis, it is quite eminent that as compared to
          North India, South India has higher traffic signal density.
        </p>
        <SubTitle level={2}>Analysis</SubTitle>
        <p>
          We use clustering to identify geographically diverse regions of
          traffic lights and analyze variations in their density across regions.
        </p>
        <SubTitle level={3}>DBSCAN</SubTitle>
        <div className="flex gap-10 mt-5">
          <img src="/dbdb.png" alt="" className="w-1/2" />
          <div className="w-1/2 space-y-2.5">
            <p>
              DBSCAN is better than others because it finds clusters of{" "}
              <Bold>any shape</Bold>, doesn’t need the number of clusters
              beforehand, and can **detect noise/outliers** effectively.
            </p>
            <p>
              K-Means fails with non-spherical clusters and outliers, while
              hierarchical methods are less scalable.
            </p>
          </div>
        </div>
        <BreakLine />
        <SubTitle level={3}>CLI Statistics Output</SubTitle>
        <CodeBlockFormatted language="bash" code={codes[1]} />
        <UnorderedList>
          <Li>Biggest Cluster - Cluster 8 (Mumbai)</Li>
          <Li>Biggest Bounding Box - Cluster 0 (Kerala) </Li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={3}>Population vs Traffic Density</SubTitle>
        <div className="flex gap-10 mt-10">
          <img src="/night-light.jpeg" alt="" className="w-full" />
          <img src="/india-plain.png" alt="" className="w-full object-cover" />
        </div>
        <p>
          By comparison, it is clear that while the night lights imagery
          highlights India's high population density, the scatter plot reveals
          that traffic light signals are far less widespread, indicating gaps in
          signal coverage.
        </p>
        <SubTitle level={2}>Conclusion</SubTitle>
        <p>
          1. Urban-Centric Infrastructure : traffic light systems in India are
          heavily concentrated in cities.
        </p>
        <p>
          2. Limited Geographic Coverage : signals are not widely distributed
          across rural and semi-urban areas.
        </p>
        <p>
          3. Regional Disparities : South India exhibits higher traffic light
          density compared to the northern regions of our country.
        </p>
        <div className="flex gap-10">
          <img src="/Kerala.png" className="w-1/2" alt="" />
          <p className="w-1/2">
            Notable Exception : Kerala stands out with a more widespread and
            evenly distributed traffic light network across both cities and semi
            urban areas.
          </p>
        </div>
      </Section>
    </div>
  );
}

const codes = [
  `╭─────────────────────────────────────────╮
│ ▶ Welcome to Traffic Data Analysis Tool│
╰─────────────────────────────────────────╯
╭──── Available Scripts ────╮
│ 1. Get GeoJSON by name    │
│ 2. Convert GeoJSON to CSV │
│ 3. Merge CSVs             │
╰───────────────────────────╯
╭──── Available Visualizations ─────╮
│ 4. Visualize Scatter Plot         │
│ 5. Visualize Heatmap              │
│ 6. Visualize Clusters with DBSCAN │
│ 7. Visualize States               │
╰────────────────────────────────────╯
Enter 0 or any non-number to exit.
Select an option: `,

  `Selected Region: India

           Cluster Statistics           
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃ Metric             ┃ Value           ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ Largest Cluster    │ 8 (2347 points) │
├────────────────────┼─────────────────┤
│ Top 3 Clusters     │ 8, 9, 1         │
├────────────────────┼─────────────────┤
│ Smallest Cluster   │ 10 (5 points)   │
├────────────────────┼─────────────────┤
│ Number of Clusters │ 68              │
├────────────────────┼─────────────────┤
│ Noise Points       │ 150             │
└────────────────────┴─────────────────┘

                                    Top 3 Bounding Boxes                                     
┏━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Rank ┃ Cluster ┃ Bounding Box                                                             ┃
┡━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ 1    │ 8       │ (min_lon=72.79426, min_lat=18.91235, max_lon=73.16704, max_lat=19.47149) │
├──────┼─────────┼──────────────────────────────────────────────────────────────────────────┤
│ 2    │ 9       │ (min_lon=77.02454, min_lat=28.31748, max_lon=77.48397, max_lat=28.97742) │
├──────┼─────────┼──────────────────────────────────────────────────────────────────────────┤
│ 3    │ 1       │ (min_lon=77.48506, min_lat=12.72596, max_lon=77.82476, max_lat=13.61647) │
└──────┴─────────┴──────────────────────────────────────────────────────────────────────────┘
- Largest Bounding Box: Cluster 0 with area 3.208162`,
];
