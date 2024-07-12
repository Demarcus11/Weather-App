import { useEffect, useState } from "react";
import WeatherChart from "./components/WeatherChart";

function App() {
  const [selectedDay, setSelectedDay] = useState("today");

  useEffect(() => {
    document.body.style.backgroundColor = "powderblue";
    document.body.style.display = "grid";
    document.body.style.placeContent = "center";
    document.body.style.height = "100dvh";
    document.body.style.padding = "5rem";
  }, []);

  return (
    <>
      <main className="bg-white p-4 desktop:p-8 rounded-lg grid gap-2">
        <div className="flex items-center gap-2">
          <p className="min-w-fit">Your city</p>
          <input
            className="outline outline-1 outline-gray-500 p-1 pl-2 w-full desktop:w-fit rounded-sm"
            type="text"
            placeholder="e.g. London"
          />
        </div>

        <div className="grid desktop:grid-cols-3 gap-4 desktop:gap-24 mt-4 desktop:mt-12">
          <div className="place-self-center">
            <div className="grid gap-2 desktop:gap-8">
              <time className="text-center block font-light" dateTime="2024-03-11">
                5:05 PM, Mon, Nov 23, 2024
              </time>

              <div className="flex items-center gap-4 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="text-7xl desktop:text-8xl"
                >
                  <g fill="currentColor">
                    <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272a3.5 3.5 0 0 0-.65-.824a1.5 1.5 0 0 0-.789-2.896a.5.5 0 0 1-.627-.421a3 3 0 0 0-5.22-1.625a5.6 5.6 0 0 0-1.276.088a4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5" />
                    <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873a.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953a.5.5 0 0 1-.624-.492z" />
                  </g>
                </svg>
                <p className="text-4xl desktop:text-5xl font-bold">
                  72 <span className="text-xl align-super -ml-2">°F</span>
                </p>
              </div>
              <p className="text-center text-xl desktop:text-3xl font-bold">Cloudy</p>
            </div>

            <div className="flex items-center gap-4 justify-center mt-4 desktop:mt-8">
              <div className="border-r desktop:border-none border-black pr-4">
                <p>Humidity</p>
                <p className="text-center">45%</p>
              </div>
              <div>
                <p>Wind speed</p>
                <p className="text-center">19.2 km/j</p>
              </div>
            </div>
          </div>

          <div className="desktop:col-start-2 desktop:col-span-2">
            <p>Temperature</p>

            <WeatherChart />

            <div className="flex items-center flex-wrap gap-4 mt-4">
              <label
                htmlFor="today"
                className={`p-4 desktop:p-6 rounded-md cursor-pointer ${
                  selectedDay === "today" ? "bg-blue-400 text-white" : "text-black"
                }`}
              >
                <input
                  className="absolute opacity-0"
                  type="radio"
                  name="day"
                  id="today"
                  value="today"
                  checked={selectedDay === "today"}
                  onChange={(e) => setSelectedDay(e.target.value)}
                />
                <div>
                  <p className="text-center">Today</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="mx-auto text-3xl"
                  >
                    <g fill="currentColor">
                      <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272a3.5 3.5 0 0 0-.65-.824a1.5 1.5 0 0 0-.789-2.896a.5.5 0 0 1-.627-.421a3 3 0 0 0-5.22-1.625a5.6 5.6 0 0 0-1.276.088a4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5" />
                      <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873a.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953a.5.5 0 0 1-.624-.492z" />
                    </g>
                  </svg>
                  <div className="text-center">
                    <p>Humidity</p>
                    30%
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
