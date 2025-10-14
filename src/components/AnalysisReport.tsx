import {
  Bold,
  BreakLine,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
  CodeBlockFormatted,
} from "./utils/Formatters";
import NextPageNavigation from "./NextPageNavigation";
import ClickableImage from "./ClickableImage";

export default function AnalysisReport() {
  return (
    <div className="md:mt-10 container mx-auto p-6 max-w-3xl">
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
        <div className=" md:flex  gap-4 ">
          <img
            src="working-flow.png"
            alt=""
            className="md:w-1/2 my-10 md:my-0 rounded-md"
          />
          <UnorderedList>
            <Li className="text-lg font-semibold">City Name & Query Input</Li>
            <p className="!leading-6">
              User provides a City Name and a Query specifying the required
              data.
            </p>
            <Li className="text-lg font-semibold">
              API Fetch & OSM Data Retrieval
            </Li>
            <p className="!leading-6">
              System performs an API Fetch to retrieve geospatial data from
              OpenStreetMap (OSM).
            </p>
            <Li className="text-lg font-semibold">
              Data Response & Abstraction
            </Li>
            <p>GeoJSON Data Response is received.</p>
            <p className="!leading-6">
              Data is converted through Abstraction to CSV for simplified
              analysis.
            </p>
            <Li className="text-lg font-semibold">
              Visualization of Traffic Light Coordinates
            </Li>
            <p className="!leading-6">
              Processed data is visualized to highlight traffic light positions.
            </p>
          </UnorderedList>
        </div>
        <p>Multiple Visualization Outputs</p>
        <UnorderedList>
          <Li>
            <Bold>Scatter Plot</Bold> – shows individual traffic light points.
          </Li>
          <Li>
            <Bold>Bounding Box Visualization</Bold> - highlights coverage area.
          </Li>
          <Li>
            <Bold>Heat Map</Bold> – illustrates density and concentration.
          </Li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={2}>Visualization</SubTitle>
        <SubTitle level={3}>1. Scatter Plot</SubTitle>
        <p>
          Visualization helps to understand the distributions and here we used
          it to analyze the geographical density of traffic signals in India.
        </p>
        <ClickableImage 
          src="/India.png" 
          alt="Traffic Light Distribution across India" 
          className="rounded-lg" 
        />
        <UnorderedList>
          <Li>In India, Traffic Lights signals are only dense in cities</Li>
          <Li>
            This uneven distribution leaves all other areas poorly regulated and
            more prone to accidents
          </Li>
        </UnorderedList>
        <p>
          <Bold>
            Let us Have a close look at the states which have a bigger traffic
            density
          </Bold>
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <ClickableImage src="/Telugana.png" alt="Traffic Light Distribution in Telangana" className="h-full aspect-video" />
          <ClickableImage src="/Maharastra.png" alt="Traffic Light Distribution in Maharashtra" className="h-full aspect-video" />
          <ClickableImage src="/Karnataka.png" alt="Traffic Light Distribution in Karnataka" className="h-full aspect-video" />
          <ClickableImage src="/Tamilnadu.png" alt="Traffic Light Distribution in Tamil Nadu" className="h-full aspect-video" />
        </div>
        <UnorderedList>
          <li>
            As we can see in these states, there are only certain regions (city
            areas) with high traffic density.
          </li>
          <UnorderedList>
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
          </UnorderedList>
        </UnorderedList>
        <UnorderedList>
          <li>
            ALl the collect data has been saved in the form of CSV as shown
          </li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={3}>2. Heat Map</SubTitle>
        <p>
          We use clustering to identify geographically diverse regions of
          traffic lights and analyze variations in their density across regions.
        </p>
        <ClickableImage 
          src="/india-heatmap.png" 
          alt="Traffic Light Density Heatmap of India" 
        />
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
        <div className="md:flex gap-4 mt-5">
          <ClickableImage 
            src="/dbdb.png" 
            alt="DBSCAN Clustering Analysis" 
            className="my-10 md:my-0 md:w-1/2" 
          />
          <div className="md:w-1/2 space-y-2.5">
            <UnorderedList>
              <Li>
                DBSCAN is better than others because it finds clusters of{" "}
                <Bold>any shape</Bold>, doesn’t need the number of clusters
                beforehand, and can <Bold>detect noise/outliers</Bold>{" "}
                effectively.
              </Li>
              <Li>
                K-Means fails with non-spherical clusters and outliers, while
                hierarchical methods are less scalable.
              </Li>
            </UnorderedList>
          </div>
        </div>
        <BreakLine />
        <SubTitle level={3}>CLI Statistics Output</SubTitle>
        <CodeBlockFormatted language="bash" code={codes[1]} />
        <UnorderedList>
          <Li>
            <Bold>Biggest Cluster</Bold> - Cluster 8 (Mumbai)
          </Li>
          <Li>
            <Bold>Biggest Bounding Box</Bold> - Cluster 0 (Kerala){" "}
          </Li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={3}>Population vs Traffic Density</SubTitle>
        <div className="md:flex gap-10 mt-10">
          <ClickableImage 
            src="/night-light.jpeg" 
            alt="India Night Light Satellite Image showing Population Density" 
            className="w-full" 
          />
          <ClickableImage 
            src="/india-plain.png" 
            alt="India Traffic Light Distribution Map" 
            className="w-full object-cover" 
          />
        </div>
        <p>
          By comparison, it is clear that while the night lights imagery
          highlights India's high population density, the scatter plot reveals
          that traffic light signals are far less widespread, indicating gaps in
          signal coverage.
        </p>
        <BreakLine />
        <SubTitle level={2}>Conclusion</SubTitle>
        <div className="space-y-3 ml-4">
          <p>
            <Bold>1. Urban-Centric Infrastructure :</Bold> traffic light systems
            in India are heavily concentrated in cities.
          </p>
          <p>
            <Bold>2. Limited Geographic Coverage :</Bold> signals are not widely
            distributed across rural and semi-urban areas.
          </p>
          <p>
            <Bold>3. Regional Disparities :</Bold> South India exhibits higher
            traffic light density compared to the northern regions of our
            country.
          </p>
        </div>
        <div className="md:flex gap-8">
          <ClickableImage 
            src="/Kerala.png" 
            alt="Traffic Light Distribution in Kerala - Notable Exception" 
            className="md:w-1/2" 
          />
          <p className="md:w-1/2 mt-8 md:mt-0">
            <Bold>Notable Exception :</Bold> Kerala stands out with a more
            widespread and evenly distributed traffic light network across both
            cities and semi urban areas.
          </p>
        </div>
        <BreakLine />
      </Section>
      <NextPageNavigation currentPath="/analysis-report" />
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
