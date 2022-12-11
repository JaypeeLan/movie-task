import React from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, error, isLoading } = useFetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=5e386377`
  );

  return (
    <div>
      {/* ----------------------- */}
      <nav>
        <div>
          <p>MyTestApp</p>
        </div>
      </nav>
      {/* ----------------------------- */}
      <section id="hero">
        <div className="heroText">
          <p> Watch something incredible.</p>
        </div>
      </section>
      {/* --------------------------------- */}
      <div className="search">
        <p>Search</p>
        <input type="text" name="text" id="text" />
      </div>

      <section id="display">
        {!!error ? (
          <p>{error}.</p>
        ) : isLoading ? (
          <div style={{ margin: "0 auto" }}>
            <p>Loading... Please wait</p>
          </div>
        ) : (
          // ----------------------------//
          <>
            {data && (
              <>
                <Cards moviTitle={data.Title} />
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
