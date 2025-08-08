import { useState } from "react";

const UploadSection = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Upload an Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mb-4 p-2 border rounded bg-white"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Analyze Image
        </button>

        {result && (
          <pre className="mt-6 text-left bg-white p-4 rounded shadow overflow-auto">
            {result}
          </pre>
        )}
      </div>
    </section>
  );
};

export default UploadSection;
