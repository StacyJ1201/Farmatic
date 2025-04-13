import React from "react";
import MoistureDisplay from "./components/MoistureDisplay";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <MoistureDisplay />
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} - Soil Moisture Monitoring System</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
