import axios from "axios";

// pages/ssr.js
export default function SSR({ formattedDate }) {
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <a href="/">View a static page.</a>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.request({
    url: "https://uowkd9faw9.execute-api.eu-west-2.amazonaws.com/staging/items"
  });
  console.log("Got response...", response.data);
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}