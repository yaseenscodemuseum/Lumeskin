import * as React from 'react';
import { useState } from 'react';

interface DetectionBox {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
}

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [boxes, setBoxes] = useState<DetectionBox[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setBoxes([]); // Clear previous results
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setBoxes(data.boxes || []);
      console.log('Detection Result:', data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="glass-card section-padding glow-effect max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--foreground))]">
        Upload an Image for Analysis
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-[hsl(var(--foreground))] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[hsl(var(--primary))] file:text-[hsl(var(--primary-foreground))] hover:file:bg-[hsl(var(--primary-glow))]"
      />

      {previewUrl && (
        <div className="relative inline-block mb-6">
          <img
            src={previewUrl}
            alt="Preview"
            className="rounded-lg max-w-full border border-[hsl(var(--border))]"
          />
          {boxes.map((box, index) => (
            <div
              key={index}
              className="absolute border-2"
              style={{
                top: box.y,
                left: box.x,
                width: box.width,
                height: box.height,
                borderColor: 'hsl(260 85% 85%)',
                boxShadow: '0 0 20px hsl(214 100% 65% / 0.3)',
              }}
            >
              {box.label && (
                <span className="absolute top-0 left-0 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs px-1 rounded-bl">
                  {box.label}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        className="btn-gradient w-full text-center"
      >
        Analyze Image
      </button>
    </div>
  );
};

export default ImageUpload;
