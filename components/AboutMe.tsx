import WorkInProgress from "./WorkInProgress";

const email = "hey@jamiedavenport.dev";

export default function AboutMe() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">👋 Hey, I&apos;m Jamie</h1>
      <div className="space-y-5">
        <WorkInProgress />
        <p className="text-lg">
          I am a Software Engineer based in London, UK. Currently changing the
          way the world deals with death at Farewill. Previously I worked at
          Infinity Works and THG.
        </p>
        <p className="text-lg">
          I grew up in Yorkshire and went on to study Computer Science at the
          University of Cambridge, graduating with a first.
        </p>
        <p className="text-lg">
          Shoot me an email at <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </>
  );
}
