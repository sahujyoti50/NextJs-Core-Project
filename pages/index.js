import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

const data = [
  {
    id: "t1",
    name: "Hungarian Parliament Building",
    imgUrl:'/parli.jpg'
  },
  {
    id: "t2",
    name: "Buda Castle",
    imgUrl:'/castel.jpg'
      
  },
  {
    id: "t3",
    name: "Heroes' Square",
    imgUrl:
    '/heroes.jpg'
  },
];
export default function Home(props) {
  const router = useRouter();
  return (
    <div className="body">
      <div>
        <Head>
          <title>nextjs</title>
        </Head>
      </div>
      {props.meetup.map((datas) => {
        return (
          <ol key={datas.id}>
            <li>{datas.name}</li>
            <Image
              src={datas.imgUrl}
              alt={datas.name}
              width={500}
              height={400}
            />
            <button
              onClick={() => {
                router.push("/" + datas.name);
              }}
            >
              Show Details
            </button>
          </ol>
        );
      })}
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      meetup: data,
    },
    revalidate: 3, //to reset the server in every 3 seconds
  };
}
