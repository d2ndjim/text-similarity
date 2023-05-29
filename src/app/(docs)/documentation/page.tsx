import DocumentationTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import 'simplebar-react/dist/simplebar.min.css'

const page = () => {
  return (
    <div className="container mx-auto mt-12 max-w-7xl">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v2/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
