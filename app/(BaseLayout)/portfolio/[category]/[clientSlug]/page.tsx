import getClient from "@/utils/cms/getClient";
import SideBarHeader from "./_components/SideBarHeader";
import { FeedKeyType } from "@/utils/cms/types";

type ClientPageProps = {
  params: { clientSlug: string; category: FeedKeyType };
};

const ClientPage = async ({ params }: ClientPageProps) => {
  const { clientInfo } = await getClient(params.clientSlug);
  return (
    <div className="bg-text-secondary animate-right-open w-full max-w-full  xl:max-w-[918px] 2xl:max-w-[934px] pl-4 md:pl-8">
      <SideBarHeader
        name={clientInfo.name}
        socials={[]}
        image={clientInfo.image}
        category={params.category}
      />
    </div>
  );
};

export default ClientPage;
