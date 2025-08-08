import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import JoinMission from "@/components/JoinMission";
import FounderQuote from "@/components/FounderQuote";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Upload failed:", error);
      setResult("Error uploading image.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Upload Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Upload an Image</h2>

          <label
            htmlFor="image-upload"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Select an image to analyze
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImage(file);
              setPreview(file ? URL.createObjectURL(file) : null);
              setResult("");
            }}
            className="mb-6 p-2 border rounded bg-white w-full max-w-md mx-auto"
          />

          {preview && (
            <div className="mb-6">
              <img
                src={preview}
                alt="Uploaded preview"
                className="max-w-full h-auto rounded-xl shadow-md mx-auto"
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Analyze Image
          </button>

          {result && (
            <pre className="mt-8 text-left bg-white p-4 rounded-xl shadow overflow-auto max-h-96">
              {result}
            </pre>
          )}
        </div>
      </section>

      <HowItWorks />
      <AboutSection />
      <TechSection />
      <JoinMission />
      <FounderQuote />
      <Footer />
    </div>
  );
};

export default Index;
