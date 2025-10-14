import {
  Bold,
  BreakLine,
  Li,
  Section,
  SubTitle,
  Title,
  UnorderedList,
} from "./utils/Formatters";
import NextPageNavigation from "./NextPageNavigation";

export default function FutureImplementation() {
  return (
    <div className="md:mt-10 container mx-auto p-6 max-w-3xl">
      <Title>Future Work: Urban Analysis with Computer Vision</Title>

      <Section>
        <p>
          In future work, we propose a framework for urban analysis using{" "}
          <Bold>OpenCV-based computer vision models</Bold>
          to detect cities from <Bold>nighttime satellite imagery</Bold>. The
          methodology leverages the spatial distribution of{" "}
          <Bold>night lights</Bold> to estimate urban extent and activity.
        </p>

        <BreakLine />
        <SubTitle level={3}>Proposed Pipeline</SubTitle>
        <UnorderedList>
          <Li>
            <Bold>Image Preprocessing</Bold>: denoising, contrast enhancement,
            and histogram equalization.
          </Li>
          <Li>
            <Bold>Segmentation</Bold>: Otsu’s thresholding and adaptive
            thresholding to isolate illuminated regions.
          </Li>
          <Li>
            <Bold>Feature Extraction</Bold>: contour analysis and connected
            component labeling to identify urban areas.
          </Li>
          <Li>
            <Bold>Clustering and Classification</Bold>: K-Means or DBSCAN for
            grouping, followed by SVM or Random Forest for categorizing regions
            based on urban intensity.
          </Li>
        </UnorderedList>

        <BreakLine />
        <SubTitle level={3}>Expected Outcomes</SubTitle>
        <p>
          This approach is expected to enable{" "}
          <Bold>quantitative urban mapping</Bold>, enhance{" "}
          <Bold>smart city planning</Bold>, and provide a scalable framework for{" "}
          <Bold>real-time monitoring of urban expansion</Bold>, helping planners
          make informed decisions for overall development.
        </p>
      </Section>
      <NextPageNavigation currentPath="/future-implementation" />
    </div>
  );
}
