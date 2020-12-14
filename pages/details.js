import React from "react";

import DefaultLayout from "layouts";
import { Header } from "components";

import { Client } from "utils/prismicHelpers";
import { detailsPageStyles } from "styles";

const Details = ({ menu }) => {
  return (
    <DefaultLayout>
      <Header menu={menu} />
      <div className="details">
        <h1>Details Page</h1>
        <p>Learning to connect Next.js Project with Prismic Headless CMS.</p>
        <img src="images/vid_edit_screen.jpg" alt="Video editing" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio libero enim autem repudiandae laboriosam expedita, itaque sapiente assumenda asperiores cum atque illo similique harum!</p>
      </div>
      <style jsx global>
        {detailsPageStyles}
      </style>
    </DefaultLayout>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const menu = (await client.getSingle("menu", ref ? { ref } : null)) || {};

  return {
    props: {
      menu,
      preview
    }
  };
}

export default Details;
