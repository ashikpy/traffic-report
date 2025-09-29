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
            <Li>API Fetch & OSM Data Retrieval</Li>
            <Li>Data Response & Abstraction</Li>
            <Li>Visualization of Traffic Light Coordinates</Li>
          </UnorderedList>
        </div>
        <p>Multiple Visualization Outputs</p>
        <UnorderedList>
          <Li>Scatter Plot</Li>
          <Li>Bounding Box Visualization</Li>
          <Li>Heat Map</Li>
        </UnorderedList>
        <BreakLine />
        <SubTitle level={3}>Visualization</SubTitle>
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
          <img src="/Telugana.png" alt="" className="h-full " />
          <img src="/Maharastra.png" alt="" className="h-full " />
          <img src="/Karnataka.png" alt="" className="h-full " />
          <img src="/Tamilnadu.png" alt="" className="h-full " />
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
