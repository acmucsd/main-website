import Number from "src/components/Statistic";

const HomeJoinUs: React.FC = () => {
  return (
    <section className="home__join-us">
      <div className="home__join-us__grid">
        <div className="home__join-us__grid__header">
          <h1>Join us.</h1>
          <p>ACM at UCSD is an inclusive community of students passionate about technology.</p>
        </div>
        <div className="home__join-us__grid__numbers">
          <Number color="#FF6F6F" description="ucsd members" extension="+" number={1000} />
          <Number color="#F9A857" description="annual events" extension="+" number={120} />
          <Number color="#51C0C0" description="cups of boba" extension="+" number={850} />
        </div>
      </div>
    </section>
  );
};

export default HomeJoinUs;
