import React, { useEffect, useState } from "react";
import axios from "axios";

const MoistureDisplay = () => {
  const [moistureLevel, setMoistureLevel] = useState(null);
  const [moistureStatus, setMoistureStatus] = useState("loading");
  const [loading, setLoading] = useState(true);

  const dryImage =
    "https://images.unsplash.com/photo-1592521899562-172a1fda8059?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Desert image
  const wetImage =
    "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Rain image
  const idealImage =
    "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80"; // Ideal garden soil

  // Add inline styles for components
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f7f9fc",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    backgroundColor: "#2e7d32", // Rich forest green
    color: "white",
    padding: "1.5rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const mainContentStyle = {
    padding: "2rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/sensor-data"
        );

        if (response.data && response.data.length > 0) {
          const latestReading = response.data[0];
          const moistureValue = latestReading.moistureLevel;

          setMoistureLevel(moistureValue);

          if (moistureValue < 300) {
            setMoistureStatus("dry");
          } else if (moistureValue > 700) {
            setMoistureStatus("wet");
          } else {
            setMoistureStatus("ideal");
          }

          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching moisture data:", err);
        setLoading(false);
      }
    };

    fetchLatestData();
    const interval = setInterval(fetchLatestData, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get content based on moisture status
  const getContent = () => {
    switch (moistureStatus) {
      case "dry":
        return {
          image: dryImage,
          message: "TOO DRY",
          color: "#d32f2f", // Red
          bgColor: "#ffebee", // Light red background
          circleColor: "#d32f2f",
          description: "This soil is too dry for optimal plant growth.",
          suggestion:
            "You need to water consistently for the next week and add moisture-retaining organic matter to improve soil structure. Consider using mulch to prevent rapid evaporation.",
        };
      case "wet":
        return {
          image: wetImage,
          message: "TOO WET",
          color: "#1565c0", // Blue
          bgColor: "#e3f2fd", // Light blue background
          circleColor: "#1565c0",
          description: "This soil has excessive moisture content.",
          suggestion:
            "Allow the soil to dry out before planting. Improve drainage by adding sand or grit, and avoid watering until the top 2 inches of soil feel dry to touch. Consider raised beds to prevent waterlogging.",
        };
      case "ideal":
        return {
          image: idealImage,
          message: "PERFECT",
          color: "#2e7d32", // Green
          bgColor: "#e8f5e9", // Light green background
          circleColor: "#2e7d32",
          description: "This soil has ideal moisture for planting.",
          suggestion:
            "Perfect time to plant! Maintain this moisture level with regular watering when the top inch of soil becomes dry. Add balanced fertilizer to support healthy growth as plants establish.",
        };
      default:
        return {
          image: null,
          message: "Loading...",
          color: "#757575",
          bgColor: "#f5f5f5",
          circleColor: "#9e9e9e",
          description: "Getting the latest soil moisture data...",
          suggestion: "",
        };
    }
  };

  const content = getContent();

  // Style for moisture indicator circle
  const circleStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: content.circleColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    margin: "0 auto 1.5rem auto",
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Soil Moisture Monitor
        </h1>
        <p>Real-time analysis of your soil conditions</p>
      </header>

      {/* Main content */}
      <main style={mainContentStyle}>
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* Side by side layout */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {/* Left side: Image */}
            <div
              style={{
                flex: "1 1 350px",
                position: "relative",
                minHeight: "300px",
              }}
            >
              {content.image && (
                <div style={{ position: "relative", height: "100%" }}>
                  <img
                    src={content.image}
                    alt={content.message}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      minHeight: "300px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h2
                      style={{
                        color: "white",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        borderRadius: "8px",
                      }}
                    >
                      {content.message}
                    </h2>
                  </div>
                </div>
              )}
            </div>

            {/* Right side: Reading and suggestion */}
            <div
              style={{
                flex: "1 1 350px",
                padding: "2rem",
                backgroundColor: content.bgColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Circle indicator */}
              <div style={circleStyle}>{loading ? "..." : moistureLevel}</div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  textAlign: "center",
                  color: content.color,
                }}
              >
                {content.description}
              </h3>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#424242",
                  }}
                >
                  Suggested Action:
                </h4>
                <p style={{ lineHeight: "1.6", color: "#616161" }}>
                  {content.suggestion}
                </p>

                {!loading && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid #e0e0e0",
                      fontSize: "0.9rem",
                      color: "#757575",
                    }}
                  >
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        Current reading:
                      </span>{" "}
                      {moistureLevel}
                      <span style={{ display: "block", marginTop: "0.25rem" }}>
                        Updated at {new Date().toLocaleTimeString()}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoistureDisplay;
