import { useRouter } from "next/router";
const meetupName = () => {
  const router = useRouter();
  const meetup = router.query.meetupName;
  return (
    <>
      <p>{meetup}</p>
    </>
  );
};
export default meetupName;
