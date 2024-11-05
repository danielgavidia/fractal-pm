import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return <div>Epic: {params.slug}</div>;
};

export default Page;
