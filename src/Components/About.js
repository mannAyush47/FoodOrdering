const About = () => {
  return (
    <div style={{ margin: "80px auto 0px" }}>
      <h1 className="font-bold text-3xl p-4 m-4">About</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="w-3/12 border border-black p-2 m-2" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
