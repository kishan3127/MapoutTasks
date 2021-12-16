function Cogs() {
  return (
    <div className="parent-wrapper">
      <div className="cogs flex">
        <div className="single-cog relative">
          <div className="cog-image">
            <img src="./images/cog.png" alt="Cog" />
          </div>
          <div className="abosolute cog-content">
            <h1 className="title theme-color">Personality</h1>
            <div className="description">
              <ul className="lists">
                <li>Focuses on facts</li>
                <li>Decides based on logic</li>
                <li>Spontaneus Extrovert </li>
                <li>Extrovert </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-cog relative spinAlt">
          <div className="cog-image">
            <img src="./images/cog-alt.png" alt="Cog" />
          </div>
          <div className="abosolute cog-content">
            <h1 className="title theme-color">Interests</h1>
            <div className="description">
              <ul className="lists">
                <li>Analysing</li>
                <li>Reseraching </li>
                <li>Expermenting </li>
                <li>Problem-solving </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cogs;
