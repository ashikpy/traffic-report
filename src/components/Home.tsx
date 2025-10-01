import {
  Bold,
  BreakLine,
  Li,
  LinkPage,
  MutedLink,
  Section,
  SubTitle,
  Title,
  UnorderedList,
} from "./utils/Formatters";

export default function Home() {
  return (
    <div className=" md:mt-10  container mx-auto p-6 max-w-3xl">
      <Title>RedAnalytics - Traffic Lights Analysis</Title>
      <Section>
        <p>Traffic Lights and Road Safety: A Data-Driven Initiative</p>
        <p>
          Every year, approximately 1.19 million people lose their lives in road
          traffic crashes, and 20 to 50 million more suffer non-fatal
          injuries—many of which result in long-term disabilities, according to
          the{" "}
          <MutedLink
            imageLink="https://www.who.int/apple-touch-icon.png"
            href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"
          >
            Road traffic injuries
          </MutedLink>
        </p>
        <p>
          These alarming figures and India's poor and geographically uneven
          traffic light infrastructure highlight the urgent need for effective
          road safety measures, where{" "}
          <Bold>traffic lights play a crucial role</Bold> in managing
          intersections and preventing collisions.
        </p>
        <SubTitle level={3}>Initiative</SubTitle>
        <p>
          We, Ashik D. & Adithi S. have launched an initiative focused on
          analyzing traffic light data with the following objectives:
        </p>
        <UnorderedList>
          <Li>
            <Bold>Comprehensive Data Collection of Traffic Lights</Bold> across
            India, with emphasis on accident-prone and high risk zones
          </Li>
          <Li>
            <Bold>Identify Congested vs Free-flowing Clusters</Bold> by studying
            traffic density at signal points using collected datasets
          </Li>
          <Li>
            <Bold>Visualize Traffic Patterns</Bold> using geospatial tools (heat
            maps, scatter plots) to highlight congestion hotspots and traffic
            flow
          </Li>
          <Li>
            <Bold>Analyze Traffic Patterns</Bold> around signalized
            intersections to understand peak hours and irregularities
          </Li>
        </UnorderedList>
        <SubTitle level={3}>Goal</SubTitle>
        <p>
          By uncovering patterns through data analysis, we aim to enhance
          traffic light planning, support smarter urban infrastructure, and
          ultimately contribute to saving lives through better signal-based road
          management. We built a concise Python script for processing and
          visualization, with the full workflow and code available on our
          GitHub.
        </p>
        <p>
          It is an open source project and you can contribute too by accessing
          the repo{" "}
          <MutedLink
            imageLink="https://github.com/apple-touch-icon.png"
            href="https://github.com/ashikpy/traffic_signal_location_analysis/"
          >
            here!
          </MutedLink>
        </p>
        <BreakLine />
        <SubTitle level={3}>Documentation</SubTitle>
        <div className="space-y-2">
          <LinkPage
            text="Data Collection & Manipulation"
            route="/data-collection"
          />
          <LinkPage text="Data Visualization" route="/data-visualization" />
          <LinkPage text="Data Analysis" route="/data-analytics" />
          <LinkPage
            text="Future Implementation"
            route="/future-implementation"
          />
          <LinkPage text="Analysis Report" route="/analysis-report" />
        </div>
        <BreakLine />
        <SubTitle level={3}>Authors</SubTitle>
        <div className="space-y-5 md:space-y-0 md:flex  items-center gap-10 mt-4 ">
          <div className="flex  gap-4">
            <img
              src="/ash.jpeg"
              alt=""
              className="size-24 border-2 rounded-full p-1 "
            />
            <div className="mt-2">
              <p className="!text-xl font-semibold">Ashik D.</p>
              <p className="!text-sm font-medium">B. Tech. AI&DS</p>
              <p className="opacity-80 !text-xs mt-1">Analysis Script Author</p>
            </div>
          </div>
          <div className="flex  gap-4">
            <img
              src="/adithi.JPG"
              alt=""
              className="size-24 border-2 rounded-full p-1 "
            />
            <div className="mt-2">
              <p className="!text-xl font-semibold">Adithi S.</p>
              <p className="!text-sm font-medium">B. Tech. AI&DS</p>
              <p className="opacity-80 !text-xs mt-1">Analysis Report Author</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
