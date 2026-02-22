import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Globe from "react-globe.gl";
import Button from "@/components/Button";
import Alert from "@/components/Alert.jsx";
import useAlert from "../../hooks/useAlert";
import { aboutTranslations } from "../../constants/i18nConstants/aboutTranslations.js";
import { TechCarousel } from "./TechCarousel";
import { getAsset } from "@/utils/util";

const AboutSection = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const aboutData = aboutTranslations[lang] || aboutTranslations.en;

  const { alert, showAlert, hideAlert } = useAlert();

  const handleCopy = () => {
    navigator.clipboard.writeText("shankardhiya342@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.pointOfView(
      { lat: 9.9252, lng: 78.1198, altitude: 1.3 },
      1000,
    );

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
  }, []);

  const techIcons = [
    getAsset("assets/tech/automation.png"),
    getAsset("assets/tech/cucumber.png"),
    getAsset("assets/tech/database.png"),
    getAsset("assets/tech/etl.png"),
    getAsset("assets/tech/github.png"),
    getAsset("assets/tech/informatica.png"),
    getAsset("assets/tech/javascript.png"),
    getAsset("assets/tech/jira.jpg"),
    getAsset("assets/tech/playwright.png"),
    getAsset("assets/tech/qtest.jpg"),
    getAsset("assets/tech/salesforce.png"),
    getAsset("assets/tech/selenium.png"),
    getAsset("assets/tech/sql.png"),
    getAsset("assets/tech/testng.png"),
  ];

  return (
    <section className="c-space my-20" id="about">
      {alert.show && <Alert {...alert} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-6 gap-5">
        {/* GRID 1 */}
        <div className="lg:row-span-3">
          <div className="grid-container glass">
            <img src={getAsset("assets/grid1.png")} alt="about-profile" />
            <div>
              <p className="grid-headtext">{aboutData.greeting}</p>
              <p className="grid-subtext">{aboutData.intro}</p>
            </div>
          </div>
        </div>

        {/* GRID 2 */}
        <div className="lg:row-span-3">
          <div className="grid-container glass">
            <img src={getAsset("assets/grid21.png")} alt="tech-stack" />
            <div>
              <p className="grid-headtext">{aboutData.techTitle}</p>
              <p className="grid-subtext">{aboutData.techDesc}</p>
            </div>
          </div>
        </div>

        {/* GRID 3 — Globe */}
        <div className="lg:row-span-4">
          <div className="grid-container glass">
            <div className="rounded-3xl w-full h-[326px] flex justify-center items-center mt-36">
              <Globe
                ref={globeRef}
                height={326}
                width={426}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 9.9252,
                    lng: 78.1198,
                    text: "Trichy, India",
                    color: "red",
                    size: 2.5,
                  },
                ]}
                labelDotRadius={0.5}
                labelTextColor={() => "white"}
                onLabelClick={(label) => {
                  showAlert({
                    text: `📍 I'm from ${label.text}`,
                    type: "info",
                  });
                  setTimeout(() => hideAlert(), 3000);
                }}
              />
            </div>

            <div className="mt-8 space-y-2">
              <p className="grid-headtext">
                I work remotely across most time zones.
              </p>
              <p className="grid-subtext">
                I'm based in India, with remote work availability.
              </p>
              <a href="#contact" className="block mt-6">
                <Button name="Contact Me" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* GRID 4 */}
        <div className="lg:col-span-2 lg:row-span-3">
          <div className="grid-container glass">
            <img src={getAsset("assets/grid3.png")} alt="passion" />
            <div>
              <p className="grid-headtext">{aboutData.passionTitle}</p>
              <p className="grid-subtext">{aboutData.passionDesc}</p>
            </div>
          </div>
        </div>

        {/* GRID 5 */}
        <div className="lg:row-span-2">
          <div className="grid-container glass">
            <img
              src={getAsset("assets/grid4.png")}
              alt="contact"
              className="w-full h-[180px] object-cover rounded-xl"
            />
            <div className="space-y-3 mt-4">
              <p className="grid-subtext text-center">Contact Me</p>

              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={
                    hasCopied
                      ? getAsset("assets/tick.svg")
                      : getAsset("assets/copy.svg")
                  }
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-lg font-medium text-white">
                  shankardhiya342@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TECH CAROUSEL */}
        <div className="lg:col-span-3 glass rounded-lg p-4">
          <TechCarousel images={techIcons} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
